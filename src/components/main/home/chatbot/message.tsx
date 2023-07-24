'use client';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {FormEvent} from 'react';
import {IconDefinition} from '@fortawesome/free-solid-svg-icons';

type MessageProps = {
  placeholder: string;
  sendIcon: IconDefinition;
};

const Message = ({placeholder, sendIcon}: MessageProps): JSX.Element => {
  const handleSendMessage = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
  };

  return (
    <form
      className='mx-4 flex items-center justify-between space-x-3 py-3'
      onSubmit={handleSendMessage}
    >
      <input
        className='flex-1 outline-0'
        type='text'
        placeholder={placeholder}
      />
      <button
        className='rounded-full bg-cyan-600 px-2 py-1 duration-150 hover:bg-cyan-700'
        type='submit'
      >
        <FontAwesomeIcon
          className='text-white'
          icon={sendIcon}
        />
      </button>
    </form>
  );
};

export type {MessageProps};
export default Message;
