"use client";

import { useState, useRef } from "react";
import { motion, useInView, cubicBezier } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Phone, Mail } from "lucide-react";

const ease = cubicBezier(0.76, 0, 0.24, 1);

// ─────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────

type FurnitureCategory = {
  id: string;
  name: string;
  description: string;
  count: string;
  icon: string;
};

type GalleryItem = {
  id: string;
  title: string;
  category: string;
  material: string;
  image: string;
  span: "tall" | "normal" | "wide";
};

const categories: FurnitureCategory[] = [
  {
    id: "01",
    name: "Beds & Headboards",
    description:
      "Custom bed frames and upholstered headboards designed to anchor the bedroom with presence and proportion.",
    count: "40+",
    icon: "◻",
  },
  {
    id: "02",
    name: "Sofas & Seating",
    description:
      "Bespoke sofas, armchairs, and ottomans — shaped to fit your space, your body, and your aesthetic.",
    count: "60+",
    icon: "◇",
  },
  {
    id: "03",
    name: "Dining Tables",
    description:
      "Statement dining tables in solid timber, stone, and metal — the centrepiece of every home.",
    count: "35+",
    icon: "◈",
  },
  {
    id: "04",
    name: "Storage & Wardrobes",
    description:
      "Walk-in wardrobes, built-in shelving, and custom storage solutions that make organisation beautiful.",
    count: "80+",
    icon: "▣",
  },
  {
    id: "05",
    name: "Kitchen & Joinery",
    description:
      "Custom kitchen cabinetry and joinery — precision-made to maximise every inch of your kitchen.",
    count: "50+",
    icon: "○",
  },
  {
    id: "06",
    name: "Office & Study",
    description:
      "Bespoke desks, bookshelves, and workspace furniture designed for focus, function, and beauty.",
    count: "30+",
    icon: "◎",
  },
];

const gallery: GalleryItem[] = [
  {
    id: "01",
    title: "The Arch Headboard",
    category: "Beds & Headboards",
    material: "Bouclé & Walnut",
    image: "/furniture/gallery-01.jpg",
    span: "tall",
  },
  {
    id: "02",
    title: "Stone Top Dining Table",
    category: "Dining Tables",
    material: "Calacatta Marble & Oak",
    image: "/furniture/gallery-02.jpg",
    span: "normal",
  },
  {
    id: "03",
    title: "Modular Sofa System",
    category: "Sofas & Seating",
    material: "Linen & Brass",
    image: "/furniture/gallery-03.jpg",
    span: "normal",
  },
  {
    id: "04",
    title: "Fluted Walk-in Wardrobe",
    category: "Storage & Wardrobes",
    material: "Lacquered MDF & Cane",
    image: "/furniture/gallery-04.jpg",
    span: "tall",
  },
  {
    id: "05",
    title: "Island Kitchen",
    category: "Kitchen & Joinery",
    material: "Smoked Oak & Terrazzo",
    image: "/furniture/gallery-05.jpg",
    span: "wide",
  },
  {
    id: "06",
    title: "The Library Wall",
    category: "Office & Study",
    material: "Solid Teak",
    image: "/furniture/gallery-06.jpg",
    span: "normal",
  },
  {
    id: "07",
    title: "Curved Armchair",
    category: "Sofas & Seating",
    material: "Velvet & Beech",
    image: "/furniture/gallery-07.jpg",
    span: "normal",
  },
  {
    id: "08",
    title: "Platform Bed",
    category: "Beds & Headboards",
    material: "Black Walnut",
    image: "/furniture/gallery-08.jpg",
    span: "wide",
  },
  {
    id: "09",
    title: "Open Shelving Unit",
    category: "Storage & Wardrobes",
    material: "Powder-coated Steel & Glass",
    image: "/furniture/gallery-09.jpg",
    span: "tall",
  },
];

// ─────────────────────────────────────────────
// CATEGORY CARD
// ─────────────────────────────────────────────

