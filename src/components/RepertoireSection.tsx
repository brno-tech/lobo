import { useReveal } from "@/hooks/useReveal";

const artists = [
  "Milionário & José Rico",
  "Chitãozinho & Xororó",
  "Tião Carreiro & Pardinho",
  "João Mineiro & Marciano",
  "Pena Branca & Xavantinho",
  "Tonico & Tinoco",
  "Cezar & Paulinho",
  "Teodoro & Sampaio",
  "Leandro & Leonardo",
  "Zezé Di Camargo & Luciano",
  "João Paulo & Daniel",
  "Alemão do Forró",
];

export const RepertoireSection = () => {
  const { ref: titleRef, isVisible: titleVisible } = useReveal();
  const { ref: gridRef, isVisible: gridVisible } = useReveal({ threshold: 0.05 });
  const { ref: footerRef, isVisible: footerVisible } = useReveal();

  return (
    <section id="repertorio" className="py-16 px-4 wood-texture">
      <div className="container max-w-5xl mx-auto">
        <div ref={titleRef} className={`reveal ${titleVisible ? "visible" : ""}`}>
          <h2 className="font-display text-3xl sm:text-4xl text-primary text-center mb-4 gold-glow">
            Um repertório que toca a alma
          </h2>

          <p className="text-center text-gold-light text-lg mb-10 font-heading">
            Forró · Moda de Boteco · Sofrência · Viola Caipira · Seresta
          </p>
        </div>

        {/* Artists Grid - Wanted Poster Style */}
        <div ref={gridRef} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 mb-8 stagger-children">
          {artists.map((artist, index) => (
            <div
              key={index}
              className={`wanted-card p-3 sm:p-4 text-center transform hover:scale-105 transition-transform duration-200 reveal ${gridVisible ? "visible" : ""}`}
            >
              <p className="font-heading text-sm sm:text-base font-semibold text-muted-foreground relative z-10">
                {artist}
              </p>
            </div>
          ))}
        </div>

        <p
          ref={footerRef}
          className={`text-center text-foreground/80 text-lg italic reveal ${footerVisible ? "visible" : ""}`}
        >
          E muito mais! O repertório é personalizado para o seu evento.
        </p>
      </div>
    </section>
  );
};
