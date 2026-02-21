import ServicePageTemplate from "@/components/ServicePageTemplate";
import type { ServicePageData } from "@/components/ServicePageTemplate";

const data: ServicePageData = {
  heroLabel: "Commercial Design",
  heroHeading: ["Commercial", "Interiors &", "Exteriors."],
  heroSubtitle:
    "Workplaces, retail spaces, and corporate environments designed to embody your brand, impress your clients, and empower your team.",
  heroImage: "/services/commercial-hero.jpg",

  overviewLabel: "The Service",
  overviewHeading: "Spaces That Work as Hard as You Do",
  overviewParagraphs: [
    "A commercial space is more than a place of business — it is a physical extension of your brand. At Ridge Studio, we design offices, showrooms, retail stores, and corporate headquarters that communicate authority, innovation, and intent from the moment someone walks through the door.",
    "We collaborate closely with business owners to understand their operational needs, brand identity, and growth trajectory. Every design decision — from spatial planning to material selection — is driven by purpose, not decoration.",
    "Whether it is a 500 sq ft boutique or a 50,000 sq ft corporate campus, we bring the same obsessive attention to detail. The result? Spaces that attract talent, retain clients, and tell your story without saying a word.",
  ],
  overviewStats: [
    { value: "120+", label: "Commercial Projects" },
    { value: "50+", label: "Corporate Clients" },
    { value: "98%", label: "On-Time Delivery" },
  ],
  overviewImage: "/services/commercial-overview.jpg",

  offeringsLabel: "What We Offer",
  offeringsHeading: "Our Scope",
  offeringsSubtitle:
    "End-to-end commercial design covering every touchpoint — from the facade your clients see first to the private offices where decisions are made.",
  offerings: [
    {
      number: "01",
      title: "Office Interiors",
      description:
        "Open plans, cabins, conference rooms, breakout areas, and co-working zones — designed for productivity, collaboration, and well-being.",
      icon: "◻",
    },
    {
      number: "02",
      title: "Retail & Showroom Design",
      description:
        "Spaces that convert. From product display systems to customer flow mapping, we design retail environments that drive footfall and sales.",
      icon: "◇",
    },
    {
      number: "03",
      title: "Reception & Lobbies",
      description:
        "The first impression of your business. We create lobbies that are welcoming, authoritative, and unmistakably on-brand.",
      icon: "◈",
    },
    {
      number: "04",
      title: "Commercial Facades",
      description:
        "Exterior design that turns heads. ACP, glass, stone, and composite cladding systems engineered for impact and durability.",
      icon: "◎",
    },
    {
      number: "05",
      title: "Restaurant & Hospitality",
      description:
        "Dining spaces, cafes, and hospitality interiors designed for atmosphere, efficiency, and memorable guest experiences.",
      icon: "○",
    },
    {
      number: "06",
      title: "Clinic & Healthcare Design",
      description:
        "Clean, calming, and compliant. Medical and wellness spaces that prioritise patient comfort and clinical functionality.",
      icon: "▣",
    },
  ],

  process: [
    {
      step: "01",
      title: "Brand Discovery",
      description:
        "We study your brand DNA — values, audience, culture, and competitive positioning. Design begins with deep understanding.",
    },
    {
      step: "02",
      title: "Space Planning",
      description:
        "Optimised layouts, traffic flow analysis, and zoning. We ensure every square foot works harder for your business.",
    },
    {
      step: "03",
      title: "Design & Detailing",
      description:
        "3D visualisations, material palettes, furniture specs, and MEP coordination. Every detail resolved before construction begins.",
    },
    {
      step: "04",
      title: "Execution & Handover",
      description:
        "On-site supervision, quality control, and final commissioning. We deliver turnkey-ready spaces, on time and on budget.",
    },
  ],

  galleryImages: [
    { src: "/services/commercial-gallery-01.jpg", alt: "Corporate Office Interior", span: "tall" },
    { src: "/services/commercial-gallery-02.jpg", alt: "Retail Showroom", span: "normal" },
    { src: "/services/commercial-gallery-03.jpg", alt: "Reception Lobby", span: "normal" },
    { src: "/services/commercial-gallery-04.jpg", alt: "Restaurant Interior", span: "wide" },
    { src: "/services/commercial-gallery-05.jpg", alt: "Conference Room", span: "normal" },
    { src: "/services/commercial-gallery-06.jpg", alt: "Commercial Facade", span: "tall" },
  ],

  ctaLabel: "Start Your Commercial Project",
  ctaHeading: ["Transform your", "workspace", "today."],
  ctaSubtitle:
    "From initial concept to final handover — Ridge Studio delivers commercial spaces that elevate your business and inspire your team.",
};

export default function CommercialInteriorsExteriorsPage() {
  return <ServicePageTemplate data={data} />;
}
