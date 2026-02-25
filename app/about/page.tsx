"use client";

import { useRef, useState, useEffect } from "react";
import {
  motion,
  useInView,
  cubicBezier,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Phone, Mail } from "lucide-react";

const ease = cubicBezier(0.76, 0, 0.24, 1);

// ─────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────

const founders = [
  {
    id: "01",
    name: "Gaurav Sharma",
    title: "Principal Architect",
    specialization: "Architecture & Planning",
    quote:
      "Architecture is not about buildings — it is about the people who inhabit them. Every line I draw is a conversation with the future.",
    image: "/about/gaurav professional.jpg",
    poster: "/about/gaurav professional.jpg",
  },
  {
    id: "02",
    name: "Khushi Sharma",
    title: "Lead Interior Designer",
    specialization: "Interior & Spatial Design",
    quote:
      "An interior should feel inevitable — as though the space could never have existed any other way. That precision is what drives me.",
    image: "/about/khushi professional.jpg",
    poster: "/about/khushi professional.jpg",
  },
];

const philosophy = [
  {
    number: "01",
    belief: "Form Follows Feeling",
    description:
      "We believe great design begins with empathy. Before we draw a single line, we ask: how should this space make you feel? Every structural decision flows from that answer.",
    icon: "◎",
  },
  {
    number: "02",
    belief: "Precision is a Form of Respect",
    description:
      "Imprecision wastes time, money, and trust. We obsess over every millimetre — not because perfection is the goal, but because your investment deserves nothing less.",
    icon: "◈",
  },
  {
    number: "03",
    belief: "Materials Have Memory",
    description:
      "We source only what endures. The materials we choose carry history and will age with grace. Great architecture is built not just for today — but for the decades that follow.",
    icon: "◇",
  },
];

const process = [
  {
    step: "01",
    title: "Discover",
    description:
      "We begin by listening. Deep discovery sessions to understand your vision, lifestyle, budget, and timeline. No assumptions — only questions.",
  },
  {
    step: "02",
    title: "Design",
    description:
      "Concept development, mood boards, 3D visualisations, and material palettes. We refine until the design feels exactly right.",
  },
  {
    step: "03",
    title: "Develop",
    description:
      "Working drawings, contractor coordination, and procurement. Every detail is documented before a single brick is laid.",
  },
  {
    step: "04",
    title: "Deliver",
    description:
      "On-site supervision, quality checks at every stage, and a final walkthrough. We don't leave until you love every inch of it.",
  },
];

const stats = [
  { value: "12", suffix: "+", label: "Years of Excellence" },
  { value: "340", suffix: "+", label: "Projects Completed" },
  { value: "98", suffix: "%", label: "Client Satisfaction" },
  { value: "50", suffix: "+", label: "Trusted Suppliers" },
];

// ─────────────────────────────────────────────
// ANIMATED COUNTER
// ─────────────────────────────────────────────

function Counter({ value, suffix }: { value: string; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);
  const target = parseInt(value);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const step = (target / duration) * 16;
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
}

// ─────────────────────────────────────────────
// FOUNDER VIDEO CARD
// ─────────────────────────────────────────────

function FounderCard({
  founder,
  index,
}: {
  founder: (typeof founders)[0];
  index: number;
}) {

  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.15, ease }}
      className="flex flex-col gap-6"
    >
      {/* Video */}
      <div
        className="relative aspect-3/4 overflow-hidden bg-[#163d30] group cursor-pointer"
      >
        <Image
          src={founder.image}
          alt={founder.name}
          height={400}
          width={300}
          className="w-full h-full object-cover opacity-85"
        />

        {/* Overlay linear */}
        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />

        {/* Number tag */}
        <div className="absolute top-5 left-5">
          <span className="text-[#F5F0E8]/30 text-xs font-mono">
            {founder.id}
          </span>
        </div>

        {/* Specialization tag */}
        <div className="absolute top-5 right-5">
          <span className="text-[#F5F0E8]/50 text-[9px] tracking-[0.3em] uppercase border border-[#F5F0E8]/20 px-2 py-1">
            {founder.specialization}
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="flex flex-col gap-3 px-1">
        <div>
          <h3 className="text-[#F5F0E8] text-2xl font-bold tracking-tight">
            {founder.name}
          </h3>
          <p className="text-[#F5F0E8]/40 text-xs tracking-[0.3em] uppercase mt-1 font-medium">
            {founder.title}
          </p>
        </div>
        <blockquote className="text-[#F5F0E8]/60 text-sm leading-relaxed italic border-l-2 border-[#F5F0E8]/15 pl-4">
          {'"'}
          {founder.quote}
          {'"'}
        </blockquote>
      </div>
    </motion.div>
  );
}

