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
      width: innerWidth,
      height: innerHeight
    });
  }, 500);

  useEffect((): void => {
    if (!rendered) {
      setRendered(true);
    }
  }, []);

  useEffect((): (() => void) => {
    if (rendered) {
      if (viewport.width !== innerWidth || viewport.height !== innerHeight) {
        setViewport({
          width: innerWidth,
          height: innerHeight
        });
      }
      addEventListener('resize', handleResizeViewport);
    }
    return (): void => {
      removeEventListener('resize', handleResizeViewport);
    };
  }, [rendered]);

  return <>{children}</>;
};

export type {ViewportProps};
export default Viewport;
