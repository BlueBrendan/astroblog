"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Astro" },
  { href: "/landscapes", label: "Landscape" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-40 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 h-16 flex items-center justify-center gap-8">
        {links.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`text-xs sm:text-sm transition-colors select-none ${
                isActive
                  ? "text-white"
                  : "text-gray-400 hover:text-white/80"
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}