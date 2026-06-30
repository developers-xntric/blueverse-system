import type {
  NavbarData,
  FooterData,
  GlobalSettingsData,
  HomePageData,
  ContactFormData,
  WasteWaterTreatmentPageData,
  VehicleWashingPageData,
  EsgPlatformPageData,
  MediaAsset,
} from "@/lib/types";

function img(path: string, alt: string): MediaAsset {
  return { url: path, alt };
}

const globalSettings: GlobalSettingsData = {
  title: "BlueVerse | Water Infrastructure Landing Page",
  description:
    "BlueVerse cleantech landing page for water treatment, automated vehicle washing, and ESG intelligence solutions.",
  ogTitle: "BlueVerse | Water Infrastructure Landing Page",
  ogDescription:
    "BlueVerse cleantech landing page for water treatment, automated vehicle washing, and ESG intelligence solutions.",
  ogImage: img("/hero-bg.png", "BlueVerse"),
  twitterCard: "summary_large_image",
};

const navbar: NavbarData = {
  logo: img("/figma-assets/hero-logo.png", "BlueVerse"),
  logoAlt: "BlueVerse",
  navLinks: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/#about" },
    { label: "Water Treatment", href: "/waste-water-treatment-systems" },
    { label: "Vehicle Washing", href: "/vehicle-washing" },
    { label: "ESG Platform", href: "/esg-platform" },
    { label: "Contact Us", href: "/#contact" },
  ],
  cta: { label: "Talk To Our Team", href: "/#contact" },
};

const footer: FooterData = {
  logo: img("/figma-assets/partner-logo-6.png", "BlueVerse"),
  navLinks: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/#about" },
    { label: "Contact Us", href: "/#contact" },
  ],
  serviceLinks: [
    { label: "Automated Vehicle Washing", href: "/vehicle-washing" },
    { label: "Water Treatment Systems", href: "/waste-water-treatment-systems" },
    { label: "ESG Intelligence Platform", href: "/esg-platform" },
  ],
  copyright: "Copyright 2026 BlueVerse CleanTech International Holdings Ltd. All rights reserved.",
  socialLinks: [],
};

const contactForm: ContactFormData = {
  heading: "Let's Build Something Together",
  description:
    "Whether you have a project in mind, a question about our services, or want to explore a partnership our team is ready to help.",
  emailTitle: "Email Address",
  emailAddress: "info@blueverse.tech",
  offices: [
    {
      title: "UAE",
      address: "Near Al Quoz Industrial Area 2, Al Quoz, Dubai, United Arab Emirates",
      icon: null,
    },
    {
      title: "India",
      address:
        "Floor 8, Plot 208, Regent Chambers, Jamnalal Bajaj Marg, Nariman Point, Mumbai, Maharashtra 400021",
      icon: null,
    },
  ],
  nameField: { label: "Full Name", placeholder: "Your Name", required: true },
  companyField: { label: "Company", placeholder: "Company Name", required: true },
  emailField: { label: "Email Address", placeholder: "email@company.com", required: true },
  phoneField: { label: "Phone Number", placeholder: "+91 XXXX XXX XXX", required: true },
  serviceField: {
    label: "Service Interest",
    placeholder: "Select a service",
    options: [
      "Water Treatment Systems",
      "Automated Vehicle Washing",
      "ESG Intelligence Platform",
    ],
  },
  messageField: {
    label: "Message",
    placeholder: "Tell us about your project requirements...",
    required: true,
  },
  submitLabel: "Talk To Our Team",
  submittingLabel: "Sending...",
  successMessage: "Message sent successfully.",
  errorMessage: "Unable to send your message right now.",
};

