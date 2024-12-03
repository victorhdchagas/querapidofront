import { NextRequest, NextResponse } from 'next/server'

export function middleware(req: NextRequest) {
  const hostname = req.headers.get('host')!
  const subdomain = hostname.match(/^([^.]+)\./)?.[1]
  if (!subdomain) {
    return NextResponse.next()
  }
  if (
    (req.nextUrl.pathname.includes('_next') ||
      req.nextUrl.pathname.includes('favicon.ico')) &&
    subdomain.length > 0
  ) {
    return NextResponse.next()
  }
  if (subdomain.length > 0)
    return NextResponse.rewrite(
      new URL(`/stores/${subdomain}${req.nextUrl.pathname}`, req.url),
    )

  return NextResponse.next()
}
