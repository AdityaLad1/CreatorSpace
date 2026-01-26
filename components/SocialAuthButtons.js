"use client";

import { signIn } from "next-auth/react";
import GoogleIcon from "@/components/icons/GoogleIcon";
import GithubIcon from "@/components/icons/GithubIcon";

const providers = [
  { name: "GitHub", id: "github", icon: GithubIcon },
  { name: "Google", id: "google", icon: GoogleIcon },
];

export default function SocialAuthButtons() {
  return (
    <div className="flex flex-col gap-3 max-w-xs">
      {providers.map((provider) => (
        <button
          onClick={() => signIn(provider.id)}
          key={provider.name}
          className="flex items-center bg-white border border-gray-300 rounded-lg shadow-md
          px-6 py-2 text-sm font-medium text-gray-800
          hover:bg-gray-400 transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
        >
          <provider.icon />
          <span>Continue with {provider.name}</span>
        </button>
      ))}
    </div>
  );
}
