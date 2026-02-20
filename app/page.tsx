import AboutSnippet from "@/components/AboutSnippet";
import CTABanner from "@/components/CTA";
import HeroSection from "@/components/HeroSection";
import FeaturedPortfolio from "@/components/PortfolioSection";
import ServicesSection from "@/components/ServicesSection";
import Testimonials from "@/components/Testimonials";
import WhyChooseUs from "@/components/WhyChooseUse";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-san">
      <HeroSection />
      <AboutSnippet />
      <ServicesSection />
      <FeaturedPortfolio />
      <WhyChooseUs />
      <Testimonials />
      <CTABanner />
    </div>
  );
}
