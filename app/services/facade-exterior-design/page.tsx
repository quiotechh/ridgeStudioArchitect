import ServicePageTemplate from "@/components/ServicePageTemplate";
import type { ServicePageData } from "@/components/ServicePageTemplate";

const data: ServicePageData = {
  heroLabel: "Facade Design",
  heroHeading: ["Facade &", "Exterior", "Design."],
  heroSubtitle:
    "A building's facade is its first impression and lasting identity. We design exteriors that command attention, define streetscapes, and stand the test of time.",
  heroImage: "/services/facade-hero.jpg",

  overviewLabel: "The Service",
  overviewHeading: "The Face of Your Building",
  overviewParagraphs: [
    "A facade is not just a skin — it is a statement. At Ridge Studio, we design building exteriors that balance aesthetic ambition with engineering reality. Every material choice, every proportion, every shadow line is deliberate.",
    "We work across residential, commercial, and institutional projects — designing facades that respond to climate, context, and the building's intended character. Whether minimal or expressive, our exteriors are always considered.",
    "Our facade design process integrates structural coordination, waterproofing detailing, and material specification to ensure that what looks stunning on a render performs equally well in the real world for decades to come.",
  ],
  overviewStats: [
    { value: "70+", label: "Facades Designed" },
    { value: "15+", label: "Material Systems" },
    { value: "100%", label: "Weather-Tested" },
  ],
  overviewImage: "/services/facade-overview.jpg",

  offeringsLabel: "What We Offer",
  offeringsHeading: "Facade Services",
  offeringsSubtitle:
    "Complete exterior design from concept to cladding specification — creating buildings that are as impressive outside as they are inside.",
  offerings: [
    {
      number: "01",
      title: "Elevation Design",
      description:
        "Proportioned, detailed elevation drawings that define the building's visual character — balancing solid, void, texture, and colour.",
      icon: "◻",
    },
    {
      number: "02",
      title: "Material & Cladding Selection",
      description:
        "ACP, HPL, stone, glass, timber, perforated metal, terracotta — we specify the right cladding system for every project and climate.",
      icon: "◇",
    },
    {
      number: "03",
      title: "3D Facade Visualisation",
      description:
        "Photorealistic renders and animations that show exactly how the facade will look — at different times of day and in different lighting conditions.",
      icon: "◈",
    },
    {
      number: "04",
      title: "Facade Lighting Design",
      description:
        "Exterior lighting that transforms the building after dark — wash lights, accent lighting, and programmable LED systems.",
      icon: "◎",
    },
    {
      number: "05",
      title: "Signage & Branding Integration",
      description:
        "Building signage, brand elements, and wayfinding integrated into the facade design — not applied as afterthoughts.",
      icon: "○",
    },
    {
      number: "06",
      title: "Facade Renovation & Retrofit",
      description:
        "Updating tired facades with modern cladding, improved insulation, and contemporary detailing — a face-lift for your building.",
      icon: "▣",
    },
  ],

  process: [
    {
      step: "01",
      title: "Context Study",
      description:
        "Street context, neighbouring buildings, sun path analysis, and regulatory constraints — we understand the environment before we design within it.",
    },
    {
      step: "02",
      title: "Concept Design",
      description:
        "Massing studies, material explorations, and proportion studies. Multiple facade options presented with 3D visualisations.",
    },
    {
      step: "03",
      title: "Detail & Specification",
      description:
        "Section details, fixing systems, waterproofing layers, and material specifications. Every joint and junction resolved on paper.",
    },
    {
      step: "04",
      title: "Execution Support",
      description:
        "Mock-up reviews, sample approvals, and on-site coordination with cladding contractors to ensure design fidelity.",
    },
  ],

  galleryImages: [
    { src: "/services/facade-gallery-01.jpg", alt: "Modern Commercial Facade", span: "tall" },
    { src: "/services/facade-gallery-02.jpg", alt: "Residential Elevation", span: "normal" },
    { src: "/services/facade-gallery-03.jpg", alt: "Perforated Metal Screen", span: "normal" },
    { src: "/services/facade-gallery-04.jpg", alt: "Facade Lighting", span: "wide" },
    { src: "/services/facade-gallery-05.jpg", alt: "Stone Cladding Detail", span: "tall" },
    { src: "/services/facade-gallery-06.jpg", alt: "Glass Curtain Wall", span: "normal" },
  ],

  ctaLabel: "Design Your Facade",
  ctaHeading: ["Ready to give", "your building", "a new face?"],
  ctaSubtitle:
    "From concept renders to cladding installation — Ridge Studio designs facades that make your building a landmark.",
};

export default function FacadeExteriorDesignPage() {
  return <ServicePageTemplate data={data} />;
}
