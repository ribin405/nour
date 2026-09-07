import { Container } from "@/components/ui/Container";

export function PageHero({
  kicker,
  title,
  description,
  children,
}: {
  kicker?: string;
  title: string;
  description?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="w-full bg-surface-container-low/70 py-space-2xl lg:py-space-3xl px-gutter-mobile lg:px-gutter-desktop">
      <Container className="flex flex-col gap-space-md max-w-3xl">
        {kicker && (
          <span className="font-label-sm text-label-sm text-secondary font-bold uppercase tracking-widest">
            {kicker}
          </span>
        )}
        <h1 className="font-display-md text-headline-lg lg:text-display-md text-primary tracking-tight">
          {title}
        </h1>
        {description && (
          <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">{description}</p>
        )}
        {children}
      </Container>
    </section>
  );
}
