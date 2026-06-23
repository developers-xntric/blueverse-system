import { fetchCMS } from "@/cms/fetcher";
import {
  transformAboutTabs,
  transformButtonLink,
  transformChallenges,
  transformContactFields,
  transformDeploymentSection,
  transformEcosystemProducts,
  transformElectroxProcesses,
  transformEpcFocusAreas,
  transformESGCards,
  transformHeroContent,
  transformIndustries,
  transformIndustriesSection,
  transformMarqueeLogos,
  transformNavLinks,
  transformOffices,
  transformPartners,
  transformPartnerships,
  transformProblemSection,
  transformScaleCards,
  transformSectionHeader,
  transformSolutions,
  transformSolutionsSection,
  transformStats,
} from "@/cms/transformers";
import {
  fallbackContactFormContent,
  fallbackESGContent,
  fallbackFooterContent,
  fallbackHomePage,
  fallbackNavbarContent,
  fallbackPageMetadata,
  fallbackSiteMetadata,
  fallbackVehicleWashingContent,
  fallbackWWTPContactFormContent,
  fallbackWWTPContent,
} from "@/cms/fallback-data";
import { getStrapiMediaURL } from "@/lib/cms-helpers";
import type {
  ContactFormContent,
  ESGContent,
  FooterContent,
  HomePageContent,
  NavbarContent,
  PageMetadata,
  SiteMetadata,
  VehicleWashingContent,
  WWTPContactFormContent,
  WWTPContent,
} from "@/types/cms";

function mediaUrl(url?: string): string | undefined {
  return getStrapiMediaURL(url);
}

export async function getHomePageContent(): Promise<HomePageContent> {
  const cms = await fetchCMS<Record<string, unknown>>("home-page", { populate: "deep" });

  if (!cms) return fallbackHomePage;

  return {
    hero: transformHeroContent(cms.hero as never, fallbackHomePage.hero),
    trustedBrandsLabel: (cms.trustedBrandsLabel as string | undefined) ?? fallbackHomePage.trustedBrandsLabel,
    marqueeLogos: transformMarqueeLogos(cms.marqueeLogos as never, fallbackHomePage.marqueeLogos),
    heroPartners: transformPartners(cms.heroPartners as never, fallbackHomePage.heroPartners),
    stats: transformStats(cms.stats as never, fallbackHomePage.stats),
    problemSection: transformProblemSection(cms.problemSection as never, fallbackHomePage.problemSection),
    challenges: transformChallenges(cms.challenges as never, fallbackHomePage.challenges),
    solutionsSection: transformSolutionsSection(cms.solutionsSection as never, fallbackHomePage.solutionsSection),
    solutions: transformSolutions(cms.solutions as never, fallbackHomePage.solutions),
    industriesSection: transformIndustriesSection(cms.industriesSection as never, fallbackHomePage.industriesSection),
    industries: transformIndustries(cms.industries as never, fallbackHomePage.industries),
    aboutSection: transformSectionHeader(cms.aboutSection as never, fallbackHomePage.aboutSection),
    aboutTabs: transformAboutTabs(cms.aboutTabs as never, fallbackHomePage.aboutTabs),
    partnersSection: transformSectionHeader(cms.partnersSection as never, fallbackHomePage.partnersSection),
    partners: transformPartnerships(cms.partners as never, fallbackHomePage.partners),
    deploymentSection: transformDeploymentSection(cms.deploymentSection as never, fallbackHomePage.deploymentSection),
    deploymentHighlights:
      (cms.deploymentHighlights as { text?: string }[] | undefined)?.map((item) => item.text ?? "").filter(Boolean) ??
      fallbackHomePage.deploymentHighlights,
  };
}

