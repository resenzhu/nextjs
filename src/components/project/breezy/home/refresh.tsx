'use client';

import {type ReactNode, useEffect, useState} from 'react';
import type {User} from '@redux/reducers/project/breezy/home';
import {breezySocket} from '@utils/socket';
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

  useEffect((): void => {
    if (!rendered) {
      setRendered(true);
    }
  }, []);

  useEffect((): void => {
    if (rendered && users.fetching) {
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
  }, [rendered, users.fetching]);

  return <>{children}</>;
};

export type {RefreshProps, FetchUsersRes};
export default Refresh;
