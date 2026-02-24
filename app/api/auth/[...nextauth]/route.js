import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import mongoose from "mongoose";
import User from "@/models/User";
import Payment from "@/models/Payment";
import connectDB from "@/db/connectDb";
import { signIn } from "next-auth/react";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      if (account.provider == "github" || account.provider == "google") {
        try {
          await connectDB();
          const existingUser = await User.findOne({ email: user.email });

          if (!existingUser) {
            const newUsername = user.email.split("@")[0];

            await User.create({
              email: user.email,
              username: newUsername,
              name: user.name,
              profilePic: user.image,
            });
          }
          return true;
        } catch (error) {
          console.error("Error connecting to DB: ", error);
          return false;
        }
      }
      return false;
    },
    async session({ session }) {
      try {
        await connectDB();

        const dbUser = await User.findOne({
          email: session.user.email,
        });

        if (dbUser) {
          session.user.username = dbUser.username;
        }
        return session;
      } catch (error) {
        console.error("Session Error:", error);
        return session;
      }
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
