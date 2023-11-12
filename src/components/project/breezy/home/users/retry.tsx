'use client';

import {useEffect, useState} from 'react';
import {Button} from '@components/project/breezy/shared';
import type {FetchUsersRes} from '@components/project/breezy/home/refresh';
import {breezySocket} from '@utils/socket';
import useHome from '@hooks/project/breezy/use-home';

type RetryProps = {
  label: string;
};

const Retry = ({label}: RetryProps): JSX.Element => {
  const [rendered, setRendered] = useState<boolean>(false);
  const {users, setUsers} = useHome();

  const handleRetryFetch = (): void => {
    setUsers({
      ...users,
      fetching: true
    });
  };

  useEffect((): void => {
    if (!rendered) {
      setRendered(true);
    }
  }, []);

  useEffect((): void => {
    if (rendered && users.fetching && !users.fetched) {
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
    }
  }, [rendered, users]);

  return <Button onClick={(): void => handleRetryFetch()}>{label}</Button>;
};

export type {RetryProps};
export default Retry;
