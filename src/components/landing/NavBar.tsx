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
        className={`grid grid-cols-3 items-center transition-all duration-500 ease-in-out ${
          scrolled
            ? "bg-neutral-400/20 backdrop-blur-md rounded-2xl px-6 py-3 shadow-lg"
            : "px-6 py-4"
        }`}
      >
        <div className="flex items-center">
          <Link href="/">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo.png"
              alt="BurgerBots Logo"
              style={{ height: "52px", width: "auto", filter: scrolled ? "invert(1)" : "none", transition: "filter 0.5s ease-in-out" }}
            />
          </Link>
        </div>

        <nav className="flex items-center justify-center gap-10">
          <Link href="/" className={`text-[15px] font-medium transition-colors duration-500 ${scrolled ? "text-black hover:text-neutral-600" : "text-white hover:text-gray-300"}`}>
            Home
          </Link>
          <Link href="/technology" className={`text-[15px] font-medium transition-colors duration-500 ${scrolled ? "text-black hover:text-neutral-600" : "text-white hover:text-gray-300"}`}>
            Technology
          </Link>
          <Link href="/about" className={`text-[15px] font-medium transition-colors duration-500 ${scrolled ? "text-black hover:text-neutral-600" : "text-white hover:text-gray-300"}`}>
            About
          </Link>
        </nav>

        <div className="flex justify-end">
          <Link
            href="/contact"
            className={`text-sm font-semibold px-7 py-3 rounded-full transition-all duration-500 ${
              scrolled
                ? "bg-black text-white hover:bg-neutral-800"
                : "bg-white text-black hover:bg-neutral-200"
            }`}
          >
            Contact us
          </Link>
        </div>
      </div>
    </header>
  );
}
