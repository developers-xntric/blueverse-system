import type { Metadata } from "next";

import {
  BuiltForEveryScaleSection,
  ElectroxSection,
  EpcFocusAreasSection,
  HeroOverviewSection,
} from "@/components/waste-water-treatment";
import { getWWTPContactFormContent, getWWTPContent } from "@/services/content-service";
import { ContactSection } from "@/components/waste-water-treatment/contact-section";

export const metadata: Metadata = {
  title: "Waste Water Treatment Systems | BlueVerse",
  description:
    "BlueVerse waste water treatment systems page",
};

export default async function WasteWaterTreatmentSystemsPage() {
  const [content, contactContent] = await Promise.all([
    getWWTPContent(),
    getWWTPContactFormContent(),
  ]);

  return (
    <main className="w-full bg-white">
      <HeroOverviewSection
        stats={content.stats}
        statsSectionLabel={content.statsSectionLabel}
        heroSubtitle={content.hero.subtitle}
        heroTitle={content.hero.title}
        heroDescription={content.hero.description}
        heroImage={content.hero.heroImage}
      />
      <EpcFocusAreasSection
        title={content.epcSection.title}
        ctaText={content.epcSection.ctaText}
        ctaLabel={content.epcSection.cta?.label}
        ctaHref={content.epcSection.cta?.href}
        areas={content.epcFocusAreas}
      />
      <ElectroxSection
        eyebrow={content.electroxSection.eyebrow}
        title={content.electroxSection.title}
        description={content.electroxSection.description}
        processes={content.electroxProcesses}
      />
      <BuiltForEveryScaleSection
        eyebrow={content.scaleSection.eyebrow}
        title={content.scaleSection.title}
        scaleCards={content.scaleCards}
        ecosystemProducts={content.ecosystemProducts}
      />
      <ContactSection
        heading={contactContent.heading}
        description={contactContent.description}
        submitLabel={contactContent.submitLabel}
        offices={contactContent.offices}
        fields={contactContent.fields}
      />
    </main>
  );
}
