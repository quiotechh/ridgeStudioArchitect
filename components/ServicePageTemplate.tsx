"use client";

import { useRef } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
  cubicBezier,
} from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Phone, Mail } from "lucide-react";
import Image from "next/image";

const ease = cubicBezier(0.76, 0, 0.24, 1);

// ─────────────────────────────────────────────
// TYPES
// ─────────────────────────────────────────────

export type ServiceOffering = {
  number: string;
  title: string;
  description: string;
  icon: string;
};

export type ProcessStep = {
  step: string;
  title: string;
  description: string;
};

export type ServicePageData = {
  // Hero
  heroLabel: string;
  heroHeading: string[];
  heroSubtitle: string;
  heroImage: string;

  // Overview
  overviewLabel: string;
  overviewHeading: string;
  overviewParagraphs: string[];
  overviewStats: { value: string; label: string }[];
  overviewImage: string;

  // Offerings
  offeringsLabel: string;
  offeringsHeading: string;
  offeringsSubtitle: string;
  offerings: ServiceOffering[];

  // Process
  process: ProcessStep[];

  // Gallery
  galleryImages: {
    src: string;
    alt: string;
    span: "tall" | "normal" | "wide";
  }[];

  // CTA
  ctaLabel: string;
  ctaHeading: string[];
  ctaSubtitle: string;
};

// ─────────────────────────────────────────────
// OFFERING CARD
// ─────────────────────────────────────────────

function OfferingCard({
  offering,
  index,
}: {
  offering: ServiceOffering;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08, ease }}
      className="group border border-[#F5F0E8]/10 p-6 sm:p-8 flex flex-col gap-6 relative overflow-hidden hover:bg-[#F5F0E8]/5 transition-colors duration-400"
    >
      {/* Top row */}
      <div className="flex items-start justify-between">
        <span className="text-[#F5F0E8]/15 text-xs font-mono tracking-widest">
          {offering.number}
        </span>
        <span className="text-[#F5F0E8]/20 text-3xl leading-none">
          {offering.icon}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-[#F5F0E8] text-xl font-bold tracking-tight leading-snug">
        {offering.title}
      </h3>

      {/* Description */}
      <p className="text-[#F5F0E8]/45 text-sm leading-relaxed font-light">
        {offering.description}
      </p>

      {/* Corner accent */}
      <div className="absolute bottom-0 right-0 w-12 h-12 border-t border-l border-[#F5F0E8]/8" />
    </motion.div>
  );
}

// ─────────────────────────────────────────────
// GALLERY CARD
// ─────────────────────────────────────────────

function GalleryPlaceholder({
  item,
  index,
}: {
  item: { src: string; alt: string; span: "tall" | "normal" | "wide" };
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  const heightClass =
    item.span === "tall"
      ? "h-[480px] md:h-[560px]"
      : item.span === "wide"
        ? "h-[280px] md:h-[320px]"
        : "h-[340px] md:h-[400px]";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 36 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: (index % 3) * 0.1, ease }}
      className={`relative overflow-hidden break-inside-avoid ${heightClass}`}
    >
      <Image
        src={item.src}
        alt={item.alt}
        fill
        className="object-cover"
      />
    </motion.div>
  );
}

// ─────────────────────────────────────────────
// MAIN TEMPLATE
// ─────────────────────────────────────────────

