import {type NextRequest, NextResponse} from 'next/server';
import {breezySocket} from '@utils/socket';
import cookie from 'js-cookie';

type VerifyTokenReq = {
  token: string;
};

type VerifyTokenRes = {
  success: boolean;
  error: {
    code: number;
    message: string;
  };
  data: {
    valid: boolean;
  };
};

const middleware = (nextRequest: NextRequest): NextResponse => {
  switch (nextRequest.nextUrl.pathname) {
    case '/project/breezy/signup':
    case '/project/breezy/login':
    case '/project/breezy': {
      const token = cookie.get(
        process.env.NODE_ENV === 'production' ? '__Secure-BZ' : 'BZ'
      );
      if (!token && nextRequest.nextUrl.pathname === '/project/breezy') {
        return NextResponse.redirect(
          new URL('/project/breezy/login', process.env.NEXT_PUBLIC_APP_URL)
        );
      }
      if (token) {
        const request: VerifyTokenReq = {
          token: token
        };
        breezySocket.connect();
        breezySocket.emit(
          'verify-token',
          request,
          (response: VerifyTokenRes): NextResponse => {
            if (breezySocket.connected) {
              breezySocket.disconnect();
            }
            if (
              !response.data.valid &&
              nextRequest.nextUrl.pathname === '/project/breezy'
            ) {
              return NextResponse.redirect(
                new URL(
                  '/project/breezy/login',
                  process.env.NEXT_PUBLIC_APP_URL
                )
              );
            }
            if (
              response.data.valid &&
              ['/project/breezy/signup', '/project/breezy/login'].some(
                (auth): boolean => nextRequest.nextUrl.pathname === auth
              )
            ) {
              return NextResponse.redirect(
                new URL('/project/breezy', process.env.NEXT_PUBLIC_APP_URL)
              );
            }
            return NextResponse.next();
          }
        );
      }
      break;
    }
    default:
      break;
  }
  return NextResponse.next();
};

export type {VerifyTokenReq, VerifyTokenRes};
export default middleware;
