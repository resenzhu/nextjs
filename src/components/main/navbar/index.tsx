import type {HTMLAttributeAnchorTarget, ReactNode} from 'react';
import Brand from '@components/main/navbar/brand';
import Link from 'next/link';
import Nav from '@components/main/navbar/nav';

type NavbarProps = {
  logo: string;
  title: string;
  children: ReactNode;
};

type MenuProps = {
  url: string;
  label: string;
  target?: HTMLAttributeAnchorTarget;
};

const Navbar = ({logo, title, children}: NavbarProps): JSX.Element => (
  <nav className='fixed left-0 top-0 w-screen border-b-2 bg-white'>
    <div className='mx-4 flex items-center justify-between py-4'>
      <Brand
        logo={logo}
        label={title}
      />
      <Nav>{children}</Nav>
    </div>
  </nav>
);

const Menu = ({url, label, target}: MenuProps) => (
  <Link
    className='w-0 text-lg font-bold text-gray-600 duration-150 hover:text-blue-500'
    href={url}
    target={target}
  >
    {label}
  </Link>
);

Navbar.Menu = Menu;

export type {NavbarProps, MenuProps};
export default Navbar;
