type StrapiEntity = Record<string, unknown> & {
  id?: number;
  documentId?: string;
  attributes?: Record<string, unknown>;
};

export type MediaAsset = {
  url: string;
  alt: string;
};

export type LinkItem = {
  label: string;
  href: string;
};

export type ButtonLink = LinkItem;

export type SectionHeader = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export type SeoData = {
  title?: string;
  description?: string;
};

export type NavbarData = {
  logo: MediaAsset | null;
  logoAlt: string;
  navLinks: LinkItem[];
  cta: ButtonLink | null;
};

export type FooterData = {
  logo: MediaAsset | null;
  navLinks: LinkItem[];
  serviceLinks: LinkItem[];
  copyright: string;
  socialLinks: Array<{
    platform: string;
    href: string;
    icon: MediaAsset | null;
  }>;
};

export type GlobalSettingsData = {
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage: MediaAsset | null;
  twitterCard?: string;
};

export type HomePageData = {
  seo?: SeoData;
  hero: {
    subtitle?: string;
    title: string;
    description?: string;
    heroImage: MediaAsset | null;
    primaryCta: ButtonLink | null;
    secondaryCta: ButtonLink | null;
  };
  trustedBrandsLabel: string;
  marqueeLogos: Array<MediaAsset & { name: string }>;
  heroPartners: Array<{
    title: string;
    subtitle?: string;
    logo: MediaAsset | null;
    points: string[];
  }>;
  stats: Array<{
    value: string;
    label: string;
    icon: MediaAsset | null;
  }>;
  problemSection: {
    header: SectionHeader;
    ctaText?: string;
    cta: ButtonLink | null;
  };
  challenges: Array<{
    title: string;
    icon: MediaAsset | null;
    points: string[];
  }>;
  solutionsSection: {
    header: SectionHeader;
    summary?: string;
    cta: ButtonLink | null;
  };
  solutions: Array<{
    title: string;
    description?: string;
    image: MediaAsset | null;
    href: string;
    icon: MediaAsset | null;
  }>;
  industriesSection: {
    header: SectionHeader;
    detailEyebrow?: string;
    detailCta: ButtonLink | null;
  };
  industries: Array<{
    title: string;
    image: MediaAsset | null;
    points: string[];
    description?: string;
    details: string[];
  }>;
  aboutSection: SectionHeader;
  aboutTabs: Array<{
    name: string;
    panel: {
      image: MediaAsset | null;
      overlayTitle?: string;
      overlayDescription?: string;
      overlayCta: ButtonLink | null;
      heading?: string;
      cards: Array<{
        title: string;
        description?: string;
        icon: MediaAsset | null;
      }>;
      missionParagraphs: string[];
      timeline: Array<{
        year: string;
        description: string;
      }>;
    };
  }>;
  partnersSection: SectionHeader;
  partners: Array<{
    name: string;
    logo: MediaAsset | null;
    description?: string;
  }>;
  deploymentSection: {
    title: string;
    image: MediaAsset | null;
  };
  deploymentHighlights: string[];
};

export type ContactFormData = {
  heading: string;
  description?: string;
  emailTitle?: string;
  emailAddress?: string;
  offices: Array<{
    title: string;
    address: string;
    icon: MediaAsset | null;
  }>;
  nameField: {
    label: string;
    placeholder?: string;
    required: boolean;
  };
  companyField: {
    label: string;
    placeholder?: string;
    required: boolean;
  };
  emailField: {
    label: string;
    placeholder?: string;
    required: boolean;
  };
  phoneField: {
    label: string;
    placeholder?: string;
    required: boolean;
  };
  serviceField: {
    label: string;
    placeholder?: string;
    options: string[];
  };
  messageField: {
    label: string;
    placeholder?: string;
    required: boolean;
  };
  submitLabel: string;
  submittingLabel?: string;
  successMessage?: string;
  errorMessage?: string;
};

