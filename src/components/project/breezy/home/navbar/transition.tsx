'use client';

import {Fragment, type ReactNode} from 'react';
import {Transition} from '@headlessui/react';
import useDashboard from '@hooks/project/breezy/use-dashboard';

export type TProps = {
  children: ReactNode;
};

export const TNavbar = ({children}: TProps): JSX.Element => {
  const {messages} = useDashboard();
  return (
    <Transition
      show={!messages.active}
      as={Fragment}
    >
      {children}
    </Transition>
  );
};
