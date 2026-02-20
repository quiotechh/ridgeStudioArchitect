"use client";

import { useRef, useState, useCallback } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
  cubicBezier,
} from "framer-motion";

const ease = cubicBezier(0.76, 0, 0.24, 1);

type Reason = {
  number: string;
  title: string;
  description: string;
  stat: string;
  statLabel: string;
  icon: string;
};

const reasons: Reason[] = [
  {
    number: "01",
    title: "Precision in Every Detail",
    description:
      "From structural calculations to the curve of a door handle, we obsess over every millimetre. Our work doesn't just look right — it is right.",
    stat: "0mm",
    statLabel: "Tolerance for Error",
    icon: "◈",
  },
  {
    number: "02",
    title: "End-to-End Ownership",
    description:
      "One team from concept to completion. No hand-offs, no miscommunication, no excuses. We own the entire process and deliver on every promise.",
    stat: "100%",
    statLabel: "In-House Execution",
    icon: "⬡",
  },
  {
    number: "03",
    title: "Design With Purpose",
    description:
      "We don't decorate — we solve. Every design decision serves a human need, a structural logic, or a spatial ambition. Beauty follows function.",
    stat: "340+",
    statLabel: "Projects Delivered",
    icon: "◎",
  },
  {
    number: "04",
    title: "12 Years of Mastery",
    description:
      "Over a decade of building trust across Gujarat. Our portfolio spans residences, offices, turnkey developments, and everything in between.",
    stat: "12+",
    statLabel: "Years of Excellence",
    icon: "◇",
  },
  {
    number: "05",
    title: "Client-First Always",
    description:
      "We listen before we draw. Every project starts with deep discovery — understanding how you live, how you work, and what you truly need.",
    stat: "98%",
    statLabel: "Client Satisfaction",
    icon: "○",
  },
  {
    number: "06",
    title: "Materials That Last",
    description:
      "We source only what endures. Premium materials, trusted suppliers, and finishes that age gracefully — because great architecture is built for decades.",
    stat: "50+",
    statLabel: "Trusted Suppliers",
    icon: "▣",
  },
];

