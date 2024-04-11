import { RouteLink } from "@/interfaces/rout-link";
import { ReactNode } from "react";
import NavigationLink from "./NavigationLink";

const LINKS: RouteLink[] = [
  { href: "/", text: "Home" },
  { href: "/solutions", text: "Solutions" },
  { href: "/pricing", text: "Pricing" },
  { href: "/about", text: "About" },
  { href: "/contact", text: "Contact" },
  { href: "/sign-in", text: "Sign in" },
];

interface NavigationProps {
  children: ReactNode;
}

export default function Navigation({ children }: NavigationProps) {
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-row flex-wrap justify-evenly m-2">
        {LINKS.map((link) => (
          <NavigationLink key={link.href} link={link} />
        ))}
      </div>
      <hr />
      {children}
    </div>
  );
}
