import { MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WHATSAPP_LINK, PHONE_LINK, PHONE_DISPLAY } from "@/lib/constants";
import { useReveal } from "@/hooks/useReveal";

export const FinalCTASection = () => {
  const { ref, isVisible } = useReveal();

  return (
    <section className="py-20 px-4 saloon-plank relative overflow-hidden">
      {/* Decorative stars */}
      <div className="absolute top-8 left-8 text-primary/30 text-3xl star-float" aria-hidden="true">★</div>
      <div className="absolute top-12 right-12 text-primary/20 text-2xl star-float-delayed" aria-hidden="true">★</div>
      <div className="absolute bottom-8 left-12 text-primary/25 text-xl star-float" aria-hidden="true">★</div>
      <div className="absolute bottom-12 right-8 text-primary/30 text-2xl star-float-delayed" aria-hidden="true">★</div>

      <div
        ref={ref}
        className={`container max-w-3xl mx-auto text-center relative z-10 reveal ${isVisible ? "visible" : ""}`}
      >
        <p className="text-lg sm:text-xl text-foreground/90 leading-relaxed mb-6 max-w-2xl mx-auto">
          "Não deixe seu evento sem música de verdade. Faça como centenas de clientes satisfeitos — contrate o Lobo do Forró e transforme seu evento em uma noite inesquecível."
        </p>

        <p className="font-display text-2xl sm:text-3xl text-primary mb-8 gold-glow">
          Eventos a partir de R$ 800,00
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button
            asChild
            size="lg"
            className="bg-whatsapp hover:bg-whatsapp/90 text-whatsapp-foreground font-bold text-lg px-8 py-6"
          >
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="gap-2">
              <MessageCircle className="h-5 w-5" />
              CHAMAR NO WHATSAPP
            </a>
          </Button>

          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-8 py-6"
          >
            <a href={PHONE_LINK} className="gap-2">
              <Phone className="h-5 w-5" />
              LIGAR AGORA
            </a>
          </Button>
        </div>

        <p className="text-foreground/80 text-lg font-semibold">
          {PHONE_DISPLAY}
        </p>
      </div>
    </section>
  );
};
