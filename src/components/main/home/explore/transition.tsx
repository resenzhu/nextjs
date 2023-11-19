'use client';

import {Fragment, type ReactNode} from 'react';
import {Transition} from '@headlessui/react';
import useApp from '@hooks/app/use-app';
import useHome from '@hooks/main/use-home';

export type TProps = {
  children: ReactNode;
};

export const TExplore = ({children}: TProps): JSX.Element => {
  const {viewport} = useApp();
  const {section, setSection} = useHome();

  const handleToggleProfile = (show: boolean): void => {
    if (section.profile !== show) {
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
      show={(viewport.width < 768 && section.explore) || viewport.width >= 768}
      as={Fragment}
      afterLeave={(): void => handleToggleProfile(true)}
    >
      {children}
    </Transition>
  );
};

export const TExploreHome = ({children}: TProps): JSX.Element => {
  const {viewport} = useApp();
  return (
    <>
      {viewport.width < 768 && (
        <Transition.Child
          as={Fragment}
          enter='duration-700 ease-out'
          enterFrom='-translate-y-full opacity-0'
          enterTo='translate-y-0 opacity-100'
          leave='duration-700 ease-in'
          leaveFrom='translate-x-0 opacity-100'
          leaveTo='-translate-x-full opacity-0'
        >
          {children}
        </Transition.Child>
      )}
    </>
  );
};

export const TExploreAbout = ({children}: TProps): JSX.Element => (
  <Transition.Child
    as={Fragment}
    enter='duration-700 ease-out'
    enterFrom='translate-x-full opacity-0 md:-translate-x-full'
    enterTo='translate-x-0 opacity-100 md:translate-x-0'
    leave='duration-700 ease-in'
    leaveFrom='translate-y-0 opacity-100'
    leaveTo='-translate-y-full opacity-0'
  >
    {children}
  </Transition.Child>
);

export const TExplorePortfolio = ({children}: TProps): JSX.Element => (
  <Transition.Child
    as={Fragment}
    enter='duration-700 ease-out'
    enterFrom='-translate-x-full opacity-0 md:translate-x-full'
    enterTo='translate-x-0 opacity-100 md:translate-x-0'
    leave='duration-700 ease-in'
    leaveFrom='translate-x-0 opacity-100'
    leaveTo='translate-x-full opacity-0'
  >
    {children}
  </Transition.Child>
);

export const TExploreResources = ({children}: TProps): JSX.Element => (
  <Transition.Child
    as={Fragment}
    enter='duration-700 ease-out'
    enterFrom='translate-x-full opacity-0 md:-translate-x-full'
    enterTo='translate-x-0 opacity-100 md:translate-x-0'
    leave='duration-700 ease-in'
    leaveFrom='translate-x-0 opacity-100'
    leaveTo='-translate-x-full opacity-0'
  >
    {children}
  </Transition.Child>
);

export const TExploreContact = ({children}: TProps): JSX.Element => (
  <Transition.Child
    as={Fragment}
    enter='duration-700 ease-out'
    enterFrom='-translate-x-full opacity-0 md:translate-x-full'
    enterTo='translate-x-0 opacity-100 md:translate-x-0'
    leave='duration-700 ease-in'
    leaveFrom='translate-y-0 opacity-100'
    leaveTo='translate-y-full opacity-0'
  >
    {children}
  </Transition.Child>
);

export const TExploreGitHub = ({children}: TProps): JSX.Element => (
  <Transition.Child
    as={Fragment}
    enter='duration-700 ease-out'
    enterFrom='translate-y-full opacity-0 md:translate-y-full'
    enterTo='translate-y-0 opacity-100 md:translate-y-0'
    leave='duration-700 ease-in'
    leaveFrom='translate-x-0 opacity-100'
    leaveTo='translate-x-full opacity-0'
  >
    {children}
  </Transition.Child>
);
