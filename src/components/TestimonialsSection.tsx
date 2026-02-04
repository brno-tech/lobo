import { Star, Quote } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

const testimonials = [
  {
    name: "Maria Aparecida",
    age: "58 anos",
    event: "Aniversário de 60 anos do marido",
    text: "Contratamos o Lobo do Forró para o aniversário do meu marido e foi uma noite mágica. Todo mundo cantou junto, chorou de emoção. Ele trouxe as músicas da nossa juventude de volta. Nota 10!",
    initials: "MA",
  },
  {
    name: "José Carlos",
    age: "62 anos",
    event: "Casamento da filha",
    text: "O Lobo fez o casamento da minha filha ser inesquecível. A seresta pegou todo mundo de surpresa, foi lindo demais. Profissional de primeira, pontual e muito talentoso.",
    initials: "JC",
  },
  {
    name: "Dona Lúcia",
    age: "55 anos",
    event: "Festa de confraternização",
    text: "Já é a terceira vez que chamamos o Lobo para nossa confraternização de fim de ano. O repertório é incrível, agrada todas as idades. Recomendo de olhos fechados!",
    initials: "DL",
  },
  {
    name: "Roberto",
    age: "47 anos",
    event: "Dono de bar em Vitória",
    text: "Desde que comecei a trazer o Lobo do Forró pro meu bar, a casa lota toda sexta. O público ama, pede pra voltar sempre. Vale cada centavo investido.",
    initials: "RB",
  },
];

export const TestimonialsSection = () => {
  const { ref: titleRef, isVisible: titleVisible } = useReveal();
  const { ref: gridRef, isVisible: gridVisible } = useReveal({ threshold: 0.05 });

  return (
    <section id="depoimentos" className="py-16 px-4 wood-texture">
      <div className="container max-w-5xl mx-auto">
        <h2
          ref={titleRef}
          className={`font-display text-3xl sm:text-4xl text-primary text-center mb-10 gold-glow reveal ${titleVisible ? "visible" : ""}`}
        >
          O que dizem nossos clientes
        </h2>

        {/* Testimonials Grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-6 stagger-children">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`testimonial-card reveal ${gridVisible ? "visible" : ""}`}
            >
              {/* Quote icon */}
              <Quote className="absolute top-4 right-4 h-8 w-8 text-primary/20" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array(5)
                  .fill(null)
                  .map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                  ))}
              </div>

              {/* Testimonial text */}
              <p className="text-foreground/90 italic mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold text-sm">
                    {testimonial.initials}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">
                    {testimonial.name}, {testimonial.age}
                  </p>
                  <p className="text-foreground/60 text-sm">{testimonial.event}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
