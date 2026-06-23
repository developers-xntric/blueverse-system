import { getStrapiMediaURL } from "@/lib/cms-helpers";
import type {
  AboutTab,
  AboutValue,
  ButtonLink,
  Challenge,
  ContactFormContent,
  DeploymentSectionContent,
  EpcFocusArea,
  ESGListCard,
  EcosystemProduct,
  ElectroxProcess,
  HomeIndustriesSection,
  HomeProblemSection,
  HomeSolutionsSection,
  Industry,
  MarqueeLogo,
  NavLink,
  Office,
  Partner,
  Partnership,
  ScaleCard,
  SelectFieldConfig,
  SectionHeaderContent,
  Solution,
  Stat,
  TextFieldConfig,
} from "@/types/cms";

type MaybeArray<T> = T[] | null | undefined;
type MaybeObject<T> = T | null | undefined;
type MediaLike = {
  url?: string;
  alternativeText?: string;
  width?: number;
  height?: number;
} | null | undefined;

function asArray<T>(value: MaybeArray<T>): T[] {
  return Array.isArray(value) ? value : [];
}

function mediaSrc(media: MediaLike, fallback = ""): string {
  return getStrapiMediaURL(media?.url) ?? fallback;
}

function textItems(value: MaybeArray<{ text?: string }>, fallback: string[] = []): string[] {
  const items = asArray(value)
    .map((item) => item.text?.trim())
    .filter((item): item is string => !!item);
  return items.length > 0 ? items : fallback;
}

export function transformButtonLink(
  data: MaybeObject<{ label?: string; href?: string }>,
  fallback: ButtonLink,
): ButtonLink {
  return {
    label: data?.label ?? fallback.label,
    href: data?.href ?? fallback.href,
  };
}

export function transformNavLinks(
  data: MaybeArray<{ label?: string; href?: string }>,
  fallback: NavLink[],
): NavLink[] {
  const items = asArray(data);
  if (items.length === 0) return fallback;
  return items.map((item, index) => ({
    label: item.label ?? fallback[index]?.label ?? "",
    href: item.href ?? fallback[index]?.href ?? "#",
  }));
}

export function transformStats(
  data: MaybeArray<{ value?: string; label?: string; icon?: MediaLike }>,
  fallback: Stat[],
): Stat[] {
  const items = asArray(data);
  if (items.length === 0) return fallback;
  return items.map((item, index) => ({
    value: item.value ?? fallback[index]?.value ?? "",
    label: item.label ?? fallback[index]?.label ?? "",
    icon: mediaSrc(item.icon, fallback[index]?.icon ?? ""),
  }));
}

export function transformHeroContent(
  data: MaybeObject<{
    title?: string;
    description?: string;
    primaryCta?: { label?: string; href?: string };
    secondaryCta?: { label?: string; href?: string };
    primaryCtaLabel?: string;
    primaryCtaHref?: string;
    secondaryCtaLabel?: string;
    secondaryCtaHref?: string;
  }>,
  fallback: { title: string; description: string; primaryCta: ButtonLink; secondaryCta: ButtonLink },
) {
  if (!data) return fallback;
  return {
    title: data.title ?? fallback.title,
    description: data.description ?? fallback.description,
    primaryCta: transformButtonLink(
      data.primaryCta ?? { label: data.primaryCtaLabel, href: data.primaryCtaHref },
      fallback.primaryCta,
    ),
    secondaryCta: transformButtonLink(
      data.secondaryCta ?? { label: data.secondaryCtaLabel, href: data.secondaryCtaHref },
      fallback.secondaryCta,
    ),
  };
}

export function transformMarqueeLogos(
  data: MaybeArray<{ name?: string; logo?: MediaLike }>,
  fallback: MarqueeLogo[],
): MarqueeLogo[] {
  const items = asArray(data);
  if (items.length === 0) return fallback;
  return items.map((item, index) => ({
    name: item.name ?? fallback[index]?.name ?? "",
    src: mediaSrc(item.logo, fallback[index]?.src ?? ""),
    alt: item.logo?.alternativeText ?? fallback[index]?.alt ?? item.name ?? "",
    width: item.logo?.width ?? fallback[index]?.width,
    height: item.logo?.height ?? fallback[index]?.height,
  }));
}

