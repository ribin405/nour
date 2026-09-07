"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navLinks, siteConfig } from "@/content/site-config";
import { getWhatsAppLink, whatsappMessages } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";
import { MobileNav } from "./MobileNav";

// Tailwind's xl breakpoint — must match the `xl:hidden` on the drawer/toggle below.
const XL_BREAKPOINT_QUERY = "(min-width: 1280px)";

export function Header() {
  const pathname = usePathname();
  const [drawerOpen, setDrawerOpen] = useState(false);

  // The drawer (and its scroll-lock) only makes sense below the xl breakpoint,
  // where the toggle/close button are visible. If the viewport crosses into xl
  // while the drawer is open (resize, rotation, devtools device toolbar), force
  // it closed so body scroll never stays locked with no visible way to close
  // the (now CSS-hidden) drawer. matchMedia is used instead of a resize
  // listener since it reliably fires under viewport/device emulation too.
  useEffect(() => {
    const mql = window.matchMedia(XL_BREAKPOINT_QUERY);
    function handleChange(e: MediaQueryListEvent | MediaQueryList) {
      if (e.matches) setDrawerOpen(false);
    }
    handleChange(mql);
    mql.addEventListener("change", handleChange);
    return () => mql.removeEventListener("change", handleChange);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-surface-container-lowest/95 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      {/* Utility bar */}
      <div className="hidden sm:block bg-primary text-on-primary py-space-2xs px-gutter-mobile lg:px-gutter-desktop">
        <div className="max-w-container-max mx-auto flex items-center justify-between font-label-sm text-label-sm">
          <div className="flex items-center gap-space-md">
            <span className="inline-flex items-center gap-space-3xs bg-primary-container text-on-primary px-space-xs py-space-3xs rounded-full">
              <span className="material-symbols-outlined text-label-sm">verified</span>
              <span>{siteConfig.trustBadges[0].label}</span>
            </span>
            <span className="hidden md:inline-flex items-center gap-space-2xs text-primary-fixed-dim">
              <span className="material-symbols-outlined text-label-sm">public</span>
              <span>{siteConfig.trustBadges[1].label}</span>
            </span>
          </div>
          <div className="flex items-center gap-space-lg">
            <a
              className="inline-flex items-center gap-space-2xs text-on-primary hover:text-secondary-fixed transition-colors"
              href={siteConfig.phoneHref}
            >
              <span className="material-symbols-outlined text-label-sm">call</span>
              <span>{siteConfig.phoneDisplay}</span>
            </a>
            <a
              className="inline-flex items-center gap-space-2xs text-on-primary hover:text-secondary-fixed transition-colors"
              href={getWhatsAppLink(whatsappMessages.general)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="material-symbols-outlined text-label-sm">chat</span>
              <span>WhatsApp Direct</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main header row */}
      <div className="h-16 sm:h-20 max-w-container-max mx-auto px-gutter-mobile lg:px-gutter-desktop flex items-center justify-between gap-space-sm sm:gap-space-md">
        <Link href="/" className="flex items-center gap-space-sm shrink-0">
          <Image
            src="/images/nour-academy-logo.png"
            alt="Noor Islamic Academy Logo"
            width={898}
            height={478}
            className="h-10 sm:h-14 w-auto object-contain"
            priority
          />
        </Link>

        <nav className="hidden xl:flex items-center gap-space-sm">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "px-space-xs py-space-2xs font-label-md text-label-md transition-colors rounded-lg",
                  isActive
                    ? "bg-primary-container text-on-primary font-bold"
                    : "text-on-surface-variant hover:text-on-surface"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-space-xs sm:gap-space-sm shrink-0">
          <a
            className="hidden sm:inline-flex items-center gap-space-2xs bg-surface-container-low text-primary px-space-sm py-space-xs rounded-xl font-label-md text-label-md hover:bg-surface-container-high transition-colors"
            href={getWhatsAppLink(whatsappMessages.general)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="material-symbols-outlined text-body-md text-primary-container">forum</span>
            <span>WhatsApp Us</span>
          </a>
          <Link
            className="inline-flex items-center gap-space-2xs bg-secondary text-on-secondary hover:bg-on-secondary-container px-space-sm sm:px-space-md py-space-xs rounded-xl font-label-sm sm:font-label-md text-label-sm sm:text-label-md shadow-sm transition-all whitespace-nowrap"
            href="/free-trial"
          >
            <span className="material-symbols-outlined text-body-sm">calendar_month</span>
            <span className="hidden sm:inline">Book a Free Trial</span>
            <span className="sm:hidden">Book Trial</span>
          </Link>
          <button
            aria-label="Open menu"
            onClick={() => setDrawerOpen(true)}
            className="xl:hidden w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-lg hover:bg-surface-container-low transition-colors shrink-0"
          >
            <span className="material-symbols-outlined text-primary">menu</span>
          </button>
        </div>
      </div>

      <MobileNav open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </header>
  );
}
