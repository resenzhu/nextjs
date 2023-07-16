'use client';

import {ReactNode} from 'react';
import {Transition} from '@headlessui/react';
import useHome from '@hooks/main/use-home';

export type TProps = {
  className?: string;
  children: ReactNode;
};

export const T = ({className, children}: TProps): JSX.Element => {
  const {explore} = useHome();

  return (
    <Transition
      className={className}
      show={!explore}
    >
      {children}
    </Transition>
  );
};

export const TPicture = ({className, children}: TProps): JSX.Element => (
  <Transition.Child
    className={className}
    leave='duration-500 ease-in'
    leaveFrom='translate-y-0'
    leaveTo='-translate-y-[30vh]'
  >
    {children}
  </Transition.Child>
);

export const TName = ({className, children}: TProps): JSX.Element => (
  <Transition.Child
    className={className}
    leave='duration-500 ease-in'
    leaveFrom='translate-x-0'
    leaveTo='-translate-x-[100vw]'
  >
    {children}
  </Transition.Child>
);

export const TSpecialty = ({className, children}: TProps): JSX.Element => (
  <Transition.Child
    className={className}
    leave='duration-500 ease-in'
    leaveFrom='translate-x-0'
    leaveTo='-translate-x-[100vw]'
  >
    {children}
  </Transition.Child>
);

export const TBio = ({className, children}: TProps): JSX.Element => (
  <Transition.Child
    className={className}
    leave='duration-500 ease-in'
    leaveFrom='translate-x-0'
    leaveTo='-translate-x-[100vw]'
  >
    {children}
  </Transition.Child>
);

export const TButtons = ({className, children}: TProps): JSX.Element => (
  <Transition.Child
    className={className}
    leave='duration-500 ease-in'
    leaveFrom='translate-x-0'
    leaveTo='translate-x-[100vw]'
  >
    {children}
  </Transition.Child>
);

export const TSocials = ({className, children}: TProps): JSX.Element => (
  <Transition.Child
    className={className}
    leave='duration-500 ease-in'
    leaveFrom='translate-y-0'
    leaveTo='translate-y-full'
  >
    {children}
  </Transition.Child>
);
