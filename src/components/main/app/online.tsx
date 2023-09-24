'use client';

import {type ReactNode, useEffect, useState} from 'react';
import useApp from '@hooks/main/use-app';

type ViewportProps = {
  children: ReactNode;
};

const Viewport = ({children}: ViewportProps): JSX.Element => {
  const {onLine} = navigator;
  const [rendered, setRendered] = useState<boolean>(false);
  const {addEventListener, removeEventListener} = window;
  const {setOnline} = useApp();

  const handleChangeConnectivity = (): void => {
    setOnline(onLine);
  };

  useEffect((): (() => void) => {
    if (!rendered) {
      setRendered(true);
    }
    return (): void => {
      removeEventListener('offline', handleChangeConnectivity);
      removeEventListener('online', handleChangeConnectivity);
    };
  }, []);

  useEffect((): void => {
    if (rendered) {
      setOnline(navigator.onLine);
      addEventListener('offline', handleChangeConnectivity);
      addEventListener('online', handleChangeConnectivity);
    }
  }, [rendered]);

  return <>{children}</>;
};

export type {ViewportProps};
export default Viewport;
