'use client';

import {Fragment, ReactNode} from 'react';
import {Transition} from '@headlessui/react';
import useApp from '@hooks/main/use-app';

export type TProps = {
  children: ReactNode;
};

export const T = ({children}: TProps): JSX.Element => {
  const {sidenav} = useApp();

  return (
    <Transition
      show={sidenav}
      as={Fragment}
    >
      {children}
    </Transition>
  );
};

export const TBackdrop = ({children}: TProps): JSX.Element => (
  <Transition.Child
    as={Fragment}
    enter='duration-150 ease-out'
    enterFrom='opacity-0'
    enterTo='opacity-60'
    leave='duration-150 ease-in'
    leaveFrom='opacity-60'
    leaveTo='opacity-0'
  >
    {children}
  </Transition.Child>
);

export const TSidenav = ({children}: TProps): JSX.Element => (
  <Transition.Child
    as={Fragment}
    enter='duration-150 ease-out'
    enterFrom='translate-x-full'
    enterTo='-translate-x-0'
    leave='duration-150 ease-in'
    leaveFrom='-translate-x-0'
    leaveTo='translate-x-full'
  >
    {children}
  </Transition.Child>
);
