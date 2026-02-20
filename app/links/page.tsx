"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Globe,
  Instagram,
  Briefcase,
  MessageCircle,
  Phone,
  Mail,
} from "lucide-react";

const links = [
  {
    label: "Website",
    href: "https://ridgestudioarchitects.com",
    icon: Globe,
  },
  {
    label: "Portfolio",
    href: "https://ridgestudioarchitects.com/portfolio",
    icon: Briefcase,
  },
  {
    label: "Instagram",
    href: "https://instagram.com/ridgestudioarchitects",
    icon: Instagram,
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/919953332509",
    icon: MessageCircle,
  },
  {
    label: "Call",
    href: "tel:+919953332509",
    icon: Phone,
  },
  {
    label: "Email",
    href: "mailto:ridgestudioarchitect25@gmail.com",
    icon: Mail,
  },
];

export default function LinksPage() {
  return (
    <main className="min-h-screen bg-[#1f4f3f] flex justify-center px-4 py-10">
      <div className="w-full max-w-md text-center">
        {/* Logo */}
        {/* Logo */}
        <div className="flex justify-center -mb-2">
          <Image
            src="/logo/ridge_logo.png"
            alt="Ridge Studio Architects"
            width={120}
            height={120}
            className="object-contain"
            priority
          />
        </div>

        {/* Title */}
        <h1 className="text-xl font-semibold text-white leading-tight mt-1">
          Ridge Studio Architects
        </h1>
        <p className="text-sm text-white/80 mb-6 mt-0">
          Architecture • Interior • Structure
        </p>

        {/* Links */}
        <div className="space-y-4">
          {links.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.label}
                href={item.href}
                target="_blank"
                className="flex items-center justify-center gap-3 w-full bg-[#f6f3ee] text-[#1f4f3f] py-3 rounded-xl font-medium shadow hover:scale-[1.02] transition"
              >
                <Icon size={18} />
                {item.label}
              </Link>
            );
          })}
        </div>

        {/* Footer */}
        <p className="text-xs text-white/60 mt-10">© Ridge Studio Architects</p>
      </div>
    </main>
  );
}
