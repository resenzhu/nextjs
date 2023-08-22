'use client';

import {type ChangeEvent, type FormEvent, useEffect} from 'react';
import {object, string} from 'yup';
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
    status: number;
    subStatus: number;
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
        input: string().ensure().required().min(1).max(160)
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
              'ask-chatbot',
              request,
              (error: Error, response: AskChatbotRes): void => {
                if (error || (response && response.success)) {
                  setChatbot({
                    ...chatbot,
                    input: '',
                    sending: false,
                    chats: [
                      ...chatbot.chats,
                      {
                        sender: 'bot',
                        message: error
                          ? "Oops! It looks like something went wrong on my end, and I'm unable to provide a response at the moment. I apologize for any inconvenience caused. Please come back later, and I'll be back up and running. Thank you for your patience."
                          : response.data.reply
                      }
                    ]
                  });
                } else {
                  setChatbot({
                    ...chatbot,
                    input: '',
                    sending: false
                  });
                }
              }
            );
        })
        .catch((): void => {
          setChatbot({
            ...chatbot,
            input: '',
            sending: false
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
