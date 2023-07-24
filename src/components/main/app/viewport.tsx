'use client';

import {type ReactNode, useEffect, useState} from 'react';
import {debounce} from '@utils/timer';
import useApp from '@hooks/main/use-app';

type ViewportProps = {
  children: ReactNode;
};

const Viewport = ({children}: ViewportProps): JSX.Element => {
  const [rendered, setRendered] = useState<boolean>(false);
  const {viewport, setViewport} = useApp();

  const handleResizeViewport = debounce((): void => {
    setViewport({
      width: window.innerWidth,
      height: window.innerHeight
    });
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
      if (
        viewport.width !== window.innerWidth ||
        viewport.height !== window.innerHeight
      ) {
        setViewport({
          width: window.innerWidth,
          height: window.innerHeight
        });
      }
      window.addEventListener('resize', handleResizeViewport);
    }
  }, [rendered]);

  return <>{children}</>;
};

export type {ViewportProps};
export default Viewport;
