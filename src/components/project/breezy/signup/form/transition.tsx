'use client';

import {Fragment, type ReactNode} from 'react';
import {Transition} from '@headlessui/react';
import useSignUp from '@hooks/project/breezy/use-signup';

export type TProps = {
  children: ReactNode;
};

export const TRecaptchaLoading = ({children}: TProps): JSX.Element => {
  const {form} = useSignUp();
  return (
    <Transition
      show={form.recaptcha.loading}
      as={Fragment}
    >
      {children}
    </Transition>
  );
};

export const TFormError = ({children}: TProps): JSX.Element => {
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

export const TFormSubmit = ({children}: TProps): JSX.Element => {
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

export const TFormSubmitting = ({children}: TProps): JSX.Element => {
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
