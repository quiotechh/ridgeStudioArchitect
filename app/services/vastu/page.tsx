import ServicePageTemplate from "@/components/ServicePageTemplate";
import type { ServicePageData } from "@/components/ServicePageTemplate";

const data: ServicePageData = {
  heroLabel: "Vastu Shastra Consultation",
  heroHeading: ["Vastu", "Consultation."],
  heroSubtitle:
    "We integrate Vastu Shastra principles into every design — balancing energy flow, direction, and spatial harmony to create homes and offices that feel right from the inside out.",
  heroImage: "/vastu.jpg",

  overviewLabel: "The Service",
  overviewHeading: "Spaces Aligned With Positive Energy.",
  overviewParagraphs: [
    "Vastu Shastra is the ancient Indian science of spatial alignment — and when applied correctly, it creates spaces that feel balanced, productive, and harmonious. At Ridge Studio, we don't treat Vastu as a checklist. We integrate it seamlessly into the architecture and interior design so your space looks beautiful and feels right.",
    "Our Vastu consultation covers orientation, room placement, entry points, material selection, colour, and energy flow — all aligned with the five elements and directional principles of Vastu Shastra. We work with both new constructions and existing homes or offices.",
    "Whether you are building from scratch or correcting an existing space, our Vastu-compliant designs in Delhi ensure your environment supports health, prosperity, and peace of mind without compromising on aesthetics.",
  ],
  overviewStats: [
    { value: "100+", label: "Vastu Projects Completed" },
    { value: "New & Existing", label: "Constructions Covered" },
    { value: "100%", label: "Design-Integrated Approach" },
  ],
  overviewImage: "/vastu(1).jpg",

  offeringsLabel: "What Is Included",
  offeringsHeading: "Complete Vastu Design Service",
  offeringsSubtitle:
    "From site analysis to spatial planning — we deliver Vastu-compliant designs that are practical, modern, and aesthetically refined.",
  offerings: [
    {
      number: "01",
      title: "Site & Plot Analysis",
      description:
        "Evaluation of plot orientation, shape, surrounding environment, and entry direction to establish the Vastu foundation for your project.",
      icon: "◻",
    },
    {
      number: "02",
      title: "Room Placement & Zoning",
      description:
        "Directionally correct placement of bedrooms, kitchen, pooja room, living areas, and bathrooms as per Vastu Shastra principles.",
      icon: "◇",
    },
    {
      number: "03",
      title: "Main Entry & Door Alignment",
      description:
        "Identification of the most auspicious entry direction and door placement to invite positive energy into your home or office.",
      icon: "◈",
    },
    {
      number: "04",
      title: "Material & Colour Guidance",
      description:
        "Vastu-aligned colour palettes and material recommendations for each zone — integrated naturally into the interior design.",
      icon: "◎",
    },
    {
      number: "05",
      title: "Vastu Corrections for Existing Spaces",
      description:
        "Practical, non-demolition remedies for existing homes and offices — using design, colour, and element-based corrections.",
      icon: "○",
    },
    {
      number: "06",
      title: "Office & Commercial Vastu",
      description:
        "Vastu planning for offices, retail stores, and commercial spaces to support productivity, growth, and positive client energy.",
      icon: "▣",
    },
  ],

  process: [
    {
      step: "01",
      title: "Consultation & Assessment",
      description:
        "We begin with a detailed discussion of your space, goals, and concerns — followed by a site or plan analysis.",
    },
    {
      step: "02",
      title: "Vastu Report & Recommendations",
      description:
        "We prepare a detailed Vastu report with zone-wise recommendations, corrections, and design guidelines.",
    },
    {
      step: "03",
      title: "Design Integration",
      description:
        "Vastu principles are integrated directly into the architectural and interior design — no separate implementation needed.",
    },
    {
      step: "04",
      title: "Review & Handover",
      description:
        "Final design review to ensure full Vastu compliance, followed by handover of all documentation and guidelines.",
    },
  ],

  galleryImages: [
    {
      src: "/turnkey(1).jpeg",
      alt: "Vastu Compliant Home Entry",
      span: "wide",
    },
    {
      src: "/turnkey(2).jpeg",
      alt: "Vastu Living Room Design",
      span: "tall",
    },
    {
      src: "/UG FLOOR REAR BEDROOM VIEW 3.jpg",
      alt: "Vastu Kitchen Placement",
      span: "normal",
    },
    {
      src: "/drawing_room_inside.jpeg",
      alt: "Pooja Room Vastu Design",
      span: "normal",
    },
    {
      src: "/office.jpg",
      alt: "Vastu Office Layout",
      span: "normal",
    },
    {
      src: "/garden.jpg",
      alt: "Vastu Compliant Bedroom",
      span: "tall",
    },
  ],

  ctaLabel: "Get Vastu Consultation",
  ctaHeading: ["Want a", "Vastu-aligned", "space?"],
  ctaSubtitle:
    "From plot analysis to final design — Ridge Studio delivers Vastu-compliant architecture and interiors in Delhi that are beautiful, balanced, and built with purpose.",
};

export default function VastuPage() {
  return <ServicePageTemplate data={data} />;
}
