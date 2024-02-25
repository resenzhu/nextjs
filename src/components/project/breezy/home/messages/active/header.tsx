'use client';

import {useEffect, useState} from 'react';
import {DateTime} from 'luxon';
import type {User} from '@redux/reducers/project/breezy/dashboard';
import useDashboard from '@hooks/project/breezy/use-dashboard';

type HeaderProps = {
  lastSeen: {
    known: string;
    unknown: string;
  };
};

const Header = ({lastSeen}: HeaderProps): JSX.Element => {
  const {messages, users} = useDashboard();
  const [activeUser, setActiveUser] = useState<User | undefined>(
    users.list.find((user): boolean => user.id === messages.active)
  );

  useEffect((): void => {
    const updatedActiveUser = users.list.find(
      (user): boolean => user.id === messages.active
    );
    if (JSON.stringify(activeUser) !== JSON.stringify(updatedActiveUser)) {
      setActiveUser(updatedActiveUser);
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
            : activeUser?.session.lastOnline === undefined
            ? lastSeen.unknown
            : lastSeen.known
                .replace(
                  '{{date}}',
                  DateTime.utc()
                    .toLocal()
                    .hasSame(
                      DateTime.fromISO(activeUser.session.lastOnline),
                      'day'
                    )
                    ? 'today'
                    : DateTime.utc()
                        .toLocal()
                        .minus({days: 1})
                        .hasSame(
                          DateTime.fromISO(activeUser.session.lastOnline),
                          'day'
                        )
                    ? 'yesterday'
                    : DateTime.fromISO(
                        activeUser.session.lastOnline
                      ).toLocaleString({weekday: 'short'})
                )
                .replace(
                  '{{time}}',
                  DateTime.fromISO(
                    activeUser.session.lastOnline
                  ).toLocaleString(DateTime.TIME_SIMPLE)
                )}
        </div>
      </div>
    </>
  );
};

export type {HeaderProps};
export default Header;
