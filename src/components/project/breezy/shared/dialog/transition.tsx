'use client';

import {Fragment, type ReactNode} from 'react';
import {Transition} from '@headlessui/react';

export type TDialogProps = {
  show: boolean;
  children: ReactNode;
};

export type TProps = {
  children: ReactNode;
};

export const TDialog = ({show, children}: TDialogProps): JSX.Element => (
  <Transition
    show={show}
    as={Fragment}
  >
    {children}
  </Transition>
);

export const TDialogBackdrop = ({children}: TProps): JSX.Element => (
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

export const TDialogPanel = ({children}: TProps): JSX.Element => (
  <Transition.Child
    as={Fragment}
    enter='duration-150 ease-out'
    enterFrom='opacity-0'
    enterTo='opacity-100'
    leave='duration-150 ease-in'
    leaveFrom='opacity-100'
    leaveTo='opacity-0'
  >
    {children}
  </Transition.Child>
);
