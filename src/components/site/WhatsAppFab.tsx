import { MessageCircle } from "lucide-react";
import { SITE, waLink } from "@/lib/site";

export function WhatsAppFab() {
  const href = waLink("Hello, I would like to make an enquiry about PILGRIMS LODGE.");
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Chat with ${SITE.name} on WhatsApp`}
      className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full text-white shadow-lg transition-transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[color:var(--whatsapp)]/30 sm:bottom-6 sm:right-6"
      style={{ backgroundColor: "var(--whatsapp)" }}
    >
      <MessageCircle className="h-7 w-7" strokeWidth={2} />
      <span className="pointer-events-none absolute inline-flex h-full w-full animate-ping rounded-full opacity-30" style={{ backgroundColor: "var(--whatsapp)" }} />
    </a>
  );
}
