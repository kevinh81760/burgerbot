"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const getThreshold = () => {
      if (pathname === "/about" || pathname === "/technology" || pathname === "/contact") {
        return Math.max(window.innerHeight * 0.33, 500) - 80;
      }
      return window.innerHeight - 80;
    };

    const onScroll = () => {
      setScrolled(window.scrollY > getThreshold());
    };

    setScrolled(window.scrollY > getThreshold());

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        scrolled ? "px-2 pt-2" : "p-0"
      }`}
    >
      <div
        className={`flex items-center justify-between transition-all duration-500 ease-in-out ${
          scrolled
            ? "bg-neutral-600/80 backdrop-blur-md rounded-2xl px-6 py-3 shadow-lg"
            : "px-6 py-4"
        }`}
      >
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-5 bg-white rounded-[3px]" />
          <span className="text-white text-xl font-bold tracking-[2px]">BURGERBOT</span>
        </div>

        <nav className="flex items-center gap-10">
          <Link href="/" className="text-white hover:text-gray-300 text-[15px] font-medium transition-colors">
            Home
          </Link>
          <Link href="/technology" className="text-white hover:text-gray-300 text-[15px] font-medium transition-colors">
            Technology
          </Link>
          <Link href="/about" className="text-white hover:text-gray-300 text-[15px] font-medium transition-colors">
            About
          </Link>
        </nav>

        <Link
          href="/contact"
          className="bg-white text-black text-sm font-semibold px-7 py-3 rounded-full transition-all duration-300 hover:bg-neutral-200"
        >
          Contact us
        </Link>
      </div>
    </header>
  );
}
