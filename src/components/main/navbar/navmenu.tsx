'use client';

import type {HTMLAttributeAnchorTarget} from 'react';
import Link from 'next/link';
import useApp from '@hooks/main/use-app';

type NavMenuProps = {
  url: string;
  label: string;
  target?: HTMLAttributeAnchorTarget | undefined;
};

const NavMenu = ({url, label, target}: NavMenuProps) => {
  const {sidenav, setSidenav} = useApp();

  const handleSetSidenav = (show: boolean) => {
    if (show !== sidenav) {
      setSidenav(show);
    }
  };

  return (
    <Link
      className='w-0 text-lg font-bold text-gray-600 duration-150 hover:text-blue-500 sm:text-sm'
      href={url}
      target={target}
      onClick={(): void => handleSetSidenav(false)}
    >
      {label}
    </Link>
  );
};

export type {NavMenuProps};
export default NavMenu;
