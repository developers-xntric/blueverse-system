import type { Metadata } from "next";

import { EsgPlatformPage } from "@/components/esg-platform/esg-platform-page";

export const metadata: Metadata = {
  title: "ESG Platform | BlueVerse",
  description:
    "BlueVerse ESG Intelligence platform for water and carbon visibility, multi-site reporting, and compliance-ready ESG metrics.",
};

export default function EsgPlatform() {
  return <EsgPlatformPage />;
}
