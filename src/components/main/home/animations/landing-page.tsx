'use client';

import {ReactNode} from 'react';
import useHome from '@hooks/main/use-home';

type LandingPageProps = {
  children: ReactNode;
};

const LandingPage = ({children}: LandingPageProps): JSX.Element => {
  const {explore} = useHome();

  return <>{!explore && children}</>;
};

export type {LandingPageProps};
export default LandingPage;
