export const wastewaterStats = [
  {
    value: "98%",
    label: "Water recovery rate",
    icon: "/waste-water-treatment-systems/stat-icon-1.png",
  },
  {
    value: "90%",
    label: "Less space requirement",
    icon: "/waste-water-treatment-systems/stat-icon-2.png",
  },
  {
    value: "Zero",
    label: "Chemicals in primary treatment",
    icon: "/waste-water-treatment-systems/stat-icon-3.png",
  },
  {
    value: "40%",
    label: "Savings on operational costs",
    icon: "/waste-water-treatment-systems/stat-icon-4.png",
  },
  {
    value: "Plug & Play",
    label: "Shock-load ready deployment",
    icon: "/waste-water-treatment-systems/stat-icon-5.png",
  },
] as const;

export const epcFocusAreas = [
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
] as const;

export const electroxProcesses = [
  {
    title: "Electro-coagulation",
    description: "Destabilises colloids and metals for removal.",
    icon: "/waste-water-treatment-systems/electrox-1.svg",
  },
  {
    title: "Electro-floatation",
    description: "Lifts contaminants via fine gas bubbles.",
    icon: "/waste-water-treatment-systems/electrox-2.svg",
  },
  {
    title: "Electro-flocculation",
    description: "Lifts contaminants via fine gas bubbles.",
    icon: "/waste-water-treatment-systems/electrox-3.svg",
  },
  {
    title: "Electro-disinfection",
    description: "Destroys pathogens through oxidative radicals.",
    icon: "/waste-water-treatment-systems/electrox-4.svg",
  },
  {
    title: "Electro-oxidation",
    description: "Breaks down persistent organics.",
    icon: "/waste-water-treatment-systems/electrox-5.svg",
  },
  {
    title: "Electro-sorption",
    description: "Captures dyes, organics and ions on reactive sites.",
    icon: "/waste-water-treatment-systems/electrox-6.svg",
  },
] as const;

export const scaleCards = [
  {
    code: "S01",
    title: "Small scale",
    image: "/waste-water-treatment-systems/scale-s01.png",
    footprint: "50 sq.ft",
    stp: "20 KLD",
    etp: "10 KLD",
  },
  {
    code: "S02",
    title: "Mid scale",
    image: "/waste-water-treatment-systems/scale-s02.png",
    footprint: "50 sq.ft",
    stp: "75 KLD",
    etp: "40–60 KLD",
  },
  {
    code: "L01",
    title: "Large scale",
    image: "/waste-water-treatment-systems/scale-l01.png",
    footprint: "75 sq.ft",
    stp: "250 KLD",
    etp: "80–150 KLD",
  },
  {
    code: "L02",
    title: "Flagship · Commercial",
    image: "/waste-water-treatment-systems/scale-l02.png",
    footprint: "100 sq.ft",
    stp: "800–1000 KLD",
    etp: "100–600 KLD",
  },
] as const;

export const ecosystemProducts = [
  {
    title: "ElectroX Reactor",
    description:
      "Core treatment unit. Non-contact micro-electrolysis handles organics, metals, dyes, and pathogens in a single reactor with zero primary chemicals. 4 Patents granted.",
    icon: "/waste-water-treatment-systems/product-icon-reactor.png",
  },
  {
    title: "PhloX",
    description:
      "Skid-based downstream solid-liquid separation unit. Works post-ElectroX with clarifiers, tube settlers or membranes to achieve target output water quality.",
    icon: "/waste-water-treatment-systems/product-icon-phlox.png",
  },
  {
    title: "Spectrum — Water Intelligence",
    description:
      "Unified dashboard connecting any sensor or protocol. 24/7 plant visibility, automation, predictive analytics, and scalable remote operations.",
    icon: "/waste-water-treatment-systems/product-icon-spectrum.png",
  },
] as const;

export const industries = [
  {
    title: "Hotels & Hospitality",
    image: "/figma-assets/industries-4.png",
    points: [
      "Wastewater recycling for laundry, kitchens, landscaping",
      "ESG reporting for corporate sustainability targets",
    ],
  },
  {
    title: "Vehicle Wash",
    image: "/figma-assets/industries-5.png",
    points: [
      "Automated wash tunnels with water recycling",
      "WaaS (Wash-as-a-Service) subscription model",
    ],
  },
  {
    title: "Industrial Facilities",
    image: "/figma-assets/industries-6.png",
    points: [
      "Effluent treatment for manufacturing, logistics",
      "JAFZA, KIZAD, EGA zone compliance",
    ],
  },
  {
    title: "Malls & Commercial Real Estate",
    image: "/figma-assets/industries-1.png",
    points: [
      "Water recycling for facility management",
      "ESG dashboards for LEED/Estidama compliance",
    ],
  },
  {
    title: "Government & Municipalities",
    image: "/figma-assets/industries-2.png",
    points: [
      "Aligned with UAE Water Security Strategy 2036",
      "Saudi Water Vision 2030 Policy Support",
    ],
  },
  {
    title: "Developers & Master Planners",
    image: "/figma-assets/industries-3.png",
    points: [
      "Built-in water reuse infrastructure",
      "Aldar, Emaar, Nakheel, Deyaar partnerships",
    ],
  },
] as const;

export const aboutValues = [
  {
    title: "Innovation",
    description:
      "Proprietary technology and bespoke solutions over off-the-shelf defaults.",
  },
  {
    title: "Sustainability",
    description:
      "Every solution is designed with environmental responsibility in mind.",
  },
  {
    title: "Reliability",
    description:
      "Long-term partnerships built on consistent delivery and trust.",
  },
  {
    title: "People-First",
    description:
      "Continuous training and development for our team and our clients.",
  },
] as const;

export const partnerships = [
  {
    name: "MCWW",
    logo: "/figma-assets/partner-logo-1.png",
    description:
      "Manufactures a comprehensive line of automatic car wash systems, including tunnels, arches, and high-performance drying equipment. A trusted one-stop resource for car wash investors and operators seeking reliable, cutting-edge technology.",
  },
  {
    name: "INDRA Water",
    logo: "/figma-assets/partner-logo-2.png",
    description:
      "BlueVerse is the exclusive GCC system integrator for INDRA Water's ElectroX electrochemical treatment platform, a technology certified as 10 years ahead of conventional ETP/STP systems.",
  },
  {
    name: "Stinger Chemicals",
    logo: "/figma-assets/partner-logo-3.png",
    description:
      "Stinger Chemicals delivers high-quality industrial and automotive chemical solutions, trusted for performance and reliability across professional cleaning and maintenance use cases.",
  },
  {
    name: "Xylem",
    logo: "/figma-assets/partner-logo-4.png",
    description:
      "BlueVerse has partnered with Xylem, a global leader in water technology and solutions, to strengthen our water infrastructure capabilities with world-class treatment and monitoring systems.",
  },
] as const;

export const deploymentHighlights = [
  "15+ operational Vehicle Washing centres across India and UAE",
  "8 MLD+ wastewater treatment plants deployed or undergoing deployment",
  "50 MLD+ order pipeline for wastewater treatment capacity",
  "UAE's first and most sustainable car care centre — Al Quoz, Dubai",
  "Targeting 100+ BlueVerse centres by 2027",
] as const;

export const offices = [
  {
    title: "UAE",
    address:
      "near Al Quoz - Al Qouz Ind.second - Al Quoz - Dubai - United Arab Emirates",
  },
  {
    title: "India",
    address:
      "Floor-8, Plot-208, Regent Chambers, Jamnalal Bajaj Marg, Nariman Point, Mumbai, Maharashtra – 400021",
  },
] as const;
