import { getWhatsAppLink, whatsappMessages } from "@/lib/whatsapp";

export function WhatsAppFloatingButton() {
  return (
    <a
      href={getWhatsAppLink(whatsappMessages.general)}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 inline-flex items-center gap-space-2xs bg-primary text-on-primary px-space-md py-space-sm rounded-full shadow-lg hover:bg-primary-container transition-all"
    >
      <span className="material-symbols-outlined text-title-lg text-secondary-fixed">chat</span>
      <span className="hidden sm:inline font-label-md text-label-md font-bold">WhatsApp Consultation</span>
    </a>
  );
}
