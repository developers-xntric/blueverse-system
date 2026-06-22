export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "#about" },
  { label: "Water Treatment", href: "/waste-water-treatment-systems" },
  { label: "Vehicle Washing", href: "/vehicle-washing" },
  { label: "ESG Platform", href: "/esg-platform" },
  { label: "Solutions", href: "#about" },
  { label: "Contact Us", href: "#contact" },
] as const;

export const heroContent = {
  title: "Delivering Scalable, Innovative & Reliable Services",
  description:
    "Helping businesses reduce water consumption, achieve regulatory compliance, and report ESG metrics - all from one unified platform.",
  primaryCta: { label: "Talk To Our Team", href: "#contact" },
  secondaryCta: { label: "Explore Solutions", href: "#solutions" },
} as const;

export const heroMarqueeLogos = [
  {
    name: "TVS",
    src: "/figma-assets/marquee-tvs.png",
    width: 112,
    height: 112,
  },
  {
    name: "Honda",
    src: "/figma-assets/marquee-honda.png",
    width: 99,
    height: 99,
  },
  {
    name: "Royal Enfield",
    src: "/figma-assets/marquee-royal-enfield.png",
    width: 100,
    height: 99,
  },
  {
    name: "IHCL",
    src: "/figma-assets/marquee-ihcl-1.png",
    width: 112,
    height: 112,
  },
  { name: "MG", src: "/figma-assets/marquee-mg.png", width: 87, height: 87 },
  {
    name: "Tata",
    src: "/figma-assets/marquee-tata1.png",
    width: 96,
    height: 95,
  },
] as const;

export const heroPartners = [
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
] as const;

export const stats = [
  { value: "05+", label: "Years of Experience" },
  { value: "10K+", label: "CO2 Emissions Reduced" },
  { value: "5 Billion +", label: "Litres of Water Saved" },
  { value: "50 MLD+", label: "Wastewater Order Pipeline" },
] as const;

export const challenges = [
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
] as const;

export const solutions = [
  {
    title: "Water Treatment Systems",
    description:
      "Smart water treatment systems designed to purify, recycle, and optimize water for sustainable operations.",
    image: "/figma-assets/solutions-2.png",
    href: "/waste-water-treatment-systems",
  },
  {
    title: "Automated Vehicle Washing",
    description:
      "Automated vehicle washing solutions that deliver consistent cleaning performance with efficient water use.",
    image: "/figma-assets/solutions-1.png",
    href: "/vehicle-washing",
  },
  {
    title: "ESG Intelligence Platform",
    description:
      "AI-Driven Water Intelligence Platform for water assets, carbon credit trading, water exchange, energy optimization, and waste data management.",
    image: "/figma-assets/solutions-3.png",
    href: "/esg-platform",
  },
] as const;

