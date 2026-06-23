import type { Metadata } from "next";

import { EsgPlatformPage } from "@/components/esg-platform/esg-platform-page";
import { getESGContent } from "@/services/content-service";

export const dynamic = "force-dynamic";
export const revalidate = 0;
export const fetchCache = "force-no-store";

export const metadata: Metadata = {
  title: "ESG Platform | BlueVerse",
  description:
    "BlueVerse ESG Intelligence platform for water and carbon visibility, multi-site reporting, and compliance-ready ESG metrics.",
};

export default async function EsgPlatform() {
  const content = await getESGContent();

  return <EsgPlatformPage content={content} />;
}
