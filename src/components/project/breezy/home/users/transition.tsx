'use client';

import type {ReactNode} from 'react';
import {Transition} from '@headlessui/react';
import useHome from '@hooks/project/breezy/use-home';

export type TProps = {
  children: ReactNode;
};

export const TUsers = ({children}: TProps): JSX.Element => {
  const {menu} = useHome();
  return <Transition show={menu.users}>{children}</Transition>;
};