const homePage: HomePageData = {
  seo: {
    title: "BlueVerse | Water Infrastructure Landing Page",
    description:
      "BlueVerse cleantech landing page for water treatment, automated vehicle washing, and ESG intelligence solutions.",
  },
  hero: {
    subtitle: "",
    title: "Building a Circular Water Infrastructure Platform",
    description:
      "Helping businesses reduce water consumption, achieve regulatory compliance, and report ESG metrics - all from one unified platform.",
    heroImage: img("/hero-bg.png", "Building a Circular Water Infrastructure Platform"),
    primaryCta: { label: "Talk To Our Team", href: "#contact" },
    secondaryCta: { label: "Explore Solutions", href: "#solutions" },
  },
  trustedBrandsLabel: "Trusted By Leading Brands",
  marqueeLogos: [
    { name: "TVS", url: "/figma-assets/marquee-new-tvs.png", alt: "TVS" },
    { name: "Honda", url: "/figma-assets/marquee-honda.png", alt: "Honda" },
    { name: "Royal Enfield", url: "/figma-assets/marquee-royal-enfield.png", alt: "Royal Enfield" },
    { name: "IHCL", url: "/figma-assets/marquee-new-ihcl.png", alt: "IHCL" },
    { name: "MG", url: "/figma-assets/marquee-mg.png", alt: "MG" },
    { name: "Tata", url: "/figma-assets/marquee-new-tata.png", alt: "Tata" },
  ],
  heroPartners: [
    {
      title: "WTIIRA",
      subtitle: "Saudi Water Authority",
      logo: img("/figma-assets/top-12.png", "WTIIRA"),
      points: [
        "Incubated by the innovation arm of the Saudi Water Authority (SWA)",
        "Validating BlueVerse technology for the KSA market",
      ],
    },
    {
      title: "WaterTech Accelerator",
      subtitle: "QSTP x TotalEnergies",
      logo: img("/figma-assets/top-new.png", "WaterTech Accelerator"),
      points: [
        "Selected for the Qatar Science & Technology Park programme",
        "Backed by TotalEnergies energy transition initiative",
      ],
    },
  ],
  stats: [
    { value: "05+", label: "Years of Experience", icon: null },
    { value: "10000+", label: "CO2 Emissions Reduced", icon: null },
    { value: "5000 Million +", label: "Litres of Water Saved", icon: null },
    { value: "50 MLD+", label: "Wastewater Order Pipeline", icon: null },
  ],
  problemSection: {
    header: {
      eyebrow: "The Problem We Solve",
      title: "Challenges Driving the Need for Change",
    },
    ctaText: "Together, we can reduce water waste and build a more sustainable future",
    cta: { label: "Let's Solve Water Challenges Together", href: "#contact" },
  },
  challenges: [
    {
      title: "Water Scarcity",
      icon: img("/1.png", "Water Scarcity"),
      points: [
        "Operating in one of the world's most water-stressed regions",
        "74–83% of India and GCC populations face extremely high water stress.",
      ],
    },
    {
      title: "Industrial Water Waste",
      icon: img("/2.png", "Industrial Water Waste"),
      points: [
        "70–90% of wastewater is discharged without treatment or reuse",
        "Industries generate high COD/TSS effluent",
      ],
    },
    {
      title: "ESG Compliance",
      icon: img("/3.png", "ESG Compliance"),
      points: [
        "India, UAE, KSA, and Qatar enforcing ESG reporting mandates",
        "Companies lack real-time Scope 1, 2, 3 water metrics",
      ],
    },
    {
      title: "A Fragmented Market",
      icon: img("/5.png", "A Fragmented Market"),
      points: [
        "Disconnected solutions",
        "Multiple vendors for vehicle washing, water treatment and ESG reporting",
      ],
    },
  ],
  solutionsSection: {
    header: {
      eyebrow: "Our Solutions",
      title: "One Platform. Three Transformative Solutions.",
    },
    summary:
      "From Water Treatment to Smart Washing and ESG Reporting, BlueVerse brings every solution together.",
    cta: { label: "Let's Talk Sustainable Growth", href: "#contact" },
  },
  solutions: [
    {
      title: "Water Treatment Systems",
      description:
        "Smart water treatment systems designed to purify, recycle, and optimize water for sustainable operations.",
      image: img("/figma-assets/water-systems.png", "Water Treatment Systems"),
      href: "/waste-water-treatment-systems",
      icon: null,
    },
    {
      title: "Sustainable Vehicle Washing",
      description:
        "Automated vehicle washing solutions that deliver consistent cleaning performance with efficient water use.",
      image: img("/figma-assets/solutions-1.png", "Automated Vehicle Washing"),
      href: "/vehicle-washing",
      icon: null,
    },
    {
      title: "ESG Intelligence Platform",
      description:
        "AI-driven water intelligence platform for water assets, carbon credit trading, water exchange, energy optimization, and waste data management.",
      image: img("/figma-assets/solutions-3.png", "ESG Intelligence Platform"),
      href: "/esg-platform",
      icon: null,
    },
  ],
  industriesSection: {
    header: {
      eyebrow: "Who We Serve",
      title: "Industries We Transform",
    },
    detailEyebrow: "Industries",
    detailCta: { label: "Let's Talk Sustainable Growth", href: "#contact" },
  },
  industries: [
    {
      title: "Hotels & Hospitality",
      image: img("/figma-assets/industry-tab-1.png", "Hotels & Hospitality"),
      points: [
        "Wastewater recycling for laundry, kitchens, landscaping",
        "ESG reporting for corporate sustainability targets",
      ],
      description:
        "BlueVerse CleanTech helps hotels, resorts, and hospitality groups make water efficiency a part of everyday operations without compromising guest comfort, hygiene standards, or service quality.",
      details: [
        "Closed-loop water reuse for laundries, kitchens, landscaping, and utility zones.",
        "Sustainability dashboards aligned to group-wide environmental commitments.",
        "Operational visibility across sites to benchmark performance and compliance.",
      ],
    },
    {
      title: "Vehicle Wash",
      image: img("/figma-assets/new-2.png", "Vehicle Wash"),
      points: [
        "Automated wash tunnels with water recycling",
        "WaaS (Wash-as-a-Service) subscription model",
      ],
      description:
        "Vehicle wash operations require large volumes of water every day, making efficient treatment and reuse essential for long-term profitability and sustainability.",
      details: [
        "Automated tunnels and rollover systems engineered for consistent throughput.",
        "Water reuse systems that materially cut freshwater use per wash cycle.",
        "Subscription-ready operating support for multi-site wash networks.",
      ],
    },
    {
      title: "Industrial Facilities",
      image: img("/figma-assets/industry-tab-3.png", "Industrial Facilities"),
      points: [
        "Effluent treatment for manufacturing, logistics",
        "JAFZA, KIZAD, EGA zone compliance",
      ],
      description:
        "Industrial facilities face growing pressure to manage water more responsibly while maintaining productivity, compliance, and operational continuity.",
      details: [
        "Treatment systems sized for manufacturing, logistics, and process-intensive operations.",
        "Regulatory alignment for industrial parks and zone-specific compliance requirements.",
        "Integrated reporting for water performance and ESG traceability.",
      ],
    },
    {
      title: "Malls & Commercial Real Estate",
      image: img("/indus-4.png", "Malls & Commercial Real Estate"),
      points: [
        "Water recycling for facility management",
        "ESG dashboards for LEED/Estidama compliance",
      ],
      description:
        "Malls and commercial real estate developments rely on water for cooling, cleaning, landscaping, sanitation, and daily facility operations.",
      details: [
        "Water reuse infrastructure for cooling, cleaning, and site maintenance.",
        "Portfolio-level ESG reporting support for LEED, Estidama, and internal targets.",
        "Smarter monitoring for multi-building facility management teams.",
      ],
    },
    {
      title: "Government & Municipalities",
      image: img("/figma-assets/industry-tab-5.png", "Government & Municipalities"),
      points: [
        "Aligned with UAE Water Security Strategy 2036",
        "Saudi Water Vision 2030 Policy Support",
      ],
      description:
        "BlueVerse CleanTech partners with government entities and municipalities to support sustainable water management across public infrastructure, communities, and civic facilities.",
      details: [
        "Infrastructure aligned with water security and circular-resource strategies.",
        "Decision support for long-horizon treatment, reuse, and utility planning.",
        "Transparent metrics for public accountability and policy tracking.",
      ],
    },
    {
      title: "Developers & Master Planners",
      image: img("/indus-6.png", "Developers & Master Planners"),
      points: [
        "Built-in water reuse infrastructure",
        "Aldar, Emaar, Nakheel, Deyaar partnerships",
      ],
      description:
        "Sustainable communities begin with smart planning. BlueVerse CleanTech works with developers, consultants, and master planners to integrate water efficiency, wastewater reuse, and circular resource strategies into new developments from the earliest stages.",
      details: [
        "Integrated water reuse planning for communities, districts, and large developments.",
        "Reduced lifecycle cost through early-stage infrastructure coordination.",
        "Better sustainability positioning for investors, residents, and regulators.",
      ],
    },
  ],
  aboutSection: {
    eyebrow: "About BlueVerse",
    title: "Building Tomorrow's Infrastructure, Today",
  },
  aboutTabs: [
    {
      name: "Our Values",
      panel: {
        image: img("/figma-assets/about-3.png", "Our Values"),
        overlayTitle: "Building Tomorrow's Infrastructure, Today",
        overlayDescription: "Innovative water solutions for industries and communities.",
        overlayCta: { label: "Get Started", href: "#contact" },
        heading: undefined,
        cards: [
          {
            title: "Innovation",
            description: "Proprietary technology and bespoke solutions over off-the-shelf defaults.",
            icon: null,
          },
          {
            title: "Sustainability",
            description: "Every solution is designed with environmental responsibility in mind.",
            icon: null,
          },
          {
            title: "Reliability",
            description: "Long-term partnerships built on consistent delivery and trust.",
            icon: null,
          },
          {
            title: "People-First",
            description: "Continuous training and development for our team and our clients.",
            icon: null,
          },
        ],
        missionParagraphs: [],
        timeline: [],
      },
    },
    {
      name: "Our Mission",
      panel: {
        image: img("/figma-assets/about-tab2.png", "Our Mission"),
        overlayTitle: "Building Tomorrow's Infrastructure, Today",
        overlayDescription: "Innovative water solutions for industries and communities.",
        overlayCta: { label: "Get Started", href: "#contact" },
        heading: "Our Mission",
        cards: [],
        missionParagraphs: [
          "BlueVerse CleanTech exists to make water reuse the default, not the exception, for businesses.",
          "We provide integrated solutions that help organizations operate more efficiently while reducing their environmental impact.",
          "We partner with businesses across industrial, commercial, and infrastructure sectors to transform wastewater from a liability into a valuable resource.",
          "Our mission is to empower organizations to conserve resources, lower emissions, improve efficiency, and create a lasting positive impact.",
        ],
        timeline: [],
      },
    },
    {
      name: "Our Journey",
      panel: {
        image: img("/figma-assets/about-tab3.png", "Our Journey"),
        overlayTitle: "Building Tomorrow's Infrastructure, Today",
        overlayDescription: "Innovative water solutions for industries and communities.",
        overlayCta: { label: "Get Started", href: "#contact" },
        heading: undefined,
        cards: [],
        missionParagraphs: [],
        timeline: [
          { year: "2021", description: "Developed and patented automated 2-wheeler vehicle washing machine" },
          { year: "2022", description: "Built proprietary ESG tech stack for water metrics in vehicle washing" },
          { year: "2024", description: "Expanded to 15 operational sites across India and entered the UAE market" },
          { year: "2025", description: "Launched UAE B2C car care centre at Al Quoz, Dubai" },
          { year: "2026", description: "Incubated in WTIIRA Saudi Water Authority innovation programme" },
          { year: "2026", description: "Selected for WaterTech Accelerator QSTP x TotalEnergies, Qatar" },
        ],
      },
    },
  ],
  partnersSection: {
    eyebrow: "",
    title: "Partnerships",
  },
  partners: [
    {
      name: "MCWW",
      logo: img("/figma-assets/washworks.png", "MCWW"),
      description:
        "Manufactures a comprehensive line of automatic car wash systems, including tunnels, arches, and high-performance drying equipment.",
    },
    {
      name: "INDRA Water",
      logo: img("/figma-assets/indra.png", "INDRA Water"),
      description:
        "BlueVerse is the exclusive GCC system integrator for INDRA Water's ElectroX electrochemical treatment platform.",
    },
    {
      name: "Stinger Chemicals",
      logo: img("/figma-assets/stinger.png", "Stinger Chemicals"),
      description:
        "Stinger Chemicals delivers high-quality industrial and automotive chemical solutions, trusted for performance and reliability.",
    },
    {
      name: "Xylem",
      logo: img("/figma-assets/xylem.png", "Xylem"),
      description:
        "BlueVerse has partnered with Xylem, a global leader in water technology and solutions, to strengthen water infrastructure capabilities.",
    },
  ],
  deploymentSection: {
    title: "Deployment Highlights",
    image: img("/figma-assets/dep.png", "Deployment Highlights"),
  },
  deploymentHighlights: [
    "15+ operational vehicle washing centres across India and UAE",
    "8 MLD+ wastewater treatment plants deployed or undergoing deployment",
    "50 MLD+ order pipeline for wastewater treatment capacity",
    "UAE's first and most sustainable car care centre in Al Quoz, Dubai",
    "Targeting 100+ BlueVerse centres by 2027",
  ],
};

