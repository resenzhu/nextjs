'use client';

import type {ChangeEvent, FormEvent} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import type {IconDefinition} from '@fortawesome/free-solid-svg-icons';
import {mainSocket} from '@utils/socket';
import useApp from '@hooks/main/use-app';
import useHome from '@hooks/main/use-home';

type InputProps = {
  placeholder: string;
  sendIcon: IconDefinition;
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
    if (online && chatbot.input.length > 0 && chatbot.input.length <= 160) {
      const input = chatbot.input;
      setChatbot({
        ...chatbot,
        chat: [
          ...chatbot.chat,
          {
            sender: 'user',
            message: input
          }
        ],
        input: ''
      });
      mainSocket.emit('ask-chatbot', input, (answer: string): void => {
        setChatbot({
          ...chatbot,
          chat: [
            ...chatbot.chat,
            {
              sender: 'bot',
              message: answer
            }
          ]
        });
      });
    }
  };

  return (
    <form
      className='mx-4 flex items-center justify-between space-x-3 py-3'
      onSubmit={handleSendInput}
    >
      <input
        className='flex-1 outline-0'
        name='input'
        type='text'
        placeholder={placeholder}
        value={chatbot.input}
        maxLength={160}
        onChange={handleUpdateInput}
        onBlur={handleTrimInput}
      />
      <button
        className='rounded-full bg-cyan-600 p-1 duration-150 hover:bg-cyan-700 disabled:bg-gray-300'
        type='submit'
        disabled={!online}
      >
        <FontAwesomeIcon
          className='w-6 text-white'
          icon={sendIcon}
        />
      </button>
    </form>
  );
};

export type {InputProps};
export default Input;
