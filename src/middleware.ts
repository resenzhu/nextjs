import {type NextRequest, NextResponse} from 'next/server';
import {importSPKI, jwtVerify} from 'jose';

const middleware = async (nextRequest: NextRequest): Promise<NextResponse> => {
  switch (nextRequest.nextUrl.pathname) {
    case '/project/breezy/signup':
    case '/project/breezy/login': {
      const token = nextRequest.cookies.get(
        process.env.NEXT_PUBLIC_APP_COOKIE_BREEZY
      )?.value;
      if (token) {
        const jwtSpki = Buffer.from(
          process.env.JWT_KEY_PUBLIC_BASE64,
          'base64'
        ).toString();
        const jwtPublicKey = await importSPKI(jwtSpki, 'RS256');
        try {
          const result = await jwtVerify(token, jwtPublicKey);
          if (result) {
            return NextResponse.redirect(
              new URL('/project/breezy', process.env.NEXT_PUBLIC_APP_URL)
            );
          }
        } catch {
          return NextResponse.next();
        }
      }
      return NextResponse.next();
    }
    case '/project/breezy': {
      const token = nextRequest.cookies.get(
        process.env.NEXT_PUBLIC_APP_COOKIE_BREEZY
      )?.value;
      if (!token) {
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
        try {
          const result = await jwtVerify(token, jwtPublicKey);
          if (result) {
            return NextResponse.next();
          }
        } catch {
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
