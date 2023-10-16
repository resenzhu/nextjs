'use client';

import {type ReactNode, useEffect, useState} from 'react';
import {breezySocket} from '@utils/socket';
import useHome from '@hooks/project/breezy/use-home';

type RefreshProps = {
  children: ReactNode;
};

type FetchUserRes = {};

const Refresh = ({children}: RefreshProps): JSX.Element => {
  const {users} = useHome();
  const [rendered, setRendered] = useState<boolean>(false);

  useEffect((): void => {
    if (!rendered) {
      setRendered(true);
    }
  }, []);

  useEffect((): void => {
    if (rendered && users.fetching) {
      console.log('fetch users');
      breezySocket
        .timeout(60000)
        .emit(
          'fetch users',
          (socketError: Error, response: FetchUserRes): void => {
            if (socketError) {
              console.log(socketError);
            }
            console.log(response);
          }
        );
    }
  }, [rendered, users.fetching]);

  return <>{children}</>;
};

export type {RefreshProps, FetchUserRes};
export default Refresh;
