"use client";

import Image from "next/image";
import Navigation from "@/components/navigation/Navigation";

export default function Home() {
  return (
    <Navigation>
      <main className="flex flex-col items-center justify-between p-20">
        <Image
          className="drop-shadow-[0_0_0.3rem_#ffffff70] invert"
          src="/logo_transparent.png"
          alt="Badgemania Logo"
          width={400}
          height={37}
        />
        <h1 className="text-5xl font-bold text-center m-3 font-russo p-4 border border-transparent border-gray-300 bg-gray-100 dark:border-neutral-700 dark:bg-neutral-800/30 rounded-lg">
          Welcome to Badgemania!
        </h1>
        <h2 className="text-3xl font-semibold text-center m-3 font-russo">
          We make unmotivated students motivated with gamification!
        </h2>
      </main>
    </Navigation>
  );
}
