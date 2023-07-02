import Brand from '@components/main/navbar/brand';
import Nav from '@components/main/navbar/nav';
import type {ReactNode} from 'react';

type NavbarProps = {
  logo: string;
  title: string;
  children: ReactNode;
};

const Navbar = ({logo, title, children}: NavbarProps): JSX.Element => (
  <nav className='fixed left-0 top-0 z-10 w-screen border-b-2 bg-white'>
    <div className='mx-4 flex items-center justify-between py-4'>
      <Brand
        logo={logo}
        label={title}
      />
      <Nav>{children}</Nav>
    </div>
  </nav>
);

export type {NavbarProps};
export default Navbar;
