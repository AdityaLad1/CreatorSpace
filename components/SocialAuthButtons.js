"use client";

import GoogleIcon from "@/components/icons/GoogleIcon";
import GithubIcon from "@/components/icons/GithubIcon";
import LinkedinIcon from "@/components/icons/LinkedInIcon";
import TwitterIcon from "@/components/icons/TwitterIcon";
import FacebookIcon from "@/components/icons/FacebookIcon";
import AppleIcon from "@/components/icons/AppleIcon";

const providers = [
  { name: "Google", icon: GoogleIcon },
  { name: "GitHub", icon: GithubIcon },
  { name: "LinkedIn", icon: LinkedinIcon },
  { name: "Twitter", icon: TwitterIcon },
  { name: "Facebook", icon: FacebookIcon },
  { name: "Apple", icon: AppleIcon },
];

export default function SocialAuthButtons() {
  return (
    <div className="flex flex-col gap-3 max-w-xs">
      {providers.map((provider) => (
        <button
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
