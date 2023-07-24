'use client';

import type {ChangeEvent, FormEvent} from 'react';
import type {Chatbot} from '@redux/reducers/main/home';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import type {IconDefinition} from '@fortawesome/free-solid-svg-icons';
import {mainSocket} from '@utils/socket';
import useApp from '@hooks/main/use-app';
import useHome from '@hooks/main/use-home';

type MessageProps = {
  placeholder: string;
  sendIcon: IconDefinition;
};

const Message = ({placeholder, sendIcon}: MessageProps): JSX.Element => {
  const {online} = useApp();
  const {chatbot, setChatbot} = useHome();

  const handleUpdateMessage = (event: ChangeEvent<HTMLInputElement>): void => {
    const property = event.target.name as keyof Chatbot;
    const {value} = event.target;
    if (chatbot[property] !== value) {
      const updatedChatbot: Chatbot = {
        ...chatbot,
        [property]: value
      };
      setChatbot(updatedChatbot);
    }
  };

  const handleTrimMessage = (event: ChangeEvent<HTMLInputElement>): void => {
    const property = event.target.name as keyof Chatbot;
    const {value} = event.target;
    if (chatbot[property] !== value) {
      const updatedChatbot: Chatbot = {
        ...chatbot,
        [property]: value.trim()
      };
      setChatbot(updatedChatbot);
    }
  };

  const handleSendMessage = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    mainSocket.emit('ask-chatbot');
  };

  return (
    <form
      className='mx-4 flex items-center justify-between space-x-3 py-3'
      onSubmit={handleSendMessage}
    >
      <input
        className='flex-1 outline-0'
        name='message'
        type='text'
        placeholder={placeholder}
        value={chatbot.message}
        onChange={handleUpdateMessage}
        onBlur={handleTrimMessage}
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

export type {MessageProps};
export default Message;
