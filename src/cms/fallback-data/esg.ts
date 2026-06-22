import type { ESGContent } from "@/types/cms";

export const fallbackESGContent: ESGContent = {
  hero: {
    subtitle: "ESG Intelligence Platform",
    title: "Technology-led Sustainability\nfor a Resource-Conscious\nWorld",
    description:
      "The BlueVerse ESG Intelligence platform gives facility managers, sustainability officers, and corporate boards real-time visibility into water and carbon metrics formatted for regulatory compliance and global ESG frameworks.",
    heroImage: "/esg-assets/hero.png",
  },
  whatItTracks: [
    "Water saved (litres/day, month, year)",
    "Water reused (% recovery rate per facility)",
    "Carbon avoided (kg CO₂e equivalent)",
    "Energy consumption per KLD treated",
    "Chemical reduction vs conventional baseline",
    "Scope 1, 2, 3 water metrics (GHG Protocol aligned)",
  ],
  capabilities: [
    "Real-time dashboard accessible by web and mobile",
    "Multi-site aggregation view all facilities in one view",
    "Export-ready reports for ESG disclosures (UAE SCA, Saudi Tadawul, TCFD, GRI)",
    "Alert system for discharge limit breaches",
    "IoT integration with INDRA Spectrum and BlueVerse washing equipment",
  ],
  pricingModel: [
    "SaaS subscription (annual or multi-year)",
    "Bundled into system deployments at no additional charge",
  ],
};
