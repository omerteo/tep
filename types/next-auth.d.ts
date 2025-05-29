// next-auth.d.ts
import "next-auth";
import { DefaultSession, DefaultUser } from "next-auth";
import { JWT as DefaultJWT } from "next-auth/jwt";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    accessToken?: string; // Added custom property
    idToken?: string;     // Added custom property
    user: {
      name: string
      email: string; // If you add email to session.user
      id?: string; // If you add user ID to session.user
    } & DefaultSession["user"];
  }

  interface User extends DefaultUser {
    // Add any custom properties you expect on the user object from the provider profile
    // oid?: string;
  }
}

declare module "next-auth/jwt" {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface JWT extends DefaultJWT {
    accessToken?: string;
    idToken?: string;
    // userId?: string; // Or whatever custom properties you added to the token
  }
}