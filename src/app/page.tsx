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
import { getContactForm, getHomePage } from "@/lib/data";


export default async function Home() {
  const [pageData, contactForm] = await Promise.all([getHomePage(), getContactForm()]);

  return (
    <>
      <HeroSection data={pageData} />
      <main>
        <ProblemSection data={pageData} />
        <SolutionsSection data={pageData} />
        <IndustriesSection data={pageData} />
        <AboutSection data={pageData} />
        <PartnershipsSection data={pageData} />
        <DeploymentSection data={pageData} />
        <ContactSection data={contactForm} />
      </main>
    </>
  );
}
