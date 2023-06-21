import {Analytics} from '@vercel/analytics/react';
import {ReactNode} from 'react';

type RootLayout =
{
  children: ReactNode
};

const RootLayout = ({children}: RootLayout): JSX.Element =>
(
  <html lang='en'>
    <body>
      {children}
      <Analytics />
    </body>
  </html>
);

export default RootLayout;
