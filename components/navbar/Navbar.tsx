"use client";

import { Session } from "@supabase/auth-helpers-nextjs";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import CartButton from "../cart/CartButton";
import Loginbutton from "./Loginbutton";


export interface NavbarProps {
  session: Session | null;
}

const Navbar = ({ session }: NavbarProps) => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div
      className="
        flex 
         justify-between 
         mx-auto 
         w-full
          max-w-screen-2xl 
          p-8
          shadow-lg
          border-b-4
    "
    >
      <Link href="/">
        <div className="flex flex-row gap-x-5">
          <Image
            className="bg-slate-100 rounded-lg"
            src="/PosturePlus-logos_transparent.png"
            alt="Logo"
            width={70}
            height={70}
          />
          <h1 className="flex items-center font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
            Better Eye Health
          </h1>
        </div>
      </Link>

      <div className="md:flex md:flex-row md:gap-x-4 hidden md:visible">
        <Loginbutton session={session} />

        <Link
          href="/products"
          className="bg-gradient-to-r from-pink-500 to-violet-500 hover:opacity-60 text-white font-bold py-2 px-4 rounded-full flex items-center"
        >
          <button>View Products</button>
        </Link>

        <div className="relative flex items-center bg-gradient-to-r from-pink-500 to-violet-500 hover:opacity-60 text-white font-bold py-2 px-4 rounded-full">
          <CartButton />
        </div>
      </div>






      <div className="md:hidden flex items-center mx-4">
        {showSidebar ? (
          <button
            className="text-center text-4xl min-w-[80px] ml-5 text-black items-center cursor-pointer z-50"
            onClick={() => setShowSidebar(!showSidebar)}
          >
            X
          </button>
        ) : (
          <svg
            onClick={() => setShowSidebar(!showSidebar)}
            className=" fill-black z-50 flex items-center cursor-pointer"
            fill="#2563EB"
            viewBox="0 0 100 80"
            width="40"
            height="40"
          >
            <rect width="100" height="10"></rect>
            <rect y="30" width="100" height="10"></rect>
            <rect y="60" width="100" height="10"></rect>
          </svg>
        )}
      </div>

      <div
        className={`flex justify-center items-start pt-28 top-0 right-0 w-1/3 md:hidden bg-blue-600 rounded-lg text-white fixed h-full z-40 ease-in-out duration-300 ${
          showSidebar ? "translate-x-0 " : "translate-x-full"
        }`}
      >
        <h3 className="flex flex-col gap-y-5 text-sm font-semibold text-white">
          <Loginbutton session={session} />

          <Link
            href="/products"
            className="bg-gradient-to-r from-pink-500 to-violet-500 hover:opacity-60 text-white font-bold py-2 px-4 rounded-full flex items-center"
          >
            <button>View Products</button>
          </Link>

          <div className="bg-gradient-to-r from-pink-500 to-violet-500 hover:opacity-60 text-white font-bold py-2 px-4 rounded-full">
            <CartButton/>     
          </div>
        </h3>
      </div>
    </div>
  );
};

export default Navbar;
