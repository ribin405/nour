import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "How It Works",
  description: "How to get started with one-to-one online classes at Noor Islamic Academy.",
};

const steps = [
  {
    title: "Tell Us About the Student",
    description: "Share the student's age, course interest, current level, goals and preferred schedule.",
    icon: "person_edit",
  },
  {
    title: "Book a Free Trial",
    description: "Choose a convenient time and submit your request — no payment required.",
    icon: "calendar_month",
  },
  {
    title: "Meet Your Teacher",
    description: "Experience the one-to-one teaching format firsthand in a live evaluation session.",
    icon: "person",
  },
  {
    title: "Get a Learning Plan",
    description: "Receive a recommended level and learning path based on the evaluation.",
    icon: "route",
  },
  {
    title: "Start Regular Classes",
    description: "Attend scheduled one-to-one lessons at a pace that fits the student.",
    icon: "school",
  },
  {
    title: "Track Progress",
    description:
      "Receive feedback from your teacher as you progress. [PLACEHOLDER: confirm exact reporting process with the academy.]",
    icon: "insights",
  },
] as const;

export default function HowItWorksPage() {
  return (
    <>
      <PageHero
        kicker="Effortless Onboarding"
        title="How It Works"
        description="From your first message to your first class — here's exactly what happens."
      />

      <section className="w-full py-space-3xl px-gutter-mobile lg:px-gutter-desktop bg-surface">
        <Container className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg">
          {steps.map((step, i) => (
            <div
              key={step.title}
              className="bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm flex flex-col gap-space-md"
            >
              <div className="flex items-center justify-between">
                <span className="font-display-md text-headline-lg text-secondary-container font-bold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="material-symbols-outlined text-headline-sm text-secondary">{step.icon}</span>
              </div>
              <h3 className="font-title-lg text-title-lg text-primary">{step.title}</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">{step.description}</p>
            </div>
          ))}
        </Container>
      </section>

      <section className="w-full pb-space-3xl px-gutter-mobile lg:px-gutter-desktop bg-surface">
        <Container className="flex justify-center">
          <Button href="/free-trial" icon="calendar_month">
            Book Your Free Trial
          </Button>
        </Container>
      </section>
    </>
  );
}
