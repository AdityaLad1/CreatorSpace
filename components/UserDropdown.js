"use client";

import { useState } from "react";
import Link from "next/link";
import { signOut } from "next-auth/react";

export default function UserDropdown() {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onClick={() => setOpen(!open)}
      onBlur={() =>
        setTimeout(() => {
          setOpen(false);
        }, 100)
      }
    >
      <button
        className="flex justify-center items-center text-white bg-gradient-to-br from-purple-600 to-blue-500 
              hover:bg-gradient-to-bl focus:ring-4 focus:outline-none 
              focus:ring-blue-300 dark:focus:ring-blue-800 
              font-medium text-sm px-5 py-2 leading-5 rounded-xl
              transition-all duration-200 hover:scale-105"
      >
        Dashboard
        <svg
          className="w-4 h-4 ms-2"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m19 9-7 7-7-7"
          />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-44 bg-neutral-900 border border-neutral-700 rounded-xl shadow-lg z-50">
          <ul className="p-2 text-sm text-white font-medium">
            <li>
              <Link
                href="/dashboard"
                className="block p-2 rounded hover:bg-neutral-700"
              >
                Dashboard
              </Link>
            </li>

            <li>
              <Link
                href="/yourpage"
                className="block p-2 rounded hover:bg-neutral-700"
              >
                Your Page
              </Link>
            </li>

            <li>
              <button
                onClick={() => signOut({ callbackUrl: "/login" })}
                className="w-full text-left p-2 rounded hover:bg-red-600"
              >
                Sign out
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
