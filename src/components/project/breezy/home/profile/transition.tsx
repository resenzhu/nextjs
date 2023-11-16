'use client';

import {Fragment, type ReactNode} from 'react';
import {Transition} from '@headlessui/react';
import useHome from '@hooks/project/breezy/use-home';

export type TProps = {
  children: ReactNode;
};

export const TProfile = ({children}: TProps): JSX.Element => {
  const {menu} = useHome();
  return (
    <Transition
      show={menu.profile}
      as={Fragment}
    >
      {children}
    </Transition>
  );
};

export const TFetching = ({children}: TProps): JSX.Element => {
  const {profile} = useHome();
  return (
    <Transition
      show={profile.fetching && !profile.fetched}
      as={Fragment}
    >
      {children}
    </Transition>
  );
};

export const TRetryFetch = ({children}: TProps): JSX.Element => {
  const {profile} = useHome();
  return (
    <Transition
      show={!profile.fetching && !profile.fetched}
      as={Fragment}
    >
      {children}
    </Transition>
  );
};

export const TFetched = ({children}: TProps): JSX.Element => {
  const {profile} = useHome();
  return (
    <Transition
      show={profile.fetched}
      as={Fragment}
    >
      {children}
    </Transition>
  );
};

export const TSettings = ({children}: TProps): JSX.Element => {
  const {settings} = useHome();
  return (
    <Transition
      show={settings.show}
      as={Fragment}
    >
      {children}
    </Transition>
  );
};
