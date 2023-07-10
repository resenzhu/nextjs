'use client';

import {ReactNode} from 'react';
import {Transition} from '@headlessui/react';
import useHome from '@hooks/main/use-home';

type LandingPageProps = {
  children: ReactNode;
};

const LandingPage = ({children}: LandingPageProps): JSX.Element => {
  const {explore} = useHome();

  return (
    <Transition
      className='flex justify-center'
      show={!explore}
      enter='duration-150 ease-out'
      enterFrom='-translate-y-full opacity-0'
      enterTo='translate-y-0 opacity-100'
      leave='duration-150 ease-in'
      leaveFrom='translate-y-0 opacity-100'
      leaveTo='-translate-y-full opacity-0'
    >
      {children}
    </Transition>
  );
};

export type {LandingPageProps};
export default LandingPage;
