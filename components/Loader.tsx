"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader() {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Ease-in acceleration: slower at start, faster at end
        const increment = prev < 60 ? 1.2 : prev < 85 ? 2.2 : 3.5;
        return Math.min(prev + increment, 100);
      });
    }, 40);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      const timeout = setTimeout(() => setVisible(false), 900);
      return () => clearTimeout(timeout);
    }
  }, [progress]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-9999 flex flex-col items-center justify-center"
          style={{ backgroundColor: "#0a0f0d" }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Background grid texture */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: `
                linear-gradient(#F5F0E8 1px, transparent 1px),
                linear-gradient(90deg, #F5F0E8 1px, transparent 1px)
              `,
              backgroundSize: "60px 60px",
            }}
          />

          {/* Corner brackets */}
          {[
            "top-8 left-8",
            "top-8 right-8",
            "bottom-8 left-8",
            "bottom-8 right-8",
          ].map((pos, i) => (
            <motion.div
              key={i}
              className={`absolute ${pos} w-8 h-8`}
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 0.3, scale: 1 }}
              transition={{ delay: 0.1 * i, duration: 0.6 }}
              style={{
                borderTop: i < 2 ? "1px solid #F5F0E8" : "none",
                borderBottom: i >= 2 ? "1px solid #F5F0E8" : "none",
                borderLeft: i % 2 === 0 ? "1px solid #F5F0E8" : "none",
                borderRight: i % 2 === 1 ? "1px solid #F5F0E8" : "none",
              }}
            />
          ))}

          {/* Center content */}
          <div className="relative flex flex-col items-center gap-10">

            {/* Animated architectural mark */}
            <motion.div
              className="relative w-20 h-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {/* Outer rotating ring */}
              <motion.svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 80 80"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
              >
                <circle
                  cx="40" cy="40" r="36"
                  fill="none"
                  stroke="#1f4f3f"
                  strokeWidth="1"
                  strokeDasharray="6 10"
                />
              </motion.svg>

              {/* Inner counter-rotating ring */}
              <motion.svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 80 80"
                animate={{ rotate: -360 }}
                transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
              >
                <circle
                  cx="40" cy="40" r="26"
                  fill="none"
                  stroke="#F5F0E8"
                  strokeWidth="0.5"
                  strokeDasharray="3 14"
                  opacity={0.4}
                />
              </motion.svg>

              {/* Static center diamond */}
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 80 80"
              >
                <rect
                  x="31" y="31" width="18" height="18"
                  fill="none"
                  stroke="#F5F0E8"
                  strokeWidth="1"
                  transform="rotate(45 40 40)"
                  opacity={0.9}
                />
                <rect
                  x="37" y="37" width="6" height="6"
                  fill="#1f4f3f"
                  transform="rotate(45 40 40)"
                />
              </svg>
            </motion.div>

            {/* Studio name */}
            <motion.div
              className="flex flex-col items-center gap-1"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              <p
                className="text-[11px] tracking-[0.5em] uppercase"
                style={{ color: "#F5F0E8", opacity: 0.4, fontFamily: "Georgia, serif" }}
              >
                Ridge Studio
              </p>
              <h1
                className="text-2xl tracking-[0.25em] uppercase font-light"
                style={{ color: "#F5F0E8", fontFamily: "Georgia, serif" }}
              >
                Architects
              </h1>
            </motion.div>

            {/* Progress bar container */}
            <motion.div
              className="flex flex-col items-center gap-3 w-56"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              {/* Progress track */}
              <div
                className="w-full h-[1px] relative"
                style={{ backgroundColor: "rgba(245,240,232,0.12)" }}
              >
                {/* Fill */}
                <motion.div
                  className="absolute inset-y-0 left-0"
                  style={{
                    width: `${progress}%`,
                    backgroundColor: "#1f4f3f",
                  }}
                  transition={{ ease: "linear" }}
                />
                {/* Glowing head */}
                <motion.div
                  className="absolute top-1/2 -translate-y-1/2 w-1 h-1 rounded-full"
                  style={{
                    left: `${progress}%`,
                    backgroundColor: "#F5F0E8",
                    boxShadow: "0 0 8px 2px rgba(245,240,232,0.5)",
                    transform: `translate(-50%, -50%)`,
                  }}
                />
              </div>

              {/* Counter */}
              <div className="flex w-full justify-between items-center">
                <span
                  className="text-[10px] tracking-[0.3em] uppercase"
                  style={{ color: "rgba(245,240,232,0.3)", fontFamily: "Georgia, serif" }}
                >
                  Loading
                </span>
                <span
                  className="text-[11px] tabular-nums"
                  style={{ color: "rgba(245,240,232,0.6)", fontFamily: "Georgia, serif" }}
                >
                  {Math.floor(progress)}%
                </span>
              </div>
            </motion.div>
          </div>

          {/* Bottom tagline */}
          <motion.p
            className="absolute bottom-10 text-[10px] tracking-[0.4em] uppercase"
            style={{ color: "rgba(245,240,232,0.2)", fontFamily: "Georgia, serif" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            Architecture &amp; Interior Solutions
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}