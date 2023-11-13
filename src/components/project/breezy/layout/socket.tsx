'use client';

import {type ReactNode, useEffect, useState} from 'react';
import {breezySocket} from '@utils/socket';

type SocketProps = {
  children: ReactNode;
};

const Socket = ({children}: SocketProps): JSX.Element => {
  const [rendered, setRendered] = useState<boolean>(false);

  useEffect((): void => {
    if (!rendered) {
      setRendered(true);
    }
  }, []);

  useEffect((): (() => void) => {
    if (rendered) {
      if (!breezySocket.connected) {
        breezySocket.connect();
      }
    }
    return (): void => {
      if (breezySocket.connected) {
        breezySocket.disconnect();
      }
    };
  }, [rendered]);

  return <>{children}</>;
};

export type {SocketProps};
export default Socket;
