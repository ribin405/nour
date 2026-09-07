/**
 * PLACEHOLDER CONTENT
 * -----------------------------------------------------------------------
 * `courses` (the 6 official program categories + level/module names) is
 * sourced from Nour_Islamic_Academy_Complete_PRD.docx section 8, which
 * itself states: "Final syllabus wording and curriculum ownership must
 * be validated by the academy." Treat level names, descriptions and
 * outcomes below as drafts pending that validation, not published fact.
 *
 * `homeFeaturedCourses` reproduces the 4 featured-course cards exactly as
 * authored in the approved Stitch homepage design (course framing,
 * schedule claims, "Al-Azhar Ijazah chains", "Native Egyptian Arabic
 * Speakers", etc). These are Stitch-generated marketing placeholders,
 * not verified academy facts — replace before launch.
 * -----------------------------------------------------------------------
 */

export type Course = {
  slug: string;
  name: string;
  shortDescription: string;
  icon: string; // Material Symbols Outlined icon name
  audience: string;
  levels: string[];
  outcomes: string[];
};

export const courses: Course[] = [
  {
    slug: "islamic-studies",
    name: "Islamic Studies",
    shortDescription:
      "Structured Islamic Studies classes following the academy's KNM/CIER-based syllabus. [PLACEHOLDER: confirm exact syllabus/accreditation name with the academy.]",
    icon: "auto_stories",
    audience: "Children, teens and adult learners",
    levels: ["Class 1", "Class 2", "Class 3", "Class 4", "Class 5", "Class 6", "Class 7"],
    outcomes: [
      "Build a structured foundation in Islamic knowledge, aqeedah and akhlaq",
      "Progress through a level-based curriculum suited to the student's age",
      "Develop confidence discussing and applying Islamic teachings day to day",
    ],
  },
  {
    slug: "quran-course",
    name: "Qur'an Course",
    shortDescription:
      "From first Arabic letters to Tafsir — a complete Qur'an-reading pathway, separate from the Tajweed and Hifz tracks.",
    icon: "menu_book",
    audience: "Absolute beginners through advanced students",
    levels: [
      "Level 1 – Qur'an Reading Foundation",
      "Level 2 – Reading with Tajweed",
      "Level 3 – Fluency & Error Correction",
      "Level 4 – Advanced Tajweed",
      "Level 5 – Qur'an Memorization Support",
      "Level 6 – Tafsir & Reflection",
    ],
    outcomes: [
      "Read the Qur'an fluently and correctly from the ground up",
      "Apply Tajweed rules consistently while reciting",
      "Move at your own pace, from foundation to Tafsir-level understanding",
    ],
  },
  {
    slug: "hifz",
    name: "Hifz Course",
    shortDescription:
      "One-to-one Qur'an memorization support, from Hifz preparation through multi-Juz memorization.",
    icon: "military_tech",
    audience: "Children, teens and adults pursuing memorization",
    levels: ["Hifz Preparation", "Juz Amma", "Selected Surahs", "Multi-Juz Hifz"],
    outcomes: [
      "Build the memorization habits and daily revision routine (Muraja'ah) needed for Hifz",
      "Memorize Juz Amma, selected Surahs, or work toward multiple Juz at your pace",
      "Receive consistent one-to-one revision and correction from a dedicated teacher",
    ],
  },
  {
    slug: "spoken-arabic",
    name: "Spoken Arabic",
    shortDescription:
      "Practical, conversational Arabic — from first words to everyday fluency.",
    icon: "chat",
    audience: "Beginner to intermediate learners, teens and adults",
    levels: [
      "Beginner",
      "Everyday Conversation",
      "School & Home Vocabulary",
      "Sentence Formation",
      "Conversation Practice",
      "Intermediate Spoken Arabic",
    ],
    outcomes: [
      "Hold everyday conversations in Arabic with confidence",
      "Build practical vocabulary for home, school and daily life",
      "Progress from first words to intermediate conversational fluency",
    ],
  },
  {
    slug: "arabic-grammar",
    name: "Arabic Grammar (Nahw & Sarf)",
    shortDescription:
      "Foundational to advanced Arabic grammar, including I'rab and classical grammar analysis.",
    icon: "translate",
    audience: "Students seeking a deeper, grammar-based understanding of Arabic",
    levels: [
      "Foundation Grammar",
      "Basic Nahw",
      "Basic Sarf",
      "Intermediate Nahw & Sarf",
      "Advanced Grammar",
      "I'rab (Sentence Analysis)",
      "Classical Arabic Grammar",
    ],
    outcomes: [
      "Understand the structural rules (Nahw) and word-formation patterns (Sarf) of Arabic",
      "Analyze sentences (I'rab) with confidence",
      "Build the grammar foundation needed to read classical Arabic texts directly",
    ],
  },
  {
    slug: "tajweed",
    name: "Tajweed Course",
    shortDescription:
      "Focused, in-depth Tajweed instruction — articulation points, characteristics of letters, and the rules of correct recitation.",
    icon: "graphic_eq",
    audience: "Students who already read Qur'an and want to refine their recitation",
    levels: ["Makharij", "Sifath", "Noon & Meem Rules", "Madd Rules", "Waqf & Ibtida"],
    outcomes: [
      "Pronounce every letter from its correct articulation point (Makharij)",
      "Apply the core rules of Tajweed accurately and consistently",
      "Recite with correct pausing and starting points (Waqf & Ibtida)",
    ],
  },
];

