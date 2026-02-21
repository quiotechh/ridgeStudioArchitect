"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence, cubicBezier } from "framer-motion";
import { ArrowUpRight, Plus } from "lucide-react";
import Link from "next/link";

const ease = cubicBezier(0.76, 0, 0.24, 1);

type Service = {
  number: string;
  title: string;
  short: string;
  description: string;
  image: string;
  tags: string[];
  href: string;
};

const services: Service[] = [
  {
    number: "01",
    title: "Commercial Interiors & Exteriors",
    short: "Offices, Retail & Corporate Spaces",
    description:
      "We transform commercial environments into powerful brand statements. From reception lobbies to full office fit-outs, every detail reflects your business identity with precision and purpose.",
    image: "/services/commercial.jpg",
    tags: ["Office Design", "Retail", "Corporate"],
    href: "/services/commercial-interiors-exteriors",
  },
  {
    number: "02",
    title: "Residential Interiors & Exteriors",
    short: "Homes Designed for Living",
    description:
      "Your home should feel inevitable — as if it could only ever have looked this way. We craft residential spaces that balance beauty, comfort, and function in perfect proportion.",
    image: "/services/residential.jpg",
    tags: ["Living Spaces", "Bedrooms", "Facades"],
    href: "/services/residential-interiors-exteriors",
  },
  {
    number: "03",
    title: "Architecture & Planning",
    short: "From Blueprint to Reality",
    description:
      "Rigorous architectural planning with a creative eye. We handle site analysis, concept design, working drawings, and full project coordination from start to finish.",
    image: "/services/architecture.jpg",
    tags: ["Site Planning", "Concept Design", "Drawings"],
    href: "/services/architecture-planning",
  },
  {
    number: "04",
    title: "Landscaping",
    short: "Outdoor Spaces That Breathe",
    description:
      "We design landscapes that extend architecture into nature. From courtyard gardens to sprawling estate grounds, every element is composed with the same precision as the building itself.",
    image: "/services/landscaping.jpg",
    tags: ["Gardens", "Hardscape", "Green Design"],
    href: "/services/landscaping",
  },
  {
    number: "05",
    title: "Turnkey Projects",
    short: "Residential & Commercial",
    description:
      "Complete end-to-end project delivery. From first sketch to final handover, we manage every contractor, material, and milestone so you don't have to.",
    image: "/services/turnkey.jpg",
    tags: ["End-to-End", "Project Management", "Handover"],
    href: "/services/turnkey-projects",
  },
  {
    number: "06",
    title: "Renovation Projects",
    short: "Reimagining Existing Spaces",
    description:
      "Breathing new life into old structures. We approach renovation with sensitivity to what exists and a bold vision for what it can become — respecting history while embracing the new.",
    image: "/services/renovation.jpg",
    tags: ["Refurbishment", "Remodelling", "Upgrades"],
    href: "/services/renovation-projects",
  },
  {
    number: "07",
    title: "Bespoke Furniture",
    short: "Custom-Crafted for Every Space",
    description:
      "Furniture designed and built specifically for your space. Every piece is a collaboration — proportioned, detailed, and finished to match the architecture around it.",
    image: "/services/furniture.jpg",
    tags: ["Custom Design", "Joinery", "Handcrafted"],
    href: "/bespoke-furniture",
  },
  {
    number: "08",
    title: "Structure Drawing Services",
    short: "Engineered with Precision",
    description:
      "Detailed structural drawings and engineering documentation that form the backbone of every build. We ensure structural integrity is never compromised, no matter the complexity.",
    image: "/services/structure.jpg",
    tags: ["Structural", "Engineering", "Documentation"],
    href: "/services/structure-drawing-services",
  },
  {
    number: "09",
    title: "Facade & Exterior Design",
    short: "The Face of Your Building",
    description:
      "A building's facade is its first impression. We design exteriors that command attention — combining material innovation, proportion, and light to create landmarks.",
    image: "/services/facade.jpg",
    tags: ["Facade", "Cladding", "Exterior"],
    href: "/services/facade-exterior-design",
  },
];

