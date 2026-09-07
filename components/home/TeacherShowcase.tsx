import Link from "next/link";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { teachers } from "@/content/teachers";

export function TeacherShowcase() {
  return (
    <section className="w-full py-space-3xl lg:py-space-4xl px-gutter-mobile lg:px-gutter-desktop bg-surface">
      <div className="max-w-container-max mx-auto flex flex-col gap-space-2xl">
        <SectionHeading
          kicker="Our Faculty"
          title="Learn From Verified Scholars & Teachers"
          description="Every tutor is vetted for qualifications, teaching ability, and the patience needed to work one-to-one with children and adults alike."
          action={
            <Link
              href="/teachers"
              className="inline-flex items-center gap-space-2xs font-label-md text-label-md text-primary font-bold hover:text-secondary transition-colors"
            >
              <span>Meet All Our Teachers</span>
              <span className="material-symbols-outlined text-label-sm">arrow_forward</span>
            </Link>
          }
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-lg">
          {teachers.map((teacher) => (
            <Link
              key={teacher.slug}
              href="/teachers"
              className="bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="relative aspect-square bg-surface-container">
                <Image
                  src={teacher.photo}
                  alt={`Portrait of ${teacher.name}`}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                />
                <div className="absolute bottom-3 left-3 bg-primary text-on-primary px-space-xs py-space-3xs rounded-md font-label-sm text-label-sm font-bold">
                  {teacher.badge}
                </div>
              </div>
              <div className="p-space-md flex flex-col gap-space-sm flex-1 justify-between">
                <div className="flex flex-col gap-space-2xs">
                  <h4 className="font-title-lg text-title-lg text-primary">{teacher.name}</h4>
                  <p className="font-label-sm text-label-sm text-secondary font-bold">{teacher.role}</p>
                </div>
                <div className="pt-space-xs font-label-sm text-label-sm text-on-surface-variant">
                  <span>{teacher.languages}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
