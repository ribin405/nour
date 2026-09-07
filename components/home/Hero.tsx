import Image from "next/image";
import Link from "next/link";
import { getWhatsAppLink, whatsappMessages } from "@/lib/whatsapp";

export function Hero() {
  return (
    <section className="relative w-full bg-surface-container-low/70 py-space-2xl lg:py-space-4xl px-gutter-mobile lg:px-gutter-desktop">
      <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-12 gap-space-xl lg:gap-space-2xl items-center">
        {/* Left content column */}
        <div className="lg:col-span-7 flex flex-col gap-space-lg">
          <div className="inline-flex items-center gap-space-xs bg-surface-container-lowest shadow-sm rounded-full px-space-md py-space-2xs w-fit">
            <span className="material-symbols-outlined text-secondary text-label-sm">stars</span>
            <span className="font-label-sm text-label-sm text-on-surface-variant font-bold uppercase tracking-wider">
              Trusted by Muslim Families Worldwide • 1-on-1 Personalized Classes
            </span>
          </div>

          <div className="flex flex-col gap-space-xs">
            <h1 className="font-display-lg text-headline-lg lg:text-display-lg text-primary tracking-tight">
              Master Quran Recitation, Tajweed &amp; Arabic From Home With{" "}
              <span className="italic text-secondary font-display-lg">Certified Scholars</span>
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
              Experience tailored one-to-one Islamic learning for kids and adults. Learn at your own
              pace with Arabic-speaking, Ijazah-certified male &amp; female tutors.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-space-md pt-space-xs">
            <Link
              className="inline-flex items-center justify-center gap-space-xs bg-primary hover:bg-primary-container text-on-primary px-space-xl py-space-md rounded-xl font-label-lg text-label-lg shadow-md hover:shadow-lg transition-all duration-200"
              href="/free-trial"
            >
              <span className="material-symbols-outlined text-secondary-fixed">workspace_premium</span>
              <span>Book Your Free 30-Min Trial Lesson</span>
            </Link>
            <a
              className="inline-flex items-center justify-center gap-space-xs bg-surface-container-lowest hover:bg-surface-container text-primary px-space-lg py-space-md rounded-xl font-label-lg text-label-lg shadow-sm transition-all duration-200"
              href={getWhatsAppLink(whatsappMessages.general)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="material-symbols-outlined text-label-lg text-secondary">chat</span>
              <span>Chat With Us on WhatsApp</span>
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-space-sm pt-space-sm">
            {[
              "Ijazah-Certified Tutors",
              "Male & Female Tutors",
              "Flexible Rescheduling",
              "One-to-One Attention",
            ].map((item) => (
              <div key={item} className="flex items-center gap-space-2xs">
                <span className="material-symbols-outlined text-title-md text-secondary">check_circle</span>
                <span className="font-label-sm text-label-sm text-on-surface font-semibold">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right interactive preview card */}
        <div className="lg:col-span-5 relative">
          <div className="relative bg-surface-container-lowest rounded-2xl shadow-xl overflow-hidden p-space-lg flex flex-col gap-space-md">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-space-xs">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-secondary" />
                </span>
                <span className="font-label-sm text-label-sm text-primary font-bold uppercase tracking-wider">
                  Live Classroom Demo
                </span>
              </div>
            </div>

            <div className="relative rounded-xl overflow-hidden bg-primary-container aspect-[16/10] flex items-end">
              <Image
                src="/images/hero/live-classroom-demo.png"
                alt="A warm, engaging online 1-on-1 Quran tutoring session"
                fill
                className="object-cover mix-blend-overlay opacity-80"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/30 to-transparent" />
              <div className="relative z-10 p-space-md w-full flex items-center justify-between text-on-primary">
                <div className="flex items-center gap-space-xs">
                  <div className="w-10 h-10 rounded-full bg-surface-container-lowest p-space-3xs flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary text-title-md">graphic_eq</span>
                  </div>
                  <div>
                    <p className="font-title-sm text-title-sm text-on-primary leading-tight">
                      Surah Al-Mulk: Verses 1-4
                    </p>
                    <p className="font-label-sm text-label-sm text-primary-fixed-dim">
                      Tajweed Makhraj Correction
                    </p>
                  </div>
                </div>
                <span className="bg-secondary text-on-secondary px-space-xs py-space-3xs rounded-md font-label-sm text-label-sm font-bold">
                  1-on-1 Active
                </span>
              </div>
            </div>

            <div className="bg-surface-container rounded-xl p-space-sm flex flex-col gap-space-xs">
              <div className="flex items-center justify-between">
                <span className="font-label-sm text-label-sm text-on-surface-variant font-bold uppercase tracking-wider">
                  Next Available Slots Today:
                </span>
                <span className="font-label-sm text-label-sm text-secondary font-bold">
                  Timezone: Local (Auto)
                </span>
              </div>
              <div className="grid grid-cols-3 gap-space-xs">
                <span className="bg-surface-container-lowest text-on-surface py-space-xs rounded-lg font-label-sm text-label-sm font-bold shadow-sm text-center">
                  4:30 PM
                </span>
                <span className="bg-surface-container-lowest text-on-surface py-space-xs rounded-lg font-label-sm text-label-sm font-bold shadow-sm text-center">
                  6:00 PM
                </span>
                <span className="bg-secondary text-on-secondary py-space-xs rounded-lg font-label-sm text-label-sm font-bold shadow-sm text-center">
                  7:15 PM
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between bg-surface-container-lowest p-space-sm rounded-xl shadow-sm">
              <div className="flex items-center gap-space-sm">
                <div className="w-8 h-8 rounded-full bg-secondary-fixed flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-body-md">play_arrow</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-title-sm text-title-sm text-on-surface">Interactive Feedback Loop</span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant">
                    Instant Ghunnah &amp; Qalqalah accuracy tracking
                  </span>
                </div>
              </div>
              <svg className="h-6 w-24 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 100 24">
                <path d="M0 12 Q 10 2, 20 12 T 40 12 T 60 4 T 80 20 T 100 12" strokeLinecap="round" strokeWidth="3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
