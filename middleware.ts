import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const hostname = request.headers.get('host') || '';

  // Redirect www to non-www
  if (hostname.startsWith('www.')) {
    url.host = hostname.replace('www.', '');
    return NextResponse.redirect(url, 301);
  }

  // Force HTTPS in production
  if (
    process.env.NODE_ENV === 'production' &&
    url.protocol === 'http:' &&
    !hostname.includes('localhost')
  ) {
    url.protocol = 'https:';
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/:path*',
};
