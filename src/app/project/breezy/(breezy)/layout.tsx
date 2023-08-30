import '@app/project/breezy/(breezy)/layout.css';
import type {ReactNode} from 'react';

type RootLayoutProps = {
  children: ReactNode;
};

const RootLayout = ({children}: RootLayoutProps): JSX.Element => (
  <>{children}</>
);

export type {RootLayoutProps};
export default RootLayout;
