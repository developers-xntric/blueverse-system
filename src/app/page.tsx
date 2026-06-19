import {
  AboutSection,
  ContactSection,
  DeploymentSection,
  Footer,
  HeroSection,
  IndustriesSection,
  Navbar,
  PartnershipsSection,
  ProblemSection,
  SolutionsSection,
} from "@/components/home";

export default function Home() {
  return (
    <>
      <Navbar />
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
      <Footer />
    </>
  );
}