function CategoryCard({
  cat,
  index,
}: {
  cat: FurnitureCategory;
  index: number;
}) {
  const [hovered, setHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08, ease }}
      className="group border border-[#2C2C2C]/10 p-8 flex flex-col gap-6 cursor-default relative overflow-hidden"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Hover fill */}
      <motion.div
        className="absolute inset-0 bg-[#1f4f3f]"
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.4, ease }}
      />

      <div className="relative z-10">
        {/* Top row */}
        <div className="flex items-start justify-between mb-6">
          <motion.span
            className="text-4xl leading-none transition-colors duration-400"
            animate={{
              color: hovered ? "rgba(245,240,232,0.2)" : "rgba(44,44,44,0.12)",
            }}
          >
            {cat.icon}
          </motion.span>
          <motion.span
            className="text-3xl font-black leading-none transition-colors duration-400"
            animate={{
              color: hovered ? "rgba(245,240,232,0.9)" : "rgba(31,79,63,0.8)",
            }}
          >
            {cat.count}
          </motion.span>
        </div>

        {/* Number */}
        <motion.span
          className="text-[10px] font-mono tracking-[0.3em] block mb-3 transition-colors duration-400"
          animate={{
            color: hovered ? "rgba(245,240,232,0.3)" : "rgba(44,44,44,0.2)",
          }}
        >
          {cat.id}
        </motion.span>

        {/* Title */}
        <motion.h3
          className="text-xl font-bold tracking-tight mb-3 transition-colors duration-400"
          animate={{ color: hovered ? "#F5F0E8" : "#2C2C2C" }}
        >
          {cat.name}
        </motion.h3>

        {/* Description */}
        <motion.p
          className="text-sm leading-relaxed font-light transition-colors duration-400"
          animate={{
            color: hovered ? "rgba(245,240,232,0.6)" : "rgba(44,44,44,0.55)",
          }}
        >
          {cat.description}
        </motion.p>
      </div>

      {/* Corner accent */}
      <motion.div
        className="absolute bottom-0 right-0 w-12 h-12 border-t border-l transition-colors duration-400"
        animate={{
          borderColor: hovered
            ? "rgba(245,240,232,0.1)"
            : "rgba(44,44,44,0.08)",
        }}
      />
    </motion.div>
  );
}

// ─────────────────────────────────────────────
// GALLERY CARD
// ─────────────────────────────────────────────

