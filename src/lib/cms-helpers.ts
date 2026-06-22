export function getStrapiURL(path = ""): string {
  const base = process.env.STRAPI_URL || process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";
  return `${base}${path ? `/api${path}` : ""}`;
}

export function getStrapiMediaURL(url?: string): string | undefined {
  if (!url) return undefined;
  if (url.startsWith("http")) return url;
  const base = process.env.STRAPI_URL || process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";
  return `${base}${url.startsWith("/") ? "" : "/"}${url}`;
}

export function pop<T>(value: T | null | undefined, fallback: T): T {
  return value ?? fallback;
}

export function pick<T extends object, K extends keyof T>(
  source: T | null | undefined,
  key: K,
  fallback: T[K],
): T[K] {
  if (!source) return fallback;
  const val = source[key];
  return val !== null && val !== undefined ? val : fallback;
}

export function pickMany<T extends object, K extends keyof T>(
  source: T | null | undefined,
  keys: K[],
  fallback: T,
): T {
  if (!source) return fallback;
  const result = { ...fallback };
  for (const key of keys) {
    const val = source[key];
    if (val !== null && val !== undefined) {
      (result as Record<string, unknown>)[key as string] = val;
    }
  }
  return result;
}

export function resolveImage(
  cmsImage: { url?: string; alternativeText?: string } | null | undefined,
  localFallback: string,
): string {
  if (cmsImage?.url) {
    return getStrapiMediaURL(cmsImage.url) ?? localFallback;
  }
  return localFallback;
}
