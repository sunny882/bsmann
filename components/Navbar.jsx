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

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

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

      {/* Spacer */}
      <div className="h-[72px] md:h-[120px]" />

      {/* Header */}
      <header
        className={`fixed top-0 left-0 z-50 w-full overflow-visible border border-gray-500 bg-white transition-transform duration-300 ${
          showNav ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {/* Top Row */}
        <div className="relative flex h-[72px] items-center justify-center px-4">
          <Link
            href="/"
            onClick={closeMenu}
            className="flex items-center gap-3"
          >
            <Image
              src="/logo.svg"
              alt="BS Mann Trucking Inc"
              width={38}
              height={38}
              priority
            />

            <span className="text-center text-[16px] font-light uppercase leading-none tracking-wide text-gray-900 sm:text-[20px] md:text-[32px]">
              BS Mann Trucking Inc
            </span>
          </Link>

          {/* Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            aria-label="Menu"
            className="absolute right-4 z-[1000] flex h-10 w-10 flex-col items-center justify-center gap-1 border border-gray-400 md:hidden"
          >
            <span className="h-[2px] w-5 bg-gray-900"></span>
            <span className="h-[2px] w-5 bg-gray-900"></span>
            <span className="h-[2px] w-5 bg-gray-900"></span>
          </button>
        </div>

        {/* Desktop Nav */}
        <div className="hidden h-12 border-t border-gray-500 bg-white md:flex">
          <nav className="flex flex-1 items-stretch gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                data-active={pathname === link.href ? "true" : "false"}
                className="nav-link flex h-full w-24 items-center justify-center text-[15px] transition-colors duration-150"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <Link
            href="/contact"
            data-active={pathname === "/contact" ? "true" : "false"}
            className="cta-btn flex h-full w-52 items-center justify-center text-[15px] transition-colors duration-150"
          >
            Contact Us
          </Link>
        </div>
      </header>

      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 z-[999] bg-white transition-all duration-300 md:hidden ${
          open
            ? "translate-x-0 opacity-100"
            : "translate-x-full opacity-0 pointer-events-none"
        }`}
      >
        {/* Mobile Header */}
        <div className="relative flex h-[72px] items-center justify-center border-b border-gray-300 px-6">
          <span className="text-[14px] font-medium uppercase tracking-[0.22em] text-gray-700">
            Navigation
          </span>

          <button
            onClick={closeMenu}
            aria-label="Close Menu"
            className="absolute right-6 flex h-10 w-10 items-center justify-center text-gray-700 hover:bg-gray-100"
          >
            <span className="text-[24px] leading-none">×</span>
          </button>
        </div>

        {/* Links */}
        <div className="space-y-4 px-6 pt-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={closeMenu}
              data-active={pathname === link.href ? "true" : "false"}
              className="nav-link flex h-12 items-center justify-center text-[17px] font-medium"
            >
              {link.name}
            </Link>
          ))}

          <Link
            href="/contact"
            onClick={closeMenu}
            data-active={pathname === "/contact" ? "true" : "false"}
            className="cta-btn flex h-12 items-center justify-center text-[17px] font-medium"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </>
  );
}