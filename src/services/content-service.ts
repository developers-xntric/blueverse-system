import { fetchCMS } from "@/cms/fetcher";
import {
  transformNavLinks,
  transformHeroContent,
  transformMarqueeLogos,
  transformPartners,
  transformStats,
  transformChallenges,
  transformSolutions,
  transformIndustries,
  transformAboutTabs,
  transformPartnerships,
  transformOffices,
} from "@/cms/transformers";
import {
  fallbackHomePage,
  fallbackWWTPContent,
  fallbackVehicleWashingContent,
  fallbackESGContent,
  fallbackNavbarContent,
  fallbackFooterContent,
  fallbackContactFormContent,
  fallbackWWTPContactFormContent,
  fallbackSiteMetadata,
  fallbackPageMetadata,
} from "@/cms/fallback-data";
import type {
  NavLink,
  HeroContent,
  MarqueeLogo,
  Partner,
  Stat,
  Challenge,
  Solution,
  Industry,
  AboutTab,
  Partnership,
  Office,
  HomePageContent,
  WWTPContent,
  VehicleWashingContent,
  ESGContent,
  NavbarContent,
  FooterContent,
  ContactFormContent,
  WWTPContactFormContent,
  SiteMetadata,
  PageMetadata,
} from "@/types/cms";

export async function getHomePageContent(): Promise<HomePageContent> {
  const cms = await fetchCMS<{
    hero?: unknown;
    marqueeLogos?: unknown;
    heroPartners?: unknown;
    stats?: unknown;
    challenges?: unknown;
    solutions?: unknown;
    industries?: unknown;
    aboutTabs?: unknown;
    partners?: unknown;
    deploymentHighlights?: string[];
    offices?: unknown;
    footerServiceLinks?: string[];
    navLinks?: unknown;
  }>("home-page", { populate: "deep" });

  if (!cms) return fallbackHomePage;

  return {
    hero: transformHeroContent(
      cms.hero as { title?: string; description?: string; primaryCtaLabel?: string; primaryCtaHref?: string; secondaryCtaLabel?: string; secondaryCtaHref?: string } | null | undefined ?? null,
      fallbackHomePage.hero,
    ),
    marqueeLogos: transformMarqueeLogos(
      (cms.marqueeLogos as { name?: string; src?: string; width?: number; height?: number }[] | null | undefined) ?? null,
      fallbackHomePage.marqueeLogos,
    ),
    heroPartners: transformPartners(
      (cms.heroPartners as { title?: string; subtitle?: string; logo?: string; points?: string[] }[] | null | undefined) ?? null,
      fallbackHomePage.heroPartners,
    ),
    stats: transformStats(
      (cms.stats as { value?: string; label?: string }[] | null | undefined) ?? null,
      fallbackHomePage.stats,
    ),
    challenges: transformChallenges(
      (cms.challenges as { title?: string; points?: string[] }[] | null | undefined) ?? null,
      fallbackHomePage.challenges,
    ),
    solutions: transformSolutions(
      (cms.solutions as { title?: string; description?: string; image?: string; href?: string }[] | null | undefined) ?? null,
      fallbackHomePage.solutions,
    ),
    industries: transformIndustries(
      (cms.industries as { title?: string; image?: string; points?: string[]; description?: string; details?: string[] }[] | null | undefined) ?? null,
      fallbackHomePage.industries,
    ),
    aboutTabs: transformAboutTabs(
      (cms.aboutTabs as { name?: string; panel?: { image?: string; overlayTitle?: string; overlayDescription?: string; cards?: { title?: string; description?: string }[]; heading?: string; missionParagraphs?: string[]; timeline?: { year?: string; description?: string }[] } }[] | null | undefined) ?? null,
      fallbackHomePage.aboutTabs,
    ),
    partners: transformPartnerships(
      (cms.partners as { name?: string; logo?: string; description?: string }[] | null | undefined) ?? null,
      fallbackHomePage.partners,
    ),
    deploymentHighlights: cms.deploymentHighlights ?? fallbackHomePage.deploymentHighlights,
    offices: transformOffices(
      (cms.offices as { title?: string; address?: string }[] | null | undefined) ?? null,
      fallbackHomePage.offices,
    ),
    footerServiceLinks: cms.footerServiceLinks ?? fallbackHomePage.footerServiceLinks,
    navLinks: transformNavLinks(
      (cms.navLinks as { label?: string; href?: string }[] | null | undefined) ?? null,
      fallbackHomePage.navLinks,
    ),
  };
}

