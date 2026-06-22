import type { NavbarContent, FooterContent, NavLink } from "@/types/cms";
import { fallbackNavLinks, fallbackFooterServiceLinks } from "@/cms/fallback-data/home";

export const fallbackNavbarContent: NavbarContent = {
  logo: "/figma-assets/hero-logo.png",
  logoAlt: "BlueVerse",
  navLinks: fallbackNavLinks,
  ctaLabel: "Talk To Our Team",
};

export const fallbackFooterContent: FooterContent = {
  logo: "/figma-assets/partner-logo-6.png",
  navLinks: fallbackNavLinks,
  serviceLinks: fallbackFooterServiceLinks,
  copyright: "Copyright 2026 BlueVerse CleanTech Pvt. Ltd. All rights reserved.",
  socialLinks: [
    { platform: "LinkedIn", href: "#contact" },
    { platform: "Twitter", href: "#contact" },
    { platform: "Instagram", href: "#contact" },
  ],
};
