import { readFileSync, existsSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const BASE = "https://beneficial-frog-9092414fe7.strapiapp.com";

async function login() {
  const res = await fetch(`${BASE}/api/admin/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: "info@xntric.ca", password: "@Info@123" }),
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Login failed (${res.status}): ${text}`);
  }
  const json = await res.json();
  return json.data.token;
}

async function api(method, path, body, token) {
  const headers = { "Content-Type": "application/json" };
  if (token) headers["Authorization"] = `Bearer ${token}`;
  const opts = { method, headers };
  if (body) opts.body = JSON.stringify(body);
  const res = await fetch(`${BASE}${path}`, opts);
  const text = await res.text();
  let data;
  try { data = JSON.parse(text); } catch { data = text; }
  if (!res.ok) {
    console.error(`  FAIL ${method} ${path}: ${res.status} - ${typeof data === 'object' ? JSON.stringify(data).slice(0,300) : data}`);
    return null;
  }
  return data;
}

async function createComponents(token) {
  const components = [
    {
      component: {
        category: "shared",
        displayName: "Hero",
        icon: "star",
        attributes: {
          title: { type: "string", required: true },
          description: { type: "text", required: true },
          primaryCtaLabel: { type: "string" },
          primaryCtaHref: { type: "string" },
          secondaryCtaLabel: { type: "string" },
          secondaryCtaHref: { type: "string" },
        },
      },
    },
    {
      component: {
        category: "shared",
        displayName: "SEO",
        icon: "search",
        attributes: {
          metaTitle: { type: "string" },
          metaDescription: { type: "text" },
          ogTitle: { type: "string" },
          ogDescription: { type: "text" },
          twitterCard: { type: "string" },
          canonicalURL: { type: "string" },
          structuredData: { type: "json" },
        },
      },
    },
    {
      component: {
        category: "shared",
        displayName: "Nav Link",
        icon: "link",
        attributes: {
          label: { type: "string", required: true },
          href: { type: "string", required: true },
        },
      },
    },
    {
      component: {
        category: "shared",
        displayName: "Office",
        icon: "pin",
        attributes: {
          title: { type: "string", required: true },
          address: { type: "text", required: true },
        },
      },
    },
  ];

  for (const c of components) {
    console.log(`  Creating component: ${c.component.displayName}...`);
    const res = await api("POST", "/api/content-type-builder/components", c, token);
    if (res) console.log(`    OK`);
  }
}

