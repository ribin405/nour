import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/content/site-config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Noor Islamic Academy.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero kicker="Legal" title="Privacy Policy" />

      <section className="w-full py-space-3xl px-gutter-mobile lg:px-gutter-desktop bg-surface">
        <Container className="max-w-3xl flex flex-col gap-space-lg font-body-md text-body-md text-on-surface-variant leading-relaxed">
          <div className="bg-secondary-container/30 border border-secondary/30 rounded-xl p-space-md font-body-sm text-body-sm text-on-secondary-container">
            <strong>DRAFT — NOT LEGAL ADVICE.</strong> This is placeholder text describing the site
            as currently built. It has not been reviewed by a lawyer and must be replaced with a
            policy approved by the academy (and, given this site is aimed at families with
            children internationally, ideally reviewed for child-privacy compliance such as
            COPPA/GDPR-K where applicable) before launch.
          </div>

          <div>
            <h2 className="font-headline-md text-headline-sm text-primary mb-space-sm">1. Overview</h2>
            <p>
              This website is currently a frontend-only marketing site for {siteConfig.name}. It has
              no backend server or database: forms on this site (such as the Free Trial form) do not
              submit data to us directly — they open WhatsApp with your information pre-filled so you
              can choose to send it to our team yourself.
            </p>
          </div>

          <div>
            <h2 className="font-headline-md text-headline-sm text-primary mb-space-sm">2. Information We Receive</h2>
            <p>
              When you contact us via WhatsApp, phone or email using the links on this site, we
              receive whatever information you choose to send us (e.g. name, age of student,
              contact details, course interest). This is subject to WhatsApp&apos;s own privacy
              policy for messages sent through their platform.
            </p>
          </div>

          <div>
            <h2 className="font-headline-md text-headline-sm text-primary mb-space-sm">3. Cookies & Analytics</h2>
            <p>
              [PLACEHOLDER: this section should describe any analytics (e.g. Google Analytics) or
              cookies added to the site, once implemented.]
            </p>
          </div>

          <div>
            <h2 className="font-headline-md text-headline-sm text-primary mb-space-sm">4. Children&apos;s Privacy</h2>
            <p>
              [PLACEHOLDER: this section must describe how the academy handles data for students
              under 13/16 and how parental consent is obtained, per applicable law in the countries
              served.]
            </p>
          </div>

          <div>
            <h2 className="font-headline-md text-headline-sm text-primary mb-space-sm">5. Contact Us</h2>
            <p>
              Questions about this policy can be sent to {siteConfig.email}.{" "}
              [PLACEHOLDER: confirm official contact details.]
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
