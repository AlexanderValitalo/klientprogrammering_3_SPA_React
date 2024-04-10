import { RouteLink } from "@/interfaces/rout-link";
import Link from "next/link";

const LINKS: RouteLink[] = [
  { href: "/", text: "Home" },
  { href: "/students", text: "Students" },
  { href: "/badgegroups", text: "Badgegroups" },
  { href: "/badges", text: "Badges" },
  { href: "/contact", text: "Contact" },
];

export default function Navigation() {
  return (
    <div className="flex justify-evenly gap-2 m-5">
      {LINKS.map((link) => (
        <NavigationLink key={link.href} {...link} />
      ))}
    </div>
  );
}

function NavigationLink({ href, text }: RouteLink) {
  return (
    <Link href={href}>
      <h2>{text}</h2>
    </Link>
  );
}
