'use client';

import {Fragment, type ReactNode} from 'react';
import {Transition} from '@headlessui/react';
import useLogin from '@hooks/project/breezy/use-login';

export type TProps = {
  children: ReactNode;
};

export const TFormError = ({children}: TProps): JSX.Element => {
  const {form} = useLogin();
  return (
    <Transition
      show={form.error.message.length !== 0}
      as={Fragment}
    >
      {children}
    </Transition>
  );
};

export const TFormSubmit = ({children}: TProps): JSX.Element => {
  const {form} = useLogin();
  return (
    <Transition
      show={!form.submitting}
      as={Fragment}
    >
      {children}
    </Transition>
  );
};

export const TFormSubmitting = ({children}: TProps): JSX.Element => {
  const {form} = useLogin();
  return (
    <Transition
      show={form.submitting}
      as={Fragment}
    >
      {children}
    </Transition>
  );
};
