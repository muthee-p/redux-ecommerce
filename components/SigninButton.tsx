"use client";
import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
const SigninButton = () => {
  const { data: session } = useSession();

  if (session && session.user) {
    return (
      <div className="flex gap-4 ml-auto pt-4 md:pt-1 flex-col md:flex-row">
        <p className="text-orange-600 text-sm ">Hello, {session.user.name}</p>
        <button 
          onClick={() => signOut()} 
          className="border border-black text-black text-sm rounded-full px-4 py">
          Sign Out
        </button>
      </div>
    );
  }
  return (
    <button onClick={() => signIn()} 
      className="bg-black text-sm px-8 py-1 mt-4 md:mt-0 rounded-full text-white hover:bg-orange-600 ml-auto">
      Sign In
    </button>
  );
};

export default SigninButton;
