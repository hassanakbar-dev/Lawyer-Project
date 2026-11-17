import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Protect /dashboard and any sub-routes
  if (pathname.startsWith("/dashboard")) {
    const sessionCookie = request.cookies.get("apex_auth_session")?.value;

    // If no active auth cookie is present, immediately redirect to /login
    if (!sessionCookie || sessionCookie !== "authenticated") {
      const loginUrl = new URL("/login", request.url);
      loginUrl.searchParams.set("redirect", pathname);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

// Only run middleware on dashboard routes
export const config = {
  matcher: ["/dashboard/:path*"],
};
