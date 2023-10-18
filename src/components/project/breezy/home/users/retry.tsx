'use client';

import {useEffect, useState} from 'react';
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

  return (
    <button
      className='rounded-lg bg-purple-500 px-5 py-2 font-semibold text-white duration-150 hover:bg-purple-600'
      type='button'
      onClick={(): void => handleRetryFetch()}
    >
      {label}
    </button>
  );
};

export type {RetryProps};
export default Retry;