const wasteWaterTreatmentPage: WasteWaterTreatmentPageData = {
  seo: {
    title: "Waste Water Treatment Systems | BlueVerse",
    description: "BlueVerse waste water treatment systems page.",
  },
  hero: {
    subtitle: "Waste Water Treatment Systems",
    title: "Enabling Water Security\nDecentralised, at Scale",
    description:
      "BlueVerse Cleantech delivers end-to-end EPC solutions for decentralised desalination and wastewater treatment plants powered by proprietary ElectroX technology. A non-contact micro-electrolysis process built indigenously for treating the toughest pollutants.",
    heroImage: img("/waste-water-treatment-systems/main-hero.png", "Waste Water Treatment Systems"),
  },
  statsSectionLabel: "Water Treatment Systems",
  stats: [
    { value: "98%", label: "Water recovery rate", icon: img("/waste-water-treatment-systems/stat-icon-1.png", "Water recovery rate") },
    { value: "90%", label: "Less space requirement", icon: img("/waste-water-treatment-systems/stat-icon-2.png", "Less space requirement") },
    { value: "Zero", label: "Chemicals in primary treatment", icon: img("/waste-water-treatment-systems/stat-icon-3.png", "Chemicals in primary treatment") },
    { value: "40%", label: "Savings on operational costs", icon: img("/waste-water-treatment-systems/stat-icon-4.png", "Savings on operational costs") },
    { value: "Plug & Play", label: "Shock-load ready deployment", icon: img("/waste-water-treatment-systems/stat-icon-5.png", "Shock-load ready deployment") },
  ],
  epcSection: {
    title: "Focus Areas",
    ctaText:
      "Delivering end-to-end water infrastructure solutions from design and procurement to construction and deployment.",
    cta: { label: "Build With BlueVerse", href: "/#contact" },
  },
  epcFocusAreas: [
    {
      title: "Decentralised Wastewater Treatment Plants",
      description:
        "End-to-end EPC for wastewater treatment at source - industrial, municipal, commercial and residential. Converting waste streams into reusable water assets.",
      points: [
        "Industrial ETPs and municipal STPs",
        "Zero Liquid Discharge systems",
        "Sewage reuse for irrigation and utilities",
        "Retrofit-ready for existing plants",
        "BRSR and compliance-ready reporting",
      ],
    },
    {
      title: "Decentralised Desalination Infrastructure",
      description:
        "We design, procure, and construct decentralised desalination infrastructure - bringing potable water closer to the point of need.",
      points: [
        "Brackish water and seawater treatment",
        "Modular, scalable plant design",
        "Remote and peri-urban deployment",
        "Low OPEX, high uptime systems",
        "IoT-enabled remote monitoring",
      ],
    },
  ],
  electroxSection: {
    eyebrow: "ElectroX - Six processes.",
    title: "One reactor. Infinite possibilities.",
    description:
      "ElectroX replaces chemical-heavy, multi-stage conventional treatment with a single electricity-driven reactor. It handles pollutant shock loads with zero chemical dosing in primary treatment.",
  },
  electroxProcesses: [
    { title: "Electro-coagulation", description: "Destabilises colloids and metals for removal.", icon: img("/waste-water-treatment-systems/electrox-1.svg", "Electro-coagulation") },
    { title: "Electro-floatation", description: "Lifts contaminants via fine gas bubbles.", icon: img("/waste-water-treatment-systems/electrox-2.svg", "Electro-floatation") },
    { title: "Electro-flocculation", description: "Lifts contaminants via fine gas bubbles.", icon: img("/waste-water-treatment-systems/electrox-3.svg", "Electro-flocculation") },
    { title: "Electro-disinfection", description: "Destroys pathogens through oxidative radicals.", icon: img("/waste-water-treatment-systems/electrox-4.svg", "Electro-disinfection") },
    { title: "Electro-oxidation", description: "Breaks down persistent organics.", icon: img("/waste-water-treatment-systems/electrox-5.svg", "Electro-oxidation") },
    { title: "Electro-sorption", description: "Captures dyes, organics and ions on reactive sites.", icon: img("/waste-water-treatment-systems/electrox-6.svg", "Electro-sorption") },
  ],
  scaleSection: {
    eyebrow: "Built for Every Scale",
    title: "ElectroX Product Ecosystem",
  },
  scaleCards: [
    { code: "S01", title: "Small scale", image: img("/waste-water-treatment-systems/electrox-1.png", "Small scale"), footprint: "50 sq.ft", stp: "20 KLD", etp: "10 KLD" },
    { code: "S02", title: "Mid scale", image: img("/waste-water-treatment-systems/electrox-2.png", "Mid scale"), footprint: "50 sq.ft", stp: "75 KLD", etp: "40-60 KLD" },
    { code: "L01", title: "Large scale", image: img("/waste-water-treatment-systems/electrox-3.png", "Large scale"), footprint: "75 sq.ft", stp: "250 KLD", etp: "80-150 KLD" },
    { code: "L02", title: "Flagship Commercial", image: img("/waste-water-treatment-systems/electrox-4.png", "Flagship Commercial"), footprint: "100 sq.ft", stp: "800-1000 KLD", etp: "100-600 KLD" },
  ],
  ecosystemProducts: [
    {
      title: "ElectroX Reactor",
      description: "Core treatment unit with zero primary chemicals. Four patents granted.",
      icon: img("/waste-water-treatment-systems/product-icon-reactor.png", "ElectroX Reactor"),
    },
    {
      title: "PhloX",
      description: "Skid-based downstream solid-liquid separation unit for target output water quality.",
      icon: img("/waste-water-treatment-systems/product-icon-phlox.png", "PhloX"),
    },
    {
      title: "Spectrum Water Intelligence",
      description: "Unified dashboard connecting sensors, automation, analytics, and remote operations.",
      icon: img("/waste-water-treatment-systems/product-icon-spectrum.png", "Spectrum Water Intelligence"),
    },
  ],
};

