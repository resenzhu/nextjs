'use client';

import {ReactNode} from 'react';
import useHome from '@hooks/main/use-home';

type ExploreProps = {
  children: ReactNode;
};

const Explore = ({children}: ExploreProps): JSX.Element => {
  const {explore} = useHome();

  return <>{explore && children}</>;
};

export type {ExploreProps};
export default Explore;
