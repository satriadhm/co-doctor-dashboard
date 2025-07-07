"use client";

import { usePathname } from "next/navigation";
import LinkAtom from "../atoms/LinkAtom";

export default function NavigationLinks() {
  const pathname = usePathname();

  const links = [
    { href: "/about", label: "About" },
    { href: "/signup", label: "Sign Up" }
  ];

  return (
    <div className="flex items-center space-x-8">
      {links.map(({ href, label }) => (
        <LinkAtom
          key={href}
          href={href}
          variant={pathname === href ? "active" : "navigation"}
        >
          {label}
        </LinkAtom>
      ))}
    </div>
  );
}
