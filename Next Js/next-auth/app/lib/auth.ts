import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import { pages } from "next/dist/build/templates/app-page";
import { signIn } from "next-auth/react";

export const NEXT_AUTH={
    providers: [
      CredentialsProvider({
        name: "Email",
        credentials: {
          username: { label: "email", type: "text", placeholder: "Email" },
          password: {
            label: "pasword",
            type: "password",
            placeholder: "Password",
          },
          otp: {
            label: "otp",
            type: "otp",
            placeholder: "OTP",
          },
        },
        async authorize(credentials: any) {
          console.log(credentials);
  
          return {
            id: "user1",
            name: "Rudra",
            email: "rudra@gmail.com",
          };
        },
      }),
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID || "",
        clientSecret: process.env.GOOGLE_CLIENT_SECRET || ""
      }),
      GitHubProvider({
        clientId: process.env.GITHUB_CLIENT_ID ||"",
        clientSecret: process.env.GITHUB_CLIENT_SECRET ||""
      })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
      session: ({ session, token, user }: any) => {
        console.log(session)
        if (session && session.user) {
          session.user.id = token.sub;
        }
        return session;
      },
    },
    pages:{
        signIn:"/signin"
    }
  }
