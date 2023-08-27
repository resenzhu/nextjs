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

export const TError = ({children}: TProps): JSX.Element => {
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

export const TSuccess = ({children}: TProps): JSX.Element => {
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

export const TSubmit = ({children}: TProps): JSX.Element => {
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

export const TSubmitting = ({children}: TProps): JSX.Element => {
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
