export { default } from "next-auth/middleware";

export const config = { matcher: ["/populer/:path*", "/profile/:path*"] };