export async function getWWTPContent(): Promise<WWTPContent> {
  const cms = await fetchCMS<Record<string, unknown>>("waste-water-treatment-page", { populate: "deep" });

  if (!cms) return fallbackWWTPContent;

  return {
    hero: {
      ...fallbackWWTPContent.hero,
      subtitle: (cms.hero as { subtitle?: string } | undefined)?.subtitle ?? fallbackWWTPContent.hero.subtitle,
      title: (cms.hero as { title?: string } | undefined)?.title ?? fallbackWWTPContent.hero.title,
      description: (cms.hero as { description?: string } | undefined)?.description ?? fallbackWWTPContent.hero.description,
      heroImage:
        mediaUrl((cms.hero as { heroImage?: { url?: string } } | undefined)?.heroImage?.url) ??
        fallbackWWTPContent.hero.heroImage,
    },
    statsSectionLabel: (cms.statsSectionLabel as string | undefined) ?? fallbackWWTPContent.statsSectionLabel,
    stats: transformStats(cms.stats as never, fallbackWWTPContent.stats),
    epcSection: {
      title: ((cms.epcSection as { title?: string } | undefined)?.title) ?? fallbackWWTPContent.epcSection.title,
      ctaText: ((cms.epcSection as { ctaText?: string } | undefined)?.ctaText) ?? fallbackWWTPContent.epcSection.ctaText,
      cta: transformButtonLink((cms.epcSection as { cta?: { label?: string; href?: string } } | undefined)?.cta, fallbackWWTPContent.epcSection.cta ?? { label: "", href: "#" }),
    },
    epcFocusAreas: transformEpcFocusAreas(cms.epcFocusAreas as never, fallbackWWTPContent.epcFocusAreas),
    electroxSection: {
      eyebrow: ((cms.electroxSection as { eyebrow?: string } | undefined)?.eyebrow) ?? fallbackWWTPContent.electroxSection.eyebrow,
      title: ((cms.electroxSection as { title?: string } | undefined)?.title) ?? fallbackWWTPContent.electroxSection.title,
      description: ((cms.electroxSection as { description?: string } | undefined)?.description) ?? fallbackWWTPContent.electroxSection.description,
    },
    electroxProcesses: transformElectroxProcesses(cms.electroxProcesses as never, fallbackWWTPContent.electroxProcesses),
    scaleSection: {
      eyebrow: ((cms.scaleSection as { eyebrow?: string } | undefined)?.eyebrow) ?? fallbackWWTPContent.scaleSection.eyebrow,
      title: ((cms.scaleSection as { title?: string } | undefined)?.title) ?? fallbackWWTPContent.scaleSection.title,
    },
    scaleCards: transformScaleCards(cms.scaleCards as never, fallbackWWTPContent.scaleCards),
    ecosystemProducts: transformEcosystemProducts(cms.ecosystemProducts as never, fallbackWWTPContent.ecosystemProducts),
  };
}

