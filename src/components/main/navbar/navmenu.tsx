'use client';

import type {HTMLAttributeAnchorTarget} from 'react';
import Link from 'next/link';
import useNavbar from '@hooks/main/use-navbar';

type NavMenuProps = {
  url: string;
  label: string;
  target?: HTMLAttributeAnchorTarget | undefined;
};

const NavMenu = ({url, label, target}: NavMenuProps) => {
  const {showSidenav, setShowSidenav} = useNavbar();

  const handleToggleSidenav = (show: boolean) => {
    if (show !== showSidenav) {
      setShowSidenav(show);
    }
  };

  return (
    <Link
      className='w-0 text-lg font-bold text-gray-600 duration-150 hover:text-blue-500'
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