async function createContentTypes(token) {
  const types = [
    {
      contentType: {
        singularName: "global-setting",
        pluralName: "global-settings",
        displayName: "Global Setting",
        kind: "singleType",
        attributes: {
          title: { type: "string", required: true, default: "BlueVerse | Water Infrastructure Landing Page" },
          description: { type: "text", required: true },
          ogTitle: { type: "string" },
          ogDescription: { type: "text" },
          twitterCard: { type: "string" },
        },
      },
    },
    {
      contentType: {
        singularName: "navbar",
        pluralName: "navbars",
        displayName: "Navbar",
        kind: "singleType",
        attributes: {
          logo: { type: "string", default: "/figma-assets/hero-logo.png" },
          logoAlt: { type: "string", default: "BlueVerse" },
          navLinks: { type: "json", required: true },
          ctaLabel: { type: "string", default: "Talk To Our Team" },
        },
      },
    },
    {
      contentType: {
        singularName: "footer",
        pluralName: "footers",
        displayName: "Footer",
        kind: "singleType",
        attributes: {
          logo: { type: "string", default: "/figma-assets/partner-logo-6.png" },
          navLinks: { type: "json" },
          serviceLinks: { type: "json" },
          copyright: { type: "string", default: "Copyright 2026 BlueVerse CleanTech Pvt. Ltd. All rights reserved." },
          socialLinks: { type: "json" },
        },
      },
    },
    {
      contentType: {
        singularName: "home-page",
        pluralName: "home-pages",
        displayName: "Home Page",
        kind: "singleType",
        attributes: {
          hero: { type: "json" },
          marqueeLogos: { type: "json" },
          heroPartners: { type: "json" },
          stats: { type: "json" },
          challenges: { type: "json" },
          solutions: { type: "json" },
          industries: { type: "json" },
          aboutTabs: { type: "json" },
          partners: { type: "json" },
          deploymentHighlights: { type: "json" },
          offices: { type: "json" },
          footerServiceLinks: { type: "json" },
          navLinks: { type: "json" },
          seo: { type: "json" },
        },
      },
    },
    {
      contentType: {
        singularName: "waste-water-treatment-page",
        pluralName: "waste-water-treatment-pages",
        displayName: "Waste Water Treatment Page",
        kind: "singleType",
        attributes: {
          hero: { type: "json" },
          stats: { type: "json" },
          epcFocusAreas: { type: "json" },
          electroxProcesses: { type: "json" },
          scaleCards: { type: "json" },
          ecosystemProducts: { type: "json" },
          industries: { type: "json" },
          aboutValues: { type: "json" },
          partnerships: { type: "json" },
          deploymentHighlights: { type: "json" },
          offices: { type: "json" },
        },
      },
    },
    {
      contentType: {
        singularName: "vehicle-washing-page",
        pluralName: "vehicle-washing-pages",
        displayName: "Vehicle Washing Page",
        kind: "singleType",
        attributes: {
          hero: { type: "json" },
          features: { type: "json" },
          washTypes: { type: "json" },
          businessModels: { type: "json" },
          regionalCards: { type: "json" },
        },
      },
    },
    {
      contentType: {
        singularName: "esg-platform-page",
        pluralName: "esg-platform-pages",
        displayName: "ESG Platform Page",
        kind: "singleType",
        attributes: {
          hero: { type: "json" },
          whatItTracks: { type: "json" },
          capabilities: { type: "json" },
          pricingModel: { type: "json" },
        },
      },
    },
    {
      contentType: {
        singularName: "contact-form",
        pluralName: "contact-forms",
        displayName: "Contact Form",
        kind: "singleType",
        attributes: {
          heading: { type: "string" },
          description: { type: "text" },
          offices: { type: "json" },
          submitLabel: { type: "string" },
          submittingLabel: { type: "string" },
          successMessage: { type: "string" },
          errorMessage: { type: "string" },
        },
      },
    },
    {
      contentType: {
        singularName: "wwtp-contact-form",
        pluralName: "wwtp-contact-forms",
        displayName: "WWTP Contact Form",
        kind: "singleType",
        attributes: {
          heading: { type: "string" },
          description: { type: "text" },
          offices: { type: "json" },
          submitLabel: { type: "string" },
        },
      },
    },
  ];

  for (const t of types) {
    const name = t.contentType.displayName;
    console.log(`  Creating content type: ${name}...`);
    const res = await api("POST", "/api/content-type-builder/content-types", t, token);
    if (res) console.log(`    OK`);
    else console.log(`    May already exist, trying to use existing`);
  }
}

