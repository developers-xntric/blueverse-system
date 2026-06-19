export const navLinks = [
  { label: "Home", href: "#top" },
  { label: "About Us", href: "#about" },
  { label: "Water Treatment", href: "#solutions" },
  { label: "Vehicle Washing", href: "#solutions" },
  { label: "ESG Platform", href: "#solutions" },
  { label: "EPC Solutions", href: "#about" },
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
  { name: "TVS", src: "/figma-assets/marquee-tvs.png", width: 112, height: 112 },
  { name: "Honda", src: "/figma-assets/marquee-honda.png", width: 99, height: 99 },
  {
    name: "Royal Enfield",
    src: "/figma-assets/marquee-royal-enfield.png",
    width: 100,
    height: 99,
  },
  { name: "IHCL", src: "/figma-assets/marquee-ihcl-1.png", width: 112, height: 112 },
  { name: "MG", src: "/figma-assets/marquee-mg.png", width: 87, height: 87 },
  { name: "Tata", src: "/figma-assets/marquee-tata1.png", width: 96, height: 95 },
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
  },
  {
    title: "Automated Vehicle Washing",
    description:
      "Automated vehicle washing solutions that deliver consistent cleaning performance with efficient water use.",
    image: "/figma-assets/solutions-1.png",
  },
  {
    title: "ESG Intelligence Platform",
    description:
      "AI-Driven Water Intelligence Platform for water assets, carbon credit trading, water exchange, energy optimization, and waste data management.",
    image: "/figma-assets/solutions-3.png",
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
    description:
      "BlueVerse helps hotel groups and hospitality operators reduce fresh-water dependence while turning recycling and ESG reporting into a guest-facing sustainability advantage.",
    details: [
      "Closed-loop water reuse for laundries, kitchens, landscaping, and utility zones.",
      "Sustainability dashboards aligned to group-wide environmental commitments.",
      "Operational visibility across sites to benchmark performance and compliance.",
    ],
  },
  {
    title: "Vehicle Wash",
    image: "/figma-assets/industries-5.png",
    points: [
      "Automated wash tunnels with water recycling",
      "WaaS (Wash-as-a-Service) subscription model",
    ],
    description:
      "For modern wash operators, BlueVerse combines smart washing hardware, water recycling, and performance reporting into one scalable operating model.",
    details: [
      "Automated tunnels and rollover systems engineered for consistent throughput.",
      "Water reuse systems that materially cut freshwater use per wash cycle.",
      "Subscription-ready operating support for multi-site wash networks.",
    ],
  },
  {
    title: "Industrial Facilities",
    image: "/figma-assets/industries-6.png",
    points: [
      "Effluent treatment for manufacturing, logistics",
      "JAFZA, KIZAD, EGA zone compliance",
    ],
    description:
      "Industrial sites use BlueVerse to meet increasingly strict effluent, reuse, and disclosure standards without stitching together multiple vendors.",
    details: [
      "Treatment systems sized for manufacturing, logistics, and process-intensive operations.",
      "Regulatory alignment for industrial parks and zone-specific compliance requirements.",
      "Integrated reporting for water performance and ESG traceability.",
    ],
  },
  {
    title: "Malls & Commercial Real Estate",
    image: "/figma-assets/industries-1.png",
    points: [
      "Water recycling for facility management",
      "ESG dashboards for LEED/Estidama compliance",
    ],
    description:
      "Commercial asset owners can reduce utility intensity across large mixed-use footprints while giving operations teams and investors better sustainability visibility.",
    details: [
      "Water reuse infrastructure for cooling, cleaning, and site maintenance.",
      "Portfolio-level ESG reporting support for LEED, Estidama, and internal targets.",
      "Smarter monitoring for multi-building facility management teams.",
    ],
  },
  {
    title: "Government & Municipalities",
    image: "/figma-assets/industries-2.png",
    points: [
      "Aligned with UAE Water Security Strategy 2036",
      "Saudi Water Vision 2030 Policy Support",
    ],
    description:
      "BlueVerse supports public-sector entities with resilient water reuse, treatment modernization, and reporting systems that fit long-term national policy goals.",
    details: [
      "Infrastructure aligned with water security and circular-resource strategies.",
      "Decision support for long-horizon treatment, reuse, and utility planning.",
      "Transparent metrics for public accountability and policy tracking.",
    ],
  },
  {
    title: "Developers & Master Planners",
    image: "/figma-assets/industries-3.png",
    points: [
      "Built-in water reuse infrastructure",
      "Aldar, Emaar, Nakheel, Deyaar partnerships",
    ],
    description:
      "Master-planned communities and major developers can embed water reuse and sustainability systems from the start rather than retrofitting them later.",
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
    image: "/figma-assets/about-2.png",
    overlayTitle: "Engineering Water Systems That Scale",
    overlayDescription:
      "We simplify treatment, reuse, and reporting so customers can operate with less waste and more control.",
    cards: [
      {
        title: "Integrated Delivery",
        description:
          "We combine infrastructure, automation, and reporting into one operating model.",
      },
      {
        title: "Practical Decarbonization",
        description:
          "Every deployment is designed to lower water, energy, and compliance overhead together.",
      },
      {
        title: "Regional Relevance",
        description:
          "Our solutions are built for the water-stressed conditions and policy realities of GCC and India.",
      },
      {
        title: "Execution Focus",
        description:
          "From concept to rollout, we prioritize dependable deployment over presentation-only strategy.",
      },
    ],
  },
  "Our Journey": {
    image: "/figma-assets/about-1.png",
    overlayTitle: "From Partnerships To Platform",
    overlayDescription:
      "BlueVerse has grown by connecting proven technologies, regional demand, and deployment discipline.",
    cards: [
      {
        title: "Early Validation",
        description:
          "Incubation and accelerator backing helped validate the model across priority markets.",
      },
      {
        title: "Operational Deployments",
        description:
          "We expanded from concepts into working systems across vehicle wash and wastewater projects.",
      },
      {
        title: "Technology Expansion",
        description:
          "Partnerships with specialist providers widened our treatment and infrastructure capability.",
      },
      {
        title: "Platform Direction",
        description:
          "Today the journey continues toward a more unified operating layer for water and ESG intelligence.",
      },
    ],
  },
} as const;

