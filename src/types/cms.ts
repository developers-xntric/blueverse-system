export interface CMSMedia {
  id?: number;
  url: string;
  alternativeText?: string;
  width?: number;
  height?: number;
  mime?: string;
}

export interface CMSSEO {
  metaTitle?: string;
  metaDescription?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: CMSMedia;
  twitterCard?: string;
  canonicalURL?: string;
  structuredData?: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface ButtonLink {
  label: string;
  href: string;
}

export interface SectionHeaderContent {
  eyebrow?: string;
  title: string;
  description?: string;
}

export interface HeroContent {
  title: string;
  description: string;
  primaryCta: ButtonLink;
  secondaryCta: ButtonLink;
}

export interface MarqueeLogo {
  name: string;
  src: string;
  alt?: string;
  width?: number;
  height?: number;
}

export interface Partner {
  title: string;
  subtitle: string;
  logo: string;
  points: string[];
}

export interface Stat {
  value: string;
  label: string;
  icon?: string;
}

export interface Challenge {
  title: string;
  icon?: string;
  points: string[];
}

export interface Solution {
  title: string;
  description: string;
  image: string;
  href: string;
  icon?: string;
}

export interface Industry {
  title: string;
  image: string;
  points: string[];
  description: string;
  details: string[];
}

export interface AboutValue {
  title: string;
  description: string;
  icon?: string;
}

export interface TimelineEvent {
  year: string;
  description: string;
}

export interface AboutPanel {
  image: string;
  overlayTitle: string;
  overlayDescription: string;
  overlayCta: ButtonLink;
  cards?: AboutValue[];
  heading?: string;
  missionParagraphs?: string[];
  timeline?: TimelineEvent[];
}

export interface AboutTab {
  name: string;
  panel: AboutPanel;
}

export interface Partnership {
  name: string;
  logo: string;
  description: string;
}

export interface Office {
  title: string;
  address: string;
  icon?: string;
}

export interface HomeProblemSection {
  eyebrow?: string;
  title: string;
  ctaText?: string;
  cta?: ButtonLink;
}

export interface HomeSolutionsSection {
  eyebrow?: string;
  title: string;
  summary?: string;
  cta?: ButtonLink;
}

export interface HomeIndustriesSection {
  eyebrow?: string;
  title: string;
  detailEyebrow?: string;
  detailCta?: ButtonLink;
}

export interface DeploymentSectionContent {
  title: string;
  image: string;
}

export interface HomePageContent {
  hero: HeroContent;
  trustedBrandsLabel: string;
  marqueeLogos: MarqueeLogo[];
  heroPartners: Partner[];
  stats: Stat[];
  problemSection: HomeProblemSection;
  challenges: Challenge[];
  solutionsSection: HomeSolutionsSection;
  solutions: Solution[];
  industriesSection: HomeIndustriesSection;
  industries: Industry[];
  aboutSection: SectionHeaderContent;
  aboutTabs: AboutTab[];
  partnersSection: SectionHeaderContent;
  partners: Partnership[];
  deploymentSection: DeploymentSectionContent;
  deploymentHighlights: string[];
}

export type WastewaterStat = Stat;

export interface EpcFocusArea {
  title: string;
  description: string;
  points: string[];
}

export interface ElectroxProcess {
  title: string;
  description: string;
  icon: string;
}

export interface ScaleCard {
  code: string;
  title: string;
  image: string;
  footprint: string;
  stp: string;
  etp: string;
}

export interface EcosystemProduct {
  title: string;
  description: string;
  icon: string;
}

export interface WWTPContent {
  hero: {
    subtitle: string;
    title: string;
    description: string;
    heroImage: string;
  };
  statsSectionLabel: string;
  stats: WastewaterStat[];
  epcSection: {
    title: string;
    ctaText?: string;
    cta?: ButtonLink;
  };
  epcFocusAreas: EpcFocusArea[];
  electroxSection: {
    eyebrow?: string;
    title: string;
    description?: string;
  };
  electroxProcesses: ElectroxProcess[];
  scaleSection: {
    eyebrow?: string;
    title: string;
  };
  scaleCards: ScaleCard[];
  ecosystemProducts: EcosystemProduct[];
}

export interface VehicleWashFeature {
  icon: string;
  description: string;
}

export interface VehicleWashType {
  title: string;
  description: string;
}

export interface VehicleBusinessModel {
  icon: string;
  title: string;
  description: string;
}

export interface VehicleRegionalCard {
  icon: string;
  region: string;
  site: string;
  copy: string;
  cta: string;
  href: string;
}

export interface VehicleWashingContent {
  hero: {
    subtitle: string;
    title: string;
    description: string;
    heroImage: string;
  };
  featuresSectionTitle: string;
  features: VehicleWashFeature[];
  washTypesSectionTitle: string;
  washTypes: VehicleWashType[];
  businessModelsSectionTitle: string;
  businessModels: VehicleBusinessModel[];
  regionalSectionTitle: string;
  regionalCards: VehicleRegionalCard[];
}

export interface ESGListCard {
  title: string;
  icon: string;
  items: string[];
}

export interface ESGContent {
  hero: {
    subtitle: string;
    title: string;
    description: string;
    heroImage: string;
  };
  cards: ESGListCard[];
}

export interface FooterContent {
  logo: string;
  navLinks: NavLink[];
  serviceLinks: NavLink[];
  copyright: string;
  socialLinks: { platform: string; href: string; icon?: string }[];
}

export interface NavbarContent {
  logo: string;
  logoAlt: string;
  navLinks: NavLink[];
  ctaLabel: string;
  ctaHref: string;
}

export interface TextFieldConfig {
  label: string;
  placeholder: string;
  required: boolean;
}

export interface SelectFieldConfig {
  label: string;
  placeholder: string;
  options: string[];
}

export interface ContactFormContent {
  heading: string;
  description: string;
  offices: Office[];
  fields: {
    name: TextFieldConfig;
    company: TextFieldConfig;
    email: TextFieldConfig;
    phone: TextFieldConfig;
    service: SelectFieldConfig;
    message: TextFieldConfig;
  };
  submitLabel: string;
  submittingLabel: string;
  successMessage: string;
  errorMessage: string;
}

export interface WWTPContactFormContent {
  heading: string;
  description: string;
  offices: Office[];
  fields: {
    name: TextFieldConfig;
    company: TextFieldConfig;
    email: TextFieldConfig;
    phone: TextFieldConfig;
    service: SelectFieldConfig;
    message: TextFieldConfig;
  };
  submitLabel: string;
}

export interface SiteMetadata {
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  twitterCard?: string;
}

export interface PageMetadata {
  title: string;
  description: string;
}
