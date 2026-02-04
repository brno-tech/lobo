import { Play, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo-lobo-do-forro.webp";
import { WHATSAPP_LINK } from "@/lib/constants";
import { useReveal } from "@/hooks/useReveal";

export const HeroSection = () => {
  const { ref: videoRef, isVisible: videoVisible } = useReveal({ threshold: 0.1 });
  const { ref: textRef, isVisible: textVisible } = useReveal({ threshold: 0.1 });

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-12 px-4 wood-texture">
      {/* Video Placeholder */}
      <div
        ref={videoRef}
        className={`relative w-full max-w-sm aspect-[9/16] western-frame rounded-lg overflow-hidden mb-8 reveal-scale ${videoVisible ? "visible" : ""}`}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-wood-dark to-background flex items-center justify-center">
          <div className="text-center">
            <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4 border-2 border-primary/50 hover:bg-primary/30 cursor-pointer transition-colors">
              <Play className="h-8 w-8 text-primary fill-primary" />
            </div>
            <p className="text-foreground/50 text-sm">Vídeo em breve</p>
          </div>
        </div>
      </div>

      {/* Logo and Text */}
      <div
        ref={textRef}
        className={`text-center max-w-2xl mx-auto reveal ${textVisible ? "visible" : ""}`}
      >
        <img
          src={logo}
          alt="Lobo do Forró - Pegada Bruta"
          className="w-40 h-40 sm:w-48 sm:h-48 mx-auto mb-4 drop-shadow-2xl"
          width={192}
          height={192}
          loading="eager"
        />

        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl text-primary gold-glow mb-2">
          LOBO DO FORRÓ
        </h1>

        <p className="font-heading text-xl sm:text-2xl text-gold-light mb-4">
          Pegada Bruta
        </p>

        <p className="text-lg sm:text-xl text-foreground/90 mb-8 leading-relaxed">
          30 anos levando emoção, tradição e alegria para o seu evento.
        </p>

        <Button
          asChild
          size="lg"
          className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-8 py-6 shadow-gold animate-pulse-glow"
        >
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="gap-2">
            <MessageCircle className="h-5 w-5" />
            FAÇA SEU ORÇAMENTO AGORA
          </a>
        </Button>
      </div>

      {/* Decorative stars */}
      <div className="absolute top-24 left-4 text-primary/30 text-2xl star-float" aria-hidden="true">★</div>
      <div className="absolute top-32 right-6 text-primary/30 text-xl star-float-delayed" aria-hidden="true">★</div>
      <div className="absolute bottom-20 left-8 text-primary/20 text-3xl star-float" aria-hidden="true">★</div>
      <div className="absolute bottom-32 right-4 text-primary/25 text-lg star-float-delayed" aria-hidden="true">★</div>
    </section>
  );
};
