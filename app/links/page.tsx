"use client";

// import Image from "next/image";
// import Link from "next/link";
// import {
//   Globe,
//   Instagram,
//   Phone,
//   Mail,
//   Briefcase,
//   MessageCircle,
// } from "lucide-react";

// export default function LinksPage() {
//   return (
//     <main className="min-h-screen bg-[#1f4f3f] flex items-center justify-center px-4">
//       <div className="w-full max-w-sm bg-[#f6f3ee] rounded-2xl shadow-xl p-6 text-center">

//         {/* Logo */}
//         <div className="flex justify-center mb-3">
//           <Image
//             src="/logo.png"
//             alt="Ridge Studio Architects"
//             width={90}
//             height={90}
//             priority
//           />
//         </div>

//         {/* Tagline */}
//         <p className="text-sm text-gray-600 mb-6">
//           Architecture • Interior • Design
//         </p>

//         {/* Links */}
//         <div className="space-y-3">
//           <LinkButton
//             href="https://ridgestudioarchitects.com"
//             icon={<Globe size={18} />}
//             label="Website"
//           />

//           <LinkButton
//             href="https://ridgestudioarchitects.com/portfolio"
//             icon={<Briefcase size={18} />}
//             label="Portfolio"
//           />

//           <LinkButton
//             href="https://instagram.com/ridgestudioarchitects"
//             icon={<Instagram size={18} />}
//             label="Instagram"
//           />

//           <LinkButton
//             href="https://wa.me/91XXXXXXXXXX"
//             icon={<MessageCircle size={18} />}
//             label="WhatsApp"
//           />

//           <LinkButton
//             href="tel:+91XXXXXXXXXX"
//             icon={<Phone size={18} />}
//             label="Call Us"
//           />

//           <LinkButton
//             href="mailto:info@ridgestudioarchitects.com"
//             icon={<Mail size={18} />}
//             label="Email"
//           />
//         </div>

//         {/* Footer */}
//         <p className="text-xs text-gray-500 mt-6">
//           © Ridge Studio Architects
//         </p>
//       </div>
//     </main>
//   );
// }

// function LinkButton({
//   href,
//   icon,
//   label,
// }: {
//   href: string;
//   icon: React.ReactNode;
//   label: string;
// }) {
//   return (
//     <Link
//       href={href}
//       target="_blank"
//       className="flex items-center justify-center gap-2 w-full bg-[#1f4f3f] text-white py-3 rounded-xl font-medium hover:opacity-90 transition"
//     >
//       {icon}
//       {label}
//     </Link>
//   );
// }

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
            src="/ridge_logo.png"
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
          Architecture • Interior • Design
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
