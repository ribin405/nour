import { cn } from "@/lib/utils";

export function SectionHeading({
  kicker,
  title,
  description,
  align = "left",
  action,
  className,
}: {
  kicker?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  action?: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col md:flex-row md:items-end justify-between gap-space-md",
        align === "center" && "text-center max-w-2xl mx-auto flex-col items-center",
        className
      )}
    >
      <div className={cn("flex flex-col gap-space-xs max-w-2xl", align === "center" && "items-center")}>
        {kicker && (
          <span className="font-label-sm text-label-sm text-secondary font-bold uppercase tracking-widest">
            {kicker}
          </span>
        )}
        <h2 className="font-headline-lg text-headline-md lg:text-headline-lg text-primary">{title}</h2>
        {description && (
          <p className="font-body-md text-body-md text-on-surface-variant">{description}</p>
        )}
      </div>
      {action}
    </div>
  );
}
