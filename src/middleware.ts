import {type NextRequest, NextResponse} from 'next/server';
import {importSPKI, jwtVerify} from 'jose';
import createNextIntlMiddleware from 'next-intl/middleware';

export const config = {
  matcher: ['/', '/(en|id)/:path*']
};

const intlMiddleware = createNextIntlMiddleware({
  locales: ['en', 'id'],
  defaultLocale: 'en',
  localePrefix: 'always',
  localeDetection: false,
  alternateLinks: true
});

const middleware = async (nextRequest: NextRequest): Promise<NextResponse> => {
  const nextResponse = intlMiddleware(nextRequest);
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
            nextResponse.headers.set(
              'x-middleware-rewrite',
              new URL(
                '/project/breezy',
                process.env.NEXT_PUBLIC_APP_URL
              ).toString()
            );
            return nextResponse;
          }
        } catch {
          return nextResponse;
        }
      }
      return nextResponse;
    }
    case '/project/breezy': {
      const token = nextRequest.cookies.get(
        process.env.NEXT_PUBLIC_APP_COOKIE_BREEZY
      )?.value;
      if (!token) {
        nextResponse.headers.set(
          'x-middleware-rewrite',
          new URL(
            '/project/breezy/login',
            process.env.NEXT_PUBLIC_APP_URL
          ).toString()
        );
        return nextResponse;
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
            return nextResponse;
          }
        } catch {
          nextResponse.headers.set(
            'x-middleware-rewrite',
            new URL(
              '/project/breezy/login',
              process.env.NEXT_PUBLIC_APP_URL
            ).toString()
          );
          return nextResponse;
        }
      }
      return nextResponse;
    }
    default:
      return nextResponse;
  }
};

export default middleware;
