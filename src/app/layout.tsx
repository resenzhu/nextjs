import '@app/layout.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import {NavMenu, Navbar} from '@components/main/navbar';
import {Analytics} from '@vercel/analytics/react';
import type {ReactNode} from 'react';
import Redux from '@redux/redux';
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
        <Redux>
          <Navbar
            logo='/images/main/navbar/logo.webp'
            title='RESEN'
          >
            <NavMenu
              url='/'
              label='Home'
            />
            <NavMenu
              url='/about'
              label='About'
            />
            <NavMenu
              url='/portfolio'
              label='Portfolio'
            />
            <NavMenu
              url='/contact'
              label='Contact'
            />
            <NavMenu
              url='https://github.com/resenzhu/nextjs'
              label='GitHub'
              target='_blank'
            />
          </Navbar>
          <div className='pt-16'>{children}</div>
        </Redux>
        <Analytics />
      </body>
    </html>
  );
};

export {metadata};
export type {RootLayoutProps};
export default RootLayout;
