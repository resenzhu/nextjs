import {type NextRequest, NextResponse} from 'next/server';

const middleware = (request: NextRequest): NextResponse => {
  if (request.nextUrl.pathname === '/project/breezy') {
    return NextResponse.redirect(
      new URL('/project/breezy/auth', process.env.NEXT_PUBLIC_APP_URL)
    );
  }
  return NextResponse.next();
};

export default middleware;
