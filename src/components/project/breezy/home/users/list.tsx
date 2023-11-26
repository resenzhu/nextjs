'use client';

import {Button} from '@components/project/breezy/shared';
import {nanoid} from 'nanoid';
import useDashboard from '@hooks/project/breezy/use-dashboard';

type ListProps = {
  label: {
    chat: string;
  };
};

const List = ({label}: ListProps): JSX.Element => {
  const {menu, messages, users, setMenu, setMessages} = useDashboard();

  const handleOpenChat = (userId: string): void => {
    if (
      !messages.list.some((message): boolean => message.sender.id === userId)
    ) {
      const newMessageId = nanoid();
      setMessages({
        ...messages,
        list: [
          ...messages.list,
          {
            id: newMessageId,
            sender: {
              id: userId,
              typing: false
            },
            chats: []
          }
        ],
        active: newMessageId
      });
      setMenu({
        ...menu,
        messages: true,
        users: false
      });
    }
  };

  return (
    <>
      {users.list
        .filter((user): boolean => user.session.status !== 'offline')
        .map(
          (user): JSX.Element => (
            <div
              className='flex items-center px-5 py-3'
              key={user.id}
            >
              <div className='mr-4 flex h-16 w-16 items-center justify-center rounded-full bg-purple-500 text-2xl font-semibold tracking-wider text-white'>
                {`${
                  user.displayName.split(' ')[0]?.charAt(0).toUpperCase() ?? ''
                }${
                  user.displayName.split(' ')[1]?.charAt(0).toUpperCase() ?? ''
                }`}
              </div>
              <div className='flex flex-1 justify-between'>
                <div
                  className='mr-2 flex flex-col leading-5'
                  style={{wordBreak: 'break-word'}}
                >
                  <div className='font-bold text-gray-700'>
                    {user.displayName}
                  </div>
                  <div className='text-sm text-gray-600'>{`@${user.username}`}</div>
                  <div
                    className={`text-sm font-semibold ${
                      user.session.status === 'online'
                        ? 'text-green-500'
                        : 'text-yellow-600'
                    }`}
                  >
                    {user.session.status}
                  </div>
                </div>
                <div className='grid place-content-center'>
                  <Button
                    className='text-sm'
                    onClick={(): void => handleOpenChat(user.id)}
                  >
                    {label.chat}
                  </Button>
                </div>
              </div>
            </div>
          )
        )}
    </>
  );
};

export type {ListProps};
export default List;
