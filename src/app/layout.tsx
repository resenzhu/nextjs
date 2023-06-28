import '@app/layout.css';
import {Analytics} from '@vercel/analytics/react';
import Navbar from '@components/main/navbar';
import type {ReactNode} from 'react';
import {rootMetadata as metadata} from '@utils/metadata';

type RootLayoutProps = {
  children: ReactNode;
};

const RootLayout = ({children}: RootLayoutProps): JSX.Element => (
  <html
    className='scroll-smooth'
    lang='en'
  >
    <body>
      <Navbar
        logo='/navbar/logo.webp'
        title='RESEN'
      >
        <Navbar.Menu
          url='/'
          label='Home'
        />
        <Navbar.Menu
          url='/about'
          label='About'
        />
        <Navbar.Menu
          url='/portfolio'
          label='Portfolio'
        />
        <Navbar.Menu
          url='/contact'
          label='Contact'
        />
      </Navbar>
      {children}
      <Analytics />
    </body>
  </html>
);

export {metadata};
export default RootLayout;
