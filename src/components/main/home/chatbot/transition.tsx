'use client';

import {Fragment, type ReactNode} from 'react';
import {Transition} from '@headlessui/react';
import useApp from '@hooks/app/use-app';
import useHome from '@hooks/main/use-home';

export type TProps = {
  children: ReactNode;
};

export const TChatbot = ({children}: TProps): JSX.Element => {
  const {section} = useHome();
  const {viewport} = useApp();
  return (
    <>
      {viewport.width < 768 && (
        <Transition
          show={section.chatbot}
          as={Fragment}
        >
          {children}
        </Transition>
      )}
      {viewport.width >= 768 && <>{children}</>}
    </>
  );
};

export const TChatbotBackdrop = ({children}: TProps): JSX.Element => {
  const {viewport} = useApp();
  return (
    <>
      {viewport.width < 768 && (
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
      )}
    </>
  );
};

export const TChatbotBox = ({children}: TProps): JSX.Element => {
  const {viewport} = useApp();
  return (
    <>
      {viewport.width < 768 && (
        <Transition.Child
          as={Fragment}
          enter='duration-150 ease-out'
          enterFrom='translate-y-full'
          enterTo='translate-y-0'
          leave='duration-150 ease-in'
          leaveFrom='translate-y-0'
          leaveTo='translate-y-full'
        >
          {children}
        </Transition.Child>
      )}
      {viewport.width >= 768 && <>{children}</>}
    </>
  );
};

export const TOffline = ({children}: TProps): JSX.Element => {
  const {online} = useApp();
  return (
    <Transition
      show={!online}
      as={Fragment}
    >
      {children}
    </Transition>
  );
};
