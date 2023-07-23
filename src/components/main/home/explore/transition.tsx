'use client';

import {Fragment, type ReactNode} from 'react';
import {Transition} from '@headlessui/react';
import useHome from '@hooks/main/use-home';

export type TProps = {
  children: ReactNode;
};

export const T = ({children}: TProps): JSX.Element => {
  const {section, setSection} = useHome();

  const handleToggleProfile = (show: boolean): void => {
    if (show !== section.profile) {
      setTimeout((): void => {
        setSection({
          ...section,
          profile: show
        });
      }, 50);
    }
  };

  return (
    <Transition
      show={section.explore}
      as={Fragment}
      afterLeave={(): void => handleToggleProfile(true)}
    >
      {children}
    </Transition>
  );
};

export const THome = ({children}: TProps): JSX.Element => (
  <Transition.Child
    enter='duration-700 ease-out'
    enterFrom='-translate-y-full opacity-0'
    enterTo='translate-y-0 opacity-100'
    leave='duration-700 ease-in'
    leaveFrom='translate-x-0 opacity-100'
    leaveTo='-translate-x-full opacity-0'
  >
    {children}
  </Transition.Child>
);

export const TAbout = ({children}: TProps): JSX.Element => (
  <Transition.Child
    as={Fragment}
    enter='duration-700 ease-out'
    enterFrom='translate-x-full opacity-0'
    enterTo='translate-x-0 opacity-100'
    leave='duration-700 ease-in'
    leaveFrom='translate-y-0 opacity-100'
    leaveTo='-translate-y-full opacity-0'
  >
    {children}
  </Transition.Child>
);

export const TPortfolio = ({children}: TProps): JSX.Element => (
  <Transition.Child
    as={Fragment}
    enter='duration-700 ease-out'
    enterFrom='-translate-x-full opacity-0'
    enterTo='translate-x-0 opacity-100'
    leave='duration-700 ease-in'
    leaveFrom='translate-x-0 opacity-100'
    leaveTo='translate-x-full opacity-0'
  >
    {children}
  </Transition.Child>
);

export const TResources = ({children}: TProps): JSX.Element => (
  <Transition.Child
    as={Fragment}
    enter='duration-700 ease-out'
    enterFrom='translate-x-full opacity-0'
    enterTo='translate-x-0 opacity-100'
    leave='duration-700 ease-in'
    leaveFrom='translate-x-0 opacity-100'
    leaveTo='-translate-x-full opacity-0'
  >
    {children}
  </Transition.Child>
);

export const TContact = ({children}: TProps): JSX.Element => (
  <Transition.Child
    as={Fragment}
    enter='duration-700 ease-out'
    enterFrom='-translate-x-full opacity-0'
    enterTo='translate-x-0 opacity-100'
    leave='duration-700 ease-in'
    leaveFrom='translate-y-0 opacity-100'
    leaveTo='translate-y-full opacity-0'
  >
    {children}
  </Transition.Child>
);

export const TGitHub = ({children}: TProps): JSX.Element => (
  <Transition.Child
    as={Fragment}
    enter='duration-700 ease-out'
    enterFrom='translate-y-full opacity-0'
    enterTo='translate-y-0 opacity-100'
    leave='duration-700 ease-in'
    leaveFrom='translate-x-0 opacity-100'
    leaveTo='translate-x-full opacity-0'
  >
    {children}
  </Transition.Child>
);
