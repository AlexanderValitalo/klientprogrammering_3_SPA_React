"use client";

import { RouteLink } from "@/interfaces/rout-link";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavigationLinkProps {
  link: RouteLink;
}

export default function NavigationLink({ link }: NavigationLinkProps) {
  const router = usePathname();

  if (link.href != "/sign-in") {
    return (
      <Link
        href={link.href}
        className={`group rounded-lg border border-transparent px-2 py-2 m-1 transition-colors
       hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 ${
         router === link.href &&
         "border-gray-300 bg-gray-100 dark:border-neutral-700 dark:bg-neutral-800/30"
       } sm:px-5 sm:py-5`}
      >
        <h2 className="font-russo">{link.text}</h2>
      </Link>
    );
  } else {
    return (
      <Link
        href={link.href}
        className={`group rounded-lg border border-transparent px-2 py-2 m-1 transition-colors 
       hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 ${
         router === link.href
           ? "border-gray-300 bg-gray-100 dark:border-neutral-700 dark:bg-neutral-800/30"
           : "border-gray-200 bg-gray-200 dark:border-neutral-600 dark:bg-green-600"
       } sm:px-5 sm:py-5`}
      >
        <h2 className="font-russo">{link.text}</h2>
      </Link>
    );
  }
}
