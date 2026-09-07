import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { homeFeaturedCourses } from "@/content/courses";
import { getWhatsAppLink, whatsappMessages } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

export function CoursesGrid() {
  return (
    <section className="w-full py-space-3xl lg:py-space-4xl px-gutter-mobile lg:px-gutter-desktop bg-surface">
      <div className="max-w-container-max mx-auto flex flex-col gap-space-2xl">
        <SectionHeading
          kicker="Rigorous & Inspiring Curricula"
          title="Tailored Islamic & Quran Programs for Every Family Member"
          description="Select from foundational phonics to advanced memorization tracks. All courses feature dedicated one-on-one personal coaching."
          action={
            <Link
              href="/courses"
              className="inline-flex items-center gap-space-2xs font-label-md text-label-md text-primary font-bold hover:text-secondary transition-colors"
            >
              <span>Explore All Courses</span>
              <span className="material-symbols-outlined text-label-sm">arrow_forward</span>
            </Link>
          }
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-lg">
          {homeFeaturedCourses.map((course) => (
            <div
              key={course.title}
              className={cn(
                "relative bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between",
                course.featured && "shadow-md"
              )}
            >
              {course.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-secondary text-on-secondary px-space-sm py-space-3xs rounded-full font-label-sm text-label-sm font-bold tracking-wider uppercase">
                  Most Prestigious
                </div>
              )}
              <div className={cn("flex flex-col gap-space-md", course.featured && "pt-space-xs")}>
                <div className="flex items-center justify-between">
                  <span className="bg-secondary-container/40 text-on-secondary-container px-space-xs py-space-3xs rounded-md font-label-sm text-label-sm font-bold">
                    {course.badge}
                  </span>
                  <span className="material-symbols-outlined text-secondary text-title-md">{course.icon}</span>
                </div>
                <div className="flex flex-col gap-space-xs">
                  <h3 className="font-headline-sm text-headline-sm text-primary">{course.title}</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">{course.description}</p>
                </div>
                <div className="flex flex-col gap-space-2xs pt-space-xs font-label-sm text-label-sm text-on-surface-variant">
                  {course.meta.map((m) => (
                    <div key={m.text} className="flex items-center gap-space-2xs">
                      <span className="material-symbols-outlined text-label-sm text-secondary">{m.icon}</span>
                      <span>{m.text}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-space-xs pt-space-lg">
                <Link
                  href="/free-trial"
                  className={cn(
                    "w-full py-space-xs rounded-xl font-label-md text-label-md text-center transition-colors",
                    course.featured
                      ? "bg-secondary hover:bg-on-secondary-container text-on-secondary font-bold shadow-sm"
                      : "bg-primary hover:bg-primary-container text-on-primary"
                  )}
                >
                  {course.ctaLabel}
                </Link>
                <a
                  href={getWhatsAppLink(whatsappMessages.syllabus(course.title))}
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
        </div>
      </div>
    </section>
  );
}
