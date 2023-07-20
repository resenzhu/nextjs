'use client';

import {ReactNode, useEffect, useState} from 'react';
import useApp from '@hooks/main/use-app';

type ViewportProps = {
  children: ReactNode;
};

const Viewport = ({children}: ViewportProps): JSX.Element => {
  const [rendered, setRendered] = useState<boolean>(false);
  const {setOnline} = useApp();

  const handleChangeConnectivity = (): void => {
    setOnline(navigator.onLine);
  };

  useEffect((): (() => void) => {
    if (!rendered) {
      setRendered(true);
    }

    return (): void => {
      window.removeEventListener('offline', handleChangeConnectivity);
      window.removeEventListener('online', handleChangeConnectivity);
    };
  }, []);

  useEffect((): void => {
    if (rendered) {
      setOnline(navigator.onLine);
      window.addEventListener('offline', handleChangeConnectivity);
      window.addEventListener('online', handleChangeConnectivity);
    }
  }, [rendered]);

  return <>{children}</>;
};

export type {ViewportProps};
export default Viewport;
