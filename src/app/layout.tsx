import '@fortawesome/fontawesome-svg-core/styles.css';
import {Online, RecaptchaV3, Redux, Viewport} from '@components/main/app';
import {Analytics} from '@vercel/analytics/react';
import type {ReactNode} from 'react';
import {config} from '@fortawesome/fontawesome-svg-core';
import {rootMetadata as metadata} from '@utils/metadata';

type RootLayoutProps = {
  children: ReactNode;
};

const RootLayout = ({children}: RootLayoutProps): JSX.Element => {
  config.autoAddCss = false;
  return (
    <html lang='en'>
      <body>
        <Redux>
          <RecaptchaV3>
            <Viewport>
              <Online>{children}</Online>
            </Viewport>
          </RecaptchaV3>
        </Redux>
        <Analytics />
      </body>
    </html>
  );
};

export {metadata};
export type {RootLayoutProps};
export default RootLayout;
