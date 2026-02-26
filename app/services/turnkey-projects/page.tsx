import ServicePageTemplate from "@/components/ServicePageTemplate";
import type { ServicePageData } from "@/components/ServicePageTemplate";

const data: ServicePageData = {
  heroLabel: "Turnkey Solutions",
  heroHeading: ["Turnkey", "Projects."],
  heroSubtitle:
    "Complete end-to-end project delivery for residential and commercial builds. From first sketch to final handover — we manage everything.",
  heroImage: "/turnkey.jpeg",

  overviewLabel: "The Service",
  overviewHeading: "One Team. Start to Finish.",
  overviewParagraphs: [
    "A turnkey project means one thing: you hand us the keys to your vision, and we hand you back a finished space. No fragmented teams, no miscommunication between architects, contractors, and vendors — just one unified studio delivering your project from concept to completion.",
    "Ridge Studio manages every phase — design, approvals, procurement, construction, finishing, and furnishing. Our in-house coordination eliminates the gaps that cause delays, budget overruns, and quality failures on conventional projects.",
    "Whether it is a luxury villa or a commercial office, our turnkey service gives you the peace of mind that comes from having one accountable team who owns the outcome.",
  ],
  overviewStats: [
    { value: "80+", label: "Turnkey Deliveries" },
    { value: "100%", label: "In-House Execution" },
    { value: "0", label: "Hand-offs" },
  ],
  overviewImage: "/UG FLOOR REAR BEDROOM VIEW 4.jpg",

  offeringsLabel: "What Is Included",
  offeringsHeading: "Full Scope Delivery",
  offeringsSubtitle:
    "Everything under one roof — from architectural design to the last coat of paint. No subcontractor coordination required from your side.",
  offerings: [
    {
      number: "01",
      title: "Architecture & Planning",
      description:
        "Complete architectural design, municipal approvals, and construction documentation handled by our in-house team.",
      icon: "◻",
    },
    {
      number: "02",
      title: "Interior Design",
      description:
        "Full interior design including spatial planning, material selection, furniture layout, and custom millwork.",
      icon: "◇",
    },
    {
      number: "03",
      title: "Construction Management",
      description:
        "On-site project management, contractor coordination, quality control, and daily progress reporting.",
      icon: "◈",
    },
    {
      number: "04",
      title: "MEP & Services",
      description:
        "Mechanical, electrical, plumbing, HVAC, and fire safety — all coordinated and installed as part of the turnkey package.",
      icon: "◎",
    },
    {
      number: "05",
      title: "Procurement & Logistics",
      description:
        "Material sourcing, vendor management, and logistics coordination. We leverage our supplier network for the best quality and pricing.",
      icon: "○",
    },
    {
      number: "06",
      title: "Furnishing & Handover",
      description:
        "Complete furnishing, accessorising, deep cleaning, and a documented handover with warranty information for every installation.",
      icon: "▣",
    },
  ],

  process: [
    {
      step: "01",
      title: "Scope & Budget",
      description:
        "We define the complete project scope, establish a realistic budget, and create a detailed timeline with milestones.",
    },
    {
      step: "02",
      title: "Design Phase",
      description:
        "Architecture, interiors, MEP — all designed concurrently by our integrated team. No silos, no coordination gaps.",
    },
    {
      step: "03",
      title: "Construction",
      description:
        "Managed construction with daily oversight, weekly client updates, and strict quality checkpoints at every stage.",
    },
    {
      step: "04",
      title: "Finishing & Handover",
      description:
        "Final finishes, furniture installation, snagging, and a complete walkthrough. You receive a ready-to-use space.",
    },
  ],

  galleryImages: [
    { src: "/turnkey(2).jpeg", alt: "Villa Construction", span: "wide" },
    { src: "/bathroom(1).jpeg", alt: "Interior Finishing", span: "tall" },
    {
      src: "/kitchen_upperview.jpeg",
      alt: "Kitchen Installation",
      span: "normal",
    },
    { src: "/living room.jpeg", alt: "Completed Living Room", span: "normal" },
    { src: "/hero/tv wall.png", alt: "Commercial Fit-out", span: "normal" },
    { src: "/hall.jpeg", alt: "Final Handover", span: "tall" },
  ],

  ctaLabel: "Go Turnkey",
  ctaHeading: ["Want a", "hassle-free", "build?"],
  ctaSubtitle:
    "One team, one vision, one handover. Ridge Studio delivers complete turnkey projects so you can focus on what matters most.",
};

export default function TurnkeyProjectsPage() {
  return <ServicePageTemplate data={data} />;
}
