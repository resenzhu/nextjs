'use client';

import {Fragment, type ReactNode} from 'react';
import {Transition} from '@headlessui/react';
import useDashboard from '@hooks/project/breezy/use-dashboard';

export type TProps = {
  children: ReactNode;
};

export const TMessages = ({children}: TProps): JSX.Element => {
  const {menu} = useDashboard();
  return (
    <Transition
      show={menu.messages}
      as={Fragment}
    >
      {children}
    </Transition>
  );
};

export const TMessagesEmpty = ({children}: TProps): JSX.Element => {
  const {messages} = useDashboard();
  return (
    <Transition
      show={messages.list.length === 0 && !messages.active}
      as={Fragment}
    >
      {children}
    </Transition>
  );
};

export const TMessagesList = ({children}: TProps): JSX.Element => {
  const {messages} = useDashboard();
  return (
    <Transition
      show={messages.list.length !== 0 && !messages.active}
      as={Fragment}
    >
      {children}
    </Transition>
  );
};

export const TMessagesActive = ({children}: TProps): JSX.Element => {
  const {messages} = useDashboard();
  return (
    <Transition
      show={messages.active !== null}
      as={Fragment}
    >
      {children}
    </Transition>
  );
};
