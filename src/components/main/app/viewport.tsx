'use client';

import {ReactNode, useEffect, useState} from 'react';
import type {Viewport as AppViewport} from '@redux/reducers/main/app';
import {debounce} from '@utils/timer';
import useApp from '@hooks/main/use-app';

type ViewportProps = {
  children: ReactNode;
};

const Viewport = ({children}: ViewportProps): JSX.Element => {
  const [rendered, setRendered] = useState<boolean>(false);
  const {setViewport} = useApp();

  const handleResizeViewport = debounce((): void => {
    const newViewport: AppViewport = {
      width: window.innerWidth,
      height: window.innerHeight
    };

    setViewport(newViewport);
  }, 500);

  useEffect((): (() => void) => {
    if (!rendered) {
      setRendered(true);
    }

    return (): void => {
      window.removeEventListener('resize', handleResizeViewport);
    };
  }, []);

  useEffect((): void => {
    if (rendered) {
      window.addEventListener('resize', handleResizeViewport);
    }
  }, [rendered]);

  return <>{children}</>;
};

export type {ViewportProps};
export default Viewport;
