import { cn } from "@/lib/utils";

type BadgeVariant = "gold" | "emerald" | "neutral";

const variantClasses: Record<BadgeVariant, string> = {
  gold: "bg-secondary-container/40 text-on-secondary-container",
  emerald: "bg-primary-fixed text-on-primary-fixed",
  neutral: "bg-surface-container-high text-primary",
};

export function Badge({
  variant = "neutral",
  icon,
  className,
  children,
}: {
  variant?: BadgeVariant;
  icon?: React.ReactNode;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-space-3xs px-space-xs py-space-3xs rounded-md font-label-sm text-label-sm font-bold",
        variantClasses[variant],
        className
      )}
    >
      {icon && <span className="material-symbols-outlined text-label-sm">{icon}</span>}
      {children}
    </span>
  );
}
