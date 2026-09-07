/**
 * PLACEHOLDER CONTENT
 * -----------------------------------------------------------------------
 * Names, bios, credentials, ratings and photos below come from the
 * approved Stitch design and its AI-generated reference imagery. None of
 * these teachers, credentials or review counts have been confirmed by
 * the academy (see PRD §29: "Which teacher photos/bios are approved?").
 * Treat every credential/rating as an illustrative placeholder — do not
 * publish to production until the academy supplies real teacher data
 * and consented photography.
 * -----------------------------------------------------------------------
 */

export type Teacher = {
  slug: string;
  name: string;
  role: string;
  badge: string;
  bio: string;
  languages: string;
  rating: string;
  photo: string;
};

export const teachers: Teacher[] = [
  {
    slug: "sheikh-ahmad-al-sayed",
    name: "Sheikh Ahmad Al-Sayed",
    role: "Senior Tajweed & Qira'at Instructor",
    badge: "12+ Yrs Exp",
    bio:
      "B.A. & M.A. Islamic Studies. [PLACEHOLDER: Ijazah/Sanad chain claim pending verification.]",
    languages: "Fluent Arabic, English",
    rating: "4.98 (420 reviews) — PLACEHOLDER",
    photo: "/images/teachers/sheikh-ahmad-al-sayed.png",
  },
  {
    slug: "ustadha-maryam-ibrahim",
    name: "Ustadha Maryam Ibrahim",
    role: "Head of Quran for Children & Qaida",
    badge: "Kids Specialist",
    bio:
      "Background in Islamic Studies (English medium). Specialist in early childhood phonetics and positive reinforcement. [PLACEHOLDER: pending academy confirmation.]",
    languages: "Fluent Arabic, English",
    rating: "5.0 (610 reviews) — PLACEHOLDER",
    photo: "/images/teachers/ustadha-maryam-ibrahim.png",
  },
  {
    slug: "ustadh-tariq-mansoor",
    name: "Ustadh Tariq Mansoor",
    role: "Lead Memorization (Hifz) Coach",
    badge: "Hifz Mentor",
    bio:
      "Hafiz of the Qur'an. [PLACEHOLDER: Ijazah chain and mentorship-count claims pending verification.]",
    languages: "Fluent Arabic, English, Urdu",
    rating: "4.95 (380 reviews) — PLACEHOLDER",
    photo: "/images/teachers/ustadh-tariq-mansoor.png",
  },
  {
    slug: "dr-zaynab-mahmoud",
    name: "Dr. Zaynab Mahmoud",
    role: "Arabic Language & Tafseer Faculty",
    badge: "Ph.D. Linguistics",
    bio:
      "Doctorate in Classical Arabic Grammar & Balaghah (Rhetoric). Specializes in helping adult non-native speakers understand the Qur'an directly. [PLACEHOLDER: pending academy confirmation.]",
    languages: "Fluent Arabic, English, French",
    rating: "4.97 (290 reviews) — PLACEHOLDER",
    photo: "/images/teachers/dr-zaynab-mahmoud.png",
  },
];
