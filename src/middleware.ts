import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Only enforce HTTPS in production
  if (process.env.NODE_ENV === 'production') {
    const proto = request.headers.get('x-forwarded-proto');

    if (proto !== 'https') {
      const forwardedHost = request.headers.get('x-forwarded-host');
      const host = forwardedHost ?? request.headers.get('host');

      if (host) {
        const { pathname, search } = new URL(request.url);
        return NextResponse.redirect(`https://${host}${pathname}${search}`, {
          status: 301,
        });
      }
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