export default function ServicePageTemplate({
  data,
}: {
  data: ServicePageData;
}) {
  const overviewRef = useRef<HTMLDivElement>(null);
  const offeringsRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLElement>(null);

  const isOverviewInView = useInView(overviewRef, {
    once: true,
    margin: "-60px",
  });
  const isOfferingsInView = useInView(offeringsRef, {
    once: true,
    margin: "-60px",
  });
  const isProcessInView = useInView(processRef, {
    once: true,
    margin: "-60px",
  });
  const isGalleryInView = useInView(galleryRef, {
    once: true,
    margin: "-60px",
  });
  const isCtaInView = useInView(ctaRef, { once: true, margin: "-80px" });

  // CTA mouse parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 60, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 60, damping: 20 });
  const bgX = useTransform(springX, [-1, 1], ["-2%", "2%"]);
  const bgY = useTransform(springY, [-1, 1], ["-2%", "2%"]);

  return (
    <main className="w-full">
      {/* ── 1. HERO ── */}
      <section className="relative h-screen w-full overflow-hidden bg-[#0d2b22]">
        {/* Image placeholder — replace src later */}
        <div className="absolute inset-0 bg-[#0d2b22]">
          <Image
            src={data.heroImage}
            alt={data.heroLabel}
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-linear-to-b from-black/30 via-transparent to-black/60" />

        <div className="relative z-10 h-full flex flex-col justify-end px-5 sm:px-8 md:px-16 xl:px-24 pb-16 sm:pb-20">
          <motion.div
            className="flex items-center gap-3 mb-6"
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease }}
          >
            <span className="h-px w-8 bg-[#F5F0E8]/40" />
            <span className="text-[#F5F0E8]/50 text-[10px] tracking-[0.4em] uppercase font-medium">
              {data.heroLabel}
            </span>
          </motion.div>

          {data.heroHeading.map((line, i) => (
            <div key={i} className="overflow-hidden">
              <motion.h1
                className={`font-bold leading-[0.95] tracking-tight text-[clamp(2.2rem,8vw,7rem)] ${
                  i === data.heroHeading.length - 1
                    ? "text-transparent"
                    : "text-[#F5F0E8]"
                }`}
                style={
                  i === data.heroHeading.length - 1
                    ? { WebkitTextStroke: "2px #F5F0E8" }
                    : {}
                }
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
            transition={{ duration: 0.7, delay: 0.85, ease }}
          >
            {data.heroSubtitle}
          </motion.p>
        </div>

        {/* Scroll hint */}
        <motion.div
          className="absolute bottom-8 right-5 sm:right-8 md:right-16 xl:right-24 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <motion.div
            className="w-px h-12 bg-[#F5F0E8]/20"
            animate={{ scaleY: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            style={{ transformOrigin: "top" }}
          />
          <span className="text-[#F5F0E8]/25 text-[9px] tracking-[0.4em] uppercase rotate-90 mt-2">
            Scroll
          </span>
        </motion.div>
      </section>

      {/* ── 2. OVERVIEW ── */}
      <section className="w-full bg-[#F5F0E8]">
        <div
          ref={overviewRef}
          className="max-w-7xl mx-auto px-5 sm:px-8 md:px-16 xl:px-24 py-16 sm:py-24 md:py-32"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <div>
              <motion.div
                className="flex items-center gap-3 mb-8"
                initial={{ opacity: 0, x: -16 }}
                animate={isOverviewInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, ease }}
              >
                <span className="h-px w-8 bg-[#1f4f3f]/40" />
                <span className="text-[#1f4f3f]/60 text-[10px] tracking-[0.4em] uppercase font-medium">
                  {data.overviewLabel}
                </span>
              </motion.div>

              <div className="overflow-hidden">
                <motion.h2
                  className="text-[clamp(1.9rem,5.5vw,4.5rem)] font-bold leading-none tracking-tight text-[#2C2C2C] mb-8"
                  initial={{ y: "110%" }}
                  animate={isOverviewInView ? { y: "0%" } : {}}
                  transition={{ duration: 0.85, delay: 0.1, ease }}
                >
                  {data.overviewHeading}
                </motion.h2>
              </div>

              <motion.div
                className="w-12 h-px bg-[#1f4f3f] mb-8"
                initial={{ width: 0 }}
                animate={isOverviewInView ? { width: 48 } : {}}
                transition={{ duration: 0.7, delay: 0.3, ease }}
              />

              {data.overviewParagraphs.map((para, i) => (
                <motion.p
                  key={i}
                  className="text-[#2C2C2C]/65 text-base md:text-lg leading-relaxed mb-5 font-light"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isOverviewInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.4 + i * 0.12, ease }}
                >
                  {para}
                </motion.p>
              ))}

              {/* Stats */}
              <motion.div
                className="flex flex-wrap gap-6 sm:gap-10 md:gap-12 mt-10"
                initial={{ opacity: 0, y: 24 }}
                animate={isOverviewInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.7, ease }}
              >
                {data.overviewStats.map((s) => (
                  <div key={s.label} className="flex flex-col">
                    <span className="text-4xl font-black text-[#1f4f3f] leading-none">
                      {s.value}
                    </span>
                    <span className="text-[#2C2C2C]/40 text-[10px] tracking-[0.3em] uppercase mt-2 font-medium">
                      {s.label}
                    </span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right — Image Placeholder */}
            <motion.div
              className="relative h-90 sm:h-110 md:h-130 overflow-hidden"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={isOverviewInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.9, delay: 0.25, ease }}
            >
              <Image
                src={data.overviewImage}
                alt={data.overviewHeading}
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 3. WHAT WE OFFER ── */}
      <section className="w-full bg-[#1f4f3f]">
        <div
          ref={offeringsRef}
          className="px-5 sm:px-8 md:px-16 xl:px-24 py-16 sm:py-24 md:py-32"
        >
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 border-b border-[#F5F0E8]/10 pb-14 mb-16">
            <div>
              <motion.div
                className="flex items-center gap-3 mb-6"
                initial={{ opacity: 0, x: -16 }}
                animate={isOfferingsInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, ease }}
              >
                <span className="h-px w-8 bg-[#F5F0E8]/30" />
                <span className="text-[#F5F0E8]/40 text-[10px] tracking-[0.4em] uppercase font-medium">
                  {data.offeringsLabel}
                </span>
              </motion.div>

              <div className="overflow-hidden">
                <motion.h2
                  className="text-[clamp(1.9rem,5.5vw,4.5rem)] font-bold text-[#F5F0E8] leading-none tracking-tight"
                  initial={{ y: "110%" }}
                  animate={isOfferingsInView ? { y: "0%" } : {}}
                  transition={{ duration: 0.85, delay: 0.15, ease }}
                >
                  {data.offeringsHeading}
                </motion.h2>
              </div>
            </div>

            <motion.p
              className="text-[#F5F0E8]/40 text-sm leading-relaxed max-w-sm font-light"
              initial={{ opacity: 0, y: 16 }}
              animate={isOfferingsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.35, ease }}
            >
              {data.offeringsSubtitle}
            </motion.p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {data.offerings.map((offering, i) => (
              <OfferingCard
                key={offering.number}
                offering={offering}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. OUR PROCESS ── */}
      <section className="w-full bg-[#F5F0E8]">
        <div
          ref={processRef}
          className="px-5 sm:px-8 md:px-16 xl:px-24 py-16 sm:py-24 md:py-32"
        >
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-20">
            <div>
              <motion.div
                className="flex items-center gap-3 mb-6"
                initial={{ opacity: 0, x: -16 }}
                animate={isProcessInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, ease }}
              >
                <span className="h-px w-8 bg-[#1f4f3f]/40" />
                <span className="text-[#1f4f3f]/60 text-[10px] tracking-[0.4em] uppercase font-medium">
                  How We Work
                </span>
              </motion.div>
              <div className="overflow-hidden">
                <motion.h2
                  className="text-[clamp(1.9rem,5.5vw,4.5rem)] font-bold text-[#2C2C2C] leading-none tracking-tight"
                  initial={{ y: "110%" }}
                  animate={isProcessInView ? { y: "0%" } : {}}
                  transition={{ duration: 0.85, delay: 0.15, ease }}
                >
                  Our Process
                </motion.h2>
              </div>
            </div>
            <motion.p
              className="text-[#2C2C2C]/45 text-sm leading-relaxed max-w-sm font-light"
              initial={{ opacity: 0, y: 16 }}
              animate={isProcessInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.35, ease }}
            >
              Clear stages. Zero surprises. Complete transparency from first
              meeting to final handover.
            </motion.p>
          </div>

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-0 divide-y xl:divide-y-0 xl:divide-x divide-[#2C2C2C]/10">
            {data.process.map((step, i) => (
              <motion.div
                key={step.step}
                className="flex flex-col gap-6 px-0 md:px-8 py-8 xl:py-0 first:pl-0 last:pr-0 group"
                initial={{ opacity: 0, y: 32 }}
                animate={isProcessInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.2 + i * 0.12, ease }}
              >
                <div className="flex items-center justify-between">
                  <span className="text-[#2C2C2C]/15 text-xs font-mono">
                    {step.step}
                  </span>
                  <motion.div
                    className="w-8 h-8 border border-[#1f4f3f]/20 flex items-center justify-center"
                    whileHover={{
                      backgroundColor: "#1f4f3f",
                      borderColor: "#1f4f3f",
                    }}
                    transition={{ duration: 0.25 }}
                  >
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#1f4f3f] group-hover:text-[#F5F0E8] transition-colors duration-250" />
                  </motion.div>
                </div>

                <div>
                  <h3 className="text-[#2C2C2C] text-2xl font-bold tracking-tight mb-3">
                    {step.title}
                  </h3>
                  <p className="text-[#2C2C2C]/55 text-sm leading-relaxed font-light">
                    {step.description}
                  </p>
                </div>

                {/* Progress indicator */}
                <div className="flex gap-1.5 mt-auto">
                  {data.process.map((_, j) => (
                    <span
                      key={j}
                      className={`h-0.5 flex-1 rounded-full transition-colors duration-300 ${
                        j <= i ? "bg-[#1f4f3f]" : "bg-[#2C2C2C]/10"
                      }`}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. GALLERY ── */}
      <section className="w-full bg-[#1f4f3f]">
        <div
          ref={galleryRef}
          className="px-5 sm:px-8 md:px-16 xl:px-24 py-16 sm:py-24 md:py-32"
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
                  className="text-[clamp(1.9rem,5.5vw,4.5rem)] font-bold text-[#F5F0E8] leading-none tracking-tight"
                  initial={{ y: "110%" }}
                  animate={isGalleryInView ? { y: "0%" } : {}}
                  transition={{ duration: 0.85, delay: 0.15, ease }}
                >
                  Project Gallery
                </motion.h2>
              </div>
            </div>

            <motion.p
              className="text-[#F5F0E8]/35 text-sm leading-relaxed max-w-xs font-light"
              initial={{ opacity: 0, y: 16 }}
              animate={isGalleryInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.35, ease }}
            >
              Images coming soon. Placeholder spaces reserved for project
              photography.
            </motion.p>
          </div>

          {/* Masonry Placeholders */}
          <div className="columns-1 md:columns-2 xl:columns-3 gap-4 space-y-4">
            {data.galleryImages.map((item, i) => (
              <GalleryPlaceholder key={i} item={item} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. CTA ── */}
      <section
        ref={ctaRef}
        className="w-full bg-[#F5F0E8] relative overflow-hidden border-t border-[#2C2C2C]/10"
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          mouseX.set(((e.clientX - rect.left) / rect.width - 0.5) * 2);
          mouseY.set(((e.clientY - rect.top) / rect.height - 0.5) * 2);
        }}
        onMouseLeave={() => {
          mouseX.set(0);
          mouseY.set(0);
        }}
      >
        <motion.div
          className="absolute inset-[-4%] pointer-events-none opacity-[0.04]"
          style={{
            x: bgX,
            y: bgY,
            backgroundImage: `linear-gradient(#1f4f3f 1.5px, transparent 1.5px), linear-gradient(90deg, #1f4f3f 1.5px, transparent 1.5px)`,
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative z-10 px-5 sm:px-8 md:px-16 xl:px-24 py-16 sm:py-24 md:py-32">
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
                  {data.ctaLabel}
                </span>
              </motion.div>

              {data.ctaHeading.map((line, i) => (
                <div key={i} className="overflow-hidden">
                  <motion.h2
                    className={`font-bold leading-none tracking-tight text-[clamp(1.8rem,4.5vw,4rem)] ${
                      i === data.ctaHeading.length - 1
                        ? "text-transparent"
                        : "text-[#2C2C2C]"
                    }`}
                    style={
                      i === data.ctaHeading.length - 1
                        ? { WebkitTextStroke: "2px #1f4f3f" }
                        : {}
                    }
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
                {data.ctaSubtitle}
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
                      Consultation at ₹250 / sq ft
                    </p>
                    <p className="text-[#F5F0E8] text-xl font-semibold tracking-tight">
                      Start Your Project
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

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isCtaInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.62, ease }}
                >
                  <Link
                    href="tel:+919953332509"
                    className="group flex flex-col gap-3 border border-[#2C2C2C]/15 px-6 py-5 hover:border-[#1f4f3f] transition-colors duration-300"
                  >
                    <div className="w-8 h-8 border border-[#1f4f3f]/20 flex items-center justify-center group-hover:bg-[#1f4f3f] transition-colors duration-300">
                      <Phone className="w-3.5 h-3.5 text-[#1f4f3f] group-hover:text-[#F5F0E8] transition-colors duration-300" />
                    </div>
                    <div>
                      <p className="text-[#2C2C2C]/35 text-[10px] tracking-[0.25em] uppercase font-medium">
                        Call Us
                      </p>
                      <p className="text-[#2C2C2C] text-sm font-semibold mt-0.5">
                        +91 9953332509
                      </p>
                      <p className="text-[#2C2C2C] text-sm font-semibold mt-0.5">
                        +91 8851944757
                      </p>
                    </div>
                  </Link>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isCtaInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.72, ease }}
                >
                  <Link
                    href="mailto:ridgestudioarchitect25@gmail.com"
                    className="group flex flex-col gap-3 border border-[#2C2C2C]/15 px-6 py-5 hover:border-[#1f4f3f] transition-colors duration-300"
                  >
                    <div className="w-8 h-8 border border-[#1f4f3f]/20 flex items-center justify-center group-hover:bg-[#1f4f3f] transition-colors duration-300">
                      <Mail className="w-3.5 h-3.5 text-[#1f4f3f] group-hover:text-[#F5F0E8] transition-colors duration-300" />
                    </div>
                    <div>
                      <p className="text-[#2C2C2C]/35 text-[10px] tracking-[0.25em] uppercase font-medium">
                        Email Us
                      </p>
                      <p className="text-[#2C2C2C] text-sm font-semibold mt-0.5">
                        ridgestudioarchitect25@gmail.com
                      </p>
                    </div>
                  </Link>
                </motion.div>
              </div>

              <motion.div
                className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2"
                initial={{ opacity: 0 }}
                animate={isCtaInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.85 }}
              >
                {["Consultation", "No Commitment", "Quick Response"].map(
                  (tag, i) => (
                    <div key={tag} className="flex items-center gap-4">
                      {i > 0 && (
                        <span className="w-1 h-1 rounded-full bg-[#2C2C2C]/20" />
                      )}
                      <span className="text-[#2C2C2C]/35 text-[10px] tracking-[0.2em] uppercase font-medium">
                        {tag}
                      </span>
                    </div>
                  ),
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
