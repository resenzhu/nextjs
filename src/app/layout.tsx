import '@app/layout.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import {Analytics} from '@vercel/analytics/react';
import Navbar from '@components/main/navbar';
import type {ReactNode} from 'react';
import {config} from '@fortawesome/fontawesome-svg-core';
import {rootMetadata as metadata} from '@utils/metadata';

type RootLayoutProps = {
  children: ReactNode;
};

const RootLayout = ({children}: RootLayoutProps): JSX.Element => {
  config.autoAddCss = false;

  return (
    <html
      className='scroll-smooth'
      lang='en'
    >
      <body>
        <Navbar
          logo='/main/navbar/logo.webp'
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
          <Navbar.Menu
            url='https://github.com/resenzhu/nextjs'
            label='GitHub'
            target='_blank'
          />
        </Navbar>
        <div className='pt-16'>{children}</div>
        <Analytics />
      </body>
    </html>
  );
};

export {metadata};
export type {RootLayoutProps};
export default RootLayout;
