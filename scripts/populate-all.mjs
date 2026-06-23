import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";

function loadEnvFile() {
  const envPath = resolve(process.cwd(), ".env.local");
  if (!existsSync(envPath)) return;
  for (const line of readFileSync(envPath, "utf8").split(/\r?\n/)) {
    if (!line || line.trim().startsWith("#")) continue;
    const separator = line.indexOf("=");
    if (separator === -1) continue;
    const key = line.slice(0, separator).trim();
    const value = line.slice(separator + 1).trim();
    if (key && !(key in process.env)) process.env[key] = value;
  }
}

loadEnvFile();

const base = process.env.STRAPI_URL || process.env.NEXT_PUBLIC_STRAPI_URL || "https://fortunate-respect-d9ba68c326.strapiapp.com";
const adminEmail = process.env.STRAPI_ADMIN_EMAIL || "info@xntric.ca";
const adminPassword = process.env.STRAPI_ADMIN_PASSWORD || "@Info@123";
const publicRoot = resolve(process.cwd(), "public");
const uploadCache = new Map();

function iconSvg(body) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#062B4F" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8">${body}</svg>`;
}

const svgIcons = {
  waves: iconSvg(`<path d="M3 8c1.4 1.2 2.6 1.2 4 0s2.6-1.2 4 0 2.6 1.2 4 0 2.6-1.2 4 0"/><path d="M3 12c1.4 1.2 2.6 1.2 4 0s2.6-1.2 4 0 2.6 1.2 4 0 2.6-1.2 4 0"/><path d="M3 16c1.4 1.2 2.6 1.2 4 0s2.6-1.2 4 0 2.6 1.2 4 0 2.6-1.2 4 0"/>`),
  car: iconSvg(`<path d="M5 16h14l-1.5-5a2 2 0 0 0-1.9-1.4H8.4A2 2 0 0 0 6.5 11L5 16Z"/><path d="M7 16v2"/><path d="M17 16v2"/><circle cx="8.5" cy="16.5" r="1" fill="#062B4F" stroke="none"/><circle cx="15.5" cy="16.5" r="1" fill="#062B4F" stroke="none"/>`),
  chart: iconSvg(`<path d="M4 19h16"/><path d="M6 15l3-3 3 2 6-7"/>`),
  lightbulb: iconSvg(`<path d="M9 18h6"/><path d="M10 21h4"/><path d="M8.6 14.4A6 6 0 1 1 15.4 14.4C14.5 15.1 14 16 14 17h-4c0-1-.5-1.9-1.4-2.6Z"/>`),
  leaf: iconSvg(`<path d="M6 13c0-5 4.5-8 12-8 0 7.5-3 12-8 12-2.2 0-4-1.8-4-4Z"/><path d="M8 15c2-3 4.7-5.7 8-8"/>`),
  shield: iconSvg(`<path d="M12 3c2 .9 4.1 1.4 6.3 1.5v6.1c0 4.1-2.5 7.8-6.3 9.4-3.8-1.6-6.3-5.3-6.3-9.4V4.5C7.9 4.4 10 3.9 12 3Z"/>`),
  users: iconSvg(`<path d="M16 19a4 4 0 0 0-8 0"/><circle cx="12" cy="10" r="3"/><path d="M20 18a3.5 3.5 0 0 0-3-3.5"/><path d="M7 14.5A3.5 3.5 0 0 0 4 18"/>`),
  waterScarcity: iconSvg(`<path d="M12 5c2.5 2.6 4 4.7 4 6.7A4 4 0 0 1 8 11.7C8 9.7 9.5 7.6 12 5Z"/><path d="M4 14c.4 1.5 1.3 2.8 2.5 3.8"/><path d="M20 14c-.4 1.5-1.3 2.8-2.5 3.8"/><path d="M7 11 5 9"/><path d="M17 11l2-2"/>`),
  factory: iconSvg(`<path d="M3 19h18"/><path d="M5 19v-8h5v3l4-3v8"/><path d="M14 19v-5l5-3v8"/><path d="M7 9V6h3v3"/>`),
  badge: iconSvg(`<circle cx="12" cy="12" r="7"/><path d="m9.5 12 1.5 1.5 3.5-3.5"/><path d="M12 5V3"/><path d="M12 21v-2"/><path d="M19 12h2"/><path d="M3 12h2"/>`),
  network: iconSvg(`<circle cx="6" cy="6" r="2"/><circle cx="18" cy="6" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="6" cy="18" r="2"/><circle cx="18" cy="18" r="2"/><path d="M7.6 7.6 10.4 10.4"/><path d="M16.4 7.6 13.6 10.4"/><path d="M10.4 13.6 7.6 16.4"/><path d="M13.6 13.6 16.4 16.4"/>`),
  globe: iconSvg(`<circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3a14.8 14.8 0 0 1 0 18"/><path d="M12 3a14.8 14.8 0 0 0 0 18"/>`),
  mapPin: iconSvg(`<path d="M12 21s6-5.4 6-11a6 6 0 0 0-12 0c0 5.6 6 11 6 11Z"/><circle cx="12" cy="10" r="2.5"/>`),
  linkedin: iconSvg(`<path d="M8 10v6"/><path d="M8 7.5h.01"/><path d="M12 16v-3.2c0-1.7 1-2.8 2.5-2.8S17 11.1 17 12.8V16"/><path d="M12 10v6"/>`),
  twitter: iconSvg(`<path d="M18 7.5a3.4 3.4 0 0 1-1.2.4 2.2 2.2 0 0 0 1-1.2 4.1 4.1 0 0 1-1.4.6 2.2 2.2 0 0 0-3.8 1.5c0 .2 0 .4.1.6A6.2 6.2 0 0 1 8 7.2a2.2 2.2 0 0 0 .7 3 2 2 0 0 1-1-.3v.1a2.2 2.2 0 0 0 1.8 2.2 2.5 2.5 0 0 1-1 .1 2.2 2.2 0 0 0 2 1.6A4.5 4.5 0 0 1 7 15.1a6.4 6.4 0 0 0 3.5 1c4.2 0 6.5-3.6 6.5-6.7v-.3A4.7 4.7 0 0 0 18 7.5Z"/>`),
  instagram: iconSvg(`<rect x="4.5" y="4.5" width="15" height="15" rx="4"/><circle cx="12" cy="12" r="3.5"/><circle cx="16.3" cy="7.7" r=".8" fill="#062B4F" stroke="none"/>`),
};

