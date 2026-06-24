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