export async function getVehicleWashingContent(): Promise<VehicleWashingContent> {
  const cms = await fetchCMS<Record<string, unknown>>("vehicle-washing-page", { populate: "deep" });

  if (!cms) return fallbackVehicleWashingContent;

  return {
    hero: {
      ...fallbackVehicleWashingContent.hero,
      subtitle: (cms.hero as { subtitle?: string } | undefined)?.subtitle ?? fallbackVehicleWashingContent.hero.subtitle,
      title: (cms.hero as { title?: string } | undefined)?.title ?? fallbackVehicleWashingContent.hero.title,
      description: (cms.hero as { description?: string } | undefined)?.description ?? fallbackVehicleWashingContent.hero.description,
      heroImage:
        mediaUrl((cms.hero as { heroImage?: { url?: string } } | undefined)?.heroImage?.url) ??
        fallbackVehicleWashingContent.hero.heroImage,
    },
    featuresSectionTitle: (cms.featuresSectionTitle as string | undefined) ?? fallbackVehicleWashingContent.featuresSectionTitle,
    features:
      (cms.features as { icon?: { url?: string }; description?: string }[] | undefined)?.map((item, index) => ({
        icon: mediaUrl(item.icon?.url) ?? fallbackVehicleWashingContent.features[index]?.icon ?? "",
        description: item.description ?? fallbackVehicleWashingContent.features[index]?.description ?? "",
      })) ?? fallbackVehicleWashingContent.features,
    washTypesSectionTitle: (cms.washTypesSectionTitle as string | undefined) ?? fallbackVehicleWashingContent.washTypesSectionTitle,
    washTypes:
      (cms.washTypes as { title?: string; description?: string }[] | undefined)?.map((item, index) => ({
        title: item.title ?? fallbackVehicleWashingContent.washTypes[index]?.title ?? "",
        description: item.description ?? fallbackVehicleWashingContent.washTypes[index]?.description ?? "",
      })) ?? fallbackVehicleWashingContent.washTypes,
    businessModelsSectionTitle: (cms.businessModelsSectionTitle as string | undefined) ?? fallbackVehicleWashingContent.businessModelsSectionTitle,
    businessModels:
      (cms.businessModels as { icon?: { url?: string }; title?: string; description?: string }[] | undefined)?.map((item, index) => ({
        icon: mediaUrl(item.icon?.url) ?? fallbackVehicleWashingContent.businessModels[index]?.icon ?? "",
        title: item.title ?? fallbackVehicleWashingContent.businessModels[index]?.title ?? "",
        description: item.description ?? fallbackVehicleWashingContent.businessModels[index]?.description ?? "",
      })) ?? fallbackVehicleWashingContent.businessModels,
    regionalSectionTitle: (cms.regionalSectionTitle as string | undefined) ?? fallbackVehicleWashingContent.regionalSectionTitle,
    regionalCards:
      (cms.regionalCards as { icon?: { url?: string }; region?: string; site?: string; copy?: string; cta?: { label?: string; href?: string } }[] | undefined)?.map((item, index) => ({
        icon: mediaUrl(item.icon?.url) ?? fallbackVehicleWashingContent.regionalCards[index]?.icon ?? "",
        region: item.region ?? fallbackVehicleWashingContent.regionalCards[index]?.region ?? "",
        site: item.site ?? fallbackVehicleWashingContent.regionalCards[index]?.site ?? "",
        copy: item.copy ?? fallbackVehicleWashingContent.regionalCards[index]?.copy ?? "",
        cta: item.cta?.label ?? fallbackVehicleWashingContent.regionalCards[index]?.cta ?? "",
        href: item.cta?.href ?? fallbackVehicleWashingContent.regionalCards[index]?.href ?? "#",
      })) ?? fallbackVehicleWashingContent.regionalCards,
  };
}

export async function getESGContent(): Promise<ESGContent> {
  const cms = await fetchCMS<Record<string, unknown>>("esg-platform-page", { populate: "deep" });

  if (!cms) return fallbackESGContent;

  return {
    hero: {
      ...fallbackESGContent.hero,
      subtitle: (cms.hero as { subtitle?: string } | undefined)?.subtitle ?? fallbackESGContent.hero.subtitle,
      title: (cms.hero as { title?: string } | undefined)?.title ?? fallbackESGContent.hero.title,
      description: (cms.hero as { description?: string } | undefined)?.description ?? fallbackESGContent.hero.description,
      heroImage:
        mediaUrl((cms.hero as { heroImage?: { url?: string } } | undefined)?.heroImage?.url) ??
        fallbackESGContent.hero.heroImage,
    },
    cards: transformESGCards(cms.cards as never, fallbackESGContent.cards),
  };
}

export async function getNavbarContent(): Promise<NavbarContent> {
  const cms = await fetchCMS<Record<string, unknown>>("navbar", { populate: "deep" });

  if (!cms) return fallbackNavbarContent;

  return {
    logo:
      mediaUrl((cms.logo as { url?: string } | undefined)?.url) ?? fallbackNavbarContent.logo,
    logoAlt: (cms.logoAlt as string | undefined) ?? fallbackNavbarContent.logoAlt,
    navLinks: transformNavLinks(cms.navLinks as never, fallbackNavbarContent.navLinks),
    ctaLabel: ((cms.cta as { label?: string } | undefined)?.label) ?? fallbackNavbarContent.ctaLabel,
    ctaHref: ((cms.cta as { href?: string } | undefined)?.href) ?? fallbackNavbarContent.ctaHref,
  };
}

