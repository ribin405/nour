/**
 * PLACEHOLDER CONTENT
 * -----------------------------------------------------------------------
 * Core site-wide facts (contact numbers, social links, stats). None of
 * these have been confirmed by the academy yet — swap them for verified
 * values before launch. See Nour_Islamic_Academy_Website_Questions.docx
 * and PRD section 29 ("Final Stakeholder Questions") for the open items
 * these values depend on (official WhatsApp/phone number, countries
 * served, accreditation claims, student counts, etc).
 * -----------------------------------------------------------------------
 */

export const siteConfig = {
  name: "Noor Islamic Academy",
  shortName: "Noor Academy",
  tagline: "Personalized Islamic Learning. Wherever You Are.",
  description:
    "One-to-one online classes in Qur'an, Tajweed, Hifz, Arabic and Islamic Studies — designed around every student's level, goals and schedule.",
  url: "https://www.nooracademy.example", // PLACEHOLDER — replace with the confirmed production domain

  // PLACEHOLDER — replace with the academy's real WhatsApp business number (E.164 format, no spaces/symbols)
  whatsappNumber: "10000000000",
  // PLACEHOLDER — human-readable phone display
  phoneDisplay: "+1 (800) 000-0000",
  phoneHref: "tel:+18000000000",
  // PLACEHOLDER — replace with the academy's real contact inbox
  email: "hello@example.com",

  social: {
    // PLACEHOLDER — links not yet provided by the academy
    instagram: "#",
    facebook: "#",
    youtube: "#",
    tiktok: "#",
  },

  // PLACEHOLDER trust badges — only publish accreditation/verification claims once confirmed (PRD risk #1: "Unverified claims")
  trustBadges: [
    { icon: "verified", label: "Accreditation Pending Verification" },
    { icon: "public", label: "Worldwide 1-on-1 Classes (Flexible Scheduling)" },
  ],
} as const;

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Courses", href: "/courses" },
  { label: "Teachers", href: "/teachers" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Pricing", href: "/pricing" },
  { label: "Free Trial", href: "/free-trial" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
] as const;

export const footerLinks = {
  academy: [
    { label: "About Our Academy", href: "/about" },
    { label: "Our Teachers", href: "/teachers" },
    { label: "Learning Methodology", href: "/how-it-works" },
    { label: "Pricing", href: "/pricing" },
    { label: "Book Free Trial", href: "/free-trial" },
    { label: "FAQ", href: "/faq" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms" },
  ],
} as const;
