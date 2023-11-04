'use client';

import {useEffect, useState} from 'react';
import type {FetchProfileRes} from '@components/project/breezy/home/refresh';
import {breezySocket} from '@utils/socket';
import useHome from '@hooks/project/breezy/use-home';

type RetryProps = {
  label: string;
};

const Retry = ({label}: RetryProps): JSX.Element => {
  const {profile, setProfile} = useHome();
  const [rendered, setRendered] = useState<boolean>(false);

  const handleRetryFetch = (): void => {
    setProfile({
      ...profile,
      fetching: true
    });
  };

  useEffect((): void => {
    if (!rendered) {
      setRendered(true);
    }
  }, []);

  useEffect((): void => {
    if (rendered && profile.fetching && !profile.fetched) {
      breezySocket
        .timeout(60000)
        .emit(
          'fetch profile',
          (socketError: Error, response: FetchProfileRes): void => {
            setProfile({
              ...profile,
              fetching: false,
              fetched: !socketError && response.data.user,
              user:
                socketError || !response.data.user
                  ? {...profile.user}
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
  }, [rendered, profile]);

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