export function transformPartners(
  data: MaybeArray<{ title?: string; subtitle?: string; logo?: MediaLike; points?: { text?: string }[] }>,
  fallback: Partner[],
): Partner[] {
  const items = asArray(data);
  if (items.length === 0) return fallback;
  return items.map((item, index) => ({
    title: item.title ?? fallback[index]?.title ?? "",
    subtitle: item.subtitle ?? fallback[index]?.subtitle ?? "",
    logo: mediaSrc(item.logo, fallback[index]?.logo ?? ""),
    points: textItems(item.points, fallback[index]?.points ?? []),
  }));
}

export function transformChallenges(
  data: MaybeArray<{ title?: string; icon?: MediaLike; points?: { text?: string }[] }>,
  fallback: Challenge[],
): Challenge[] {
  const items = asArray(data);
  if (items.length === 0) return fallback;
  return items.map((item, index) => ({
    title: item.title ?? fallback[index]?.title ?? "",
    icon: mediaSrc(item.icon, fallback[index]?.icon ?? ""),
    points: textItems(item.points, fallback[index]?.points ?? []),
  }));
}

export function transformSolutions(
  data: MaybeArray<{ title?: string; description?: string; image?: MediaLike; href?: string; icon?: MediaLike }>,
  fallback: Solution[],
): Solution[] {
  const items = asArray(data);
  if (items.length === 0) return fallback;
  return items.map((item, index) => ({
    title: item.title ?? fallback[index]?.title ?? "",
    description: item.description ?? fallback[index]?.description ?? "",
    image: mediaSrc(item.image, fallback[index]?.image ?? ""),
    href: item.href ?? fallback[index]?.href ?? "/",
    icon: mediaSrc(item.icon, fallback[index]?.icon ?? ""),
  }));
}

export function transformIndustries(
  data: MaybeArray<{ title?: string; image?: MediaLike; points?: { text?: string }[]; description?: string; details?: { text?: string }[] }>,
  fallback: Industry[],
): Industry[] {
  const items = asArray(data);
  if (items.length === 0) return fallback;
  return items.map((item, index) => ({
    title: item.title ?? fallback[index]?.title ?? "",
    image: mediaSrc(item.image, fallback[index]?.image ?? ""),
    points: textItems(item.points, fallback[index]?.points ?? []),
    description: item.description ?? fallback[index]?.description ?? "",
    details: textItems(item.details, fallback[index]?.details ?? []),
  }));
}

export function transformAboutTabs(
  data: MaybeArray<{
    name?: string;
    panel?: {
      image?: MediaLike;
      overlayTitle?: string;
      overlayDescription?: string;
      overlayCta?: { label?: string; href?: string };
      cards?: { title?: string; description?: string; icon?: MediaLike }[];
      heading?: string;
      missionParagraphs?: { text?: string }[];
      timeline?: { year?: string; description?: string }[];
    };
  }>,
  fallback: AboutTab[],
): AboutTab[] {
  const items = asArray(data);
  if (items.length === 0) return fallback;
  return items.map((item, index) => ({
    name: item.name ?? fallback[index]?.name ?? "",
    panel: {
      image: mediaSrc(item.panel?.image, fallback[index]?.panel.image ?? ""),
      overlayTitle: item.panel?.overlayTitle ?? fallback[index]?.panel.overlayTitle ?? "",
      overlayDescription: item.panel?.overlayDescription ?? fallback[index]?.panel.overlayDescription ?? "",
      overlayCta: transformButtonLink(item.panel?.overlayCta, fallback[index]?.panel.overlayCta ?? { label: "Get Started", href: "#contact" }),
      cards: item.panel?.cards?.map((card, cardIndex): AboutValue => ({
        title: card.title ?? fallback[index]?.panel.cards?.[cardIndex]?.title ?? "",
        description: card.description ?? fallback[index]?.panel.cards?.[cardIndex]?.description ?? "",
        icon: mediaSrc(card.icon, fallback[index]?.panel.cards?.[cardIndex]?.icon ?? ""),
      })) ?? fallback[index]?.panel.cards,
      heading: item.panel?.heading ?? fallback[index]?.panel.heading,
      missionParagraphs: textItems(item.panel?.missionParagraphs, fallback[index]?.panel.missionParagraphs ?? []),
      timeline: item.panel?.timeline?.map((timelineItem, timelineIndex) => ({
        year: timelineItem.year ?? fallback[index]?.panel.timeline?.[timelineIndex]?.year ?? "",
        description: timelineItem.description ?? fallback[index]?.panel.timeline?.[timelineIndex]?.description ?? "",
      })) ?? fallback[index]?.panel.timeline,
    },
  }));
}

