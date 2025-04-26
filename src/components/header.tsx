"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/posts",
    label: "Posts",
  },
  {
    href: "/create-post",
    label: "Create post",
  },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="flex justify-between items-center py-4 px-7 border-b">
      <Link href="/">
        <Image
          src="/cat-logo.svg"
          alt="Logo"
          className="md:w-16"
          width="60"
          height="60"
        />
      </Link>

      <nav>
        <ul className="flex gap-x-5">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                className={`text-zinc-300 
                ${pathname === link.href ? "link.href" : "text-zinc-500"}`}
                href={link.href}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
