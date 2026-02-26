import ServicePageTemplate from "@/components/ServicePageTemplate";
import type { ServicePageData } from "@/components/ServicePageTemplate";

const data: ServicePageData = {
  heroLabel: "Residential Design",
  heroHeading: ["Residential", "Interiors &", "Exteriors."],
  heroSubtitle:
    "Homes that feel inevitable — designed around how you live, crafted with materials that endure, and finished with precision that shows.",
  heroImage: "/pink bedroom.jpeg",

  overviewLabel: "The Service",
  overviewHeading: "Your Home, Perfected",
  overviewParagraphs: [
    "A home is the most personal space you will ever inhabit. At Ridge Studio, we approach residential design with deep empathy — understanding how you live, how you entertain, how you rest, and what brings you comfort.",
    "From compact apartments to sprawling villas, we design every room as a complete environment. Lighting, proportion, material, and colour are resolved together so the final result feels cohesive, calm, and unmistakably yours.",
    "Our residential work extends beyond interiors to the facade and landscaping — because a home is experienced from the outside in. We design the complete picture.",
  ],
  overviewStats: [
    { value: "180+", label: "Homes Designed" },
    { value: "12+", label: "Years Experience" },
    { value: "100%", label: "Custom Design" },
  ],
  overviewImage: "/services/residential/final elevation.jpeg",

  offeringsLabel: "What We Offer",
  offeringsHeading: "Complete Home Design",
  offeringsSubtitle:
    "Every room, every surface, every detail — from master bedrooms to garden pathways, we design homes that are built to be lived in.",
  offerings: [
    {
      number: "01",
      title: "Living & Dining Spaces",
      description:
        "The heart of your home. Open-plan living, intimate dining, and family rooms designed for warmth, light, and effortless entertaining.",
      icon: "◻",
    },
    {
      number: "02",
      title: "Bedrooms & Private Quarters",
      description:
        "Restful retreats with considered lighting, custom wardrobes, and material palettes that promote calm and comfort.",
      icon: "◇",
    },
    {
      number: "03",
      title: "Kitchen Design",
      description:
        "Functional, beautiful kitchens with optimised workflows, premium fixtures, and finishes that stand up to daily life.",
      icon: "◈",
    },
    {
      number: "04",
      title: "Bathroom & Spa Design",
      description:
        "Luxurious, spa-inspired bathrooms with precision tile work, premium fittings, and intelligent storage solutions.",
      icon: "◎",
    },
    {
      number: "05",
      title: "Residential Facades",
      description:
        "Exterior elevation design that gives your home identity — from contemporary minimalism to warm traditional aesthetics.",
      icon: "○",
    },
    {
      number: "06",
      title: "Pooja Room & Speciality Spaces",
      description:
        "Custom-designed pooja rooms, home offices, libraries, and entertainment zones — spaces that reflect your lifestyle and values.",
      icon: "▣",
    },
  ],

  process: [
    {
      step: "01",
      title: "Lifestyle Discovery",
      description:
        "We learn how you live. Family size, daily routines, entertaining habits, storage needs, and aesthetic preferences — everything matters.",
    },
    {
      step: "02",
      title: "Concept Design",
      description:
        "Mood boards, spatial layouts, and 3D visualisations. We present complete design concepts for your review and refinement.",
    },
    {
      step: "03",
      title: "Detail & Procurement",
      description:
        "Working drawings, material selection, vendor coordination, and furniture procurement. Every element is specified before work begins.",
    },
    {
      step: "04",
      title: "Build & Handover",
      description:
        "On-site supervision, quality checks at every stage, and a final walkthrough. We don't leave until you love every inch of your home.",
    },
  ],

  galleryImages: [
    {
      src: "/hero/living_room.jpeg",
      alt: "Living Room Interior",
      span: "tall",
    },
    { src: "/hero/gray_bedroom.jpeg", alt: "Master Bedroom", span: "normal" },
    { src: "/hero/kitchen.png", alt: "Modern Kitchen", span: "normal" },
    { src: "/elevation.jpeg", alt: "Villa Exterior", span: "wide" },
    { src: "/bathroom.jpeg", alt: "Bathroom Design", span: "tall" },
    { src: "/DINNING TABLE  (1).jpg", alt: "Dining Space", span: "normal" },
  ],

  ctaLabel: "Design Your Dream Home",
  ctaHeading: ["Ready to build", "your dream", "home?"],
  ctaSubtitle:
    "From first sketch to final handover — Ridge Studio transforms your vision into a home that is uniquely, unmistakably yours.",
};

export default function ResidentialInteriorsExteriorsPage() {
  return <ServicePageTemplate data={data} />;
}
