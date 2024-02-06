"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "@/types/supabase";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
  const supabase = createClientComponentClient<Database>();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();



  const handleSignIn = async () => {
    const {data, error} = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if(!error){
      router.push("/");
      router.refresh()
    }
    else{
      console.log(error)
    }
    
  };



  return (
    <div className="max-w-screen-2xl min-h-screen  mx-auto bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex justify-center items-center">
      <form
        className="space-y-4 md:space-y-6 bg-white max-w-[500px] max-h-[500px] p-10"
        action="#"
      >
        <label className="flex flex-row justify-center text-sm font-medium text-gray-900 dark:text-white text-center">
          Better Eye Help
          <span>
            <Image
              src="/PosturePlus-logos_transparent.png"
              alt="Logo"
              width={30}
              height={30}
            />
          </span>
        </label>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Your email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="abc123@gmail.com"
            required
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="••••••••"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="remember"
                aria-describedby="remember"
                type="checkbox"
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                required
              />
            </div>
            <div className="ml-3 text-sm">
              <label className="text-gray-500 dark:text-gray-300">
                Remember me
              </label>
            </div>
          </div>
          <a
            href="#"
            className=" ml-5 text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
          >
            Forgot password?
          </a>
        </div>
        <button
          type="submit"
          onClick={handleSignIn}
          className="w-full text-black ring-2 ring-indigo-400 bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        >
          Sign in
        </button>
        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
          Don’t have an account yet?{" "}
          <Link
            href="/signup"
            className="font-medium text-primary-600 hover:underline dark:text-primary-500"
          >
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
}
