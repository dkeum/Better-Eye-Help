"use client"

import React from "react";
import { NavbarProps } from "./Navbar";
import { useRouter } from "next/navigation";

import { Database } from "@/types/supabase";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import Link from "next/link";

const Loginbutton = ({ session }: NavbarProps) => {
  const supabase = createClientComponentClient<Database>();
  const router = useRouter();

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.refresh();
  };

  return (
    <>
      {session ? (
        <button
          onClick={handleSignOut}
          className="bg-gradient-to-r from-pink-500 to-violet-500 hover:opacity-60 text-white font-bold py-2 px-4 rounded-full"
        >
          Logout
        </button>
      ) : (
        <Link
          href="/login"
          className="bg-gradient-to-r from-pink-500 to-violet-500 hover:opacity-60 text-white font-bold py-2 px-4 rounded-full flex items-center"
        >
          <button>Login</button>
        </Link>
      )}
    </>
  );
};

export default Loginbutton;