// ─────────────────────────────────────────────
// MAIN PAGE
// ─────────────────────────────────────────────

export default function AboutPage() {
  const storyRef = useRef<HTMLDivElement>(null);
  const philosophyRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const foundersRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLElement>(null);

  const isStoryInView = useInView(storyRef, { once: true, margin: "-60px" });
  const isPhilosophyInView = useInView(philosophyRef, {
    once: true,
    margin: "-60px",
  });
  const isProcessInView = useInView(processRef, {
    once: true,
    margin: "-60px",
  });
  const isStatsInView = useInView(statsRef, { once: true, margin: "-60px" });
  const isFoundersInView = useInView(foundersRef, {
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
        <Image
          src="/about/about-hero.jpg"
          alt="Ridge Studio Studio"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/30 via-transparent to-black/60" />

        <div className="relative z-10 h-full flex flex-col justify-end px-10 md:px-16 xl:px-24 pb-20">
          <motion.div
            className="flex items-center gap-3 mb-6"
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease }}
          >
            <span className="h-px w-8 bg-[#F5F0E8]/40" />
            <span className="text-[#F5F0E8]/50 text-[10px] tracking-[0.4em] uppercase font-medium">
              Our Story
            </span>
          </motion.div>

          {["The Studio", "Behind the", "Spaces."].map((line, i) => (
            <div key={i} className="overflow-hidden">
              <motion.h1
                className={`font-bold leading-[0.95] tracking-tight text-[clamp(3.5rem,8vw,7rem)] ${i === 2 ? "text-transparent" : "text-[#F5F0E8]"}`}
                style={i === 2 ? { WebkitTextStroke: "2px #F5F0E8" } : {}}
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
            Ten years of precision, craft, and unwavering belief that great
            design transforms lives.
          </motion.p>
        </div>

        {/* Scroll hint */}
        <motion.div
          className="absolute bottom-8 right-10 md:right-16 xl:right-24 flex flex-col items-center gap-2"
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

      {/* ── 2. OUR STORY ── */}
      <section className="w-full bg-[#F5F0E8]">
        <div
          ref={storyRef}
          className="max-w-7xl mx-auto px-10 md:px-16 xl:px-24 py-24 md:py-32"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <div>
              <motion.div
                className="flex items-center gap-3 mb-8"
                initial={{ opacity: 0, x: -16 }}
                animate={isStoryInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, ease }}
              >
                <span className="h-px w-8 bg-[#1f4f3f]/40" />
                <span className="text-[#1f4f3f]/60 text-[10px] tracking-[0.4em] uppercase font-medium">
                  Est. 2017
                </span>
              </motion.div>

              {["Our", "Story"].map((word, i) => (
                <div key={i} className="overflow-hidden">
                  <motion.h2
                    className="text-[clamp(3rem,6vw,5.5rem)] font-bold leading-[0.95] tracking-tight text-[#2C2C2C]"
                    initial={{ y: "110%" }}
                    animate={isStoryInView ? { y: "0%" } : {}}
                    transition={{ duration: 0.85, delay: 0.1 + i * 0.1, ease }}
                  >
                    {word}
                  </motion.h2>
                </div>
              ))}

              <motion.div
                className="w-12 h-px bg-[#1f4f3f] mt-8 mb-8"
                initial={{ width: 0 }}
                animate={isStoryInView ? { width: 48 } : {}}
                transition={{ duration: 0.7, delay: 0.4, ease }}
              />

              {[
                "Ridge Studio was founded in 2017 with a single conviction: that architecture should serve people, not impress them. Two designers, one shared philosophy, and an unwavering commitment to craft.",
                "Over ten years, we have grown from a two-person studio into a full-service architecture and interior design practice — but our values have never changed. Every project, regardless of scale, receives the same rigorous attention to detail.",
                "Today, with 340+ completed projects across Gujarat, we remain a studio first. Small enough to care deeply, experienced enough to deliver exceptionally.",
              ].map((para, i) => (
                <motion.p
                  key={i}
                  className="text-[#2C2C2C]/65 text-base md:text-lg leading-relaxed mb-5 font-light"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isStoryInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.45 + i * 0.12, ease }}
                >
                  {para}
                </motion.p>
              ))}
            </div>

            {/* Right — Image */}
            <motion.div
              className="relative h-125 md:h-150 overflow-hidden"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={isStoryInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.9, delay: 0.25, ease }}
            >
              <Image
                src="/about/studio.jpg"
                alt="Ridge Studio"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Year badge */}
              <div className="absolute bottom-6 left-6 bg-[#1f4f3f] px-5 py-4">
                <span className="text-[#F5F0E8] text-3xl font-black leading-none">
                  2017
                </span>
                <p className="text-[#F5F0E8]/50 text-[9px] tracking-[0.3em] uppercase mt-1">
                  Founded
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 3. MEET THE FOUNDERS ── */}
      <section className="w-full bg-[#1f4f3f]">
        <div ref={foundersRef} className="px-10 md:px-16 xl:px-24 pt-24 pb-20">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 border-b border-[#F5F0E8]/10 pb-14 mb-16">
            <div>
              <motion.div
                className="flex items-center gap-3 mb-6"
                initial={{ opacity: 0, x: -16 }}
                animate={isFoundersInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, ease }}
              >
                <span className="h-px w-8 bg-[#F5F0E8]/30" />
                <span className="text-[#F5F0E8]/40 text-[10px] tracking-[0.4em] uppercase font-medium">
                  The People
                </span>
              </motion.div>
              <div className="overflow-hidden">
                <motion.h2
                  className="text-[clamp(2.4rem,5.5vw,4.5rem)] font-bold text-[#F5F0E8] leading-none tracking-tight"
                  initial={{ y: "110%" }}
                  animate={isFoundersInView ? { y: "0%" } : {}}
                  transition={{ duration: 0.85, delay: 0.15, ease }}
                >
                  Meet the Founders
                </motion.h2>
              </div>
            </div>
            <motion.p
              className="text-[#F5F0E8]/40 text-sm leading-relaxed max-w-sm font-light"
              initial={{ opacity: 0, y: 16 }}
              animate={isFoundersInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.35, ease }}
            >
              Two designers. One vision. Hear directly from the founders about
              what drives Ridge Studio.
            </motion.p>
          </div>

          {/* Founder Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            {founders.map((founder, i) => (
              <FounderCard key={founder.id} founder={founder} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. PHILOSOPHY ── */}
      <section className="w-full bg-[#F5F0E8]">
        <div
          ref={philosophyRef}
          className="px-10 md:px-16 xl:px-24 py-24 md:py-32"
        >
          {/* Header */}
          <div className="mb-20">
            <motion.div
              className="flex items-center gap-3 mb-6"
              initial={{ opacity: 0, x: -16 }}
              animate={isPhilosophyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, ease }}
            >
              <span className="h-px w-8 bg-[#1f4f3f]/40" />
              <span className="text-[#1f4f3f]/60 text-[10px] tracking-[0.4em] uppercase font-medium">
                What We Believe
              </span>
            </motion.div>
            <div className="overflow-hidden">
              <motion.h2
                className="text-[clamp(2.4rem,5.5vw,4.5rem)] font-bold text-[#2C2C2C] leading-none tracking-tight"
                initial={{ y: "110%" }}
                animate={isPhilosophyInView ? { y: "0%" } : {}}
                transition={{ duration: 0.85, delay: 0.15, ease }}
              >
                Our Philosophy
              </motion.h2>
            </div>
          </div>

          {/* Beliefs */}
          <div className="flex flex-col divide-y divide-[#2C2C2C]/10">
            {philosophy.map((item, i) => (
              <motion.div
                key={item.number}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 py-12 group"
                initial={{ opacity: 0, y: 32 }}
                animate={isPhilosophyInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.2 + i * 0.15, ease }}
              >
                <div className="lg:col-span-1 flex items-start gap-4 lg:flex-col lg:gap-0">
                  <span className="text-[#2C2C2C]/15 text-xs font-mono">
                    {item.number}
                  </span>
                </div>
                <div className="lg:col-span-4">
                  <div className="flex items-center gap-4">
                    <span className="text-[#1f4f3f]/25 text-4xl leading-none">
                      {item.icon}
                    </span>
                    <h3 className="text-[#2C2C2C] text-2xl md:text-3xl font-bold tracking-tight leading-tight">
                      {item.belief}
                    </h3>
                  </div>
                </div>
                <div className="lg:col-span-7">
                  <p className="text-[#2C2C2C]/60 text-base md:text-lg leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. NUMBERS ── */}
      <section className="w-full bg-[#1f4f3f]">
        <div ref={statsRef} className="px-10 md:px-16 xl:px-24 py-24 md:py-32">
          <motion.div
            className="flex items-center gap-3 mb-16"
            initial={{ opacity: 0, x: -16 }}
            animate={isStatsInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, ease }}
          >
            <span className="h-px w-8 bg-[#F5F0E8]/30" />
            <span className="text-[#F5F0E8]/40 text-[10px] tracking-[0.4em] uppercase font-medium">
              By The Numbers
            </span>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 divide-x divide-y lg:divide-y-0 divide-[#F5F0E8]/10">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                className="flex flex-col px-8 py-10 lg:py-0 first:pl-0"
                initial={{ opacity: 0, y: 30 }}
                animate={isStatsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: i * 0.1, ease }}
              >
                <span className="text-[5rem] md:text-[6rem] font-black text-[#F5F0E8] leading-none tabular-nums">
                  <Counter value={s.value} suffix={s.suffix} />
                </span>
                <span className="text-[#F5F0E8]/35 text-xs tracking-[0.3em] uppercase mt-3 font-medium">
                  {s.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. PROCESS ── */}
      <section className="w-full bg-[#F5F0E8]">
        <div
          ref={processRef}
          className="px-10 md:px-16 xl:px-24 py-24 md:py-32"
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
                  className="text-[clamp(2.4rem,5.5vw,4.5rem)] font-bold text-[#2C2C2C] leading-none tracking-tight"
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
              Four clear stages. Zero surprises. Complete transparency from
              first meeting to final handover.
            </motion.p>
          </div>

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-0 divide-y md:divide-y-0 md:divide-x divide-[#2C2C2C]/10">
            {process.map((step, i) => (
              <motion.div
                key={step.step}
                className="flex flex-col gap-6 px-0 md:px-8 py-10 md:py-0 first:pl-0 last:pr-0 group"
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
                  {process.map((_, j) => (
                    <span
                      key={j}
                      className={`h-0.5 flex-1 rounded-full transition-colors duration-300 ${j <= i ? "bg-[#1f4f3f]" : "bg-[#2C2C2C]/10"}`}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. CTA ── */}
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

        <div className="relative z-10 px-10 md:px-16 xl:px-24 py-24 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.div
                className="flex items-center gap-3 mb-8"
                initial={{ opacity: 0, x: -16 }}
                animate={isCtaInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, ease }}
              >
                <span className="h-px w-8 bg-[#1f4f3f]/40" />
                <span className="text-[#1f4f3f]/60 text-[10px] tracking-[0.4em] uppercase font-medium">
                  Work With Us
                </span>
              </motion.div>

              {["Have a project", "in mind?", "Let's build it."].map(
                (line, i) => (
                  <div key={i} className="overflow-hidden">
                    <motion.h2
                      className={`font-bold leading-none tracking-tight text-[clamp(2.2rem,4.5vw,4rem)] ${i === 2 ? "text-transparent" : "text-[#2C2C2C]"}`}
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
                ),
              )}
            </div>

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
                      +91 9953332509
                    </p>
                    <p className="text-[#2C2C2C] text-sm font-semibold mt-0.5">
                      +91 8851944757
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
                      ridgestudioarchitect25@gmail.com
                    </p>
                  </div>
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
