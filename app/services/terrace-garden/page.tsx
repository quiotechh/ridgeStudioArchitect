import ServicePageTemplate from "@/components/ServicePageTemplate";
import type { ServicePageData } from "@/components/ServicePageTemplate";

const data: ServicePageData = {
  heroLabel: "Terrace Garden Design",
  heroHeading: ["Terrace", "Gardens."],
  heroSubtitle:
    "Transform your rooftop into a lush, functional retreat. We design terrace gardens that blend landscape, hardscape, and ambient lighting to create serene outdoor living spaces.",
  heroImage: "/terrace-garden.jpeg",

  overviewLabel: "The Service",
  overviewHeading: "Your Private Green Escape.",
  overviewParagraphs: [
    "A terrace garden is more than greenery on a rooftop — it is an extension of your living space. At Ridge Studio, we design terrace gardens that are as functional as they are beautiful, blending soft landscaping, hardscape elements, and curated lighting into a cohesive outdoor retreat.",
    "We handle everything from structural waterproofing assessment and soil planning to plant selection, irrigation systems, and ambient lighting. Every terrace garden we design is tailored to the climate, usage, and aesthetic of the space it sits above.",
    "Whether you want a serene zen corner, a social entertaining space, or a productive kitchen garden — we design terrace gardens in Delhi that are built to last and easy to maintain.",
  ],
  overviewStats: [
    { value: "50+", label: "Terrace Gardens Designed" },
    { value: "100%", label: "Custom Layouts" },
    { value: "360°", label: "End-to-End Service" },
  ],
  overviewImage: "/terrace-garden(1).jpeg",

  offeringsLabel: "What Is Included",
  offeringsHeading: "Complete Terrace Garden Service",
  offeringsSubtitle:
    "From waterproofing checks to the last plant pot — we design and deliver your terrace garden as a complete, ready-to-enjoy space.",
  offerings: [
    {
      number: "01",
      title: "Landscape Design & Layout",
      description:
        "Custom terrace garden layout with zoning for seating, planting, pathways, and focal elements tailored to your rooftop dimensions.",
      icon: "◻",
    },
    {
      number: "02",
      title: "Plant Selection & Placement",
      description:
        "Curated plant palette suited to Delhi's climate — low maintenance, seasonal, and aesthetically cohesive with your interior style.",
      icon: "◇",
    },
    {
      number: "03",
      title: "Hardscape & Flooring",
      description:
        "Decking, stone paving, raised planters, pergolas, and seating structures designed for durability and visual appeal.",
      icon: "◈",
    },
    {
      number: "04",
      title: "Irrigation & Drainage",
      description:
        "Automated drip irrigation, proper drainage planning, and waterproofing coordination to protect your terrace structure.",
      icon: "◎",
    },
    {
      number: "05",
      title: "Ambient Lighting",
      description:
        "Outdoor lighting design including string lights, spotlights, and pathway lighting to make your terrace usable after dark.",
      icon: "○",
    },
    {
      number: "06",
      title: "Furniture & Accessories",
      description:
        "Weather-resistant outdoor furniture sourcing, accessory styling, and final dressing to complete the terrace experience.",
      icon: "▣",
    },
  ],

  process: [
    {
      step: "01",
      title: "Site Assessment",
      description:
        "We assess your terrace — dimensions, load capacity, sun exposure, waterproofing condition, and existing utilities.",
    },
    {
      step: "02",
      title: "Concept & Design",
      description:
        "We present a full terrace garden concept with layout, plant palette, material selections, and lighting plan for your approval.",
    },
    {
      step: "03",
      title: "Execution",
      description:
        "Our team manages all installation — hardscape, planting, irrigation, lighting — with minimal disruption to your home.",
    },
    {
      step: "04",
      title: "Handover & Care Guide",
      description:
        "We hand over a fully styled terrace garden along with a seasonal maintenance guide so your garden stays lush year-round.",
    },
  ],

  galleryImages: [
    { src: "/terrace.jpeg", alt: "Rooftop Garden Seating Area", span: "wide" },
    {
      src: "/terrace-landscape.jpeg",
      alt: "Lush Terrace Planting",
      span: "tall",
    },
    { src: "/outdoor.jpeg", alt: "Hardscape & Decking", span: "normal" },
    {
      src: "/outdoor-seating.jpeg",
      alt: "Ambient Terrace Lighting",
      span: "normal",
    },
    {
      src: "/terrace-garden(3).jpg",
      alt: "Pergola & Shade Structure",
      span: "normal",
    },
    {
      src: "/terrace-garden(2).jpg",
      alt: "Completed Terrace Garden",
      span: "tall",
    },
  ],

  ctaLabel: "Build Your Garden",
  ctaHeading: ["Want a", "rooftop", "retreat?"],
  ctaSubtitle:
    "From concept to final plant — Ridge Studio designs and delivers terrace gardens in Delhi that are beautiful, functional, and built to last.",
};

export default function TerraceGardenPage() {
  return <ServicePageTemplate data={data} />;
}
