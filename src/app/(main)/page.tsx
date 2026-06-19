import {
  AboutSection,
  ContactSection,
  DeploymentSection,
  HeroSection,
  IndustriesSection,
  PartnershipsSection,
  ProblemSection,
  SolutionsSection,
} from "@/components/home";

export default function Home() {
  return (
    <>
      <HeroSection />
      <main>
        <ProblemSection />
        <SolutionsSection />
        <IndustriesSection />
        <AboutSection />
        <PartnershipsSection />
        <DeploymentSection />
        <ContactSection />
      </main>
    </>
  );
}
