import { HeroSection } from "@/components/hero-section";
import { ProblemSection } from "@/components/problem-section";
import { AboutSection } from "@/components/about-section";
import { ApproachSection } from "@/components/approach-section";
import { InnovationSection } from "@/components/innovation-section";
import { MissionSection } from "@/components/mission-section";
import { SupportersSection } from "@/components/supporters-section";
import { ContactSection } from "@/components/contact-section";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ProblemSection />
      <AboutSection />
      <ApproachSection />
      <InnovationSection />
      <MissionSection />
      <SupportersSection />
      <ContactSection />
    </main>
  );
}
