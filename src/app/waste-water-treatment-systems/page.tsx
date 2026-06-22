import type { Metadata } from "next";

import {
  BuiltForEveryScaleSection,
  ElectroxSection,
  EpcFocusAreasSection,
  HeroOverviewSection,
} from "@/components/waste-water-treatment";
import { getWWTPContent } from "@/services/content-service";
import { ContactSection } from "@/components/waste-water-treatment/contact-section";

export const metadata: Metadata = {
  title: "Waste Water Treatment Systems | BlueVerse",
  description:
    "BlueVerse waste water treatment systems page",
};

export default async function WasteWaterTreatmentSystemsPage() {
  const content = await getWWTPContent();

  return (
    <main className="w-full bg-white">
      <HeroOverviewSection
        stats={content.stats}
        heroSubtitle={content.hero.subtitle}
        heroTitle={content.hero.title}
        heroDescription={content.hero.description}
        heroImage={content.hero.heroImage}
      />
      <EpcFocusAreasSection areas={content.epcFocusAreas} />
      <ElectroxSection processes={content.electroxProcesses} />
      <BuiltForEveryScaleSection
        scaleCards={content.scaleCards}
        ecosystemProducts={content.ecosystemProducts}
      />
      <ContactSection offices={content.offices} />
    </main>
  );
}
