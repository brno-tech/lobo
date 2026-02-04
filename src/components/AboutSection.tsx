import { Mic2, Music, MapPin, Users } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

const highlights = [
  { icon: Mic2, text: "30 anos de experiência" },
  { icon: Music, text: "Forró, Sertanejo Raiz, Seresta, Viola Caipira e Moda de Boteco" },
  { icon: MapPin, text: "Atendemos todo o estado do Espírito Santo" },
  { icon: Users, text: "Solo, Dupla ou Grupo completo" },
];

export const AboutSection = () => {
  const { ref: titleRef, isVisible: titleVisible } = useReveal();
  const { ref: textRef, isVisible: textVisible } = useReveal();
  const { ref: gridRef, isVisible: gridVisible } = useReveal();

  return (
    <section id="sobre" className="py-16 px-4 bg-card">
      <div className="container max-w-4xl mx-auto">
        <h2
          ref={titleRef}
          className={`font-display text-3xl sm:text-4xl text-primary text-center mb-8 gold-glow reveal ${titleVisible ? "visible" : ""}`}
        >
          Sobre o Artista
        </h2>

        <div
          ref={textRef}
          className={`space-y-6 text-lg text-foreground/90 leading-relaxed mb-12 reveal ${textVisible ? "visible" : ""}`}
        >
          <p>
            <span className="text-primary font-semibold">
              Há 30 anos no palco, Lobo do Forró carrega na voz a força do sertão, a emoção da seresta e a alma da música raiz.
            </span>{" "}
            Com a pegada bruta de quem nasceu no meio da poeira e da viola, cada apresentação é uma viagem no tempo — músicas que marcaram gerações, que embalam memórias e fazem o coração bater mais forte.
          </p>
          <p>
            De festas íntimas a grandes eventos, Lobo do Forró transforma qualquer ocasião em uma noite inesquecível. Com repertório que vai do forró pé de serra à moda de viola, passando pela sofrência e boteco, ele entrega o show que o seu evento merece — com a autenticidade de quem vive a música de verdade.
          </p>
        </div>

        {/* Highlights */}
        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 gap-4 stagger-children">
          {highlights.map((item, index) => (
            <div
              key={index}
              className={`flex items-start gap-4 p-4 rounded-lg bg-background/50 border border-border/50 rope-border reveal ${gridVisible ? "visible" : ""}`}
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <item.icon className="h-6 w-6 text-primary" />
              </div>
              <p className="text-foreground/90 font-medium pt-2">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
