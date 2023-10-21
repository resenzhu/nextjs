'use client';

import Image from 'next/image';
import useHome from '@hooks/project/breezy/use-home';

type ListProps = {
  label: {
    chat: string;
  };
};

const List = ({label}: ListProps): JSX.Element => {
  const {users} = useHome();
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
              <div className='mr-4'>
                <Image
                  className='rounded-full'
                  src='/images/project/breezy/home-messages-profile-picture.webp'
                  width={70}
                  height={70}
                  alt='profile picture'
                />
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
                  <div className='text-sm font-semibold text-green-500'>
                    {user.session.status}
                  </div>
                </div>
                <div className='grid place-content-center'>
                  <button
                    className='rounded-lg bg-purple-500 px-5 py-2 text-sm font-semibold text-white duration-150 hover:bg-purple-600'
                    type='button'
                  >
                    {label.chat}
                  </button>
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
