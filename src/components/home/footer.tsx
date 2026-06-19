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
  return (
    <footer className="bg-brand-blue py-10 text-white md:py-[46px]">
      <div className="homepage-shell">
        <div className="flex flex-col gap-8 xl:flex-row xl:items-center xl:justify-between">
          <Image
            src="/figma-assets/partner-logo-6.png"
            alt="BlueVerse"
            width={421}
            height={117}
            className="h-auto w-[210px] md:w-[260px]"
          />
          <div className="flex flex-wrap gap-6 text-[16px] text-white/60 md:gap-10 md:text-[19px]">
            {navLinks.map((link) => (
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
        <div className="mt-8 border-t border-white/10 pt-8 md:flex md:items-center md:justify-between">
          <p className="text-[16px] text-white/60 md:text-[19px]">
            © 2026 BlueVerse CleanTech Pvt. Ltd. All rights reserved.
          </p>
          <div className="mt-4 flex flex-wrap gap-5 text-[16px] text-white/60 md:mt-0 md:gap-6 md:text-[19px]">
            {footerServiceLinks.map((item) => (
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
