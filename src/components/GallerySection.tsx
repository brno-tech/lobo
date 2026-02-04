import { Camera } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useReveal } from "@/hooks/useReveal";

const galleryPlaceholders = Array(6).fill(null);

export const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const { ref: titleRef, isVisible: titleVisible } = useReveal();
  const { ref: gridRef, isVisible: gridVisible } = useReveal({ threshold: 0.05 });

  return (
    <section id="galeria" className="py-16 px-4 bg-card">
      <div className="container max-w-5xl mx-auto">
        <h2
          ref={titleRef}
          className={`font-display text-3xl sm:text-4xl text-primary text-center mb-10 gold-glow reveal ${titleVisible ? "visible" : ""}`}
        >
          Momentos que ficam na memória
        </h2>

        {/* Photo Grid */}
        <div ref={gridRef} className="grid grid-cols-2 md:grid-cols-3 gap-4 stagger-children">
          {galleryPlaceholders.map((_, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(index)}
              className={`aspect-[3/4] western-frame rounded-lg overflow-hidden cursor-pointer group reveal ${gridVisible ? "visible" : ""}`}
            >
              <div className="w-full h-full bg-gradient-to-b from-[hsl(25_30%_18%)] to-[hsl(20_35%_10%)] flex flex-col items-center justify-center gap-3 group-hover:brightness-110 transition-all duration-300">
                <Camera className="h-10 w-10 text-primary/50 group-hover:text-primary/70 transition-colors" />
                <p className="text-foreground/40 text-sm">Foto {index + 1}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-3xl bg-card border-border p-2">
            <div className="aspect-[3/4] bg-gradient-to-b from-[hsl(25_30%_18%)] to-[hsl(20_35%_10%)] flex items-center justify-center rounded-lg">
              <div className="text-center">
                <Camera className="h-16 w-16 text-primary/50 mx-auto mb-4" />
                <p className="text-foreground/60">Foto {(selectedImage ?? 0) + 1}</p>
                <p className="text-foreground/40 text-sm mt-2">Em breve</p>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};
