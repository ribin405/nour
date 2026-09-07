import { SectionHeading } from "@/components/ui/SectionHeading";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { homeFaqs } from "@/content/faqs";

export function FAQSection() {
  return (
    <section className="w-full py-space-3xl lg:py-space-4xl px-gutter-mobile lg:px-gutter-desktop bg-surface-container-low">
      <div className="max-w-4xl mx-auto flex flex-col gap-space-2xl">
        <SectionHeading
          align="center"
          kicker="Clear & Transparent"
          title="Frequently Asked Questions"
          description="Everything you need to know about our instructors, methodology, and class scheduling."
          className="mx-auto"
        />
        <FAQAccordion items={[...homeFaqs]} />
      </div>
    </section>
  );
}
