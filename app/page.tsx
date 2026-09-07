import { Hero } from "@/components/home/Hero";
import { TrustStatsBar } from "@/components/home/TrustStatsBar";
import { CoursesGrid } from "@/components/home/CoursesGrid";
import { AyahCallout } from "@/components/home/AyahCallout";
import { WhyNoorPillars } from "@/components/home/WhyNoorPillars";
import { HowItWorksSteps } from "@/components/home/HowItWorksSteps";
import { TeacherShowcase } from "@/components/home/TeacherShowcase";
import { Testimonials } from "@/components/home/Testimonials";
import { FreeTrialBanner } from "@/components/home/FreeTrialBanner";
import { FAQSection } from "@/components/home/FAQSection";
import { WhatsAppConsultationBanner } from "@/components/home/WhatsAppConsultationBanner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStatsBar />
      <CoursesGrid />
      <AyahCallout />
      <WhyNoorPillars />
      <HowItWorksSteps />
      <TeacherShowcase />
      <Testimonials />
      <FreeTrialBanner />
      <FAQSection />
      <WhatsAppConsultationBanner />
    </>
  );
}
