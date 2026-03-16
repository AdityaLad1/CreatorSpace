"use client";
import React, { useEffect } from "react";
import SocialAuthButtons from "@/components/SocialAuthButtons";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Login() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/dashboard");
    }
  }, [session, router]);

  return (
    <div className=" text-white py-14 container mx-auto">
      <h1 className="text-center font-bold text-3xl">
        Login to get your fans to support you
      </h1>
      <div className="social-buttons flex justify-center items-center my-5">
        <SocialAuthButtons />
      </div>
    </div>
  );
}
