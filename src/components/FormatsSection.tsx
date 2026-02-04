import { User, Users, Music4, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WHATSAPP_LINK } from "@/lib/constants";
import { useReveal } from "@/hooks/useReveal";

const formats = [
  {
    icon: User,
    title: "Solo",
    description: "Teclado, Voz e violão para eventos pequenos e bares.",
    detail: "Perfeito para ambientes acolhedores",
  },
  {
    icon: Users,
    title: "Dupla",
    description: "Mais energia e harmonia para festas e celebrações.",
    detail: "O formato mais versátil",
  },
  {
    icon: Music4,
    title: "Grupo Completo",
    description: "Banda completa para grandes eventos e shows.",
    detail: "Experiência completa de palco",
  },
];

export const FormatsSection = () => {
  const { ref: titleRef, isVisible: titleVisible } = useReveal();
  const { ref: gridRef, isVisible: gridVisible } = useReveal({ threshold: 0.1 });
  const { ref: ctaRef, isVisible: ctaVisible } = useReveal();

  return (
    <section id="formatos" className="py-16 px-4 bg-card">
      <div className="container max-w-4xl mx-auto">
        <h2
          ref={titleRef}
          className={`font-display text-3xl sm:text-4xl text-primary text-center mb-10 gold-glow reveal ${titleVisible ? "visible" : ""}`}
        >
          Escolha o formato ideal
        </h2>

        {/* Formats Grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 stagger-children">
          {formats.map((format, index) => (
            <div
              key={index}
              className={`wanted-card p-6 sm:p-8 text-center hover:scale-[1.03] transition-transform duration-300 reveal ${gridVisible ? "visible" : ""}`}
            >
              <div className="w-16 h-16 rounded-full bg-[hsl(25_45%_25%_/_0.5)] flex items-center justify-center mx-auto mb-4 relative z-10">
                <format.icon className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="font-display text-2xl text-muted-foreground mb-2 relative z-10">
                {format.title}
              </h3>
              <p className="text-muted-foreground/80 mb-2 relative z-10">
                {format.description}
              </p>
              <p className="text-muted-foreground/60 text-sm italic relative z-10">
                {format.detail}
              </p>
            </div>
          ))}
        </div>

        <div ref={ctaRef} className={`text-center reveal ${ctaVisible ? "visible" : ""}`}>
          <p className="text-foreground/80 mb-6 text-lg">
            Consulte disponibilidade e valores para cada formato.
          </p>

          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-8"
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

