import type { Metadata } from "next";

import { EsgPlatformPage } from "@/components/esg-platform/esg-platform-page";
import { getEsgPlatformPage } from "@/lib/data";

export async function generateMetadata(): Promise<Metadata> {
  const data = await getEsgPlatformPage();

  return {
    title: data.seo?.title || "ESG Platform | BlueVerse",
    description:
      data.seo?.description ||
      "BlueVerse ESG Intelligence platform for water and carbon visibility, multi-site reporting, and compliance-ready ESG metrics.",
  };
}

export default async function EsgPlatform() {
  const data = await getEsgPlatformPage();

  return <EsgPlatformPage data={data} />;
}
