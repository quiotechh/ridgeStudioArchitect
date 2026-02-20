"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact Us", href: "/contact" },
  { label: "Bespoke Furniture", href: "/bespoke-furniture" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-[#1f4f3f] ${
        scrolled ? "shadow-lg backdrop-blur-md bg-opacity-95 py-2" : "py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between">
        {/* Logo: Icon + Name + Tagline */}
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            src="/logo/ridge_logo.png"
            alt="Ridge Studio Architects"
            width={46}
            height={46}
            className="object-contain"
            priority
          />
          <div className="flex flex-col leading-tight">
            <span className="text-white font-serif text-base font-semibold tracking-wide">
              Ridge Studio Architects
            </span>
            <span className="text-white/80 font-sans font-medium text-xs mt-0.5">
              Architecture • Interior • Structure
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="relative text-[#F5F0E8]/80 hover:text-[#F5F0E8] text-[11px] tracking-[0.18em] uppercase font-medium transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-px after:w-0 after:bg-[#F5F0E8] after:transition-all after:duration-300 hover:after:w-full pb-1"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Link
            href="/contact"
            className="text-[#1f4f3f] bg-[#F5F0E8] hover:bg-[#1f4f3f] hover:text-[#F5F0E8] border border-[#F5F0E8] text-[10px] tracking-[0.22em] uppercase font-semibold px-6 py-3 transition-all duration-300"
          >
            Get in Touch
          </Link>
        </div>

        {/* Mobile Hamburger — shadcn Sheet */}
        <div className="lg:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-[#F5F0E8] hover:bg-[#F5F0E8]/10 hover:text-[#F5F0E8]"
              >
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="bg-[#1f4f3f] border-l border-[#F5F0E8]/10 w-75 flex flex-col justify-center p-10"
            >
              {/* Logo in mobile menu */}
              <div className="flex items-center gap-3 mb-10">
                <Image
                  src="/logo/ridge_logo.png"
                  alt="Ridge Studio Architects"
                  width={40}
                  height={40}
                  className="object-contain"
                />
                <div className="flex flex-col leading-tight">
                  <span className="text-white text-sm font-semibold tracking-wide">
                    Ridge Studio Architects
                  </span>
                  <span className="text-white/70 text-[11px] mt-0.5">
                    Architecture • Interior • Structure
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-7">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="text-[#F5F0E8] font-serif text-2xl font-medium hover:text-[#F5F0E8]/60 transition-colors duration-300 tracking-wide"
                  >
                    {link.label}
                  </Link>
                ))}

                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="mt-4 text-center text-[#1f4f3f] bg-[#F5F0E8] hover:bg-transparent hover:text-[#F5F0E8] border border-[#F5F0E8] text-[10px] tracking-[0.22em] uppercase font-semibold px-6 py-4 transition-all duration-300"
                >
                  Get in Touch
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
