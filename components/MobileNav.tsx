"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <button
        className="md:hidden flex items-center justify-center w-12 h-12 rounded-full bg-transparent shadow-none z-50"
        aria-label="Open navigation menu"
        onClick={() => setOpen((v) => !v)}
      >
        <span className="sr-only">Open navigation menu</span>
        <svg
          className="w-7 h-7 text-black"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {open ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>
      {open && (
        <div className="fixed inset-0 z-40 bg-white">
          <div
            className="absolute inset-0 bg-white opacity-100"
            onClick={() => setOpen(false)}
          />
          <nav className="fixed inset-0 w-full h-full bg-white shadow-2xl flex flex-col gap-4 p-6 animate-slide-in z-50">
            <Link
              href="/"
              className={`block w-full text-lg font-bold transition-colors px-4 py-3 rounded-lg border ${pathname === "/" ? "bg-[color:#ff7e67] text-white border-transparent hover:brightness-90" : "bg-white text-black border-black/5 hover:bg-[color:#ff7e67] hover:text-white"}`}
              onClick={() => setOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/projects"
              className={`block w-full text-lg font-bold transition-colors px-4 py-3 rounded-lg border ${pathname === "/projects" ? "bg-[color:#ff7e67] text-white border-transparent hover:brightness-90" : "bg-white text-black border-black/5 hover:bg-[color:#ff7e67] hover:text-white"}`}
              onClick={() => setOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="/blog"
              className={`block w-full text-lg font-bold transition-colors px-4 py-3 rounded-lg border ${pathname?.startsWith("/blog") ? "bg-[color:#ff7e67] text-white border-transparent hover:brightness-90" : "bg-white text-black border-black/5 hover:bg-[color:#ff7e67] hover:text-white"}`}
              onClick={() => setOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/about"
              className={`block w-full text-lg font-bold transition-colors px-4 py-3 rounded-lg border ${pathname === "/about" ? "bg-[color:#ff7e67] text-white border-transparent hover:brightness-90" : "bg-white text-black border-black/5 hover:bg-[color:#ff7e67] hover:text-white"}`}
              onClick={() => setOpen(false)}
            >
              About Me
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}
