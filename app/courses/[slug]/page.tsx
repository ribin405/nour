import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { courses } from "@/content/courses";
import { getWhatsAppLink, whatsappMessages } from "@/lib/whatsapp";

export function generateStaticParams() {
  return courses.map((course) => ({ slug: course.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const course = courses.find((c) => c.slug === slug);
  if (!course) return {};
  return {
    title: course.name,
    description: course.shortDescription,
  };
}

export default async function CourseDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const course = courses.find((c) => c.slug === slug);
  if (!course) notFound();

  return (
    <>
      <section className="w-full bg-surface-container-low/70 py-space-2xl lg:py-space-3xl px-gutter-mobile lg:px-gutter-desktop">
        <Container className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
          <div className="lg:col-span-8 flex flex-col gap-space-md">
            <Link
              href="/courses"
              className="inline-flex items-center gap-space-2xs font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors w-fit"
            >
              <span className="material-symbols-outlined text-label-sm">arrow_back</span>
              All Courses
            </Link>
            <div className="w-14 h-14 rounded-xl bg-surface-container-lowest shadow-sm flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-headline-md text-secondary">{course.icon}</span>
            </div>
            <h1 className="font-display-md text-headline-lg lg:text-display-md text-primary tracking-tight">
              {course.name}
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed max-w-2xl">
              {course.shortDescription}
            </p>
            <p className="font-label-md text-label-md text-secondary font-bold uppercase tracking-wider">
              For: {course.audience}
            </p>
          </div>
          <div className="lg:col-span-4 flex flex-col gap-space-sm bg-surface-container-lowest rounded-2xl shadow-lg p-space-lg">
            <h3 className="font-title-lg text-title-lg text-primary font-bold">Interested in this course?</h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Book a free trial or ask our team a question on WhatsApp.
            </p>
            <Button href="/free-trial" variant="primary" icon="calendar_month">
              Book Free Trial
            </Button>
            <a
              href={getWhatsAppLink(whatsappMessages.course(course.name))}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-space-2xs bg-surface-container-low hover:bg-surface-container-high text-primary px-space-md py-space-xs rounded-xl font-label-md text-label-md transition-colors"
            >
              <span className="material-symbols-outlined text-body-md">chat</span>
              Ask About This Course
            </a>
          </div>
        </Container>
      </section>

      <section className="w-full py-space-3xl px-gutter-mobile lg:px-gutter-desktop bg-surface">
        <Container className="grid grid-cols-1 lg:grid-cols-12 gap-space-2xl">
          <div className="lg:col-span-7 flex flex-col gap-space-2xl">
            <div className="flex flex-col gap-space-sm">
              <h2 className="font-headline-lg text-headline-md text-primary">Course Levels & Modules</h2>
              <p className="font-body-sm text-body-sm text-on-surface-variant italic">
                [PLACEHOLDER: level names below are drafts pending final syllabus approval by the academy.]
              </p>
              <div className="flex flex-col gap-space-xs">
                {course.levels.map((level, i) => (
                  <div
                    key={level}
                    className="flex items-center gap-space-md bg-surface-container-lowest rounded-xl p-space-md shadow-sm"
                  >
                    <span className="w-8 h-8 shrink-0 rounded-full bg-primary-container text-on-primary flex items-center justify-center font-label-sm text-label-sm font-bold">
                      {i + 1}
                    </span>
                    <span className="font-title-sm text-title-sm text-primary">{level}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-space-sm">
              <h2 className="font-headline-lg text-headline-md text-primary">Learning Outcomes</h2>
              <ul className="flex flex-col gap-space-xs">
                {course.outcomes.map((outcome) => (
                  <li key={outcome} className="flex items-start gap-space-xs font-body-md text-body-md text-on-surface-variant">
                    <span className="material-symbols-outlined text-secondary text-title-md shrink-0">check_circle</span>
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-space-sm">
              <h2 className="font-headline-lg text-headline-md text-primary">Class Format</h2>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                All classes are one-to-one with a dedicated teacher, held live online on a schedule
                that works for your timezone. [PLACEHOLDER: confirm exact session length, weekly
                frequency and video platform with the academy.]
              </p>
            </div>
          </div>

          <aside className="lg:col-span-5 flex flex-col gap-space-lg">
            <div className="bg-surface-container-low rounded-2xl p-space-lg flex flex-col gap-space-sm">
              <h3 className="font-title-lg text-title-lg text-primary font-bold">Who This Course Is For</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">{course.audience}</p>
            </div>
            <div className="bg-surface-container-low rounded-2xl p-space-lg flex flex-col gap-space-sm">
              <h3 className="font-title-lg text-title-lg text-primary font-bold">Assessment & Progress</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Your teacher assesses your current level in the first session and builds a learning
                plan around it, with ongoing feedback as you progress. [PLACEHOLDER: confirm exact
                progress-reporting process with the academy.]
              </p>
            </div>
            <div className="bg-primary text-on-primary rounded-2xl p-space-lg flex flex-col gap-space-sm items-start">
              <h3 className="font-title-lg text-title-lg text-on-primary font-bold">Ready to start?</h3>
              <p className="font-body-sm text-body-sm text-primary-fixed-dim">
                Book a free trial for {course.name} today.
              </p>
              <Button href="/free-trial" variant="secondary" icon="calendar_month">
                Book Free Trial
              </Button>
            </div>
          </aside>
        </Container>
      </section>
    </>
  );
}
