import ServicePageTemplate from "@/components/ServicePageTemplate";
import type { ServicePageData } from "@/components/ServicePageTemplate";

const data: ServicePageData = {
  heroLabel: "Renovation & Remodelling",
  heroHeading: ["Renovation", "Projects."],
  heroSubtitle:
    "Breathing new life into existing structures — we approach every renovation with sensitivity to what exists and a bold vision for what it can become.",
  heroImage: "/services/renovation-hero.jpg",

  overviewLabel: "The Service",
  overviewHeading: "Reimagine What Already Exists",
  overviewParagraphs: [
    "Renovation is not demolition — it is transformation. At Ridge Studio, we see the potential in every existing structure. Whether it is a dated apartment, a heritage building, or a tired commercial space, we approach each project with respect for what was built and excitement for what it can become.",
    "Our renovation process begins with a thorough assessment of the existing structure — identifying what to preserve, what to enhance, and what to reimagine. We work within constraints that new builds don't face, and we thrive in that challenge.",
    "The result is a space that feels entirely new while retaining the character and structural integrity of the original. Smart renovation is sustainable, cost-effective, and often produces the most dramatic before-and-after transformations.",
  ],
  overviewStats: [
    { value: "45+", label: "Renovations Completed" },
    { value: "30%", label: "Avg. Cost Savings vs New Build" },
    { value: "98%", label: "Client Satisfaction" },
  ],
  overviewImage: "/services/renovation-overview.jpg",

  offeringsLabel: "What We Offer",
  offeringsHeading: "Renovation Scope",
  offeringsSubtitle:
    "From cosmetic upgrades to complete structural remodelling — we handle every scale of renovation with craft and care.",
  offerings: [
    {
      number: "01",
      title: "Complete Interior Renovation",
      description:
        "Full gut renovation of existing interiors — new layouts, new finishes, new MEP services, and a completely transformed living or working experience.",
      icon: "◻",
    },
    {
      number: "02",
      title: "Facade Restoration",
      description:
        "External renovation including facade repair, recladding, waterproofing, and aesthetic upgrades that transform the building's street presence.",
      icon: "◇",
    },
    {
      number: "03",
      title: "Kitchen & Bathroom Remodels",
      description:
        "Targeted renovation of high-impact rooms — modern kitchens and luxurious bathrooms that dramatically uplift the entire property.",
      icon: "◈",
    },
    {
      number: "04",
      title: "Structural Modifications",
      description:
        "Wall removal, floor level changes, staircase redesign, and structural reinforcement — executed with engineering precision.",
      icon: "◎",
    },
    {
      number: "05",
      title: "Heritage & Restoration",
      description:
        "Sensitive restoration of heritage properties — preserving original character while integrating modern comfort and compliance.",
      icon: "○",
    },
    {
      number: "06",
      title: "Commercial Refurbishment",
      description:
        "Office refreshes, retail makeovers, and hospitality upgrades — giving commercial spaces a new lease of life without full reconstruction.",
      icon: "▣",
    },
  ],

  process: [
    {
      step: "01",
      title: "Assessment",
      description:
        "Structural survey, condition report, and feasibility analysis. We understand exactly what we are working with before we propose changes.",
    },
    {
      step: "02",
      title: "Design",
      description:
        "Renovation-specific design that works within existing constraints — respecting load-bearing walls, service routes, and heritage elements.",
    },
    {
      step: "03",
      title: "Demolition & Build",
      description:
        "Careful, phased demolition followed by clean construction. We minimise disruption and protect existing elements worth preserving.",
    },
    {
      step: "04",
      title: "Restoration & Finish",
      description:
        "Final finishes, fixture installation, and deep cleaning. The space is handed over looking and functioning better than new.",
    },
  ],

  galleryImages: [
    { src: "/services/renovation-gallery-01.jpg", alt: "Before & After Living Room", span: "wide" },
    { src: "/services/renovation-gallery-02.jpg", alt: "Kitchen Remodel", span: "normal" },
    { src: "/services/renovation-gallery-03.jpg", alt: "Heritage Restoration", span: "tall" },
    { src: "/services/renovation-gallery-04.jpg", alt: "Bathroom Renovation", span: "normal" },
    { src: "/services/renovation-gallery-05.jpg", alt: "Office Refurbishment", span: "normal" },
    { src: "/services/renovation-gallery-06.jpg", alt: "Facade Renovation", span: "tall" },
  ],

  ctaLabel: "Renovate Your Space",
  ctaHeading: ["Ready to", "transform your", "space?"],
  ctaSubtitle:
    "Don't rebuild — reimagine. Ridge Studio delivers renovation projects that turn tired spaces into something extraordinary.",
};

export default function RenovationProjectsPage() {
  return <ServicePageTemplate data={data} />;
}
