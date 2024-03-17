'use client';

import {type ReactNode, useEffect, useState} from 'react';
import useApp from '@hooks/app/use-app';

type OnlineProps = {
  children: ReactNode;
};

const Online = ({children}: OnlineProps): JSX.Element => {
  const [rendered, setRendered] = useState<boolean>(false);
  const {setIsOnline} = useApp();

  const handleChangeConnectivity = (): void => {
    setIsOnline(navigator.onLine);
  };

  useEffect((): void => {
    if (!rendered) {
      setRendered(true);
    }
  }, []);

  useEffect((): (() => void) => {
    if (rendered) {
      setIsOnline(navigator.onLine);
      addEventListener('offline', handleChangeConnectivity);
      addEventListener('online', handleChangeConnectivity);
    }
    return (): void => {
      removeEventListener('offline', handleChangeConnectivity);
      removeEventListener('online', handleChangeConnectivity);
    };
  }, [rendered]);

  return <>{children}</>;
};

export type {OnlineProps};
export default Online;
