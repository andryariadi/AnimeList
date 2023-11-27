import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";

export const authOption = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
};

const authHandler = NextAuth(authOption);

export { authHandler as GET, authHandler as POST };
