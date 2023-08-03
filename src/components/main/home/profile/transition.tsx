'use client';

import {Fragment, type ReactNode} from 'react';
import {Transition} from '@headlessui/react';
import useApp from '@hooks/main/use-app';
import useHome from '@hooks/main/use-home';

export type TProps = {
  children: ReactNode;
};

export const T = ({children}: TProps): JSX.Element => {
  const {viewport} = useApp();
  const {section, setSection} = useHome();

  const handleToggleExplore = (show: boolean): void => {
    if (show !== section.explore) {
      setTimeout((): void => {
        setSection({
          ...section,
          explore: show
        });
      }, 50);
    }
  };

  return (
    <>
      {viewport.width < 768 && (
        <Transition
          show={section.profile}
          as={Fragment}
          afterLeave={(): void => handleToggleExplore(true)}
        >
          {children}
        </Transition>
      )}
      {viewport.width >= 768 && <>{children}</>}
    </>
  );
};

export const TPicture = ({children}: TProps): JSX.Element => {
  const {viewport} = useApp();
  return (
    <>
      {viewport.width < 768 && (
        <Transition.Child
          as={Fragment}
          enter='duration-700 ease-out'
          enterFrom='-translate-y-[30vh] opacity-0'
          enterTo='translate-y-0 opacity-100'
          leave='duration-700 ease-in'
          leaveFrom='translate-y-0 opacity-100'
          leaveTo='-translate-y-[30vh] opacity-0'
        >
          {children}
        </Transition.Child>
      )}
      {viewport.width >= 768 && <>{children}</>}
    </>
  );
};

export const TName = ({children}: TProps): JSX.Element => {
  const {viewport} = useApp();
  return (
    <>
      {viewport.width < 768 && (
        <Transition.Child
          as={Fragment}
          enter='duration-700 ease-out'
          enterFrom='translate-x-[80vw] opacity-0'
          enterTo='translate-x-0 opacity-100'
          leave='duration-700 ease-in'
          leaveFrom='translate-x-0 opacity-100'
          leaveTo='-translate-x-[80vw] opacity-0'
        >
          {children}
        </Transition.Child>
      )}
      {viewport.width >= 768 && <>{children}</>}
    </>
  );
};

export const TSpecialty = ({children}: TProps): JSX.Element => {
  const {viewport} = useApp();
  return (
    <>
      {viewport.width < 768 && (
        <Transition.Child
          as={Fragment}
          enter='duration-700 ease-out'
          enterFrom='translate-x-[80vw] opacity-0'
          enterTo='translate-x-0 opacity-100'
          leave='duration-700 ease-in'
          leaveFrom='translate-x-0 opacity-100'
          leaveTo='-translate-x-[80vw] opacity-0'
        >
          {children}
        </Transition.Child>
      )}
      {viewport.width >= 768 && <>{children}</>}
    </>
  );
};

export const TBio = ({children}: TProps): JSX.Element => {
  const {viewport} = useApp();
  return (
    <>
      {viewport.width < 768 && (
        <Transition.Child
          as={Fragment}
          enter='duration-700 ease-out'
          enterFrom='translate-x-[80vw] opacity-0'
          enterTo='translate-x-0 opacity-100'
          leave='duration-700 ease-in'
          leaveFrom='translate-x-0 opacity-100'
          leaveTo='-translate-x-[80vw] opacity-0'
        >
          {children}
        </Transition.Child>
      )}
      {viewport.width >= 768 && <>{children}</>}
    </>
  );
};

export const TButtons = ({children}: TProps): JSX.Element => {
  const {viewport} = useApp();
  return (
    <>
      {viewport.width < 768 && (
        <Transition.Child
          as={Fragment}
          enter='duration-700 ease-out'
          enterFrom='-translate-x-[80vw] opacity-0'
          enterTo='translate-x-0 opacity-100'
          leave='duration-700 ease-in'
          leaveFrom='translate-x-0 opacity-100'
          leaveTo='translate-x-[80vw] opacity-0'
        >
          {children}
        </Transition.Child>
      )}
      {viewport.width >= 768 && <>{children}</>}
    </>
  );
};

export const TSocials = ({children}: TProps): JSX.Element => {
  const {viewport} = useApp();
  return (
    <>
      {viewport.width < 768 && (
        <Transition.Child
          as={Fragment}
          enter='duration-700 ease-out'
          enterFrom='translate-y-full opacity-0'
          enterTo='translate-y-0 opacity-100'
          leave='duration-700 ease-in'
          leaveFrom='translate-y-0 opacity-100'
          leaveTo='translate-y-full opacity-0'
        >
          {children}
        </Transition.Child>
      )}
      {viewport.width >= 768 && <>{children}</>}
    </>
  );
};
