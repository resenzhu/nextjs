import NavRoute, {
  type NavRouteProps as RouteProps
} from '@components/main/navbar/nav-route';
import Image from 'next/image';
import {Link} from '@navigation';
import Nav from '@components/main/navbar/nav';
import NavLanguage from '@components/main/navbar/nav-language';
import type {ReactNode} from 'react';

type NavbarProps = {
  logo: {
    src: string;
    alt: string;
  };
  title: string;
  children: ReactNode;
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
          src={logo.src}
          width={30}
          height={30}
          alt={logo.alt}
        />
        <span className='text-xl font-bold text-gray-700 sm:text-base'>
          {title}
        </span>
      </Link>
      <Nav>{children}</Nav>
    </div>
  </nav>
);

const Route = ({label, url, target}: RouteProps): JSX.Element => (
  <NavRoute
    label={label}
    url={url}
    target={target}
  />
);

const Language = (): JSX.Element => <NavLanguage />;

Navbar.Route = Route;
Navbar.Language = Language;

export type {NavbarProps, RouteProps};
export default Navbar;
