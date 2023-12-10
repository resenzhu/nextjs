'use client';

import {Fragment, type ReactNode} from 'react';
import {Transition} from '@headlessui/react';
import useDashboard from '@hooks/project/breezy/use-dashboard';

export type TProps = {
  children: ReactNode;
};

export const TUsers = ({children}: TProps): JSX.Element => {
  const {menu} = useDashboard();
  return (
    <Transition
      show={menu.users}
      as={Fragment}
    >
      {children}
    </Transition>
  );
};

export const TUsersFetching = ({children}: TProps): JSX.Element => {
  const {users} = useDashboard();
  return (
    <Transition
      show={users.fetching && !users.fetched}
      as={Fragment}
    >
      {children}
    </Transition>
  );
};

export const TUsersFetchRetry = ({children}: TProps): JSX.Element => {
  const {users} = useDashboard();
  return (
    <Transition
      show={!users.fetching && !users.fetched}
      as={Fragment}
    >
      {children}
    </Transition>
  );
};

export const TUsersFetched = ({children}: TProps): JSX.Element => {
  const {users} = useDashboard();
  return (
    <Transition
      show={users.fetched}
      as={Fragment}
    >
      {children}
    </Transition>
  );
};

export const TUsersEmpty = ({children}: TProps): JSX.Element => {
  const {users} = useDashboard();
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

export const TUsersList = ({children}: TProps): JSX.Element => {
  const {users} = useDashboard();
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
