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

const ease = cubicBezier(0.76, 0, 0.24, 1);

export default function CTABanner() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  // Mouse parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 60, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 60, damping: 20 });
  const bgX = useTransform(springX, [-1, 1], ["-2%", "2%"]);
  const bgY = useTransform(springY, [-1, 1], ["-2%", "2%"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(((e.clientX - rect.left) / rect.width - 0.5) * 2);
    mouseY.set(((e.clientY - rect.top) / rect.height - 0.5) * 2);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      ref={ref}
      className="w-full bg-[#F5F0E8] relative overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Parallax background pattern */}
      <motion.div
        className="absolute inset-[-4%] pointer-events-none opacity-[0.045]"
        style={{
          x: bgX,
          y: bgY,
          backgroundImage: `linear-gradient(#1f4f3f 1.5px, transparent 1.5px), linear-gradient(90deg, #1f4f3f 1.5px, transparent 1.5px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Decorative large text background */}
      <motion.span
        aria-hidden
        className="absolute -bottom-8 left-0 text-[20vw] font-black leading-none select-none pointer-events-none text-[#1f4f3f]/4 whitespace-nowrap"
        initial={{ opacity: 0, x: -60 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1.4, delay: 0.2, ease }}
      >
        RIDGE
      </motion.span>

      <div className="relative z-10 max-w-7xl mx-auto px-10 md:px-16 xl:px-24 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — Statement */}
          <div>
            <motion.div
              className="flex items-center gap-3 mb-8"
              initial={{ opacity: 0, x: -16 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, ease }}
            >
              <span className="h-px w-8 bg-[#1f4f3f]/40" />
              <span className="text-[#1f4f3f]/60 text-[10px] tracking-[0.4em] uppercase font-medium">
                Start a Project
              </span>
            </motion.div>

            {["Have a project", "in mind?", "Let's build it."].map(
              (line, i) => (
                <div key={i} className="overflow-hidden">
                  <motion.h2
                    className={`font-bold leading-none tracking-tight ${
                      i === 2 ? "text-transparent" : "text-[#2C2C2C]"
                    } text-[clamp(2.6rem,5.5vw,4.8rem)]`}
                    style={i === 2 ? { WebkitTextStroke: "2px #1f4f3f" } : {}}
                    initial={{ y: "110%" }}
                    animate={isInView ? { y: "0%" } : {}}
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

            <motion.p
              className="text-[#2C2C2C]/50 text-base md:text-lg leading-relaxed mt-8 max-w-md font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.55, ease }}
            >
              From first sketch to final handover — Ridge Studio brings your
              vision to life with precision, craft, and an unwavering eye for
              detail.
            </motion.p>
          </div>

          {/* Right — Actions */}
          <div className="flex flex-col gap-6">
            {/* Primary CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.5, ease }}
            >
              <Link
                href="/contact"
                className="group w-full bg-[#1f4f3f] flex items-center justify-between px-8 py-7 hover:bg-[#163d30] transition-colors duration-300"
              >
                <div>
                  <p className="text-[#F5F0E8]/50 text-[10px] tracking-[0.3em] uppercase mb-1 font-medium">
                    Book Your Consultation Now
                  </p>
                  <p className="text-[#F5F0E8] text-xl font-semibold tracking-tight">
                    Start Your Project
                  </p>
                </div>
                <motion.div
                  className="w-12 h-12 border border-[#F5F0E8]/20 flex items-center justify-center shrink-0"
                  whileHover={{ scale: 1.1, rotate: 45 }}
                  transition={{ duration: 0.25 }}
                >
                  <ArrowUpRight className="w-5 h-5 text-[#F5F0E8]" />
                </motion.div>
              </Link>
            </motion.div>

            {/* Secondary CTAs — Phone + Email */}
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.62, ease }}
              >
                <Link
                  href="tel:+919953332509"
                  className="group flex flex-col gap-3 border border-[#2C2C2C]/15 px-6 py-5 hover:border-[#1f4f3f] transition-colors duration-300 h-full"
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
                  </div>
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.72, ease }}
              >
                <Link
                  href="mailto:ridgestudioarchitect25@gmail.com"
                  className="group flex flex-col gap-3 border border-[#2C2C2C]/15 px-6 py-5 hover:border-[#1f4f3f] transition-colors duration-300 h-full"
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

            {/* Trust line */}
            <motion.div
              className="flex items-center gap-4 pt-2"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.85 }}
            >
              {["Free Consultation", "No Commitment", "Quick Response"].map(
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
  );
}
