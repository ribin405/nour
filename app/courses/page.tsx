import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { courses } from "@/content/courses";
import { getWhatsAppLink, whatsappMessages } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Courses",
  description:
    "Explore Noor Islamic Academy's one-to-one online courses: Islamic Studies, Qur'an, Hifz, Spoken Arabic, Arabic Grammar and Tajweed.",
};

export default function CoursesPage() {
  return (
    <>
      <PageHero
        kicker="Our Programs"
        title="Six Structured Learning Paths, One Teacher for You"
        description="Every course is taught one-to-one and paced around the student's level, age and goals. Explore each program below."
      />

      <section className="w-full py-space-3xl px-gutter-mobile lg:px-gutter-desktop bg-surface">
        <Container className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg">
          {courses.map((course) => (
            <div
              key={course.slug}
              className="bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between gap-space-md"
            >
              <div className="flex flex-col gap-space-sm">
                <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-headline-sm text-secondary">{course.icon}</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-primary">{course.name}</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">{course.shortDescription}</p>
                <p className="font-label-sm text-label-sm text-secondary font-bold uppercase tracking-wider">
                  {course.audience}
                </p>
              </div>
              <div className="flex flex-col gap-space-xs pt-space-xs">
                <Link
                  href={`/courses/${course.slug}`}
                  className="w-full bg-primary hover:bg-primary-container text-on-primary py-space-xs rounded-xl font-label-md text-label-md text-center transition-colors"
                >
                  View Course Details
                </Link>
                <a
                  href={getWhatsAppLink(whatsappMessages.course(course.name))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-label-sm text-label-sm text-center text-on-surface-variant hover:text-primary transition-colors flex items-center justify-center gap-space-3xs"
                >
                  <span className="material-symbols-outlined text-label-sm">chat</span>
                  Ask About This Course
                </a>
              </div>
            </div>
          ))}
        </Container>
      </section>
    </>
  );
}
