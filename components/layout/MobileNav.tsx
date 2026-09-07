"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { navLinks, siteConfig } from "@/content/site-config";
import { getWhatsAppLink, whatsappMessages } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

export function MobileNav({ open, onClose }: { open: boolean; onClose: () => void }) {
  const pathname = usePathname();

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div
      className={cn(
        "fixed inset-0 z-[60] xl:hidden transition-opacity duration-300",
        open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
      )}
      aria-hidden={!open}
    >
      {/* Backdrop */}
      <button
        aria-label="Close menu"
        onClick={onClose}
        className="absolute inset-0 bg-on-surface/40 backdrop-blur-sm"
      />

      {/* Drawer panel */}
      <div
        className={cn(
          "absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-surface-container-lowest shadow-xl flex flex-col transition-transform duration-300 ease-out",
          open ? "translate-x-0" : "translate-x-full"
        )}
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-center justify-between px-space-lg py-space-md border-b border-outline-variant/40">
          <div className="flex items-center gap-space-sm">
            <Image
              src="/images/nour-academy-logo.png"
              alt="Noor Islamic Academy Logo"
              width={898}
              height={478}
              className="h-10 w-auto object-contain"
            />
          </div>
          <button
            aria-label="Close menu"
            onClick={onClose}
            className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-surface-container transition-colors"
          >
            <span className="material-symbols-outlined text-primary">close</span>
          </button>
        </div>

        <nav className="flex flex-col gap-space-2xs p-space-md overflow-y-auto">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={onClose}
                className={cn(
                  "px-space-md py-space-sm rounded-lg font-label-md text-label-md transition-colors",
                  isActive
                    ? "bg-primary-container text-on-primary font-bold"
                    : "text-on-surface-variant hover:bg-surface-container hover:text-on-surface"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="mt-auto p-space-md pt-space-lg border-t border-outline-variant/40 flex flex-col gap-space-sm">
          <Link
            href="/free-trial"
            onClick={onClose}
            className="w-full inline-flex items-center justify-center gap-space-2xs bg-secondary hover:bg-on-secondary-container text-on-secondary font-bold px-space-md py-space-sm rounded-xl font-label-md text-label-md shadow-sm transition-colors"
          >
            <span className="material-symbols-outlined text-body-sm">calendar_month</span>
            Book a Free Trial
          </Link>
          <a
            href={getWhatsAppLink(whatsappMessages.general)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-space-2xs bg-surface-container-low hover:bg-surface-container-high text-primary px-space-md py-space-sm rounded-xl font-label-md text-label-md transition-colors"
          >
            <span className="material-symbols-outlined text-body-md">chat</span>
            Chat on WhatsApp
          </a>
          <span className="text-center font-label-sm text-label-sm text-on-surface-variant pt-space-2xs">
            {siteConfig.phoneDisplay}
          </span>
        </div>
      </div>
    </div>
  );
}
