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
import { getContactFormContent, getHomePageContent } from "@/services/content-service";

export const dynamic = "force-dynamic";
export const revalidate = 0;
export const fetchCache = "force-no-store";

export default async function Home() {
  const [content, contactContent] = await Promise.all([
    getHomePageContent(),
    getContactFormContent(),
  ]);

  return (
    <>
      <HeroSection
        hero={content.hero}
        trustedBrandsLabel={content.trustedBrandsLabel}
        marqueeLogos={content.marqueeLogos}
        heroPartners={content.heroPartners}
        stats={content.stats}
      />
      <main>
        <ProblemSection section={content.problemSection} challenges={content.challenges} />
        <SolutionsSection section={content.solutionsSection} solutions={content.solutions} />
        <IndustriesSection section={content.industriesSection} industries={content.industries} />
        <AboutSection section={content.aboutSection} aboutTabs={content.aboutTabs} />
        <PartnershipsSection section={content.partnersSection} partners={content.partners} />
        <DeploymentSection title={content.deploymentSection.title} image={content.deploymentSection.image} highlights={content.deploymentHighlights} />
        <ContactSection
          offices={contactContent.offices}
          heading={contactContent.heading}
          description={contactContent.description}
          fields={contactContent.fields}
          submitLabel={contactContent.submitLabel}
          submittingLabel={contactContent.submittingLabel}
          successMessage={contactContent.successMessage}
          errorMessage={contactContent.errorMessage}
        />
      </main>
    </>
  );
}
