'use client';

import {type ReactNode, useEffect, useState} from 'react';
import type {User} from '@redux/reducers/project/breezy/dashboard';
import {breezySocket} from '@utils/socket';
import cookie from 'js-cookie';
import {initialState} from '@redux/reducers/project/breezy/dashboard';
import useDashboard from '@hooks/project/breezy/use-dashboard';
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
    user: User | undefined;
  };
};

type NewUserNotif = {
  user: {
    id: string;
    userName: string;
    displayName: string;
    session: {
      status: 'online' | 'away' | 'offline';
      lastOnline: string;
    };
  };
};

type UserStatusNotif = {
  user: {
    id: string;
    session: {
      status: 'online' | 'away' | 'offline';
      lastOnline: string;
    };
  };
};

const Refresh = ({children}: RefreshProps): JSX.Element => {
  const {
    profile,
    users,
    setMenu,
    setMessages,
    setProfile,
    setServerError,
    setSettings,
    setUsers
  } = useDashboard();
  const [rendered, setRendered] = useState<boolean>(false);
  const {push} = useRouter();

  const handleLogoutOldSession = (): void => {
    setMenu(initialState.menu);
    setMessages(initialState.messages);
    setUsers(initialState.users);
    setProfile(initialState.profile);
    setSettings(initialState.settings);
    setServerError(initialState.serverError);
    cookie.remove(process.env.NEXT_PUBLIC_APP_COOKIE_BREEZY);
    push('/project/breezy/login');
  };

  useEffect((): void => {
    if (!rendered) {
      setRendered(true);
    }
  }, []);

  useEffect((): (() => void) => {
    if (rendered) {
      breezySocket.disconnect();
      breezySocket.auth = {
        token: cookie.get(process.env.NEXT_PUBLIC_APP_COOKIE_BREEZY)
      };
      breezySocket.connect();
      setUsers({
        ...users,
        fetching: true
      });
      setProfile({
        ...profile,
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
      breezySocket
        .timeout(60000)
        .emit(
          'fetch users',
          (socketError: Error, response: FetchUsersRes): void => {
            if (response && !response.success && response.error.code === 500) {
              setServerError(true);
            }
            setUsers({
              ...users,
              fetching: false,
              fetched: !socketError && response && response.success,
              list:
                socketError || (response && !response.success)
                  ? [...users.list]
                  : response.data.users
            });
          }
        );
    }
    const handleAddNewUser = (notification: NewUserNotif): void => {
      if (
        !users.list.some((user): boolean => user.id === notification.user.id)
      ) {
        setUsers({
          ...users,
          list: [...users.list, notification.user]
        });
      }
    };
    const handleUpdateUserStatus = (notification: UserStatusNotif): void => {
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
    breezySocket.on('add new user', handleAddNewUser);
    breezySocket.on('update user status', handleUpdateUserStatus);
    return (): void => {
      breezySocket.off('add new user', handleAddNewUser);
      breezySocket.off('update user status', handleUpdateUserStatus);
    };
  }, [users]);

  useEffect((): void => {
    if (profile.fetching && !profile.fetched) {
      breezySocket
        .timeout(60000)
        .emit(
          'fetch profile',
          (socketError: Error, response: FetchProfileRes): void => {
            if (response && !response.success && response.error.code === 500) {
              setServerError(true);
            }
            setProfile({
              ...profile,
              fetching: false,
              fetched: !socketError && response.data.user !== undefined,
              user:
                socketError || response.data.user === undefined
                  ? {...profile.user}
                  : {
                      ...profile.user,
                      id: response.data.user.id,
                      userName: response.data.user.userName,
                      displayName: response.data.user.displayName,
                      session: {
                        ...profile.user.session,
                        status: {
                          ...profile.user.session.status,
                          previous: response.data.user.session.status,
                          current: response.data.user.session.status
                        },
                        lastOnline: response.data.user.session.lastOnline
                      }
                    }
            });
          }
        );
    }
  }, [profile]);

  return <>{children}</>;
};

export type {
  RefreshProps,
  FetchUsersRes,
  FetchProfileRes,
  NewUserNotif,
  UserStatusNotif
};
export default Refresh;
