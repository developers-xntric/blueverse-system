"use client";

import { useState } from "react";

import Image from "next/image";

import { Button } from "@/components/home/button";
import { navLinks as fallbackNavLinks } from "@/components/home/homepage-data";
import type { NavLink } from "@/types/cms";

type NavbarProps = {
  navLinks?: readonly NavLink[] | NavLink[];
  logo?: string;
  logoAlt?: string;
  ctaLabel?: string;
};

export function Navbar({
  navLinks: navLinksProp,
  logo,
  logoAlt,
  ctaLabel,
}: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const links = navLinksProp && navLinksProp.length > 0 ? navLinksProp : fallbackNavLinks;

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="sticky top-0 z-50 border-b border-white/10 bg-[#2162AF]">
      <div className="homepage-shell flex min-h-[84px] items-center justify-between gap-6 py-4 xl:min-h-[98px] xl:py-0">
        <a href="/" className="shrink-0" onClick={closeMenu}>
          <Image
            src={logo ?? "/figma-assets/hero-logo.png"}
            alt={logoAlt ?? "BlueVerse"}
            width={195}
            height={50}
            className="h-auto w-[150px] md:w-[180px] 2xl:w-[195px]"
            priority
          />
        </a>
        <nav aria-label="Primary" className="hidden xl:block">
          <ul className="flex items-center gap-8 text-[13px] 2xl:text-[15px] font-medium text-white">
            {links.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="hover:text-white/75">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="hidden shrink-0 xl:block">
          <Button size="compact">
            {ctaLabel ?? "Talk To Our Team"}
          </Button>
        </div>
        <button
          type="button"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          className="inline-flex size-11 shrink-0 items-center justify-center rounded-[10px] border border-white/30 bg-white/8 text-white xl:hidden"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span className="sr-only">{isMenuOpen ? "Close menu" : "Open menu"}</span>
          <span className="flex h-4 w-5 flex-col justify-between">
            <span
              className={`block h-0.5 w-full rounded-full bg-current transition ${
                isMenuOpen ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-full rounded-full bg-current transition ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-full rounded-full bg-current transition ${
                isMenuOpen ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {isMenuOpen ? (
        <div className="border-t border-white/10 xl:hidden">
          <nav
            id="mobile-navigation"
            aria-label="Mobile"
            className="homepage-shell flex flex-col gap-6 py-6"
          >
            <ul className="flex flex-col gap-4 text-[16px] font-medium text-white">
              {links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="block hover:text-white/75"
                    onClick={closeMenu}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <Button
              className="w-full"
              size="compact"
              onClick={closeMenu}
            >
              {ctaLabel ?? "Talk To Our Team"}
            </Button>
          </nav>
        </div>
      ) : null}
    </div>
  );
}
