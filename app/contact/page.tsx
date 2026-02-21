"use client";

import { useRef, useState } from "react";
import { motion, useInView, cubicBezier } from "framer-motion";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Instagram,
  Facebook,
  Youtube,
  ArrowUpRight,
  Send,
  CheckCircle,
} from "lucide-react";

const ease = cubicBezier(0.76, 0, 0.24, 1);

const WHATSAPP_NUMBER = "919953332509";
const WHATSAPP_MESSAGE =
  "Hi! I'd like to book a consultation with Ridge Studio Architects.";

const socialLinks = [
  {
    label: "Instagram",
    href: "https://instagram.com/ridgestudioarchitects",
    icon: Instagram,
  },
  {
    label: "Facebook",
    href: "https://facebook.com/ridgestudioarchitects",
    icon: Facebook,
  },
  {
    label: "YouTube",
    href: "https://youtube.com/@ridgestudioarchitects",
    icon: Youtube,
  },
];

const officeHours = [
  { day: "Monday — Friday", time: "10:00 AM – 7:00 PM" },
  { day: "Saturday", time: "10:00 AM – 7:00 PM" },
  { day: "Sunday", time: "Closed" },
];

type FormData = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

const serviceOptions = [
  "Residential Interiors & Exteriors",
  "Commercial Interiors & Exteriors",
  "Architecture & Planning",
  "Turnkey Projects",
  "Bespoke Furniture",
  "Renovation Projects",
  "Facade & Exterior Design",
  "Structure Design Services",
  "Other",
];

