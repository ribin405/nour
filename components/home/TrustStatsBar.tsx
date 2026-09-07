import { homeStats, accreditations } from "@/content/stats";
import { CountUp } from "@/components/ui/CountUp";

export function TrustStatsBar() {
  return (
    <section className="w-full bg-primary text-on-primary py-space-xl px-gutter-mobile lg:px-gutter-desktop">
      <div className="max-w-container-max mx-auto flex flex-col gap-space-xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-space-lg text-center">
          {homeStats.map((stat, i) => (
            <div key={stat.label} className="flex flex-col items-center">
              <CountUp
                value={stat.value}
                suffix={stat.suffix}
                delay={i * 120}
                className="font-display-md text-headline-lg lg:text-display-md text-secondary-fixed"
              />
              <span className="font-label-md text-label-md text-primary-fixed-dim uppercase tracking-wider">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        <div className="pt-space-md flex flex-wrap items-center justify-center gap-space-md lg:gap-space-xl text-primary-fixed-dim">
          {accreditations.map((item) => (
            <div key={item.label} className="flex items-center gap-space-2xs">
              <span className="material-symbols-outlined text-title-md text-secondary-fixed">{item.icon}</span>
              <span className="font-label-sm text-label-sm font-bold tracking-wider uppercase">{item.label}</span>
            </div>
          ))}
        </div>
        <p className="text-center font-label-sm text-label-sm text-primary-fixed-dim/80">
          [PLACEHOLDER: figures and accreditations above are pending verification by the academy]
        </p>
      </div>
    </section>
  );
}
