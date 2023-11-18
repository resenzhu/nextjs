'use client';

import type {HTMLAttributeAnchorTarget} from 'react';
import Link from 'next/link';
import useNavbar from '@hooks/main/use-navbar';

type NavMenuProps = {
  label: string;
  url: string;
  target?: HTMLAttributeAnchorTarget | undefined;
};

const NavMenu = ({label, url, target}: NavMenuProps) => {
  const {sidenav, setSidenav} = useNavbar();

  const handleToggleSidenav = (show: boolean) => {
    if (sidenav !== show) {
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
