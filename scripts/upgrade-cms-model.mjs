import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const targetRoot = process.argv[2];

if (!targetRoot) {
  console.error("Usage: node scripts/upgrade-cms-model.mjs <path-to-blueverse-cms>");
  process.exit(1);
}

const mediaAttribute = {
  type: "media",
  multiple: false,
  allowedTypes: ["images", "files"],
};

const files = {
  "src/components/shared/link.json": {
    collectionName: "components_shared_links",
    info: { displayName: "Link", icon: "link" },
    options: {},
    attributes: {
      label: { type: "string", required: true },
      href: { type: "string", required: true },
    },
  },
  "src/components/shared/button-link.json": {
    collectionName: "components_shared_button_links",
    info: { displayName: "Button Link", icon: "cursor" },
    options: {},
    attributes: {
      label: { type: "string", required: true },
      href: { type: "string", required: true },
    },
  },
  "src/components/shared/text-item.json": {
    collectionName: "components_shared_text_items",
    info: { displayName: "Text Item", icon: "bulletList" },
    options: {},
    attributes: {
      text: { type: "text", required: true },
    },
  },
  "src/components/shared/social-link.json": {
    collectionName: "components_shared_social_links",
    info: { displayName: "Social Link", icon: "link" },
    options: {},
    attributes: {
      platform: { type: "string", required: true },
      href: { type: "string", required: true },
      icon: mediaAttribute,
    },
  },
  "src/components/shared/office.json": {
    collectionName: "components_shared_offices",
    info: { displayName: "Office", icon: "pinMap" },
    options: {},
    attributes: {
      title: { type: "string", required: true },
      address: { type: "text", required: true },
      icon: mediaAttribute,
    },
  },
  "src/components/shared/stat.json": {
    collectionName: "components_shared_stats",
    info: { displayName: "Stat", icon: "chartBubble" },
    options: {},
    attributes: {
      value: { type: "string", required: true },
      label: { type: "string", required: true },
      icon: mediaAttribute,
    },
  },
  "src/components/shared/section-header.json": {
    collectionName: "components_shared_section_headers",
    info: { displayName: "Section Header", icon: "heading" },
    options: {},
    attributes: {
      eyebrow: { type: "string" },
      title: { type: "string", required: true },
      description: { type: "text" },
    },
  },
  "src/components/shared/page-hero.json": {
    collectionName: "components_shared_page_heroes",
    info: { displayName: "Page Hero", icon: "layout" },
    options: {},
    attributes: {
      subtitle: { type: "string" },
      title: { type: "text", required: true },
      description: { type: "text" },
      heroImage: mediaAttribute,
      primaryCta: { type: "component", repeatable: false, component: "shared.button-link" },
      secondaryCta: { type: "component", repeatable: false, component: "shared.button-link" },
    },
  },
  "src/components/shared/text-field.json": {
    collectionName: "components_shared_text_fields",
    info: { displayName: "Text Field", icon: "pencil" },
    options: {},
    attributes: {
      label: { type: "string", required: true },
      placeholder: { type: "string" },
      required: { type: "boolean", default: false },
    },
  },
  "src/components/shared/select-field.json": {
    collectionName: "components_shared_select_fields",
    info: { displayName: "Select Field", icon: "bulletList" },
    options: {},
    attributes: {
      label: { type: "string", required: true },
      placeholder: { type: "string" },
      options: { type: "component", repeatable: true, component: "shared.text-item" },
    },
  },

  "src/components/home/marquee-logo.json": {
    collectionName: "components_home_marquee_logos",
    info: { displayName: "Marquee Logo", icon: "picture" },
    options: {},
    attributes: {
      name: { type: "string", required: true },
      logo: mediaAttribute,
    },
  },
  "src/components/home/hero-partner.json": {
    collectionName: "components_home_hero_partners",
    info: { displayName: "Hero Partner", icon: "users" },
    options: {},
    attributes: {
      title: { type: "string", required: true },
      subtitle: { type: "string" },
      logo: mediaAttribute,
      points: { type: "component", repeatable: true, component: "shared.text-item" },
    },
  },
  "src/components/home/challenge.json": {
    collectionName: "components_home_challenges",
    info: { displayName: "Challenge", icon: "warningCircle" },
    options: {},
    attributes: {
      title: { type: "string", required: true },
      icon: mediaAttribute,
      points: { type: "component", repeatable: true, component: "shared.text-item" },
    },
  },
  "src/components/home/solution.json": {
    collectionName: "components_home_solutions",
    info: { displayName: "Solution", icon: "apps" },
    options: {},
    attributes: {
      title: { type: "string", required: true },
      description: { type: "text" },
      image: mediaAttribute,
      href: { type: "string" },
      icon: mediaAttribute,
    },
  },
  "src/components/home/industry.json": {
    collectionName: "components_home_industries",
    info: { displayName: "Industry", icon: "picture" },
    options: {},
    attributes: {
      title: { type: "string", required: true },
      image: mediaAttribute,
      points: { type: "component", repeatable: true, component: "shared.text-item" },
      description: { type: "text" },
      details: { type: "component", repeatable: true, component: "shared.text-item" },
    },
  },
  "src/components/home/about-card.json": {
    collectionName: "components_home_about_cards",
    info: { displayName: "About Card", icon: "apps" },
    options: {},
    attributes: {
      title: { type: "string", required: true },
      description: { type: "text" },
      icon: mediaAttribute,
    },
  },
  "src/components/home/timeline-item.json": {
    collectionName: "components_home_timeline_items",
    info: { displayName: "Timeline Item", icon: "calendar" },
    options: {},
    attributes: {
      year: { type: "string", required: true },
      description: { type: "text", required: true },
    },
  },
  "src/components/home/about-panel.json": {
    collectionName: "components_home_about_panels",
    info: { displayName: "About Panel", icon: "layout" },
    options: {},
    attributes: {
      image: mediaAttribute,
      overlayTitle: { type: "string" },
      overlayDescription: { type: "text" },
      overlayCta: { type: "component", repeatable: false, component: "shared.button-link" },
      heading: { type: "string" },
      cards: { type: "component", repeatable: true, component: "home.about-card" },
      missionParagraphs: { type: "component", repeatable: true, component: "shared.text-item" },
      timeline: { type: "component", repeatable: true, component: "home.timeline-item" },
    },
  },
  "src/components/home/about-tab.json": {
    collectionName: "components_home_about_tabs",
    info: { displayName: "About Tab", icon: "apps" },
    options: {},
    attributes: {
      name: { type: "string", required: true },
      panel: { type: "component", repeatable: false, component: "home.about-panel" },
    },
  },
  "src/components/home/partnership.json": {
    collectionName: "components_home_partnerships",
    info: { displayName: "Partnership", icon: "handHeart" },
    options: {},
    attributes: {
      name: { type: "string", required: true },
      logo: mediaAttribute,
      description: { type: "text" },
    },
  },
  "src/components/home/problem-section.json": {
    collectionName: "components_home_problem_sections",
    info: { displayName: "Problem Section", icon: "warningCircle" },
    options: {},
    attributes: {
      header: { type: "component", repeatable: false, component: "shared.section-header" },
      ctaText: { type: "string" },
      cta: { type: "component", repeatable: false, component: "shared.button-link" },
    },
  },
  "src/components/home/solutions-section.json": {
    collectionName: "components_home_solutions_sections",
    info: { displayName: "Solutions Section", icon: "apps" },
    options: {},
    attributes: {
      header: { type: "component", repeatable: false, component: "shared.section-header" },
      summary: { type: "text" },
      cta: { type: "component", repeatable: false, component: "shared.button-link" },
    },
  },
  "src/components/home/industries-section.json": {
    collectionName: "components_home_industries_sections",
    info: { displayName: "Industries Section", icon: "landscape" },
    options: {},
    attributes: {
      header: { type: "component", repeatable: false, component: "shared.section-header" },
      detailEyebrow: { type: "string" },
      detailCta: { type: "component", repeatable: false, component: "shared.button-link" },
    },
  },
  "src/components/home/deployment-section.json": {
    collectionName: "components_home_deployment_sections",
    info: { displayName: "Deployment Section", icon: "dashboard" },
    options: {},
    attributes: {
      title: { type: "string", required: true },
      image: mediaAttribute,
    },
  },

  "src/components/wwtp/epc-focus-area.json": {
    collectionName: "components_wwtp_epc_focus_areas",
    info: { displayName: "EPC Focus Area", icon: "apps" },
    options: {},
    attributes: {
      title: { type: "string", required: true },
      description: { type: "text" },
      points: { type: "component", repeatable: true, component: "shared.text-item" },
    },
  },
  "src/components/wwtp/electrox-process.json": {
    collectionName: "components_wwtp_electrox_processes",
    info: { displayName: "Electrox Process", icon: "filter" },
    options: {},
    attributes: {
      title: { type: "string", required: true },
      description: { type: "text" },
      icon: mediaAttribute,
    },
  },
  "src/components/wwtp/scale-card.json": {
    collectionName: "components_wwtp_scale_cards",
    info: { displayName: "Scale Card", icon: "picture" },
    options: {},
    attributes: {
      code: { type: "string", required: true },
      title: { type: "string", required: true },
      image: mediaAttribute,
      footprint: { type: "string" },
      stp: { type: "string" },
      etp: { type: "string" },
    },
  },
  "src/components/wwtp/ecosystem-product.json": {
    collectionName: "components_wwtp_ecosystem_products",
    info: { displayName: "Ecosystem Product", icon: "apps" },
    options: {},
    attributes: {
      title: { type: "string", required: true },
      description: { type: "text" },
      icon: mediaAttribute,
    },
  },
  "src/components/wwtp/epc-section.json": {
    collectionName: "components_wwtp_epc_sections",
    info: { displayName: "EPC Section", icon: "layout" },
    options: {},
    attributes: {
      title: { type: "string", required: true },
      ctaText: { type: "string" },
      cta: { type: "component", repeatable: false, component: "shared.button-link" },
    },
  },
  "src/components/wwtp/electrox-section.json": {
    collectionName: "components_wwtp_electrox_sections",
    info: { displayName: "Electrox Section", icon: "filter" },
    options: {},
    attributes: {
      eyebrow: { type: "string" },
      title: { type: "string", required: true },
      description: { type: "text" },
    },
  },
  "src/components/wwtp/scale-section.json": {
    collectionName: "components_wwtp_scale_sections",
    info: { displayName: "Scale Section", icon: "layout" },
    options: {},
    attributes: {
      eyebrow: { type: "string" },
      title: { type: "string", required: true },
    },
  },

  "src/components/vehicle/feature.json": {
    collectionName: "components_vehicle_features",
    info: { displayName: "Feature", icon: "star" },
    options: {},
    attributes: {
      icon: mediaAttribute,
      description: { type: "text", required: true },
    },
  },
  "src/components/vehicle/wash-type.json": {
    collectionName: "components_vehicle_wash_types",
    info: { displayName: "Wash Type", icon: "car" },
    options: {},
    attributes: {
      title: { type: "string", required: true },
      description: { type: "text" },
    },
  },
  "src/components/vehicle/business-model.json": {
    collectionName: "components_vehicle_business_models",
    info: { displayName: "Business Model", icon: "briefcase" },
    options: {},
    attributes: {
      icon: mediaAttribute,
      title: { type: "string", required: true },
      description: { type: "text" },
    },
  },
  "src/components/vehicle/regional-card.json": {
    collectionName: "components_vehicle_regional_cards",
    info: { displayName: "Regional Card", icon: "earth" },
    options: {},
    attributes: {
      icon: mediaAttribute,
      region: { type: "string", required: true },
      site: { type: "string" },
      copy: { type: "text" },
      cta: { type: "component", repeatable: false, component: "shared.button-link" },
    },
  },

  "src/components/esg/list-card.json": {
    collectionName: "components_esg_list_cards",
    info: { displayName: "List Card", icon: "bulletList" },
    options: {},
    attributes: {
      title: { type: "string", required: true },
      icon: mediaAttribute,
      items: { type: "component", repeatable: true, component: "shared.text-item" },
    },
  },

  "src/api/home-page/content-types/home-page/schema.json": {
    kind: "singleType",
    collectionName: "home_pages",
    info: {
      singularName: "home-page",
      pluralName: "home-pages",
      displayName: "Home Page",
    },
    options: {},
    pluginOptions: {},
    attributes: {
      hero: { type: "component", repeatable: false, component: "shared.page-hero" },
      trustedBrandsLabel: { type: "string" },
      marqueeLogos: { type: "component", repeatable: true, component: "home.marquee-logo" },
      heroPartners: { type: "component", repeatable: true, component: "home.hero-partner" },
      stats: { type: "component", repeatable: true, component: "shared.stat" },
      problemSection: { type: "component", repeatable: false, component: "home.problem-section" },
      challenges: { type: "component", repeatable: true, component: "home.challenge" },
      solutionsSection: { type: "component", repeatable: false, component: "home.solutions-section" },
      solutions: { type: "component", repeatable: true, component: "home.solution" },
      industriesSection: { type: "component", repeatable: false, component: "home.industries-section" },
      industries: { type: "component", repeatable: true, component: "home.industry" },
      aboutSection: { type: "component", repeatable: false, component: "shared.section-header" },
      aboutTabs: { type: "component", repeatable: true, component: "home.about-tab" },
      partnersSection: { type: "component", repeatable: false, component: "shared.section-header" },
      partners: { type: "component", repeatable: true, component: "home.partnership" },
      deploymentSection: { type: "component", repeatable: false, component: "home.deployment-section" },
      deploymentHighlights: { type: "component", repeatable: true, component: "shared.text-item" },
    },
  },
  "src/api/waste-water-treatment-page/content-types/waste-water-treatment-page/schema.json": {
    kind: "singleType",
    collectionName: "waste_water_treatment_pages",
    info: {
      singularName: "waste-water-treatment-page",
      pluralName: "waste-water-treatment-pages",
      displayName: "Waste Water Treatment Page",
    },
    options: {},
    pluginOptions: {},
    attributes: {
      hero: { type: "component", repeatable: false, component: "shared.page-hero" },
      statsSectionLabel: { type: "string" },
      stats: { type: "component", repeatable: true, component: "shared.stat" },
      epcSection: { type: "component", repeatable: false, component: "wwtp.epc-section" },
      epcFocusAreas: { type: "component", repeatable: true, component: "wwtp.epc-focus-area" },
      electroxSection: { type: "component", repeatable: false, component: "wwtp.electrox-section" },
      electroxProcesses: { type: "component", repeatable: true, component: "wwtp.electrox-process" },
      scaleSection: { type: "component", repeatable: false, component: "wwtp.scale-section" },
      scaleCards: { type: "component", repeatable: true, component: "wwtp.scale-card" },
      ecosystemProducts: { type: "component", repeatable: true, component: "wwtp.ecosystem-product" },
    },
  },
  "src/api/vehicle-washing-page/content-types/vehicle-washing-page/schema.json": {
    kind: "singleType",
    collectionName: "vehicle_washing_pages",
    info: {
      singularName: "vehicle-washing-page",
      pluralName: "vehicle-washing-pages",
      displayName: "Vehicle Washing Page",
    },
    options: {},
    pluginOptions: {},
    attributes: {
      hero: { type: "component", repeatable: false, component: "shared.page-hero" },
      featuresSectionTitle: { type: "string" },
      features: { type: "component", repeatable: true, component: "vehicle.feature" },
      washTypesSectionTitle: { type: "string" },
      washTypes: { type: "component", repeatable: true, component: "vehicle.wash-type" },
      businessModelsSectionTitle: { type: "string" },
      businessModels: { type: "component", repeatable: true, component: "vehicle.business-model" },
      regionalSectionTitle: { type: "string" },
      regionalCards: { type: "component", repeatable: true, component: "vehicle.regional-card" },
    },
  },
  "src/api/esg-platform-page/content-types/esg-platform-page/schema.json": {
    kind: "singleType",
    collectionName: "esg_platform_pages",
    info: {
      singularName: "esg-platform-page",
      pluralName: "esg-platform-pages",
      displayName: "ESG Platform Page",
    },
    options: {},
    pluginOptions: {},
    attributes: {
      hero: { type: "component", repeatable: false, component: "shared.page-hero" },
      cards: { type: "component", repeatable: true, component: "esg.list-card" },
    },
  },
  "src/api/navbar/content-types/navbar/schema.json": {
    kind: "singleType",
    collectionName: "navbars",
    info: {
      singularName: "navbar",
      pluralName: "navbars",
      displayName: "Navbar",
    },
    options: {},
    pluginOptions: {},
    attributes: {
      logo: mediaAttribute,
      logoAlt: { type: "string", default: "BlueVerse" },
      navLinks: { type: "component", repeatable: true, component: "shared.link", required: true },
      cta: { type: "component", repeatable: false, component: "shared.button-link" },
    },
  },
  "src/api/footer/content-types/footer/schema.json": {
    kind: "singleType",
    collectionName: "footers",
    info: {
      singularName: "footer",
      pluralName: "footers",
      displayName: "Footer",
    },
    options: {},
    pluginOptions: {},
    attributes: {
      logo: mediaAttribute,
      navLinks: { type: "component", repeatable: true, component: "shared.link" },
      serviceLinks: { type: "component", repeatable: true, component: "shared.link" },
      copyright: { type: "string", default: "Copyright 2026 BlueVerse CleanTech Pvt. Ltd. All rights reserved." },
      socialLinks: { type: "component", repeatable: true, component: "shared.social-link" },
    },
  },
  "src/api/contact-form/content-types/contact-form/schema.json": {
    kind: "singleType",
    collectionName: "contact_forms",
    info: {
      singularName: "contact-form",
      pluralName: "contact-forms",
      displayName: "Contact Form",
    },
    options: {},
    pluginOptions: {},
    attributes: {
      heading: { type: "string" },
      description: { type: "text" },
      offices: { type: "component", repeatable: true, component: "shared.office" },
      nameField: { type: "component", repeatable: false, component: "shared.text-field" },
      companyField: { type: "component", repeatable: false, component: "shared.text-field" },
      emailField: { type: "component", repeatable: false, component: "shared.text-field" },
      phoneField: { type: "component", repeatable: false, component: "shared.text-field" },
      serviceField: { type: "component", repeatable: false, component: "shared.select-field" },
      messageField: { type: "component", repeatable: false, component: "shared.text-field" },
      submitLabel: { type: "string" },
      submittingLabel: { type: "string" },
      successMessage: { type: "string" },
      errorMessage: { type: "string" },
    },
  },
  "src/api/wwtp-contact-form/content-types/wwtp-contact-form/schema.json": {
    kind: "singleType",
    collectionName: "wwtp_contact_forms",
    info: {
      singularName: "wwtp-contact-form",
      pluralName: "wwtp-contact-forms",
      displayName: "WWTP Contact Form",
    },
    options: {},
    pluginOptions: {},
    attributes: {
      heading: { type: "string" },
      description: { type: "text" },
      offices: { type: "component", repeatable: true, component: "shared.office" },
      nameField: { type: "component", repeatable: false, component: "shared.text-field" },
      companyField: { type: "component", repeatable: false, component: "shared.text-field" },
      emailField: { type: "component", repeatable: false, component: "shared.text-field" },
      phoneField: { type: "component", repeatable: false, component: "shared.text-field" },
      serviceField: { type: "component", repeatable: false, component: "shared.select-field" },
      messageField: { type: "component", repeatable: false, component: "shared.text-field" },
      submitLabel: { type: "string" },
    },
  },
  "src/api/global-setting/content-types/global-setting/schema.json": {
    kind: "singleType",
    collectionName: "global_settings",
    info: {
      singularName: "global-setting",
      pluralName: "global-settings",
      displayName: "Global Setting",
    },
    options: {},
    pluginOptions: {},
    attributes: {
      title: { type: "string", required: true, default: "BlueVerse | Water Infrastructure Landing Page" },
      description: { type: "text", required: true },
      ogTitle: { type: "string" },
      ogDescription: { type: "text" },
      ogImage: mediaAttribute,
      twitterCard: { type: "string" },
    },
  },
};

for (const [relativePath, data] of Object.entries(files)) {
  const fullPath = join(targetRoot, relativePath);
  mkdirSync(join(fullPath, ".."), { recursive: true });
  writeFileSync(fullPath, `${JSON.stringify(data, null, 2)}\n`, "utf8");
  console.log(`Wrote ${fullPath}`);
}
