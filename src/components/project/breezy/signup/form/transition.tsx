'use client';

import {Fragment, type ReactNode} from 'react';
import {Transition} from '@headlessui/react';
import useSignUp from '@hooks/project/breezy/use-signup';

export type TProps = {
  children: ReactNode;
};

export const TError = ({children}: TProps): JSX.Element => {
  const {form} = useSignUp();
  return (
    <Transition
      show={form.error.message.length !== 0}
      as={Fragment}
    >
      {children}
    </Transition>
  );
};

export const TSubmit = ({children}: TProps): JSX.Element => {
  const {form} = useSignUp();
  return (
    <Transition
      show={!form.submitting}
      as={Fragment}
    >
      {children}
    </Transition>
  );
};

export const TSubmitting = ({children}: TProps): JSX.Element => {
  const {form} = useSignUp();
  return (
    <Transition
      show={form.submitting}
      as={Fragment}
    >
      {children}
    </Transition>
  );
};
