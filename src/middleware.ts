import {type KeyLike, importSPKI, jwtVerify} from 'jose';
import {type NextRequest, NextResponse} from 'next/server';

const middleware = async (nextRequest: NextRequest): Promise<NextResponse> => {
  switch (nextRequest.nextUrl.pathname) {
    case '/project/breezy/signup':
    case '/project/breezy/login':
    case '/project/breezy': {
      const token = nextRequest.cookies.get(process.env.NODE_ENV === 'production' ? '__Secure-BZ' : 'BZ')?.value;
      if (!token && nextRequest.nextUrl.pathname === '/project/breezy') {
        return NextResponse.redirect(
          new URL('/project/breezy/login', process.env.NEXT_PUBLIC_APP_URL)
        );
      }
      if (token) {
        importSPKI(Buffer.from(process.env.JWT_KEY_PUBLIC_BASE64, 'base64').toString(), 'RS256').then((jwtPublicKey: KeyLike): void => {
          jwtVerify(token, jwtPublicKey).then((): void => {
            ['/project/breezy/signup', '/project/breezy/login'].some((auth: string): boolean => nextRequest.nextUrl.pathname === auth)
          }).catch((): NextResponse => {
            if (nextRequest.nextUrl.pathname === '/project/breezy') {
              return NextResponse.redirect(
                new URL(
                  '/project/breezy/login',
                  process.env.NEXT_PUBLIC_APP_URL
                )
              );
            }
            return NextResponse.next();
          });
        });
        // verify(
        //   token,
        //   Buffer.from(process.env.JWT_KEY_PUBLIC_BASE64, 'base64').toString(),
        //   (error: VerifyErrors | null): NextResponse => {
        //     if (
        //       error &&
        //       nextRequest.nextUrl.pathname === '/project/breezy'
        //     ) {
        //       return NextResponse.redirect(
        //         new URL(
        //           '/project/breezy/login',
        //           process.env.NEXT_PUBLIC_APP_URL
        //         )
        //       );
        //     }
        //     if (
        //       !error &&
        //       ['/project/breezy/signup', '/project/breezy/login'].some(
        //         (auth): boolean => nextRequest.nextUrl.pathname === auth
        //       )
        //     ) {
        //       return NextResponse.redirect(
        //         new URL('/project/breezy', process.env.NEXT_PUBLIC_APP_URL)
        //       );
        //     }
        //     return NextResponse.next();
        //   }
        // );
      }
      return NextResponse.next();
    }
    default:
      return NextResponse.next();
  }
};

export default middleware;
