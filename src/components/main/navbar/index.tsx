import type {HTMLAttributeAnchorTarget, ReactNode} from 'react';
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
  target?: HTMLAttributeAnchorTarget;
};

const Navbar = ({logo, title, children}: NavbarProps): JSX.Element => (
  <nav className='fixed left-0 top-0 z-20 w-screen border-b-2 bg-white md:animate-fade-down md:animate-duration-700'>
    <div className='mx-4 flex items-center justify-between py-4 md:mx-16 md:py-3 lg:mx-20'>
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
        <span className='text-xl font-bold text-gray-700 sm:text-base'>
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
