"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import SearchButton from "./search.button";
import { cn } from "@/lib/utils";

export default function Header() {
  const pathname = usePathname();
  const navLinks = [
    { href: "/", label: "Home", active: pathname === "/" },
    { href: "/category", label: "Category", active: pathname === "/category" },
    { href: "/about", label: "About", active: pathname === "/about" },
    { href: "/contact", label: "Contact", active: pathname === "/contact" },
  ];

  return (
    <header className="px-4 py-6 lg:px-[152px] h-20">
      <div className="flex justify-between items-center">
        <Link href="/">
          <h1 className="font-bold text-xl">
            <span className="p-2 bg-emerald-500 text-white mr-1">Travel</span>
            Book<span className="text-emerald-500">.</span>
          </h1>
        </Link>

        <div className="hidden lg:flex items-center gap-10">
          <nav className="flex items-center space-x-4 lg:space-x-6">
            {navLinks.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={
                  (cn(
                    "text-sm font-medium transition-colors hover:text-primary hover:"
                  ),
                  route.active
                    ? "text-black dark:text-white font-bold underline underline-offset-8"
                    : "text-muted-foreground")
                }
              >
                {route.label}
              </Link>
            ))}
          </nav>
          <SearchButton />
        </div>
      </div>
    </header>
  );
}
