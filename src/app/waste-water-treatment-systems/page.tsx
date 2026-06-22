import type { Metadata } from "next";

import {
    BuiltForEveryScaleSection,
    ElectroxSection,
    EpcFocusAreasSection,
    HeroOverviewSection
} from "@/components/waste-water-treatment";

export const metadata: Metadata = {
  title: "Waste Water Treatment Systems | BlueVerse",
  description:
    "Pixel-perfect BlueVerse waste water treatment systems page recreated from Figma without the navbar and footer.",
};

export default function WasteWaterTreatmentSystemsPage() {
  return (
    <main className="w-full bg-white">
      <HeroOverviewSection />
      <EpcFocusAreasSection />
      <ElectroxSection />
      <BuiltForEveryScaleSection />
    </main>
  );
}
