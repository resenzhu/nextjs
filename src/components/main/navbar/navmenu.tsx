import type {HTMLAttributeAnchorTarget} from 'react';
import Link from 'next/link';

type NavMenuProps = {
  url: string;
  label: string;
  target?: HTMLAttributeAnchorTarget;
};

const NavMenu = ({url, label, target}: NavMenuProps) => (
  <Link
    className='w-0 text-lg font-bold text-gray-600 duration-150 hover:text-blue-500'
    href={url}
    target={target}
  >
    {label}
  </Link>
);

export type {NavMenuProps};
export default NavMenu;
