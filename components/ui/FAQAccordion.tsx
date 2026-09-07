"use client";

import { useState } from "react";
import type { FAQItem } from "@/content/faqs";
import { cn } from "@/lib/utils";

function FAQRow({ item }: { item: FAQItem }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-xs">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex items-center justify-between gap-space-md text-left"
        aria-expanded={open}
      >
        <h4 className="font-title-md text-title-md text-primary font-bold">{item.question}</h4>
        <span
          className={cn(
            "material-symbols-outlined text-secondary text-title-md shrink-0 transition-transform duration-200",
            open && "rotate-180"
          )}
        >
          expand_more
        </span>
      </button>
      {open && (
        <p className="font-body-md text-body-md text-on-surface-variant pt-space-2xs leading-relaxed">
          {item.answer}
        </p>
      )}
    </div>
  );
}

export function FAQAccordion({ items }: { items: FAQItem[] }) {
  return (
    <div className="flex flex-col gap-space-md">
      {items.map((item) => (
        <FAQRow key={item.question} item={item} />
      ))}
    </div>
  );
}
