import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { TechMarquee } from "@/components/home/TechMarquee";
import { ClientLogos } from "@/components/home/ClientLogos";
import { StatsSection } from "@/components/home/StatsSection";
import { AIShowcase } from "@/components/home/AIShowcase";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { ProcessTimeline } from "@/components/home/ProcessTimeline";
import { Testimonials } from "@/components/home/Testimonials";
import { ProductDemo } from "@/components/home/ProductDemo";
import { GlobalReach } from "@/components/home/GlobalReach";
import { CTASection } from "@/components/home/CTASection";
import { Chatbot } from "@/components/features/Chatbot";
import { WelcomePopup } from "@/components/features/WelcomePopup";
import { NotificationToast } from "@/components/features/NotificationToast";
import { useScrollToTop } from "@/hooks/useScrollToTop";

const Index = () => {
  useScrollToTop();

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <TechMarquee />
      <ClientLogos />
      <StatsSection />
      <AIShowcase />
      <ServicesPreview />
      <ProductDemo />
      <ProcessTimeline />
      <Testimonials />
      <GlobalReach />
      <CTASection />
      <Footer />
      <Chatbot />
      <WelcomePopup />
      <NotificationToast />
    </main>
  );
};

export default Index;
