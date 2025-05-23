// auth.ts
import NextAuth from "next-auth";
import MicrosoftEntraID from "next-auth/providers/microsoft-entra-id";
import "next-auth/jwt"

export const { handlers, auth, signIn, signOut } = NextAuth({
  debug: true,
  providers: [
    MicrosoftEntraID({
      clientId: process.env.AUTH_MICROSOFT_ENTRA_ID_ID,
      clientSecret: process.env.AUTH_MICROSOFT_ENTRA_ID_SECRET,
      issuer: process.env.AUTH_MICROSOFT_ENTRA_ID_ISSUER,
      // You can add more configuration options here if needed
      // For example, to request specific scopes beyond the defaults:
      // authorization: { params: { scope: "openid profile email User.Read offline_access" } },
    }),
  ],
  // callbacks: {
  //   async jwt({ token, account, profile }) {
  //     // Persist the OAuth access_token and or the user id to the token right after signin
  //     if (account) {
  //       token.accessToken = account.access_token;
  //       token.idToken = account.id_token; // If you need the ID token
  //       // token.userId = profile.oid; // 'oid' is often the object ID for the user in Entra ID
  //                                     // or use `profile.sub` which is the subject identifier.
  //     }

  //     return token;
  //   },
  //   async session({ session, token }) {
  //     // Send properties to the client, like an access_token and user id from the token
  //     console.log(token)
  //     if (token.accessToken) {
  //       (session as any).accessToken = token.accessToken;
  //     }
  //     if (token.idToken) {
  //       (session as any).idToken = token.idToken;
  //     }
  //     // if (token.userId) {
  //     //   session.user.id = token.userId as string;
  //     // }

  //     return session;
  //   },
  // },
  callbacks: {
    authorized({ request, auth }) {
      //console.log("authorized", request, auth)
      const { pathname } = request.nextUrl
      if (pathname === "/middleware-example") return !!auth
      return true
    },
    jwt({ token, profile, account }) {
      // if (trigger === "update") token.name = session.user.name
      // if (account?.provider === "keycloak") {
      //   return { ...token, accessToken: account.access_token }
      // }
      // return token
      if (account) {
        token.accessToken = account.access_token;
      }
      // console.log("jwt", token, account)
      return token;
    },
    async session({ session, token }) {
      
      // console.log("token", token)
      if (token?.accessToken) session.accessToken = token.accessToken
      // console.log("session", session)
      return session
    },
  },
  experimental: { enableWebAuthn: true },
  // You can add custom pages if you don't want to use the default Auth.js pages
  // pages: {
  //   signIn: '/auth/signin',
  //   // signOut: '/auth/signout',
  //   // error: '/auth/error', // Error code passed in query string as ?error=
  //   // verifyRequest: '/auth/verify-request', // (used for email/passwordless login)
  //   // newUser: '/auth/new-user' // New users will be directed here on first sign in (leave the property out to disable)
  // }
});