"use client";

import { useState, useRef, useCallback } from "react";
import { motion, useInView, AnimatePresence, cubicBezier } from "framer-motion";
import Image from "next/image";
import {
  X,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Calendar,
} from "lucide-react";

const ease = cubicBezier(0.76, 0, 0.24, 1);

// ─────────────────────────────────────────────
// TYPES & DATA
// ─────────────────────────────────────────────

type Category =
  | "All"
  | "Residential"
  | "Commercial"
  | "Turnkey"
  | "Bespoke Furniture"
  | "Renovation"
  | "Facade & Exterior"
  | "Architecture & Planning";

type Project = {
  id: string;
  title: string;
  category: Category;
  location: string;
  year: string;
  description: string;
  images: string[];
  span: "tall" | "wide" | "normal";
};

const categories: Category[] = [
  "All",
  "Residential",
  "Commercial",
  "Turnkey",
  "Bespoke Furniture",
  "Renovation",
  "Facade & Exterior",
  "Architecture & Planning",
];

const projects: Project[] = [
  {
    id: "01",
    title: "The Meridian Residence",
    category: "Residential",
    location: "Ahmedabad, Gujarat",
    year: "2024",
    description:
      "A luxury residence designed around natural light and open living. The interior flows seamlessly from public to private spaces, anchored by a double-height living room and bespoke joinery throughout.",
    images: [
      "/portfolio/project-01-1.jpg",
      "/portfolio/project-01-2.jpg",
      "/portfolio/project-01-3.jpg",
    ],
    span: "tall",
  },
  {
    id: "02",
    title: "Arbor Commercial Hub",
    category: "Commercial",
    location: "Surat, Gujarat",
    year: "2024",
    description:
      "A contemporary commercial complex that redefines the workplace. Biophilic design principles, collaborative zones, and a facade that changes character with the light.",
    images: ["/portfolio/project-02-1.jpg", "/portfolio/project-02-2.jpg"],
    span: "normal",
  },
  {
    id: "03",
    title: "Casa Verde Villa",
    category: "Turnkey",
    location: "Vadodara, Gujarat",
    year: "2023",
    description:
      "Complete turnkey delivery of a 4-bedroom villa. From structural shell to final furnishing, every element was designed and executed in-house.",
    images: [
      "/portfolio/project-03-1.jpg",
      "/portfolio/project-03-2.jpg",
      "/portfolio/project-03-3.jpg",
    ],
    span: "wide",
  },
  {
    id: "04",
    title: "Studio Noir Office",
    category: "Commercial",
    location: "Ahmedabad, Gujarat",
    year: "2023",
    description:
      "A bold, dark-palette office interior for a creative agency. Custom millwork, acoustic panels, and dramatic pendant lighting create an atmosphere that fuels creativity.",
    images: ["/portfolio/project-04-1.jpg", "/portfolio/project-04-2.jpg"],
    span: "tall",
  },
  {
    id: "05",
    title: "Elm Street Facade",
    category: "Facade & Exterior",
    location: "Rajkot, Gujarat",
    year: "2023",
    description:
      "A complete facade redesign that transformed a dated commercial building into a landmark. Perforated metal screens, warm timber accents, and precision lighting.",
    images: ["/portfolio/project-05-1.jpg", "/portfolio/project-05-2.jpg"],
    span: "normal",
  },
  {
    id: "06",
    title: "The Oak Collection",
    category: "Bespoke Furniture",
    location: "Ahmedabad, Gujarat",
    year: "2023",
    description:
      "A complete suite of bespoke furniture for a penthouse apartment. Solid oak dining table, custom shelving, and an upholstered headboard — all designed to proportion.",
    images: [
      "/portfolio/project-06-1.jpg",
      "/portfolio/project-06-2.jpg",
      "/portfolio/project-06-3.jpg",
    ],
    span: "normal",
  },
  {
    id: "07",
    title: "Skyline Penthouse",
    category: "Residential",
    location: "Ahmedabad, Gujarat",
    year: "2023",
    description:
      "A penthouse renovation that opens the entire top floor to panoramic city views. Retractable glass walls, a rooftop terrace, and an interior palette of stone, brass, and linen.",
    images: ["/portfolio/project-07-1.jpg", "/portfolio/project-07-2.jpg"],
    span: "wide",
  },
  {
    id: "08",
    title: "Heritage Haveli Restoration",
    category: "Renovation",
    location: "Vadodara, Gujarat",
    year: "2022",
    description:
      "A sensitive restoration of a 100-year-old haveli. Original stonework was preserved and restored, while modern amenities were seamlessly integrated.",
    images: ["/portfolio/project-08-1.jpg", "/portfolio/project-08-2.jpg"],
    span: "tall",
  },
  {
    id: "09",
    title: "Riviera Resort Master Plan",
    category: "Architecture & Planning",
    location: "Kutch, Gujarat",
    year: "2022",
    description:
      "Master planning and architectural design for a boutique resort. Site-responsive design, local material palette, and passive cooling strategies throughout.",
    images: [
      "/portfolio/project-09-1.jpg",
      "/portfolio/project-09-2.jpg",
      "/portfolio/project-09-3.jpg",
    ],
    span: "normal",
  },
  {
    id: "10",
    title: "Aura Clinic",
    category: "Commercial",
    location: "Rajkot, Gujarat",
    year: "2022",
    description:
      "A calming, precision-designed medical clinic. Clean geometry, soft lighting, and a material palette that balances clinical function with warmth.",
    images: ["/portfolio/project-10-1.jpg", "/portfolio/project-10-2.jpg"],
    span: "normal",
  },
  {
    id: "11",
    title: "The Loft Apartment",
    category: "Renovation",
    location: "Surat, Gujarat",
    year: "2022",
    description:
      "Transformation of a bare concrete shell into a refined urban loft. Exposed services, polished floors, and a kitchen island that anchors the open plan.",
    images: ["/portfolio/project-11-1.jpg", "/portfolio/project-11-2.jpg"],
    span: "normal",
  },
  {
    id: "12",
    title: "Modular Living Series",
    category: "Bespoke Furniture",
    location: "Multiple Locations",
    year: "2022",
    description:
      "A collection of modular furniture systems designed for compact urban living. Adaptable, beautiful, and built to last.",
    images: ["/portfolio/project-12-1.jpg", "/portfolio/project-12-2.jpg"],
    span: "tall",
  },
];

