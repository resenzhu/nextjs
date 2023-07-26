'use client';

import {type ChangeEvent, type FormEvent, useEffect, useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import type {IconDefinition} from '@fortawesome/free-solid-svg-icons';
import {mainSocket} from '@utils/socket';
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
  reply: string;
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
      input.length > 0 &&
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
            message: input.trim()
          }
        ]
      });
    }
  };

  useEffect(() => {
    if (chatbot.replying) {
      const request: AskChatbotReq = {
        input: input.trim()
      };
      setInput('');
      mainSocket
        .timeout(60000)
        .emit(
          'ask-chatbot',
          request,
          (error: Error, response: AskChatbotRes): void => {
            setChatbot({
              ...chatbot,
              replying: false,
              chat: [
                ...chatbot.chat,
                {
                  sender: 'bot',
                  message: error
                    ? "I apologize for the inconvenience, I am currently experiencing some technical difficulties that prevent me from assisting you at the moment. However, you can reach me on my social media channels for further support. Don't hesitate to reach out to me there, and I'll be glad to assist you. Thank you for your patience!"
                    : response.reply
                }
              ]
            });
          }
        );
    }
  }, [chatbot.replying]);

  return (
    <form
      className='mx-4 flex items-center justify-between space-x-3 py-3'
      onSubmit={handleSendInput}
    >
      <input
        className='flex-1 bg-gray-100 px-3 py-2 outline-0'
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