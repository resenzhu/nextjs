import {type NextRequest, NextResponse} from 'next/server';

const middleware = (request: NextRequest): NextResponse => {
  if (request.nextUrl.pathname === '/project/breezy') {
    return NextResponse.redirect(new URL('/project/breezy/auth', request.url));
  }
  return NextResponse.next();
};

export default middleware;
