'use client';

import {Fragment, type ReactNode} from 'react';
import {Transition} from '@headlessui/react';
import useDashboard from '@hooks/project/breezy/use-dashboard';

export type TProps = {
  children: ReactNode;
};

export const TProfile = ({children}: TProps): JSX.Element => {
  const {menu} = useDashboard();
  return (
    <Transition
      show={menu.profile}
      as={Fragment}
    >
      {children}
    </Transition>
  );
};

export const TProfileFetching = ({children}: TProps): JSX.Element => {
  const {profile} = useDashboard();
  return (
    <Transition
      show={profile.fetching && !profile.fetched}
      as={Fragment}
    >
      {children}
    </Transition>
  );
};

export const TProfileFetchRetry = ({children}: TProps): JSX.Element => {
  const {profile} = useDashboard();
  return (
    <Transition
      show={!profile.fetching && !profile.fetched}
      as={Fragment}
    >
      {children}
    </Transition>
  );
};

export const TProfileFetched = ({children}: TProps): JSX.Element => {
  const {profile} = useDashboard();
  return (
    <Transition
      show={profile.fetched}
      as={Fragment}
    >
      {children}
    </Transition>
  );
};

export const TProfileSettings = ({children}: TProps): JSX.Element => {
  const {settings} = useDashboard();
  return (
    <Transition
      show={settings.show}
      as={Fragment}
    >
      {children}
    </Transition>
  );
};
