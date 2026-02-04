import { MessageCircle } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/constants";

export const WhatsAppFloat = () => {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 w-16 h-16 rounded-full bg-whatsapp flex items-center justify-center shadow-lg whatsapp-pulse hover:scale-110 transition-transform"
      aria-label="Fale conosco no WhatsApp"
    >
      <MessageCircle className="h-8 w-8 text-whatsapp-foreground" />
    </a>
  );
};