export default function ContactPage() {
  const headerRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const isHeaderInView = useInView(headerRef, { once: true });
  const isFormInView = useInView(formRef, { once: true, margin: "-60px" });
  const isInfoInView = useInView(infoRef, { once: true, margin: "-60px" });

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <main className="w-full">
      {/* ── HERO HEADER ── */}
      <section className="w-full bg-[#1f4f3f] relative overflow-hidden">
        {/* Animated background grid */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.045]"
          style={{
            backgroundImage: `linear-gradient(#F5F0E8 1px, transparent 1px), linear-gradient(90deg, #F5F0E8 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Large ghost text */}
        <motion.span
          aria-hidden
          className="absolute -right-8 top-1/2 -translate-y-1/2 text-[22vw] font-black leading-none select-none pointer-events-none text-[#F5F0E8]/3 whitespace-nowrap"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.4, delay: 0.3, ease }}
        >
          CONTACT
        </motion.span>

        {/* Floating geometric accents */}
        <motion.div
          className="absolute top-24 right-24 w-32 h-32 border border-[#F5F0E8]/8"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute top-28 right-28 w-20 h-20 border border-[#F5F0E8]/5"
          animate={{ rotate: -360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-16 left-1/3 w-2 h-2 rounded-full bg-[#F5F0E8]/20"
          animate={{ y: [-8, 8, -8], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/3 left-20 w-1 h-1 rounded-full bg-[#F5F0E8]/30"
          animate={{ y: [8, -8, 8], opacity: [0.3, 0.6, 0.3] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />

        {/* Vertical line accent */}
        <motion.div
          className="absolute left-0 top-0 bottom-0 w-px bg-linear-to-b from-transparent via-[#F5F0E8]/10 to-transparent"
          style={{ left: "calc(10% + 40px)" }}
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1.2, delay: 0.5, ease }}
        />

        <div
          ref={headerRef}
          className="relative z-10 px-10 md:px-16 xl:px-24 pt-40 pb-24 border-b border-[#F5F0E8]/10"
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
                  Let{"'"}s Talk
                </span>
              </motion.div>

              {["Get In", "Touch"].map((word, i) => (
                <div key={i} className="overflow-hidden">
                  <motion.h1
                    className={`font-bold leading-[0.95] tracking-tight text-[clamp(3.5rem,8vw,7rem)] ${i === 1 ? "text-transparent" : "text-[#F5F0E8]"}`}
                    style={i === 1 ? { WebkitTextStroke: "2px #F5F0E8" } : {}}
                    initial={{ y: "110%" }}
                    animate={isHeaderInView ? { y: "0%" } : {}}
                    transition={{
                      duration: 0.85,
                      delay: 0.15 + i * 0.12,
                      ease,
                    }}
                  >
                    {word}
                  </motion.h1>
                </div>
              ))}

              {/* Quick contact pills */}
              <motion.div
                className="flex flex-wrap items-center gap-3 mt-10"
                initial={{ opacity: 0, y: 16 }}
                animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5, ease }}
              >
                <Link
                  href="tel:+919953332509"
                  className="group flex items-center gap-2 border border-[#F5F0E8]/15 px-4 py-2.5 hover:bg-[#F5F0E8]/10 transition-colors duration-300"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F5F0E8]/40" />
                  <span className="text-[#F5F0E8]/60 text-xs tracking-[0.15em] font-medium group-hover:text-[#F5F0E8] transition-colors duration-300">
                    +91 99533 32509
                  </span>
                </Link>
                <Link
                  href="mailto:ridgestudioarchitect25@gmail.com"
                  className="group flex items-center gap-2 border border-[#F5F0E8]/15 px-4 py-2.5 hover:bg-[#F5F0E8]/10 transition-colors duration-300"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F5F0E8]/40" />
                  <span className="text-[#F5F0E8]/60 text-xs tracking-[0.15em] font-medium group-hover:text-[#F5F0E8] transition-colors duration-300">
                    ridgestudioarchitect25@gmail.com
                  </span>
                </Link>
                <span className="flex items-center gap-2 border border-[#F5F0E8]/10 px-4 py-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#25D366]" />
                  <span className="text-[#F5F0E8]/40 text-xs tracking-[0.15em] font-medium">
                    Mon–Sat, 10AM–7PM
                  </span>
                </span>
              </motion.div>
            </div>

            <motion.div
              className="flex flex-col gap-4 max-w-xs"
              initial={{ opacity: 0, y: 16 }}
              animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.45, ease }}
            >
              <p className="text-[#F5F0E8]/40 text-sm leading-relaxed font-light">
                Whether you have a project in mind or just want to explore what
                {"'"}s possible — we{"'"}d love to hear from you.
              </p>
              {/* Consultation fee badge */}
              <div className="flex items-center gap-3 border border-[#F5F0E8]/10 px-4 py-3 w-fit">
                <span className="text-[#F5F0E8] text-lg font-black">₹250</span>
                <div>
                  <p className="text-[#F5F0E8]/60 text-[10px] tracking-[0.2em] uppercase font-medium">
                    Consultation Fee
                  </p>
                  <p className="text-[#F5F0E8]/30 text-[10px] mt-0.5">
                    Adjusted against project
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── MAIN SPLIT ── */}
      <section className="w-full grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        {/* LEFT — Cream — Contact Form */}
        <div
          ref={formRef}
          className="bg-[#F5F0E8] px-10 md:px-16 py-20 flex flex-col justify-center"
        >
          {submitted ? (
            <motion.div
              className="flex flex-col items-start gap-6"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease }}
            >
              <CheckCircle
                className="w-14 h-14 text-[#1f4f3f]"
                strokeWidth={1.5}
              />
              <div>
                <h2 className="text-[#2C2C2C] text-3xl font-bold tracking-tight mb-3">
                  Message Received!
                </h2>
                <p className="text-[#2C2C2C]/60 text-base leading-relaxed font-light max-w-md">
                  Thank you for reaching out. Our team will get back to you
                  within 24 hours. We look forward to working with you.
                </p>
              </div>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    service: "",
                    message: "",
                  });
                }}
                className="text-[#1f4f3f] text-xs tracking-[0.25em] uppercase font-bold border-b border-[#1f4f3f] pb-1 hover:opacity-60 transition-opacity duration-300"
              >
                Send Another Message
              </button>
            </motion.div>
          ) : (
            <motion.div
              className="flex flex-col gap-8"
              initial={{ opacity: 0, y: 30 }}
              animate={isFormInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease }}
            >
              {/* Form Header */}
              <div>
                <motion.div
                  className="flex items-center gap-3 mb-5"
                  initial={{ opacity: 0, x: -16 }}
                  animate={isFormInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, ease }}
                >
                  <span className="h-px w-8 bg-[#1f4f3f]/40" />
                  <span className="text-[#1f4f3f]/60 text-[10px] tracking-[0.4em] uppercase font-medium">
                    Send a Message
                  </span>
                </motion.div>
                <h2 className="text-[#2C2C2C] text-3xl md:text-4xl font-bold tracking-tight leading-tight">
                  Start Your Project
                </h2>
              </div>

              {/* Consultation Notice */}
              <div className="border border-[#1f4f3f]/15 bg-[#1f4f3f]/5 px-5 py-4 flex items-start gap-3">
                <span className="text-[#1f4f3f] text-lg leading-none mt-0.5">
                  ℹ
                </span>
                <div>
                  <p className="text-[#2C2C2C] text-sm font-semibold">
                    Consultation Fee: ₹250
                  </p>
                  <p className="text-[#2C2C2C]/55 text-xs leading-relaxed mt-0.5 font-light">
                    A refundable consultation fee of ₹250 applies for the first
                    meeting. This amount is adjusted against your project if you
                    proceed with us.
                  </p>
                </div>
              </div>

              {/* Form Fields */}
              <div className="flex flex-col gap-4">
                {/* Name + Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[#2C2C2C]/50 text-[10px] tracking-[0.3em] uppercase font-medium">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="bg-white border border-[#2C2C2C]/10 px-4 py-3.5 text-[#2C2C2C] text-sm placeholder:text-[#2C2C2C]/25 focus:outline-none focus:border-[#1f4f3f] transition-colors duration-300"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[#2C2C2C]/50 text-[10px] tracking-[0.3em] uppercase font-medium">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 99533 32509"
                      className="bg-white border border-[#2C2C2C]/10 px-4 py-3.5 text-[#2C2C2C] text-sm placeholder:text-[#2C2C2C]/25 focus:outline-none focus:border-[#1f4f3f] transition-colors duration-300"
                      required
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[#2C2C2C]/50 text-[10px] tracking-[0.3em] uppercase font-medium">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="hello@example.com"
                    className="bg-white border border-[#2C2C2C]/10 px-4 py-3.5 text-[#2C2C2C] text-sm placeholder:text-[#2C2C2C]/25 focus:outline-none focus:border-[#1f4f3f] transition-colors duration-300"
                    required
                  />
                </div>

                {/* Service */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[#2C2C2C]/50 text-[10px] tracking-[0.3em] uppercase font-medium">
                    Service Interested In
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="bg-white border border-[#2C2C2C]/10 px-4 py-3.5 text-[#2C2C2C] text-sm focus:outline-none focus:border-[#1f4f3f] transition-colors duration-300 appearance-none cursor-pointer"
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    {serviceOptions.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[#2C2C2C]/50 text-[10px] tracking-[0.3em] uppercase font-medium">
                    Your Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project, space, and timeline..."
                    rows={4}
                    className="bg-white border border-[#2C2C2C]/10 px-4 py-3.5 text-[#2C2C2C] text-sm placeholder:text-[#2C2C2C]/25 focus:outline-none focus:border-[#1f4f3f] transition-colors duration-300 resize-none"
                    required
                  />
                </div>

                {/* Submit */}
                <motion.button
                  onClick={handleSubmit}
                  disabled={loading}
                  className="group w-full bg-[#1f4f3f] hover:bg-[#163d30] disabled:opacity-70 flex items-center justify-between px-8 py-5 transition-colors duration-300 mt-2"
                  whileTap={{ scale: 0.99 }}
                >
                  <span className="text-[#F5F0E8] text-xs tracking-[0.25em] uppercase font-bold">
                    {loading ? "Sending..." : "Send Message"}
                  </span>
                  <motion.div
                    animate={{ rotate: loading ? 360 : 0 }}
                    transition={{
                      duration: 1,
                      repeat: loading ? Infinity : 0,
                      ease: "linear",
                    }}
                  >
                    <Send className="w-4 h-4 text-[#F5F0E8]" />
                  </motion.div>
                </motion.button>

                <p className="text-[#2C2C2C]/30 text-[10px] tracking-wide text-center">
                  We respond within 24 hours · Your data is never shared
                </p>
              </div>
            </motion.div>
          )}
        </div>

        {/* RIGHT — Green — Info */}
        <div
          ref={infoRef}
          className="bg-[#1f4f3f] px-10 md:px-16 py-20 flex flex-col justify-between gap-12"
        >
          {/* Contact Details */}
          <motion.div
            className="flex flex-col gap-10"
            initial={{ opacity: 0, y: 30 }}
            animate={isInfoInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease }}
          >
            <div>
              <motion.div
                className="flex items-center gap-3 mb-5"
                initial={{ opacity: 0, x: -16 }}
                animate={isInfoInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, ease }}
              >
                <span className="h-px w-8 bg-[#F5F0E8]/30" />
                <span className="text-[#F5F0E8]/40 text-[10px] tracking-[0.4em] uppercase font-medium">
                  Contact Details
                </span>
              </motion.div>
              <h2 className="text-[#F5F0E8] text-3xl md:text-4xl font-bold tracking-tight leading-tight">
                Find Us Here
              </h2>
            </div>

            {/* Address */}
            <Link
              href="https://maps.google.com/?q=Ridge+Studio+Architects+Ahmedabad"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-4"
            >
              <div className="w-10 h-10 border border-[#F5F0E8]/15 flex items-center justify-center shrink-0 group-hover:bg-[#F5F0E8]/10 transition-colors duration-300">
                <MapPin className="w-4 h-4 text-[#F5F0E8]/50 group-hover:text-[#F5F0E8] transition-colors duration-300" />
              </div>
              <div>
                <p className="text-[#F5F0E8]/35 text-[10px] tracking-[0.3em] uppercase font-medium mb-1.5">
                  Address
                </p>
                <p className="text-[#F5F0E8]/75 text-sm leading-relaxed group-hover:text-[#F5F0E8] transition-colors duration-300">
                  D6/50, Rohini sec 6,
                  <br />
                  Vishram chowk
                  <br />
                  Delhi — 110085
                </p>
              </div>
            </Link>

            {/* Phone */}
            <Link
              href="tel:+919953332509"
              className="group flex items-start gap-4"
            >
              <div className="w-10 h-10 border border-[#F5F0E8]/15 flex items-center justify-center shrink-0 group-hover:bg-[#F5F0E8]/10 transition-colors duration-300">
                <Phone className="w-4 h-4 text-[#F5F0E8]/50 group-hover:text-[#F5F0E8] transition-colors duration-300" />
              </div>
              <div>
                <p className="text-[#F5F0E8]/35 text-[10px] tracking-[0.3em] uppercase font-medium mb-1.5">
                  Phone
                </p>
                <p className="text-[#F5F0E8]/75 text-sm group-hover:text-[#F5F0E8] transition-colors duration-300">
                  +91 99533 32509
                </p>
              </div>
            </Link>

            {/* Email */}
            <Link
              href="mailto:ridgestudioarchitect25@gmail.com"
              className="group flex items-start gap-4"
            >
              <div className="w-10 h-10 border border-[#F5F0E8]/15 flex items-center justify-center shrink-0 group-hover:bg-[#F5F0E8]/10 transition-colors duration-300">
                <Mail className="w-4 h-4 text-[#F5F0E8]/50 group-hover:text-[#F5F0E8] transition-colors duration-300" />
              </div>
              <div>
                <p className="text-[#F5F0E8]/35 text-[10px] tracking-[0.3em] uppercase font-medium mb-1.5">
                  Email
                </p>
                <p className="text-[#F5F0E8]/75 text-sm group-hover:text-[#F5F0E8] transition-colors duration-300">
                  ridgestudioarchitect25@gmail.com
                </p>
              </div>
            </Link>

            {/* WhatsApp */}
            <Link
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between border border-[#F5F0E8]/15 px-5 py-4 hover:bg-[#F5F0E8]/5 transition-colors duration-300"
            >
              <div className="flex items-center gap-3">
                <span className="text-[#25D366] text-xl">●</span>
                <div>
                  <p className="text-[#F5F0E8]/35 text-[10px] tracking-[0.3em] uppercase font-medium">
                    WhatsApp
                  </p>
                  <p className="text-[#F5F0E8]/75 text-sm mt-0.5">
                    Chat with us directly
                  </p>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-[#F5F0E8]/30 group-hover:text-[#F5F0E8] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
            </Link>
          </motion.div>

          {/* Office Hours */}
          <motion.div
            className="flex flex-col gap-5"
            initial={{ opacity: 0, y: 24 }}
            animate={isInfoInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3, ease }}
          >
            <div className="flex items-center gap-3">
              <Clock className="w-4 h-4 text-[#F5F0E8]/30" />
              <p className="text-[#F5F0E8]/35 text-[10px] tracking-[0.35em] uppercase font-medium">
                Office Hours
              </p>
            </div>
            <div className="flex flex-col gap-3 border-t border-[#F5F0E8]/10 pt-5">
              {officeHours.map((h) => (
                <div key={h.day} className="flex items-center justify-between">
                  <span className="text-[#F5F0E8]/50 text-sm font-light">
                    {h.day}
                  </span>
                  <span
                    className={`text-sm font-medium ${h.time === "Closed" ? "text-[#F5F0E8]/25" : "text-[#F5F0E8]/80"}`}
                  >
                    {h.time}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex flex-col gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInfoInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.45, ease }}
          >
            <p className="text-[#F5F0E8]/35 text-[10px] tracking-[0.35em] uppercase font-medium">
              Follow Us
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-10 h-10 border border-[#F5F0E8]/15 flex items-center justify-center text-[#F5F0E8]/40 hover:text-[#F5F0E8] hover:border-[#F5F0E8]/40 hover:bg-[#F5F0E8]/5 transition-all duration-300"
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <s.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── GOOGLE MAPS ── */}
      <section className="w-full bg-[#F5F0E8] border-t border-[#2C2C2C]/10">
        <div className="px-10 md:px-16 xl:px-24 pt-16 pb-6">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-8 bg-[#1f4f3f]/40" />
            <span className="text-[#1f4f3f]/60 text-[10px] tracking-[0.4em] uppercase font-medium">
              Find Us
            </span>
          </div>
          <h3 className="text-[#2C2C2C] text-2xl font-bold tracking-tight mb-8">
            Our Studio Location
          </h3>
        </div>

        <div className="w-full h-105 relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.9!2d72.5713621!3d23.0395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDAyJzIyLjIiTiA3MsKwMzQnMTYuOSJF!5e0!3m2!1sen!2sin!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0, filter: "grayscale(20%) contrast(1.05)" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ridge Studio Architects Location"
          />
        </div>

        <div className="px-10 md:px-16 xl:px-24 py-6">
          <Link
            href="https://maps.app.goo.gl/rYFL3kfXHvHjzBpa7"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-[#1f4f3f] text-xs tracking-[0.25em] uppercase font-bold border-b border-[#1f4f3f]/30 pb-1 hover:border-[#1f4f3f] transition-colors duration-300"
          >
            Open in Google Maps
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
          </Link>
        </div>
      </section>
    </main>
  );
}
