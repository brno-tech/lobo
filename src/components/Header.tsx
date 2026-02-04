import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoHeader from "@/assets/logo-header.webp";
import { WHATSAPP_LINK, PHONE_LINK } from "@/lib/constants";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/50">
      <div className="container flex items-center justify-between h-16 px-4">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <img
            src={logoHeader}
            alt="Lobo do Forró"
            className="h-11 w-11 object-contain"
            width={44}
            height={44}
          />
          <span className="font-display text-primary text-base sm:text-lg gold-glow leading-tight">
            Lobo do Forró
          </span>
        </a>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          <Button
            asChild
            size="sm"
            className="bg-whatsapp hover:bg-whatsapp/90 text-whatsapp-foreground font-semibold gap-1.5 h-9 px-3"
          >
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-4 w-4" />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>
          </Button>
          <Button
            asChild
            size="sm"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold gap-1.5 h-9 px-3"
          >
            <a href={PHONE_LINK}>
              <Phone className="h-4 w-4" />
              <span className="hidden sm:inline">Ligar</span>
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
};
