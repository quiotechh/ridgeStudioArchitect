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
};

const services: Service[] = [
  {
    number: "01",
    title: "Commercial Interiors & Exteriors",
    short: "Offices, Retail & Corporate Spaces",
    description:
      "We transform commercial environments into powerful brand statements. From reception lobbies to full office fit-outs, every detail reflects your business identity with precision and purpose.",
    image: "/DRAWING AREA  (4).jpg",
    tags: ["Office Design", "Retail", "Corporate"],
  },
  {
    number: "02",
    title: "Residential Interiors & Exteriors",
    short: "Homes Designed for Living",
    description:
      "Your home should feel inevitable — as if it could only ever have looked this way. We craft residential spaces that balance beauty, comfort, and function in perfect proportion.",
    image: "/services/residential/bedroom.jpeg",
    tags: ["Living Spaces", "Bedrooms", "Facades"],
  },
  {
    number: "03",
    title: "Architecture & Planning",
    short: "From Blueprint to Reality",
    description:
      "Rigorous architectural planning with a creative eye. We handle site analysis, concept design, working drawings, and full project coordination from start to finish.",
    image: "/architectural_plan.png",
    tags: ["Site Planning", "Concept Design", "Drawings"],
  },
  {
    number: "04",
    title: "Turnkey Projects",
    short: "Residential & Commercial",
    description:
      "Complete end-to-end project delivery. From first sketch to final handover, we manage every contractor, material, and milestone so you don't have to.",
    image: "/outdoor.jpeg",
    tags: ["End-to-End", "Project Management", "Handover"],
  },
  {
    number: "05",
    title: "Bespoke Furniture",
    short: "Custom-Crafted for Every Space",
    description:
      "Furniture designed and built specifically for your space. Every piece is a collaboration — proportioned, detailed, and finished to match the architecture around it.",
    image: "/hero/lobby_view.jpeg",
    tags: ["Custom Design", "Joinery", "Handcrafted"],
  },
  {
    number: "06",
    title: "Renovation Projects",
    short: "Reimagining Existing Spaces",
    description:
      "Breathing new life into old structures. We approach renovation with sensitivity to what exists and a bold vision for what it can become — respecting history while embracing the new.",
    image: "/hall.jpeg",
    tags: ["Refurbishment", "Remodelling", "Upgrades"],
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
      transition={{ duration: 0.6, delay: index * 0.08, ease }}
      className="border-b border-[#2C2C2C]/10 last:border-b-0"
    >
      {/* Row Header */}
      <div
        className="flex items-center justify-between px-10 md:px-16 xl:px-24 py-7 cursor-pointer select-none"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => setExpanded(!expanded)}
      >
        <div className="flex items-center gap-8 flex-1 min-w-0">
          <span className="text-[#2C2C2C]/20 text-sm font-mono shrink-0">
            {service.number}
          </span>
          <motion.h3
            className="text-[#2C2C2C] text-xl md:text-2xl lg:text-3xl font-semibold tracking-tight truncate"
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
              className="text-[#2C2C2C]/30 text-[10px] tracking-[0.25em] uppercase border border-[#2C2C2C]/10 px-3 py-1"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Expand Icon */}
        <motion.div
          className="w-9 h-9 border border-[#2C2C2C]/20 flex items-center justify-center shrink-0 ml-4"
          animate={{
            rotate: expanded ? 45 : 0,
            backgroundColor: expanded ? "#1f4f3f" : "transparent",
            borderColor: expanded ? "#1f4f3f" : "rgba(44,44,44,0.2)",
          }}
          transition={{ duration: 0.3 }}
        >
          <Plus
            className="w-4 h-4 transition-colors duration-300"
            style={{ color: expanded ? "#F5F0E8" : "#2C2C2C" }}
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
            <div className="grid grid-cols-1 md:grid-cols-2 border-t border-[#2C2C2C]/10">
              {/* Image */}
              <div className="relative h-64 md:h-72 overflow-hidden bg-[#1f4f3f]/10">
                <motion.img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                  initial={{ scale: 1.08 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.8, ease }}
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
                {/* Fallback */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-[#1f4f3f]/10 text-[12vw] font-black select-none">
                    {service.number}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="px-10 md:px-14 py-10 flex flex-col justify-between bg-[#1f4f3f]">
                <div>
                  <p className="text-[#F5F0E8]/40 text-xs tracking-[0.3em] uppercase mb-4 font-medium">
                    {service.short}
                  </p>
                  <p className="text-[#F5F0E8]/80 text-base md:text-lg leading-relaxed font-light">
                    {service.description}
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="mt-8 inline-flex items-center gap-2 text-[#F5F0E8] text-xs tracking-[0.25em] uppercase font-semibold border-b border-[#F5F0E8]/30 pb-1 w-fit hover:border-[#F5F0E8] transition-colors duration-300 group/link"
                >
                  Enquire About This Service
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

export default function ServicesSectionHome() {
  const headerRef = useRef<HTMLDivElement>(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  return (
    <section className="w-full bg-[#F5F0E8]">
      {/* Header */}
      <div
        ref={headerRef}
        className="px-10 md:px-16 xl:px-24 pt-24 pb-16 border-b border-[#2C2C2C]/10 flex flex-col md:flex-row md:items-end md:justify-between gap-8"
      >
        <div>
          <motion.div
            className="flex items-center gap-3 mb-6"
            initial={{ opacity: 0, x: -16 }}
            animate={isHeaderInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, ease }}
          >
            <span className="h-px w-8 bg-[#1f4f3f]/40" />
            <span className="text-[#1f4f3f]/60 text-[10px] tracking-[0.4em] uppercase font-medium">
              What We Do
            </span>
          </motion.div>

          <div className="overflow-hidden">
            <motion.h2
              className="text-[clamp(2.8rem,6vw,5rem)] font-bold text-[#2C2C2C] leading-none tracking-tight"
              initial={{ y: "110%" }}
              animate={isHeaderInView ? { y: "0%" } : {}}
              transition={{ duration: 0.85, delay: 0.15, ease }}
            >
              Our Services
            </motion.h2>
          </div>
        </div>

        <motion.p
          className="text-[#2C2C2C]/50 text-sm md:text-base leading-relaxed max-w-sm font-light"
          initial={{ opacity: 0, y: 16 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.35, ease }}
        >
          From architecture to interiors, every discipline we practice is
          unified by one standard — excellence without compromise.
        </motion.p>
      </div>

      {/* Services Accordion */}
      <div>
        {services.map((service, i) => (
          <ServiceRow key={service.number} service={service} index={i} />
        ))}
      </div>

      {/* Bottom CTA */}
      <motion.div
        className="px-10 md:px-16 xl:px-24 py-14 border-t border-[#2C2C2C]/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <p className="text-[#2C2C2C]/40 text-sm tracking-wide font-light">
          And 3 more specialist services available.
        </p>
        <Link
          href="/services"
          className="group flex items-center gap-4 border border-[#1f4f3f] px-8 py-4 hover:bg-[#1f4f3f] transition-colors duration-300"
        >
          <span className="text-[#1f4f3f] group-hover:text-[#F5F0E8] text-xs tracking-[0.25em] uppercase font-bold transition-colors duration-300">
            View All Services
          </span>
          <ArrowUpRight className="w-4 h-4 text-[#1f4f3f] group-hover:text-[#F5F0E8] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
        </Link>
      </motion.div>
    </section>
  );
}
