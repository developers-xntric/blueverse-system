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
  ContactFormContent,
  WWTPContactFormContent,
} from "@/types/cms";

type StrapiRelation<T> = T | null;
type StrapiCollection<T> = T[] | null;

function ensureArray<T>(val: StrapiCollection<T>): T[] {
  return val ?? [];
}

function ensureValue<T>(val: StrapiRelation<T>, fallback: T): T {
  return val ?? fallback;
}

export function transformNavLinks(data: StrapiCollection<{ label?: string; href?: string }>, fallback: NavLink[]): NavLink[] {
  const items = ensureArray(data);
  if (items.length === 0) return fallback;
  return items.map((item, i) => ({
    label: item.label ?? fallback[i]?.label ?? "",
    href: item.href ?? fallback[i]?.href ?? "#",
  }));
}

export function transformHeroContent(data: { title?: string; description?: string; primaryCtaLabel?: string; primaryCtaHref?: string; secondaryCtaLabel?: string; secondaryCtaHref?: string } | null, fallback: HeroContent): HeroContent {
  if (!data) return fallback;
  return {
    title: data.title ?? fallback.title,
    description: data.description ?? fallback.description,
    primaryCta: {
      label: data.primaryCtaLabel ?? fallback.primaryCta.label,
      href: data.primaryCtaHref ?? fallback.primaryCta.href,
    },
    secondaryCta: {
      label: data.secondaryCtaLabel ?? fallback.secondaryCta.label,
      href: data.secondaryCtaHref ?? fallback.secondaryCta.href,
    },
  };
}

export function transformMarqueeLogos(data: StrapiCollection<{ name?: string; src?: string; width?: number; height?: number }>, fallback: MarqueeLogo[]): MarqueeLogo[] {
  const items = ensureArray(data);
  if (items.length === 0) return fallback;
  return items.map((item, i) => ({
    name: item.name ?? fallback[i]?.name ?? "",
    src: item.src ?? fallback[i]?.src ?? "",
    width: item.width ?? fallback[i]?.width ?? 100,
    height: item.height ?? fallback[i]?.height ?? 100,
  }));
}

export function transformPartners(data: StrapiCollection<{ title?: string; subtitle?: string; logo?: string; points?: string[] }>, fallback: Partner[]): Partner[] {
  const items = ensureArray(data);
  if (items.length === 0) return fallback;
  return items.map((item, i) => ({
    title: item.title ?? fallback[i]?.title ?? "",
    subtitle: item.subtitle ?? fallback[i]?.subtitle ?? "",
    logo: item.logo ?? fallback[i]?.logo ?? "",
    points: item.points ?? fallback[i]?.points ?? [],
  }));
}

export function transformStats(data: StrapiCollection<{ value?: string; label?: string }>, fallback: Stat[]): Stat[] {
  const items = ensureArray(data);
  if (items.length === 0) return fallback;
  return items.map((item, i) => ({
    value: item.value ?? fallback[i]?.value ?? "",
    label: item.label ?? fallback[i]?.label ?? "",
  }));
}

export function transformChallenges(data: StrapiCollection<{ title?: string; points?: string[] }>, fallback: Challenge[]): Challenge[] {
  const items = ensureArray(data);
  if (items.length === 0) return fallback;
  return items.map((item, i) => ({
    title: item.title ?? fallback[i]?.title ?? "",
    points: item.points ?? fallback[i]?.points ?? [],
  }));
}

export function transformSolutions(data: StrapiCollection<{ title?: string; description?: string; image?: string; href?: string }>, fallback: Solution[]): Solution[] {
  const items = ensureArray(data);
  if (items.length === 0) return fallback;
  return items.map((item, i) => ({
    title: item.title ?? fallback[i]?.title ?? "",
    description: item.description ?? fallback[i]?.description ?? "",
    image: item.image ?? fallback[i]?.image ?? "",
    href: item.href ?? fallback[i]?.href ?? "/",
    icon: fallback[i]?.icon,
  }));
}

export function transformIndustries(data: StrapiCollection<{ title?: string; image?: string; points?: string[]; description?: string; details?: string[] }>, fallback: Industry[]): Industry[] {
  const items = ensureArray(data);
  if (items.length === 0) return fallback;
  return items.map((item, i) => ({
    title: item.title ?? fallback[i]?.title ?? "",
    image: item.image ?? fallback[i]?.image ?? "",
    points: item.points ?? fallback[i]?.points ?? [],
    description: item.description ?? fallback[i]?.description ?? "",
    details: item.details ?? fallback[i]?.details ?? [],
  }));
}

export function transformAboutTabs(data: StrapiCollection<{ name?: string; panel?: { image?: string; overlayTitle?: string; overlayDescription?: string; cards?: { title?: string; description?: string }[]; heading?: string; missionParagraphs?: string[]; timeline?: { year?: string; description?: string }[] } }>, fallback: AboutTab[]): AboutTab[] {
  const items = ensureArray(data);
  if (items.length === 0) return fallback;
  return items.map((item, i) => ({
    name: item.name ?? fallback[i]?.name ?? "",
    panel: {
      image: item.panel?.image ?? fallback[i]?.panel.image ?? "",
      overlayTitle: item.panel?.overlayTitle ?? fallback[i]?.panel.overlayTitle ?? "",
      overlayDescription: item.panel?.overlayDescription ?? fallback[i]?.panel.overlayDescription ?? "",
      cards: item.panel?.cards?.map((c, ci) => ({
        title: c.title ?? fallback[i]?.panel.cards?.[ci]?.title ?? "",
        description: c.description ?? fallback[i]?.panel.cards?.[ci]?.description ?? "",
      })) ?? fallback[i]?.panel.cards,
      heading: item.panel?.heading ?? fallback[i]?.panel.heading,
      missionParagraphs: item.panel?.missionParagraphs ?? fallback[i]?.panel.missionParagraphs,
      timeline: item.panel?.timeline?.map((t, ti) => ({
        year: t.year ?? fallback[i]?.panel.timeline?.[ti]?.year ?? "",
        description: t.description ?? fallback[i]?.panel.timeline?.[ti]?.description ?? "",
      })) ?? fallback[i]?.panel.timeline,
    },
  }));
}

export function transformPartnerships(data: StrapiCollection<{ name?: string; logo?: string; description?: string }>, fallback: Partnership[]): Partnership[] {
  const items = ensureArray(data);
  if (items.length === 0) return fallback;
  return items.map((item, i) => ({
    name: item.name ?? fallback[i]?.name ?? "",
    logo: item.logo ?? fallback[i]?.logo ?? "",
    description: item.description ?? fallback[i]?.description ?? "",
  }));
}

export function transformOffices(data: StrapiCollection<{ title?: string; address?: string }>, fallback: Office[]): Office[] {
  const items = ensureArray(data);
  if (items.length === 0) return fallback;
  return items.map((item, i) => ({
    title: item.title ?? fallback[i]?.title ?? "",
    address: item.address ?? fallback[i]?.address ?? "",
  }));
}
