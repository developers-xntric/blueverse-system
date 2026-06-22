import Image from "next/image";
import type { ReactNode } from "react";

import {
  navLinks as fallbackNavLinks,
} from "@/components/home/homepage-data";
import {
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from "@/components/home/icons";
import type { NavLink } from "@/types/cms";

type FooterProps = {
  navLinks?: readonly NavLink[] | NavLink[];
  serviceLinks?: string[];
  logo?: string;
  copyright?: string;
};

export function Footer({
  navLinks: navLinksProp,
  serviceLinks,
  logo,
  copyright,
}: FooterProps) {
  const links = navLinksProp && navLinksProp.length > 0 ? navLinksProp : fallbackNavLinks;
  const services = serviceLinks && serviceLinks.length > 0
    ? serviceLinks
    : ["Automated Vehicle Washing", "Water Treatment Systems", "ESG Intelligence Platform", "EPC Services"];

  return (
    <footer className="bg-brand-blue py-8 text-white md:py-[36px]">
      <div className="homepage-shell">
        <div className="flex flex-col gap-6 md:gap-8 xl:flex-row xl:items-center xl:justify-between">
          <Image
            src={logo ?? "/figma-assets/partner-logo-6.png"}
            alt="BlueVerse"
            width={421}
            height={117}
            className="h-auto w-[170px] md:w-[190px]"
          />
          <div className="flex flex-col md:flex-row md:flex-wrap gap-3 text-[16px] text-white/60 md:gap-6 md:text-[15px]">
            {links.map((link) => (
              <a key={link.label} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>
          <div className="flex gap-4">
            <SocialLink label="LinkedIn">
              <LinkedinIcon className="size-[24px]" />
            </SocialLink>
            <SocialLink label="Twitter">
              <TwitterIcon className="size-[24px]" />
            </SocialLink>
            <SocialLink label="Instagram">
              <InstagramIcon className="size-[24px]" />
            </SocialLink>
          </div>
        </div>
        <div className="mt-8 border-t border-white/10 pt-3 md:pt-8 flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-4 md:gap-0">
          <p className="text-[16px] text-white/60 md:text-[15px]">
            {copyright ?? "Copyright 2026 BlueVerse CleanTech Pvt. Ltd. All rights reserved."}
          </p>
          <div className="mt-4 flex flex-col md:flex-row md:flex-wrap gap-3 text-white/60 md:mt-0 md:gap-4 md:text-[15px]">
            {services.map((item) => (
              <a key={item} href="#solutions">
                {item}
              </a>
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
