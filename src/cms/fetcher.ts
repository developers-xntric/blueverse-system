import { getCached, setCache } from "@/cms/cache";
import { logger } from "@/lib/logger";

type FetcherOptions = {
  cache?: boolean;
  timeout?: number;
};

function isOnline(): boolean {
  return !!(
    process.env.STRAPI_URL ||
    process.env.NEXT_PUBLIC_STRAPI_URL
  );
}

function getStrapiURL(path = ""): string {
  const base =
    process.env.STRAPI_URL ||
    process.env.NEXT_PUBLIC_STRAPI_URL ||
    "http://localhost:1337";
  return `${base}${path.startsWith("/") ? path : `/api${path.startsWith("/") ? path : `/${path}`}`}`;
}

async function fetchWithTimeout(url: string, timeoutMs: number): Promise<Response> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const response = await fetch(url, { signal: controller.signal });
    return response;
  } finally {
    clearTimeout(timeout);
  }
}

export async function fetchCMS<T>(
  collection: string,
  params?: Record<string, string>,
  options: FetcherOptions = {},
): Promise<T | null> {
  const { cache = true, timeout = 10000 } = options;

  if (!isOnline()) {
    logger.warn("Strapi URL not configured, skipping CMS fetch");
    return null;
  }

  if (cache) {
    const cached = getCached<T>(collection, params);
    if (cached) {
      logger.info(`Cache hit for ${collection}`);
      return cached;
    }
  }

  try {
    const query = params ? `?${new URLSearchParams(params).toString()}` : "";
    const url = getStrapiURL(`/${collection}${query}`);
    logger.info(`Fetching CMS: ${url}`);

    const response = await fetchWithTimeout(url, timeout);

    if (!response.ok) {
      logger.warn(`CMS fetch failed for ${collection}: ${response.status}`);
      return null;
    }

    const json = (await response.json()) as { data: T };
    const data = json.data;

    if (cache) {
      setCache(collection, data, params);
    }

    return data;
  } catch (error) {
    logger.error(`CMS fetch error for ${collection}:`, error);
    return null;
  }
}
