import '@app/[locale]/(main)/layout.css';
import Navbar from '@components/main/navbar';
import type {ReactNode} from 'react';
import {Socket} from '@components/main/layout';
import {useTranslations} from 'next-intl';

type RootLayoutProps = {
  children: ReactNode;
};

const RootLayout = ({children}: RootLayoutProps): JSX.Element => {
  const translate = useTranslations('main');
  return (
    <Socket>
      <div className='overflow-x-hidden pt-16 md:pt-14'>
        <Navbar
          logo='/images/main/navbar-brand-logo.webp'
          title={translate('navbar.brand')}
        >
          <Navbar.Route
            label={translate('navbar.menu.home')}
            url='/'
          />
          <Navbar.Route
            label={translate('navbar.menu.about')}
            url='/about'
          />
          <Navbar.Route
            label={translate('navbar.menu.portfolio')}
            url='/portfolio'
          />
          <Navbar.Route
            label={translate('navbar.menu.resources')}
            url='/resources'
          />
          <Navbar.Route
            label={translate('navbar.menu.contact')}
            url='/contact'
          />
          <Navbar.Route
            label={translate('navbar.menu.github')}
            url='https://github.com/resenzhu'
            target='_blank'
          />
        </Navbar>
        {children}
      </div>
    </Socket>
  );
};

export type {RootLayoutProps};
export default RootLayout;
