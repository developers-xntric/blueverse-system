import { getCached, setCache } from "@/cms/cache";
import { logger } from "@/lib/logger";

type FetcherOptions = {
  cache?: boolean;
  timeout?: number;
};

let adminJwt: string | null = null;

function isOnline(): boolean {
  return !!(
    process.env.STRAPI_URL ||
    process.env.NEXT_PUBLIC_STRAPI_URL
  );
}

function getStrapiBaseURL(): string {
  return (
    process.env.STRAPI_URL ||
    process.env.NEXT_PUBLIC_STRAPI_URL ||
    "http://localhost:1337"
  );
}

function hasAdminAccess(): boolean {
  return !!(process.env.STRAPI_ADMIN_EMAIL && process.env.STRAPI_ADMIN_PASSWORD);
}

function getPublicStrapiURL(path = ""): string {
  const base = getStrapiBaseURL();
  return `${base}${path.startsWith("/") ? path : `/api${path.startsWith("/") ? path : `/${path}`}`}`;
}

function getPublicStrapiHeaders(): HeadersInit {
  const token = process.env.STRAPI_API_TOKEN;

  if (!token) {
    return {
      Accept: "application/json",
    };
  }

  return {
    Accept: "application/json",
    Authorization: `Bearer ${token}`,
  };
}

async function getAdminJwt(timeoutMs: number): Promise<string> {
  if (adminJwt) return adminJwt;

  const email = process.env.STRAPI_ADMIN_EMAIL;
  const password = process.env.STRAPI_ADMIN_PASSWORD;

  if (!email || !password) {
    throw new Error("Missing Strapi admin credentials");
  }

  const response = await fetchWithTimeout(
    `${getStrapiBaseURL()}/admin/login`,
    timeoutMs,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ email, password }),
    },
  );

  if (!response.ok) {
    throw new Error(`Strapi admin login failed: ${response.status}`);
  }

  const json = (await response.json()) as { data?: { token?: string } };
  const token = json.data?.token;

  if (!token) {
    throw new Error("Strapi admin login did not return a token");
  }

  adminJwt = token;
  return token;
}

async function getRequestConfig(collection: string, timeoutMs: number): Promise<{
  url: string;
  headers: HeadersInit;
}> {
  if (!hasAdminAccess()) {
    return {
      url: getPublicStrapiURL(`/${collection}`),
      headers: getPublicStrapiHeaders(),
    };
  }

  const token = await getAdminJwt(timeoutMs);
  return {
    url: `${getStrapiBaseURL()}/content-manager/single-types/api::${collection}.${collection}`,
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
}

async function fetchWithTimeout(
  url: string,
  timeoutMs: number,
  init: RequestInit = {},
): Promise<Response> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const response = await fetch(url, {
      ...init,
      signal: controller.signal,
      cache: "no-store",
      next: { revalidate: 0 },
    });
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
  const { cache = false, timeout = 10000 } = options;

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
    const requestConfig = await getRequestConfig(collection, timeout);
    const url = `${requestConfig.url}${query}`;
    logger.info(`Fetching CMS: ${url}`);

    let response = await fetchWithTimeout(url, timeout, {
      headers: requestConfig.headers,
    });

    if (response.status === 401 && hasAdminAccess()) {
      adminJwt = null;
      const retriedConfig = await getRequestConfig(collection, timeout);
      response = await fetchWithTimeout(url, timeout, {
        headers: retriedConfig.headers,
      });
    }

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
