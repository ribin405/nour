import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { howItWorksSteps } from "@/content/how-it-works";

export function HowItWorksSteps() {
  return (
    <section className="w-full py-space-3xl lg:py-space-4xl px-gutter-mobile lg:px-gutter-desktop bg-surface-container-low">
      <div className="max-w-container-max mx-auto flex flex-col gap-space-2xl">
        <SectionHeading
          align="center"
          kicker="Effortless Onboarding"
          title="Start Learning in 4 Simple Steps"
          description="No commitments, no credit card. See firsthand how our teachers connect with your learner."
          className="mx-auto"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-lg">
          {howItWorksSteps.map((step) => (
            <div
              key={step.number}
              className="bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm flex flex-col justify-between"
            >
              <div className="flex flex-col gap-space-md">
                <span className="font-display-md text-headline-lg text-secondary-container font-bold">
                  {step.number}
                </span>
                <h4 className="font-title-lg text-title-lg text-primary">{step.title}</h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant">{step.description}</p>
              </div>
              <div className="pt-space-md">
                <span className="inline-flex items-center gap-space-3xs font-label-sm text-label-sm text-secondary font-bold">
                  {step.tag}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center pt-space-md">
          <Link
            href="/free-trial"
            className="inline-flex items-center gap-space-xs bg-primary hover:bg-primary-container text-on-primary px-space-xl py-space-md rounded-xl font-label-lg text-label-lg shadow-md transition-all"
          >
            <span>Schedule Your Evaluation Now</span>
            <span className="material-symbols-outlined text-secondary-fixed text-label-lg">arrow_forward</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
