'use client';

import {type ChangeEvent, type FormEvent, useEffect, useState} from 'react';
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
  const [input, setInput] = useState<string>('');

  const handleUpdateInput = (event: ChangeEvent<HTMLInputElement>): void => {
    const {value} = event.target;
    if (input !== value) {
      setInput(value);
    }
  };

  const handleTrimInput = (event: ChangeEvent<HTMLInputElement>): void => {
    const {value} = event.target;
    if (input !== value.trim()) {
      setInput(value.trim());
    }
  };

  const handleSendInput = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    if (
      online &&
      input.trim().length > 0 &&
      input.length <= 160 &&
      !chatbot.replying
    ) {
      setChatbot({
        ...chatbot,
        replying: true,
        chat: [
          ...chatbot.chat,
          {
            sender: 'user',
            message: sanitize(input).trim()
          }
        ]
      });
    }
  };

  useEffect(() => {
    if (chatbot.replying) {
      const requestSchema = object().shape({
        input: string().ensure().required().min(1).max(160)
      });
      const request: AskChatbotReq = {
        input: sanitize(input).trim()
      };
      requestSchema
        .validate(request)
        .then((): void => {
          setInput('');
          mainSocket
            .timeout(60000)
            .emit(
              'ask-chatbot',
              request,
              (error: Error, response: AskChatbotRes): void => {
                if (error || (response && response.success)) {
                  setChatbot({
                    ...chatbot,
                    replying: false,
                    chat: [
                      ...chatbot.chat,
                      {
                        sender: 'bot',
                        message: error
                          ? "Apologies for the inconvenience, but I'm currently unable to chat due to unexpected errors. Thank you for your understanding as I work to fix them promptly."
                          : response.data.reply
                      }
                    ]
                  });
                } else {
                  setChatbot({
                    ...chatbot,
                    replying: false
                  });
                }
              }
            );
        })
        .catch((): void => {
          setChatbot({
            ...chatbot,
            replying: false
          });
        });
    }
  }, [chatbot.replying]);

  return (
    <form
      className='mx-4 flex items-center justify-between space-x-3 py-3 sm:py-2'
      onSubmit={handleSendInput}
    >
      <input
        className='w-full flex-1 bg-gray-100 px-3 py-2 outline-0 sm:text-sm landscape:text-base'
        type='text'
        placeholder={placeholder}
        value={input}
        maxLength={160}
        onChange={handleUpdateInput}
        onBlur={handleTrimInput}
      />
      <button
        className='rounded-full bg-cyan-600 p-1 duration-150 hover:bg-cyan-700 disabled:bg-gray-300'
        type='submit'
        disabled={!online || input.length === 0 || chatbot.replying}
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