export function transformPartnerships(
  data: MaybeArray<{ name?: string; logo?: MediaLike; description?: string }>,
  fallback: Partnership[],
): Partnership[] {
  const items = asArray(data);
  if (items.length === 0) return fallback;
  return items.map((item, index) => ({
    name: item.name ?? fallback[index]?.name ?? "",
    logo: mediaSrc(item.logo, fallback[index]?.logo ?? ""),
    description: item.description ?? fallback[index]?.description ?? "",
  }));
}

export function transformOffices(
  data: MaybeArray<{ title?: string; address?: string; icon?: MediaLike }>,
  fallback: Office[],
): Office[] {
  const items = asArray(data);
  if (items.length === 0) return fallback;
  return items.map((item, index) => ({
    title: item.title ?? fallback[index]?.title ?? "",
    address: item.address ?? fallback[index]?.address ?? "",
    icon: mediaSrc(item.icon, fallback[index]?.icon ?? ""),
  }));
}

export function transformSectionHeader(
  data: MaybeObject<{ eyebrow?: string; title?: string; description?: string }>,
  fallback: SectionHeaderContent,
): SectionHeaderContent {
  return {
    eyebrow: data?.eyebrow ?? fallback.eyebrow,
    title: data?.title ?? fallback.title,
    description: data?.description ?? fallback.description,
  };
}

export function transformProblemSection(
  data: MaybeObject<{ header?: { eyebrow?: string; title?: string }; ctaText?: string; cta?: { label?: string; href?: string } }>,
  fallback: HomeProblemSection,
): HomeProblemSection {
  return {
    eyebrow: data?.header?.eyebrow ?? fallback.eyebrow,
    title: data?.header?.title ?? fallback.title,
    ctaText: data?.ctaText ?? fallback.ctaText,
    cta: transformButtonLink(data?.cta, fallback.cta ?? { label: "", href: "#" }),
  };
}

export function transformSolutionsSection(
  data: MaybeObject<{ header?: { eyebrow?: string; title?: string }; summary?: string; cta?: { label?: string; href?: string } }>,
  fallback: HomeSolutionsSection,
): HomeSolutionsSection {
  return {
    eyebrow: data?.header?.eyebrow ?? fallback.eyebrow,
    title: data?.header?.title ?? fallback.title,
    summary: data?.summary ?? fallback.summary,
    cta: transformButtonLink(data?.cta, fallback.cta ?? { label: "", href: "#" }),
  };
}

export function transformIndustriesSection(
  data: MaybeObject<{ header?: { eyebrow?: string; title?: string }; detailEyebrow?: string; detailCta?: { label?: string; href?: string } }>,
  fallback: HomeIndustriesSection,
): HomeIndustriesSection {
  return {
    eyebrow: data?.header?.eyebrow ?? fallback.eyebrow,
    title: data?.header?.title ?? fallback.title,
    detailEyebrow: data?.detailEyebrow ?? fallback.detailEyebrow,
    detailCta: transformButtonLink(data?.detailCta, fallback.detailCta ?? { label: "", href: "#" }),
  };
}

export function transformDeploymentSection(
  data: MaybeObject<{ title?: string; image?: MediaLike }>,
  fallback: DeploymentSectionContent,
): DeploymentSectionContent {
  return {
    title: data?.title ?? fallback.title,
    image: mediaSrc(data?.image, fallback.image),
  };
}

export function transformEpcFocusAreas(
  data: MaybeArray<{ title?: string; description?: string; points?: { text?: string }[] }>,
  fallback: EpcFocusArea[],
): EpcFocusArea[] {
  const items = asArray(data);
  if (items.length === 0) return fallback;
  return items.map((item, index) => ({
    title: item.title ?? fallback[index]?.title ?? "",
    description: item.description ?? fallback[index]?.description ?? "",
    points: textItems(item.points, fallback[index]?.points ?? []),
  }));
}