const vehicleWashingPage: VehicleWashingPageData = {
  seo: {
    title: "Vehicle Washing | BlueVerse",
    description:
      "BlueVerse automated vehicle washing systems for petrol stations, malls, fleet depots, dealerships, and government facilities.",
  },
  hero: {
    subtitle: "Automated Vehicle Washing",
    title: "Sustainable Vehicle Washing Solutions",
    description:
      "BlueVerse operates and supplies fully automated vehicle washing systems that combine throughput, quality, and water efficiency in a single footprint - designed for petrol stations, malls, fleet depots, automotive dealerships, and government facilities.",
    heroImage: img("/vehicle-assets/wash-tunnel.png", "Sustainable Vehicle Washing Solutions"),
  },
  featuresSectionTitle: "System Features",
  features: [
    { icon: img("/vehicle-assets/feature-1.svg", "Fully automated washing tunnels and robotic gantry systems"), description: "Fully automated washing tunnels and robotic gantry systems" },
    { icon: img("/vehicle-assets/feature-2.svg", "Express tunnel wash for high-volume throughput at busy locations"), description: "Express tunnel wash for high-volume throughput at busy locations" },
    { icon: img("/vehicle-assets/feature-3.svg", "Robot AI Wash: Dubai's first AI-powered robotic wash coming soon"), description: "Robot AI Wash: Dubai's first AI-powered robotic wash coming soon" },
    { icon: img("/vehicle-assets/feature-4.svg", "95% water recycling per wash cycle via integrated ETP"), description: "95% water recycling per wash cycle via integrated ETP" },
    { icon: img("/vehicle-assets/feature-5.svg", "IoT-enabled wash data flowing into the ESG dashboard"), description: "IoT-enabled wash data flowing into the ESG dashboard" },
    { icon: img("/vehicle-assets/feature-6.svg", "Zero capex model available through Pay-per-Wash and WaaS"), description: "Zero capex model available through Pay-per-Wash and WaaS" },
  ],
  washTypesSectionTitle: "Wash Types Available",
  washTypes: [
    { title: "Express Tunnel Wash", description: "High-speed automated wash ideal for petrol stations, mall carparks, and fleet depots." },
    { title: "Manual Wash", description: "Hand-crafted wash by trained technicians for premium and high-value vehicles." },
    { title: "Robot AI Wash", description: "AI-powered robotic wash system coming soon to the UAE." },
    { title: "2-Wheeler Automated Wash", description: "Patented automated motorcycle wash system with 98% water recovery." },
  ],
  businessModelsSectionTitle: "Business Models",
  businessModels: [
    { icon: img("/vehicle-assets/business-1.svg", "CapEx purchase"), title: "CapEx purchase", description: "Full system ownership" },
    { icon: img("/vehicle-assets/business-2.svg", "Wash-as-a-Service (WaaS)"), title: "Wash-as-a-Service (WaaS)", description: "Revenue-share or subscription model with zero upfront capex" },
    { icon: img("/vehicle-assets/business-3.svg", "Annual Maintenance Contracts (AMCs)"), title: "Annual Maintenance Contracts (AMCs)", description: "Full system upkeep and consumables" },
  ],
  regionalSectionTitle: "Regional Presence",
  regionalCards: [
    {
      icon: img("/vehicle-assets/india.svg", "India"),
      region: "India",
      site: "blueverseindia.com",
      copy: "Automated 2-wheeler and 4-wheeler wash solutions for OEMs, dealerships, fuel stations, and independent wash centres across India.",
      cta: { label: "Visit BlueVerse India", href: "https://blueverseindia.com/" },
    },
    {
      icon: img("/vehicle-assets/uae.svg", "UAE"),
      region: "UAE",
      site: "blueverse.ae",
      copy: "Eco-friendly, high-performance vehicle washing services and solutions tailored for the Gulf market and regional partners.",
      cta: { label: "Visit BlueVerse UAE", href: "https://blueverse.ae/" },
    },
  ],
};

