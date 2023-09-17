'use client';

import {type ReactNode, useEffect, useState} from 'react';
import {mainSocket} from '@utils/socket';

type SocketProps = {
  children: ReactNode;
};

const Socket = ({children}: SocketProps): JSX.Element => {
  const [rendered, setRendered] = useState<boolean>(false);

  useEffect((): (() => void) => {
    if (!rendered) {
      setRendered(true);
    }
    return (): void => {
      if (mainSocket.connected) {
        mainSocket.disconnect();
      }
    };
  }, []);

  useEffect((): void => {
    if (rendered) {
      if (!mainSocket.connected) {
        mainSocket.connect();
      }
    }
  }, [rendered]);

  return <>{children}</>;
};

export type {SocketProps};
export default Socket;
