import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { whyNoorPillars } from "@/content/why-noor";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Noor Islamic Academy's mission to make personalized, one-to-one Islamic education accessible worldwide.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        kicker="About Noor Academy"
        title="Personalized Islamic Learning. Wherever You Are."
        description="Noor Islamic Academy is an online Islamic education academy providing one-to-one classes to students around the world. [PLACEHOLDER: replace with the academy's official introduction and founding story.]"
      />

      <section className="w-full py-space-3xl px-gutter-mobile lg:px-gutter-desktop bg-surface">
        <Container className="grid grid-cols-1 lg:grid-cols-2 gap-space-2xl items-start">
          <div className="flex flex-col gap-space-md">
            <span className="font-label-sm text-label-sm text-secondary font-bold uppercase tracking-widest">
              Our Vision
            </span>
            <h2 className="font-headline-lg text-headline-md lg:text-headline-lg text-primary">
              Authentic Islamic education, accessible worldwide
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              We want to make structured, authentic Islamic education accessible worldwide through
              personalized, one-to-one, technology-enabled online learning — tailored to each
              student&apos;s level, goals, age and schedule.
              <br />
              <br />
              [PLACEHOLDER: replace with the academy&apos;s approved mission/vision statement.]
            </p>
          </div>
          <div className="flex flex-col gap-space-md">
            <span className="font-label-sm text-label-sm text-secondary font-bold uppercase tracking-widest">
              Our Approach
            </span>
            <h2 className="font-headline-lg text-headline-md lg:text-headline-lg text-primary">
              Built around one-to-one attention
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Every class is one-to-one, so pace, feedback and correction are personal rather than
              shared across a group. From the first assessment through to ongoing progress, the
              student&apos;s own level and goals shape the learning plan.
            </p>
          </div>
        </Container>
      </section>

      <section className="w-full py-space-3xl px-gutter-mobile lg:px-gutter-desktop bg-surface-container-low">
        <Container className="flex flex-col gap-space-2xl">
          <SectionHeading
            align="center"
            kicker="Why Families Choose Noor"
            title="What We Stand For"
            className="mx-auto"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg">
            {whyNoorPillars.map((pillar) => (
              <div
                key={pillar.title}
                className="bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm flex flex-col gap-space-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-headline-sm text-secondary">{pillar.icon}</span>
                </div>
                <h3 className="font-title-lg text-title-lg text-primary">{pillar.title}</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="w-full py-space-3xl px-gutter-mobile lg:px-gutter-desktop bg-surface">
        <Container className="bg-primary text-on-primary rounded-2xl shadow-xl p-space-2xl flex flex-col items-center text-center gap-space-md">
          <h2 className="font-headline-lg text-headline-md lg:text-headline-lg text-on-primary max-w-2xl">
            Ready to see it for yourself?
          </h2>
          <p className="font-body-md text-body-md text-primary-fixed-dim max-w-xl">
            Book a free trial class and meet a teacher one-to-one.
          </p>
          <Button href="/free-trial" variant="secondary" icon="calendar_month">
            Book a Free Trial
          </Button>
        </Container>
      </section>
    </>
  );
}
