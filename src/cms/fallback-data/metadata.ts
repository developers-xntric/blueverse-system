import type { SiteMetadata, PageMetadata } from "@/types/cms";

export const fallbackSiteMetadata: SiteMetadata = {
  title: "BlueVerse | Water Infrastructure Landing Page",
  description:
    "BlueVerse cleantech landing page for water treatment, automated vehicle washing, and ESG intelligence solutions.",
};

export const fallbackPageMetadata: Record<string, PageMetadata> = {
  home: {
    title: "BlueVerse | Water Infrastructure Landing Page",
    description:
      "BlueVerse cleantech landing page for water treatment, automated vehicle washing, and ESG intelligence solutions.",
  },
  "waste-water-treatment-systems": {
    title: "Waste Water Treatment Systems | BlueVerse",
    description: "Pixel-perfect BlueVerse waste water treatment systems page",
  },
  "vehicle-washing": {
    title: "Vehicle Washing | BlueVerse",
    description:
      "BlueVerse automated vehicle washing systems for petrol stations, malls, fleet depots, dealerships, and government facilities.",
  },
  "esg-platform": {
    title: "ESG Platform | BlueVerse",
    description:
      "BlueVerse ESG Intelligence platform for water and carbon visibility, multi-site reporting, and compliance-ready ESG metrics.",
  },
};
