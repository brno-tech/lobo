import { MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WHATSAPP_LINK } from "@/lib/constants";
import { useReveal } from "@/hooks/useReveal";

export const LocationSection = () => {
  const { ref, isVisible } = useReveal();

  return (
    <section id="localizacao" className="py-16 px-4 bg-card">
      <div
        ref={ref}
        className={`container max-w-3xl mx-auto text-center reveal ${isVisible ? "visible" : ""}`}
      >
        {/* Map Icon */}
        <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
          <MapPin className="h-12 w-12 text-primary" />
        </div>

        <h2 className="font-display text-3xl sm:text-4xl text-primary mb-4 gold-glow">
          Atendemos todo o estado do Espírito Santo
        </h2>

        <p className="text-foreground/80 text-lg mb-8">
          De norte a sul do ES — levamos nossa música até você.
        </p>

        <Button
          asChild
          size="lg"
          className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-base sm:text-lg px-6 sm:px-8"
        >
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="gap-2">
            <MessageCircle className="h-5 w-5" />
            CONSULTE DISPONIBILIDADE
          </a>
        </Button>
      </div>
    </section>
  );
};
