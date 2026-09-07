import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { fullFaqs } from "@/content/faqs";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Frequently asked questions about Noor Islamic Academy's one-to-one online classes.",
};

export default function FAQPage() {
  return (
    <>
      <PageHero
        kicker="Clear & Transparent"
        title="Frequently Asked Questions"
        description="Everything you need to know about courses, scheduling, teachers and getting started."
      />

      <section className="w-full py-space-3xl px-gutter-mobile lg:px-gutter-desktop bg-surface">
        <Container className="max-w-3xl">
          <FAQAccordion items={fullFaqs} />
        </Container>
      </section>
    </>
  );
}