export type HomeFeaturedCourse = {
  badge: string;
  icon: string;
  title: string;
  description: string;
  meta: { icon: string; text: string }[];
  featured?: boolean;
  ctaLabel: string;
};

export const homeFeaturedCourses: HomeFeaturedCourse[] = [
  {
    badge: "Ages 4–12 & Beginners",
    icon: "child_care",
    title: "Foundation Quran Reading & Noorani Qaida",
    description:
      "Step-by-step Arabic letter phonetics, connecting glyphs, basic vowels, and gentle pronunciation training paced for young minds.",
    meta: [
      { icon: "person", text: "1-on-1 Individual Sessions" },
      { icon: "schedule", text: "30 or 45 Mins • 2–5x / week" },
    ],
    ctaLabel: "Book Free Trial",
  },
  {
    badge: "Intermediate & Advanced",
    icon: "record_voice_over",
    title: "Quran Recitation with Tajweed Mastery",
    description:
      "Deep mastery of Makharij (articulation points), Sifaat (characteristics), Waqf (pauses), and melodic theoretical application.",
    meta: [
      { icon: "person", text: "1-on-1 Male/Female Scholars" },
      { icon: "schedule", text: "45 or 60 Mins • Flexible Pacing" },
    ],
    ctaLabel: "Book Free Trial",
  },
  {
    badge: "All Ages • Ijazah Track",
    icon: "menu_book",
    title: "Full Quran Memorization (Hifz Program)",
    description:
      "Structured daily revision (Muraja'ah), new verses (Sabaq), and milestone tests. [PLACEHOLDER: Ijazah-chain claim pending academy verification.]",
    meta: [
      { icon: "military_tech", text: "Dedicated Hafiz Mentorship" },
      { icon: "schedule", text: "Daily or 4x / week Tracks" },
    ],
    featured: true,
    ctaLabel: "Enroll in Hifz Track",
  },
  {
    badge: "Youth & Adults",
    icon: "translate",
    title: "Classical & Conversational Arabic",
    description:
      "Direct Quranic vocabulary comprehension, Madinah Arabic method, Nahw (grammar), and practical conversational fluency.",
    meta: [
      { icon: "person", text: "1-on-1 Arabic-Speaking Teachers" },
      { icon: "schedule", text: "45 Mins • 2–4x / week" },
    ],
    ctaLabel: "Book Free Trial",
  },
];
