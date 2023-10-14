'use client';

import {type ReactNode, useEffect, useState} from 'react';

type RefreshProps = {
  children: ReactNode;
};

const Refresh = ({children}: RefreshProps): JSX.Element => {
  const [rendered, setRendered] = useState<boolean>(false);

  useEffect((): void => {
    if (!rendered) {
      setRendered(true);
    }
  }, []);

  useEffect((): void => {
    if (rendered) {
    }
  }, [rendered]);

  return <>{children}</>;
};

export type {RefreshProps};
export default Refresh;