export async function getWWTPContent(): Promise<WWTPContent> {
  const cms = await fetchCMS<{
    stats?: unknown;
    epcFocusAreas?: unknown;
    electroxProcesses?: unknown;
    scaleCards?: unknown;
    ecosystemProducts?: unknown;
    industries?: unknown;
    aboutValues?: unknown;
    partnerships?: unknown;
    deploymentHighlights?: string[];
    offices?: unknown;
    hero?: { subtitle?: string; title?: string; description?: string; heroImage?: string };
  }>("waste-water-treatment-page", { populate: "deep" });

  if (!cms) return fallbackWWTPContent;

  return {
    stats: (cms.stats ?? fallbackWWTPContent.stats) as typeof fallbackWWTPContent.stats,
    epcFocusAreas: (cms.epcFocusAreas ?? fallbackWWTPContent.epcFocusAreas) as typeof fallbackWWTPContent.epcFocusAreas,
    electroxProcesses: (cms.electroxProcesses ?? fallbackWWTPContent.electroxProcesses) as typeof fallbackWWTPContent.electroxProcesses,
    scaleCards: (cms.scaleCards ?? fallbackWWTPContent.scaleCards) as typeof fallbackWWTPContent.scaleCards,
    ecosystemProducts: (cms.ecosystemProducts ?? fallbackWWTPContent.ecosystemProducts) as typeof fallbackWWTPContent.ecosystemProducts,
    industries: (cms.industries ?? fallbackWWTPContent.industries) as typeof fallbackWWTPContent.industries,
    aboutValues: (cms.aboutValues ?? fallbackWWTPContent.aboutValues) as typeof fallbackWWTPContent.aboutValues,
    partnerships: (cms.partnerships ?? fallbackWWTPContent.partnerships) as typeof fallbackWWTPContent.partnerships,
    deploymentHighlights: cms.deploymentHighlights ?? fallbackWWTPContent.deploymentHighlights,
    offices: (cms.offices ?? fallbackWWTPContent.offices) as typeof fallbackWWTPContent.offices,
    hero: { ...fallbackWWTPContent.hero, ...cms.hero },
  };
}

export async function getVehicleWashingContent(): Promise<VehicleWashingContent> {
  const cms = await fetchCMS<{
    hero?: { subtitle?: string; title?: string; description?: string; heroImage?: string };
    features?: { icon?: string; description?: string }[];
    washTypes?: { title?: string; description?: string }[];
    businessModels?: { icon?: string; title?: string; description?: string }[];
    regionalCards?: { icon?: string; region?: string; site?: string; copy?: string; cta?: string; href?: string }[];
  }>("vehicle-washing-page", { populate: "deep" });

  if (!cms) return fallbackVehicleWashingContent;

  return {
    hero: { ...fallbackVehicleWashingContent.hero, ...cms.hero },
    features: (cms.features ?? fallbackVehicleWashingContent.features) as typeof fallbackVehicleWashingContent.features,
    washTypes: (cms.washTypes ?? fallbackVehicleWashingContent.washTypes) as typeof fallbackVehicleWashingContent.washTypes,
    businessModels: (cms.businessModels ?? fallbackVehicleWashingContent.businessModels) as typeof fallbackVehicleWashingContent.businessModels,
    regionalCards: (cms.regionalCards ?? fallbackVehicleWashingContent.regionalCards) as typeof fallbackVehicleWashingContent.regionalCards,
  };
}

export async function getESGContent(): Promise<ESGContent> {
  const cms = await fetchCMS<{
    hero?: { subtitle?: string; title?: string; description?: string; heroImage?: string };
    whatItTracks?: string[];
    capabilities?: string[];
    pricingModel?: string[];
  }>("esg-platform-page", { populate: "deep" });

  if (!cms) return fallbackESGContent;

  return {
    hero: { ...fallbackESGContent.hero, ...cms.hero },
    whatItTracks: cms.whatItTracks ?? fallbackESGContent.whatItTracks,
    capabilities: cms.capabilities ?? fallbackESGContent.capabilities,
    pricingModel: cms.pricingModel ?? fallbackESGContent.pricingModel,
  } as ESGContent;
}

export async function getNavbarContent(): Promise<NavbarContent> {
  const cms = await fetchCMS<{
    logo?: string;
    logoAlt?: string;
    navLinks?: { label?: string; href?: string }[];
    ctaLabel?: string;
  }>("navbar", { populate: "deep" });

  if (!cms) return fallbackNavbarContent;

  return {
    logo: cms.logo ?? fallbackNavbarContent.logo,
    logoAlt: cms.logoAlt ?? fallbackNavbarContent.logoAlt,
    navLinks: transformNavLinks(cms.navLinks as { label?: string; href?: string }[] | null ?? null, fallbackNavbarContent.navLinks),
    ctaLabel: cms.ctaLabel ?? fallbackNavbarContent.ctaLabel,
  } as typeof fallbackNavbarContent;
}

