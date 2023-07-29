import type { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";
// import { PrismaAdapter } from "@next-auth/prisma-adapter";
// import prisma from "@/utils/prisma";

const options: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {},
      async authorize({
        email,
        password,
      }: {
        email: string;
        password: string;
      }) {
        if (!email || !password) {
          throw new Error("Please enter an email and password");
        }

        const res = await fetch("http://localhost:3000/api/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        });
        const user = await res.json();

        if (user) {
          return user.data;
        } else {
          throw Error("Wrong email or password");
        }
      },
    }),
  ],
  callbacks: {
    jwt(params: any) {
      if (params.user?.role) {
        params.token.role = params.user.role;
        params.token.id = params.user.id;
        params.token.phone = params.user.phone;
        params.token.photo = params.user.photo;
      }
      return params.token;
    },
    session({ session, token }) {
      if (session.user) {
        (session.user as { id: string }).id = token.id as string;
        (session.user as { role: string }).role = token.role as string;
        (session.user as { phone: string }).phone = token.phone as string;
        (session.user as { photo: string }).photo = token.photo as string;
      }
      console.log({ session, token });
      return session;
    },
  },
};
export default options;
