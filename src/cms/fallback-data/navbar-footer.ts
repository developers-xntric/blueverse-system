import type { NavbarContent, FooterContent } from "@/types/cms";
import { fallbackNavLinks, fallbackFooterServiceLinks } from "@/cms/fallback-data/home";

export const fallbackNavbarContent: NavbarContent = {
  logo: "/figma-assets/hero-logo.png",
  logoAlt: "BlueVerse",
  navLinks: fallbackNavLinks,
  ctaLabel: "Talk To Our Team",
  ctaHref: "#contact",
};

export const fallbackFooterContent: FooterContent = {
  logo: "/figma-assets/partner-logo-6.png",
  navLinks: fallbackNavLinks,
  serviceLinks: fallbackFooterServiceLinks.map((label) => ({ label, href: "#solutions" })),
  copyright: "Copyright 2026 BlueVerse CleanTech Pvt. Ltd. All rights reserved.",
  socialLinks: [
    { platform: "LinkedIn", href: "#contact", icon: "" },
    { platform: "Twitter", href: "#contact", icon: "" },
    { platform: "Instagram", href: "#contact", icon: "" },
  ],
};