async function login() {
  const response = await fetch(`${base}/admin/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: adminEmail, password: adminPassword }),
  });
  const data = await response.json();
  if (!response.ok || !data.data?.token) {
    throw new Error(`Login failed: ${response.status} ${JSON.stringify(data)}`);
  }
  return {
    jwt: data.data.token,
    cookie: response.headers.get("set-cookie") ?? "",
  };
}

async function uploadBlob(auth, key, filename, type, bytes) {
  if (uploadCache.has(key)) return uploadCache.get(key);
  const form = new FormData();
  form.append("files", new Blob([bytes], { type }), filename);
  const response = await fetch(`${base}/upload`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${auth.jwt}`,
      Cookie: auth.cookie,
    },
    body: form,
  });
  const text = await response.text();
  if (!response.ok) throw new Error(`Upload failed for ${filename}: ${response.status} ${text}`);
  const [file] = JSON.parse(text);
  uploadCache.set(key, file.id);
  return file.id;
}

function mimeFromPath(path) {
  if (path.endsWith(".png")) return "image/png";
  if (path.endsWith(".jpg") || path.endsWith(".jpeg")) return "image/jpeg";
  if (path.endsWith(".svg")) return "image/svg+xml";
  if (path.endsWith(".webp")) return "image/webp";
  return "application/octet-stream";
}

async function uploadPublic(auth, relativePath) {
  const normalized = relativePath.replace(/^\//, "");
  const fullPath = resolve(publicRoot, normalized);
  const bytes = readFileSync(fullPath);
  return uploadBlob(auth, `file:${normalized}`, normalized.split("/").pop(), mimeFromPath(normalized), bytes);
}

async function uploadSvg(auth, name, body) {
  return uploadBlob(auth, `svg:${name}`, `${name}.svg`, "image/svg+xml", Buffer.from(body, "utf8"));
}

async function putSingleType(auth, slug, data) {
  const response = await fetch(`${base}/content-manager/single-types/api::${slug}.${slug}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${auth.jwt}`,
    },
    body: JSON.stringify(data),
  });
  const text = await response.text();
  if (!response.ok) throw new Error(`[${slug}] ${response.status} ${text}`);
  console.log(`[ok] ${slug}`);
}