export const industries = [
  {
    title: "Hotels & Hospitality",
    image: "/figma-assets/industries-7.png",
    points: [
      "Wastewater recycling for laundry, kitchens, landscaping",
      "ESG reporting for corporate sustainability targets",
    ],
    description:
      "BlueVerse CleanTech helps hotels, resorts, and hospitality groups make water efficiency a part of everyday operations without compromising guest comfort, hygiene standards, or service quality. From laundry, landscaping, kitchens, and housekeeping to wastewater treatment and reuse, our solutions help hospitality brands reduce water waste, control rising utility costs, and improve ESG performance. By integrating smart water management systems, hotels can lower their environmental footprint while creating measurable long-term savings and more sustainable guest experiences.",
    details: [
      "Closed-loop water reuse for laundries, kitchens, landscaping, and utility zones.",
      "Sustainability dashboards aligned to group-wide environmental commitments.",
      "Operational visibility across sites to benchmark performance and compliance.",
    ],
  },
  {
    title: "Vehicle Wash",
    image: "/figma-assets/industries-2.png",
    points: [
      "Automated wash tunnels with water recycling",
      "WaaS (Wash-as-a-Service) subscription model",
    ],
    description:
      "Vehicle wash operations require large volumes of water every day, making efficient treatment and reuse essential for long-term profitability and sustainability. BlueVerse CleanTech supports car wash operators with reliable water recycling, filtration, and treatment solutions designed to reduce freshwater dependency. Our systems help maintain consistent wash quality while lowering water consumption, reducing discharge, and improving operational efficiency. Whether for standalone wash centers, fleet wash facilities, or high-volume vehicle wash businesses, we help operators build cleaner, smarter, and more cost-effective water systems.",
    details: [
      "Automated tunnels and rollover systems engineered for consistent throughput.",
      "Water reuse systems that materially cut freshwater use per wash cycle.",
      "Subscription-ready operating support for multi-site wash networks.",
    ],
  },
  {
    title: "Industrial Facilities",
    image: "/figma-assets/industry-facilities.png",
    points: [
      "Effluent treatment for manufacturing, logistics",
      "JAFZA, KIZAD, EGA zone compliance",
    ],
    description:
      "Industrial facilities face growing pressure to manage water more responsibly while maintaining productivity, compliance, and operational continuity. BlueVerse CleanTech provides advanced water and wastewater treatment solutions designed for demanding industrial environments. We help manufacturing plants, processing units, and industrial sites recover, reuse, and manage water more efficiently. Our solutions support reduced water intake, lower wastewater discharge, improved regulatory alignment, and better long-term resource planning. With the right system in place, industrial operations can improve performance while reducing environmental impact.",
    details: [
      "Treatment systems sized for manufacturing, logistics, and process-intensive operations.",
      "Regulatory alignment for industrial parks and zone-specific compliance requirements.",
      "Integrated reporting for water performance and ESG traceability.",
    ],
  },
  {
    title: "Malls & Commercial Real Estate",
    image: "/figma-assets/industry-tab-malls.png",
    points: [
      "Water recycling for facility management",
      "ESG dashboards for LEED/Estidama compliance",
    ],
    description:
      "Malls and commercial real estate developments rely on water for cooling, cleaning, landscaping, sanitation, and daily facility operations. BlueVerse CleanTech helps commercial properties reduce water waste, optimize usage, and improve sustainability performance across high-traffic environments. Our solutions support facility managers, developers, and asset owners in lowering operating costs while improving water efficiency and ESG value. By integrating treatment, reuse, and performance monitoring, commercial properties can become more resource-conscious, cost-efficient, and future-ready.",
    details: [
      "Water reuse infrastructure for cooling, cleaning, and site maintenance.",
      "Portfolio-level ESG reporting support for LEED, Estidama, and internal targets.",
      "Smarter monitoring for multi-building facility management teams.",
    ],
  },
  {
    title: "Government & Municipalities",
    image: "/figma-assets/industry-tab-government.png",
    points: [
      "Aligned with UAE Water Security Strategy 2036",
      "Saudi Water Vision 2030 Policy Support",
    ],
    description:
      "BlueVerse CleanTech partners with government entities and municipalities to support sustainable water management across public infrastructure, communities, and civic facilities. As cities face rising demand, water scarcity, and environmental pressure, smarter water systems are essential for long-term resilience. Our solutions help public sector teams improve wastewater treatment, enable reuse, reduce water loss, and create more efficient municipal operations. From community-scale systems to infrastructure-focused projects, we support cleaner, more sustainable, and future-ready urban development.",
    details: [
      "Infrastructure aligned with water security and circular-resource strategies.",
      "Decision support for long-horizon treatment, reuse, and utility planning.",
      "Transparent metrics for public accountability and policy tracking.",
    ],
  },
  {
    title: "Developers & Master Planners",
    image: "/figma-assets/industries-4.png",
    points: [
      "Built-in water reuse infrastructure",
      "Aldar, Emaar, Nakheel, Deyaar partnerships",
    ],
    description:
      "Sustainable communities begin with smart planning. BlueVerse CleanTech works with developers, consultants, and master planners to integrate water efficiency, wastewater reuse, and circular resource strategies into new developments from the earliest stages.Our solutions help residential communities, mixed-use projects, and large-scale master plans reduce environmental impact, improve operational resilience, and align with sustainability goals. By designing water-smart infrastructure from the start, developers can create future-ready destinations that are efficient, responsible, and built for long-term value.",
    details: [
      "Integrated water reuse planning for communities, districts, and large developments.",
      "Reduced lifecycle cost through early-stage infrastructure coordination.",
      "Better sustainability positioning for investors, residents, and regulators.",
    ],
  },
] as const;

export const aboutTabs = ["Our Values", "Our Mission", "Our Journey"] as const;