function GalleryCard({ item, index }: { item: GalleryItem; index: number }) {
  const [hovered, setHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  const heightClass =
    item.span === "tall"
      ? "h-[500px] md:h-[580px]"
      : item.span === "wide"
        ? "h-[300px] md:h-[340px]"
        : "h-[360px] md:h-[420px]";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 36 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: (index % 3) * 0.1, ease }}
      className={`relative overflow-hidden break-inside-avoid ${heightClass}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <motion.div
        className="absolute inset-0 bg-[#d4cfc7]"
        animate={{ scale: hovered ? 1.05 : 1 }}
        transition={{ duration: 0.7, ease }}
      >
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </motion.div>

      {/* Gradient */}
      <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />

      {/* Hover overlay */}
      <motion.div
        className="absolute inset-0 bg-[#1f4f3f]/40"
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.4 }}
      />

      {/* Category tag */}
      <div className="absolute top-4 left-4">
        <span className="text-white/60 text-[9px] tracking-[0.3em] uppercase border border-white/15 px-2.5 py-1 bg-black/20 backdrop-blur-sm">
          {item.category}
        </span>
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <motion.p
          className="text-white/40 text-[10px] tracking-[0.25em] uppercase mb-1.5 font-medium"
          animate={{ y: hovered ? -4 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {item.material}
        </motion.p>
        <motion.h3
          className="text-white text-lg font-bold tracking-tight"
          animate={{ y: hovered ? -4 : 0 }}
          transition={{ duration: 0.3, delay: 0.03 }}
        >
          {item.title}
        </motion.h3>
      </div>
    </motion.div>
  );
}

// ─────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────

export default function BespokeFurniturePage() {
  const headerRef = useRef<HTMLDivElement>(null);
  const catRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  const isHeaderInView = useInView(headerRef, { once: true });
  const isCatInView = useInView(catRef, { once: true, margin: "-60px" });
  const isGalleryInView = useInView(galleryRef, {
    once: true,
    margin: "-60px",
  });
  const isCtaInView = useInView(ctaRef, { once: true, margin: "-60px" });

  return (
    <main className="w-full bg-[#F5F0E8]">
      {/* ── HERO ── */}
      <section className="relative w-full h-screen overflow-hidden bg-[#1a1a18]">
        <Image
          src="/furniture/hero.jpg"
          alt="Bespoke Furniture by Ridge Studio"
          fill
          className="object-cover opacity-45"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/20 via-transparent to-black/70" />

        <div className="relative z-10 h-full flex flex-col justify-end px-10 md:px-16 xl:px-24 pb-20">
          <motion.div
            className="flex items-center gap-3 mb-6"
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease }}
          >
            <span className="h-px w-8 bg-[#F5F0E8]/40" />
            <span className="text-[#F5F0E8]/50 text-[10px] tracking-[0.4em] uppercase font-medium">
              Handcrafted with Intention
            </span>
          </motion.div>

          {["Bespoke", "Furniture"].map((line, i) => (
            <div key={i} className="overflow-hidden">
              <motion.h1
                className={`font-bold leading-[0.95] tracking-tight text-[clamp(4rem,9vw,8rem)] ${i === 1 ? "text-transparent" : "text-[#F5F0E8]"}`}
                style={i === 1 ? { WebkitTextStroke: "2px #F5F0E8" } : {}}
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 0.9, delay: 0.4 + i * 0.12, ease }}
              >
                {line}
              </motion.h1>
            </div>
          ))}

          <motion.p
            className="text-[#F5F0E8]/50 text-base md:text-lg mt-8 max-w-lg font-light leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.78, ease }}
          >
            Every piece we create is designed specifically for your space —
            proportioned, detailed, and finished to complement the architecture
            around it.
          </motion.p>
        </div>
      </section>

      {/* ── CATEGORIES ── */}
      <section className="w-full bg-[#F5F0E8]">
        <div ref={catRef} className="px-10 md:px-16 xl:px-24 py-24 md:py-32">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
            <div>
              <motion.div
                className="flex items-center gap-3 mb-6"
                initial={{ opacity: 0, x: -16 }}
                animate={isCatInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, ease }}
              >
                <span className="h-px w-8 bg-[#1f4f3f]/40" />
                <span className="text-[#1f4f3f]/60 text-[10px] tracking-[0.4em] uppercase font-medium">
                  What We Make
                </span>
              </motion.div>

              <div className="overflow-hidden">
                <motion.h2
                  className="text-[clamp(2.4rem,5.5vw,4.5rem)] font-bold text-[#2C2C2C] leading-none tracking-tight"
                  initial={{ y: "110%" }}
                  animate={isCatInView ? { y: "0%" } : {}}
                  transition={{ duration: 0.85, delay: 0.15, ease }}
                >
                  Furniture Categories
                </motion.h2>
              </div>
            </div>

            <motion.p
              className="text-[#2C2C2C]/45 text-sm leading-relaxed max-w-sm font-light"
              initial={{ opacity: 0, y: 16 }}
              animate={isCatInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.35, ease }}
            >
              Six categories. Hundreds of custom pieces. All made to order, all
              made to last.
            </motion.p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {categories.map((cat, i) => (
              <CategoryCard key={cat.id} cat={cat} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── GALLERY ── */}
      <section className="w-full bg-[#1f4f3f]">
        <div
          ref={galleryRef}
          className="px-10 md:px-16 xl:px-24 py-24 md:py-32"
        >
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 border-b border-[#F5F0E8]/10 pb-14 mb-12">
            <div>
              <motion.div
                className="flex items-center gap-3 mb-6"
                initial={{ opacity: 0, x: -16 }}
                animate={isGalleryInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, ease }}
              >
                <span className="h-px w-8 bg-[#F5F0E8]/30" />
                <span className="text-[#F5F0E8]/40 text-[10px] tracking-[0.4em] uppercase font-medium">
                  Our Work
                </span>
              </motion.div>

              <div className="overflow-hidden">
                <motion.h2
                  className="text-[clamp(2.4rem,5.5vw,4.5rem)] font-bold text-[#F5F0E8] leading-none tracking-tight"
                  initial={{ y: "110%" }}
                  animate={isGalleryInView ? { y: "0%" } : {}}
                  transition={{ duration: 0.85, delay: 0.15, ease }}
                >
                  Furniture Gallery
                </motion.h2>
              </div>
            </div>

            <motion.p
              className="text-[#F5F0E8]/35 text-sm leading-relaxed max-w-xs font-light"
              initial={{ opacity: 0, y: 16 }}
              animate={isGalleryInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.35, ease }}
            >
              A selection of custom pieces crafted for clients across Gujarat.
            </motion.p>
          </div>

          {/* Masonry */}
          <div className="columns-1 md:columns-2 xl:columns-3 gap-4 space-y-4">
            {gallery.map((item, i) => (
              <GalleryCard key={item.id} item={item} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="w-full bg-[#F5F0E8] border-t border-[#2C2C2C]/10">
        <div ref={ctaRef} className="px-10 md:px-16 xl:px-24 py-24 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <div>
              <motion.div
                className="flex items-center gap-3 mb-8"
                initial={{ opacity: 0, x: -16 }}
                animate={isCtaInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, ease }}
              >
                <span className="h-px w-8 bg-[#1f4f3f]/40" />
                <span className="text-[#1f4f3f]/60 text-[10px] tracking-[0.4em] uppercase font-medium">
                  Commission a Piece
                </span>
              </motion.div>

              {["Order Your", "Custom", "Furniture."].map((line, i) => (
                <div key={i} className="overflow-hidden">
                  <motion.h2
                    className={`font-bold leading-none tracking-tight text-[clamp(2.4rem,5vw,4.2rem)] ${i === 2 ? "text-transparent" : "text-[#2C2C2C]"}`}
                    style={i === 2 ? { WebkitTextStroke: "2px #1f4f3f" } : {}}
                    initial={{ y: "110%" }}
                    animate={isCtaInView ? { y: "0%" } : {}}
                    transition={{
                      duration: 0.85,
                      delay: 0.15 + i * 0.12,
                      ease,
                    }}
                  >
                    {line}
                  </motion.h2>
                </div>
              ))}

              <motion.p
                className="text-[#2C2C2C]/50 text-base md:text-lg leading-relaxed mt-8 max-w-md font-light"
                initial={{ opacity: 0, y: 20 }}
                animate={isCtaInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.55, ease }}
              >
                Tell us about your space, your style, and your budget. We{"'"}ll
                design something made exactly for you — and only for you.
              </motion.p>
            </div>

            {/* Right */}
            <div className="flex flex-col gap-5">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={isCtaInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5, ease }}
              >
                <Link
                  href="/contact"
                  className="group w-full bg-[#1f4f3f] flex items-center justify-between px-8 py-7 hover:bg-[#163d30] transition-colors duration-300"
                >
                  <div>
                    <p className="text-[#F5F0E8]/50 text-[10px] tracking-[0.3em] uppercase mb-1 font-medium">
                      Free Consultation
                    </p>
                    <p className="text-[#F5F0E8] text-xl font-semibold tracking-tight">
                      Commission a Piece
                    </p>
                  </div>
                  <motion.div
                    className="w-12 h-12 border border-[#F5F0E8]/20 flex items-center justify-center"
                    whileHover={{ scale: 1.1, rotate: 45 }}
                    transition={{ duration: 0.25 }}
                  >
                    <ArrowUpRight className="w-5 h-5 text-[#F5F0E8]" />
                  </motion.div>
                </Link>
              </motion.div>

              <div className="grid grid-cols-2 gap-4">
                <motion.a
                  href="tel:+919876543210"
                  className="group flex flex-col gap-3 border border-[#2C2C2C]/15 px-6 py-5 hover:border-[#1f4f3f] transition-colors duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isCtaInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.62, ease }}
                >
                  <div className="w-8 h-8 border border-[#1f4f3f]/20 flex items-center justify-center group-hover:bg-[#1f4f3f] transition-colors duration-300">
                    <Phone className="w-3.5 h-3.5 text-[#1f4f3f] group-hover:text-[#F5F0E8] transition-colors duration-300" />
                  </div>
                  <div>
                    <p className="text-[#2C2C2C]/35 text-[10px] tracking-[0.25em] uppercase font-medium">
                      Call Us
                    </p>
                    <p className="text-[#2C2C2C] text-sm font-semibold mt-0.5">
                      +91 98765 43210
                    </p>
                  </div>
                </motion.a>

                <motion.a
                  href="mailto:hello@ridgestudio.in"
                  className="group flex flex-col gap-3 border border-[#2C2C2C]/15 px-6 py-5 hover:border-[#1f4f3f] transition-colors duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isCtaInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.72, ease }}
                >
                  <div className="w-8 h-8 border border-[#1f4f3f]/20 flex items-center justify-center group-hover:bg-[#1f4f3f] transition-colors duration-300">
                    <Mail className="w-3.5 h-3.5 text-[#1f4f3f] group-hover:text-[#F5F0E8] transition-colors duration-300" />
                  </div>
                  <div>
                    <p className="text-[#2C2C2C]/35 text-[10px] tracking-[0.25em] uppercase font-medium">
                      Email Us
                    </p>
                    <p className="text-[#2C2C2C] text-sm font-semibold mt-0.5">
                      hello@ridgestudio.in
                    </p>
                  </div>
                </motion.a>
              </div>

              <motion.div
                className="flex items-center gap-4 pt-2"
                initial={{ opacity: 0 }}
                animate={isCtaInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.85 }}
              >
                {[
                  "Made to Order",
                  "Premium Materials",
                  "Delivered & Installed",
                ].map((tag, i) => (
                  <div key={tag} className="flex items-center gap-4">
                    {i > 0 && (
                      <span className="w-1 h-1 rounded-full bg-[#2C2C2C]/20" />
                    )}
                    <span className="text-[#2C2C2C]/35 text-[10px] tracking-[0.2em] uppercase font-medium">
                      {tag}
                    </span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
