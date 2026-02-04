import { Instagram, MessageCircle, Phone } from "lucide-react";
import logoHeader from "@/assets/logo-header.webp";
import { WHATSAPP_LINK, PHONE_LINK, PHONE_DISPLAY, INSTAGRAM_LINK } from "@/lib/constants";

export const Footer = () => {
  return (
    <footer className="py-10 px-4 bg-background border-t border-border/50">
      <div className="container max-w-4xl mx-auto">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <img
            src={logoHeader}
            alt="Lobo do Forró"
            className="w-20 h-20 mb-4"
            width={80}
            height={80}
            loading="lazy"
          />

          <h3 className="font-display text-xl text-primary mb-1">
            Lobo do Forró
          </h3>
          <p className="text-gold-light font-heading mb-4">Pegada Bruta</p>

          <p className="text-foreground/70 mb-6">{PHONE_DISPLAY}</p>

          {/* Social Links */}
          <div className="flex gap-4 mb-8">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-whatsapp/20 flex items-center justify-center hover:bg-whatsapp/30 transition-colors"
              aria-label="WhatsApp"
            >
              <MessageCircle className="h-6 w-6 text-whatsapp" />
            </a>
            <a
              href={INSTAGRAM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary/30 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-6 w-6 text-primary" />
            </a>
            <a
              href={PHONE_LINK}
              className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary/30 transition-colors"
              aria-label="Ligar"
            >
              <Phone className="h-6 w-6 text-primary" />
            </a>
          </div>

          {/* Barbed wire separator */}
          <div className="barbed-wire-separator w-full max-w-xs mb-6" aria-hidden="true" />

          <p className="text-foreground/50 text-sm">
            © {new Date().getFullYear()} Lobo do Forró — Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
