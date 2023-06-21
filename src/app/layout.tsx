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
    </body>
  </html>
);

export default RootLayout;
