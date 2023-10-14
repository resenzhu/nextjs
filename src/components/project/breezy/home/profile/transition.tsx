'use client';

import type {ReactNode} from 'react';
import {Transition} from '@headlessui/react';
import useHome from '@hooks/project/breezy/use-home';

export type TProps = {
  children: ReactNode;
};

export const TProfile = ({children}: TProps): JSX.Element => {
  const {profile} = useHome();
  return <Transition show={profile.show}>{children}</Transition>;
};