export const aboutPanels = {
  "Our Values": {
    image: "/figma-assets/about-3.png",
    overlayTitle: "Building Tomorrow's Infrastructure, Today",
    overlayDescription:
      "Innovative water solutions for industries and communities.",
    cards: [
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
    ],
  },
  "Our Mission": {
    image: "/figma-assets/about-tab2.png",
    overlayTitle: "Building Tomorrow's Infrastructure, Today",
    overlayDescription:
      "Innovative water solutions for industries and communities.",
    heading: "Our Mission",
    missionParagraphs: [
      "BlueVerse CleanTech exists to make water reuse the default, not the exception, for businesses. We believe industrial water waste is not inevitable. With the right technology, data intelligence, and circular water solutions, every litre can be recovered, treated, and reused.",
      "As industries face increasing pressure from water scarcity, rising utility costs, and evolving sustainability requirements, we provide integrated solutions that help organizations operate more efficiently while reducing their environmental impact. Our approach combines advanced water treatment technologies, digital monitoring platforms, and ESG-focused performance insights to create measurable, long-term value.",
      "We partner with businesses across industrial, commercial, and infrastructure sectors to transform wastewater from a liability into a valuable resource. Through intelligent treatment systems, real-time operational visibility, and performance-driven water management strategies, we help clients reduce freshwater dependency, optimize resource consumption, and strengthen regulatory compliance.",
      "By enabling circular water ecosystems, BlueVerse is building a future where sustainability and operational excellence work together. Our mission is to empower organizations to conserve resources, lower emissions, improve efficiency, and create a lasting positive impact on communities, industries, and the environment.",
    ],
  },
  "Our Journey": {
    image: "/figma-assets/about-tab3.png",
    overlayTitle: "Building Tomorrow's Infrastructure, Today",
    overlayDescription:
      "Innovative water solutions for industries and communities.",
    timeline: [
      {
        year: "2021",
        description:
          "Developed and patented automated 2-wheeler vehicle washing machine",
      },
      {
        year: "2022",
        description:
          "Built proprietary ESG Tech Stack for water metrics in vehicle washing",
      },
      {
        year: "2024",
        description:
          "Expanded to 15 operational sites across India; entered the UAE market",
      },
      {
        year: "2025",
        description: "Launched UAE B2C car care centre at Al Quoz, Dubai",
      },
      {
        year: "2026",
        description:
          "Incubated in WTIIRA Saudi Water Authority innovation programme",
      },
      {
        year: "2026",
        description:
          "Selected for WaterTech Accelerator QSTP × TotalEnergies, Qatar",
      },
    ],
  },
} as const;

export const partners = [
  {
    name: "MCWW",
    logo: "/figma-assets/washworks.png",
    description:
      "Manufactures a comprehensive line of automatic car wash systems, including tunnels, arches, and high-performance drying equipment. A trusted one-stop resource for car wash investors and operators seeking reliable, cutting-edge technology, the company focuses on delivering durable, efficient, and easy-to-operate solutions designed to maximize wash quality.",
  },
  {
    name: "INDRA Water",
    logo: "/figma-assets/indra.png",
    description:
      "BlueVerse is the exclusive GCC system integrator for INDRA Water's ElectroX electrochemical treatment platform, a technology certified as 10 years ahead of conventional ETP/STP systems. INDRA's modular units require zero primary chemicals, have a fraction of the footprint of legacy systems, and are fully remote-monitored.",
  },
  {
    name: "Stinger Chemicals",
    logo: "/figma-assets/stinger.png",
    description:
      "Stinger Chemicals delivers high-quality industrial and automotive chemical solutions, trusted for performance and reliability. Committed to innovation, we provide products that meet the highest standards for every application, helping businesses achieve superior cleaning, protection, and maintenance results.",
  },
  {
    name: "Xylem",
    logo: "/figma-assets/xylem.png",
    description:
      "BlueVerse cleantech has partnered with Xylem, a global leader in water technology and solutions, to strengthen our water infrastructure capabilities. Xylem's expertise spans water analysis & monitoring, disinfection systems, filtration, smart metering, and digital water management complementing our EPC and ESG commitments with world-class technology and equipment.",
  },
] as const;

export const deploymentHighlights = [
  "15+ operational Vehicle Washing centres across India and UAE",
  "8 MLD+ wastewater treatment plants deployed or undergoing deployment",
  "50 MLD+ order pipeline for wastewater treatment capacity",
  "UAE's first and most sustainable car care centre - Al -uoz -Duba",
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
      "Floor-8, Plot-208, Regent Chambers, Jamnalal Bajaj Marg, Nariman Point, Mumbai, Maharashtra - 400021",
  },
] as const;

export const footerServiceLinks = [
  "Automated Vehicle Washing",
  "Water Treatment Systems",
  "ESG Intelligence Platform",
  "EPC Services",
] as const;
