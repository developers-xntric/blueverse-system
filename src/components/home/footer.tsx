import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";

import {
  footerServiceLinks,
  navLinks,
} from "@/components/home/homepage-data";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
} from "@/components/home/icons";

export function Footer() {
  const footerServiceLinkMap: Record<string, string> = {
    "Automated Vehicle Washing": "/vehicle-washing",
    "Water Treatment Systems": "/waste-water-treatment-systems",
    "ESG Intelligence Platform": "/esg-platform",
    "EPC Services": "/waste-water-treatment-systems#epc-focus-areas",
  };

  return (
    <footer className="bg-brand-blue py-8 text-white md:py-9">
      <div className="homepage-shell">
        <div className="flex flex-col gap-6 md:gap-8 xl:flex-row xl:items-center xl:justify-between">
          <Image
            src="/figma-assets/partner-logo-6.png"
            alt="BlueVerse"
            width={421}
            height={117}
            className="h-auto w-42.5 md:w-47.5"
          />
          <div className="flex flex-col md:flex-row md:flex-wrap gap-3 text-[16px] text-white/60 md:gap-6 md:text-[15px]">
            {navLinks.map((link) => (
              <Link key={link.label} href={link.href}>
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex gap-4">
            <SocialLink
              label="LinkedIn"
              href="https://www.linkedin.com/company/blueverse-uae/"
            >
              <LinkedinIcon className="size-6" />
            </SocialLink>
            <SocialLink
              label="Facebook"
              href="https://www.facebook.com/people/Blueverse-UAE/61581921664291/"
            >
              <FacebookIcon className="size-6" />
            </SocialLink>
            <SocialLink
              label="Instagram"
              href="http://instagram.com/auto_studiobyblueverse/?fbclid=IwY2xjawOVEMVleHRuA2FlbQIxMQBicmlkETFmNm9ieVB1WVlvNTlSajJtc3J0YwZhcHBfaWQBMAABHnyQiucDioHOtmwzSrS_qJ0PcQwtTpGhEngIRcIkVjJY-oNIzPynusGPGPkp_aem_1BdDCQQcntBFWN9lr5sCaQ"
            >
              <InstagramIcon className="size-6" />
            </SocialLink>
          </div>
        </div>
        <div className="mt-8 border-t border-white/10 pt-3 md:pt-8 flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-4 md:gap-0">
          <p className="text-[16px] text-white/60 md:text-[15px]">
            © 2026 Blueverse CleanTech International Holdings Ltd. All rights reserved.
          </p>
          <div className="mt-4 flex flex-col md:flex-row md:flex-wrap gap-3 text-white/60 md:mt-0 md:gap-4 md:text-[15px]">
            {footerServiceLinks.map((item) => (
              <Link key={item} href={footerServiceLinkMap[item]}>
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({
  label,
  href,
  children,
}: {
  label: string;
  href: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noreferrer"
      className="flex size-10 items-center justify-center rounded-full bg-white/5 text-white transition hover:bg-white/10"
    >
      {children}
    </a>
  );
}
