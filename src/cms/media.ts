type CMSImage = {
  url?: string;
  alternativeText?: string;
  width?: number;
  height?: number;
};

type MediaResult = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

function getStrapiMediaURL(url?: string): string | undefined {
  if (!url) return undefined;
  if (url.startsWith("http")) return url;
  const base = process.env.STRAPI_URL || process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";
  return `${base}${url.startsWith("/") ? "" : "/"}${url}`;
}

export function resolveMedia(
  cmsImage: CMSImage | null | undefined,
  localFallback: string,
  fallbackAlt = "",
): MediaResult {
  if (cmsImage?.url) {
    return {
      src: getStrapiMediaURL(cmsImage.url) ?? localFallback,
      alt: cmsImage.alternativeText || fallbackAlt,
      width: cmsImage.width,
      height: cmsImage.height,
    };
  }
  return { src: localFallback, alt: fallbackAlt };
}

export function resolveMediaSrc(
  cmsUrl: string | null | undefined,
  localFallback: string,
): string {
  if (cmsUrl) {
    return getStrapiMediaURL(cmsUrl) ?? localFallback;
  }
  return localFallback;
}
