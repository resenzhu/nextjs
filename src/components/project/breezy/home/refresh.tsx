'use client';

import {type ReactNode, useEffect, useState} from 'react';
import type {User} from '@redux/reducers/project/breezy/home';
import {breezySocket} from '@utils/socket';
import cookie from 'js-cookie';
import useHome from '@hooks/project/breezy/use-home';
import {useRouter} from 'next/navigation';

type RefreshProps = {
  children: ReactNode;
};

type FetchUsersRes = {
  success: boolean;
  error: {
    code: number;
    message: string;
  };
  data: {
    users: User[];
  };
};

type FetchProfileRes = {
  success: boolean;
  error: {
    code: number;
    message: string;
  };
  data: {
    user: User;
  };
};

type UserSignedUpNotif = {
  user: {
    id: string;
    username: string;
    displayName: string;
    session: {
      status: 'online' | 'away' | 'offline';
      lastOnline: string;
    };
  };
};

type UserLoggedInNotif = {
  user: {
    id: string;
    session: {
      status: 'online' | 'away' | 'offline';
      lastOnline: string;
    };
  };
};

type UserOnlineNotif = {
  user: {
    id: string;
    session: {
      status: 'online' | 'away' | 'offline';
      lastOnline: string;
    };
  };
};

type UserOfflineNotif = {
  user: {
    id: string;
    session: {
      status: 'online' | 'away' | 'offline';
      lastOnline: string;
    };
  };
};

const Refresh = ({children}: RefreshProps): JSX.Element => {
  const {profile, users, setProfile, setUsers} = useHome();
  const [rendered, setRendered] = useState<boolean>(false);
  const {push} = useRouter();

  const handleLogoutOldSession = (): void => {
    cookie.remove(process.env.NEXT_PUBLIC_APP_COOKIE_BREEZY, {
      path: '/project/breezy'
    });
    push('/project/breezy/login');
  };

  useEffect((): void => {
    if (!rendered) {
      setRendered(true);
    }
  }, []);

  useEffect((): (() => void) => {
    if (rendered) {
      setUsers({
        ...users,
        fetching: true
      });
      breezySocket.on('logout old session', handleLogoutOldSession);
    }
    return (): void => {
      breezySocket.off('logout old session', handleLogoutOldSession);
    };
  }, [rendered]);

  useEffect((): (() => void) => {
    if (users.fetching && !users.fetched) {
      breezySocket.disconnect();
      breezySocket.auth = {
        token: cookie.get(process.env.NEXT_PUBLIC_APP_COOKIE_BREEZY)
      };
      breezySocket.connect();
      breezySocket
        .timeout(60000)
        .emit(
          'fetch users',
          (socketError: Error, response: FetchUsersRes): void => {
            setUsers({
              ...users,
              fetching: false,
              fetched: !socketError,
              list: socketError ? [...users.list] : response.data.users
            });
          }
        );
      breezySocket
        .timeout(60000)
        .emit(
          'fetch profile',
          (socketError: Error, response: FetchProfileRes): void => {
            setProfile({
              ...profile,
              fetching: false,
              fetched: !socketError,
              user: socketError
                ? profile.user
                : {
                    ...profile.user,
                    id: response.data.user.id,
                    username: response.data.user.username,
                    displayName: response.data.user.displayName,
                    session: {
                      ...profile.user.session,
                      status: response.data.user.session.status,
                      lastOnline: response.data.user.session.lastOnline
                    }
                  }
            });
          }
        );
    }
    const handleAddSignedUpUser = (notification: UserSignedUpNotif): void => {
      setUsers({
        ...users,
        list: [...users.list, notification.user]
      });
    };
    const handleUpdateUserStatus = (
      notification: UserLoggedInNotif | UserOnlineNotif | UserOfflineNotif
    ): void => {
      const updatedUsers = users.list.map((user): User => {
        if (user.id === notification.user.id) {
          const updatedUser: User = {
            ...user,
            session: {
              ...user.session,
              status: notification.user.session.status,
              lastOnline: notification.user.session.lastOnline
            }
          };
          return updatedUser;
        }
        return user;
      });
      setUsers({
        ...users,
        list: updatedUsers
      });
    };
    breezySocket.on('user signed up', handleAddSignedUpUser);
    breezySocket.on('user logged in', handleUpdateUserStatus);
    breezySocket.on('user online', handleUpdateUserStatus);
    breezySocket.on('user offline', handleUpdateUserStatus);
    return (): void => {
      breezySocket.off('user signed up', handleAddSignedUpUser);
      breezySocket.off('user logged in', handleUpdateUserStatus);
      breezySocket.off('user online', handleUpdateUserStatus);
      breezySocket.off('user offline', handleUpdateUserStatus);
    };
  }, [users]);

  return <>{children}</>;
};

export type {RefreshProps, FetchUsersRes};
export default Refresh;
