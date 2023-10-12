'use client';

import {type ReactNode, useEffect, useState} from 'react';
import {breezySocket} from '@utils/socket';
import cookie from 'js-cookie';
import {useRouter} from 'next/navigation';

type RefreshProps = {
  children: ReactNode;
};

const Refresh = ({children}: RefreshProps): JSX.Element => {
  const [rendered, setRendered] = useState<boolean>(false);
  const {push} = useRouter();

  const handleLogout = (error: Error): void => {
    if (error.message === 'JsonWebTokenError') {
      cookie.remove(process.env.NEXT_PUBLIC_APP_COOKIE_BREEZY, {
        path: '/project/breezy'
      });
      push('/project/breezy/login');
    }
  };

  useEffect((): void => {
    if (!rendered) {
      setRendered(true);
    }
  }, []);

  useEffect((): (() => void) => {
    if (rendered) {
      breezySocket.on('connect_error', handleLogout);
    }
    return (): void => {
      breezySocket.off('connect_error', handleLogout);
    };
  }, [rendered]);

  return <>{children}</>;
};

export type {RefreshProps};
export default Refresh;
