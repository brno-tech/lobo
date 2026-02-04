import { Cake, Heart, PartyPopper, Beer, Building2, Tent, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WHATSAPP_LINK } from "@/lib/constants";
import { useReveal } from "@/hooks/useReveal";

const eventTypes = [
  { icon: Cake, title: "Aniversários", description: "Torne a sua festa inesquecível com música ao vivo de verdade." },
  { icon: Heart, title: "Casamentos", description: "Emoção e romantismo para o dia mais especial." },
  { icon: PartyPopper, title: "Festas e Confraternizações", description: "Alegria garantida para reunir família e amigos." },
  { icon: Beer, title: "Bares e Restaurantes", description: "Ambiente acolhedor e música de qualidade." },
  { icon: Building2, title: "Eventos Corporativos", description: "Profissionalismo e entretenimento para sua empresa." },
  { icon: Tent, title: "Eventos ao ar livre", description: "Energia e emoção para grandes públicos." },
];

export const EventTypesSection = () => {
  const { ref: titleRef, isVisible: titleVisible } = useReveal();
  const { ref: gridRef, isVisible: gridVisible } = useReveal({ threshold: 0.05 });
  const { ref: bannerRef, isVisible: bannerVisible } = useReveal();

  return (
    <section id="eventos" className="py-16 px-4 wood-texture">
      <div className="container max-w-5xl mx-auto">
        <h2
          ref={titleRef}
          className={`font-display text-3xl sm:text-4xl text-primary text-center mb-10 gold-glow reveal ${titleVisible ? "visible" : ""}`}
        >
          Música ao vivo para toda ocasião
        </h2>

        {/* Event Types Grid */}
        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10 stagger-children">
          {eventTypes.map((event, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg bg-card/80 border border-border/50 hover:border-primary/50 transition-all duration-300 group reveal ${gridVisible ? "visible" : ""}`}
            >
              <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                <event.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-heading text-xl text-foreground mb-2">{event.title}</h3>
              <p className="text-foreground/70">{event.description}</p>
            </div>
          ))}
        </div>

        {/* Price Banner */}
        <div
          ref={bannerRef}
          className={`saloon-plank rounded-lg p-6 sm:p-8 text-center reveal-scale ${bannerVisible ? "visible" : ""}`}
        >
          <p className="font-display text-2xl sm:text-3xl text-primary mb-2 gold-glow relative z-10">
            Eventos a partir de R$ 800,00
          </p>
          <p className="text-foreground/80 mb-6 relative z-10">
            Faça já o seu orçamento!
          </p>
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-8 relative z-10"
          >
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="gap-2">
              <MessageCircle className="h-5 w-5" />
              SOLICITAR ORÇAMENTO
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
