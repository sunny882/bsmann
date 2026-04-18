"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const [open, setOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
  ];

  const closeMenu = () => setOpen(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 10) {
        setShowNav(true);
      } else if (currentScrollY > lastScrollY) {
        setShowNav(false);
        setOpen(false);
      } else {
        setShowNav(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <style>{`
        .nav-link { color: #6b7280; }
        .nav-link:hover { color: #111827; background: #f3f4f6; }
        .nav-link[data-active="true"] { color: #ffffff; background: #111827; }

        .cta-btn { background: #334155; color: #ffffff; }
        .cta-btn:hover { background: #475569; }
        .cta-btn[data-active="true"] { background: #1e293b; color: #f8fafc; }
      `}</style>

      {/* Spacer pushes page below fixed navbar */}
      <div className="h-[72px] md:h-[120px]" />

      <header
        className={`w-full bg-white border border-gray-500 fixed top-0 left-0 z-50 transition-transform duration-300 ${
          showNav ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {/* Top Row */}
        <div className="relative h-[72px] flex items-center justify-center px-4">
          <Link href="/" className="flex items-center gap-3" onClick={closeMenu}>
            <Image
              src="/logo.svg"
              alt="BS Mann Trucking Inc"
              width={38}
              height={38}
              priority
            />
            <span className="uppercase text-[16px] sm:text-[20px] md:text-[32px] font-light tracking-wide text-gray-900 leading-none text-center">
              BS Mann Trucking Inc
            </span>
          </Link>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden absolute right-4 w-10 h-10 flex flex-col items-center justify-center gap-1 border border-gray-400"
            aria-label="Menu"
          >
            <span className="w-5 h-[2px] bg-gray-900"></span>
            <span className="w-5 h-[2px] bg-gray-900"></span>
            <span className="w-5 h-[2px] bg-gray-900"></span>
          </button>
        </div>

        {/* Desktop Navbar */}
        <div className="hidden md:flex h-12 bg-white border-t border-gray-500 px-[2px] py-[2px]">
          <nav className="flex items-stretch gap-2 flex-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                data-active={pathname === link.href ? "true" : "false"}
                className="nav-link w-24 h-full flex items-center justify-center text-[15px] transition-colors duration-150"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <Link
            href="/contact"
            data-active={pathname === "/contact" ? "true" : "false"}
            className="cta-btn w-52 h-full flex items-center justify-center text-[15px] transition-colors duration-150"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Fullscreen Menu */}
        <div
          className={`md:hidden fixed inset-0 bg-white z-50 transform transition-all duration-300 ${
            open
              ? "translate-x-0 opacity-100"
              : "translate-x-full opacity-0 pointer-events-none"
          }`}
        >
          <div className="relative h-[72px] border-b border-gray-300 flex items-center justify-center px-6">
            <span className="uppercase text-[14px] tracking-[0.22em] font-medium text-gray-700">
              Navigation
            </span>

            <button
              onClick={closeMenu}
              className="absolute right-6 w-10 h-10 flex items-center justify-center text-gray-700 hover:bg-gray-100 transition-colors"
            >
              <span className="text-[24px] leading-none">×</span>
            </button>
          </div>

          <div className="px-6 pt-8 pb-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={closeMenu}
                data-active={pathname === link.href ? "true" : "false"}
                className="nav-link h-12 flex items-center justify-center text-[17px] font-medium"
              >
                {link.name}
              </Link>
            ))}

            <Link
              href="/contact"
              onClick={closeMenu}
              data-active={pathname === "/contact" ? "true" : "false"}
              className="cta-btn h-12 flex items-center justify-center text-[17px] font-medium"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}