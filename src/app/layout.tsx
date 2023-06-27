import '@app/layout.css';
import {Analytics} from '@vercel/analytics/react';
import type {ReactNode} from 'react';
import {rootMetadata as metadata} from '@utils/metadata';

type RootLayoutProps = {
  children: ReactNode;
};

const RootLayout = ({children}: RootLayoutProps): JSX.Element => (
  <html lang='en'>
    <body>
      {children}
      <Analytics />
    </body>
  </html>
);

export {metadata};
export default RootLayout;
