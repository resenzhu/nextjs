import type {IconDefinition} from '@fortawesome/free-solid-svg-icons';
import NavMenu from '@components/project/breezy/home/navbar/navmenu';
import type {ReactNode} from 'react';

type NavbarProps = {
  children: ReactNode;
};

type MenuProps = {
  name: string;
  icon: IconDefinition;
};

const Navbar = ({children}: NavbarProps): JSX.Element => (
  <nav className='fixed bottom-0 flex w-screen justify-evenly border-t-2 bg-white shadow-sm md:relative md:h-full md:w-14 md:flex-col md:justify-normal md:border-r-2 md:border-t-0'>
    {children}
  </nav>
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
