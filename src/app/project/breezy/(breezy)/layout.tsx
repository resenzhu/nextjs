import '@app/project/breezy/(breezy)/layout.css';
import type {ReactNode} from 'react';
import {Socket} from '@components/project/breezy/shared';

type RootLayoutProps = {
  children: ReactNode;
};

const RootLayout = ({children}: RootLayoutProps): JSX.Element => (
  <Socket>{children}</Socket>
);

export type {RootLayoutProps};
export default RootLayout;
