import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { footerLinks, siteConfig } from "@/content/site-config";
import { courses } from "@/content/courses";
import { getWhatsAppLink, whatsappMessages } from "@/lib/whatsapp";

export function Footer() {
  return (
    <footer className="w-full bg-surface-container-low text-on-surface py-space-3xl">
      <Container className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-xl mb-space-2xl">
        <div className="flex flex-col gap-space-md">
          <div className="flex items-center gap-space-sm">
            <Image
              src="/images/nour-academy-logo.png"
              alt="Noor Islamic Academy Logo"
              width={898}
              height={478}
              className="h-14 w-auto object-contain"
            />
          </div>
          <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
            One-to-one online classes in Qur&apos;an, Tajweed, Hifz, Arabic and Islamic Studies —
            designed around every student&apos;s level, goals and schedule.
          </p>
          <p className="font-label-sm text-label-sm text-on-surface-variant/70 italic">
            [PLACEHOLDER: accreditation badges shown here pending academy verification]
          </p>
        </div>

        <div className="flex flex-col gap-space-sm">
          <h4 className="font-title-md text-title-md text-primary">Our Courses</h4>
          <ul className="flex flex-col gap-space-xs font-body-sm text-body-sm text-on-surface-variant">
            {courses.map((course) => (
              <li key={course.slug}>
                <Link href={`/courses/${course.slug}`} className="hover:text-primary transition-colors">
                  {course.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-space-sm">
          <h4 className="font-title-md text-title-md text-primary">Academy</h4>
          <ul className="flex flex-col gap-space-xs font-body-sm text-body-sm text-on-surface-variant">
            {footerLinks.academy.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-primary transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-space-md">
          <h4 className="font-title-md text-title-md text-primary">Have a Question?</h4>
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            Chat with our team on WhatsApp for course guidance, scheduling or pricing questions.
          </p>
          <a
            href={getWhatsAppLink(whatsappMessages.general)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-space-2xs bg-primary text-on-primary py-space-xs rounded-xl font-label-md text-label-md hover:bg-primary-container transition-colors"
          >
            <span className="material-symbols-outlined text-body-sm">chat</span>
            Chat on WhatsApp
          </a>
        </div>
      </Container>

      <Container className="pt-space-lg border-t border-outline-variant/40 flex flex-col md:flex-row items-center justify-between gap-space-sm font-label-sm text-label-sm text-on-surface-variant">
        <p>
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
        <div className="flex items-center gap-space-md">
          {footerLinks.legal.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-primary transition-colors">
              {link.label}
            </Link>
          ))}
        </div>
      </Container>
    </footer>
  );
}
