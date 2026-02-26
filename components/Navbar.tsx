"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const serviceLinks = [
  {
    label: "Commercial Interiors & Exteriors",
    href: "/services/commercial-interiors-exteriors",
  },
  {
    label: "Residential Interiors & Exteriors",
    href: "/services/residential-interiors-exteriors",
  },
  { label: "Architecture & Planning", href: "/services/architecture-planning" },
  { label: "Landscaping", href: "/services/landscaping" },
  { label: "Turnkey Projects", href: "/services/turnkey-projects" },
  { label: "Renovation Projects", href: "/services/renovation-projects" },
  { label: "Bespoke Furniture", href: "/bespoke-furniture" },
  {
    label: "Structure Drawing Services",
    href: "/services/structure-drawing-services",
  },
  {
    label: "Facade & Exterior Design",
    href: "/services/facade-exterior-design",
  },
  { label: "Terrace Garden", href: "/services/terrace-garden" },
  { label: "Vastu", href: "/services/vastu" },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services", hasDropdown: true },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Bespoke Furniture", href: "/bespoke-furniture" },
  { label: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close desktop dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setDesktopDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setDesktopDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setDesktopDropdownOpen(false);
    }, 200);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-[#1f4f3f] ${
        scrolled ? "shadow-lg backdrop-blur-md bg-opacity-95 py-2" : "py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between">
        {/* Logo */}
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

        {/* ── Desktop Nav Links ── */}
        <ul className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) =>
            link.hasDropdown ? (
              <li
                key={link.href}
                ref={dropdownRef}
                className="relative flex items-center"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  onClick={() => setDesktopDropdownOpen((prev) => !prev)}
                  className="relative flex items-center gap-1 text-[#F5F0E8]/80 hover:text-[#F5F0E8] text-[11px] tracking-[0.18em] uppercase font-medium transition-colors duration-300 cursor-pointer"
                >
                  {link.label}
                  <ChevronDown
                    className={`w-3 h-3 transition-transform duration-300 ${
                      desktopDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* ── Desktop Dropdown ── */}
                <AnimatePresence>
                  {desktopDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="absolute top-full left-1/2 -translate-x-1/2 pt-4"
                    >
                      <div className="bg-[#1f4f3f] border border-[#F5F0E8]/10 shadow-2xl w-72">
                        {/* View All Services link */}
                        <Link
                          href="/services"
                          onClick={() => setDesktopDropdownOpen(false)}
                          className="flex items-center justify-between px-5 py-3 border-b border-[#F5F0E8]/10 text-[#F5F0E8] text-[10px] tracking-[0.25em] uppercase font-semibold hover:bg-[#F5F0E8]/5 transition-colors duration-200"
                        >
                          All Services
                          <span className="text-[#F5F0E8]/30 text-[9px]">
                            {serviceLinks.length}
                          </span>
                        </Link>

                        {/* Service Links */}
                        <div className="py-1 max-h-[70vh] overflow-y-auto overflow-hidden">
                          {serviceLinks.map((service, i) => (
                            <Link
                              key={service.href}
                              href={service.href}
                              onClick={() => setDesktopDropdownOpen(false)}
                              className="group flex items-center gap-3 px-5 py-2.5 text-[#F5F0E8]/60 hover:text-[#F5F0E8] hover:bg-[#F5F0E8]/5 transition-all duration-200"
                            >
                              <span className="text-[#F5F0E8]/15 text-[9px] font-mono shrink-0">
                                {String(i + 1).padStart(2, "0")}
                              </span>
                              <span className="text-[11px] tracking-wide font-medium">
                                {service.label}
                              </span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            ) : (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="relative text-[#F5F0E8]/80 hover:text-[#F5F0E8] text-[11px] tracking-[0.18em] uppercase font-medium transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-px after:w-0 after:bg-[#F5F0E8] after:transition-all after:duration-300 hover:after:w-full pb-1"
                >
                  {link.label}
                </Link>
              </li>
            ),
          )}
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

        {/* ── Mobile Hamburger ── */}
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
              className="bg-[#1f4f3f] border-l border-[#F5F0E8]/10 w-80 flex flex-col p-0 overflow-y-auto"
            >
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              {/* Logo */}
              <div className="flex items-center gap-3 p-8 pb-6 border-b border-[#F5F0E8]/10">
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

              {/* Mobile Nav Links */}
              <div className="flex flex-col px-8 py-6 flex-1">
                {navLinks.map((link) =>
                  link.hasDropdown ? (
                    <div key={link.href} className="flex flex-col">
                      {/* Services toggle */}
                      <button
                        onClick={() => setMobileServicesOpen((prev) => !prev)}
                        className="flex items-center justify-between text-[#F5F0E8] font-serif text-xl font-medium tracking-wide py-3 cursor-pointer"
                      >
                        <span>{link.label}</span>
                        <ChevronDown
                          className={`w-4 h-4 text-[#F5F0E8]/40 transition-transform duration-300 ${
                            mobileServicesOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {/* Mobile Services Sub-menu */}
                      <AnimatePresence>
                        {mobileServicesOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{
                              duration: 0.3,
                              ease: [0.76, 0, 0.24, 1],
                            }}
                            className="overflow-hidden"
                          >
                            <div className="flex flex-col border-l border-[#F5F0E8]/10 ml-2 pl-4 pb-2">
                              {/* All Services */}
                              <Link
                                href="/services"
                                onClick={() => setOpen(false)}
                                className="text-[#F5F0E8]/70 text-xs tracking-[0.2em] uppercase font-semibold py-2 hover:text-[#F5F0E8] transition-colors duration-200"
                              >
                                View All Services
                              </Link>

                              <div className="w-full h-px bg-[#F5F0E8]/10 my-1" />

                              {serviceLinks.map((service, i) => (
                                <Link
                                  key={service.href}
                                  href={service.href}
                                  onClick={() => setOpen(false)}
                                  className="flex items-center gap-3 text-[#F5F0E8]/50 hover:text-[#F5F0E8] text-sm py-2 transition-colors duration-200"
                                >
                                  <span className="text-[#F5F0E8]/15 text-[9px] font-mono shrink-0">
                                    {String(i + 1).padStart(2, "0")}
                                  </span>
                                  <span className="font-light">
                                    {service.label}
                                  </span>
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="text-[#F5F0E8] font-serif text-xl font-medium hover:text-[#F5F0E8]/60 transition-colors duration-300 tracking-wide py-3"
                    >
                      {link.label}
                    </Link>
                  ),
                )}
              </div>

              {/* Mobile CTA */}
              <div className="p-8 pt-0">
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="block text-center text-[#1f4f3f] bg-[#F5F0E8] hover:bg-transparent hover:text-[#F5F0E8] border border-[#F5F0E8] text-[10px] tracking-[0.22em] uppercase font-semibold px-6 py-4 transition-all duration-300"
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
