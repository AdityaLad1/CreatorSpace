"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import UserDropdown from "./UserDropdown";

const Navbar = () => {
  const { data: session } = useSession();

  return (
    <nav className=" text-white font-bold flex justify-between px-3 h-12 items-center">
      <Link
        className="logo font-bold text-lg flex gap-2 justify-center items-center"
        href={"/"}
      >
        <span>Patreon Clone V2</span>
        <lord-icon
          src="https://cdn.lordicon.com/oyxqonng.json"
          trigger="loop"
          stroke="bold"
          state="loop-cycle"
          style={{ width: 30, height: 30 }}
        />
      </Link>

      <div>
        {session ? (
          <>
            <UserDropdown />
          </>
        ) : (
          <Link href="/login">
            <button
              className="text-white bg-gradient-to-br from-purple-600 to-blue-500 
              hover:bg-gradient-to-bl focus:ring-4 focus:outline-none 
              focus:ring-blue-300 dark:focus:ring-blue-800 
              font-medium text-sm px-4 py-2 leading-5 rounded-xl
              transition-all duration-200 hover:scale-105"
            >
              Login
            </button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
