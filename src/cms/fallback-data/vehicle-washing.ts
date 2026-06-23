import type { VehicleWashingContent } from "@/types/cms";

export const fallbackVehicleWashingContent: VehicleWashingContent = {
  hero: {
    subtitle: "Automated Vehicle Washing",
    title: "Sustainable Vehicle Washing Solutions",
    description:
      "BlueVerse operates and supplies fully automated vehicle washing systems that combine throughput, quality, and water efficiency in a single footprint - designed for petrol stations, malls, fleet depots, automotive dealerships, and government facilities.",
    heroImage: "/vehicle-assets/wash-tunnel.png",
  },
  featuresSectionTitle: "System Features",
  features: [
    { icon: "/vehicle-assets/feature-1.svg", description: "Fully automated washing tunnels and robotic gantry systems" },
    { icon: "/vehicle-assets/feature-2.svg", description: "Express tunnel wash: high-volume throughput for busy locations" },
    { icon: "/vehicle-assets/feature-3.svg", description: "Robot AI Wash: Dubai's first AI-powered robotic wash (coming soon)" },
    { icon: "/vehicle-assets/feature-4.svg", description: "95% water recycling per wash cycle via integrated ETP" },
    { icon: "/vehicle-assets/feature-5.svg", description: "IoT-enabled - real-time wash data feeds into ESG dashboard" },
    { icon: "/vehicle-assets/feature-6.svg", description: "Zero capex model available: Pay-per-Wash / Wash-as-a-Service (WaaS)" },
  ],
  washTypesSectionTitle: "Wash Types Available",
  washTypes: [
    {
      title: "Express Tunnel Wash",
      description: "High-speed automated wash. Ideal for petrol stations, mall carparks, fleet depots. High throughput, consistent quality.",
    },
    {
      title: "Manual Wash",
      description: "Hand-crafted wash by trained technicians. For premium and high-value vehicles.",
    },
    {
      title: "Robot AI Wash",
      description: "AI-powered robotic wash system - coming soon to UAE. Precision, speed, scratch-free brilliance.",
    },
    {
      title: "2-Wheeler Automated Wash",
      description: "Patented automated motorcycle wash system. 8 washes per hour, 138 sq.ft. footprint, 98% water recovery.",
    },
  ],
  businessModelsSectionTitle: "Business Models",
  businessModels: [
    { icon: "/vehicle-assets/business-1.svg", title: "CapEx purchase", description: "Full system ownership" },
    { icon: "/vehicle-assets/business-2.svg", title: "Wash-as-a-Service (WaaS)", description: "Revenue-share or subscription model, zero upfront capex" },
    { icon: "/vehicle-assets/business-3.svg", title: "Annual Maintenance Contracts (AMCs)", description: "Full system upkeep and consumables" },
  ],
  regionalSectionTitle: "Regional Presence",
  regionalCards: [
    {
      icon: "/vehicle-assets/india.svg",
      region: "India",
      site: "blueverseindia.com",
      copy: "Automated 2-wheeler and 4-wheeler wash solutions for OEMs, dealerships, fuel stations, and independent wash centres across India.",
      cta: "Visit BlueVerse India",
      href: "https://blueverseindia.com/",
    },
    {
      icon: "/vehicle-assets/uae.svg",
      region: "UAE",
      site: "blueverse.ae",
      copy: "Eco-friendly, high-performance vehicle washing services and solutions tailored for the Gulf market and regional partners.",
      cta: "Visit BlueVerse UAE",
      href: "https://blueverse.ae/",
    },
  ],
};
