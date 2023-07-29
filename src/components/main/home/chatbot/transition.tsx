'use client';

import {Fragment, type ReactNode} from 'react';
import {Transition} from '@headlessui/react';
import useApp from '@hooks/main/use-app';
import useHome from '@hooks/main/use-home';

export type TProps = {
  children: ReactNode;
};

export const T = ({children}: TProps): JSX.Element => {
  const {section} = useHome();
  const {viewport} = useApp();
  return (
    <Transition
      show={(viewport.width <= 640 && section.chatbot) || viewport.width > 640}
      as={Fragment}
    >
      {children}
    </Transition>
  );
};

export const TBackdrop = ({children}: TProps): JSX.Element => {
  const {viewport} = useApp();
  return (
    <>
      {viewport.width <= 640 && (
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
      {viewport.width > 640 && <>{children}</>}
    </>
  );
};

export const TChatbot = ({children}: TProps): JSX.Element => {
  const {viewport} = useApp();
  return (
    <>
      {viewport.width <= 640 && (
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
      {viewport.width > 640 && <>{children}</>}
    </>
  );
};
