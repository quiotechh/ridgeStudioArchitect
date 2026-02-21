import ServicePageTemplate from "@/components/ServicePageTemplate";
import type { ServicePageData } from "@/components/ServicePageTemplate";

const data: ServicePageData = {
  heroLabel: "Structural Engineering",
  heroHeading: ["Structure", "Drawing", "Services."],
  heroSubtitle:
    "Detailed structural drawings and engineering documentation that form the backbone of every build — precision-engineered for safety and longevity.",
  heroImage: "/services/structure-hero.jpg",

  overviewLabel: "The Service",
  overviewHeading: "The Backbone of Every Build",
  overviewParagraphs: [
    "Behind every beautiful building is an invisible framework of structural logic. At Ridge Studio, our structural drawing services provide the engineering documentation that ensures your project stands strong — literally.",
    "We produce detailed structural drawings for residential, commercial, and industrial projects. From foundation design to roof trusses, every element is calculated, documented, and verified before construction begins.",
    "Our structural team works in close coordination with our architects and interior designers, ensuring that structural requirements are seamlessly integrated into the design rather than imposed as afterthoughts.",
  ],
  overviewStats: [
    { value: "300+", label: "Structures Engineered" },
    { value: "100%", label: "Code Compliance" },
    { value: "0", label: "Structural Failures" },
  ],
  overviewImage: "/services/structure-overview.jpg",

  offeringsLabel: "What We Offer",
  offeringsHeading: "Structural Services",
  offeringsSubtitle:
    "Complete structural engineering documentation — from soil investigation to detailed reinforcement drawings, every calculation matters.",
  offerings: [
    {
      number: "01",
      title: "Foundation Design",
      description:
        "Isolated footings, raft foundations, pile foundations — designed based on soil investigation reports and structural load calculations.",
      icon: "◻",
    },
    {
      number: "02",
      title: "RCC Frame Design",
      description:
        "Reinforced concrete column, beam, and slab design with complete bar bending schedules and section details.",
      icon: "◇",
    },
    {
      number: "03",
      title: "Steel Structure Design",
      description:
        "Steel frame structures, portal frames, and composite designs — optimised for economy, strength, and speed of construction.",
      icon: "◈",
    },
    {
      number: "04",
      title: "Structural Analysis",
      description:
        "Load analysis, seismic analysis, wind load calculations, and stability checks using industry-standard software.",
      icon: "◎",
    },
    {
      number: "05",
      title: "Retaining Wall & Staircase Design",
      description:
        "Specialised structural elements including retaining walls, water tanks, staircases, and cantilever structures.",
      icon: "○",
    },
    {
      number: "06",
      title: "Structural Audit & Retrofit",
      description:
        "Assessment of existing structures, condition surveys, and retrofit design for strengthening or repair.",
      icon: "▣",
    },
  ],

  process: [
    {
      step: "01",
      title: "Soil & Load Study",
      description:
        "Soil investigation report review, load calculation, and structural system selection based on project requirements.",
    },
    {
      step: "02",
      title: "Analysis & Design",
      description:
        "Computer-aided structural analysis, member sizing, and design verification against all applicable codes and standards.",
    },
    {
      step: "03",
      title: "Drawing Production",
      description:
        "Detailed structural drawings including plans, sections, elevations, bar bending schedules, and construction notes.",
    },
    {
      step: "04",
      title: "Site Support",
      description:
        "Construction stage support — clarifications, site visits, and quality verification of structural elements during execution.",
    },
  ],

  galleryImages: [
    { src: "/services/structure-gallery-01.jpg", alt: "Structural Drawings", span: "wide" },
    { src: "/services/structure-gallery-02.jpg", alt: "Foundation Work", span: "normal" },
    { src: "/services/structure-gallery-03.jpg", alt: "RCC Frame", span: "tall" },
    { src: "/services/structure-gallery-04.jpg", alt: "Steel Structure", span: "normal" },
    { src: "/services/structure-gallery-05.jpg", alt: "Reinforcement Detail", span: "normal" },
    { src: "/services/structure-gallery-06.jpg", alt: "Completed Structure", span: "tall" },
  ],

  ctaLabel: "Get Structural Drawings",
  ctaHeading: ["Need structural", "drawings for", "your project?"],
  ctaSubtitle:
    "Precision-engineered structural documentation that ensures your project is safe, compliant, and built to last for decades.",
};

export default function StructureDrawingServicesPage() {
  return <ServicePageTemplate data={data} />;
}
