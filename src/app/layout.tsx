import type {ReactNode} from 'react';

type RootLayoutProps = {
  children: ReactNode;
};

const RootLayout = ({children}: RootLayoutProps): JSX.Element => (
  <html lang='en'>
    <body>{children}</body>
  </html>
);

export type {RootLayoutProps};
export default RootLayout;
