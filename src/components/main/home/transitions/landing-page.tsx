'use client';

import {ReactNode} from 'react';
import {Transition} from '@headlessui/react';
import useApp from '@hooks/main/use-app';
import useHome from '@hooks/main/use-home';

type LandingPageProps = {
  children: ReactNode;
};

const LandingPage = ({children}: LandingPageProps): JSX.Element => {
  const {viewport} = useApp();
  const {explore} = useHome();

  return (
    <Transition
      className='flex justify-center'
      show={(viewport.width < 640 && !explore) || viewport.width >= 640}
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
