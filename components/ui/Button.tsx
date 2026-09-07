import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-primary hover:bg-primary-container text-on-primary shadow-sm",
  secondary:
    "bg-secondary hover:bg-on-secondary-container text-on-secondary font-bold shadow-sm",
  outline:
    "border-[1.5px] border-primary text-primary hover:bg-primary/[0.08] bg-transparent",
  ghost:
    "bg-surface-container-low text-primary hover:bg-surface-container-high",
};

type CommonProps = {
  variant?: ButtonVariant;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  className?: string;
  children: React.ReactNode;
};

type ButtonAsLink = CommonProps & {
  href: string;
  target?: string;
  rel?: string;
};

type ButtonAsButton = CommonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonProps = ButtonAsLink | ButtonAsButton;

const baseClasses =
  "inline-flex items-center justify-center gap-space-2xs px-space-md py-space-xs rounded-xl font-label-md text-label-md transition-all duration-200 hover:-translate-y-px";

export function Button(props: ButtonProps) {
  const { variant = "primary", icon, iconPosition = "left", className, children } = props;
  const classes = cn(baseClasses, variantClasses[variant], className);

  const content = (
    <>
      {icon && iconPosition === "left" && (
        <span className="material-symbols-outlined text-body-sm">{icon}</span>
      )}
      <span>{children}</span>
      {icon && iconPosition === "right" && (
        <span className="material-symbols-outlined text-body-sm">{icon}</span>
      )}
    </>
  );

  if ("href" in props && props.href) {
    const { href, target, rel } = props;
    return (
      <Link href={href} target={target} rel={rel} className={classes}>
        {content}
      </Link>
    );
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { variant: _variant, icon: _icon, iconPosition: _iconPosition, className: _className, children: _children, href: _href, ...buttonProps } =
    props as ButtonAsButton;

  return (
    <button {...buttonProps} className={classes}>
      {content}
    </button>
  );
}