async function buildContent(auth) {
  const media = {
    heroLogo: await uploadPublic(auth, "/figma-assets/hero-logo.png"),
    footerLogo: await uploadPublic(auth, "/figma-assets/partner-logo-6.png"),
    ogImage: await uploadPublic(auth, "/figma-assets/hero-logo.png"),
    marqueeTvs: await uploadPublic(auth, "/figma-assets/marquee-tvs.png"),
    marqueeHonda: await uploadPublic(auth, "/figma-assets/marquee-honda.png"),
    marqueeRoyal: await uploadPublic(auth, "/figma-assets/marquee-royal-enfield.png"),
    marqueeIhcl: await uploadPublic(auth, "/figma-assets/marquee-ihcl-1.png"),
    marqueeMg: await uploadPublic(auth, "/figma-assets/marquee-mg.png"),
    marqueeTata: await uploadPublic(auth, "/figma-assets/marquee-tata1.png"),
    wtiira: await uploadPublic(auth, "/figma-assets/top-12.png"),
    waterTech: await uploadPublic(auth, "/figma-assets/top-5.png"),
    solutionWater: await uploadPublic(auth, "/figma-assets/solutions-2.png"),
    solutionVehicle: await uploadPublic(auth, "/figma-assets/solutions-1.png"),
    solutionEsg: await uploadPublic(auth, "/figma-assets/solutions-3.png"),
    industryHospitality: await uploadPublic(auth, "/figma-assets/industries-7.png"),
    industryVehicle: await uploadPublic(auth, "/figma-assets/industries-2.png"),
    industryFacility: await uploadPublic(auth, "/figma-assets/industry-facilities.png"),
    industryMall: await uploadPublic(auth, "/figma-assets/industry-tab-malls.png"),
    industryGov: await uploadPublic(auth, "/figma-assets/industry-tab-government.png"),
    industryDevelopers: await uploadPublic(auth, "/figma-assets/industries-4.png"),
    aboutValuesImage: await uploadPublic(auth, "/figma-assets/about-3.png"),
    aboutMissionImage: await uploadPublic(auth, "/figma-assets/about-tab2.png"),
    aboutJourneyImage: await uploadPublic(auth, "/figma-assets/about-tab3.png"),
    partnerMcww: await uploadPublic(auth, "/figma-assets/washworks.png"),
    partnerIndra: await uploadPublic(auth, "/figma-assets/indra.png"),
    partnerStinger: await uploadPublic(auth, "/figma-assets/stinger.png"),
    partnerXylem: await uploadPublic(auth, "/figma-assets/xylem.png"),
    deploymentImage: await uploadPublic(auth, "/figma-assets/dep.png"),
    wwtpHero: await uploadPublic(auth, "/waste-water-treatment-systems/main-hero.png"),
    wwtpStat1: await uploadPublic(auth, "/waste-water-treatment-systems/stat-icon-1.png"),
    wwtpStat2: await uploadPublic(auth, "/waste-water-treatment-systems/stat-icon-2.png"),
    wwtpStat3: await uploadPublic(auth, "/waste-water-treatment-systems/stat-icon-3.png"),
    wwtpStat4: await uploadPublic(auth, "/waste-water-treatment-systems/stat-icon-4.png"),
    wwtpStat5: await uploadPublic(auth, "/waste-water-treatment-systems/stat-icon-5.png"),
    electrox1: await uploadPublic(auth, "/waste-water-treatment-systems/electrox-1.svg"),
    electrox2: await uploadPublic(auth, "/waste-water-treatment-systems/electrox-2.svg"),
    electrox3: await uploadPublic(auth, "/waste-water-treatment-systems/electrox-3.svg"),
    electrox4: await uploadPublic(auth, "/waste-water-treatment-systems/electrox-4.svg"),
    electrox5: await uploadPublic(auth, "/waste-water-treatment-systems/electrox-5.svg"),
    electrox6: await uploadPublic(auth, "/waste-water-treatment-systems/electrox-6.svg"),
    scale1: await uploadPublic(auth, "/waste-water-treatment-systems/scale-s01.png"),
    scale2: await uploadPublic(auth, "/waste-water-treatment-systems/scale-s02.png"),
    scale3: await uploadPublic(auth, "/waste-water-treatment-systems/scale-l01.png"),
    scale4: await uploadPublic(auth, "/waste-water-treatment-systems/scale-l02.png"),
    eco1: await uploadPublic(auth, "/waste-water-treatment-systems/product-icon-reactor.png"),
    eco2: await uploadPublic(auth, "/waste-water-treatment-systems/product-icon-phlox.png"),
    eco3: await uploadPublic(auth, "/waste-water-treatment-systems/product-icon-spectrum.png"),
    vehicleHero: await uploadPublic(auth, "/vehicle-assets/wash-tunnel.png"),
    vehicleFeature1: await uploadPublic(auth, "/vehicle-assets/feature-1.svg"),
    vehicleFeature2: await uploadPublic(auth, "/vehicle-assets/feature-2.svg"),
    vehicleFeature3: await uploadPublic(auth, "/vehicle-assets/feature-3.svg"),
    vehicleFeature4: await uploadPublic(auth, "/vehicle-assets/feature-4.svg"),
    vehicleFeature5: await uploadPublic(auth, "/vehicle-assets/feature-5.svg"),
    vehicleFeature6: await uploadPublic(auth, "/vehicle-assets/feature-6.svg"),
    vehicleBusiness1: await uploadPublic(auth, "/vehicle-assets/business-1.svg"),
    vehicleBusiness2: await uploadPublic(auth, "/vehicle-assets/business-2.svg"),
    vehicleBusiness3: await uploadPublic(auth, "/vehicle-assets/business-3.svg"),
    vehicleIndia: await uploadPublic(auth, "/vehicle-assets/india.svg"),
    vehicleUae: await uploadPublic(auth, "/vehicle-assets/uae.svg"),
    esgHero: await uploadPublic(auth, "/esg-assets/hero.png"),
    esgCard1: await uploadPublic(auth, "/esg-assets/card-1.png"),
    esgCard2: await uploadPublic(auth, "/esg-assets/card-2.png"),
    esgCard3: await uploadPublic(auth, "/esg-assets/card-3.png"),
    waves: await uploadSvg(auth, "waves-icon", svgIcons.waves),
    car: await uploadSvg(auth, "car-icon", svgIcons.car),
    chart: await uploadSvg(auth, "chart-icon", svgIcons.chart),
    lightbulb: await uploadSvg(auth, "lightbulb-icon", svgIcons.lightbulb),
    leaf: await uploadSvg(auth, "leaf-icon", svgIcons.leaf),
    shield: await uploadSvg(auth, "shield-icon", svgIcons.shield),
    users: await uploadSvg(auth, "users-icon", svgIcons.users),
    waterScarcity: await uploadSvg(auth, "water-scarcity-icon", svgIcons.waterScarcity),
    factory: await uploadSvg(auth, "factory-icon", svgIcons.factory),
    badge: await uploadSvg(auth, "badge-icon", svgIcons.badge),
    network: await uploadSvg(auth, "network-icon", svgIcons.network),
    globe: await uploadSvg(auth, "globe-icon", svgIcons.globe),
    mapPin: await uploadSvg(auth, "map-pin-icon", svgIcons.mapPin),
    linkedin: await uploadSvg(auth, "linkedin-icon", svgIcons.linkedin),
    twitter: await uploadSvg(auth, "twitter-icon", svgIcons.twitter),
    instagram: await uploadSvg(auth, "instagram-icon", svgIcons.instagram),
  };

  return {
    navbar: {
      logo: media.heroLogo,
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
      cta: { label: "Talk To Our Team", href: "#contact" },
    },
    footer: {
      logo: media.footerLogo,
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
        { label: "Automated Vehicle Washing", href: "#solutions" },
        { label: "Water Treatment Systems", href: "#solutions" },
        { label: "ESG Intelligence Platform", href: "#solutions" },
        { label: "EPC Services", href: "#solutions" },
      ],
      copyright: "Copyright 2026 BlueVerse CleanTech Pvt. Ltd. All rights reserved.",
      socialLinks: [
        { platform: "LinkedIn", href: "#contact", icon: media.linkedin },
        { platform: "Twitter", href: "#contact", icon: media.twitter },
        { platform: "Instagram", href: "#contact", icon: media.instagram },
      ],
    },
    "global-setting": {
      title: "BlueVerse | Water Infrastructure Landing Page",
      description: "BlueVerse cleantech landing page for water treatment, automated vehicle washing, and ESG intelligence solutions.",
      ogTitle: "BlueVerse | Water Infrastructure Landing Page",
      ogDescription: "BlueVerse cleantech landing page for water treatment, automated vehicle washing, and ESG intelligence solutions.",
      ogImage: media.ogImage,
      twitterCard: "summary_large_image",
    },
    "home-page": {
      hero: {
        title: "Delivering Scalable, Innovative & Reliable Services",
        description: "Helping businesses reduce water consumption, achieve regulatory compliance, and report ESG metrics - all from one unified platform.",
        primaryCta: { label: "Talk To Our Team", href: "#contact" },
        secondaryCta: { label: "Explore Solutions", href: "#solutions" },
      },
      trustedBrandsLabel: "Trusted By Leading Brands",
      marqueeLogos: [
        { name: "TVS", logo: media.marqueeTvs },
        { name: "Honda", logo: media.marqueeHonda },
        { name: "Royal Enfield", logo: media.marqueeRoyal },
        { name: "IHCL", logo: media.marqueeIhcl },
        { name: "MG", logo: media.marqueeMg },
        { name: "Tata", logo: media.marqueeTata },
      ],
      heroPartners: [
        { title: "WTIIRA", subtitle: "Saudi Water Authority", logo: media.wtiira, points: [{ text: "Incubated by the innovation arm of the Saudi Water Authority (SWA)" }, { text: "Validating BlueVerse's technology for the KSA market" }] },
        { title: "WaterTech Accelerator", subtitle: "QSTP x TotalEnergies", logo: media.waterTech, points: [{ text: "Selected for the Qatar Science & Technology Park programme" }, { text: "Backed by TotalEnergies' energy transition initiative" }] },
      ],
      stats: [
        { value: "05+", label: "Years of Experience" },
        { value: "10K+", label: "CO2 Emissions Reduced" },
        { value: "5 Billion +", label: "Litres of Water Saved" },
        { value: "50 MLD+", label: "Wastewater Order Pipeline" },
      ],
      problemSection: {
        header: { eyebrow: "The Problem We Solve", title: "Challenges Driving the Need for Change" },
        ctaText: "Together, we can reduce water waste and build a more sustainable future",
        cta: { label: "Let's Solve Water Challenges Together", href: "#contact" },
      },
      challenges: [
        { title: "Water Scarcity", icon: media.waterScarcity, points: [{ text: "Operating in one of the world's most water-stressed regions" }, { text: "70-90% wastewater still discharged" }] },
        { title: "Industrial Water Waste", icon: media.factory, points: [{ text: "Traditional vehicle washing uses 120-180 litres of water per wash." }, { text: "Industrial washing generates high-COD/TSS effluent" }] },
        { title: "ESG Compliance", icon: media.badge, points: [{ text: "India, UAE, KSA, and Qatar enforcing ESG reporting mandates" }, { text: "Companies lack real-time Scope 1, 2, 3 water metrics" }] },
        { title: "A Fragmented Market", icon: media.network, points: [{ text: "Disconnected solutions" }, { text: "Multiple vendors for vehicle washing, water treatment & ESG reporting" }] },
      ],
      solutionsSection: {
        header: { eyebrow: "Our Solutions", title: "One Platform. Three Transformative Solutions." },
        summary: "From Water Treatment to Smart Washing and ESG Reporting, BlueVerse brings every solution together.",
        cta: { label: "Let's Talk Sustainable Growth", href: "#contact" },
      },
      solutions: [
        { title: "Water Treatment Systems", description: "Smart water treatment systems designed to purify, recycle, and optimize water for sustainable operations.", image: media.solutionWater, href: "/waste-water-treatment-systems", icon: media.waves },
        { title: "Automated Vehicle Washing", description: "Automated vehicle washing solutions that deliver consistent cleaning performance with efficient water use.", image: media.solutionVehicle, href: "/vehicle-washing", icon: media.car },
        { title: "ESG Intelligence Platform", description: "AI-Driven Water Intelligence Platform for water assets, carbon credit trading, water exchange, energy optimization, and waste data management.", image: media.solutionEsg, href: "/esg-platform", icon: media.chart },
      ],
      industriesSection: {
        header: { eyebrow: "Who We Serve", title: "Industries We Transform" },
        detailEyebrow: "Industries",
        detailCta: { label: "Let's Talk Sustainable Growth", href: "#contact" },
      },
      industries: [
        { title: "Hotels & Hospitality", image: media.industryHospitality, points: [{ text: "Wastewater recycling for laundry, kitchens, landscaping" }, { text: "ESG reporting for corporate sustainability targets" }], description: "BlueVerse CleanTech helps hotels, resorts, and hospitality groups make water efficiency a part of everyday operations without compromising guest comfort, hygiene standards, or service quality. From laundry, landscaping, kitchens, and housekeeping to wastewater treatment and reuse, our solutions help hospitality brands reduce water waste, control rising utility costs, and improve ESG performance. By integrating smart water management systems, hotels can lower their environmental footprint while creating measurable long-term savings and more sustainable guest experiences.", details: [{ text: "Closed-loop water reuse for laundries, kitchens, landscaping, and utility zones." }, { text: "Sustainability dashboards aligned to group-wide environmental commitments." }, { text: "Operational visibility across sites to benchmark performance and compliance." }] },
        { title: "Vehicle Wash", image: media.industryVehicle, points: [{ text: "Automated wash tunnels with water recycling" }, { text: "WaaS (Wash-as-a-Service) subscription model" }], description: "Vehicle wash operations require large volumes of water every day, making efficient treatment and reuse essential for long-term profitability and sustainability. BlueVerse CleanTech supports car wash operators with reliable water recycling, filtration, and treatment solutions designed to reduce freshwater dependency. Our systems help maintain consistent wash quality while lowering water consumption, reducing discharge, and improving operational efficiency. Whether for standalone wash centers, fleet wash facilities, or high-volume vehicle wash businesses, we help operators build cleaner, smarter, and more cost-effective water systems.", details: [{ text: "Automated tunnels and rollover systems engineered for consistent throughput." }, { text: "Water reuse systems that materially cut freshwater use per wash cycle." }, { text: "Subscription-ready operating support for multi-site wash networks." }] },
        { title: "Industrial Facilities", image: media.industryFacility, points: [{ text: "Effluent treatment for manufacturing, logistics" }, { text: "JAFZA, KIZAD, EGA zone compliance" }], description: "Industrial facilities face growing pressure to manage water more responsibly while maintaining productivity, compliance, and operational continuity. BlueVerse CleanTech provides advanced water and wastewater treatment solutions designed for demanding industrial environments. We help manufacturing plants, processing units, and industrial sites recover, reuse, and manage water more efficiently. Our solutions support reduced water intake, lower wastewater discharge, improved regulatory alignment, and better long-term resource planning. With the right system in place, industrial operations can improve performance while reducing environmental impact.", details: [{ text: "Treatment systems sized for manufacturing, logistics, and process-intensive operations." }, { text: "Regulatory alignment for industrial parks and zone-specific compliance requirements." }, { text: "Integrated reporting for water performance and ESG traceability." }] },
        { title: "Malls & Commercial Real Estate", image: media.industryMall, points: [{ text: "Water recycling for facility management" }, { text: "ESG dashboards for LEED/Estidama compliance" }], description: "Malls and commercial real estate developments rely on water for cooling, cleaning, landscaping, sanitation, and daily facility operations. BlueVerse CleanTech helps commercial properties reduce water waste, optimize usage, and improve sustainability performance across high-traffic environments. Our solutions support facility managers, developers, and asset owners in lowering operating costs while improving water efficiency and ESG value. By integrating treatment, reuse, and performance monitoring, commercial properties can become more resource-conscious, cost-efficient, and future-ready.", details: [{ text: "Water reuse infrastructure for cooling, cleaning, and site maintenance." }, { text: "Portfolio-level ESG reporting support for LEED, Estidama, and internal targets." }, { text: "Smarter monitoring for multi-building facility management teams." }] },
        { title: "Government & Municipalities", image: media.industryGov, points: [{ text: "Aligned with UAE Water Security Strategy 2036" }, { text: "Saudi Water Vision 2030 Policy Support" }], description: "BlueVerse CleanTech partners with government entities and municipalities to support sustainable water management across public infrastructure, communities, and civic facilities. As cities face rising demand, water scarcity, and environmental pressure, smarter water systems are essential for long-term resilience. Our solutions help public sector teams improve wastewater treatment, enable reuse, reduce water loss, and create more efficient municipal operations. From community-scale systems to infrastructure-focused projects, we support cleaner, more sustainable, and future-ready urban development.", details: [{ text: "Infrastructure aligned with water security and circular-resource strategies." }, { text: "Decision support for long-horizon treatment, reuse, and utility planning." }, { text: "Transparent metrics for public accountability and policy tracking." }] },
        { title: "Developers & Master Planners", image: media.industryDevelopers, points: [{ text: "Built-in water reuse infrastructure" }, { text: "Aldar, Emaar, Nakheel, Deyaar partnerships" }], description: "Sustainable communities begin with smart planning. BlueVerse CleanTech works with developers, consultants, and master planners to integrate water efficiency, wastewater reuse, and circular resource strategies into new developments from the earliest stages. Our solutions help residential communities, mixed-use projects, and large-scale master plans reduce environmental impact, improve operational resilience, and align with sustainability goals. By designing water-smart infrastructure from the start, developers can create future-ready destinations that are efficient, responsible, and built for long-term value.", details: [{ text: "Integrated water reuse planning for communities, districts, and large developments." }, { text: "Reduced lifecycle cost through early-stage infrastructure coordination." }, { text: "Better sustainability positioning for investors, residents, and regulators." }] },
      ],
      aboutSection: { eyebrow: "About BlueVerse", title: "Building Tomorrow's Infrastructure, Today" },
      aboutTabs: [
        { name: "Our Values", panel: { image: media.aboutValuesImage, overlayTitle: "Building Tomorrow's Infrastructure, Today", overlayDescription: "Innovative water solutions for industries and communities.", overlayCta: { label: "Get Started", href: "#contact" }, cards: [{ title: "Innovation", description: "Proprietary technology and bespoke solutions over off-the-shelf defaults.", icon: media.lightbulb }, { title: "Sustainability", description: "Every solution is designed with environmental responsibility in mind.", icon: media.leaf }, { title: "Reliability", description: "Long-term partnerships built on consistent delivery and trust.", icon: media.shield }, { title: "People-First", description: "Continuous training and development for our team and our clients.", icon: media.users }] } },
        { name: "Our Mission", panel: { image: media.aboutMissionImage, overlayTitle: "Building Tomorrow's Infrastructure, Today", overlayDescription: "Innovative water solutions for industries and communities.", overlayCta: { label: "Get Started", href: "#contact" }, heading: "Our Mission", missionParagraphs: [{ text: "BlueVerse CleanTech exists to make water reuse the default, not the exception, for businesses. We believe industrial water waste is not inevitable. With the right technology, data intelligence, and circular water solutions, every litre can be recovered, treated, and reused." }, { text: "As industries face increasing pressure from water scarcity, rising utility costs, and evolving sustainability requirements, we provide integrated solutions that help organizations operate more efficiently while reducing their environmental impact. Our approach combines advanced water treatment technologies, digital monitoring platforms, and ESG-focused performance insights to create measurable, long-term value." }, { text: "We partner with businesses across industrial, commercial, and infrastructure sectors to transform wastewater from a liability into a valuable resource. Through intelligent treatment systems, real-time operational visibility, and performance-driven water management strategies, we help clients reduce freshwater dependency, optimize resource consumption, and strengthen regulatory compliance." }, { text: "By enabling circular water ecosystems, BlueVerse is building a future where sustainability and operational excellence work together. Our mission is to empower organizations to conserve resources, lower emissions, improve efficiency, and create a lasting positive impact on communities, industries, and the environment." }] } },
        { name: "Our Journey", panel: { image: media.aboutJourneyImage, overlayTitle: "Building Tomorrow's Infrastructure, Today", overlayDescription: "Innovative water solutions for industries and communities.", overlayCta: { label: "Get Started", href: "#contact" }, timeline: [{ year: "2021", description: "Developed and patented automated 2-wheeler vehicle washing machine" }, { year: "2022", description: "Built proprietary ESG Tech Stack for water metrics in vehicle washing" }, { year: "2024", description: "Expanded to 15 operational sites across India; entered the UAE market" }, { year: "2025", description: "Launched UAE B2C car care centre at Al Quoz, Dubai" }, { year: "2026", description: "Incubated in WTIIRA Saudi Water Authority innovation programme" }, { year: "2026", description: "Selected for WaterTech Accelerator QSTP x TotalEnergies, Qatar" }] } },
      ],
      partnersSection: { eyebrow: "Our Partners", title: "Trusted by Industry Leaders" },
      partners: [
        { name: "MCWW", logo: media.partnerMcww, description: "Manufactures a comprehensive line of automatic car wash systems, including tunnels, arches, and high-performance drying equipment. A trusted one-stop resource for car wash investors and operators seeking reliable, cutting-edge technology, the company focuses on delivering durable, efficient, and easy-to-operate solutions designed to maximize wash quality." },
        { name: "INDRA Water", logo: media.partnerIndra, description: "BlueVerse is the exclusive GCC system integrator for INDRA Water's ElectroX electrochemical treatment platform, a technology certified as 10 years ahead of conventional ETP/STP systems. INDRA's modular units require zero primary chemicals, have a fraction of the footprint of legacy systems, and are fully remote-monitored." },
        { name: "Stinger Chemicals", logo: media.partnerStinger, description: "Stinger Chemicals delivers high-quality industrial and automotive chemical solutions, trusted for performance and reliability. Committed to innovation, we provide products that meet the highest standards for every application, helping businesses achieve superior cleaning, protection, and maintenance results." },
        { name: "Xylem", logo: media.partnerXylem, description: "BlueVerse cleantech has partnered with Xylem, a global leader in water technology and solutions, to strengthen our water infrastructure capabilities. Xylem's expertise spans water analysis & monitoring, disinfection systems, filtration, smart metering, and digital water management complementing our EPC and ESG commitments with world-class technology and equipment." },
      ],
      deploymentSection: { title: "Deployment Highlights", image: media.deploymentImage },
      deploymentHighlights: [
        { text: "15+ operational Vehicle Washing centres across India and UAE" },
        { text: "8 MLD+ wastewater treatment plants deployed or undergoing deployment" },
        { text: "50 MLD+ order pipeline for wastewater treatment capacity" },
        { text: "UAE's first and most sustainable car care centre - Al Quoz, Dubai" },
        { text: "Targeting 100+ BlueVerse centres by 2027" },
      ],
    },
    "waste-water-treatment-page": {
      hero: { subtitle: "Waste Water Treatment Systems", title: "Enabling Water Security\nDecentralised, at Scale", description: "BlueVerse Cleantech delivers end-to-end EPC solutions for decentralised desalination and wastewater treatment plants powered by proprietary ElectroX technology. A non-contact micro-electrolysis process built indigenously for treating the toughest pollutants. | 4 Patents Granted.", heroImage: media.wwtpHero },
      statsSectionLabel: "Water Treatment Systems",
      stats: [
        { value: "98%", label: "Water recovery rate", icon: media.wwtpStat1 },
        { value: "90%", label: "Less space requirement", icon: media.wwtpStat2 },
        { value: "Zero", label: "Chemicals in primary treatment", icon: media.wwtpStat3 },
        { value: "40%", label: "Savings on operational costs", icon: media.wwtpStat4 },
        { value: "Plug & Play", label: "Shock-load ready deployment", icon: media.wwtpStat5 },
      ],
      epcSection: { title: "EPC Focus Areas", ctaText: "Delivering end-to-end water infrastructure solutions from design and procurement to construction and deployment.", cta: { label: "Let's Discuss Your Project", href: "#contact" } },
      epcFocusAreas: [
        { title: "Decentralised Wastewater Treatment Plants", description: "End-to-end EPC for wastewater treatment at source - industrial, municipal, commercial and residential. Converting waste streams into reusable water assets.", points: [{ text: "Industrial ETPs & municipal STPs" }, { text: "Zero Liquid Discharge (ZLD) systems" }, { text: "Sewage reuse for irrigation & utilities" }, { text: "Retrofit-ready for existing plants" }, { text: "BRSR & compliance-ready reporting" }] },
        { title: "Decentralised Desalination Infrastructure", description: "We design, procure, and construct decentralised desalination infrastructure - bringing potable water closer to the point of need, eliminating dependence on long-distance pipelines.", points: [{ text: "Brackish water & seawater treatment" }, { text: "Modular, scalable plant design" }, { text: "Remote & peri-urban deployment" }, { text: "Low OPEX, high uptime systems" }, { text: "IoT-enabled remote monitoring" }] },
      ],
      electroxSection: { eyebrow: "ElectroX - Six processes.", title: "One reactor. Infinite possibilities.", description: "ElectroX Six processes. One reactor. Infinite possibilities. Indra's patented non-contact micro-electrolysis platform replacing chemical-heavy, multi-stage conventional treatment with a single electricity-driven reactor. Handles pollutant shock loads with zero chemical dosing in primary treatment." },
      electroxProcesses: [
        { title: "Electro-coagulation", description: "Destabilises colloids and metals for removal.", icon: media.electrox1 },
        { title: "Electro-floatation", description: "Lifts contaminants via fine gas bubbles.", icon: media.electrox2 },
        { title: "Electro-flocculation", description: "Lifts contaminants via fine gas bubbles.", icon: media.electrox3 },
        { title: "Electro-disinfection", description: "Destroys pathogens through oxidative radicals.", icon: media.electrox4 },
        { title: "Electro-oxidation", description: "Breaks down persistent organics.", icon: media.electrox5 },
        { title: "Electro-sorption", description: "Captures dyes, organics and ions on reactive sites.", icon: media.electrox6 },
      ],
      scaleSection: { eyebrow: "Built for Every Scale", title: "ElectroX Product Ecosystem" },
      scaleCards: [
        { code: "S01", title: "Small scale", image: media.scale1, footprint: "50 sq.ft", stp: "20 KLD", etp: "10 KLD" },
        { code: "S02", title: "Mid scale", image: media.scale2, footprint: "50 sq.ft", stp: "75 KLD", etp: "40-60 KLD" },
        { code: "L01", title: "Large scale", image: media.scale3, footprint: "75 sq.ft", stp: "250 KLD", etp: "80-150 KLD" },
        { code: "L02", title: "Flagship - Commercial", image: media.scale4, footprint: "100 sq.ft", stp: "800-1000 KLD", etp: "100-600 KLD" },
      ],
      ecosystemProducts: [
        { title: "ElectroX Reactor", description: "Core treatment unit. Non-contact micro-electrolysis handles organics, metals, dyes, and pathogens in a single reactor with zero primary chemicals. 4 Patents granted.", icon: media.eco1 },
        { title: "PhloX", description: "Skid-based downstream solid-liquid separation unit. Works post-ElectroX with clarifiers, tube settlers or membranes to achieve target output water quality.", icon: media.eco2 },
        { title: "Spectrum Water Intelligence", description: "Unified dashboard connecting any sensor or protocol. 24/7 plant visibility, automation, predictive analytics, and scalable remote operations.", icon: media.eco3 },
      ],
    },
    "vehicle-washing-page": {
      hero: { subtitle: "Automated Vehicle Washing", title: "Sustainable Vehicle Washing Solutions", description: "BlueVerse operates and supplies fully automated vehicle washing systems that combine throughput, quality, and water efficiency in a single footprint - designed for petrol stations, malls, fleet depots, automotive dealerships, and government facilities.", heroImage: media.vehicleHero },
      featuresSectionTitle: "System Features",
      features: [
        { icon: media.vehicleFeature1, description: "Fully automated washing tunnels and robotic gantry systems" },
        { icon: media.vehicleFeature2, description: "Express tunnel wash: high-volume throughput for busy locations" },
        { icon: media.vehicleFeature3, description: "Robot AI Wash: Dubai's first AI-powered robotic wash (coming soon)" },
        { icon: media.vehicleFeature4, description: "95% water recycling per wash cycle via integrated ETP" },
        { icon: media.vehicleFeature5, description: "IoT-enabled - real-time wash data feeds into ESG dashboard" },
        { icon: media.vehicleFeature6, description: "Zero capex model available: Pay-per-Wash / Wash-as-a-Service (WaaS)" },
      ],
      washTypesSectionTitle: "Wash Types Available",
      washTypes: [
        { title: "Express Tunnel Wash", description: "High-speed automated wash. Ideal for petrol stations, mall carparks, fleet depots. High throughput, consistent quality." },
        { title: "Manual Wash", description: "Hand-crafted wash by trained technicians. For premium and high-value vehicles." },
        { title: "Robot AI Wash", description: "AI-powered robotic wash system - coming soon to UAE. Precision, speed, scratch-free brilliance." },
        { title: "2-Wheeler Automated Wash", description: "Patented automated motorcycle wash system. 8 washes per hour, 138 sq.ft. footprint, 98% water recovery." },
      ],
      businessModelsSectionTitle: "Business Models",
      businessModels: [
        { icon: media.vehicleBusiness1, title: "CapEx purchase", description: "Full system ownership" },
        { icon: media.vehicleBusiness2, title: "Wash-as-a-Service (WaaS)", description: "Revenue-share or subscription model, zero upfront capex" },
        { icon: media.vehicleBusiness3, title: "Annual Maintenance Contracts (AMCs)", description: "Full system upkeep and consumables" },
      ],
      regionalSectionTitle: "Regional Presence",
      regionalCards: [
        { icon: media.vehicleIndia, region: "India", site: "blueverseindia.com", copy: "Automated 2-wheeler and 4-wheeler wash solutions for OEMs, dealerships, fuel stations, and independent wash centres across India.", cta: { label: "Visit BlueVerse India", href: "https://blueverseindia.com/" } },
        { icon: media.vehicleUae, region: "UAE", site: "blueverse.ae", copy: "Eco-friendly, high-performance vehicle washing services and solutions tailored for the Gulf market and regional partners.", cta: { label: "Visit BlueVerse UAE", href: "https://blueverse.ae/" } },
      ],
    },
    "esg-platform-page": {
      hero: { subtitle: "ESG Intelligence Platform", title: "Technology-led Sustainability\nfor a Resource-Conscious\nWorld", description: "The BlueVerse ESG Intelligence platform gives facility managers, sustainability officers, and corporate boards real-time visibility into water and carbon metrics formatted for regulatory compliance and global ESG frameworks.", heroImage: media.esgHero },
      cards: [
        { title: "What It Tracks", icon: media.esgCard1, items: [{ text: "Water saved (litres/day, month, year)" }, { text: "Water reused (% recovery rate per facility)" }, { text: "Carbon avoided (kg CO2e equivalent)" }, { text: "Energy consumption per KLD treated" }, { text: "Chemical reduction vs conventional baseline" }, { text: "Scope 1, 2, 3 water metrics (GHG Protocol aligned)" }] },
        { title: "Platform Capabilities", icon: media.esgCard2, items: [{ text: "Real-time dashboard accessible by web and mobile" }, { text: "Multi-site aggregation view all facilities in one view" }, { text: "Export-ready reports for ESG disclosures (UAE SCA, Saudi Tadawul, TCFD, GRI)" }, { text: "Alert system for discharge limit breaches" }, { text: "IoT integration with INDRA Spectrum and BlueVerse washing equipment" }] },
        { title: "Pricing Model", icon: media.esgCard3, items: [{ text: "SaaS subscription (annual or multi-year)" }, { text: "Bundled into system deployments at no additional charge" }] },
      ],
    },
    "contact-form": {
      heading: "Let's Build Something Together",
      description: "Whether you have a project in mind, a question about our services, or want to explore a partnership - our team is ready to help.",
      offices: [
        { title: "UAE", address: "near Al Quoz - Al Qouz Ind.second - Al Quoz - Dubai - United Arab Emirates", icon: media.globe },
        { title: "India", address: "Floor-8, Plot-208, Regent Chambers, Jamnalal Bajaj Marg, Nariman Point, Mumbai, Maharashtra - 400021", icon: media.mapPin },
      ],
      nameField: { label: "Full Name", placeholder: "Your Name", required: true },
      companyField: { label: "Company", placeholder: "Company Name", required: false },
      emailField: { label: "Email Address", placeholder: "email@company.com", required: true },
      phoneField: { label: "Phone Number", placeholder: "+91 XXXX XXX XXX", required: false },
      serviceField: { label: "Service Interest", placeholder: "Select a service", options: [{ text: "Water Treatment Systems" }, { text: "Automated Vehicle Washing" }, { text: "ESG Intelligence Platform" }] },
      messageField: { label: "Message", placeholder: "Tell us about your project requirements...", required: true },
      submitLabel: "Talk To Our Team",
      submittingLabel: "Sending...",
      successMessage: "Message sent successfully.",
      errorMessage: "Unable to send your message right now.",
    },
    "wwtp-contact-form": {
      heading: "Let's Build Something Together",
      description: "Whether you have a project in mind, a question about our services, or want to explore a partnership - our team is ready to help.",
      offices: [
        { title: "UAE", address: "near Al Quoz - Al Qouz Ind.second - Al Quoz - Dubai - United Arab Emirates", icon: media.globe },
        { title: "India", address: "Floor-8, Plot-208, Regent Chambers, Jamnalal Bajaj Marg, Nariman Point, Mumbai, Maharashtra - 400021", icon: media.mapPin },
      ],
      nameField: { label: "Full Name", placeholder: "Your Name", required: true },
      companyField: { label: "Company", placeholder: "Company Name", required: false },
      emailField: { label: "Email Address", placeholder: "email@company.com", required: true },
      phoneField: { label: "Phone Number", placeholder: "+91 XXXX XXX XXX", required: false },
      serviceField: { label: "Service Interest", placeholder: "Select a service", options: [{ text: "Waste Water Treatment Systems" }, { text: "Decentralised Desalination Infrastructure" }, { text: "ElectroX Product Ecosystem" }] },
      messageField: { label: "Message", placeholder: "Tell us about your project requirements...", required: true },
      submitLabel: "Talk To Our Team ->",
    },
  };
}

async function main() {
  console.log(`Prefilling structured CMS fields at ${base}`);
  const auth = await login();
  const allContent = await buildContent(auth);
  for (const [slug, data] of Object.entries(allContent)) {
    await putSingleType(auth, slug, data);
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
