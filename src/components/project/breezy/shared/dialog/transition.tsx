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

export const TDialog = ({show, children}: TDialogProps): JSX.Element => {
  return (
    <Transition
      show={show}
      as={Fragment}
    >
      {children}
    </Transition>
  );
};
