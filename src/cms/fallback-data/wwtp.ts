import type {
  WastewaterStat,
  EpcFocusArea,
  ElectroxProcess,
  ScaleCard,
  EcosystemProduct,
  WWTPIndustry,
  Partnership,
  Office,
  WWTPContent,
} from "@/types/cms";
import {
  fallbackPartners,
  fallbackOffices,
  fallbackDeploymentHighlights,
} from "@/cms/fallback-data/home";

export * from "@/cms/fallback-data/home";

export const fallbackWastewaterStats: WastewaterStat[] = [
  { value: "98%", label: "Water recovery rate", icon: "/waste-water-treatment-systems/stat-icon-1.png" },
  { value: "90%", label: "Less space requirement", icon: "/waste-water-treatment-systems/stat-icon-2.png" },
  { value: "Zero", label: "Chemicals in primary treatment", icon: "/waste-water-treatment-systems/stat-icon-3.png" },
  { value: "40%", label: "Savings on operational costs", icon: "/waste-water-treatment-systems/stat-icon-4.png" },
  { value: "Plug & Play", label: "Shock-load ready deployment", icon: "/waste-water-treatment-systems/stat-icon-5.png" },
];

export const fallbackEpcFocusAreas: EpcFocusArea[] = [
  {
    title: "Decentralised Wastewater Treatment Plants",
    description:
      "End-to-end EPC for wastewater treatment at source — industrial, municipal, commercial and residential. Converting waste streams into reusable water assets.",
    points: [
      "Industrial ETPs & municipal STPs",
      "Zero Liquid Discharge (ZLD) systems",
      "Sewage reuse for irrigation & utilities",
      "Retrofit-ready for existing plants",
      "BRSR & compliance-ready reporting",
    ],
  },
  {
    title: "Decentralised Desalination Infrastructure",
    description:
      "We design, procure, and construct decentralised desalination infrastructure — bringing potable water closer to the point of need, eliminating dependence on long-distance pipelines.",
    points: [
      "Brackish water & seawater treatment",
      "Modular, scalable plant design",
      "Remote & peri-urban deployment",
      "Low OPEX, high uptime systems",
      "IoT-enabled remote monitoring",
    ],
  },
];

export const fallbackElectroxProcesses: ElectroxProcess[] = [
  { title: "Electro-coagulation", description: "Destabilises colloids and metals for removal.", icon: "/waste-water-treatment-systems/electrox-1.svg" },
  { title: "Electro-floatation", description: "Lifts contaminants via fine gas bubbles.", icon: "/waste-water-treatment-systems/electrox-2.svg" },
  { title: "Electro-flocculation", description: "Lifts contaminants via fine gas bubbles.", icon: "/waste-water-treatment-systems/electrox-3.svg" },
  { title: "Electro-disinfection", description: "Destroys pathogens through oxidative radicals.", icon: "/waste-water-treatment-systems/electrox-4.svg" },
  { title: "Electro-oxidation", description: "Breaks down persistent organics.", icon: "/waste-water-treatment-systems/electrox-5.svg" },
  { title: "Electro-sorption", description: "Captures dyes, organics and ions on reactive sites.", icon: "/waste-water-treatment-systems/electrox-6.svg" },
];

export const fallbackScaleCards: ScaleCard[] = [
  { code: "S01", title: "Small scale", image: "/waste-water-treatment-systems/scale-s01.png", footprint: "50 sq.ft", stp: "20 KLD", etp: "10 KLD" },
  { code: "S02", title: "Mid scale", image: "/waste-water-treatment-systems/scale-s02.png", footprint: "50 sq.ft", stp: "75 KLD", etp: "40–60 KLD" },
  { code: "L01", title: "Large scale", image: "/waste-water-treatment-systems/scale-l01.png", footprint: "75 sq.ft", stp: "250 KLD", etp: "80–150 KLD" },
  { code: "L02", title: "Flagship · Commercial", image: "/waste-water-treatment-systems/scale-l02.png", footprint: "100 sq.ft", stp: "800–1000 KLD", etp: "100–600 KLD" },
];

export const fallbackEcosystemProducts: EcosystemProduct[] = [
  {
    title: "ElectroX Reactor",
    description: "Core treatment unit. Non-contact micro-electrolysis handles organics, metals, dyes, and pathogens in a single reactor with zero primary chemicals. 4 Patents granted.",
    icon: "/waste-water-treatment-systems/product-icon-reactor.png",
  },
  {
    title: "PhloX",
    description: "Skid-based downstream solid-liquid separation unit. Works post-ElectroX with clarifiers, tube settlers or membranes to achieve target output water quality.",
    icon: "/waste-water-treatment-systems/product-icon-phlox.png",
  },
  {
    title: "Spectrum Water Intelligence",
    description: "Unified dashboard connecting any sensor or protocol. 24/7 plant visibility, automation, predictive analytics, and scalable remote operations.",
    icon: "/waste-water-treatment-systems/product-icon-spectrum.png",
  },
];

export const fallbackWWTPIndustries: WWTPIndustry[] = [
  { title: "Hotels & Hospitality", image: "/figma-assets/industries-4.png", points: ["Wastewater recycling for laundry, kitchens, landscaping", "ESG reporting for corporate sustainability targets"] },
  { title: "Vehicle Wash", image: "/figma-assets/industries-5.png", points: ["Automated wash tunnels with water recycling", "WaaS (Wash-as-a-Service) subscription model"] },
  { title: "Industrial Facilities", image: "/figma-assets/industries-6.png", points: ["Effluent treatment for manufacturing, logistics", "JAFZA, KIZAD, EGA zone compliance"] },
  { title: "Malls & Commercial Real Estate", image: "/figma-assets/industries-1.png", points: ["Water recycling for facility management", "ESG dashboards for LEED/Estidama compliance"] },
  { title: "Government & Municipalities", image: "/figma-assets/industries-2.png", points: ["Aligned with UAE Water Security Strategy 2036", "Saudi Water Vision 2030 Policy Support"] },
  { title: "Developers & Master Planners", image: "/figma-assets/industries-3.png", points: ["Built-in water reuse infrastructure", "Aldar, Emaar, Nakheel, Deyaar partnerships"] },
];

export const fallbackWWTPAboutValues = [
  { title: "Innovation", description: "Proprietary technology and bespoke solutions over off-the-shelf defaults." },
  { title: "Sustainability", description: "Every solution is designed with environmental responsibility in mind." },
  { title: "Reliability", description: "Long-term partnerships built on consistent delivery and trust." },
  { title: "People-First", description: "Continuous training and development for our team and our clients." },
];

export const fallbackWWTPContent: WWTPContent = {
  stats: fallbackWastewaterStats,
  epcFocusAreas: fallbackEpcFocusAreas,
  electroxProcesses: fallbackElectroxProcesses,
  scaleCards: fallbackScaleCards,
  ecosystemProducts: fallbackEcosystemProducts,
  industries: fallbackWWTPIndustries,
  aboutValues: fallbackWWTPAboutValues,
  partnerships: fallbackPartners,
  deploymentHighlights: fallbackDeploymentHighlights,
  offices: fallbackOffices,
  hero: {
    subtitle: "Waste Water Treatment Systems",
    title: "Enabling Water Security\nDecentralised, at Scale",
    description:
      "BlueVerse Cleantech delivers end-to-end EPC solutions for decentralised desalination and wastewater treatment plants powered by proprietary ElectroX technology. A non-contact micro-electrolysis process built indigenously for treating the toughest pollutants. | 4 Patents Granted ·",
    heroImage: "/waste-water-treatment-systems/main-hero.png",
  },
};
