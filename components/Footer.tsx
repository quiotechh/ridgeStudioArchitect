"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Heart,
  Instagram,
  Facebook,
  Youtube,
  ArrowUpRight,
} from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Categories", href: "/categories" },
  { label: "Bespoke Furniture", href: "/bespoke-furniture" },
  { label: "Contact Us", href: "/contact" },
];

const services = [
  { label: "Commercial Interiors", href: "/services/commercial-interiors-exteriors" },
  { label: "Residential Interiors", href: "/services/residential-interiors-exteriors" },
  { label: "Architecture & Planning", href: "/services/architecture-planning" },
  { label: "Landscaping", href: "/services/landscaping" },
  { label: "Turnkey Projects", href: "/services/turnkey-projects" },
  { label: "Bespoke Furniture", href: "/bespoke-furniture" },
  { label: "Renovation Projects", href: "/services/renovation-projects" },
  { label: "Structure Drawings", href: "/services/structure-drawing-services" },
  { label: "Facade & Exterior Design", href: "/services/facade-exterior-design" },
];

const socials = [
  {
    label: "Instagram",
    href: "https://instagram.com/ridgestudioarchitects",
    icon: Instagram,
  },
  {
    label: "Facebook",
    href: "https://facebook.com/ridgestudioarchitects",
    icon: Facebook,
  },
  {
    label: "YouTube",
    href: "https://youtube.com/@ridgestudioarchitects",
    icon: Youtube,
  },
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="w-full bg-[#1f4f3f] border-t border-[#F5F0E8]/10">
      {/* Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-10 md:px-16 xl:px-24 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12 xl:gap-8">
          {/* Col 1 — Brand */}
          <div className="xl:col-span-1 flex flex-col gap-6">
            <Link href="/" className="flex flex-col items-start group w-fit">
              <Image
                src="/logo/ridge_logo.png"
                alt="Ridge Studio Architects"
                width={100}
                height={100}
                className="object-contain -mb-1"
                priority
              />
              <span className="text-[#F5F0E8] text-base font-semibold tracking-wide leading-tight mt-1">
                Ridge Studio <br />
                Architects
              </span>
              <span className="text-[#F5F0E8]/40 text-[9px] tracking-[0.2em] uppercase mt-0.5">
                Architecture • Interior • Structure
              </span>
            </Link>

            <p className="text-[#F5F0E8]/45 text-sm leading-relaxed font-light max-w-xs">
              Designing spaces where structure meets intention. Premium
              architecture and interior design across Gujarat.
            </p>

            {/* Socials */}
            <div className="flex items-center gap-3">
              {socials.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 border border-[#F5F0E8]/15 flex items-center justify-center text-[#F5F0E8]/40 hover:text-[#F5F0E8] hover:border-[#F5F0E8]/50 hover:bg-[#F5F0E8]/5 transition-all duration-300"
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <s.icon className="w-3.5 h-3.5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Col 2 — Quick Links */}
          <div className="flex flex-col gap-5">
            <h4 className="text-[#F5F0E8] text-xs tracking-[0.35em] uppercase font-semibold">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 text-[#F5F0E8]/45 hover:text-[#F5F0E8] text-sm transition-colors duration-300"
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-[#F5F0E8] transition-all duration-300 shrink-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Services */}
          <div className="flex flex-col gap-5">
            <h4 className="text-[#F5F0E8] text-xs tracking-[0.35em] uppercase font-semibold">
              Services
            </h4>
            <ul className="flex flex-col gap-3">
              {services.map((s) => (
                <li key={s.label}>
                  <Link
                    href={s.href}
                    className="group flex items-center gap-2 text-[#F5F0E8]/45 hover:text-[#F5F0E8] text-sm transition-colors duration-300"
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-[#F5F0E8] transition-all duration-300 shrink-0" />
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contact */}
          <div className="flex flex-col gap-5">
            <h4 className="text-[#F5F0E8] text-xs tracking-[0.35em] uppercase font-semibold">
              Get In Touch
            </h4>

            <div className="flex flex-col gap-5">
              <Link
                href="https://www.google.com/maps/dir//Ridge+Studio+Architects,+D6%2F50,+near+Vishram+Chowk,+Pocket+D-6,+Pocket+5,+Sector+6,+Rohini,+Delhi,+110085/@28.6544839,77.1830238,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x390d01c25cd27f65:0x62194603f830d75c!2m2!1d77.1095818!2d28.7118271?entry=ttu&g_ep=EgoyMDI2MDIxNy4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-3 text-[#F5F0E8]/45 hover:text-[#F5F0E8] transition-colors duration-300"
              >
                <MapPin className="w-4 h-4 shrink-0 mt-0.5 text-[#F5F0E8]/30 group-hover:text-[#F5F0E8] transition-colors duration-300" />
                <span className="text-sm leading-relaxed">
                  D6/50, Rohini,
                  <br />
                  Sec 6 near vishram chowk
                  <br />
                  Delhi — 110085
                </span>
              </Link>

              <Link
                href="tel:+919876543210"
                className="group flex items-center gap-3 text-[#F5F0E8]/45 hover:text-[#F5F0E8] transition-colors duration-300"
              >
                <Phone className="w-4 h-4 shrink-0 text-[#F5F0E8]/30 group-hover:text-[#F5F0E8] transition-colors duration-300" />
                <span className="text-sm">+91 9953332509</span>
                <span className="text-sm">+91 8851944757</span>
              </Link>

              <Link
                href="mailto:ridgestudioarchitect25@gmail.com"
                className="group flex items-center gap-3 text-[#F5F0E8]/45 hover:text-[#F5F0E8] transition-colors duration-300"
              >
                <Mail className="w-4 h-4 shrink-0 text-[#F5F0E8]/30 group-hover:text-[#F5F0E8] transition-colors duration-300" />
                <span className="text-sm">
                  ridgestudioarchitect25@gmail.com
                </span>
              </Link>
            </div>

            {/* CTA */}
            <Link
              href="/contact"
              className="group mt-2 inline-flex items-center gap-2 bg-[#F5F0E8] px-5 py-3 hover:bg-white transition-colors duration-300 w-fit"
            >
              <span className="text-[#1f4f3f] text-xs tracking-[0.2em] uppercase font-bold">
                Start a Project
              </span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#1f4f3f] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
            </Link>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-[#F5F0E8]/10" />

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-10 md:px-16 xl:px-24 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-[#F5F0E8]/25 text-xs tracking-wide text-center md:text-left">
          © {new Date().getFullYear()} Ridge Studio Architects. All rights
          reserved.
        </p>

        {/* Made with love by Quiotech */}
        <div className="flex items-center gap-1.5 text-[#F5F0E8]/25 text-xs">
          <span>Made with</span>
          <Heart className="w-3 h-3 text-red-400/70 fill-red-400/70" />
          <span>by</span>
          <Link
            href="https://quiotech.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#F5F0E8]/50 hover:text-[#F5F0E8] font-semibold tracking-wide transition-colors duration-300 underline underline-offset-4"
          >
            Quiotech
          </Link>
        </div>

        {/* Back to top */}
        <motion.button
          onClick={scrollToTop}
          className="flex items-center gap-2 text-[#F5F0E8]/25 hover:text-[#F5F0E8] text-xs tracking-[0.2em] uppercase transition-colors duration-300 group"
          whileHover={{ y: -1 }}
          whileTap={{ scale: 0.95 }}
        >
          Back to Top
          <span className="group-hover:-translate-y-0.5 transition-transform duration-200">
            ↑
          </span>
        </motion.button>
      </div>
    </footer>
  );
}
