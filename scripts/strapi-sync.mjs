import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { seedData } from "./strapi-seed-data.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, "..");
const publicDir = path.join(projectRoot, "public");

const baseUrl = process.env.STRAPI_URL ?? process.env.NEXT_PUBLIC_STRAPI_URL;
const apiToken = process.env.STRAPI_API_TOKEN;
const adminEmail = process.env.STRAPI_ADMIN_EMAIL;
const adminPassword = process.env.STRAPI_ADMIN_PASSWORD;
let authToken = apiToken;

if (!baseUrl || (!apiToken && (!adminEmail || !adminPassword))) {
  throw new Error(
    "STRAPI_URL/NEXT_PUBLIC_STRAPI_URL and either STRAPI_API_TOKEN or STRAPI_ADMIN_EMAIL/STRAPI_ADMIN_PASSWORD are required.",
  );
}

const mediaCache = new Map();

function textItems(items = []) {
  return items.map((text) => ({ text }));
}

function extToMime(filename) {
  const ext = path.extname(filename).toLowerCase();

  switch (ext) {
    case ".png":
      return "image/png";
    case ".jpg":
    case ".jpeg":
      return "image/jpeg";
    case ".webp":
      return "image/webp";
    case ".svg":
      return "image/svg+xml";
    case ".gif":
      return "image/gif";
    case ".ico":
      return "image/x-icon";
    default:
      return "application/octet-stream";
  }
}

async function apiRequest(endpoint, options = {}) {
  const auth = options.authToken ?? authToken;
  const response = await fetch(new URL(endpoint, baseUrl), {
    ...options,
    headers: {
      Authorization: `Bearer ${auth}`,
      ...(options.body ? { "Content-Type": "application/json" } : {}),
      ...(options.headers ?? {}),
    },
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`${options.method ?? "GET"} ${endpoint} failed: ${response.status} ${text}`);
  }

  if (response.status === 204) {
    return null;
  }

  return response.json();
}