export const partners = [
  {
    name: "MCWW",
    description:
      "Manufactures a comprehensive line of automatic car wash systems, including tunnels, arches, and high-performance drying equipment. A trusted one-stop resource for car wash investors and operators seeking reliable, cutting-edge technology, the company focuses on delivering durable, efficient, and easy-to-operate solutions designed to maximize wash quality.",
  },
  {
    name: "INDRA Water",
    description:
      "BlueVerse is the exclusive GCC system integrator for INDRA Water's ElectroX electrochemical treatment platform, a technology certified as 10 years ahead of conventional ETP/STP systems. INDRA's modular units require zero primary chemicals, have a fraction of the footprint of legacy systems, and are fully remote-monitored.",
  },
  {
    name: "Stinger Chemicals",
    description:
      "Stinger Chemicals delivers high-quality industrial and automotive chemical solutions, trusted for performance and reliability. Committed to innovation, we provide products that meet the highest standards for every application, helping businesses achieve superior cleaning, protection, and maintenance results.",
  },
  {
    name: "Xylem",
    description:
      "BlueVerse cleantech has partnered with Xylem, a global leader in water technology and solutions, to strengthen our water infrastructure capabilities. Xylem's expertise spans water analysis & monitoring, disinfection systems, filtration, smart metering, and digital water management complementing our EPC and ESG commitments with world-class technology and equipment.",
  },
] as const;

export const deploymentHighlights = [
  "15+ operational Vehicle Washing centres across India and UAE",
  "8 MLD+ wastewater treatment plants deployed or undergoing deployment",
  "50 MLD+ order pipeline for wastewater treatment capacity",
  "UAE's first and most sustainable car care centre - Al Quoz, Dubai",
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
