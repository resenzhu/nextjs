import '@app/(main)/layout.css';
import Navbar from '@components/main/navbar';
import type {ReactNode} from 'react';
import {Socket} from '@components/main/layout';

type RootLayoutProps = {
  children: ReactNode;
};

const RootLayout = ({children}: RootLayoutProps): JSX.Element => (
  <Socket>
    <div className='overflow-x-hidden pt-16 md:pt-14'>
      <Navbar
        logo='/images/main/navbar-brand-logo.webp'
        title='RESEN'
      >
        <Navbar.Menu
          label='Home'
          url='/'
        />
        <Navbar.Menu
          label='About'
          url='/about'
        />
        <Navbar.Menu
          label='Portfolio'
          url='/portfolio'
        />
        <Navbar.Menu
          label='Resources'
          url='/resources'
        />
        <Navbar.Menu
          label='Contact'
          url='/contact'
        />
        <Navbar.Menu
          label='GitHub'
          url='https://github.com/resenzhu'
          target='_blank'
        />
      </Navbar>
      {children}
    </div>
  </Socket>
);

export type {RootLayoutProps};
export default RootLayout;