export type WasteWaterTreatmentPageData = {
  seo?: SeoData;
  hero: {
    subtitle?: string;
    title: string;
    description?: string;
    heroImage: MediaAsset | null;
  };
  statsSectionLabel?: string;
  stats: Array<{
    value: string;
    label: string;
    icon: MediaAsset | null;
  }>;
  epcSection: {
    title: string;
    ctaText?: string;
    cta: ButtonLink | null;
  };
  epcFocusAreas: Array<{
    title: string;
    description?: string;
    points: string[];
  }>;
  electroxSection: {
    eyebrow?: string;
    title: string;
    description?: string;
  };
  electroxProcesses: Array<{
    title: string;
    description?: string;
    icon: MediaAsset | null;
  }>;
  scaleSection: {
    eyebrow?: string;
    title: string;
  };
  scaleCards: Array<{
    code: string;
    title: string;
    image: MediaAsset | null;
    footprint?: string;
    stp?: string;
    etp?: string;
  }>;
  ecosystemProducts: Array<{
    title: string;
    description?: string;
    icon: MediaAsset | null;
  }>;
};

export type VehicleWashingPageData = {
  seo?: SeoData;
  hero: {
    subtitle?: string;
    title: string;
    description?: string;
    heroImage: MediaAsset | null;
  };
  featuresSectionTitle: string;
  features: Array<{
    description: string;
    icon: MediaAsset | null;
  }>;
  washTypesSectionTitle: string;
  washTypes: Array<{
    title: string;
    description?: string;
  }>;
  businessModelsSectionTitle: string;
  businessModels: Array<{
    title: string;
    description?: string;
    icon: MediaAsset | null;
  }>;
  regionalSectionTitle: string;
  regionalCards: Array<{
    region: string;
    site?: string;
    copy?: string;
    icon: MediaAsset | null;
    cta: ButtonLink | null;
  }>;
};

export type EsgPlatformPageData = {
  seo?: SeoData;
  hero: {
    subtitle?: string;
    title: string;
    description?: string;
    heroImage: MediaAsset | null;
  };
  cards: Array<{
    title: string;
    icon: MediaAsset | null;
    items: string[];
  }>;
};

const STRAPI_URL = process.env.STRAPI_URL ?? process.env.NEXT_PUBLIC_STRAPI_URL;
const STRAPI_TOKEN = process.env.STRAPI_API_TOKEN;
const STRAPI_ADMIN_EMAIL = process.env.STRAPI_ADMIN_EMAIL;
const STRAPI_ADMIN_PASSWORD = process.env.STRAPI_ADMIN_PASSWORD;

let adminTokenPromise: Promise<string> | null = null;

function normalizeValue<T>(value: T): T {
  if (Array.isArray(value)) {
    return value.map((item) => normalizeValue(item)) as T;
  }

  if (value && typeof value === "object") {
    const record = value as StrapiEntity;

    if ("data" in record && Object.keys(record).length === 1) {
      return normalizeValue(record.data as T);
    }

    const base =
      record.attributes && typeof record.attributes === "object"
        ? { id: record.id, documentId: record.documentId, ...record.attributes }
        : record;

    return Object.fromEntries(
      Object.entries(base).map(([key, nestedValue]) => [key, normalizeValue(nestedValue)]),
    ) as T;
  }

  return value;
}

function toAbsoluteUrl(path: string) {
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }

  if (!STRAPI_URL) {
    throw new Error("STRAPI_URL or NEXT_PUBLIC_STRAPI_URL is required.");
  }

  return new URL(path, STRAPI_URL).toString();
}

function mediaAsset(value: unknown): MediaAsset | null {
  if (!value || Array.isArray(value)) {
    return null;
  }

  const item = normalizeValue(value as Record<string, unknown>) as Record<string, unknown>;
  const url = typeof item.url === "string" ? item.url : null;

  if (!url) {
    return null;
  }

  return {
    url: toAbsoluteUrl(url),
    alt:
      typeof item.alternativeText === "string"
        ? item.alternativeText
        : typeof item.name === "string"
          ? item.name
          : "",
  };
}

function readTextItems(value: unknown) {
  if (!Array.isArray(value)) {
    return [];
  }

  return value
    .map((item) => {
      const entry = normalizeValue(item as Record<string, unknown>) as Record<string, unknown>;
      return typeof entry.text === "string" ? entry.text : "";
    })
    .filter(Boolean);
}

function readLink(value: unknown): ButtonLink | null {
  if (!value || Array.isArray(value)) {
    return null;
  }

  const item = normalizeValue(value as Record<string, unknown>) as Record<string, unknown>;

  if (typeof item.label !== "string" || typeof item.href !== "string") {
    return null;
  }

  return { label: item.label, href: item.href };
}

