"use client";

import { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/button";

type Slide = {
  image: string;
  heading: string;
  subtitle: string;
  cta: string;
};

const slides: Slide[] = [
  {
    image: "/hero/slide1.jpg",
    heading: "Designing Spaces That Inspire",
    subtitle: "Luxury Architecture & Interior Solutions",
    cta: "View Projects",
  },
  {
    image: "/hero/slide2.jpg",
    heading: "Modern Living, Timeless Design",
    subtitle: "Crafting Elegant Residential & Commercial Spaces",
    cta: "Explore Services",
  },
  {
    image: "/hero/slide3.jpg",
    heading: "Where Vision Meets Structure",
    subtitle: "Innovative Architecture with Purpose",
    cta: "Get Consultation",
  },
];

const AUTO_PLAY_INTERVAL = 4000;

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, AUTO_PLAY_INTERVAL);
    return () => clearInterval(timer);
  }, [paused, next]);

  const handleDotClick = (index: number) => {
    setCurrent(index);
    setPaused(true);
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <AnimatePresence mode="sync">
        <motion.div
          key={current}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${slides[current].image})` }}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
        />
      </AnimatePresence>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            className="flex flex-col items-center gap-5 max-w-4xl"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <motion.p
              className="text-[#F5F0E8]/70 text-sm md:text-base tracking-[0.3em] uppercase font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Ridge Studio Architects
            </motion.p>

            <motion.h1
              className="text-4xl md:text-6xl font-bold text-white leading-tight tracking-tight"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              {slides[current].heading}
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-white/75 tracking-wide max-w-xl"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.7 }}
            >
              {slides[current].subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="mt-2"
            >
              <Button className="bg-[#1f4f3f] hover:bg-[#F5F0E8] text-white hover:text-[#1f4f3f] border border-[#F5F0E8]/40 hover:border-[#1f4f3f] px-8 py-6 text-sm tracking-[0.2em] uppercase font-semibold rounded-none transition-colors duration-300">
                {slides[current].cta}
              </Button>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Dots */}
        <div className="absolute bottom-10 flex items-center gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              aria-label={`Go to slide ${index + 1}`}
              className="relative flex items-center justify-center w-8 h-8"
            >
              <motion.span
                className="block rounded-full bg-white"
                animate={{
                  width: index === current ? 28 : 8,
                  height: 8,
                  opacity: index === current ? 1 : 0.45,
                  backgroundColor: index === current ? "#F5F0E8" : "#ffffff",
                }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
