import { SectionHeading } from "@/components/ui/SectionHeading";
import { testimonials } from "@/content/testimonials";

export function Testimonials() {
  return (
    <section className="w-full py-space-3xl lg:py-space-4xl px-gutter-mobile lg:px-gutter-desktop bg-surface-container-low/60">
      <div className="max-w-container-max mx-auto flex flex-col gap-space-2xl">
        <SectionHeading
          align="center"
          kicker="Global Family Experiences"
          title="Families Learning With Noor Academy"
          description="Illustrative example testimonials — replace with real, permissioned family reviews before launch."
          className="mx-auto"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg">
          {testimonials.map((t) => (
            <div
              key={t.initials}
              className="bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm flex flex-col justify-between gap-space-md"
            >
              <div className="flex flex-col gap-space-sm">
                <div className="flex items-center gap-space-3xs text-secondary">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className="material-symbols-outlined text-title-md" style={{ fontVariationSettings: "'FILL' 1" }}>
                      star
                    </span>
                  ))}
                </div>
                <p className="font-body-md text-body-md text-on-surface italic">&ldquo;{t.quote}&rdquo;</p>
              </div>
              <div className="flex items-center gap-space-sm pt-space-xs">
                <div className="w-12 h-12 rounded-full bg-secondary-container/40 flex items-center justify-center font-bold text-primary font-title-md">
                  {t.initials}
                </div>
                <div className="flex flex-col">
                  <span className="font-title-sm text-title-sm text-primary">{t.name}</span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant">{t.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
