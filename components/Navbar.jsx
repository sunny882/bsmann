import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
  ];

  return (
    <header className="w-full bg-white border-b border-[#1f2238] sticky top-0 z-50">
      {/* Top Brand Row */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-24 flex items-center justify-center">
        <Link href="/" className="flex items-center gap-5">
          <Image
            src="/logo.png"
            alt="BS Mann Trucking"
            width={48}
            height={48}
            priority
          />

          <span className="text-3xl md:text-5xl font-light tracking-tight text-[#1f2238] uppercase">
            BS Mann Trucking Inc
          </span>
        </Link>
      </div>

      {/* Navigation Row */}
      <div className="border-t border-[#1f2238]">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Left Nav */}
          <nav className="flex items-center gap-10 px-6 md:px-10 h-14 text-sm md:text-base text-[#1f2238]">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="hover:text-pink-700 transition"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right CTA */}
          <Link
            href="/contact"
            className="bg-[#1f2238] text-white px-10 md:px-16 h-14 flex items-center justify-center text-sm md:text-base hover:bg-pink-700 transition"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </header>
  );
}