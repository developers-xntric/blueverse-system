type CacheEntry<T> = {
  data: T;
  timestamp: number;
};

const store = new Map<string, CacheEntry<unknown>>();
const DEFAULT_TTL = 5 * 60 * 1000;

function getCacheKey(collection: string, params?: Record<string, string>): string {
  if (!params) return collection;
  const sorted = Object.entries(params)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([k, v]) => `${k}=${v}`)
    .join("&");
  return `${collection}?${sorted}`;
}

export function getCached<T>(collection: string, params?: Record<string, string>): T | undefined {
  const key = getCacheKey(collection, params);
  const entry = store.get(key) as CacheEntry<T> | undefined;
  if (!entry) return undefined;
  if (Date.now() - entry.timestamp > DEFAULT_TTL) {
    store.delete(key);
    return undefined;
  }
  return entry.data;
}

export function setCache<T>(collection: string, data: T, params?: Record<string, string>): void {
  const key = getCacheKey(collection, params);
  store.set(key, { data, timestamp: Date.now() });
}

export function clearCache(): void {
  store.clear();
}

export function getCacheSize(): number {
  return store.size;
}
