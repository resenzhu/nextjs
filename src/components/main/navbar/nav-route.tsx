'use client';

import type {HTMLAttributeAnchorTarget} from 'react';
import {Link} from '@navigation';
import useNavbar from '@hooks/main/use-navbar';

type NavRouteProps = {
  label: string;
  url: string;
  target?: HTMLAttributeAnchorTarget | undefined;
};

const NavRoute = ({label, url, target}: NavRouteProps) => {
  const {isSideNavOpen, setIsSideNavOpen} = useNavbar();

  const handleToggleSideNav = (open: boolean) => {
    if (isSideNavOpen !== open) {
      setIsSideNavOpen(open);
    }
  };

  return (
    <Link
      className='w-fit text-lg font-bold text-gray-600 duration-150 hover:text-cyan-600 md:text-sm'
      href={url}
      target={target}
      onClick={(): void => handleToggleSideNav(false)}
    >
      {label}
    </Link>
  );
};

export type {NavRouteProps};
export default NavRoute;
