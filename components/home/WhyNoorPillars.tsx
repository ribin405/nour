import { SectionHeading } from "@/components/ui/SectionHeading";
import { whyNoorPillars } from "@/content/why-noor";

export function WhyNoorPillars() {
  return (
    <section className="w-full py-space-3xl lg:py-space-4xl px-gutter-mobile lg:px-gutter-desktop bg-surface">
      <div className="max-w-container-max mx-auto flex flex-col gap-space-2xl">
        <SectionHeading
          align="center"
          kicker="The Noor Difference"
          title="Designed With Families in Mind: Uncompromising Quality & Trust"
          description="We combine traditional transmission with a secure, enriching online environment for Islamic learning."
          className="mx-auto"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg">
          {whyNoorPillars.map((pillar) => (
            <div
              key={pillar.title}
              className="bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm hover:shadow-md transition-shadow flex flex-col gap-space-sm"
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
      </div>
    </section>
  );
}
