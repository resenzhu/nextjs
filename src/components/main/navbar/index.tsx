import {type HTMLAttributeAnchorTarget, ReactNode} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Nav from '@components/main/navbar/nav';
import NavMenu from '@components/main/navbar/navmenu';

type NavbarProps = {
  logo: string;
  title: string;
  children: ReactNode;
};

type MenuProps = {
  label: string;
  url: string;
  target?: HTMLAttributeAnchorTarget | undefined;
};

const Navbar = ({logo, title, children}: NavbarProps): JSX.Element => (
  <nav className='fixed left-0 top-0 z-10 w-screen border-b-2 bg-white'>
    <div className='mx-4 flex items-center justify-between py-4 sm:mx-12 sm:py-3 md:mx-16 lg:mx-20'>
      <Link
        className='flex items-center justify-center'
        href='/'
      >
        <Image
          className='mr-2 rounded-md'
          src={logo}
          width={30}
          height={30}
          alt='web brand logo'
        />
        <span className='mb-auto text-xl font-bold text-gray-700 sm:text-base sm:mb-0'>
          {title}
        </span>
      </Link>
      <Nav>{children}</Nav>
    </div>
  </nav>
);

const Menu = ({label, url, target}: MenuProps): JSX.Element => (
  <NavMenu
    label={label}
    url={url}
    target={target}
  />
);

Navbar.Menu = Menu;

export type {NavbarProps, MenuProps};
export default Navbar;
