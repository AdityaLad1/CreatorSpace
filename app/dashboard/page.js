"use client";
import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Dashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);
  if (status === "loading") {
    return <div className="text-white p-10">Loading...</div>;
  }

  if (!session) return null;

  return <div>
    <h1 className="text-3xl font-bold text-white">Welcome, {session.user.name}!</h1>
    <p className="text-white mt-4">This is your dashboard. You can manage your content and view your supporters here.</p>

    <input type="text" placeholder="Create a new post..." className="w-full p-4 mt-6 rounded-lg bg-neutral-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
  </div>;
}
