import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { RepertoireSection } from "@/components/RepertoireSection";
import { GallerySection } from "@/components/GallerySection";
import { EventTypesSection } from "@/components/EventTypesSection";
import { FormatsSection } from "@/components/FormatsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { LocationSection } from "@/components/LocationSection";
import { FinalCTASection } from "@/components/FinalCTASection";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <RepertoireSection />
        <GallerySection />
        <EventTypesSection />
        <FormatsSection />
        <TestimonialsSection />
        <LocationSection />
        <FinalCTASection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
