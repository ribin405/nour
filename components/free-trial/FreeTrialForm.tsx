"use client";

import { useState } from "react";
import { courses } from "@/content/courses";
import { getWhatsAppLink } from "@/lib/whatsapp";

type FormState = {
  name: string;
  studentAge: string;
  country: string;
  whatsapp: string;
  email: string;
  courseSlug: string;
  currentLevel: string;
  preferredDays: string;
  preferredTime: string;
  timezone: string;
  teacherGenderPreference: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  studentAge: "",
  country: "",
  whatsapp: "",
  email: "",
  courseSlug: courses[1].slug,
  currentLevel: "",
  preferredDays: "",
  preferredTime: "",
  timezone: "",
  teacherGenderPreference: "No preference",
  message: "",
};

const labelClass = "font-label-sm text-label-sm text-on-surface-variant font-bold";
const inputClass =
  "w-full bg-surface-container text-on-surface px-space-md py-space-sm rounded-lg font-body-sm text-body-sm focus:outline-none focus:ring-2 focus:ring-primary/30 border border-transparent focus:border-primary";

export function FreeTrialForm() {
  const [form, setForm] = useState<FormState>(initialState);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const course = courses.find((c) => c.slug === form.courseSlug);

    const lines = [
      "Assalamu alaikum, I'd like to book a free trial class at Noor Islamic Academy.",
      "",
      `Parent/Student Name: ${form.name || "-"}`,
      `Student Age: ${form.studentAge || "-"}`,
      `Country: ${form.country || "-"}`,
      `WhatsApp Number: ${form.whatsapp || "-"}`,
      `Email: ${form.email || "-"}`,
      `Interested Course: ${course?.name ?? "-"}`,
      `Current Level: ${form.currentLevel || "-"}`,
      `Preferred Days: ${form.preferredDays || "-"}`,
      `Preferred Time: ${form.preferredTime || "-"}`,
      `Timezone: ${form.timezone || "-"}`,
      `Teacher Gender Preference: ${form.teacherGenderPreference}`,
      form.message ? `Additional Message: ${form.message}` : undefined,
    ].filter(Boolean);

    window.open(getWhatsAppLink(lines.join("\n")), "_blank", "noopener,noreferrer");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-surface-container-lowest rounded-2xl shadow-lg p-space-lg lg:p-space-xl flex flex-col gap-space-md"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
        <div className="flex flex-col gap-space-3xs">
          <label className={labelClass} htmlFor="name">
            Parent / Student Name
          </label>
          <input
            id="name"
            required
            className={inputClass}
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            placeholder="Full name"
          />
        </div>
        <div className="flex flex-col gap-space-3xs">
          <label className={labelClass} htmlFor="studentAge">
            Student Age
          </label>
          <input
            id="studentAge"
            className={inputClass}
            value={form.studentAge}
            onChange={(e) => update("studentAge", e.target.value)}
            placeholder="e.g. 9"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
        <div className="flex flex-col gap-space-3xs">
          <label className={labelClass} htmlFor="country">
            Country
          </label>
          <input
            id="country"
            className={inputClass}
            value={form.country}
            onChange={(e) => update("country", e.target.value)}
            placeholder="Country of residence"
          />
        </div>
        <div className="flex flex-col gap-space-3xs">
          <label className={labelClass} htmlFor="timezone">
            Timezone
          </label>
          <input
            id="timezone"
            className={inputClass}
            value={form.timezone}
            onChange={(e) => update("timezone", e.target.value)}
            placeholder="e.g. GMT+4, EST"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
        <div className="flex flex-col gap-space-3xs">
          <label className={labelClass} htmlFor="whatsapp">
            WhatsApp Number
          </label>
          <input
            id="whatsapp"
            className={inputClass}
            value={form.whatsapp}
            onChange={(e) => update("whatsapp", e.target.value)}
            placeholder="+1 555 0199"
          />
        </div>
        <div className="flex flex-col gap-space-3xs">
          <label className={labelClass} htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            className={inputClass}
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            placeholder="parent@example.com"
          />
        </div>
      </div>

      <div className="flex flex-col gap-space-3xs">
        <label className={labelClass} htmlFor="courseSlug">
          Interested Course
        </label>
        <select
          id="courseSlug"
          className={inputClass}
          value={form.courseSlug}
          onChange={(e) => update("courseSlug", e.target.value)}
        >
          {courses.map((c) => (
            <option key={c.slug} value={c.slug}>
              {c.name}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-space-3xs">
        <label className={labelClass} htmlFor="currentLevel">
          Current Level (if known)
        </label>
        <input
          id="currentLevel"
          className={inputClass}
          value={form.currentLevel}
          onChange={(e) => update("currentLevel", e.target.value)}
          placeholder="e.g. Beginner, can read Arabic slowly"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
        <div className="flex flex-col gap-space-3xs">
          <label className={labelClass} htmlFor="preferredDays">
            Preferred Days
          </label>
          <input
            id="preferredDays"
            className={inputClass}
            value={form.preferredDays}
            onChange={(e) => update("preferredDays", e.target.value)}
            placeholder="e.g. Weekday evenings"
          />
        </div>
        <div className="flex flex-col gap-space-3xs">
          <label className={labelClass} htmlFor="preferredTime">
            Preferred Time
          </label>
          <input
            id="preferredTime"
            className={inputClass}
            value={form.preferredTime}
            onChange={(e) => update("preferredTime", e.target.value)}
            placeholder="e.g. 6-8 PM"
          />
        </div>
      </div>

      <div className="flex flex-col gap-space-3xs">
        <label className={labelClass} htmlFor="teacherGenderPreference">
          Teacher Gender Preference
        </label>
        <select
          id="teacherGenderPreference"
          className={inputClass}
          value={form.teacherGenderPreference}
          onChange={(e) => update("teacherGenderPreference", e.target.value)}
        >
          <option>No preference</option>
          <option>Male teacher</option>
          <option>Female teacher</option>
        </select>
      </div>

      <div className="flex flex-col gap-space-3xs">
        <label className={labelClass} htmlFor="message">
          Additional Message (optional)
        </label>
        <textarea
          id="message"
          rows={3}
          className={inputClass}
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
          placeholder="Anything else we should know?"
        />
      </div>

      <button
        type="submit"
        className="w-full inline-flex items-center justify-center gap-space-2xs bg-secondary hover:bg-on-secondary-container text-on-secondary py-space-md rounded-xl font-label-lg text-label-lg font-bold shadow-md transition-all mt-space-xs"
      >
        <span className="material-symbols-outlined text-body-sm">chat</span>
        Continue on WhatsApp
      </button>
      <p className="font-label-sm text-label-sm text-on-surface-variant text-center">
        We&apos;ll open WhatsApp with your details filled in — just hit send to reach our team.
      </p>
    </form>
  );
}