function Card3D({ reason, index }: { reason: Reason; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [flipped, setFlipped] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 20 });
  const springY = useSpring(y, { stiffness: 150, damping: 20 });
  const rotateX = useTransform(springY, [-0.5, 0.5], ["12deg", "-12deg"]);
  const rotateY = useTransform(springX, [-0.5, 0.5], ["-12deg", "12deg"]);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      x.set((e.clientX - rect.left) / rect.width - 0.5);
      y.set((e.clientY - rect.top) / rect.height - 0.5);
    },
    [x, y],
  );

  const handleMouseLeave = useCallback(() => {
    x.set(0);
    y.set(0);
  }, [x, y]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60, rotateX: 30 }}
      animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1, ease }}
      style={{ perspective: "1000px" }}
      className="cursor-pointer"
      onClick={() => setFlipped(!flipped)}
    >
      <motion.div
        style={{
          rotateX: flipped ? "0deg" : rotateX,
          rotateY: flipped ? "0deg" : rotateY,
          transformStyle: "preserve-3d",
        }}
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.7, ease }}
        onMouseMove={!flipped ? handleMouseMove : undefined}
        onMouseLeave={handleMouseLeave}
        className="relative w-full h-70 md:h-75"
        whileHover={!flipped ? { z: 20 } : {}}
      >
        {/* FRONT */}
        <div
          className="absolute inset-0 bg-[#163d30] border border-[#F5F0E8]/8 p-8 flex flex-col justify-between overflow-hidden"
          style={{ backfaceVisibility: "hidden" }}
        >
          {/* Glow effect */}
          <motion.div
            className="absolute inset-0 opacity-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle at 50% 50%, rgba(245,240,232,0.06) 0%, transparent 70%)",
            }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />

          {/* Top row */}
          <div className="flex items-start justify-between">
            <span className="text-[#F5F0E8]/15 text-xs font-mono tracking-widest">
              {reason.number}
            </span>
            <motion.span
              className="text-[#F5F0E8]/20 text-3xl leading-none"
              whileHover={{ scale: 1.3, color: "rgba(245,240,232,0.5)" }}
              transition={{ duration: 0.3 }}
            >
              {reason.icon}
            </motion.span>
          </div>

          {/* Title */}
          <div>
            <h3 className="text-[#F5F0E8] text-xl font-bold tracking-tight leading-snug mb-3">
              {reason.title}
            </h3>
            <p className="text-[#F5F0E8]/45 text-sm leading-relaxed line-clamp-2">
              {reason.description}
            </p>
          </div>

          {/* Flip hint */}
          <div className="flex items-center gap-2 mt-2">
            <span className="text-[#F5F0E8]/20 text-[10px] tracking-[0.3em] uppercase">
              Tap to reveal
            </span>
            <motion.span
              className="text-[#F5F0E8]/20 text-xs"
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </div>

          {/* Corner accent */}
          <div className="absolute bottom-0 right-0 w-16 h-16 border-t border-l border-[#F5F0E8]/8" />
        </div>

        {/* BACK */}
        <div
          className="absolute inset-0 bg-[#F5F0E8] p-8 flex flex-col justify-between overflow-hidden"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <div className="flex items-start justify-between">
            <span className="text-[#1f4f3f]/30 text-xs font-mono tracking-widest">
              {reason.number}
            </span>
            <span className="text-[#1f4f3f]/30 text-3xl leading-none">
              {reason.icon}
            </span>
          </div>

          <div>
            {/* Big stat */}
            <div className="mb-4">
              <span className="text-5xl font-black text-[#1f4f3f] leading-none">
                {reason.stat}
              </span>
              <p className="text-[#1f4f3f]/40 text-[10px] tracking-[0.3em] uppercase mt-1 font-medium">
                {reason.statLabel}
              </p>
            </div>
            <p className="text-[#2C2C2C]/70 text-sm leading-relaxed">
              {reason.description}
            </p>
          </div>

          <span className="text-[#1f4f3f]/30 text-[10px] tracking-[0.3em] uppercase">
            Tap to flip back
          </span>

          {/* Corner accent */}
          <div className="absolute bottom-0 right-0 w-16 h-16 border-t border-l border-[#1f4f3f]/10" />
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function WhyChooseUs() {
  const headerRef = useRef<HTMLDivElement>(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  return (
    <section className="w-full bg-[#F5F0E8] overflow-hidden relative">
      {/* Animated background grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.06]"
        style={{
          backgroundImage: `linear-gradient(#1f4f3f 1px, transparent 1px), linear-gradient(90deg, #1f4f3f 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Floating orbs */}
      <motion.div
        className="absolute -top-40 -right-40 w-125 h-125 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(31,79,63,0.06) 0%, transparent 70%)",
        }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-40 -left-40 w-100 h-100 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(31,79,63,0.04) 0%, transparent 70%)",
        }}
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Header */}
      <div
        ref={headerRef}
        className="relative z-10 px-10 md:px-16 xl:px-24 pt-24 pb-16 border-b border-[#2C2C2C]/10 flex flex-col md:flex-row md:items-end md:justify-between gap-8"
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
              Our Difference
            </span>
          </motion.div>

          <div className="overflow-hidden">
            <motion.h2
              className="text-[clamp(2.4rem,5.5vw,4.5rem)] font-bold text-[#2C2C2C] leading-none tracking-tight"
              initial={{ y: "110%" }}
              animate={isHeaderInView ? { y: "0%" } : {}}
              transition={{ duration: 0.85, delay: 0.15, ease }}
            >
              Why Ridge Studio Architects ?
            </motion.h2>
          </div>
        </div>

        <motion.p
          className="text-[#2C2C2C]/50 text-sm md:text-base leading-relaxed max-w-xs font-light"
          initial={{ opacity: 0, y: 16 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.35, ease }}
        >
          Flip each card to discover what sets us apart — built on a decade of
          trust, craft, and precision.
        </motion.p>
      </div>

      {/* 3D Cards Grid */}
      <div
        className="relative z-10 px-10 md:px-16 xl:px-24 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        style={{ perspective: "1200px" }}
      >
        {reasons.map((reason, i) => (
          <Card3D key={reason.number} reason={reason} index={i} />
        ))}
      </div>

      {/* Bottom statement */}
      <motion.div
        className="relative z-10 px-10 md:px-16 xl:px-24 pb-20 pt-4"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease }}
      >
        <div className="border-t border-[#2C2C2C]/10 pt-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <p className="text-[#2C2C2C]/35 text-sm font-light max-w-md leading-relaxed">
            Every project is a collaboration. Every result is a commitment.
          </p>
          <div className="flex items-center gap-3">
            {["Architecture", "Interiors", "Furniture", "Turnkey"].map(
              (tag, i) => (
                <motion.span
                  key={tag}
                  className="text-[#1f4f3f]/40 text-[10px] tracking-[0.25em] uppercase border border-[#1f4f3f]/15 px-3 py-1.5"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                >
                  {tag}
                </motion.span>
              ),
            )}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
