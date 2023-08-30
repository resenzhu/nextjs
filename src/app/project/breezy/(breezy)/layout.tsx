import '@app/project/breezy/(breezy)/layout.css';
import type {ReactNode} from 'react';
import {rootMetadata as metadata} from '@utils/metadata';

type RootLayoutProps = {
  children: ReactNode;
};

const RootLayout = ({children}: RootLayoutProps): JSX.Element => (
  <>{children}</>
);

export {metadata};
export type {RootLayoutProps};
export default RootLayout;
