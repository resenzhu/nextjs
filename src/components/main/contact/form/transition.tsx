'use client';

import {Fragment, type ReactNode} from 'react';
import {Transition} from '@headlessui/react';
import useContact from '@hooks/main/use-contact';

export type TProps = {
  children: ReactNode;
};

export const TLabelName = ({children}: TProps): JSX.Element => {
  const {form} = useContact();
  return (
    <Transition
      show={form.name.length !== 0}
      as={Fragment}
    >
      {children}
    </Transition>
  );
};

export const TLabelEmail = ({children}: TProps): JSX.Element => {
  const {form} = useContact();
  return (
    <Transition
      show={form.email.length !== 0}
      as={Fragment}
    >
      {children}
    </Transition>
  );
};

export const TLabelMessage = ({children}: TProps): JSX.Element => {
  const {form} = useContact();
  return (
    <Transition
      show={form.message.length !== 0}
      as={Fragment}
    >
      {children}
    </Transition>
  );
};

export const TFormError = ({children}: TProps): JSX.Element => {
  const {form} = useContact();
  return (
    <Transition
      show={form.error.length !== 0}
      as={Fragment}
    >
      {children}
    </Transition>
  );
};

export const TFormSuccess = ({children}: TProps): JSX.Element => {
  const {form} = useContact();
  return (
    <Transition
      show={form.success.length !== 0}
      as={Fragment}
    >
      {children}
    </Transition>
  );
};

export const TFormSubmit = ({children}: TProps): JSX.Element => {
  const {form} = useContact();
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
  const {form} = useContact();
  return (
    <Transition
      show={form.submitting}
      as={Fragment}
    >
      {children}
    </Transition>
  );
};
