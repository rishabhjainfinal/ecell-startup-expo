// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const config = {
	matcher: [
		// "/dashboard/*",
		/*
		 * Match all request paths except for the ones starting with:
		 * - api (API routes)
		 * - _next/static (static files)
		 * - _next/image (image optimization files)
		 * - favicon.ico (favicon file)
		 */
		// "/((?!api|_next/static|_next/image|favicon.ico).*)",
	],
};

export function middleware(request: NextRequest) {
	// // cookies
	// access cookies
	request.cookies.get("foo"); // get cookie from request

	// add cookie to request
	const response = NextResponse.next();
	response.cookies.set("foo", "fast");
}
