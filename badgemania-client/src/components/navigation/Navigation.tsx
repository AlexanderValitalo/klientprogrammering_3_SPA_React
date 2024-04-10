"use client";

import { FC, useState } from "react";
import { RouteLink } from "@/interfaces/rout-link";
import Link from "next/link";

const LINKS: RouteLink[] = [
  { href: "/", text: "Home" },
  { href: "/solutions", text: "Solutions" },
  { href: "/pricing", text: "Pricing" },
  { href: "/about", text: "About" },
  { href: "/contact", text: "Contact" },
];

export default function Navigation() {
  const [highlightedLink, setHighlightedLink] = useState<string>("/");

  const handleNavClick = (linkButtonName: string) => {
    setHighlightedLink(linkButtonName);
  };

  return (
    <div className="flex justify-evenly gap-2 m-5">
      {LINKS.map((link) => (
        <NavigationLink
          key={link.href}
          link={link}
          isSelected={highlightedLink === link.href}
          onClick={() => handleNavClick(link.href)}
        />
      ))}
    </div>
  );
}

interface NavigationLinkProps {
  link: RouteLink;
  isSelected: boolean;
  onClick: () => void;
}

const NavigationLink: FC<NavigationLinkProps> = ({ link, isSelected, onClick }) => {
  return (
    <Link
      onClick={onClick}
      href={link.href}
      className={
        isSelected
          ? "m-24"
          : "group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
      }
    >
      <h2>{link.text}</h2>
    </Link>
  );
};
