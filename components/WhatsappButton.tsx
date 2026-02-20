"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

const WHATSAPP_NUMBER = "919953332509"; // Replace with real number (country code + number, no +)
const WHATSAPP_MESSAGE =
  "Hi! I'd like to enquire about your architecture and interior design services.";

export default function WhatsAppButton() {
  const [hovered, setHovered] = useState(false);

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <div className="fixed bottom-6 right-6 z-999 flex items-center justify-end gap-3">
      {/* Tooltip label */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, x: 10, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="bg-[#1f4f3f] text-[#F5F0E8] text-xs tracking-[0.2em] uppercase font-semibold px-4 py-2.5 whitespace-nowrap shadow-lg"
          >
            Chat on WhatsApp
          </motion.div>
        )}
      </AnimatePresence>

      {/* Button */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="w-14 h-14 rounded-full flex items-center justify-center shadow-xl relative"
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          delay: 1.5,
          duration: 0.5,
          type: "spring",
          stiffness: 200,
          damping: 15,
        }}
      >
        {/* Ping animation */}
        <span className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-20" />

        <Image
          src="/whatsapp.png"
          alt="WhatsApp"
          width={32}
          height={32}
          className="relative z-10"
        />
      </motion.a>
    </div>
  );
}
