'use client';

import {useEffect, useState} from 'react';
import {Button} from '@components/project/breezy/shared';
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
              fetched: !socketError && response.data.user !== undefined,
              user:
                socketError || response.data.user === undefined
                  ? {...profile.user}
                  : {
                      ...profile.user,
                      id: response.data.user.id,
                      username: response.data.user.username,
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
  }, [rendered, profile]);

  return <Button onClick={(): void => handleRetryFetch()}>{label}</Button>;
};

export type {RetryProps};
export default Retry;
