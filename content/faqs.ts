/**
 * PLACEHOLDER CONTENT
 * -----------------------------------------------------------------------
 * Sourced from the approved Stitch homepage FAQ copy. Policy specifics
 * (rescheduling windows, billing cadence, refund guarantees) are
 * unverified — see PRD §29 ("cancellation/rescheduling policy?"). One
 * answer originally referenced a "student dashboard"; since this build
 * is explicitly frontend-only with no student portal, that line was
 * rewritten to describe rescheduling via WhatsApp/contact instead.
 * -----------------------------------------------------------------------
 */

export type FAQItem = {
  question: string;
  answer: string;
};

/**
 * Broader FAQ set for the dedicated /faq page, based on the question list
 * in PRD §7.8. Several answers are intentionally left as placeholders
 * where the academy hasn't confirmed policy yet.
 */
export const fullFaqs: FAQItem[] = [
  {
    question: "Who can join Noor Islamic Academy?",
    answer:
      "Students of all ages — children, teens and adults — can join. Classes are one-to-one, so the pace and content are adapted to the individual student. [PLACEHOLDER: confirm exact minimum age / eligibility policy.]",
  },
  {
    question: "What courses are available?",
    answer:
      "Six programs: Islamic Studies, Qur'an Course, Hifz (memorization), Spoken Arabic, Arabic Grammar (Nahw & Sarf), and Tajweed. See the Courses page for details on each.",
  },
  {
    question: "Are classes one-to-one?",
    answer: "Yes — every class is one teacher with one student, not a group class.",
  },
  {
    question: "How does the free trial work?",
    answer:
      "You book a free trial via the Free Trial page or WhatsApp, our team confirms a time, and you meet a teacher for an evaluation session. [PLACEHOLDER: confirm exact trial length and structure.]",
  },
  {
    question: "How long is a class?",
    answer: "[PLACEHOLDER: exact class length (e.g. 30/45/60 minutes) pending academy confirmation.]",
  },
  {
    question: "Which platform is used for classes?",
    answer: "[PLACEHOLDER: confirm the exact video classroom platform used for live sessions.]",
  },
  {
    question: "Can I choose a teacher?",
    answer:
      "You can let us know your preferences (e.g. teaching style, background) when booking, and we'll do our best to match you. [PLACEHOLDER: confirm exact teacher-selection policy.]",
  },
  {
    question: "Can I request a male or female teacher?",
    answer:
      "Yes, you can note a teacher-gender preference when booking your free trial. [PLACEHOLDER: confirm actual availability of male/female teachers by course and schedule.]",
  },
  {
    question: "Do you support different time zones?",
    answer:
      "Yes — as an international academy, scheduling is built around your timezone. Let us know your location and preferred times when booking.",
  },
  {
    question: "How much does it cost?",
    answer:
      "[PLACEHOLDER: pricing has not yet been confirmed. See the Pricing page, or ask our team directly on WhatsApp for current rates.]",
  },
  {
    question: "How are payments made?",
    answer: "[PLACEHOLDER: accepted payment methods have not yet been confirmed by the academy.]",
  },
  {
    question: "Can classes be rescheduled?",
    answer:
      "You'll be able to request a reschedule by contacting us on WhatsApp. [PLACEHOLDER: confirm exact rescheduling window/policy.]",
  },
  {
    question: "Are progress reports provided?",
    answer:
      "Your teacher will share feedback on progress as you go. [PLACEHOLDER: confirm exact reporting format/frequency.]",
  },
  {
    question: "Are certificates provided?",
    answer: "[PLACEHOLDER: certificate policy, if any, has not yet been confirmed by the academy.]",
  },
];

export const homeFaqs: FAQItem[] = [
  {
    question: "Are female tutors available for female students and children?",
    answer:
      "Yes. We aim to offer qualified female teachers for sisters of all ages and young children, in an environment that respects your family's modesty and cultural privacy. [PLACEHOLDER: exact teacher-gender availability pending academy confirmation.]",
  },
  {
    question: "What if we need to reschedule a class?",
    answer:
      "We understand family life gets hectic. You'll be able to request a reschedule or pause a lesson by contacting us directly on WhatsApp. [PLACEHOLDER: exact rescheduling window/policy pending academy confirmation.]",
  },
  {
    question: "What is the ideal age for children to start learning?",
    answer:
      "Children can start from around age 4 in a gentle, foundational reading program. Our approach is paced for young attention spans with patient, one-to-one guidance. [PLACEHOLDER: confirm minimum age policy with academy.]",
  },
  {
    question: "What equipment or software is needed for lessons?",
    answer:
      "All you typically need is an internet connection and a laptop, desktop, or tablet. [PLACEHOLDER: confirm the exact classroom platform used for live sessions.]",
  },
  {
    question: "Is there a long-term contract or cancellation fee?",
    answer:
      "[PLACEHOLDER: billing cadence, contract terms and refund/cancellation policy are not yet confirmed by the academy — do not publish specific guarantees until approved.]",
  },
];
