'use client';

import {Fragment, ReactNode} from 'react';
import {Transition} from '@headlessui/react';
import useApp from '@hooks/main/use-app';
import useHome from '@hooks/main/use-home';

export type TProps = {
  children: ReactNode;
};

export const T = ({children}: TProps): JSX.Element => {
  const {section} = useHome();

  return (
    <Transition
      show={section.chatbot}
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

export const TChatbot = ({children}: TProps): JSX.Element => (
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
);

export const TOffline = ({children}: TProps): JSX.Element => {
  const {online} = useApp();

  return (
    <Transition
      show={!online}
      as={Fragment}
      enter='duration-150 ease-out'
      enterFrom='-translate-x-full opacity-0'
      enterTo='translate-x-0 opacity-100'
      leave='duration-150 ease-in'
      leaveFrom='translate-x-0 opacity-100'
      leaveTo='-translate-x-full opacity-0'
    >
      {children}
    </Transition>
  );
};

export const TTyping = ({children}: TProps): JSX.Element => {
  const {chatbot} = useHome();

  return (
    <Transition
      show={chatbot.typing}
      as={Fragment}
      enter='duration-150 ease-out'
      enterFrom='-translate-x-full opacity-0'
      enterTo='translate-x-0 opacity-100'
      leave='duration-150 ease-in'
      leaveFrom='translate-x-0 opacity-100'
      leaveTo='-translate-x-full opacity-0'
    >
      {children}
    </Transition>
  );
};
