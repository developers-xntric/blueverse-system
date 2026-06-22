import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";

import {
  footerServiceLinks,
  navLinks,
} from "@/components/home/homepage-data";
import {
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from "@/components/home/icons";

export function Footer() {
  const footerServiceLinkMap: Record<(typeof footerServiceLinks)[number], string> = {
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
            <SocialLink label="LinkedIn">
              <LinkedinIcon className="size-6" />
            </SocialLink>
            <SocialLink label="Twitter">
              <TwitterIcon className="size-6" />
            </SocialLink>
            <SocialLink label="Instagram">
              <InstagramIcon className="size-6" />
            </SocialLink>
          </div>
        </div>
        <div className="mt-8 border-t border-white/10 pt-3 md:pt-8 flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-4 md:gap-0">
          <p className="text-[16px] text-white/60 md:text-[15px]">
            Copyright 2026 BlueVerse CleanTech Pvt. Ltd. All rights reserved.
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
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <a
      href="#contact"
      aria-label={label}
      className="flex size-12 items-center justify-center rounded-full bg-white/5 text-white transition hover:bg-white/10"
    >
      {children}
    </a>
  );
}
