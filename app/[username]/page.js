import React from "react";
import PaymentsPage from "@/components/PaymentsPage";
import { notFound } from "next/navigation";
import connectDB from "@/db/connectDb";
import User from "@/models/User";

export default async function Username({ params }) {
  const { username } = await params;

  await connectDB();
  const u = await User.findOne({ username });
  if (!u) return notFound();

  return (
    <>
      <PaymentsPage />
    </>
  );
}
export async function generateMetadata({ params }) {
  const { username } = await params;
  return {
    title: `${username} | CreatorSpace`,
    description: `Support ${username} on CreatorSpace`,
  };
}
