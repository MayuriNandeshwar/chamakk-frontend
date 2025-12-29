import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (
    pathname.startsWith("/admin/login") ||
    pathname.startsWith("/admin/forgot-password")
  ) {
    return NextResponse.next();
  }

  if (pathname.startsWith("/admin")) {
    const token = req.cookies.get("ACCESS_TOKEN")?.value;

    if (!token) {
      return NextResponse.redirect(
        new URL("/admin/login", req.url)
      );
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
