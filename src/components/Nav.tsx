"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const ITEMS = [
  { key: "home", label: "INDEX", href: "/" },
  { key: "work", label: "WORK", href: "/work" },
  { key: "about", label: "ABOUT", href: "/about" },
  { key: "contact", label: "NOTES", href: "/contact" },
] as const;

export function Nav() {
  const pathname = usePathname();

  const isActive = (key: (typeof ITEMS)[number]["key"]) => {
    if (key === "home") return pathname === "/";
    if (key === "work") return pathname.startsWith("/work");
    if (key === "about") return pathname === "/about";
    if (key === "contact") return pathname === "/contact";
    return false;
  };

  return (
    <nav className="nav-btns inline-flex flex-wrap justify-end gap-2.5">
      {ITEMS.map((it) => (
        <Link
          key={it.key}
          href={it.href}
          className={"nav-btn" + (isActive(it.key) ? " is-active" : "")}
        >
          {it.label}
        </Link>
      ))}
    </nav>
  );
}
