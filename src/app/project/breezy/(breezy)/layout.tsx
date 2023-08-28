import type {ReactNode} from 'react';
import {rootMetadata as metadata} from '@utils/metadata';

type RootLayoutProps = {
  children: ReactNode;
};

const RootLayout = ({children}: RootLayoutProps): JSX.Element => {
  return (
    <html lang='en'>
      <body>
        {children}
      </body>
    </html>
  );
};

export {metadata};
export type {RootLayoutProps};
export default RootLayout;
