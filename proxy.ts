import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { jwtVerify } from "jose";

const secret = new TextEncoder().encode(
  process.env.JWT_SECRET || "ymjf*($Y@E92kcdh965)ef8y98"
);

export async function proxy(req: NextRequest) {
  const token = req.cookies.get("token")?.value;

  const protectedRoutes = ["/dashboard", "/roadmap", "/onboarding"];
  const isProtected = protectedRoutes.some((route) =>
    req.nextUrl.pathname.startsWith(route)
  );

  if (isProtected && !token) {
    console.log(
      "Middleware: No token found, redirecting to login from protected route:",
      req.nextUrl.pathname
    );
    return NextResponse.redirect(new URL("/login", req.url));
  }

  if (token) {
    try {
      const { payload } = await jwtVerify(token, secret);
      const userId = payload.userId as string;

      if (!userId) {
        throw new Error("No userId found in token");
      }

      const requestHeaders = new Headers(req.headers);
      requestHeaders.set("x-user-id", userId);

      return NextResponse.next({
        request: {
          headers: requestHeaders,
        },
      });
    } catch (err: any) {
      console.error("Middleware JWT verification failed:", err.message);
      // If it's a protected route, redirect to login
      if (isProtected) {
        return NextResponse.redirect(new URL("/login", req.url));
      }
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/onboarding/:path*", "/roadmap/:path*", "/api/roadmap/:path*"],
};
