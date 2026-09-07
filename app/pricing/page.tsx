import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { getWhatsAppLink, whatsappMessages } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Pricing and plans for one-to-one online classes at Noor Islamic Academy.",
};

const factors = [
  { icon: "calendar_month", title: "Monthly Plans", description: "Ongoing weekly classes billed on a recurring basis." },
  { icon: "schedule", title: "Session-Based Pricing", description: "Pay per session or per package of sessions." },
  { icon: "family_restroom", title: "Family Discounts", description: "Reduced rates for multiple children enrolled together." },
  { icon: "layers", title: "Multi-Course Bundles", description: "Combine courses (e.g. Qur'an + Arabic) at a bundled rate." },
] as const;

export default function PricingPage() {
  return (
    <>
      <PageHero
        kicker="Tuition & Plans"
        title="Simple, Transparent Pricing"
        description="[PLACEHOLDER: exact prices, currencies and billing terms have not yet been confirmed by the academy. This page describes how pricing will be structured — contact us on WhatsApp for current rates.]"
      />

      <section className="w-full py-space-3xl px-gutter-mobile lg:px-gutter-desktop bg-surface">
        <Container className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-lg">
          {factors.map((factor) => (
            <div
              key={factor.title}
              className="bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm flex flex-col gap-space-sm"
            >
              <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-headline-sm text-secondary">{factor.icon}</span>
              </div>
              <h3 className="font-title-lg text-title-lg text-primary">{factor.title}</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">{factor.description}</p>
            </div>
          ))}
        </Container>
      </section>

      <section className="w-full pb-space-3xl px-gutter-mobile lg:px-gutter-desktop bg-surface">
        <Container className="bg-primary text-on-primary rounded-2xl shadow-xl p-space-2xl flex flex-col items-center text-center gap-space-md">
          <h2 className="font-headline-lg text-headline-md lg:text-headline-lg text-on-primary max-w-2xl">
            Get Current Pricing on WhatsApp
          </h2>
          <p className="font-body-md text-body-md text-primary-fixed-dim max-w-xl">
            Tell us the course and schedule you&apos;re interested in, and our team will share exact
            pricing and available plans.
          </p>
          <div className="flex flex-col sm:flex-row gap-space-sm">
            <a
              href={getWhatsAppLink(whatsappMessages.pricing)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-space-2xs bg-secondary hover:bg-on-secondary-container text-on-secondary font-bold px-space-xl py-space-md rounded-xl font-label-lg text-label-lg shadow-md transition-all"
            >
              <span className="material-symbols-outlined text-body-sm">chat</span>
              Ask About Pricing on WhatsApp
            </a>
            <Button href="/free-trial" variant="outline" className="!text-on-primary !border-on-primary hover:!bg-on-primary/10">
              Book a Free Trial Instead
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
