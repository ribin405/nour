import { getWhatsAppLink, whatsappMessages } from "@/lib/whatsapp";

export function WhatsAppConsultationBanner() {
  return (
    <section className="w-full py-space-xl px-gutter-mobile lg:px-gutter-desktop bg-surface">
      <div className="max-w-container-max mx-auto bg-surface-container-low rounded-2xl p-space-lg lg:p-space-xl flex flex-col md:flex-row items-center justify-between gap-space-lg shadow-sm">
        <div className="flex items-center gap-space-md">
          <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center text-secondary-fixed shrink-0 shadow-md">
            <span className="material-symbols-outlined text-headline-sm">forum</span>
          </div>
          <div className="flex flex-col gap-space-3xs">
            <h3 className="font-title-lg text-title-lg text-primary font-bold">
              Need Help Choosing the Right Course or Schedule?
            </h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Speak with our team directly on WhatsApp.
            </p>
          </div>
        </div>
        <a
          className="inline-flex items-center gap-space-xs bg-primary hover:bg-primary-container text-on-primary px-space-xl py-space-sm rounded-xl font-label-md text-label-md shrink-0 shadow-md transition-all"
          href={getWhatsAppLink(whatsappMessages.general)}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="material-symbols-outlined text-label-md text-secondary-fixed">chat</span>
          <span>Start WhatsApp Consultation</span>
        </a>
      </div>
    </section>
  );
}
