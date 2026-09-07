/**
 * PLACEHOLDER CONTENT — DO NOT PUBLISH AS-IS
 * -----------------------------------------------------------------------
 * These testimonials are Stitch-generated sample copy, not real
 * quotes from real families. The PRD explicitly warns against this
 * (§7.7: "Never fabricate testimonials"; §28 risk: "Unverified claims").
 * They're kept here only to preserve the approved visual layout during
 * development. Replace every entry with real, permissioned testimonials
 * before this site goes live.
 * -----------------------------------------------------------------------
 */

export type Testimonial = {
  quote: string;
  initials: string;
  name: string;
  location: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "My 8-year-old daughter was struggling with Arabic letters at our local weekend class. Within a few months of 1-on-1 sessions, she completed the foundational reading course and has been building her memorization with confidence. The structured approach gives us complete peace of mind.",
    initials: "FK",
    name: "PLACEHOLDER NAME — Parent",
    location: "PLACEHOLDER LOCATION • Parent of 2",
  },
  {
    quote:
      "As a busy parent, finding a reliable teacher who connected with my teenage son was tough. His tutor connected with him immediately, and flexible rescheduling has been a lifesaver when things come up.",
    initials: "SR",
    name: "PLACEHOLDER NAME — Parent",
    location: "PLACEHOLDER LOCATION • Parent",
  },
  {
    quote:
      "I always felt intimidated by Arabic recitation as an adult learner. My teacher was patient and encouraging, never rushing. Today I feel far more confident with my recitation and Tajweed.",
    initials: "YB",
    name: "PLACEHOLDER NAME — Adult Learner",
    location: "PLACEHOLDER LOCATION • Adult Learner",
  },
];
