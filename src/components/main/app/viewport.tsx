'use client';

import {type ReactNode, useEffect, useState} from 'react';
import {debounce} from '@utils/timer';
import useApp from '@hooks/main/use-app';

type ViewportProps = {
  children: ReactNode;
};

const Viewport = ({children}: ViewportProps): JSX.Element => {
  const {innerWidth, innerHeight, addEventListener, removeEventListener} =
    window;
  const [rendered, setRendered] = useState<boolean>(false);
  const {viewport, setViewport} = useApp();

  const handleResizeViewport = debounce((): void => {
    setViewport({
      width: innerWidth,
      height: innerHeight
    });
  }, 500);

  useEffect((): (() => void) => {
    if (!rendered) {
      setRendered(true);
    }
    return (): void => {
      removeEventListener('resize', handleResizeViewport);
    };
  }, []);

  useEffect((): void => {
    if (rendered) {
      if (viewport.width !== innerWidth || viewport.height !== innerHeight) {
        setViewport({
          width: innerWidth,
          height: innerHeight
        });
      }
      addEventListener('resize', handleResizeViewport);
    }
  }, [rendered]);

  return <>{children}</>;
};

export type {ViewportProps};
export default Viewport;
