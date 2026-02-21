import ServicePageTemplate from "@/components/ServicePageTemplate";
import type { ServicePageData } from "@/components/ServicePageTemplate";

const data: ServicePageData = {
  heroLabel: "Architecture & Planning",
  heroHeading: ["Architecture", "and", "Planning."],
  heroSubtitle:
    "From site analysis to construction drawings — rigorous architectural planning with a creative eye, delivered with precision at every stage.",
  heroImage: "/services/architecture-hero.jpg",

  overviewLabel: "The Service",
  overviewHeading: "From Blueprint to Reality",
  overviewParagraphs: [
    "Architecture is the foundation of everything we do. At Ridge Studio, we believe that great buildings begin with great planning — a deep understanding of site, climate, context, and the people who will use them.",
    "Our architectural services span from initial concept sketches to fully detailed construction documentation. We handle municipal approvals, structural coordination, and contractor briefings — ensuring nothing is left to chance.",
    "Whether you are building a single family home or a multi-storey commercial complex, our planning process is rigorous, transparent, and designed to prevent problems before they occur.",
  ],
  overviewStats: [
    { value: "340+", label: "Projects Planned" },
    { value: "100%", label: "Approval Rate" },
    { value: "0", label: "Tolerance for Error" },
  ],
  overviewImage: "/services/architecture-overview.jpg",

  offeringsLabel: "What We Offer",
  offeringsHeading: "Architectural Services",
  offeringsSubtitle:
    "Complete architectural planning from site selection to construction supervision — every stage handled with precision and care.",
  offerings: [
    {
      number: "01",
      title: "Site Analysis & Feasibility",
      description:
        "Topographical surveys, orientation studies, setback analysis, and regulatory compliance checks before a single line is drawn.",
      icon: "◻",
    },
    {
      number: "02",
      title: "Concept & Schematic Design",
      description:
        "Initial design concepts, spatial planning, massing studies, and 3D visualisations to explore the full potential of your site.",
      icon: "◇",
    },
    {
      number: "03",
      title: "Working Drawings",
      description:
        "Fully detailed construction drawings including plans, sections, elevations, and specifications — ready for execution.",
      icon: "◈",
    },
    {
      number: "04",
      title: "Municipal Approvals",
      description:
        "We handle all regulatory submissions, liaison with local authorities, and ensure full compliance with building codes and bylaws.",
      icon: "◎",
    },
    {
      number: "05",
      title: "MEP Coordination",
      description:
        "Integrated mechanical, electrical, and plumbing design coordination to ensure all services are seamlessly incorporated.",
      icon: "○",
    },
    {
      number: "06",
      title: "Construction Supervision",
      description:
        "On-site architectural supervision to ensure design intent is maintained throughout the construction process.",
      icon: "▣",
    },
  ],

  process: [
    {
      step: "01",
      title: "Survey & Analysis",
      description:
        "Site survey, soil testing, topography mapping, and regulatory framework study. We understand the site before we design on it.",
    },
    {
      step: "02",
      title: "Design Development",
      description:
        "From concept to detailed design — floor plans, elevations, sections, and 3D models refined through multiple review cycles.",
    },
    {
      step: "03",
      title: "Documentation",
      description:
        "Complete construction documentation, specifications, BOQ preparation, and tender-ready drawing sets.",
    },
    {
      step: "04",
      title: "Site Supervision",
      description:
        "Regular site visits, contractor coordination, progress monitoring, and quality assurance until project completion.",
    },
  ],

  galleryImages: [
    { src: "/services/architecture-gallery-01.jpg", alt: "Architectural Plans", span: "wide" },
    { src: "/services/architecture-gallery-02.jpg", alt: "3D Visualisation", span: "tall" },
    { src: "/services/architecture-gallery-03.jpg", alt: "Site Analysis", span: "normal" },
    { src: "/services/architecture-gallery-04.jpg", alt: "Building Under Construction", span: "normal" },
    { src: "/services/architecture-gallery-05.jpg", alt: "Completed Project", span: "tall" },
    { src: "/services/architecture-gallery-06.jpg", alt: "Working Drawings", span: "normal" },
  ],

  ctaLabel: "Plan Your Project",
  ctaHeading: ["Have a site", "ready to", "build?"],
  ctaSubtitle:
    "From initial feasibility to construction completion — Ridge Studio provides complete architectural planning with zero compromise on quality.",
};

export default function ArchitecturePlanningPage() {
  return <ServicePageTemplate data={data} />;
}