function readHeader(value: unknown): SectionHeader {
  const item = (value ? normalizeValue(value as Record<string, unknown>) : {}) as Record<string, unknown>;

  return {
    eyebrow: typeof item.eyebrow === "string" ? item.eyebrow : undefined,
    title: typeof item.title === "string" ? item.title : "",
    description: typeof item.description === "string" ? item.description : undefined,
  };
}

function readTextField(value: unknown) {
  const item = (value ? normalizeValue(value as Record<string, unknown>) : {}) as Record<string, unknown>;

  return {
    label: typeof item.label === "string" ? item.label : "",
    placeholder: typeof item.placeholder === "string" ? item.placeholder : undefined,
    required: Boolean(item.required),
  };
}

async function getAdminToken() {
  if (!STRAPI_URL || !STRAPI_ADMIN_EMAIL || !STRAPI_ADMIN_PASSWORD) {
    throw new Error("STRAPI admin credentials are required for admin fallback requests.");
  }

  if (!adminTokenPromise) {
    adminTokenPromise = fetch(`${STRAPI_URL}/admin/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: STRAPI_ADMIN_EMAIL,
        password: STRAPI_ADMIN_PASSWORD,
      }),
    }).then(async (response) => {
      if (!response.ok) {
        throw new Error(`Strapi admin login failed: ${response.status}`);
      }

      const json = (await response.json()) as {
        data?: { token?: string; accessToken?: string };
      };
      const token = json.data?.token ?? json.data?.accessToken;

      if (!token) {
        throw new Error("Strapi admin login did not return an access token.");
      }

      return token;
    });
  }

  return adminTokenPromise;
}

async function fetchSingle<T>(path: string, query: string, adminUid: string) {
  if (!STRAPI_URL) {
    throw new Error("STRAPI_URL or NEXT_PUBLIC_STRAPI_URL is required.");
  }

  const response = await fetch(`${STRAPI_URL}/api/${path}${query ? `?${query}` : ""}`, {
    cache: "no-store",
    headers: {
      ...(STRAPI_TOKEN ? { Authorization: `Bearer ${STRAPI_TOKEN}` } : {}),
    },
  });

  if (response.status === 404 && STRAPI_ADMIN_EMAIL && STRAPI_ADMIN_PASSWORD) {
    const adminToken = await getAdminToken();
    const adminResponse = await fetch(
      `${STRAPI_URL}/content-manager/single-types/${encodeURIComponent(adminUid)}${query ? `?${query}` : ""}`,
      {
        cache: "no-store",
        headers: {
          Authorization: `Bearer ${adminToken}`,
        },
      },
    );

    if (!adminResponse.ok) {
      throw new Error(`Strapi admin fallback failed for ${adminUid}: ${adminResponse.status}`);
    }

    const json = (await adminResponse.json()) as { data: T };
    return normalizeValue(json.data);
  }

  if (!response.ok) {
    throw new Error(`Strapi request failed for ${path}: ${response.status}`);
  }

  const json = (await response.json()) as { data: T };
  return normalizeValue(json.data);
}

const GLOBAL_SETTINGS_QUERY = [
  "populate[ogImage]=true",
].join("&");

const NAVBAR_QUERY = [
  "populate[logo]=true",
  "populate[navLinks]=true",
  "populate[cta]=true",
].join("&");

const FOOTER_QUERY = [
  "populate[logo]=true",
  "populate[navLinks]=true",
  "populate[serviceLinks]=true",
  "populate[socialLinks][populate]=*",
].join("&");

const HOME_PAGE_QUERY = [
  "populate[hero][populate]=*",
  "populate[marqueeLogos][populate]=*",
  "populate[heroPartners][populate]=*",
  "populate[stats][populate]=*",
  "populate[problemSection][populate]=*",
  "populate[challenges][populate]=*",
  "populate[solutionsSection][populate]=*",
  "populate[solutions][populate]=*",
  "populate[industriesSection][populate]=*",
  "populate[industries][populate]=*",
  "populate[aboutSection][populate]=*",
  "populate[aboutTabs][populate][panel][populate]=*",
  "populate[partnersSection][populate]=*",
  "populate[partners][populate]=*",
  "populate[deploymentSection][populate]=*",
  "populate[deploymentHighlights][populate]=*",
  "populate[seo][populate]=*",
].join("&");

const CONTACT_FORM_QUERY = [
  "populate[offices][populate]=*",
  "populate[nameField]=true",
  "populate[companyField]=true",
  "populate[emailField]=true",
  "populate[phoneField]=true",
  "populate[serviceField][populate]=*",
  "populate[messageField]=true",
].join("&");

const WWTP_PAGE_QUERY = [
  "populate[hero][populate]=*",
  "populate[stats][populate]=*",
  "populate[epcSection][populate]=*",
  "populate[epcFocusAreas][populate]=*",
  "populate[electroxSection][populate]=*",
  "populate[electroxProcesses][populate]=*",
  "populate[scaleSection][populate]=*",
  "populate[scaleCards][populate]=*",
  "populate[ecosystemProducts][populate]=*",
  "populate[seo][populate]=*",
].join("&");

const VEHICLE_PAGE_QUERY = [
  "populate[hero][populate]=*",
  "populate[features][populate]=*",
  "populate[washTypes][populate]=*",
  "populate[businessModels][populate]=*",
  "populate[regionalCards][populate]=*",
  "populate[seo][populate]=*",
].join("&");

const ESG_PAGE_QUERY = [
  "populate[hero][populate]=*",
  "populate[cards][populate]=*",
  "populate[seo][populate]=*",
].join("&");

export async function getGlobalSettings(): Promise<GlobalSettingsData> {
  const data =
    (await fetchSingle<Record<string, unknown>>(
      "global-setting",
      GLOBAL_SETTINGS_QUERY,
      "api::global-setting.global-setting",
    )) ?? {};

  return {
    title: typeof data.title === "string" ? data.title : "",
    description: typeof data.description === "string" ? data.description : "",
    ogTitle: typeof data.ogTitle === "string" ? data.ogTitle : undefined,
    ogDescription: typeof data.ogDescription === "string" ? data.ogDescription : undefined,
    ogImage: mediaAsset(data.ogImage),
    twitterCard: typeof data.twitterCard === "string" ? data.twitterCard : undefined,
  };
}

export async function getNavbar(): Promise<NavbarData> {
  const data =
    (await fetchSingle<Record<string, unknown>>("navbar", NAVBAR_QUERY, "api::navbar.navbar")) ?? {};

  return {
    logo: mediaAsset(data.logo),
    logoAlt: typeof data.logoAlt === "string" ? data.logoAlt : "BlueVerse",
    navLinks: Array.isArray(data.navLinks)
      ? data.navLinks
          .map((item) => readLink(item))
          .filter((item): item is LinkItem => item !== null)
      : [],
    cta: readLink(data.cta),
  };
}

export async function getFooter(): Promise<FooterData> {
  const data =
    (await fetchSingle<Record<string, unknown>>("footer", FOOTER_QUERY, "api::footer.footer")) ?? {};

  return {
    logo: mediaAsset(data.logo),
    navLinks: Array.isArray(data.navLinks)
      ? data.navLinks
          .map((item) => readLink(item))
          .filter((item): item is LinkItem => item !== null)
      : [],
    serviceLinks: Array.isArray(data.serviceLinks)
      ? data.serviceLinks
          .map((item) => readLink(item))
          .filter((item): item is LinkItem => item !== null)
      : [],
    copyright: typeof data.copyright === "string" ? data.copyright : "",
    socialLinks: Array.isArray(data.socialLinks)
      ? data.socialLinks.map((item) => {
          const entry = normalizeValue(item as Record<string, unknown>) as Record<string, unknown>;

          return {
            platform: typeof entry.platform === "string" ? entry.platform : "",
            href: typeof entry.href === "string" ? entry.href : "",
            icon: mediaAsset(entry.icon),
          };
        })
      : [],
  };
}

export async function getHomePage(): Promise<HomePageData> {
  const data =
    (await fetchSingle<Record<string, unknown>>("home-page", HOME_PAGE_QUERY, "api::home-page.home-page")) ?? {};
  const hero = (data.hero ?? {}) as Record<string, unknown>;

  return {
    seo: normalizeValue((data.seo ?? null) as SeoData | null) ?? undefined,
    hero: {
      subtitle: typeof hero.subtitle === "string" ? hero.subtitle : undefined,
      title: typeof hero.title === "string" ? hero.title : "",
      description: typeof hero.description === "string" ? hero.description : undefined,
      heroImage: mediaAsset(hero.heroImage),
      primaryCta: readLink(hero.primaryCta),
      secondaryCta: readLink(hero.secondaryCta),
    },
    trustedBrandsLabel: typeof data.trustedBrandsLabel === "string" ? data.trustedBrandsLabel : "",
    marqueeLogos: Array.isArray(data.marqueeLogos)
      ? data.marqueeLogos.map((item) => {
          const entry = normalizeValue(item as Record<string, unknown>) as Record<string, unknown>;
          return {
            name: typeof entry.name === "string" ? entry.name : "",
            ...(mediaAsset(entry.src ?? entry.image ?? entry.logo) ?? mediaAsset(entry)),
          };
        }).filter((item): item is MediaAsset & { name: string } => Boolean(item?.url))
      : [],
    heroPartners: Array.isArray(data.heroPartners)
      ? data.heroPartners.map((item) => {
          const entry = normalizeValue(item as Record<string, unknown>) as Record<string, unknown>;
          return {
            title: typeof entry.title === "string" ? entry.title : "",
            subtitle: typeof entry.subtitle === "string" ? entry.subtitle : undefined,
            logo: mediaAsset(entry.logo),
            points: readTextItems(entry.points),
          };
        })
      : [],
    stats: Array.isArray(data.stats)
      ? data.stats.map((item) => {
          const entry = normalizeValue(item as Record<string, unknown>) as Record<string, unknown>;
          return {
            value: typeof entry.value === "string" ? entry.value : "",
            label: typeof entry.label === "string" ? entry.label : "",
            icon: mediaAsset(entry.icon),
          };
        })
      : [],
    problemSection: {
      header: readHeader((data.problemSection as Record<string, unknown> | undefined)?.header),
      ctaText:
        typeof (data.problemSection as Record<string, unknown> | undefined)?.ctaText === "string"
          ? ((data.problemSection as Record<string, unknown>).ctaText as string)
          : undefined,
      cta: readLink((data.problemSection as Record<string, unknown> | undefined)?.cta),
    },
    challenges: Array.isArray(data.challenges)
      ? data.challenges.map((item) => {
          const entry = normalizeValue(item as Record<string, unknown>) as Record<string, unknown>;
          return {
            title: typeof entry.title === "string" ? entry.title : "",
            icon: mediaAsset(entry.icon),
            points: readTextItems(entry.points),
          };
        })
      : [],
    solutionsSection: {
      header: readHeader((data.solutionsSection as Record<string, unknown> | undefined)?.header),
      summary:
        typeof (data.solutionsSection as Record<string, unknown> | undefined)?.summary === "string"
          ? ((data.solutionsSection as Record<string, unknown>).summary as string)
          : undefined,
      cta: readLink((data.solutionsSection as Record<string, unknown> | undefined)?.cta),
    },
    solutions: Array.isArray(data.solutions)
      ? data.solutions.map((item) => {
          const entry = normalizeValue(item as Record<string, unknown>) as Record<string, unknown>;
          return {
            title: typeof entry.title === "string" ? entry.title : "",
            description: typeof entry.description === "string" ? entry.description : undefined,
            image: mediaAsset(entry.image),
            href: typeof entry.href === "string" ? entry.href : "",
            icon: mediaAsset(entry.icon),
          };
        })
      : [],
    industriesSection: {
      header: readHeader((data.industriesSection as Record<string, unknown> | undefined)?.header),
      detailEyebrow:
        typeof (data.industriesSection as Record<string, unknown> | undefined)?.detailEyebrow === "string"
          ? ((data.industriesSection as Record<string, unknown>).detailEyebrow as string)
          : undefined,
      detailCta: readLink((data.industriesSection as Record<string, unknown> | undefined)?.detailCta),
    },
    industries: Array.isArray(data.industries)
      ? data.industries.map((item) => {
          const entry = normalizeValue(item as Record<string, unknown>) as Record<string, unknown>;
          return {
            title: typeof entry.title === "string" ? entry.title : "",
            image: mediaAsset(entry.image),
            points: readTextItems(entry.points),
            description: typeof entry.description === "string" ? entry.description : undefined,
            details: readTextItems(entry.details),
          };
        })
      : [],
    aboutSection: readHeader(data.aboutSection),
    aboutTabs: Array.isArray(data.aboutTabs)
      ? data.aboutTabs.map((item) => {
          const entry = normalizeValue(item as Record<string, unknown>) as Record<string, unknown>;
          const panel = (entry.panel ?? {}) as Record<string, unknown>;

          return {
            name: typeof entry.name === "string" ? entry.name : "",
            panel: {
              image: mediaAsset(panel.image),
              overlayTitle: typeof panel.overlayTitle === "string" ? panel.overlayTitle : undefined,
              overlayDescription:
                typeof panel.overlayDescription === "string" ? panel.overlayDescription : undefined,
              overlayCta: readLink(panel.overlayCta),
              heading: typeof panel.heading === "string" ? panel.heading : undefined,
              cards: Array.isArray(panel.cards)
                ? panel.cards.map((card) => {
                    const entryCard = normalizeValue(card as Record<string, unknown>) as Record<string, unknown>;
                    return {
                      title: typeof entryCard.title === "string" ? entryCard.title : "",
                      description:
                        typeof entryCard.description === "string" ? entryCard.description : undefined,
                      icon: mediaAsset(entryCard.icon),
                    };
                  })
                : [],
              missionParagraphs: readTextItems(panel.missionParagraphs),
              timeline: Array.isArray(panel.timeline)
                ? panel.timeline.map((timelineItem) => {
                    const timelineEntry = normalizeValue(
                      timelineItem as Record<string, unknown>,
                    ) as Record<string, unknown>;
                    return {
                      year: typeof timelineEntry.year === "string" ? timelineEntry.year : "",
                      description:
                        typeof timelineEntry.description === "string"
                          ? timelineEntry.description
                          : "",
                    };
                  })
                : [],
            },
          };
        })
      : [],
    partnersSection: readHeader(data.partnersSection),
    partners: Array.isArray(data.partners)
      ? data.partners.map((item) => {
          const entry = normalizeValue(item as Record<string, unknown>) as Record<string, unknown>;
          return {
            name: typeof entry.name === "string" ? entry.name : "",
            logo: mediaAsset(entry.logo),
            description: typeof entry.description === "string" ? entry.description : undefined,
          };
        })
      : [],
    deploymentSection: {
      title:
        typeof (data.deploymentSection as Record<string, unknown> | undefined)?.title === "string"
          ? ((data.deploymentSection as Record<string, unknown>).title as string)
          : "",
      image: mediaAsset((data.deploymentSection as Record<string, unknown> | undefined)?.image),
    },
    deploymentHighlights: readTextItems(data.deploymentHighlights),
  };
}

export async function getContactForm(): Promise<ContactFormData> {
  const data =
    (await fetchSingle<Record<string, unknown>>(
      "contact-form",
      CONTACT_FORM_QUERY,
      "api::contact-form.contact-form",
    )) ?? {};

  return {
    heading: typeof data.heading === "string" ? data.heading : "",
    description: typeof data.description === "string" ? data.description : undefined,
    emailTitle: typeof data.emailTitle === "string" ? data.emailTitle : undefined,
    emailAddress: typeof data.emailAddress === "string" ? data.emailAddress : undefined,
    offices: Array.isArray(data.offices)
      ? data.offices.map((item) => {
          const entry = normalizeValue(item as Record<string, unknown>) as Record<string, unknown>;
          return {
            title: typeof entry.title === "string" ? entry.title : "",
            address: typeof entry.address === "string" ? entry.address : "",
            icon: mediaAsset(entry.icon),
          };
        })
      : [],
    nameField: readTextField(data.nameField),
    companyField: readTextField(data.companyField),
    emailField: readTextField(data.emailField),
    phoneField: readTextField(data.phoneField),
    serviceField: {
      label:
        typeof (data.serviceField as Record<string, unknown> | undefined)?.label === "string"
          ? ((data.serviceField as Record<string, unknown>).label as string)
          : "",
      placeholder:
        typeof (data.serviceField as Record<string, unknown> | undefined)?.placeholder === "string"
          ? ((data.serviceField as Record<string, unknown>).placeholder as string)
          : undefined,
      options: readTextItems((data.serviceField as Record<string, unknown> | undefined)?.options),
    },
    messageField: readTextField(data.messageField),
    submitLabel: typeof data.submitLabel === "string" ? data.submitLabel : "",
    submittingLabel: typeof data.submittingLabel === "string" ? data.submittingLabel : undefined,
    successMessage: typeof data.successMessage === "string" ? data.successMessage : undefined,
    errorMessage: typeof data.errorMessage === "string" ? data.errorMessage : undefined,
  };
}

export async function getWasteWaterTreatmentPage(): Promise<WasteWaterTreatmentPageData> {
  const data =
    (await fetchSingle<Record<string, unknown>>(
      "waste-water-treatment-page",
      WWTP_PAGE_QUERY,
      "api::waste-water-treatment-page.waste-water-treatment-page",
    )) ?? {};
  const hero = (data.hero ?? {}) as Record<string, unknown>;

  return {
    seo: normalizeValue((data.seo ?? null) as SeoData | null) ?? undefined,
    hero: {
      subtitle: typeof hero.subtitle === "string" ? hero.subtitle : undefined,
      title: typeof hero.title === "string" ? hero.title : "",
      description: typeof hero.description === "string" ? hero.description : undefined,
      heroImage: mediaAsset(hero.heroImage),
    },
    statsSectionLabel: typeof data.statsSectionLabel === "string" ? data.statsSectionLabel : undefined,
    stats: Array.isArray(data.stats)
      ? data.stats.map((item) => {
          const entry = normalizeValue(item as Record<string, unknown>) as Record<string, unknown>;
          return {
            value: typeof entry.value === "string" ? entry.value : "",
            label: typeof entry.label === "string" ? entry.label : "",
            icon: mediaAsset(entry.icon),
          };
        })
      : [],
    epcSection: {
      title:
        typeof (data.epcSection as Record<string, unknown> | undefined)?.title === "string"
          ? ((data.epcSection as Record<string, unknown>).title as string)
          : "",
      ctaText:
        typeof (data.epcSection as Record<string, unknown> | undefined)?.ctaText === "string"
          ? ((data.epcSection as Record<string, unknown>).ctaText as string)
          : undefined,
      cta: readLink((data.epcSection as Record<string, unknown> | undefined)?.cta),
    },
    epcFocusAreas: Array.isArray(data.epcFocusAreas)
      ? data.epcFocusAreas.map((item) => {
          const entry = normalizeValue(item as Record<string, unknown>) as Record<string, unknown>;
          return {
            title: typeof entry.title === "string" ? entry.title : "",
            description: typeof entry.description === "string" ? entry.description : undefined,
            points: readTextItems(entry.points),
          };
        })
      : [],
    electroxSection: {
      eyebrow:
        typeof (data.electroxSection as Record<string, unknown> | undefined)?.eyebrow === "string"
          ? ((data.electroxSection as Record<string, unknown>).eyebrow as string)
          : undefined,
      title:
        typeof (data.electroxSection as Record<string, unknown> | undefined)?.title === "string"
          ? ((data.electroxSection as Record<string, unknown>).title as string)
          : "",
      description:
        typeof (data.electroxSection as Record<string, unknown> | undefined)?.description === "string"
          ? ((data.electroxSection as Record<string, unknown>).description as string)
          : undefined,
    },
    electroxProcesses: Array.isArray(data.electroxProcesses)
      ? data.electroxProcesses.map((item) => {
          const entry = normalizeValue(item as Record<string, unknown>) as Record<string, unknown>;
          return {
            title: typeof entry.title === "string" ? entry.title : "",
            description: typeof entry.description === "string" ? entry.description : undefined,
            icon: mediaAsset(entry.icon),
          };
        })
      : [],
    scaleSection: {
      eyebrow:
        typeof (data.scaleSection as Record<string, unknown> | undefined)?.eyebrow === "string"
          ? ((data.scaleSection as Record<string, unknown>).eyebrow as string)
          : undefined,
      title:
        typeof (data.scaleSection as Record<string, unknown> | undefined)?.title === "string"
          ? ((data.scaleSection as Record<string, unknown>).title as string)
          : "",
    },
    scaleCards: Array.isArray(data.scaleCards)
      ? data.scaleCards.map((item) => {
          const entry = normalizeValue(item as Record<string, unknown>) as Record<string, unknown>;
          return {
            code: typeof entry.code === "string" ? entry.code : "",
            title: typeof entry.title === "string" ? entry.title : "",
            image: mediaAsset(entry.image),
            footprint: typeof entry.footprint === "string" ? entry.footprint : undefined,
            stp: typeof entry.stp === "string" ? entry.stp : undefined,
            etp: typeof entry.etp === "string" ? entry.etp : undefined,
          };
        })
      : [],
    ecosystemProducts: Array.isArray(data.ecosystemProducts)
      ? data.ecosystemProducts.map((item) => {
          const entry = normalizeValue(item as Record<string, unknown>) as Record<string, unknown>;
          return {
            title: typeof entry.title === "string" ? entry.title : "",
            description: typeof entry.description === "string" ? entry.description : undefined,
            icon: mediaAsset(entry.icon),
          };
        })
      : [],
  };
}

export async function getVehicleWashingPage(): Promise<VehicleWashingPageData> {
  const data =
    (await fetchSingle<Record<string, unknown>>(
      "vehicle-washing-page",
      VEHICLE_PAGE_QUERY,
      "api::vehicle-washing-page.vehicle-washing-page",
    )) ?? {};
  const hero = (data.hero ?? {}) as Record<string, unknown>;

  return {
    seo: normalizeValue((data.seo ?? null) as SeoData | null) ?? undefined,
    hero: {
      subtitle: typeof hero.subtitle === "string" ? hero.subtitle : undefined,
      title: typeof hero.title === "string" ? hero.title : "",
      description: typeof hero.description === "string" ? hero.description : undefined,
      heroImage: mediaAsset(hero.heroImage),
    },
    featuresSectionTitle: typeof data.featuresSectionTitle === "string" ? data.featuresSectionTitle : "",
    features: Array.isArray(data.features)
      ? data.features.map((item) => {
          const entry = normalizeValue(item as Record<string, unknown>) as Record<string, unknown>;
          return {
            description: typeof entry.description === "string" ? entry.description : "",
            icon: mediaAsset(entry.icon),
          };
        })
      : [],
    washTypesSectionTitle: typeof data.washTypesSectionTitle === "string" ? data.washTypesSectionTitle : "",
    washTypes: Array.isArray(data.washTypes)
      ? data.washTypes.map((item) => {
          const entry = normalizeValue(item as Record<string, unknown>) as Record<string, unknown>;
          return {
            title: typeof entry.title === "string" ? entry.title : "",
            description: typeof entry.description === "string" ? entry.description : undefined,
          };
        })
      : [],
    businessModelsSectionTitle:
      typeof data.businessModelsSectionTitle === "string" ? data.businessModelsSectionTitle : "",
    businessModels: Array.isArray(data.businessModels)
      ? data.businessModels.map((item) => {
          const entry = normalizeValue(item as Record<string, unknown>) as Record<string, unknown>;
          return {
            title: typeof entry.title === "string" ? entry.title : "",
            description: typeof entry.description === "string" ? entry.description : undefined,
            icon: mediaAsset(entry.icon),
          };
        })
      : [],
    regionalSectionTitle: typeof data.regionalSectionTitle === "string" ? data.regionalSectionTitle : "",
    regionalCards: Array.isArray(data.regionalCards)
      ? data.regionalCards.map((item) => {
          const entry = normalizeValue(item as Record<string, unknown>) as Record<string, unknown>;
          return {
            region: typeof entry.region === "string" ? entry.region : "",
            site: typeof entry.site === "string" ? entry.site : undefined,
            copy: typeof entry.copy === "string" ? entry.copy : undefined,
            icon: mediaAsset(entry.icon),
            cta: readLink(entry.cta),
          };
        })
      : [],
  };
}

export async function getEsgPlatformPage(): Promise<EsgPlatformPageData> {
  const data =
    (await fetchSingle<Record<string, unknown>>(
      "esg-platform-page",
      ESG_PAGE_QUERY,
      "api::esg-platform-page.esg-platform-page",
    )) ?? {};
  const hero = (data.hero ?? {}) as Record<string, unknown>;

  return {
    seo: normalizeValue((data.seo ?? null) as SeoData | null) ?? undefined,
    hero: {
      subtitle: typeof hero.subtitle === "string" ? hero.subtitle : undefined,
      title: typeof hero.title === "string" ? hero.title : "",
      description: typeof hero.description === "string" ? hero.description : undefined,
      heroImage: mediaAsset(hero.heroImage),
    },
    cards: Array.isArray(data.cards)
      ? data.cards.map((item) => {
          const entry = normalizeValue(item as Record<string, unknown>) as Record<string, unknown>;
          return {
            title: typeof entry.title === "string" ? entry.title : "",
            icon: mediaAsset(entry.icon),
            items: readTextItems(entry.items),
          };
        })
      : [],
  };
}
