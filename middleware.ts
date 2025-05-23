// middleware.ts
export { auth as middleware } from "@/auth"; // Assuming auth.ts is in the root
// Or:
// import NextAuth from "next-auth";
// import { authConfig } from "./auth.config"; // If you separate provider/DB config from middleware options
// const { auth } = NextAuth(authConfig) // authConfig would be the object passed to NextAuth in auth.ts
// export default auth;


// Optionally, you can protect specific routes using the matcher:
// export const config = {
//   matcher: ["/dashboard/:path*", "/admin/:path*"],
// };