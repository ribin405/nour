"use client";

import { useState } from "react";
import { courses } from "@/content/courses";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

const ageGroups = ["Child (Ages 4–15)", "Adult (16+)"] as const;

export function FreeTrialBanner() {
  const [ageGroup, setAgeGroup] = useState<(typeof ageGroups)[number]>(ageGroups[0]);
  const [courseSlug, setCourseSlug] = useState(courses[1].slug); // default to Qur'an Course
  const [contact, setContact] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const course = courses.find((c) => c.slug === courseSlug);
    const message = `Assalamu alaikum, I'd like to book a free trial class.\n\nWho it's for: ${ageGroup}\nCourse: ${course?.name ?? "Not specified"}\nMy contact (email/WhatsApp): ${
      contact || "Not provided"
    }`;
    window.open(getWhatsAppLink(message), "_blank", "noopener,noreferrer");
  }

  return (
    <section className="w-full py-space-3xl lg:py-space-4xl px-gutter-mobile lg:px-gutter-desktop bg-surface">
      <div className="max-w-container-max mx-auto bg-primary text-on-primary rounded-2xl shadow-xl overflow-hidden p-space-xl lg:p-space-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
          <div className="lg:col-span-6 flex flex-col gap-space-md">
            <div className="inline-flex items-center gap-space-xs bg-primary-container text-on-primary px-space-sm py-space-3xs rounded-full w-fit">
              <span className="material-symbols-outlined text-label-sm text-secondary-fixed">calendar_today</span>
              <span className="font-label-sm text-label-sm uppercase font-bold tracking-wider">
                Zero Risk • Free Assessment
              </span>
            </div>
            <h2 className="font-headline-lg text-headline-md lg:text-headline-lg text-on-primary">
              Start Your Child&apos;s Quranic Journey Today With{" "}
              <span className="italic text-secondary-fixed">Zero Obligation</span>
            </h2>
            <p className="font-body-md text-body-md text-primary-fixed-dim leading-relaxed">
              Reserve a trial evaluation with one of our teachers. We&apos;ll assess current recitation,
              set realistic goals, and provide a clear pathway forward.
            </p>
            <div className="flex items-center gap-space-md font-label-sm text-label-sm text-on-primary/90 pt-space-xs">
              <span className="flex items-center gap-space-3xs">
                <span className="material-symbols-outlined text-secondary-fixed text-label-sm">check</span>
                No Payment Info Needed
              </span>
              <span className="flex items-center gap-space-3xs">
                <span className="material-symbols-outlined text-secondary-fixed text-label-sm">check</span>
                Online Video Classroom
              </span>
            </div>
          </div>

          <div className="lg:col-span-6 bg-surface-container-lowest text-on-surface rounded-xl p-space-lg shadow-lg flex flex-col gap-space-md">
            <h3 className="font-title-lg text-title-lg text-primary font-bold">Claim Free Trial Lesson</h3>

            <form className="flex flex-col gap-space-sm" onSubmit={handleSubmit}>
              <div className="flex flex-col gap-space-3xs">
                <label className="font-label-sm text-label-sm text-on-surface-variant font-bold">
                  Who is the class for?
                </label>
                <div className="grid grid-cols-2 gap-space-xs">
                  {ageGroups.map((group) => (
                    <button
                      key={group}
                      type="button"
                      onClick={() => setAgeGroup(group)}
                      className={cn(
                        "py-space-xs rounded-lg font-label-sm text-label-sm font-bold text-center transition-colors",
                        ageGroup === group
                          ? "bg-primary text-on-primary"
                          : "bg-surface-container hover:bg-surface-container-high text-on-surface"
                      )}
                    >
                      {group}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-space-3xs">
                <label htmlFor="trial-course" className="font-label-sm text-label-sm text-on-surface-variant font-bold">
                  Desired Course of Study
                </label>
                <select
                  id="trial-course"
                  value={courseSlug}
                  onChange={(e) => setCourseSlug(e.target.value)}
                  className="w-full bg-surface-container text-on-surface px-space-md py-space-xs rounded-lg font-body-sm text-body-sm focus:outline-none"
                >
                  {courses.map((c) => (
                    <option key={c.slug} value={c.slug}>
                      {c.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col gap-space-3xs">
                <label htmlFor="trial-contact" className="font-label-sm text-label-sm text-on-surface-variant font-bold">
                  Your Email or WhatsApp Number
                </label>
                <input
                  id="trial-contact"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  className="w-full bg-surface-container text-on-surface px-space-md py-space-xs rounded-lg font-body-sm text-body-sm focus:outline-none"
                  placeholder="e.g. parent@gmail.com or +1 555-0199"
                  type="text"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-secondary hover:bg-on-secondary-container text-on-secondary py-space-md rounded-xl font-label-lg text-label-lg font-bold shadow-md transition-all mt-space-xs"
              >
                Claim Free Trial Lesson Now
              </button>
              <span className="font-label-sm text-label-sm text-on-surface-variant text-center">
                You&apos;ll be redirected to WhatsApp to confirm your trial with our team.
              </span>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
