import '@fortawesome/fontawesome-svg-core/styles.css';
import {Online, Redux, Viewport} from '@components/app';
import {Analytics} from '@vercel/analytics/react';
import type {ReactNode} from 'react';
import {config} from '@fortawesome/fontawesome-svg-core';
import {rootMetadata as metadata} from '@utils/metadata';

type RootLayoutProps = {
  children: ReactNode;
  params: {
    locale: string;
  };
};

const RootLayout = ({
  children,
  params: {locale}
}: RootLayoutProps): JSX.Element => {
  config.autoAddCss && (config.autoAddCss = false);
  return (
    <html lang={locale}>
      <body>
        <Redux>
          <Viewport>
            <Online>{children}</Online>
          </Viewport>
        </Redux>
        <Analytics />
      </body>
    </html>
  );
};

export {metadata};
export type {RootLayoutProps};
export default RootLayout;
