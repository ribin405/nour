import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/content/site-config";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and Conditions for Noor Islamic Academy.",
};

export default function TermsPage() {
  return (
    <>
      <PageHero kicker="Legal" title="Terms & Conditions" />

      <section className="w-full py-space-3xl px-gutter-mobile lg:px-gutter-desktop bg-surface">
        <Container className="max-w-3xl flex flex-col gap-space-lg font-body-md text-body-md text-on-surface-variant leading-relaxed">
          <div className="bg-secondary-container/30 border border-secondary/30 rounded-xl p-space-md font-body-sm text-body-sm text-on-secondary-container">
            <strong>DRAFT — NOT LEGAL ADVICE.</strong> This is placeholder text and must be replaced
            with terms reviewed and approved by the academy (and, ideally, a lawyer) before launch —
            especially the sections on pricing, cancellation and refunds, which depend on policies
            the academy hasn&apos;t confirmed yet.
          </div>

          <div>
            <h2 className="font-headline-md text-headline-sm text-primary mb-space-sm">1. About This Website</h2>
            <p>
              This website is a marketing and lead-generation site for {siteConfig.name}. It does not
              currently provide account creation, online payments, or a learning platform — enrollment
              and class delivery are arranged directly with our team via WhatsApp, phone or email.
            </p>
          </div>

          <div>
            <h2 className="font-headline-md text-headline-sm text-primary mb-space-sm">2. Free Trial</h2>
            <p>
              [PLACEHOLDER: describe the exact terms of the free trial offer once confirmed by the
              academy — e.g. one trial per family, trial length, what happens after the trial.]
            </p>
          </div>

          <div>
            <h2 className="font-headline-md text-headline-sm text-primary mb-space-sm">3. Enrollment & Payment</h2>
            <p>
              [PLACEHOLDER: pricing, billing cadence and accepted payment methods have not yet been
              confirmed — see the Pricing page or contact us directly.]
            </p>
          </div>

          <div>
            <h2 className="font-headline-md text-headline-sm text-primary mb-space-sm">4. Cancellations & Rescheduling</h2>
            <p>
              [PLACEHOLDER: cancellation, rescheduling and refund policy pending academy confirmation.]
            </p>
          </div>

          <div>
            <h2 className="font-headline-md text-headline-sm text-primary mb-space-sm">5. Contact Us</h2>
            <p>
              Questions about these terms can be sent to {siteConfig.email}.{" "}
              [PLACEHOLDER: confirm official contact details.]
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
