'use client';

import {type ChangeEvent, type FormEvent, useEffect} from 'react';
import {ValidationError, object, string} from 'yup';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import type {IconDefinition} from '@fortawesome/free-solid-svg-icons';
import {mainSocket} from '@utils/socket';
import {sanitize} from 'isomorphic-dompurify';
import useApp from '@hooks/main/use-app';
import useHome from '@hooks/main/use-home';

type InputProps = {
  placeholder: string;
  sendIcon: IconDefinition;
};

type AskChatbotReq = {
  input: string;
};

type AskChatbotRes = {
  success: boolean;
  error: {
    code: number;
    message: string;
  };
  data: {
    reply: string;
  };
};

const Input = ({placeholder, sendIcon}: InputProps): JSX.Element => {
  const {online} = useApp();
  const {chatbot, setChatbot} = useHome();

  const handleUpdateInput = (event: ChangeEvent<HTMLInputElement>): void => {
    const {value} = event.target;
    if (chatbot.input !== value) {
      setChatbot({
        ...chatbot,
        input: value
      });
    }
  };

  const handleTrimInput = (event: ChangeEvent<HTMLInputElement>): void => {
    const {value} = event.target;
    if (chatbot.input !== value.trim()) {
      setChatbot({
        ...chatbot,
        input: value.trim()
      });
    }
  };

  const handleSendInput = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    if (
      online &&
      chatbot.input.trim().length > 0 &&
      chatbot.input.length <= 160 &&
      !chatbot.sending
    ) {
      setChatbot({
        ...chatbot,
        sending: true,
        chats: [
          ...chatbot.chats,
          {
            sender: 'user',
            message: sanitize(chatbot.input).trim()
          }
        ]
      });
    }
  };

  useEffect(() => {
    if (chatbot.sending) {
      const requestSchema = object().shape({
        input: string()
          .ensure()
          .required(
            'Uh-oh! It looks like you forgot to write a message. Please enter your message before sending it my way.'
          )
          .min(
            1,
            'Oops! Your message must be at least 1 character long. Please enter a message with at least 1 character before sending it.'
          )
          .max(
            160,
            'Oops! Your message exceeds the maximum limit of 160 characters. Please shorten your message and try again.'
          )
      });
      const request: AskChatbotReq = {
        input: sanitize(chatbot.input).trim()
      };
      requestSchema
        .validate(request)
        .then((): void => {
          setChatbot({
            ...chatbot,
            input: ''
          });
          mainSocket
            .timeout(60000)
            .emit(
              'ask chatbot',
              request,
              (error: Error, response: AskChatbotRes): void => {
                let errorMessage: string = '';
                if (error) {
                  errorMessage =
                    "Oops! It looks like something went wrong on my end, and I'm unable to provide a response at the moment. I apologize for any inconvenience caused. Please come back later, and I'll be back up and running. Thank you for your patience.";
                }
                if (response && !response.success) {
                  switch (response.error.code) {
                    case 40001:
                    case 4220101:
                    case 4220102:
                      errorMessage =
                        'Uh-oh! It looks like you forgot to write a message. Please enter your message before sending it my way.';
                      break;
                    case 4220103:
                      errorMessage =
                        'Oops! Your message must be at least 1 character long. Please enter a message with at least 1 character before sending it.';
                      break;
                    case 4220104:
                      errorMessage =
                        'Oops! Your message exceeds the maximum limit of 160 characters. Please shorten your message and try again.';
                      break;
                    default:
                      errorMessage =
                        "Oops! It seems there was an issue with your message. Please make sure you've entered a valid message and try again.";
                      break;
                  }
                }
                setChatbot({
                  ...chatbot,
                  input: '',
                  sending: false,
                  chats: [
                    ...chatbot.chats,
                    {
                      sender: 'bot',
                      message:
                        response && response.success
                          ? response.data.reply
                          : errorMessage
                    }
                  ]
                });
              }
            );
        })
        .catch((error: ValidationError): void => {
          setChatbot({
            ...chatbot,
            input: '',
            sending: false,
            chats: [
              ...chatbot.chats,
              {
                sender: 'bot',
                message:
                  error.inner[0]?.message ??
                  error.message ??
                  "Oops! It seems there was an issue with your message. Please make sure you've entered a valid message and try again."
              }
            ]
          });
        });
    }
  }, [chatbot.sending]);

  return (
    <form
      className='mx-4 flex items-center justify-between space-x-3 py-3 md:py-2'
      onSubmit={handleSendInput}
    >
      <input
        className='w-full flex-1 bg-gray-100 px-3 py-2 outline-0 md:text-sm'
        type='text'
        placeholder={placeholder}
        value={chatbot.input}
        maxLength={160}
        onChange={(event): void => handleUpdateInput(event)}
        onBlur={handleTrimInput}
      />
      <button
        className='rounded-full bg-cyan-600 p-1 duration-150 hover:bg-cyan-700 disabled:bg-gray-300'
        type='submit'
        disabled={
          !online ||
          chatbot.input.trim().length === 0 ||
          chatbot.input.length > 160 ||
          chatbot.sending
        }
      >
        <FontAwesomeIcon
          className='w-6 text-white'
          icon={sendIcon}
        />
      </button>
    </form>
  );
};

export type {InputProps, AskChatbotReq, AskChatbotRes};
export default Input;
