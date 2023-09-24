'use client';

import type {HTMLAttributeAnchorTarget} from 'react';
import Link from 'next/link';
import useApp from '@hooks/main/use-app';

type NavMenuProps = {
  url: string;
  label: string;
  target?: HTMLAttributeAnchorTarget;
};

const NavMenu = ({url, label, target}: NavMenuProps) => {
  const {sidenav, setSidenav} = useApp();

  const handleToggleSidenav = (show: boolean) => {
    if (show !== sidenav) {
      setSidenav(show);
    }
  };

  return (
    <Link
      className='w-fit text-lg font-bold text-gray-600 duration-150 hover:text-cyan-600 md:text-sm'
      href={url}
      target={target}
      onClick={(): void => handleToggleSidenav(false)}
    >
      {label}
    </Link>
  );
};

export type {NavMenuProps};
export default NavMenu;