export async function getFooterContent(): Promise<FooterContent> {
  const cms = await fetchCMS<Record<string, unknown>>("footer", { populate: "deep" });

  if (!cms) return fallbackFooterContent;

  return {
    logo:
      mediaUrl((cms.logo as { url?: string } | undefined)?.url) ?? fallbackFooterContent.logo,
    navLinks: transformNavLinks(cms.navLinks as never, fallbackFooterContent.navLinks),
    serviceLinks: transformNavLinks(cms.serviceLinks as never, fallbackFooterContent.serviceLinks),
    copyright: (cms.copyright as string | undefined) ?? fallbackFooterContent.copyright,
    socialLinks:
      (cms.socialLinks as { platform?: string; href?: string; icon?: { url?: string } }[] | undefined)?.map((item, index) => ({
        platform: item.platform ?? fallbackFooterContent.socialLinks[index]?.platform ?? "",
        href: item.href ?? fallbackFooterContent.socialLinks[index]?.href ?? "#",
        icon: mediaUrl(item.icon?.url) ?? fallbackFooterContent.socialLinks[index]?.icon ?? "",
      })) ?? fallbackFooterContent.socialLinks,
  };
}

export async function getContactFormContent(): Promise<ContactFormContent> {
  const cms = await fetchCMS<Record<string, unknown>>("contact-form", { populate: "deep" });

  if (!cms) return fallbackContactFormContent;

  return {
    heading: (cms.heading as string | undefined) ?? fallbackContactFormContent.heading,
    description: (cms.description as string | undefined) ?? fallbackContactFormContent.description,
    offices: transformOffices(cms.offices as never, fallbackContactFormContent.offices),
    fields: transformContactFields(cms as never, fallbackContactFormContent.fields),
    submitLabel: (cms.submitLabel as string | undefined) ?? fallbackContactFormContent.submitLabel,
    submittingLabel: (cms.submittingLabel as string | undefined) ?? fallbackContactFormContent.submittingLabel,
    successMessage: (cms.successMessage as string | undefined) ?? fallbackContactFormContent.successMessage,
    errorMessage: (cms.errorMessage as string | undefined) ?? fallbackContactFormContent.errorMessage,
  };
}

export async function getWWTPContactFormContent(): Promise<WWTPContactFormContent> {
  const cms = await fetchCMS<Record<string, unknown>>("wwtp-contact-form", { populate: "deep" });

  if (!cms) return fallbackWWTPContactFormContent;

  return {
    heading: (cms.heading as string | undefined) ?? fallbackWWTPContactFormContent.heading,
    description: (cms.description as string | undefined) ?? fallbackWWTPContactFormContent.description,
    offices: transformOffices(cms.offices as never, fallbackWWTPContactFormContent.offices),
    fields: transformContactFields(cms as never, fallbackWWTPContactFormContent.fields),
    submitLabel: (cms.submitLabel as string | undefined) ?? fallbackWWTPContactFormContent.submitLabel,
  };
}

export async function getSiteMetadata(): Promise<SiteMetadata> {
  const cms = await fetchCMS<Record<string, unknown>>("global-setting", { populate: "deep" });

  if (!cms) return fallbackSiteMetadata;

  return {
    title: (cms.title as string | undefined) ?? fallbackSiteMetadata.title,
    description: (cms.description as string | undefined) ?? fallbackSiteMetadata.description,
    ogTitle: (cms.ogTitle as string | undefined) ?? fallbackSiteMetadata.ogTitle,
    ogDescription: (cms.ogDescription as string | undefined) ?? fallbackSiteMetadata.ogDescription,
    ogImage:
      mediaUrl((cms.ogImage as { url?: string } | undefined)?.url) ?? fallbackSiteMetadata.ogImage,
    twitterCard: (cms.twitterCard as string | undefined) ?? fallbackSiteMetadata.twitterCard,
  };
}

export function getPageMetadata(page: string): PageMetadata {
  return fallbackPageMetadata[page] ?? fallbackPageMetadata.home;
}
