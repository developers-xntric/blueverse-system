import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";

function loadEnvFile() {
  const envPath = resolve(process.cwd(), ".env.local");

  if (!existsSync(envPath)) {
    return;
  }

  const envFile = readFileSync(envPath, "utf8");

  for (const line of envFile.split(/\r?\n/)) {
    if (!line || line.trim().startsWith("#")) {
      continue;
    }

    const separator = line.indexOf("=");
    if (separator === -1) {
      continue;
    }

    const key = line.slice(0, separator).trim();
    const value = line.slice(separator + 1).trim();

    if (key && !(key in process.env)) {
      process.env[key] = value;
    }
  }
}

loadEnvFile();

const base = process.env.STRAPI_URL || process.env.NEXT_PUBLIC_STRAPI_URL || "https://fortunate-respect-d9ba68c326.strapiapp.com";
const adminEmail = process.env.STRAPI_ADMIN_EMAIL || "info@xntric.ca";
const adminPassword = process.env.STRAPI_ADMIN_PASSWORD || "@Info@123";

if (!adminEmail || !adminPassword) {
  console.error("Missing STRAPI admin credentials");
  process.exit(1);
}

const ALL_CONTENT = {
  navbar: {
    logo: "/figma-assets/hero-logo.png",
    logoAlt: "BlueVerse",
    navLinks: [
      { label: "Home", href: "/" },
      { label: "About Us", href: "/#about" },
      { label: "Water Treatment", href: "/waste-water-treatment-systems" },
      { label: "Vehicle Washing", href: "/vehicle-washing" },
      { label: "ESG Platform", href: "/esg-platform" },
      { label: "EPC Solutions", href: "/#about" },
      { label: "Contact Us", href: "/#contact" },
    ],
    ctaLabel: "Talk To Our Team",
  },
  footer: {
    logo: "/figma-assets/partner-logo-6.png",
    navLinks: [
      { label: "Home", href: "/" },
      { label: "About Us", href: "/#about" },
      { label: "Water Treatment", href: "/waste-water-treatment-systems" },
      { label: "Vehicle Washing", href: "/vehicle-washing" },
      { label: "ESG Platform", href: "/esg-platform" },
      { label: "EPC Solutions", href: "/#about" },
      { label: "Contact Us", href: "/#contact" },
    ],
    serviceLinks: ["Automated Vehicle Washing", "Water Treatment Systems", "ESG Intelligence Platform", "EPC Services"],
    copyright: "Copyright 2026 BlueVerse CleanTech Pvt. Ltd. All rights reserved.",
    socialLinks: [
      { platform: "LinkedIn", href: "#contact" },
      { platform: "Twitter", href: "#contact" },
      { platform: "Instagram", href: "#contact" },
    ],
  },
  "global-setting": {
    title: "BlueVerse | Water Infrastructure Landing Page",
    description: "BlueVerse cleantech landing page for water treatment, automated vehicle washing, and ESG intelligence solutions.",
  },
  "home-page": {
    hero: {
      title: "Delivering Scalable, Innovative & Reliable Services",
      description: "Helping businesses reduce water consumption, achieve regulatory compliance, and report ESG metrics - all from one unified platform.",
      primaryCtaLabel: "Talk To Our Team",
      primaryCtaHref: "#contact",
      secondaryCtaLabel: "Explore Solutions",
      secondaryCtaHref: "#solutions",
    },
    marqueeLogos: [
      { name: "TVS", src: "/figma-assets/marquee-tvs.png", width: 112, height: 112 },
      { name: "Honda", src: "/figma-assets/marquee-honda.png", width: 99, height: 99 },
      { name: "Royal Enfield", src: "/figma-assets/marquee-royal-enfield.png", width: 100, height: 99 },
      { name: "IHCL", src: "/figma-assets/marquee-ihcl-1.png", width: 112, height: 112 },
      { name: "MG", src: "/figma-assets/marquee-mg.png", width: 87, height: 87 },
      { name: "Tata", src: "/figma-assets/marquee-tata1.png", width: 96, height: 95 },
    ],
    heroPartners: [
      {
        title: "WTIIRA",
        subtitle: "Saudi Water Authority",
        logo: "/figma-assets/top-12.png",
        points: [
          "Incubated by the innovation arm of the Saudi Water Authority (SWA)",
          "Validating BlueVerse's technology for the KSA market",
        ],
      },
      {
        title: "WaterTech Accelerator",
        subtitle: "QSTP x TotalEnergies",
        logo: "/figma-assets/top-5.png",
        points: [
          "Selected for the Qatar Science & Technology Park programme",
          "Backed by TotalEnergies' energy transition initiative",
        ],
      },
    ],
    stats: [
      { value: "05+", label: "Years of Experience" },
      { value: "10K+", label: "CO2 Emissions Reduced" },
      { value: "5 Billion +", label: "Litres of Water Saved" },
      { value: "50 MLD+", label: "Wastewater Order Pipeline" },
    ],
    challenges: [
      {
        title: "Water Scarcity",
        points: [
          "Operating in one of the world's most water-stressed regions",
          "70-90% wastewater still discharged",
        ],
      },
      {
        title: "Industrial Water Waste",
        points: [
          "Traditional vehicle washing uses 120-180 litres of water per wash.",
          "Industrial washing generates high-COD/TSS effluent",
        ],
      },
      {
        title: "ESG Compliance",
        points: [
          "India, UAE, KSA, and Qatar enforcing ESG reporting mandates",
          "Companies lack real-time Scope 1, 2, 3 water metrics",
        ],
      },
      {
        title: "A Fragmented Market",
        points: [
          "Disconnected solutions",
          "Multiple vendors for vehicle washing, water treatment & ESG reporting",
        ],
      },
    ],
    solutions: [
      {
        title: "Water Treatment Systems",
        description: "Smart water treatment systems designed to purify, recycle, and optimize water for sustainable operations.",
        image: "/figma-assets/solutions-2.png",
        href: "/waste-water-treatment-systems",
      },
      {
        title: "Automated Vehicle Washing",
        description: "Automated vehicle washing solutions that deliver consistent cleaning performance with efficient water use.",
        image: "/figma-assets/solutions-1.png",
        href: "/vehicle-washing",
      },
      {
        title: "ESG Intelligence Platform",
        description: "AI-Driven Water Intelligence Platform for water assets, carbon credit trading, water exchange, energy optimization, and waste data management.",
        image: "/figma-assets/solutions-3.png",
        href: "/esg-platform",
      },
    ],
    industries: [
      {
        title: "Hotels & Hospitality",
        image: "/figma-assets/industries-7.png",
        points: ["Wastewater recycling for laundry, kitchens, landscaping", "ESG reporting for corporate sustainability targets"],
        description: "BlueVerse CleanTech helps hotels, resorts, and hospitality groups make water efficiency a part of everyday operations without compromising guest comfort, hygiene standards, or service quality. From laundry, landscaping, kitchens, and housekeeping to wastewater treatment and reuse, our solutions help hospitality brands reduce water waste, control rising utility costs, and improve ESG performance. By integrating smart water management systems, hotels can lower their environmental footprint while creating measurable long-term savings and more sustainable guest experiences.",
        details: [
          "Closed-loop water reuse for laundries, kitchens, landscaping, and utility zones.",
          "Sustainability dashboards aligned to group-wide environmental commitments.",
          "Operational visibility across sites to benchmark performance and compliance.",
        ],
      },
      {
        title: "Vehicle Wash",
        image: "/figma-assets/industries-2.png",
        points: ["Automated wash tunnels with water recycling", "WaaS (Wash-as-a-Service) subscription model"],
        description: "Vehicle wash operations require large volumes of water every day, making efficient treatment and reuse essential for long-term profitability and sustainability. BlueVerse CleanTech supports car wash operators with reliable water recycling, filtration, and treatment solutions designed to reduce freshwater dependency. Our systems help maintain consistent wash quality while lowering water consumption, reducing discharge, and improving operational efficiency. Whether for standalone wash centers, fleet wash facilities, or high-volume vehicle wash businesses, we help operators build cleaner, smarter, and more cost-effective water systems.",
        details: [
          "Automated tunnels and rollover systems engineered for consistent throughput.",
          "Water reuse systems that materially cut freshwater use per wash cycle.",
          "Subscription-ready operating support for multi-site wash networks.",
        ],
      },
      {
        title: "Industrial Facilities",
        image: "/figma-assets/industry-facilities.png",
        points: ["Effluent treatment for manufacturing, logistics", "JAFZA, KIZAD, EGA zone compliance"],
        description: "Industrial facilities face growing pressure to manage water more responsibly while maintaining productivity, compliance, and operational continuity. BlueVerse CleanTech provides advanced water and wastewater treatment solutions designed for demanding industrial environments. We help manufacturing plants, processing units, and industrial sites recover, reuse, and manage water more efficiently. Our solutions support reduced water intake, lower wastewater discharge, improved regulatory alignment, and better long-term resource planning. With the right system in place, industrial operations can improve performance while reducing environmental impact.",
        details: [
          "Treatment systems sized for manufacturing, logistics, and process-intensive operations.",
          "Regulatory alignment for industrial parks and zone-specific compliance requirements.",
          "Integrated reporting for water performance and ESG traceability.",
        ],
      },
      {
        title: "Malls & Commercial Real Estate",
        image: "/figma-assets/industry-tab-malls.png",
        points: ["Water recycling for facility management", "ESG dashboards for LEED/Estidama compliance"],
        description: "Malls and commercial real estate developments rely on water for cooling, cleaning, landscaping, sanitation, and daily facility operations. BlueVerse CleanTech helps commercial properties reduce water waste, optimize usage, and improve sustainability performance across high-traffic environments. Our solutions support facility managers, developers, and asset owners in lowering operating costs while improving water efficiency and ESG value. By integrating treatment, reuse, and performance monitoring, commercial properties can become more resource-conscious, cost-efficient, and future-ready.",
        details: [
          "Water reuse infrastructure for cooling, cleaning, and site maintenance.",
          "Portfolio-level ESG reporting support for LEED, Estidama, and internal targets.",
          "Smarter monitoring for multi-building facility management teams.",
        ],
      },
      {
        title: "Government & Municipalities",
        image: "/figma-assets/industry-tab-government.png",
        points: ["Aligned with UAE Water Security Strategy 2036", "Saudi Water Vision 2030 Policy Support"],
        description: "BlueVerse CleanTech partners with government entities and municipalities to support sustainable water management across public infrastructure, communities, and civic facilities. As cities face rising demand, water scarcity, and environmental pressure, smarter water systems are essential for long-term resilience. Our solutions help public sector teams improve wastewater treatment, enable reuse, reduce water loss, and create more efficient municipal operations. From community-scale systems to infrastructure-focused projects, we support cleaner, more sustainable, and future-ready urban development.",
        details: [
          "Infrastructure aligned with water security and circular-resource strategies.",
          "Decision support for long-horizon treatment, reuse, and utility planning.",
          "Transparent metrics for public accountability and policy tracking.",
        ],
      },
      {
        title: "Developers & Master Planners",
        image: "/figma-assets/industries-4.png",
        points: ["Built-in water reuse infrastructure", "Aldar, Emaar, Nakheel, Deyaar partnerships"],
        description: "Sustainable communities begin with smart planning. BlueVerse CleanTech works with developers, consultants, and master planners to integrate water efficiency, wastewater reuse, and circular resource strategies into new developments from the earliest stages.Our solutions help residential communities, mixed-use projects, and large-scale master plans reduce environmental impact, improve operational resilience, and align with sustainability goals. By designing water-smart infrastructure from the start, developers can create future-ready destinations that are efficient, responsible, and built for long-term value.",
        details: [
          "Integrated water reuse planning for communities, districts, and large developments.",
          "Reduced lifecycle cost through early-stage infrastructure coordination.",
          "Better sustainability positioning for investors, residents, and regulators.",
        ],
      },
    ],
    aboutTabs: [
      {
        name: "Our Values",
        panel: {
          image: "/figma-assets/about-3.png",
          overlayTitle: "Building Tomorrow's Infrastructure, Today",
          overlayDescription: "Innovative water solutions for industries and communities.",
          cards: [
            { title: "Innovation", description: "Proprietary technology and bespoke solutions over off-the-shelf defaults." },
            { title: "Sustainability", description: "Every solution is designed with environmental responsibility in mind." },
            { title: "Reliability", description: "Long-term partnerships built on consistent delivery and trust." },
            { title: "People-First", description: "Continuous training and development for our team and our clients." },
          ],
        },
      },
      {
        name: "Our Mission",
        panel: {
          image: "/figma-assets/about-tab2.png",
          overlayTitle: "Building Tomorrow's Infrastructure, Today",
          overlayDescription: "Innovative water solutions for industries and communities.",
          heading: "Our Mission",
          missionParagraphs: [
            "BlueVerse CleanTech exists to make water reuse the default, not the exception, for businesses. We believe industrial water waste is not inevitable. With the right technology, data intelligence, and circular water solutions, every litre can be recovered, treated, and reused.",
            "As industries face increasing pressure from water scarcity, rising utility costs, and evolving sustainability requirements, we provide integrated solutions that help organizations operate more efficiently while reducing their environmental impact. Our approach combines advanced water treatment technologies, digital monitoring platforms, and ESG-focused performance insights to create measurable, long-term value.",
            "We partner with businesses across industrial, commercial, and infrastructure sectors to transform wastewater from a liability into a valuable resource. Through intelligent treatment systems, real-time operational visibility, and performance-driven water management strategies, we help clients reduce freshwater dependency, optimize resource consumption, and strengthen regulatory compliance.",
            "By enabling circular water ecosystems, BlueVerse is building a future where sustainability and operational excellence work together. Our mission is to empower organizations to conserve resources, lower emissions, improve efficiency, and create a lasting positive impact on communities, industries, and the environment.",
          ],
        },
      },
      {
        name: "Our Journey",
        panel: {
          image: "/figma-assets/about-tab3.png",
          overlayTitle: "Building Tomorrow's Infrastructure, Today",
          overlayDescription: "Innovative water solutions for industries and communities.",
          timeline: [
            { year: "2021", description: "Developed and patented automated 2-wheeler vehicle washing machine" },
            { year: "2022", description: "Built proprietary ESG Tech Stack for water metrics in vehicle washing" },
            { year: "2024", description: "Expanded to 15 operational sites across India; entered the UAE market" },
            { year: "2025", description: "Launched UAE B2C car care centre at Al Quoz, Dubai" },
            { year: "2026", description: "Incubated in WTIIRA Saudi Water Authority innovation programme" },
            { year: "2026", description: "Selected for WaterTech Accelerator QSTP x TotalEnergies, Qatar" },
          ],
        },
      },
    ],
    partners: [
      {
        name: "MCWW",
        logo: "/figma-assets/washworks.png",
        description: "Manufactures a comprehensive line of automatic car wash systems, including tunnels, arches, and high-performance drying equipment. A trusted one-stop resource for car wash investors and operators seeking reliable, cutting-edge technology, the company focuses on delivering durable, efficient, and easy-to-operate solutions designed to maximize wash quality.",
      },
      {
        name: "INDRA Water",
        logo: "/figma-assets/indra.png",
        description: "BlueVerse is the exclusive GCC system integrator for INDRA Water's ElectroX electrochemical treatment platform, a technology certified as 10 years ahead of conventional ETP/STP systems. INDRA's modular units require zero primary chemicals, have a fraction of the footprint of legacy systems, and are fully remote-monitored.",
      },
      {
        name: "Stinger Chemicals",
        logo: "/figma-assets/stinger.png",
        description: "Stinger Chemicals delivers high-quality industrial and automotive chemical solutions, trusted for performance and reliability. Committed to innovation, we provide products that meet the highest standards for every application, helping businesses achieve superior cleaning, protection, and maintenance results.",
      },
      {
        name: "Xylem",
        logo: "/figma-assets/xylem.png",
        description: "BlueVerse cleantech has partnered with Xylem, a global leader in water technology and solutions, to strengthen our water infrastructure capabilities. Xylem's expertise spans water analysis & monitoring, disinfection systems, filtration, smart metering, and digital water management complementing our EPC and ESG commitments with world-class technology and equipment.",
      },
    ],
    deploymentHighlights: [
      "15+ operational Vehicle Washing centres across India and UAE",
      "8 MLD+ wastewater treatment plants deployed or undergoing deployment",
      "50 MLD+ order pipeline for wastewater treatment capacity",
      "UAE's first and most sustainable car care centre - Al Quoz, Dubai",
      "Targeting 100+ BlueVerse centres by 2027",
    ],
    offices: [
      { title: "UAE", address: "near Al Quoz - Al Qouz Ind.second - Al Quoz - Dubai - United Arab Emirates" },
      { title: "India", address: "Floor-8, Plot-208, Regent Chambers, Jamnalal Bajaj Marg, Nariman Point, Mumbai, Maharashtra - 400021" },
    ],
    footerServiceLinks: ["Automated Vehicle Washing", "Water Treatment Systems", "ESG Intelligence Platform", "EPC Services"],
    navLinks: [
      { label: "Home", href: "/" },
      { label: "About Us", href: "/#about" },
      { label: "Water Treatment", href: "/waste-water-treatment-systems" },
      { label: "Vehicle Washing", href: "/vehicle-washing" },
      { label: "ESG Platform", href: "/esg-platform" },
      { label: "EPC Solutions", href: "/#about" },
      { label: "Contact Us", href: "/#contact" },
    ],
  },
  "waste-water-treatment-page": {
    hero: {
      subtitle: "Waste Water Treatment Systems",
      title: "Enabling Water Security\nDecentralised, at Scale",
      description: "BlueVerse Cleantech delivers end-to-end EPC solutions for decentralised desalination and wastewater treatment plants powered by proprietary ElectroX technology. A non-contact micro-electrolysis process built indigenously for treating the toughest pollutants. | 4 Patents Granted.",
      heroImage: "/waste-water-treatment-systems/main-hero.png",
    },
    stats: [
      { value: "98%", label: "Water recovery rate", icon: "/waste-water-treatment-systems/stat-icon-1.png" },
      { value: "90%", label: "Less space requirement", icon: "/waste-water-treatment-systems/stat-icon-2.png" },
      { value: "Zero", label: "Chemicals in primary treatment", icon: "/waste-water-treatment-systems/stat-icon-3.png" },
      { value: "40%", label: "Savings on operational costs", icon: "/waste-water-treatment-systems/stat-icon-4.png" },
      { value: "Plug & Play", label: "Shock-load ready deployment", icon: "/waste-water-treatment-systems/stat-icon-5.png" },
    ],
    epcFocusAreas: [
      {
        title: "Decentralised Wastewater Treatment Plants",
        description: "End-to-end EPC for wastewater treatment at source - industrial, municipal, commercial and residential. Converting waste streams into reusable water assets.",
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
        description: "We design, procure, and construct decentralised desalination infrastructure - bringing potable water closer to the point of need, eliminating dependence on long-distance pipelines.",
        points: [
          "Brackish water & seawater treatment",
          "Modular, scalable plant design",
          "Remote & peri-urban deployment",
          "Low OPEX, high uptime systems",
          "IoT-enabled remote monitoring",
        ],
      },
    ],
    electroxProcesses: [
      { title: "Electro-coagulation", description: "Destabilises colloids and metals for removal.", icon: "/waste-water-treatment-systems/electrox-1.svg" },
      { title: "Electro-floatation", description: "Lifts contaminants via fine gas bubbles.", icon: "/waste-water-treatment-systems/electrox-2.svg" },
      { title: "Electro-flocculation", description: "Lifts contaminants via fine gas bubbles.", icon: "/waste-water-treatment-systems/electrox-3.svg" },
      { title: "Electro-disinfection", description: "Destroys pathogens through oxidative radicals.", icon: "/waste-water-treatment-systems/electrox-4.svg" },
      { title: "Electro-oxidation", description: "Breaks down persistent organics.", icon: "/waste-water-treatment-systems/electrox-5.svg" },
      { title: "Electro-sorption", description: "Captures dyes, organics and ions on reactive sites.", icon: "/waste-water-treatment-systems/electrox-6.svg" },
    ],
    scaleCards: [
      { code: "S01", title: "Small scale", image: "/waste-water-treatment-systems/scale-s01.png", footprint: "50 sq.ft", stp: "20 KLD", etp: "10 KLD" },
      { code: "S02", title: "Mid scale", image: "/waste-water-treatment-systems/scale-s02.png", footprint: "50 sq.ft", stp: "75 KLD", etp: "40-60 KLD" },
      { code: "L01", title: "Large scale", image: "/waste-water-treatment-systems/scale-l01.png", footprint: "75 sq.ft", stp: "250 KLD", etp: "80-150 KLD" },
      { code: "L02", title: "Flagship - Commercial", image: "/waste-water-treatment-systems/scale-l02.png", footprint: "100 sq.ft", stp: "800-1000 KLD", etp: "100-600 KLD" },
    ],
    ecosystemProducts: [
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
    ],
    industries: [
      { title: "Hotels & Hospitality", image: "/figma-assets/industries-4.png", points: ["Wastewater recycling for laundry, kitchens, landscaping", "ESG reporting for corporate sustainability targets"] },
      { title: "Vehicle Wash", image: "/figma-assets/industries-5.png", points: ["Automated wash tunnels with water recycling", "WaaS (Wash-as-a-Service) subscription model"] },
      { title: "Industrial Facilities", image: "/figma-assets/industries-6.png", points: ["Effluent treatment for manufacturing, logistics", "JAFZA, KIZAD, EGA zone compliance"] },
      { title: "Malls & Commercial Real Estate", image: "/figma-assets/industries-1.png", points: ["Water recycling for facility management", "ESG dashboards for LEED/Estidama compliance"] },
      { title: "Government & Municipalities", image: "/figma-assets/industries-2.png", points: ["Aligned with UAE Water Security Strategy 2036", "Saudi Water Vision 2030 Policy Support"] },
      { title: "Developers & Master Planners", image: "/figma-assets/industries-3.png", points: ["Built-in water reuse infrastructure", "Aldar, Emaar, Nakheel, Deyaar partnerships"] },
    ],
    aboutValues: [
      { title: "Innovation", description: "Proprietary technology and bespoke solutions over off-the-shelf defaults." },
      { title: "Sustainability", description: "Every solution is designed with environmental responsibility in mind." },
      { title: "Reliability", description: "Long-term partnerships built on consistent delivery and trust." },
      { title: "People-First", description: "Continuous training and development for our team and our clients." },
    ],
    partnerships: [
      { name: "INDRA Water", logo: "/figma-assets/indra.png", description: "BlueVerse is the exclusive GCC system integrator for INDRA Water's ElectroX electrochemical treatment platform, a technology certified as 10 years ahead of conventional ETP/STP systems. INDRA's modular units require zero primary chemicals, have a fraction of the footprint of legacy systems, and are fully remote-monitored." },
      { name: "Xylem", logo: "/figma-assets/xylem.png", description: "BlueVerse cleantech has partnered with Xylem, a global leader in water technology and solutions, to strengthen our water infrastructure capabilities. Xylem's expertise spans water analysis & monitoring, disinfection systems, filtration, smart metering, and digital water management complementing our EPC and ESG commitments with world-class technology and equipment." },
    ],
    deploymentHighlights: [
      "15+ operational Vehicle Washing centres across India and UAE",
      "8 MLD+ wastewater treatment plants deployed or undergoing deployment",
      "50 MLD+ order pipeline for wastewater treatment capacity",
      "UAE's first and most sustainable car care centre - Al Quoz, Dubai",
      "Targeting 100+ BlueVerse centres by 2027",
    ],
    offices: [
      { title: "UAE", address: "near Al Quoz - Al Qouz Ind.second - Al Quoz - Dubai - United Arab Emirates" },
      { title: "India", address: "Floor-8, Plot-208, Regent Chambers, Jamnalal Bajaj Marg, Nariman Point, Mumbai, Maharashtra - 400021" },
    ],
  },
  "vehicle-washing-page": {
    hero: {
      subtitle: "Automated Vehicle Washing",
      title: "Sustainable Vehicle Washing Solutions",
      description: "BlueVerse operates and supplies fully automated vehicle washing systems that combine throughput, quality, and water efficiency in a single footprint - designed for petrol stations, malls, fleet depots, automotive dealerships, and government facilities.",
      heroImage: "/vehicle-assets/wash-tunnel.png",
    },
    features: [
      { icon: "/vehicle-assets/feature-1.svg", description: "Fully automated washing tunnels and robotic gantry systems" },
      { icon: "/vehicle-assets/feature-2.svg", description: "Express tunnel wash: high-volume throughput for busy locations" },
      { icon: "/vehicle-assets/feature-3.svg", description: "Robot AI Wash: Dubai's first AI-powered robotic wash (coming soon)" },
      { icon: "/vehicle-assets/feature-4.svg", description: "95% water recycling per wash cycle via integrated ETP" },
      { icon: "/vehicle-assets/feature-5.svg", description: "IoT-enabled - real-time wash data feeds into ESG dashboard" },
      { icon: "/vehicle-assets/feature-6.svg", description: "Zero capex model available: Pay-per-Wash / Wash-as-a-Service (WaaS)" },
    ],
    washTypes: [
      { title: "Express Tunnel Wash", description: "High-speed automated wash. Ideal for petrol stations, mall carparks, fleet depots. High throughput, consistent quality." },
      { title: "Manual Wash", description: "Hand-crafted wash by trained technicians. For premium and high-value vehicles." },
      { title: "Robot AI Wash", description: "AI-powered robotic wash system - coming soon to UAE. Precision, speed, scratch-free brilliance." },
      { title: "2-Wheeler Automated Wash", description: "Patented automated motorcycle wash system. 8 washes per hour, 138 sq.ft. footprint, 98% water recovery." },
    ],
    businessModels: [
      { icon: "/vehicle-assets/business-1.svg", title: "CapEx purchase", description: "Full system ownership" },
      { icon: "/vehicle-assets/business-2.svg", title: "Wash-as-a-Service (WaaS)", description: "Revenue-share or subscription model, zero upfront capex" },
      { icon: "/vehicle-assets/business-3.svg", title: "Annual Maintenance Contracts (AMCs)", description: "Full system upkeep and consumables" },
    ],
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
  },
  "esg-platform-page": {
    hero: {
      subtitle: "ESG Intelligence Platform",
      title: "Technology-led Sustainability\nfor a Resource-Conscious\nWorld",
      description: "The BlueVerse ESG Intelligence platform gives facility managers, sustainability officers, and corporate boards real-time visibility into water and carbon metrics formatted for regulatory compliance and global ESG frameworks.",
      heroImage: "/esg-assets/hero.png",
    },
    whatItTracks: [
      "Water saved (litres/day, month, year)",
      "Water reused (% recovery rate per facility)",
      "Carbon avoided (kg CO2e equivalent)",
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
  },
  "contact-form": {
    heading: "Let's Build Something Together",
    description: "Whether you have a project in mind, a question about our services, or want to explore a partnership - our team is ready to help.",
    offices: [
      { title: "UAE", address: "near Al Quoz - Al Qouz Ind.second - Al Quoz - Dubai - United Arab Emirates" },
      { title: "India", address: "Floor-8, Plot-208, Regent Chambers, Jamnalal Bajaj Marg, Nariman Point, Mumbai, Maharashtra - 400021" },
    ],
    submitLabel: "Talk To Our Team",
    submittingLabel: "Sending...",
    successMessage: "Message sent successfully.",
    errorMessage: "Unable to send your message right now.",
  },
  "wwtp-contact-form": {
    heading: "Let's Build Something Together",
    description: "Whether you have a project in mind, a question about our services, or want to explore a partnership - our team is ready to help.",
    offices: [
      { title: "UAE", address: "near Al Quoz - Al Qouz Ind.second - Al Quoz - Dubai - United Arab Emirates" },
      { title: "India", address: "Floor-8, Plot-208, Regent Chambers, Jamnalal Bajaj Marg, Nariman Point, Mumbai, Maharashtra - 400021" },
    ],
    submitLabel: "Talk To Our Team ->",
  },
};

async function login() {
  const response = await fetch(`${base}/admin/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: adminEmail,
      password: adminPassword,
    }),
  });

  const json = await response.json();

  if (!response.ok || !json.data?.token) {
    throw new Error(`Login failed: ${response.status} ${JSON.stringify(json)}`);
  }

  return json.data.token;
}

async function putSingleType(jwt, slug, data) {
  const response = await fetch(`${base}/content-manager/single-types/api::${slug}.${slug}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${jwt}`,
    },
    body: JSON.stringify(data),
  });

  const text = await response.text();

  if (!response.ok) {
    throw new Error(`[${slug}] ${response.status} ${text}`);
  }

  console.log(`[ok] ${slug}`);
}

async function main() {
  console.log(`Syncing ${Object.keys(ALL_CONTENT).length} single types to ${base}`);
  const jwt = await login();

  for (const [slug, data] of Object.entries(ALL_CONTENT)) {
    await putSingleType(jwt, slug, data);
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