async function populateContent(token) {
  const projectRoot = resolve(__dirname, "..");

  async function loadFallback(name) {
    const path = resolve(projectRoot, "src/cms/fallback-data", name);
    if (!existsSync(path)) return null;
    const content = readFileSync(path, "utf8");
    const transpiled = content
      .replace(/import\s+.*?from\s+["'].*?["'];\n?/gs, "")
      .replace(/export\s+const\s+fallback(\w+):\s*\w+\s*=\s*/g, "const fallback$1 = ")
      .replace(/export\s+{\s*[\s\S]*?};/g, "")
      .replace(/as\s+const/g, "")
      .trim();
    const wrapped = `
      ${transpiled}
      const all = { fallbackHomePage, fallbackNavbarContent, fallbackFooterContent, fallbackContactFormContent, fallbackWWTPContactFormContent, fallbackSiteMetadata, fallbackWWTPContent, fallbackVehicleWashingContent, fallbackESGContent };
      JSON.stringify(all);
    `;
    return null;
  }

  const content = {
    "global-setting": {
      title: "BlueVerse | Water Infrastructure Landing Page",
      description: "BlueVerse cleantech landing page for water treatment, automated vehicle washing, and ESG intelligence solutions.",
    },
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
      serviceLinks: [
        "Automated Vehicle Washing",
        "Water Treatment Systems",
        "ESG Intelligence Platform",
        "EPC Services",
      ],
      copyright: "Copyright 2026 BlueVerse CleanTech Pvt. Ltd. All rights reserved.",
      socialLinks: [
        { platform: "LinkedIn", href: "#contact" },
        { platform: "Twitter", href: "#contact" },
        { platform: "Instagram", href: "#contact" },
      ],
    },
    "home-page": {
      hero: {
        title: "Delivering Scalable, Innovative & Reliable Services",
        description: "Helping businesses reduce water consumption, achieve regulatory compliance, and report ESG metrics - all from one unified platform.",
        primaryCta: { label: "Talk To Our Team", href: "#contact" },
        secondaryCta: { label: "Explore Solutions", href: "#solutions" },
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
          icon: "WavesIcon",
        },
        {
          title: "Automated Vehicle Washing",
          description: "Automated vehicle washing solutions that deliver consistent cleaning performance with efficient water use.",
          image: "/figma-assets/solutions-1.png",
          href: "/vehicle-washing",
          icon: "CarIcon",
        },
        {
          title: "ESG Intelligence Platform",
          description: "AI-Driven Water Intelligence Platform for water assets, carbon credit trading, water exchange, energy optimization, and waste data management.",
          image: "/figma-assets/solutions-3.png",
          href: "/esg-platform",
          icon: "ChartIcon",
        },
      ],
      industries: [
        {
          title: "Hotels & Hospitality",
          image: "/figma-assets/industries-7.png",
          points: [
            "Wastewater recycling for laundry, kitchens, landscaping",
            "ESG reporting for corporate sustainability targets",
          ],
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
          points: [
            "Automated wash tunnels with water recycling",
            "WaaS (Wash-as-a-Service) subscription model",
          ],
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
          points: [
            "Effluent treatment for manufacturing, logistics",
            "JAFZA, KIZAD, EGA zone compliance",
          ],
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
          points: [
            "Water recycling for facility management",
            "ESG dashboards for LEED/Estidama compliance",
          ],
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
          points: [
            "Aligned with UAE Water Security Strategy 2036",
            "Saudi Water Vision 2030 Policy Support",
          ],
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
          points: [
            "Built-in water reuse infrastructure",
            "Aldar, Emaar, Nakheel, Deyaar partnerships",
          ],
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
              { year: "2026", description: "Selected for WaterTech Accelerator QSTP × TotalEnergies, Qatar" },
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
      footerServiceLinks: [
        "Automated Vehicle Washing",
        "Water Treatment Systems",
        "ESG Intelligence Platform",
        "EPC Services",
      ],
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
        subtitle: "From Lab to Large Scale",
        title: "Waste Water Treatment Systems",
        description: "BlueVerse integrates cutting-edge water treatment technologies with intelligent monitoring to deliver reliable, cost-effective, and sustainable water management infrastructure for businesses of all sizes.",
        heroImage: "/figma-assets/wwtp-hero.png",
      },
      stats: [
        { value: "8 MLD", label: "Treatment Capacity Deployed and Pipeline", icon: "Droplets" },
        { value: "50 MLD+", label: "Wastewater Order Pipeline", icon: "TrendingUp" },
        { value: "15+", label: "Operational Sites Across India and UAE", icon: "MapPin" },
      ],
      epcFocusAreas: [
        {
          title: "Waste Water Treatment",
          description: "BlueVerse's Water Treatment Solutions focus on creating efficient, reliable wastewater management systems that reduce environmental impact and lower operational costs.",
          points: [
            "End-to-end EPC for industrial and municipal wastewater treatment plants (WWTPs).",
            "Modular and containerised solutions for decentralized, quick-deployment scenarios.",
            "Effluent treatment for high-COD/TSS loads from manufacturing and vehicle washing.",
            "Advanced filtration, biological treatment, and disinfection technologies.",
            "Integrated sludge management and zero-liquid-discharge (ZLD) options.",
          ],
        },
        {
          title: "Decentralised Desalination",
          description: "Delivering modular, energy-efficient desalination systems that provide clean water for communities, industries, and commercial facilities.",
          points: [
            "Compact, containerized reverse osmosis (RO) and membrane-based systems.",
            "Scalable from 10 KLD to 1 MLD for off-grid and urban decentralized sites.",
            "Solar-ready configurations tailored for remote and water-scarce regions.",
            "Brackish water and seawater solutions for municipal, hospitality, and industrial use.",
          ],
        },
        {
          title: "ElectroX Product Ecosystem",
          description: "Advanced electrochemical treatment technology, deployed as a versatile, scalable solution for a variety of complex water treatment challenges.",
          points: [
            "Electrocoagulation and electro-oxidation for industrial effluent with high COD, colour, and heavy metals.",
            "No primary chemicals needed — reduced OPEX and lower hazardous sludge generation.",
            "Compact footprint, fully automated, IoT-enabled remote monitoring (SCADA-ready).",
            "Deployed as a standalone unit, or integrated with existing STP/ETP/ZLD infrastructure.",
          ],
        },
      ],
      electroxProcesses: [
        { title: "Electrocoagulation", description: "Removes contaminants from water using electrical charge to destabilize and aggregate pollutants for easy separation.", icon: "Zap" },
        { title: "Electro-Oxidation", description: "Destroys organic pollutants, pathogens, and emerging contaminants through powerful oxidation reactions.", icon: "Flame" },
        { title: "Electro-Flotation", description: "Separates suspended solids, oils, and greases using fine gas bubbles generated by electrolysis.", icon: "Bubble" },
        { title: "Electro-Dewatering", description: "Removes water from sludge using an electric field, reducing volume and disposal costs.", icon: "Droplets" },
      ],
      scaleCards: [
        { code: "I-10", title: "10 KLD", image: "/figma-assets/product-i10.png", footprint: "5m x 3m", stp: "Yes", etp: "Yes" },
        { code: "I-50", title: "50 KLD", image: "/figma-assets/product-i50.png", footprint: "8m x 4m", stp: "Yes", etp: "Yes" },
        { code: "I-100", title: "100 KLD", image: "/figma-assets/product-i100.png", footprint: "12m x 6m", stp: "Yes", etp: "Yes" },
        { code: "I-250", title: "250 KLD", image: "/figma-assets/product-i250.png", footprint: "20m x 10m", stp: "Yes", etp: "Yes" },
        { code: "I-500", title: "500 KLD", image: "/figma-assets/product-i500.png", footprint: "30m x 15m", stp: "No", etp: "Yes" },
        { code: "I-1000", title: "1 MLD", image: "/figma-assets/product-i1000.png", footprint: "40m x 20m", stp: "No", etp: "Yes" },
      ],
      ecosystemProducts: [
        { title: "Monitor", description: "Real-time dashboard with IoT sensor integration for water quality, flow, and energy use across all connected systems.", icon: "Monitor" },
        { title: "Optimize", description: "AI-driven suggestions for chemical dosing, aeration schedules, and energy consumption based on historical and live data.", icon: "Zap" },
        { title: "Report", description: "Automated compliance reports aligned to local regulations (KSA, UAE, India) and ESG frameworks.", icon: "FileText" },
        { title: "Alert", description: "Instant push notifications via app/email/SMS for anomalies, parameter breaches, or equipment faults.", icon: "Bell" },
      ],
      industries: [
        { title: "Hotels & Hospitality", image: "/figma-assets/industries-7.png", points: ["Wastewater recycling for laundry, kitchens, landscaping", "ESG reporting for corporate sustainability targets"] },
        { title: "Vehicle Wash", image: "/figma-assets/industries-2.png", points: ["Automated wash tunnels with water recycling", "WaaS (Wash-as-a-Service) subscription model"] },
        { title: "Industrial Facilities", image: "/figma-assets/industry-facilities.png", points: ["Effluent treatment for manufacturing, logistics", "JAFZA, KIZAD, EGA zone compliance"] },
        { title: "Malls & Commercial Real Estate", image: "/figma-assets/industry-tab-malls.png", points: ["Water recycling for facility management", "ESG dashboards for LEED/Estidama compliance"] },
        { title: "Government & Municipalities", image: "/figma-assets/industry-tab-government.png", points: ["Aligned with UAE Water Security Strategy 2036", "Saudi Water Vision 2030 Policy Support"] },
        { title: "Developers & Master Planners", image: "/figma-assets/industries-4.png", points: ["Built-in water reuse infrastructure", "Aldar, Emaar, Nakheel, Deyaar partnerships"] },
      ],
      aboutValues: [
        { title: "Innovation", description: "Proprietary technology and bespoke solutions over off-the-shelf defaults." },
        { title: "Sustainability", description: "Every solution is designed with environmental responsibility in mind." },
        { title: "Reliability", description: "Long-term partnerships built on consistent delivery and trust." },
        { title: "People-First", description: "Continuous training and development for our team and our clients." },
      ],
      partnerships: [
        {
          name: "INDRA Water",
          logo: "/figma-assets/indra.png",
          description: "BlueVerse is the exclusive GCC system integrator for INDRA Water's ElectroX electrochemical treatment platform, a technology certified as 10 years ahead of conventional ETP/STP systems. INDRA's modular units require zero primary chemicals, have a fraction of the footprint of legacy systems, and are fully remote-monitored.",
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
    },
    "vehicle-washing-page": {
      hero: {
        subtitle: "Reliable. Efficient. Sustainable.",
        title: "Automated Vehicle Washing Systems",
        description: "High-performance automated washing solutions for petrol stations, malls, fleet depots, dealerships, and government facilities.",
        heroImage: "/figma-assets/vehicle-hero.png",
      },
      features: [
        { icon: "Recycle", description: "100% Water Recycling Technology" },
        { icon: "Clock", description: "Rapid Wash Cycles (Under 5 Minutes)" },
        { icon: "Smartphone", description: "IoT-Enabled Smart Monitoring" },
        { icon: "Leaf", description: "Eco-Friendly Bio-Enzyme Cleaning" },
        { icon: "CreditCard", description: "Flexible WaaS (Wash-as-a-Service) Plans" },
        { icon: "Shield", description: "Consistent, Scratch-Free Shine" },
      ],
      washTypes: [
        { title: "2-Wheeler", description: "Automated bike wash systems handling delivery fleets, parking lots, and high-volume two-wheeler service points." },
        { title: "4-Wheeler", description: "Rollover and touchless configurations designed for cars and SUVs in malls, petrol stations, and dedicated wash centres." },
        { title: "Bus & Truck", description: "Heavy-duty gantry systems for depot-level cleaning of buses, trucks, and commercial fleets." },
      ],
      businessModels: [
        { icon: "ShoppingCart", title: "Outright Purchase", description: "Full ownership of the washing and water treatment system with complete operational control." },
        { icon: "RefreshCw", title: "Wash-as-a-Service", description: "Pay-per-wash subscription covering equipment, maintenance, water treatment, and software." },
        { icon: "Handshake", title: "Revenue Share", description: "Zero upfront investment. BlueVerse installs and operates; you share wash revenue." },
      ],
      regionalCards: [
        { icon: "MapPin", region: "Dubai", site: "Al Quoz", copy: "UAE's first sustainable car care centre", cta: "Book Now", href: "#" },
        { icon: "MapPin", region: "India", site: "Mumbai (Coming Soon)", copy: "Flagship centre in Nariman Point", cta: "Get Notified", href: "#" },
      ],
    },
    "esg-platform-page": {
      hero: {
        subtitle: "One Dashboard. Complete Water Intelligence.",
        title: "ESG Intelligence Platform",
        description: "AI-driven platform that unifies water usage, energy consumption, carbon footprint, and operational metrics into a single, compliance-ready dashboard.",
        heroImage: "/figma-assets/esg-hero.png",
      },
      whatItTracks: [
        "Water Consumption & Quality Metrics",
        "Energy Usage & Carbon Footprint",
        "Waste Generation & Recycling Rates",
        "Chemical Usage & OPEX Tracking",
        "Real-time Sensor & IoT Data Integration",
        "Multi-site Benchmarking & Trends",
      ],
      capabilities: [
        "Real-time monitoring of water quality, flow, energy, and chemical dosing",
        "Automated compliance reports for ESG frameworks (GRI, SASB, ISSB, BRSR)",
        "Carbon credit quantification and trading dashboard",
        "Role-based multi-user access with audit trails",
        "Integration with existing SCADA, ERP, and billing systems",
        "IoT sensor management and anomaly detection with AI alerts",
      ],
      pricingModel: [
        "Per-site subscription (Monthly / Annual)",
        "Multi-site enterprise licensing",
        "Custom deployment for government and infrastructure projects",
      ],
    },
    "contact-form": {
      heading: "Let's Build Something Together",
      description: "Whether you have a project in mind, a question about our services, or want to explore a partnership — our team is ready to help.",
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
      description: "Whether you have a project in mind, a question about our services, or want to explore a partnership — our team is ready to help.",
      offices: [
        { title: "UAE", address: "near Al Quoz - Al Qouz Ind.second - Al Quoz - Dubai - United Arab Emirates" },
        { title: "India", address: "Floor-8, Plot-208, Regent Chambers, Jamnalal Bajaj Marg, Nariman Point, Mumbai, Maharashtra - 400021" },
      ],
      submitLabel: "Talk To Our Team ↗",
    },
  };

  for (const [slug, data] of Object.entries(content)) {
    const uid = `api::${slug}.${slug}`;
    console.log(`  Populating: ${slug}...`);

    let res = await api("PUT", `/api/content-type-builder/content-types/${uid}`, null, token);
    const isNew = res !== null;

    const payload = { data };

    const entryRes = await api("PUT", `/api/${slug}`, payload, token);
    if (entryRes) {
      console.log(`    Content saved OK`);
    } else {
      console.log(`    Trying POST...`);
      const postRes = await api("POST", `/api/${slug}`, payload, token);
      if (postRes) console.log(`    Created OK`);
      else console.log(`    FAILED to save content`);
    }
  }
}

async function main() {
  console.log("=== Strapi CMS Setup ===\n");

  console.log("1. Logging in...");
  const token = await login();
  console.log(`   Logged in OK (token: ${token.slice(0, 20)}...)\n`);

  console.log("2. Creating components...");
  await createComponents(token);
  console.log();

  console.log("3. Creating content types...");
  await createContentTypes(token);
  console.log();

  console.log("4. Populating content...");
  await populateContent(token);
  console.log();

  console.log("=== Done! ===");
}

main().catch(err => {
  console.error("FATAL:", err);
  process.exit(1);
});
