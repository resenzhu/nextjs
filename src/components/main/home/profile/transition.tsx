'use client';

import {ReactNode} from 'react';
import {Transition} from '@headlessui/react';
import useHome from '@hooks/main/use-home';

export type TProps = {
  className?: string;
  children: ReactNode;
};

export const T = ({className, children}: TProps): JSX.Element => {
  const {section, setSection} = useHome();

  const handleToggleExplore = (show: boolean): void => {
    if (show !== section.explore) {
      setSection({
        ...section,
        explore: show
      });
    }
  };

  return (
    <Transition
      className={className}
      show={section.profile}
      afterLeave={(): void => handleToggleExplore(true)}
    >
      {children}
    </Transition>
  );
};

export const TPicture = ({className, children}: TProps): JSX.Element => (
  <Transition.Child
    className={className}
    enter='duration-700 ease-out'
    enterFrom='-translate-y-[30vh] opacity-0'
    enterTo='translate-y-0 opacity-100'
    leave='duration-700 ease-in'
    leaveFrom='translate-y-0 opacity-100'
    leaveTo='-translate-y-[30vh] opacity-0'
  >
    {children}
  </Transition.Child>
);

export const TName = ({className, children}: TProps): JSX.Element => (
  <Transition.Child
    className={className}
    enter='duration-700 ease-out'
    enterFrom='translate-x-[80vw] opacity-0'
    enterTo='translate-x-0 opacity-100'
    leave='duration-700 ease-in'
    leaveFrom='translate-x-0 opacity-100'
    leaveTo='-translate-x-[80vw] opacity-0'
  >
    {children}
  </Transition.Child>
);

export const TSpecialty = ({className, children}: TProps): JSX.Element => (
  <Transition.Child
    className={className}
    enter='duration-700 ease-out'
    enterFrom='translate-x-[80vw] opacity-0'
    enterTo='translate-x-0 opacity-100'
    leave='duration-700 ease-in'
    leaveFrom='translate-x-0 opacity-100'
    leaveTo='-translate-x-[80vw] opacity-0'
  >
    {children}
  </Transition.Child>
);

export const TBio = ({className, children}: TProps): JSX.Element => (
  <Transition.Child
    className={className}
    enter='duration-700 ease-out'
    enterFrom='translate-x-[80vw] opacity-0'
    enterTo='translate-x-0 opacity-100'
    leave='duration-700 ease-in'
    leaveFrom='translate-x-0 opacity-100'
    leaveTo='-translate-x-[80vw] opacity-0'
  >
    {children}
  </Transition.Child>
);

export const TButtons = ({className, children}: TProps): JSX.Element => (
  <Transition.Child
    className={className}
    enter='duration-700 ease-out'
    enterFrom='-translate-x-[80vw] opacity-0'
    enterTo='translate-x-0 opacity-100'
    leave='duration-700 ease-in'
    leaveFrom='translate-x-0 opacity-100'
    leaveTo='translate-x-[80vw] opacity-0'
  >
    {children}
  </Transition.Child>
);

export const TSocials = ({className, children}: TProps): JSX.Element => (
  <Transition.Child
    className={className}
    enter='duration-700 ease-out'
    enterFrom='translate-y-full opacity-0'
    enterTo='translate-y-0 opacity-100'
    leave='duration-700 ease-in'
    leaveFrom='translate-y-0 opacity-100'
    leaveTo='translate-y-full opacity-0'
  >
    {children}
  </Transition.Child>
);
