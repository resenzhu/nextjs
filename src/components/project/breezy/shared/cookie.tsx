'use client';

import {type ReactNode, useEffect, useState} from 'react';
import cookie from 'js-cookie';
import {usePathname} from 'next/navigation';

type CookieProps = {
  children: ReactNode;
};

const Cookie = ({children}: CookieProps): JSX.Element => {
  const pathname = usePathname();
  const [rendered, setRendered] = useState<boolean>(false);

  useEffect((): void => {
    if (!rendered) {
      setRendered(true);
    }
  }, []);

  useEffect((): void => {
    if (rendered) {
      const cookieName = process.env.NEXT_PUBLIC_APP_COOKIE_BREEZY;
      if (
        ['/project/breezy/signup', '/project/breezy/login'].some(
          (auth): boolean => pathname === auth
        )
      ) {
        cookie.remove(cookieName);
      }
      if (pathname === '/project/breezy') {
        const currentCookie = cookie.get(cookieName);
        if (currentCookie) {
          cookie.set(cookieName, currentCookie, {
            sameSite: 'strict',
            secure: true,
            expires: 2
          });
        }
      }
    }
  }, [rendered]);

  return <>{children}</>;
};

export type {CookieProps};
export default Cookie;
