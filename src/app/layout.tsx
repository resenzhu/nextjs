import {Analytics} from '@vercel/analytics/react';
import {ReactNode} from 'react';

type RootLayoutProps =
{
  children: ReactNode
};

const RootLayout = ({children}: RootLayoutProps): JSX.Element =>
(
  <html lang='en'>
    <body>
      {children}
      <Analytics />
    </body>
  </html>
);

export default RootLayout;
