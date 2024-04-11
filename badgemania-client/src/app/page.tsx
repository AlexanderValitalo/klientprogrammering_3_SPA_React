"use client";

import Image from "next/image";
import Navigation from "@/components/navigation/Navigation";

export default function Home() {
  return (
    <Navigation>
      <main className="flex flex-col items-center justify-between">
        <Image
          className="drop-shadow-[0_0_0.3rem_#ffffff70] invert"
          src="/logo_transparent.png"
          alt="Badgemania Logo"
          width={400}
          height={37}
        />
        <h1 className="text-4xl font-bold text-center m-3 font-martian p-4 border border-transparent border-neutral-700 bg-neutral-800/30 rounded-lg sm:text-5xl">
          Welcome to Badgemania!
        </h1>
        <h2 className="text-3xl font-semibold text-center m-3 font-martian max-w-2xl">
          The product that turns unmotivated students to motivated students with digital badges and
          gamification!
        </h2>
      </main>
    </Navigation>
  );
}
