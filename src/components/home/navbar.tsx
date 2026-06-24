"use client";

import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/home/button";
import type { NavbarData } from "@/lib/types";

type NavbarProps = {
  data: NavbarData;
};

export function Navbar({ data }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="sticky top-0 z-50 border-b border-white/10 bg-[#2162AF]">
      <div className="homepage-shell flex min-h-[84px] items-center justify-between gap-6 py-4 xl:min-h-[98px] xl:py-0">
        <Link href="/" className="shrink-0" onClick={closeMenu}>
          {data.logo ? (
            <Image
              src={data.logo.url}
              alt={data.logo.alt || data.logoAlt}
              width={195}
              height={50}
              className="h-auto w-[150px] md:w-[180px] 2xl:w-[195px]"
              priority
            />
          ) : (
            <span className="font-heading text-xl font-bold text-white">{data.logoAlt}</span>
          )}
        </Link>
        <nav aria-label="Primary" className="hidden xl:block">
          <ul className="flex items-center gap-8 text-[13px] 2xl:text-[15px] font-medium text-white">
            {data.navLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="hover:text-white/75">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="hidden shrink-0 xl:block">
          {data.cta ? <Button href={data.cta.href} size="compact">{data.cta.label}</Button> : null}
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
              {data.navLinks.map((link) => (
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
            {data.cta ? (
              <Button
                className="w-full"
                href={data.cta.href}
                size="compact"
                onClick={closeMenu}
              >
                {data.cta.label}
              </Button>
            ) : null}
          </nav>
        </div>
      ) : null}
    </div>
  );
}
