
// src/components/Header.tsx
"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { signIn, signOut, useSession } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { BiLoaderCircle } from "react-icons/bi";
import Image from 'next/image'; // Import the Image component

export default function Header() {
  const [initialLoading, setInitialLoading] = useState<boolean>(true);
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status !== "loading") {
      setInitialLoading(false);
    }
  }, [status, session]);

  return (
    <div className="fixed top-0 w-full h-[60px] p-3 flex justify-between items-center z-50">
      <Link href="/" className="flex justify-center items-center">
        {/* Use the next/image Image component */}
        <Image src="/favicon.ico" alt="" width={48} height={48}  /> {/* Adjust width/height as needed */}
        <h2 className="font-bold text-xl">StableMax✨</h2>
      </Link>
      {initialLoading && status === "loading" ? (
        <BiLoaderCircle className="animate-spin" />
      ) : !session ? (
        <div className="__menu">
          <Button onClick={() => signIn("google")}>Login</Button>
        </div>
      ) : (
        <div className="flex gap-3 justify-center items-center">
          <Button onClick={() => signOut()} variant="destructive">
            Logout
          </Button>
          <Link href="/profile">
            <Avatar>
              <AvatarImage src={session.user?.image || ""} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </Link>
        </div>
      )}
    </div>
  );
}