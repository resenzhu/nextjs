'use client';

import type {ChangeEvent, FormEvent} from 'react';
import {Button} from '@components/project/breezy/shared';
import {DateTime} from 'luxon';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import type {IconDefinition} from '@fortawesome/free-solid-svg-icons';
import type {Message} from '@redux/reducers/project/breezy/dashboard';
import {nanoid} from 'nanoid';
import useDashboard from '@hooks/project/breezy/use-dashboard';

type InputProps = {
  placeholder: string;
  sendIcon: IconDefinition;
};

const Input = ({placeholder, sendIcon}: InputProps): JSX.Element => {
  const {messages, setMessages} = useDashboard();

  const handleUpdateInput = (event: ChangeEvent<HTMLTextAreaElement>): void => {
    const {value} = event.target;
    if (
      messages.list.find(
        (message): boolean => message.sender.id === messages.active
      )?.message !== value
    ) {
      setMessages({
        ...messages,
        list: messages.list.map((message): Message => {
          if (message.sender.id === messages.active) {
            const updatedMessage: Message = {
              ...message,
              message: value
            };
            return updatedMessage;
          }
          return message;
        })
      });
    }
  };

  const handleSendInput = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const activeMessage = messages.list.find(
      (message): boolean => message.sender.id === messages.active
    );
    if (activeMessage && activeMessage.message.length !== 0) {
      setMessages({
        ...messages,
        list: messages.list.map((message): Message => {
          if (message.sender.id === messages.active) {
            const updatedMessage: Message = {
              ...message,
              chats: [
                ...message.chats,
                {
                  id: nanoid(),
                  self: true,
                  message: activeMessage.message,
                  status: 'sending',
                  timestamp: {
                    created: DateTime.utc().toISO(),
                    delivered: null,
                    read: null
                  }
                }
              ],
              message: ''
            };
            return updatedMessage;
          }
          return message;
        })
      });
    }
  };

  return (
    <form
      className='mx-4 flex items-center justify-between space-x-3 py-3'
      onSubmit={handleSendInput}
    >
      <textarea
        className='w-full flex-1 resize-none bg-gray-50 px-3 py-2 outline-0'
        placeholder={placeholder}
        rows={1}
        value={
          messages.list.find(
            (message): boolean => message.sender.id === messages.active
          )?.message
        }
        maxLength={4096}
        onChange={(event): void => handleUpdateInput(event)}
      />
      <Button
        className='px-[0.5rem]'
        type='submit'
      >
        <FontAwesomeIcon
          className='w-6 text-white'
          icon={sendIcon}
        />
      </Button>
    </form>
  );
};

export type {InputProps};
export default Input;