const esgPlatformPage: EsgPlatformPageData = {
  seo: {
    title: "ESG Platform | BlueVerse",
    description:
      "BlueVerse ESG Intelligence platform for water and carbon visibility, multi-site reporting, and compliance-ready ESG metrics.",
  },
  hero: {
    subtitle: "ESG Intelligence Platform",
    title: "Technology-led Sustainability for a Resource-Conscious World",
    description:
      "The BlueVerse ESG Intelligence platform gives facility managers, sustainability officers, and corporate boards real-time visibility into water and carbon metrics formatted for regulatory compliance and global ESG frameworks.",
    heroImage: img("/esg-assets/hero.png", "ESG Intelligence Platform"),
  },
  cards: [
    {
      title: "What It Tracks",
      icon: img("/esg-assets/card-1.png", "What It Tracks"),
      items: [
        "Water saved (litres/day, month, year)",
        "Water reused (% recovery rate per facility)",
        "Carbon avoided (kg CO2e equivalent)",
        "Energy consumption per KLD treated",
        "Chemical reduction vs conventional baseline",
        "Scope 1, 2, 3 water metrics (GHG Protocol aligned)",
      ],
    },
    {
      title: "Platform Capabilities",
      icon: img("/esg-assets/card-2.png", "Platform Capabilities"),
      items: [
        "Real-time dashboard accessible by web and mobile",
        "Multi-site aggregation view across all facilities",
        "Export-ready reports for ESG disclosures",
        "Alert system for discharge limit breaches",
        "IoT integration with INDRA Spectrum and BlueVerse washing equipment",
      ],
    },
    {
      title: "Pricing Model",
      icon: img("/esg-assets/card-3.png", "Pricing Model"),
      items: [
        "SaaS subscription (annual or multi-year)",
        "Bundled into system deployments at no additional charge",
      ],
    },
  ],
};

export function getGlobalSettings(): GlobalSettingsData {
  return globalSettings;
}

export function getNavbar(): NavbarData {
  return navbar;
}

export function getFooter(): FooterData {
  return footer;
}

export function getHomePage(): HomePageData {
  return homePage;
}

export function getContactForm(): ContactFormData {
  return contactForm;
}

export function getWasteWaterTreatmentPage(): WasteWaterTreatmentPageData {
  return wasteWaterTreatmentPage;
}

export function getVehicleWashingPage(): VehicleWashingPageData {
  return vehicleWashingPage;
}

export function getEsgPlatformPage(): EsgPlatformPageData {
  return esgPlatformPage;
}
