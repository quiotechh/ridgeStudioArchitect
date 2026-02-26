import ServicePageTemplate from "@/components/ServicePageTemplate";
import type { ServicePageData } from "@/components/ServicePageTemplate";

const data: ServicePageData = {
  heroLabel: "Landscape Design",
  heroHeading: ["Landscaping", "That", "Breathes."],
  heroSubtitle:
    "Outdoor spaces designed with the same precision as our interiors — gardens, courtyards, and terraces that extend architecture into nature.",
  heroImage: "/outdoor.jpeg",

  overviewLabel: "The Service",
  overviewHeading: "Where Architecture Meets Nature",
  overviewParagraphs: [
    "At Ridge Studio, we believe the landscape is an integral part of the building. A well-designed garden does not just surround a structure — it completes it. Our landscape design extends the architectural language outward, creating seamless transitions between built and natural environments.",
    "We work with native and climate-appropriate plantings, durable hardscape materials, and water-efficient irrigation systems. Every landscape we design is not only beautiful on day one — it is designed to mature gracefully over decades.",
    "From intimate courtyard gardens to expansive commercial grounds, our approach balances aesthetics, ecology, and practicality in every project.",
  ],
  overviewStats: [
    { value: "60+", label: "Landscapes Designed" },
    { value: "100%", label: "Climate-Responsive" },
    { value: "12+", label: "Years Experience" },
  ],
  overviewImage: "/DINNING TABLE  (2).jpg",

  offeringsLabel: "What We Offer",
  offeringsHeading: "Landscape Services",
  offeringsSubtitle:
    "Complete landscape design from concept to installation — gardens, terraces, pathways, and outdoor living spaces crafted with intention.",
  offerings: [
    {
      number: "01",
      title: "Garden Design",
      description:
        "Residential and commercial gardens designed with layered planting, seasonal colour, and a deep understanding of local climate and soil conditions.",
      icon: "◻",
    },
    {
      number: "02",
      title: "Hardscape & Pathways",
      description:
        "Stone pathways, paved courtyards, retaining walls, and outdoor flooring — durable materials chosen for beauty and longevity.",
      icon: "◇",
    },
    {
      number: "03",
      title: "Terrace & Rooftop Gardens",
      description:
        "Urban green spaces on terraces and rooftops — lightweight planting systems, container gardens, and outdoor lounging areas.",
      icon: "◈",
    },
    {
      number: "04",
      title: "Water Features & Irrigation",
      description:
        "Fountains, reflecting pools, and water channels integrated with efficient drip and sprinkler irrigation systems.",
      icon: "◎",
    },
    {
      number: "05",
      title: "Outdoor Lighting",
      description:
        "Landscape lighting design that transforms gardens after dark — pathway lights, uplighting, and accent fixtures for drama and safety.",
      icon: "○",
    },
    {
      number: "06",
      title: "Outdoor Living Spaces",
      description:
        "Pergolas, gazebos, outdoor kitchens, and seating areas — designed to extend your living space into the open air.",
      icon: "▣",
    },
  ],

  process: [
    {
      step: "01",
      title: "Site Assessment",
      description:
        "Soil analysis, sun mapping, drainage study, and existing vegetation survey. We understand the land before we design on it.",
    },
    {
      step: "02",
      title: "Concept Design",
      description:
        "Layout plans, planting palettes, material selections, and 3D visualisations of the proposed landscape.",
    },
    {
      step: "03",
      title: "Detailing",
      description:
        "Planting plans, hardscape specifications, irrigation layouts, and lighting positions — every element documented.",
    },
    {
      step: "04",
      title: "Installation",
      description:
        "On-site supervision of earthwork, planting, hardscape installation, and irrigation commissioning. We ensure every plant is placed with care.",
    },
  ],

  galleryImages: [
    { src: "/garden.jpg", alt: "Garden Design", span: "tall" },
    { src: "/terrace-landscape.jpeg", alt: "Stone Pathway", span: "normal" },
    { src: "/terrace-garden.jpeg", alt: "Terrace Garden", span: "normal" },
    { src: "/landscape water.jpg", alt: "Water Feature", span: "wide" },
    { src: "/outdoor-seating.jpeg", alt: "Outdoor Seating", span: "normal" },
    { src: "/landscape lighting.jpg", alt: "Landscape Lighting", span: "tall" },
  ],

  ctaLabel: "Design Your Outdoors",
  ctaHeading: ["Ready to", "transform your", "outdoors?"],
  ctaSubtitle:
    "From courtyard gardens to sprawling estates — Ridge Studio designs landscapes that extend your architecture into nature.",
};

export default function LandscapingPage() {
  return <ServicePageTemplate data={data} />;
}
