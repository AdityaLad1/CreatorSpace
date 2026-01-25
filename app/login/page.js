import React from "react";
import SocialAuthButtons from "@/components/SocialAuthButtons";

export default function Login() {
  return (
    <div className=" text-white py-14 container mx-auto">
      <h1 className="text-center font-bold text-3xl">
        Login to get your fans to support you
      </h1>
      <div className="social-buttons flex justify-center items-center my-5">
        <SocialAuthButtons/>
      </div>
    </div>
  );
}