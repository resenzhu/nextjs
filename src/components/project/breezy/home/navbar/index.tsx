import type {IconDefinition} from '@fortawesome/free-solid-svg-icons';
import NavMenu from '@components/project/breezy/home/navbar/navmenu';
import type {ReactNode} from 'react';
import {TNavbar} from '@components/project/breezy/home/navbar/transition';

type NavbarProps = {
  children: ReactNode;
};

type MenuProps = {
  name: string;
  icon: IconDefinition;
};

const Navbar = ({children}: NavbarProps): JSX.Element => (
  <TNavbar>
    <nav className='fixed bottom-0 flex w-screen animate-fade-up justify-evenly border-t-2 bg-white shadow-sm animate-duration-700 md:relative md:h-full md:w-14 md:flex-col md:justify-normal md:border-r-2 md:border-t-0'>
      {children}
    </nav>
  </TNavbar>
);

const Menu = ({name, icon}: MenuProps): JSX.Element => (
  <NavMenu
    name={name}
    icon={icon}
  />
);

Navbar.Menu = Menu;

export type {NavbarProps, MenuProps};
export default Navbar;
