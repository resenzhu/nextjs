import {NextResponse} from 'next/server';

const middleware = (): NextResponse => NextResponse.next();

export default middleware;
