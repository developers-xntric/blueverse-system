import type { Metadata } from "next";

import {
    BuiltForEveryScaleSection,
    ElectroxSection,
    EpcFocusAreasSection,
    HeroOverviewSection
} from "@/components/waste-water-treatment";
import { getWasteWaterTreatmentPage } from "@/lib/data";

export async function generateMetadata(): Promise<Metadata> {
  const data = await getWasteWaterTreatmentPage();

  return {
    title: data.seo?.title || "Waste Water Treatment Systems | BlueVerse",
    description: data.seo?.description || "BlueVerse waste water treatment systems page.",
  };
}

export default async function WasteWaterTreatmentSystemsPage() {
  const data = await getWasteWaterTreatmentPage();

  return (
    <main className="w-full bg-white">
      <HeroOverviewSection data={data} />
      <EpcFocusAreasSection data={data} />
      <ElectroxSection data={data} />
      {/* <BuiltForEveryScaleSection data={data} /> */}
    </main>
  );
}
