import { cookies } from "next/headers";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { decodedToken } from "./utils/jwt";

type TRole = keyof typeof roleBasedPrivateRoutes;

const authRoutes = ["/login", "/register"];
const commonPrivateRoutes = ["/dashboard", "/dashboard/change-password", "/pets"];
const roleBasedPrivateRoutes = {
  ADMIN: [/^\/dashboard\/admin/],
  USER: [/^\/dashboard\/user/],
};

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const accessToken = cookies().get("accessToken")?.value;

  if (!accessToken) {
    if (authRoutes.includes(pathname)) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  if (accessToken && commonPrivateRoutes.includes(pathname)) {
    return NextResponse.next();
  }

  let decodedData = null;
  if (accessToken) {
    decodedData = decodedToken(accessToken) as any;
  }

  const role: TRole = decodedData?.role;
  if (role && roleBasedPrivateRoutes[role]) {
    const routes = roleBasedPrivateRoutes[role];
    if (routes.some((route) => pathname.match(route))) {
      return NextResponse.next();
    }
  }
  return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
  matcher: ["/login", "/register", "/dashboard/:page*"],
};
