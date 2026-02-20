"use client";

import Link from "next/link";
import { motion, useInView, cubicBezier } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

const ease = cubicBezier(0.76, 0, 0.24, 1);

const stats = [
  { value: "12+", label: "Years" },
  { value: "340+", label: "Projects" },
  { value: "98%", label: "Satisfaction" },
];

export default function AboutSnippet() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="w-full bg-[#1f4f3f] relative overflow-hidden">
      {/* Decorative large background text */}
      <motion.span
        aria-hidden
        className="absolute right-0 top-1/2 -translate-y-1/2 text-[22vw] font-black text-white/3 leading-none select-none pointer-events-none whitespace-nowrap"
        initial={{ opacity: 0, x: 80 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1.4, delay: 0.2, ease }}
      >
        RIDGE
      </motion.span>

      <div className="w-full grid grid-cols-1 lg:grid-cols-2">
        {/* LEFT — Dark green, big type */}
        <div className="flex flex-col justify-between px-10 md:px-16 xl:px-24 py-20 xl:py-28 border-b lg:border-b-0 lg:border-r border-white/10">
          <div>
            <motion.div
              className="flex items-center gap-3 mb-12"
              initial={{ opacity: 0, x: -16 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1, ease }}
            >
              <span className="h-px w-10 bg-[#F5F0E8]/40" />
              <span className="text-[#F5F0E8]/50 text-[10px] tracking-[0.4em] uppercase font-medium">
                About the Studio
              </span>
            </motion.div>

            {/* Staggered headline */}
            {["Spaces Built", "With Purpose,", "Designed to Last."].map(
              (word, i) => (
                <div key={i} className="overflow-hidden">
                  <motion.h2
                    className="text-[clamp(2.4rem,5vw,4.2rem)] font-bold leading-[1.05] tracking-tight text-[#F5F0E8]"
                    initial={{ y: "110%" }}
                    animate={isInView ? { y: "0%" } : {}}
                    transition={{ duration: 0.85, delay: 0.2 + i * 0.12, ease }}
                  >
                    {word}
                  </motion.h2>
                </div>
              ),
            )}
          </div>

          {/* Stats */}
          <motion.div
            className="flex gap-12 mt-16"
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.75, ease }}
          >
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col">
                <span className="text-4xl font-black text-[#F5F0E8] leading-none">
                  {s.value}
                </span>
                <span className="text-[#F5F0E8]/40 text-[10px] tracking-[0.3em] uppercase mt-2 font-medium">
                  {s.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* RIGHT — Cream panel */}
        <div className="bg-[#F5F0E8] flex flex-col justify-between px-10 md:px-16 xl:px-24 py-20 xl:py-28">
          <div className="flex flex-col gap-8">
            <motion.div
              className="w-10 h-10 border-2 border-[#1f4f3f] flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.6 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.35, ease }}
            >
              <span className="text-[#1f4f3f] text-xs font-black tracking-wider">
                RS
              </span>
            </motion.div>

            {[
              "At Ridge Studio, architecture is not a service — it is a discipline. We approach every project as a problem of culture, context, and craft.",
              "Our interiors don't decorate space — they complete it. Every material is chosen with intent, every proportion considered, every detail resolved before it is built.",
            ].map((para, i) => (
              <motion.p
                key={i}
                className="text-[#2C2C2C]/75 text-base md:text-lg leading-[1.85] font-light"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.45 + i * 0.15, ease }}
              >
                {para}
              </motion.p>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            className="mt-16"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <Link
              href="/about"
              className="group inline-flex items-center justify-between w-full border-t border-b border-[#2C2C2C]/20 py-5"
            >
              <span className="text-[#1f4f3f] text-sm tracking-[0.25em] uppercase font-bold">
                Discover Our Story
              </span>
              <motion.div
                className="w-10 h-10 bg-[#1f4f3f] flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <ArrowUpRight className="w-4 h-4 text-[#F5F0E8]" />
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
