# Noor Islamic Academy — Website

Frontend-only marketing & lead-generation site for Noor Islamic Academy. Built with Next.js (App Router), TypeScript and Tailwind CSS. No backend, database, auth, or LMS — by design (see the PRD). WhatsApp is the primary conversion channel; forms build a prefilled `wa.me` link instead of posting anywhere.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint
```

## Project structure

- `app/` — one route per page (App Router). `courses/[slug]` is dynamic, driven by `content/courses.ts`.
- `components/home/` — one component per homepage section, ported from the Stitch design (`code.html`).
- `components/layout/` — `Header` (incl. mobile drawer), `Footer`, floating WhatsApp button.
- `components/ui/` — shared primitives (`Button`, `Badge`, `SectionHeading`, `PageHero`, `FAQAccordion`, `Container`).
- `components/free-trial/FreeTrialForm.tsx` — the full free-trial form; submits by opening WhatsApp with the answers prefilled.
- `content/` — all site copy/data as typed arrays (courses, teachers, testimonials, FAQs, stats, nav links, site config). Edit these, not the components, to change content.
- `lib/whatsapp.ts` — builds `wa.me` links with context-aware prefilled messages. `lib/utils.ts` — small `cn()` classnames helper.
- `tailwind.config.ts` — design tokens ported 1:1 from the Stitch export (`stitch_noor_islamic_academy_website.zip`).

## ⚠️ Before this goes live

Almost every content file has a `PLACEHOLDER` comment block at the top. This is intentional — the Stitch design shipped with sample marketing copy (stats, teacher bios, testimonials, accreditation claims) that has **not** been confirmed by the academy. Search the repo for `PLACEHOLDER` and resolve each one before launch:

```bash
grep -rn "PLACEHOLDER" content/ app/ components/
```

Highest-priority items:

- **`content/site-config.ts`** — real WhatsApp number (`whatsappNumber`), phone, email, production domain (`url`), social links.
- **`content/teachers.ts`** — real teacher names, bios, credentials, and photos (current photos are AI-generated placeholders from the Stitch export, not real people).
- **`content/testimonials.ts`** — replace with real, permissioned testimonials. Do not publish the current sample quotes/names as-is.
- **`content/stats.ts`** — every stat and accreditation claim (e.g. "Al-Azhar University Affiliated") needs the academy's explicit sign-off before publishing; these are unverified claims about a real third-party institution.
- **Pricing / Privacy Policy / Terms** — these pages describe structure only; no prices, and the legal pages are explicitly marked as drafts, not reviewed legal text.
- **Favicon** — none is set yet; add one via `app/icon.png` (or similar) when brand assets are finalized.

## Notes on deliberate departures from the raw Stitch export

- The Stitch export only designed the homepage; interior pages (About, Courses, Teachers, Pricing, etc.) were extrapolated using the same design system/components, not pixel-designed in Stitch.
- A mobile slide-in drawer nav was added (not in the Stitch export, which had no mobile design).
- The header's profile-avatar icon was dropped per instruction (no auth/dashboard in scope).
- A few pieces of Stitch sample copy that implied features out of scope for this phase (a student "portal", downloadable PDF syllabi, a fake "2 slots left today" urgency claim) were reworded to match what the site actually does.
- The homepage's "Download Syllabus (PDF)" and course-filter tabs (non-functional in the static design) were replaced with real WhatsApp CTAs / removed, since there's no backend to serve filtering or PDFs from.
