'use client';

import {useEffect, useState} from 'react';
import type {User} from '@redux/reducers/project/breezy/dashboard';
import useDashboard from '@hooks/project/breezy/use-dashboard';

const Header = (): JSX.Element => {
  const {messages, users} = useDashboard();
  const [activeUser, setActiveUser] = useState<User | undefined>(
    users.list.find((user): boolean => user.id === messages.active)
  );

  useEffect((): void => {
    const user = users.list.find(
      (user): boolean => user.id === messages.active
    );
    if (JSON.stringify(activeUser) !== JSON.stringify(user)) {
      setActiveUser(user);
    }
  }, [users.list]);

  return (
    <>
      <div className='mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-purple-500 font-semibold tracking-wider text-white'>
        {activeUser?.displayName
          .split(' ')
          .map((word): string => word[0] ?? '')
          .join('')
          .slice(0, 2)
          .toUpperCase()}
      </div>
      <div className='flex flex-col'>
        <div className='font-bold text-gray-700'>{activeUser?.displayName}</div>
        <div className='text-sm font-semibold text-gray-500'>
          {activeUser?.session.status === 'online'
            ? 'online'
            : activeUser?.session.lastOnline}
        </div>
      </div>
    </>
  );
};

export default Header;
