import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/content/site-config";
import { getWhatsAppLink, whatsappMessages } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Noor Islamic Academy via WhatsApp, phone or email.",
};

const channels = [
  {
    icon: "chat",
    title: "WhatsApp",
    description: "The fastest way to reach us — ask about courses, pricing or book a trial.",
    action: "Chat on WhatsApp",
    href: getWhatsAppLink(whatsappMessages.general),
    external: true,
  },
  {
    icon: "call",
    title: "Phone",
    description: "[PLACEHOLDER: confirm official phone number with the academy]",
    action: siteConfig.phoneDisplay,
    href: siteConfig.phoneHref,
    external: false,
  },
  {
    icon: "mail",
    title: "Email",
    description: "[PLACEHOLDER: confirm official contact inbox with the academy]",
    action: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    external: false,
  },
] as const;

export default function ContactPage() {
  return (
    <>
      <PageHero
        kicker="Get In Touch"
        title="We'd Love to Hear From You"
        description="Whether you have a question about a course, pricing, or you're ready to book a trial — reach out any way that's convenient."
      />

      <section className="w-full py-space-3xl px-gutter-mobile lg:px-gutter-desktop bg-surface">
        <Container className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
          {channels.map((channel) => (
            <div
              key={channel.title}
              className="bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm flex flex-col gap-space-sm"
            >
              <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-headline-sm text-secondary">{channel.icon}</span>
              </div>
              <h3 className="font-title-lg text-title-lg text-primary">{channel.title}</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">{channel.description}</p>
              <a
                href={channel.href}
                target={channel.external ? "_blank" : undefined}
                rel={channel.external ? "noopener noreferrer" : undefined}
                className="mt-auto inline-flex items-center justify-center gap-space-2xs bg-primary hover:bg-primary-container text-on-primary py-space-xs rounded-xl font-label-md text-label-md transition-colors"
              >
                {channel.action}
              </a>
            </div>
          ))}
        </Container>
      </section>
    </>
  );
}
