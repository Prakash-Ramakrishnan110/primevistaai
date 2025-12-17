import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { TechMarquee } from "@/components/home/TechMarquee";
import { StatsSection } from "@/components/home/StatsSection";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <TechMarquee />
      <StatsSection />
      <ServicesPreview />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
