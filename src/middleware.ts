import {type NextRequest, NextResponse} from 'next/server';
import {importSPKI, jwtVerify} from 'jose';

const middleware = async (nextRequest: NextRequest): Promise<NextResponse> => {
  switch (nextRequest.nextUrl.pathname) {
    case '/project/breezy/signup':
    case '/project/breezy/login':
    case '/project/breezy': {
      const token = nextRequest.cookies.get(
        process.env.NODE_ENV === 'production' ? '__Secure-BZ' : 'BZ'
      )?.value;
      if (!token && nextRequest.nextUrl.pathname === '/project/breezy') {
        return NextResponse.redirect(
          new URL('/project/breezy/login', process.env.NEXT_PUBLIC_APP_URL)
        );
      }
      if (token) {
        const jwtSpki = Buffer.from(
          process.env.JWT_KEY_PUBLIC_BASE64,
          'base64'
        ).toString();
        const jwtPublicKey = await importSPKI(jwtSpki, 'RS256');
        const result = await jwtVerify(token, jwtPublicKey);
        if (
          result &&
          ['/project/breezy/signup', '/project/breezy/login'].some(
            (auth): boolean => nextRequest.nextUrl.pathname === auth
          )
        ) {
          return NextResponse.redirect(
            new URL('/project/breezy', process.env.NEXT_PUBLIC_APP_URL)
          );
        }
        if (!result && nextRequest.nextUrl.pathname === '/project/breezy') {
          return NextResponse.redirect(
            new URL('/project/breezy/login', process.env.NEXT_PUBLIC_APP_URL)
          );
        }
      }
      return NextResponse.next();
    }
    default:
      return NextResponse.next();
  }
};

export default middleware;