export async function getFooterContent(): Promise<FooterContent> {
  const cms = await fetchCMS<{
    logo?: string;
    navLinks?: { label?: string; href?: string }[];
    serviceLinks?: string[];
    copyright?: string;
    socialLinks?: { platform?: string; href?: string }[];
  }>("footer", { populate: "deep" });

  if (!cms) return fallbackFooterContent;

  return {
    logo: cms.logo ?? fallbackFooterContent.logo,
    navLinks: transformNavLinks(cms.navLinks as { label?: string; href?: string }[] | null ?? null, fallbackFooterContent.navLinks),
    serviceLinks: cms.serviceLinks ?? fallbackFooterContent.serviceLinks,
    copyright: cms.copyright ?? fallbackFooterContent.copyright,
    socialLinks: (cms.socialLinks ?? fallbackFooterContent.socialLinks) as typeof fallbackFooterContent.socialLinks,
  };
}

export async function getContactFormContent(): Promise<ContactFormContent> {
  const cms = await fetchCMS<{
    heading?: string;
    description?: string;
    offices?: { title?: string; address?: string }[];
    fields?: Record<string, unknown>;
    submitLabel?: string;
    submittingLabel?: string;
    successMessage?: string;
    errorMessage?: string;
  }>("contact-form", { populate: "deep" });

  if (!cms) return fallbackContactFormContent;

  const offices = cms.offices
    ? cms.offices.map((o, i) => ({
        title: o.title ?? fallbackContactFormContent.offices[i]?.title ?? "",
        address: o.address ?? fallbackContactFormContent.offices[i]?.address ?? "",
      }))
    : fallbackContactFormContent.offices;

  return {
    heading: cms.heading ?? fallbackContactFormContent.heading,
    description: cms.description ?? fallbackContactFormContent.description,
    offices,
    fields: fallbackContactFormContent.fields,
    submitLabel: cms.submitLabel ?? fallbackContactFormContent.submitLabel,
    submittingLabel: cms.submittingLabel ?? fallbackContactFormContent.submittingLabel,
    successMessage: cms.successMessage ?? fallbackContactFormContent.successMessage,
    errorMessage: cms.errorMessage ?? fallbackContactFormContent.errorMessage,
  } as typeof fallbackContactFormContent;
}

export async function getWWTPContactFormContent(): Promise<WWTPContactFormContent> {
  const cms = await fetchCMS<{
    heading?: string;
    description?: string;
    offices?: { title?: string; address?: string }[];
    submitLabel?: string;
  }>("wwtp-contact-form", { populate: "deep" });

  if (!cms) return fallbackWWTPContactFormContent;

  return {
    heading: cms.heading ?? fallbackWWTPContactFormContent.heading,
    description: cms.description ?? fallbackWWTPContactFormContent.description,
    offices: (cms.offices?.map((o, i) => ({
      title: o.title ?? fallbackWWTPContactFormContent.offices[i]?.title ?? "",
      address: o.address ?? fallbackWWTPContactFormContent.offices[i]?.address ?? "",
    })) ?? fallbackWWTPContactFormContent.offices) as typeof fallbackWWTPContactFormContent.offices,
    fields: fallbackWWTPContactFormContent.fields,
    submitLabel: cms.submitLabel ?? fallbackWWTPContactFormContent.submitLabel,
  } as typeof fallbackWWTPContactFormContent;
}

export async function getSiteMetadata(): Promise<SiteMetadata> {
  const cms = await fetchCMS<{
    title?: string;
    description?: string;
    ogTitle?: string;
    ogDescription?: string;
    ogImage?: string;
    twitterCard?: string;
  }>("global-setting");

  if (!cms) return fallbackSiteMetadata;

  return {
    title: cms.title ?? fallbackSiteMetadata.title,
    description: cms.description ?? fallbackSiteMetadata.description,
    ogTitle: cms.ogTitle ?? fallbackSiteMetadata.ogTitle,
    ogDescription: cms.ogDescription ?? fallbackSiteMetadata.ogDescription,
    ogImage: cms.ogImage ?? fallbackSiteMetadata.ogImage,
    twitterCard: cms.twitterCard ?? fallbackSiteMetadata.twitterCard,
  };
}

export function getPageMetadata(page: string): PageMetadata {
  return fallbackPageMetadata[page] ?? fallbackPageMetadata.home;
}
