"use client";

import { useRef, useState } from "react";
import { motion, useInView, cubicBezier } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ease = cubicBezier(0.76, 0, 0.24, 1);

type Project = {
  id: string;
  title: string;
  category: string;
  year: string;
  image: string;
  location: string;
};

const featured: Project = {
  id: "01",
  title: "The Meridian Residence",
  category: "Residential Interior",
  year: "2024",
  image: "/hero/lobby_view.jpeg",
  location: "Rohini, Delhi",
};

const projects: Project[] = [
  {
    id: "02",
    title: "Arbor Commercial Hub",
    category: "Commercial Exterior",
    year: "2024",
    image: "/commercial.jpeg",
    location: "Rohini, Delhi",
  },
  {
    id: "03",
    title: "Casa Verde Villa",
    category: "Turnkey Residential",
    year: "2023",
    image: "/a.jpeg",
    location: "Rohini, Delhi",
  },
  {
    id: "04",
    title: "Studio Noir Office",
    category: "Commercial Interior",
    year: "2023",
    image: "/outdoor.jpeg",
    location: "Rohini, Delhi",
  },
  {
    id: "05",
    title: "Elm Street Facade",
    category: "Facade Design",
    year: "2023",
    image: "/DH WALL  (1).jpg",
    location: "Rohini, Delhi",
  },
];

function FeaturedCard({ project }: { project: Project }) {
  const [hovered, setHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, ease }}
      className="relative w-full h-[55vh] md:h-[70vh] overflow-hidden cursor-pointer group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <motion.div
        className="absolute inset-0 bg-[#163d30]"
        animate={{ scale: hovered ? 1.04 : 1 }}
        transition={{ duration: 0.8, ease }}
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="100vw"
          className="object-cover opacity-80"
          priority
        />
      </motion.div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent" />

      {/* Featured badge */}
      <div className="absolute top-8 left-8 flex items-center gap-3">
        <span className="w-2 h-2 rounded-full bg-[#F5F0E8] animate-pulse" />
        <span className="text-[#F5F0E8]/70 text-[10px] tracking-[0.4em] uppercase font-medium">
          Featured Project
        </span>
      </div>

      {/* Content bottom */}
      <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 flex items-end justify-between">
        <div>
          <p className="text-[#F5F0E8]/50 text-xs tracking-[0.3em] uppercase mb-3 font-medium">
            {project.category} — {project.location}
          </p>
          <motion.h3
            className="text-[#F5F0E8] text-3xl md:text-5xl font-bold tracking-tight leading-none"
            animate={{ y: hovered ? -4 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {project.title}
          </motion.h3>
        </div>

        {/* <motion.div
          className="w-12 h-12 bg-[#F5F0E8] flex items-center justify-center shrink-0 ml-6"
          animate={{ scale: hovered ? 1.1 : 1, rotate: hovered ? 45 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ArrowUpRight className="w-5 h-5 text-[#1f4f3f]" />
        </motion.div> */}
      </div>

      {/* Year tag */}
      <div className="absolute top-8 right-8">
        <span className="text-[#F5F0E8]/30 text-xs font-mono">
          {project.year}
        </span>
      </div>
    </motion.div>
  );
}

