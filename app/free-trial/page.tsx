import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { FreeTrialForm } from "@/components/free-trial/FreeTrialForm";

export const metadata: Metadata = {
  title: "Book a Free Trial",
  description: "Book a free one-to-one trial class at Noor Islamic Academy.",
};

export default function FreeTrialPage() {
  return (
    <>
      <PageHero
        kicker="Zero Risk • Free Assessment"
        title="Book Your Free Trial Class"
        description="Tell us a little about the student and we'll confirm a time on WhatsApp — no payment info needed."
      />

      <section className="w-full py-space-3xl px-gutter-mobile lg:px-gutter-desktop bg-surface">
        <Container className="max-w-2xl">
          <FreeTrialForm />
        </Container>
      </section>
    </>
  );
}
