'use client';

import {Fragment, type ReactNode} from 'react';
import {Transition} from '@headlessui/react';
import useHome from '@hooks/project/breezy/use-home';

export type TProps = {
  children: ReactNode;
};

export const TMessages = ({children}: TProps): JSX.Element => {
  const {menu} = useHome();
  return <Transition show={menu.messages}>{children}</Transition>;
};

export const TEmpty = ({children}: TProps): JSX.Element => {
  const {messages} = useHome();
  return (
    <Transition
      show={messages.list.length === 0}
      as={Fragment}
    >
      {children}
    </Transition>
  );
};