function SmallCard({ project, index }: { project: Project; index: number }) {
  const [hovered, setHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1, ease }}
      className="relative overflow-hidden cursor-pointer h-70 md:h-85 group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <motion.div
        className="absolute inset-0 bg-[#163d30]"
        animate={{ scale: hovered ? 1.06 : 1 }}
        transition={{ duration: 0.7, ease }}
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          className="object-cover opacity-75"
        />
        {/* Fallback number */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-[#F5F0E8]/05 text-[8vw] font-black select-none">
            {project.id}
          </span>
        </div>
      </motion.div>

      {/* Overlay on hover */}
      <motion.div
        className="absolute inset-0 bg-[#1f4f3f]/60"
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.4 }}
      />

      {/* Gradient always */}
      <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between">
        <div>
          <motion.p
            className="text-[#F5F0E8]/50 text-[10px] tracking-[0.25em] uppercase mb-1.5 font-medium"
            animate={{ opacity: hovered ? 0.8 : 0.5 }}
          >
            {project.category}
          </motion.p>
          <motion.h4
            className="text-[#F5F0E8] text-lg md:text-xl font-semibold tracking-tight leading-tight"
            animate={{ y: hovered ? -3 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {project.title}
          </motion.h4>
        </div>

        {/* <motion.div
          className="w-8 h-8 border border-[#F5F0E8]/30 flex items-center justify-center shrink-0 ml-4"
          animate={{
            backgroundColor: hovered ? "#F5F0E8" : "transparent",
            borderColor: hovered ? "#F5F0E8" : "rgba(245,240,232,0.3)",
          }}
          transition={{ duration: 0.3 }}
        >
          {/* <ArrowUpRight
            className="w-3.5 h-3.5 transition-colors duration-300"
            style={{ color: hovered ? "#1f4f3f" : "#F5F0E8" }}
          />
        </motion.div> */}
      </div>

      {/* Year */}
      <div className="absolute top-5 right-5">
        <span className="text-[#F5F0E8]/25 text-[10px] font-mono">
          {project.year}
        </span>
      </div>
    </motion.div>
  );
}

export default function FeaturedPortfolio() {
  const headerRef = useRef<HTMLDivElement>(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  return (
    <section className="w-full bg-[#1f4f3f]">
      {/* Header */}
      <div
        ref={headerRef}
        className="px-10 md:px-16 xl:px-24 pt-24 pb-14 border-b border-[#F5F0E8]/10 flex flex-col md:flex-row md:items-end md:justify-between gap-8"
      >
        <div>
          <motion.div
            className="flex items-center gap-3 mb-6"
            initial={{ opacity: 0, x: -16 }}
            animate={isHeaderInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, ease }}
          >
            <span className="h-px w-8 bg-[#F5F0E8]/30" />
            <span className="text-[#F5F0E8]/40 text-[10px] tracking-[0.4em] uppercase font-medium">
              Our Work
            </span>
          </motion.div>

          <div className="overflow-hidden">
            <motion.h2
              className="text-[clamp(2.8rem,6vw,5rem)] font-bold text-[#F5F0E8] leading-none tracking-tight"
              initial={{ y: "110%" }}
              animate={isHeaderInView ? { y: "0%" } : {}}
              transition={{ duration: 0.85, delay: 0.15, ease }}
            >
              Featured Projects
            </motion.h2>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.35, ease }}
        >
          <Link
            href="/portfolio"
            className="group inline-flex items-center gap-3 text-[#F5F0E8]/50 hover:text-[#F5F0E8] text-xs tracking-[0.3em] uppercase font-medium transition-colors duration-300"
          >
            View All Projects
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
          </Link>
        </motion.div>
      </div>

      {/* Featured hero image */}
      <div className="px-10 md:px-16 xl:px-24 pt-12">
        <FeaturedCard project={featured} />
      </div>

      {/* Smaller grid below */}
      <div className="px-10 md:px-16 xl:px-24 pt-4 pb-4 grid grid-cols-2 lg:grid-cols-4 gap-4">
        {projects.map((project, i) => (
          <SmallCard key={project.id} project={project} index={i} />
        ))}
      </div>

      {/* Bottom CTA */}
      <motion.div
        className="px-10 md:px-16 xl:px-24 py-14 border-t border-[#F5F0E8]/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <p className="text-[#F5F0E8]/35 text-sm font-light tracking-wide">
          Explore our complete portfolio — 340+ projects across Gujarat and
          beyond.
        </p>
        <Link
          href="/portfolio"
          className="group flex items-center gap-4 bg-[#F5F0E8] px-8 py-4 hover:bg-white transition-colors duration-300"
        >
          <span className="text-[#1f4f3f] text-xs tracking-[0.25em] uppercase font-bold">
            View Full Portfolio
          </span>
          <ArrowUpRight className="w-4 h-4 text-[#1f4f3f] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
        </Link>
      </motion.div>
    </section>
  );
}
