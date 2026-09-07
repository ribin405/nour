import { siteConfig } from "@/content/site-config";

/**
 * Builds a wa.me deep link with a context-aware prefilled message, so
 * every CTA on the site (hero, course cards, teacher cards, floating
 * button, free-trial banner) opens WhatsApp with a relevant starting
 * message instead of a blank chat.
 */
export function getWhatsAppLink(message?: string): string {
  const base = `https://wa.me/${siteConfig.whatsappNumber}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

export const whatsappMessages = {
  general: "Assalamu alaikum, I'd like to know more about Noor Islamic Academy.",
  freeTrial: "Assalamu alaikum, I'd like to book a free trial class at Noor Islamic Academy.",
  course: (courseName: string) =>
    `Assalamu alaikum, I'm interested in the ${courseName} course at Noor Islamic Academy. Could you tell me more?`,
  syllabus: (courseName: string) =>
    `Assalamu alaikum, could you please share the syllabus for the ${courseName} course?`,
  teacher: (teacherName: string) =>
    `Assalamu alaikum, I'd like to book a class with ${teacherName} at Noor Islamic Academy.`,
  pricing: "Assalamu alaikum, I'd like to know more about pricing and plans at Noor Islamic Academy.",
} as const;
