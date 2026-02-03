"use client";
import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

import Link from "next/link";
import MobileNav from "./MobileNav";

export default function Header() {
  const pathname = usePathname();
  return (
    <header className="flex items-center justify-between border-b border-black/5 bg-white/40 backdrop-blur-xl px-10 py-6 sticky top-0 z-50">
      <div className="flex items-center gap-3">
        <div className="flex items-center">
          <Image src="/profile/logo.svg" alt="Logo" height={80} width={80} className="h-20 w-auto" priority />
        </div>
      </div>
      <nav className="hidden md:flex items-center gap-10">
        <Link
          href="/"
          className="text-sm font-bold transition-colors"
          style={{ color: pathname === "/" ? "rgb(255, 126, 103)" : "#000" }}
        >
          Home
        </Link>
        <Link
          href="/projects"
          className="text-sm font-bold transition-colors"
          style={{ color: pathname === "/projects" ? "rgb(255, 126, 103)" : "#000" }}
        >
          Projects
        </Link>
        <Link
          href="/about"
          className="text-sm font-bold transition-colors"
          style={{ color: pathname === "/about" ? "rgb(255, 126, 103)" : "#000" }}
        >
          About Me
        </Link>
      </nav>
      <div className="md:hidden flex items-center bg-[color:#fff1ed] p-2 rounded-full">
        <MobileNav />
      </div>
    </header>
  );
}