function ServiceRow({ service, index }: { service: Service; index: number }) {
  const [hovered, setHovered] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.06, ease }}
      className="border-b border-[#F5F0E8]/10 last:border-b-0"
    >
      {/* Row Header */}
      <div
        className="flex items-center justify-between px-5 sm:px-8 md:px-16 xl:px-24 py-5 sm:py-7 cursor-pointer select-none"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => setExpanded(!expanded)}
      >
        <div className="flex items-center gap-4 sm:gap-8 flex-1 min-w-0">
          <span className="text-[#F5F0E8]/20 text-sm font-mono shrink-0">
            {service.number}
          </span>
          <motion.h3
            className="text-[#F5F0E8] text-xl md:text-2xl lg:text-3xl font-semibold tracking-tight truncate"
            animate={{ x: hovered ? 8 : 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {service.title}
          </motion.h3>
        </div>

        {/* Tags */}
        <div className="hidden xl:flex items-center gap-2 mx-8">
          {service.tags.map((tag) => (
            <span
              key={tag}
              className="text-[#F5F0E8]/20 text-[10px] tracking-[0.25em] uppercase border border-[#F5F0E8]/10 px-3 py-1"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Expand Icon */}
        <motion.div
          className="w-9 h-9 border border-[#F5F0E8]/20 flex items-center justify-center shrink-0 ml-4"
          animate={{
            rotate: expanded ? 45 : 0,
            backgroundColor: expanded ? "#F5F0E8" : "transparent",
            borderColor: expanded ? "#F5F0E8" : "rgba(245,240,232,0.2)",
          }}
          transition={{ duration: 0.3 }}
        >
          <Plus
            className="w-4 h-4 transition-colors duration-300"
            style={{ color: expanded ? "#1f4f3f" : "#F5F0E8" }}
          />
        </motion.div>
      </div>

      {/* Expanded Panel */}
      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            key="panel"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease }}
            className="overflow-hidden"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 border-t border-[#F5F0E8]/10">
              {/* Image Placeholder */}
              <div className="relative h-64 md:h-72 overflow-hidden bg-[#163d30]">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-[#F5F0E8]/5 text-[12vw] font-black select-none">
                    {service.number}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="px-5 sm:px-8 md:px-14 py-8 sm:py-10 flex flex-col justify-between bg-[#F5F0E8]">
                <div>
                  <p className="text-[#1f4f3f]/40 text-xs tracking-[0.3em] uppercase mb-4 font-medium">
                    {service.short}
                  </p>
                  <p className="text-[#2C2C2C]/75 text-base md:text-lg leading-relaxed font-light">
                    {service.description}
                  </p>
                </div>
                <Link
                  href={service.href}
                  className="mt-8 inline-flex items-center gap-2 text-[#1f4f3f] text-xs tracking-[0.25em] uppercase font-semibold border-b border-[#1f4f3f]/30 pb-1 w-fit hover:border-[#1f4f3f] transition-colors duration-300 group/link"
                >
                  Learn More
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-200" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function ServicesPage() {
  const headerRef = useRef<HTMLDivElement>(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  return (
    <main className="w-full bg-[#1f4f3f] min-h-screen">
      {/* ── HERO HEADER ── */}
      <div
        ref={headerRef}
        className="px-5 sm:px-8 md:px-16 xl:px-24 pt-28 sm:pt-36 pb-12 sm:pb-16 border-b border-[#F5F0E8]/10"
      >
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <motion.div
              className="flex items-center gap-3 mb-6"
              initial={{ opacity: 0, x: -16 }}
              animate={isHeaderInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, ease }}
            >
              <span className="h-px w-8 bg-[#F5F0E8]/30" />
              <span className="text-[#F5F0E8]/40 text-[10px] tracking-[0.4em] uppercase font-medium">
                What We Do
              </span>
            </motion.div>

            {["Our", "Services"].map((word, i) => (
              <div key={i} className="overflow-hidden">
                <motion.h1
                  className="text-[clamp(2.8rem,8vw,7rem)] font-bold text-[#F5F0E8] leading-none tracking-tight"
                  initial={{ y: "110%" }}
                  animate={isHeaderInView ? { y: "0%" } : {}}
                  transition={{ duration: 0.85, delay: 0.15 + i * 0.1, ease }}
                >
                  {word}
                </motion.h1>
              </div>
            ))}
          </div>

          <motion.p
            className="text-[#F5F0E8]/40 text-sm md:text-base leading-relaxed max-w-sm font-light"
            initial={{ opacity: 0, y: 16 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4, ease }}
          >
            Nine disciplines, one standard — excellence without compromise. From
            architecture to interiors, structure to furniture, we handle it all.
          </motion.p>
        </div>
      </div>

      {/* ── SERVICES ACCORDION ── */}
      <div>
        {services.map((service, i) => (
          <ServiceRow key={service.number} service={service} index={i} />
        ))}
      </div>

      {/* ── BOTTOM CTA ── */}
      <motion.div
        className="px-5 sm:px-8 md:px-16 xl:px-24 py-10 sm:py-16 border-t border-[#F5F0E8]/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <p className="text-[#F5F0E8]/35 text-sm font-light tracking-wide">
          Not sure which service you need? Let us guide you.
        </p>
        <Link
          href="/contact"
          className="group flex items-center gap-4 bg-[#F5F0E8] px-8 py-4 hover:bg-white transition-colors duration-300"
        >
          <span className="text-[#1f4f3f] text-xs tracking-[0.25em] uppercase font-bold">
            Get Free Consultation
          </span>
          <ArrowUpRight className="w-4 h-4 text-[#1f4f3f] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
        </Link>
      </motion.div>
    </main>
  );
}
