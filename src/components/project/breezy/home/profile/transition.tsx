'use client';

import type {ReactNode} from 'react';
import {Transition} from '@headlessui/react';
import useHome from '@hooks/project/breezy/use-home';

export type TProps = {
  children: ReactNode;
};

export const T = ({children}: TProps): JSX.Element => {
  const {menu} = useHome();
  return <Transition show={menu.profile}>{children}</Transition>;
};