// ─────────────────────────────────────────────
// LIGHTBOX
// ─────────────────────────────────────────────

function Lightbox({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const [imgIndex, setImgIndex] = useState(0);

  const prev = useCallback(
    () =>
      setImgIndex(
        (i) => (i - 1 + project.images.length) % project.images.length,
      ),
    [project.images.length],
  );
  const next = useCallback(
    () => setImgIndex((i) => (i + 1) % project.images.length),
    [project.images.length],
  );

  return (
    <motion.div
      className="fixed inset-0 z-100 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 md:p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
      onClick={onClose}
    >
      <motion.div
        className="relative w-full max-w-6xl bg-[#1f4f3f] overflow-hidden grid grid-cols-1 lg:grid-cols-2 max-h-[90vh]"
        initial={{ scale: 0.94, opacity: 0, y: 24 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.96, opacity: 0, y: 16 }}
        transition={{ duration: 0.45, ease }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image side */}
        <div className="relative h-[50vw] max-h-[60vh] lg:h-auto lg:max-h-none overflow-hidden bg-[#163d30]">
          <AnimatePresence mode="wait">
            <motion.div
              key={imgIndex}
              className="absolute inset-0"
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease }}
            >
              <Image
                src={project.images[imgIndex]}
                alt={project.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>
          </AnimatePresence>

          {/* Image nav */}
          {project.images.length > 1 && (
            <>
              <button
                onClick={prev}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/30 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-black/50 transition-colors duration-200"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={next}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/30 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-black/50 transition-colors duration-200"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
                {project.images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setImgIndex(i)}
                    className={`h-1 rounded-full transition-all duration-300 ${i === imgIndex ? "w-6 bg-white" : "w-2 bg-white/40"}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* Info side */}
        <div className="flex flex-col justify-between p-8 md:p-10 overflow-y-auto">
          <div className="flex flex-col gap-6">
            {/* Header */}
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="text-[#F5F0E8]/30 text-xs font-mono">
                  {project.id}
                </span>
                <h2 className="text-[#F5F0E8] text-2xl md:text-3xl font-bold tracking-tight mt-1 leading-tight">
                  {project.title}
                </h2>
              </div>
              <button
                onClick={onClose}
                className="w-9 h-9 border border-[#F5F0E8]/20 flex items-center justify-center text-[#F5F0E8]/50 hover:text-[#F5F0E8] hover:border-[#F5F0E8]/50 transition-colors duration-200 shrink-0"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Meta */}
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-[#F5F0E8]/40 text-xs">
                <span className="text-[#F5F0E8]/20 text-[10px] tracking-[0.3em] uppercase border border-[#F5F0E8]/15 px-3 py-1.5">
                  {project.category}
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-[#F5F0E8]/40 text-xs">
                <MapPin className="w-3 h-3" />
                <span>{project.location}</span>
              </div>
              <div className="flex items-center gap-1.5 text-[#F5F0E8]/40 text-xs">
                <Calendar className="w-3 h-3" />
                <span>{project.year}</span>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px w-full bg-[#F5F0E8]/10" />

            {/* Description */}
            <p className="text-[#F5F0E8]/65 text-sm md:text-base leading-relaxed font-light">
              {project.description}
            </p>
          </div>

          {/* CTA */}
          <div className="mt-8">
            <a
              href="/contact"
              className="group w-full flex items-center justify-between border border-[#F5F0E8]/20 px-6 py-4 hover:bg-[#F5F0E8]/5 transition-colors duration-300"
            >
              <span className="text-[#F5F0E8]/70 text-xs tracking-[0.25em] uppercase font-semibold group-hover:text-[#F5F0E8] transition-colors duration-300">
                Start a Similar Project
              </span>
              <ArrowUpRight className="w-4 h-4 text-[#F5F0E8]/50 group-hover:text-[#F5F0E8] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ─────────────────────────────────────────────
// PROJECT CARD
// ─────────────────────────────────────────────

function ProjectCard({
  project,
  index,
  onClick,
}: {
  project: Project;
  index: number;
  onClick: () => void;
}) {
  const [hovered, setHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  const heightClass =
    project.span === "tall"
      ? "h-[480px] md:h-[560px]"
      : project.span === "wide"
        ? "h-[300px] md:h-[340px]"
        : "h-[360px] md:h-[420px]";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: (index % 3) * 0.1, ease }}
      className={`relative overflow-hidden cursor-pointer group ${heightClass}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
    >
      {/* Image */}
      <motion.div
        className="absolute inset-0 bg-[#163d30]"
        animate={{ scale: hovered ? 1.05 : 1 }}
        transition={{ duration: 0.7, ease }}
      >
        <Image
          src={project.images[0]}
          alt={project.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </motion.div>

      {/* Base gradient */}
      <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent" />

      {/* Hover overlay */}
      <motion.div
        className="absolute inset-0 bg-[#1f4f3f]/50"
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.4 }}
      />

      {/* Category tag */}
      <div className="absolute top-4 left-4">
        <motion.span
          className="text-[#F5F0E8]/70 text-[9px] tracking-[0.3em] uppercase border border-[#F5F0E8]/20 px-2.5 py-1 bg-black/20 backdrop-blur-sm"
          animate={{ opacity: hovered ? 1 : 0.7 }}
        >
          {project.category}
        </motion.span>
      </div>

      {/* Year */}
      <div className="absolute top-4 right-4">
        <span className="text-[#F5F0E8]/30 text-[10px] font-mono">
          {project.year}
        </span>
      </div>

      {/* Content bottom */}
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <motion.p
          className="text-[#F5F0E8]/50 text-[10px] tracking-[0.25em] uppercase mb-2"
          animate={{ y: hovered ? -4 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {project.location}
        </motion.p>
        <motion.h3
          className="text-[#F5F0E8] text-lg md:text-xl font-bold tracking-tight leading-tight"
          animate={{ y: hovered ? -4 : 0 }}
          transition={{ duration: 0.3, delay: 0.03 }}
        >
          {project.title}
        </motion.h3>

        {/* View link */}
        <motion.div
          className="flex items-center gap-2 mt-3"
          animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 8 }}
          transition={{ duration: 0.3 }}
        >
          <span className="text-[#F5F0E8] text-[10px] tracking-[0.3em] uppercase font-semibold">
            View Project
          </span>
          <ArrowUpRight className="w-3.5 h-3.5 text-[#F5F0E8]" />
        </motion.div>
      </div>

      {/* Image count */}
      {project.images.length > 1 && (
        <div className="absolute bottom-4 right-4">
          <motion.span
            className="text-[#F5F0E8]/30 text-[10px] font-mono"
            animate={{ opacity: hovered ? 0.6 : 0.3 }}
          >
            +{project.images.length - 1}
          </motion.span>
        </div>
      )}
    </motion.div>
  );
}

// ─────────────────────────────────────────────
// MAIN PAGE
// ─────────────────────────────────────────────

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <main className="w-full bg-[#1f4f3f] min-h-screen">
      {/* ── HERO HEADER ── */}
      <div
        ref={headerRef}
        className="px-10 md:px-16 xl:px-24 pt-36 pb-16 border-b border-[#F5F0E8]/10"
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
                Our Work
              </span>
            </motion.div>

            {["Portfolio"].map((word, i) => (
              <div key={i} className="overflow-hidden">
                <motion.h1
                  className="text-[clamp(3.5rem,8vw,7rem)] font-bold text-[#F5F0E8] leading-none tracking-tight"
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
            {projects.length}+ projects completed across Gujarat. Each one a
            story of precision, craft, and collaboration.
          </motion.p>
        </div>
      </div>

      {/* ── FILTER TABS ── */}
      <div className="px-10 md:px-16 xl:px-24 py-8 border-b border-[#F5F0E8]/10">
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 text-[10px] tracking-[0.25em] uppercase font-semibold transition-all duration-300 whitespace-nowrap ${
                activeCategory === cat
                  ? "bg-[#F5F0E8] text-[#1f4f3f]"
                  : "border border-[#F5F0E8]/15 text-[#F5F0E8]/40 hover:text-[#F5F0E8] hover:border-[#F5F0E8]/40"
              }`}
              whileTap={{ scale: 0.97 }}
            >
              {cat}
              {cat !== "All" && (
                <span className="ml-2 opacity-50">
                  {projects.filter((p) => p.category === cat).length}
                </span>
              )}
            </motion.button>
          ))}
        </div>
      </div>

      {/* ── MASONRY GRID ── */}
      <div className="px-10 md:px-16 xl:px-24 py-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="columns-1 md:columns-2 xl:columns-3 gap-4 space-y-4"
          >
            {filtered.map((project, i) => (
              <div key={project.id} className="break-inside-avoid">
                <ProjectCard
                  project={project}
                  index={i}
                  onClick={() => setSelectedProject(project)}
                />
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Empty state */}
        {filtered.length === 0 && (
          <motion.div
            className="flex flex-col items-center justify-center py-32 gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <span className="text-[#F5F0E8]/10 text-8xl font-black">∅</span>
            <p className="text-[#F5F0E8]/30 text-sm tracking-widest uppercase">
              No projects in this category yet
            </p>
          </motion.div>
        )}
      </div>

      {/* ── LIGHTBOX ── */}
      <AnimatePresence>
        {selectedProject && (
          <Lightbox
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </main>
  );
}
