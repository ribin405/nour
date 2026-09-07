import { cn } from "@/lib/utils";

export function Container({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("max-w-container-max mx-auto px-gutter-mobile lg:px-gutter-desktop", className)}>
      {children}
    </div>
  );
}
