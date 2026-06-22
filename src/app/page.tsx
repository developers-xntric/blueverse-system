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
import { getHomePageContent } from "@/services/content-service";

export default async function Home() {
  const content = await getHomePageContent();

  return (
    <>
      <HeroSection
        hero={content.hero}
        marqueeLogos={content.marqueeLogos}
        heroPartners={content.heroPartners}
        stats={content.stats}
      />
      <main>
        <ProblemSection challenges={content.challenges} />
        <SolutionsSection solutions={content.solutions} />
        <IndustriesSection industries={content.industries} />
        <AboutSection aboutTabs={content.aboutTabs} />
        <PartnershipsSection partners={content.partners} />
        <DeploymentSection highlights={content.deploymentHighlights} />
        <ContactSection offices={content.offices} />
      </main>
    </>
  );
}
