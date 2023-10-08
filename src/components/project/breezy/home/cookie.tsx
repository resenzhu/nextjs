'use client';

import {type ReactNode, useEffect, useState} from 'react';
import cookie from 'js-cookie';

type CookieProps = {
  children: ReactNode;
};

const Cookie = ({children}: CookieProps): JSX.Element => {
  const [rendered, setRendered] = useState<boolean>(false);

  useEffect((): void => {
    if (!rendered) {
      setRendered(true);
    }
  }, []);

  useEffect((): void => {
    if (rendered) {
      const cookieName =
        process.env.NODE_ENV === 'production' ? '__Secure-BZ' : 'BZ';
      const currentCookie = cookie.get(cookieName);
      if (currentCookie) {
        cookie.set(cookieName, currentCookie, {
          path: '/project/breezy',
          sameSite: 'strict',
          secure: true,
          expires: 7
        });
      }
    }
  }, [rendered]);

  return <>{children}</>;
};

export type {CookieProps};
export default Cookie;
