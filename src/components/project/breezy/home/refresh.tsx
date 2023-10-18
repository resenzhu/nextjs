'use client';

import {type ReactNode, useEffect, useState} from 'react';
import type {User} from '@redux/reducers/project/breezy/home';
import {breezySocket} from '@utils/socket';
import cookie from 'js-cookie';
import useHome from '@hooks/project/breezy/use-home';

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

const Refresh = ({children}: RefreshProps): JSX.Element => {
  const [rendered, setRendered] = useState<boolean>(false);
  const {users, setUsers} = useHome();

  const handleAddSignedUpUser = (user: User): void => {
    setUsers({
      ...users,
      list: [...users.list, user]
    });
  };

  useEffect((): void => {
    if (!rendered) {
      setRendered(true);
    }
  }, []);

  useEffect((): (() => void) => {
    if (rendered) {
      breezySocket.on('user signed up', handleAddSignedUpUser);
    }
    return (): void => {
      breezySocket.off('user signed up', handleAddSignedUpUser);
    };
  }, [rendered]);

  useEffect((): void => {
    if (rendered && users.fetching && !users.fetched) {
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
            if (socketError) {
              setUsers({
                ...users,
                fetching: false
              });
            } else {
              setUsers({
                ...users,
                fetching: false,
                fetched: true,
                list: response.data.users
              });
            }
          }
        );
    }
  }, [rendered, users.fetching, users.fetched]);

  return <>{children}</>;
};

export type {RefreshProps, FetchUsersRes};
export default Refresh;
