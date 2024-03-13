import '@app/[locale]/project/breezy/(breezy)/layout.css';
import {Cookie, Socket} from '@components/project/breezy/layout';
import type {ReactNode} from 'react';

type RootLayoutProps = {
  children: ReactNode;
};

const RootLayout = ({children}: RootLayoutProps): JSX.Element => (
  <Socket>
    <Cookie>{children}</Cookie>
  </Socket>
);

export type {RootLayoutProps};
export default RootLayout;
