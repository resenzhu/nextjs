'use client';

import {Fragment, type ReactNode} from 'react';
import {Transition} from '@headlessui/react';
import useNavbar from '@hooks/main/use-navbar';

export type TProps = {
  children: ReactNode;
};

export const TNav = ({children}: TProps): JSX.Element => {
  const {isSideNavOpen} = useNavbar();
  return (
    <Transition
      show={isSideNavOpen}
      as={Fragment}
    >
      {children}
    </Transition>
  );
};

export const TNavBackdrop = ({children}: TProps): JSX.Element => (
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

export const TNavSideNav = ({children}: TProps): JSX.Element => (
  <Transition.Child
    as={Fragment}
    enter='duration-150 ease-out'
    enterFrom='translate-x-full'
    enterTo='translate-x-0'
    leave='duration-150 ease-in'
    leaveFrom='translate-x-0'
    leaveTo='translate-x-full'
  >
    {children}
  </Transition.Child>
);