export function transformElectroxProcesses(
  data: MaybeArray<{ title?: string; description?: string; icon?: MediaLike }>,
  fallback: ElectroxProcess[],
): ElectroxProcess[] {
  const items = asArray(data);
  if (items.length === 0) return fallback;
  return items.map((item, index) => ({
    title: item.title ?? fallback[index]?.title ?? "",
    description: item.description ?? fallback[index]?.description ?? "",
    icon: mediaSrc(item.icon, fallback[index]?.icon ?? ""),
  }));
}

export function transformScaleCards(
  data: MaybeArray<{ code?: string; title?: string; image?: MediaLike; footprint?: string; stp?: string; etp?: string }>,
  fallback: ScaleCard[],
): ScaleCard[] {
  const items = asArray(data);
  if (items.length === 0) return fallback;
  return items.map((item, index) => ({
    code: item.code ?? fallback[index]?.code ?? "",
    title: item.title ?? fallback[index]?.title ?? "",
    image: mediaSrc(item.image, fallback[index]?.image ?? ""),
    footprint: item.footprint ?? fallback[index]?.footprint ?? "",
    stp: item.stp ?? fallback[index]?.stp ?? "",
    etp: item.etp ?? fallback[index]?.etp ?? "",
  }));
}

export function transformEcosystemProducts(
  data: MaybeArray<{ title?: string; description?: string; icon?: MediaLike }>,
  fallback: EcosystemProduct[],
): EcosystemProduct[] {
  const items = asArray(data);
  if (items.length === 0) return fallback;
  return items.map((item, index) => ({
    title: item.title ?? fallback[index]?.title ?? "",
    description: item.description ?? fallback[index]?.description ?? "",
    icon: mediaSrc(item.icon, fallback[index]?.icon ?? ""),
  }));
}

export function transformESGCards(
  data: MaybeArray<{ title?: string; icon?: MediaLike; items?: { text?: string }[] }>,
  fallback: ESGListCard[],
): ESGListCard[] {
  const items = asArray(data);
  if (items.length === 0) return fallback;
  return items.map((item, index) => ({
    title: item.title ?? fallback[index]?.title ?? "",
    icon: mediaSrc(item.icon, fallback[index]?.icon ?? ""),
    items: textItems(item.items, fallback[index]?.items ?? []),
  }));
}

export function transformTextField(
  data: MaybeObject<{ label?: string; placeholder?: string; required?: boolean }>,
  fallback: TextFieldConfig,
): TextFieldConfig {
  return {
    label: data?.label ?? fallback.label,
    placeholder: data?.placeholder ?? fallback.placeholder,
    required: data?.required ?? fallback.required,
  };
}

export function transformSelectField(
  data: MaybeObject<{ label?: string; placeholder?: string; options?: { text?: string }[] }>,
  fallback: SelectFieldConfig,
): SelectFieldConfig {
  return {
    label: data?.label ?? fallback.label,
    placeholder: data?.placeholder ?? fallback.placeholder,
    options: textItems(data?.options, fallback.options),
  };
}

export function transformContactFields(
  data: MaybeObject<{
    nameField?: { label?: string; placeholder?: string; required?: boolean };
    companyField?: { label?: string; placeholder?: string; required?: boolean };
    emailField?: { label?: string; placeholder?: string; required?: boolean };
    phoneField?: { label?: string; placeholder?: string; required?: boolean };
    serviceField?: { label?: string; placeholder?: string; options?: { text?: string }[] };
    messageField?: { label?: string; placeholder?: string; required?: boolean };
  }>,
  fallback: ContactFormContent["fields"],
): ContactFormContent["fields"] {
  return {
    name: transformTextField(data?.nameField, fallback.name),
    company: transformTextField(data?.companyField, fallback.company),
    email: transformTextField(data?.emailField, fallback.email),
    phone: transformTextField(data?.phoneField, fallback.phone),
    service: transformSelectField(data?.serviceField, fallback.service),
    message: transformTextField(data?.messageField, fallback.message),
  };
}
