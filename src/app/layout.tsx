import '@app/layout.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import {Online, Redux, Viewport} from '@components/main/app';
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
    <html lang='en'>
      <body className='pt-16 md:pt-14'>
        <Redux>
          <Viewport>
            <Online>
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
                  url='https://github.com/resenzhu/nextjs'
                  target='_blank'
                />
              </Navbar>
              {children}
            </Online>
          </Viewport>
        </Redux>
        <Analytics />
      </body>
    </html>
  );
};

export {metadata};
export type {RootLayoutProps};
export default RootLayout;
