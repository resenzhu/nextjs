'use client';

import {Fragment, type ReactNode} from 'react';
import {Transition} from '@headlessui/react';
import useHome from '@hooks/project/breezy/use-home';

export type TProps = {
  children: ReactNode;
};

export const TUsers = ({children}: TProps): JSX.Element => {
  const {users} = useHome();
  return <Transition show={users.show}>{children}</Transition>;
};

export const TFetching = ({children}: TProps): JSX.Element => {
  const {users} = useHome();
  return (
    <Transition
      show={users.fetching && !users.fetched}
      as={Fragment}
    >
      {children}
    </Transition>
  );
};

export const TRetryFetch = ({children}: TProps): JSX.Element => {
  const {users} = useHome();
  return (
    <Transition
      show={!users.fetching && !users.fetched}
      as={Fragment}
    >
      {children}
    </Transition>
  );
};

export const TFetched = ({children}: TProps): JSX.Element => {
  const {users} = useHome();
  return (
    <Transition
      show={users.fetched}
      as={Fragment}
    >
      {children}
    </Transition>
  );
};

export const TEmpty = ({children}: TProps): JSX.Element => {
  const {users} = useHome();
  return (
    <Transition
      show={
        users.list.filter((user): boolean => user.session.status !== 'offline')
          .length === 0
      }
      as={Fragment}
    >
      {children}
    </Transition>
  );
};

export const TList = ({children}: TProps): JSX.Element => {
  const {users} = useHome();
  return (
    <Transition
      show={
        users.list.filter((user): boolean => user.session.status !== 'offline')
          .length !== 0
      }
      as={Fragment}
    >
      {children}
    </Transition>
  );
};