async function uploadMedia(relativePath, alt = "") {
  if (!relativePath) {
    return null;
  }

  if (mediaCache.has(relativePath)) {
    return mediaCache.get(relativePath);
  }

  const normalizedPath = relativePath.replace(/^\/+/, "");
  const filePath = path.join(publicDir, normalizedPath);
  const buffer = await readFile(filePath);
  const form = new FormData();
  const filename = path.basename(filePath);

  form.append("files", new Blob([buffer], { type: extToMime(filename) }), filename);
  form.append(
    "fileInfo",
    JSON.stringify({
      alternativeText: alt,
      name: filename,
    }),
  );

  const response = await fetch(new URL("/api/upload", baseUrl), {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiToken}`,
    },
    body: form,
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`Upload failed for ${relativePath}: ${response.status} ${text}`);
  }

  const result = await response.json();
  const uploaded = Array.isArray(result) ? result[0] : result?.[0];

  if (!uploaded?.id) {
    throw new Error(`Unexpected upload response for ${relativePath}`);
  }

  mediaCache.set(relativePath, uploaded.id);
  return uploaded.id;
}

async function clearExistingUploads() {
  const files = await apiRequest("/api/upload/files", { authToken: apiToken });
  const list = Array.isArray(files) ? files : files?.results ?? files?.data ?? [];

  for (const file of list) {
    if (file?.id) {
      try {
        await apiRequest(`/api/upload/files/${file.id}`, { method: "DELETE", authToken: apiToken });
      } catch (error) {
        if (!(error instanceof Error) || !error.message.includes(" 404 ")) {
          throw error;
        }
      }
    }
  }
}

async function putSingleType(apiName, data) {
  await apiRequest(`/content-manager/single-types/${encodeURIComponent(apiName)}`, {
    method: "PUT",
    body: JSON.stringify(data),
  });
}

async function loginAsAdmin() {
  const response = await fetch(new URL("/admin/login", baseUrl), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: adminEmail,
      password: adminPassword,
    }),
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`Admin login failed: ${response.status} ${text}`);
  }

  const result = await response.json();
  const token = result?.data?.token ?? result?.data?.accessToken;

  if (!token) {
    throw new Error("Admin login succeeded but no access token was returned.");
  }

  authToken = token;
}

async function buildPayloads() {
  return {
    globalSetting: {
      title: seedData.globalSettings.title,
      description: seedData.globalSettings.description,
      ogTitle: seedData.globalSettings.ogTitle,
      ogDescription: seedData.globalSettings.ogDescription,
      ogImage: await uploadMedia(seedData.globalSettings.ogImage, seedData.globalSettings.ogTitle),
      twitterCard: seedData.globalSettings.twitterCard,
    },
    navbar: {
      logo: await uploadMedia(seedData.navbar.logo, seedData.navbar.logoAlt),
      logoAlt: seedData.navbar.logoAlt,
      navLinks: seedData.navbar.navLinks,
      cta: seedData.navbar.cta,
    },
    footer: {
      logo: await uploadMedia(seedData.footer.logo, "BlueVerse"),
      navLinks: seedData.footer.navLinks,
      serviceLinks: seedData.footer.serviceLinks,
      socialLinks: [],
      copyright: seedData.footer.copyright,
    },
    contactForm: {
      heading: seedData.contactForm.heading,
      description: seedData.contactForm.description,
      emailTitle: seedData.contactForm.emailTitle,
      emailAddress: seedData.contactForm.emailAddress,
      offices: seedData.contactForm.offices,
      nameField: seedData.contactForm.nameField,
      companyField: seedData.contactForm.companyField,
      emailField: seedData.contactForm.emailField,
      phoneField: seedData.contactForm.phoneField,
      serviceField: {
        ...seedData.contactForm.serviceField,
        options: textItems(seedData.contactForm.serviceField.options),
      },
      messageField: seedData.contactForm.messageField,
      submitLabel: seedData.contactForm.submitLabel,
      submittingLabel: seedData.contactForm.submittingLabel,
      successMessage: seedData.contactForm.successMessage,
      errorMessage: seedData.contactForm.errorMessage,
    },
    wwtpContactForm: {
      heading: seedData.wwtpContactForm.heading,
      description: seedData.wwtpContactForm.description,
      emailTitle: seedData.wwtpContactForm.emailTitle,
      emailAddress: seedData.wwtpContactForm.emailAddress,
      offices: seedData.wwtpContactForm.offices,
      nameField: seedData.wwtpContactForm.nameField,
      companyField: seedData.wwtpContactForm.companyField,
      emailField: seedData.wwtpContactForm.emailField,
      phoneField: seedData.wwtpContactForm.phoneField,
      serviceField: {
        ...seedData.wwtpContactForm.serviceField,
        options: textItems(seedData.wwtpContactForm.serviceField.options),
      },
      messageField: seedData.wwtpContactForm.messageField,
      submitLabel: seedData.wwtpContactForm.submitLabel,
    },
    homePage: {
      hero: {
        subtitle: seedData.homePage.hero.subtitle,
        title: seedData.homePage.hero.title,
        description: seedData.homePage.hero.description,
        heroImage: await uploadMedia(seedData.homePage.hero.heroImage, seedData.homePage.hero.title),
        primaryCta: seedData.homePage.hero.primaryCta,
        secondaryCta: seedData.homePage.hero.secondaryCta,
      },
      trustedBrandsLabel: seedData.homePage.trustedBrandsLabel,
      marqueeLogos: await Promise.all(
        seedData.homePage.marqueeLogos.map(async (logo) => ({
          name: logo.name,
          logo: await uploadMedia(logo.logo, logo.name),
        })),
      ),
      heroPartners: await Promise.all(
        seedData.homePage.heroPartners.map(async (partner) => ({
          title: partner.title,
          subtitle: partner.subtitle,
          logo: await uploadMedia(partner.logo, partner.title),
          points: textItems(partner.points),
        })),
      ),
      stats: seedData.homePage.stats,
      problemSection: {
        header: seedData.homePage.problemSection.header,
        ctaText: seedData.homePage.problemSection.ctaText,
        cta: seedData.homePage.problemSection.cta,
      },
      challenges: await Promise.all(
        seedData.homePage.challenges.map(async (challenge) => ({
          title: challenge.title,
          icon: await uploadMedia(challenge.icon, challenge.title),
          points: textItems(challenge.points),
        })),
      ),
      solutionsSection: {
        header: seedData.homePage.solutionsSection.header,
        summary: seedData.homePage.solutionsSection.summary,
        cta: seedData.homePage.solutionsSection.cta,
      },
      solutions: await Promise.all(
        seedData.homePage.solutions.map(async (solution) => ({
          title: solution.title,
          description: solution.description,
          image: await uploadMedia(solution.image, solution.title),
          href: solution.href,
        })),
      ),
      industriesSection: {
        header: seedData.homePage.industriesSection.header,
        detailEyebrow: seedData.homePage.industriesSection.detailEyebrow,
        detailCta: seedData.homePage.industriesSection.detailCta,
      },
      industries: await Promise.all(
        seedData.homePage.industries.map(async (industry) => ({
          title: industry.title,
          image: await uploadMedia(industry.image, industry.title),
          points: textItems(industry.points),
          description: industry.description,
          details: textItems(industry.details),
        })),
      ),
      aboutSection: seedData.homePage.aboutSection,
      aboutTabs: await Promise.all(
        seedData.homePage.aboutTabs.map(async (tab) => ({
          name: tab.name,
          panel: {
            image: await uploadMedia(tab.panel.image, tab.name),
            overlayTitle: tab.panel.overlayTitle,
            overlayDescription: tab.panel.overlayDescription,
            overlayCta: tab.panel.overlayCta,
            heading: tab.panel.heading,
            cards: tab.panel.cards,
            missionParagraphs: textItems(tab.panel.missionParagraphs),
            timeline: tab.panel.timeline,
          },
        })),
      ),
      partnersSection: seedData.homePage.partnersSection,
      partners: await Promise.all(
        seedData.homePage.partners.map(async (partner) => ({
          name: partner.name,
          logo: await uploadMedia(partner.logo, partner.name),
          description: partner.description,
        })),
      ),
      deploymentSection: {
        title: seedData.homePage.deploymentSection.title,
        image: await uploadMedia(seedData.homePage.deploymentSection.image, seedData.homePage.deploymentSection.title),
      },
      deploymentHighlights: textItems(seedData.homePage.deploymentHighlights),
      seo: seedData.homePage.seo,
    },
    wasteWaterTreatmentPage: {
      hero: {
        subtitle: seedData.wasteWaterTreatmentPage.hero.subtitle,
        title: seedData.wasteWaterTreatmentPage.hero.title,
        description: seedData.wasteWaterTreatmentPage.hero.description,
        heroImage: await uploadMedia(seedData.wasteWaterTreatmentPage.hero.heroImage, "WWTP Hero"),
      },
      statsSectionLabel: seedData.wasteWaterTreatmentPage.statsSectionLabel,
      stats: await Promise.all(
        seedData.wasteWaterTreatmentPage.stats.map(async (stat) => ({
          ...stat,
          icon: await uploadMedia(stat.icon, stat.label),
        })),
      ),
      epcSection: seedData.wasteWaterTreatmentPage.epcSection,
      epcFocusAreas: seedData.wasteWaterTreatmentPage.epcFocusAreas.map((area) => ({
        title: area.title,
        description: area.description,
        points: textItems(area.points),
      })),
      electroxSection: seedData.wasteWaterTreatmentPage.electroxSection,
      electroxProcesses: await Promise.all(
        seedData.wasteWaterTreatmentPage.electroxProcesses.map(async (process) => ({
          title: process.title,
          description: process.description,
          icon: await uploadMedia(process.icon, process.title),
        })),
      ),
      scaleSection: seedData.wasteWaterTreatmentPage.scaleSection,
      scaleCards: await Promise.all(
        seedData.wasteWaterTreatmentPage.scaleCards.map(async (card) => ({
          ...card,
          image: await uploadMedia(card.image, card.title),
        })),
      ),
      ecosystemProducts: await Promise.all(
        seedData.wasteWaterTreatmentPage.ecosystemProducts.map(async (product) => ({
          title: product.title,
          description: product.description,
          icon: await uploadMedia(product.icon, product.title),
        })),
      ),
      seo: seedData.wasteWaterTreatmentPage.seo,
    },
    vehicleWashingPage: {
      hero: {
        subtitle: seedData.vehicleWashingPage.hero.subtitle,
        title: seedData.vehicleWashingPage.hero.title,
        description: seedData.vehicleWashingPage.hero.description,
        heroImage: await uploadMedia(seedData.vehicleWashingPage.hero.heroImage, "Vehicle Washing Hero"),
      },
      featuresSectionTitle: seedData.vehicleWashingPage.featuresSectionTitle,
      features: await Promise.all(
        seedData.vehicleWashingPage.features.map(async (feature) => ({
          description: feature.description,
          icon: await uploadMedia(feature.icon, feature.description),
        })),
      ),
      washTypesSectionTitle: seedData.vehicleWashingPage.washTypesSectionTitle,
      washTypes: seedData.vehicleWashingPage.washTypes,
      businessModelsSectionTitle: seedData.vehicleWashingPage.businessModelsSectionTitle,
      businessModels: await Promise.all(
        seedData.vehicleWashingPage.businessModels.map(async (model) => ({
          title: model.title,
          description: model.description,
          icon: await uploadMedia(model.icon, model.title),
        })),
      ),
      regionalSectionTitle: seedData.vehicleWashingPage.regionalSectionTitle,
      regionalCards: await Promise.all(
        seedData.vehicleWashingPage.regionalCards.map(async (card) => ({
          region: card.region,
          site: card.site,
          copy: card.copy,
          icon: await uploadMedia(card.icon, card.region),
          cta: card.cta,
        })),
      ),
      seo: seedData.vehicleWashingPage.seo,
    },
    esgPlatformPage: {
      hero: {
        subtitle: seedData.esgPlatformPage.hero.subtitle,
        title: seedData.esgPlatformPage.hero.title,
        description: seedData.esgPlatformPage.hero.description,
        heroImage: await uploadMedia(seedData.esgPlatformPage.hero.heroImage, "ESG Hero"),
      },
      cards: await Promise.all(
        seedData.esgPlatformPage.cards.map(async (card) => ({
          title: card.title,
          icon: await uploadMedia(card.icon, card.title),
          items: textItems(card.items),
        })),
      ),
      seo: seedData.esgPlatformPage.seo,
    },
  };
}

async function main() {
  if (adminEmail && adminPassword) {
    console.log("Authenticating with Strapi admin...");
    await loginAsAdmin();
  }

  console.log("Clearing existing Strapi uploads...");
  await clearExistingUploads();

  console.log("Uploading media and building content payloads...");
  const payloads = await buildPayloads();

  console.log("Writing single types...");
  await putSingleType("api::global-setting.global-setting", payloads.globalSetting);
  await putSingleType("api::navbar.navbar", payloads.navbar);
  await putSingleType("api::footer.footer", payloads.footer);
  await putSingleType("api::contact-form.contact-form", payloads.contactForm);
  await putSingleType("api::wwtp-contact-form.wwtp-contact-form", payloads.wwtpContactForm);
  await putSingleType("api::home-page.home-page", payloads.homePage);
  await putSingleType("api::waste-water-treatment-page.waste-water-treatment-page", payloads.wasteWaterTreatmentPage);
  await putSingleType("api::vehicle-washing-page.vehicle-washing-page", payloads.vehicleWashingPage);
  await putSingleType("api::esg-platform-page.esg-platform-page", payloads.esgPlatformPage);

  console.log("Strapi sync complete.");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
