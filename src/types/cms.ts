export interface CMSMedia {
  id?: number;
  url: string;
  alternativeText?: string;
  width?: number;
  height?: number;
  mime?: string;
  localFallback?: string;
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

export interface HeroContent {
  title: string;
  description: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
}

export interface MarqueeLogo {
  name: string;
  src: string;
  width: number;
  height: number;
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
}

export interface Challenge {
  title: string;
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
}

export interface TimelineEvent {
  year: string;
  description: string;
}

export interface AboutPanel {
  image: string;
  overlayTitle: string;
  overlayDescription: string;
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

export interface DeploymentHighlight {
  text: string;
}

export interface Office {
  title: string;
  address: string;
}

export interface ServiceLink {
  label: string;
}

export interface HomePageContent {
  hero: HeroContent;
  marqueeLogos: MarqueeLogo[];
  heroPartners: Partner[];
  stats: Stat[];
  challenges: Challenge[];
  solutions: Solution[];
  industries: Industry[];
  aboutTabs: AboutTab[];
  partners: Partnership[];
  deploymentHighlights: string[];
  offices: Office[];
  footerServiceLinks: string[];
  navLinks: NavLink[];
}

export interface WastewaterStat {
  value: string;
  label: string;
  icon: string;
}

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

export interface WWTPIndustry {
  title: string;
  image: string;
  points: string[];
}

export interface WWTPContent {
  stats: WastewaterStat[];
  epcFocusAreas: EpcFocusArea[];
  electroxProcesses: ElectroxProcess[];
  scaleCards: ScaleCard[];
  ecosystemProducts: EcosystemProduct[];
  industries: WWTPIndustry[];
  aboutValues: AboutValue[];
  partnerships: Partnership[];
  deploymentHighlights: string[];
  offices: Office[];
  hero: {
    subtitle: string;
    title: string;
    description: string;
    heroImage: string;
  };
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
  features: VehicleWashFeature[];
  washTypes: VehicleWashType[];
  businessModels: VehicleBusinessModel[];
  regionalCards: VehicleRegionalCard[];
}

export interface ESGContent {
  hero: {
    subtitle: string;
    title: string;
    description: string;
    heroImage: string;
  };
  whatItTracks: string[];
  capabilities: string[];
  pricingModel: string[];
}

export interface FooterContent {
  logo: string;
  navLinks: NavLink[];
  serviceLinks: string[];
  copyright: string;
  socialLinks: { platform: string; href: string }[];
}

export interface NavbarContent {
  logo: string;
  logoAlt: string;
  navLinks: NavLink[];
  ctaLabel: string;
}

export interface ContactFormContent {
  heading: string;
  description: string;
  offices: Office[];
  fields: {
    name: { label: string; placeholder: string; required: boolean };
    company: { label: string; placeholder: string; required: boolean };
    email: { label: string; placeholder: string; required: boolean };
    phone: { label: string; placeholder: string; required: boolean };
    service: { label: string; placeholder: string; options: string[] };
    message: { label: string; placeholder: string; required: boolean };
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
    name: { label: string; placeholder: string };
    company: { label: string; placeholder: string };
    email: { label: string; placeholder: string };
    phone: { label: string; placeholder: string };
    service: { label: string; options: string[] };
    message: { label: string; placeholder: string };
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
