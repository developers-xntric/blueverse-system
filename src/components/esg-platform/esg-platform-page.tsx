"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

const whatItTracks = [
  "Water saved (litres/day, month, year)",
  "Water reused (% recovery rate per facility)",
  "Carbon avoided (kg CO₂e equivalent)",
  "Energy consumption per KLD treated",
  "Chemical reduction vs conventional baseline",
  "Scope 1, 2, 3 water metrics (GHG Protocol aligned)",
];

const capabilities = [
  "Real-time dashboard — accessible by web and mobile",
  "Multi-site aggregation — view all facilities in one view",
  "Export-ready reports for ESG disclosures (UAE SCA, Saudi Tadawul, TCFD, GRI)",
  "Alert system for discharge limit breaches",
  "IoT integration with INDRA Spectrum and BlueVerse washing equipment",
];

const pricingModel = [
  "SaaS subscription (annual or multi-year)",
  "Bundled into system deployments at no additional charge",
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Vehicle Washing", href: "/vehicle-washing" },
  { label: "ESG Platform", href: "/esg-platform" },
  { label: "EPC Solutions", href: "/#contact" },
  { label: "Clients", href: "/#contact" },
  { label: "Contact", href: "/#contact" },
];

function SectionCard({
  icon,
  title,
  items,
}: {
  icon: string;
  title: string;
  items: string[];
}) {
  return (
    <motion.article
      whileHover={{ y: -3 }}
      className="rounded-[19.382px] border border-[#dbdbdb] bg-white px-[30px] py-10 shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
    >
      <div className="flex items-center gap-[15px]">
        <span className="flex size-[58.145px] shrink-0 items-center justify-center rounded-[19.382px] bg-[#e8f4fd]">
          <Image src={icon} alt="" width={25.57} height={26} className="size-[25.567px]" />
        </span>
        <h3 className="font-heading text-[24.227px] font-bold leading-[33.918px] text-brand-navy">{title}</h3>
      </div>
      <ul className="mt-[15px] space-y-[16px]">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-[10px]">
            <span className="mt-[9px] size-[7.268px] shrink-0 rounded-full bg-brand-green" />
            <span className="text-[16.959px] leading-[24.227px] text-brand-muted">{item}</span>
          </li>
        ))}
      </ul>
    </motion.article>
  );
}

function Hero() {
  return (
    <section className="bg-white">
      <div className="mx-auto grid w-[90%] max-w-[1440px] items-center gap-8 py-[62px] lg:grid-cols-[1fr_810px] lg:py-[72px]">
        <motion.div
          initial={{ opacity: 0, x: -18 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="max-w-[810px]"
        >
          <p className="bg-gradient-to-b bg-clip-text font-heading text-[19px] font-semibold uppercase leading-[21px] text-transparent from-[#1191d0] from-[23.381%] to-[#1f62af]">
            ESG Intelligence Platform
          </p>
          <h1 className="mt-[10px] max-w-[848px] font-heading text-[40px] font-bold leading-[1.04] text-brand-navy md:text-[50px] md:leading-[58.145px]">
            Technology-led Sustainability
           
            for a Resource-Conscious
            
            World
          </h1>
          <p className="mt-[27px] max-w-[810px] text-[18px] leading-[30.9px] text-brand-muted md:text-[22px]">
            The BlueVerse ESG Intelligence platform gives facility managers, sustainability officers, and corporate boards
            real-time visibility into water and carbon metrics — formatted for regulatory compliance and global ESG frameworks.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 22 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 }}
          className="relative h-[280px] w-full lg:h-[501px]"
        >
          <Image
            src="/esg-assets/hero.png"
            alt="BlueVerse ESG dashboard"
            fill
            priority
            sizes="(max-width: 1024px) 90vw, 810px"
            className="object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
}


export function EsgPlatformPage() {
  return (
    <div className="bg-white text-black">
      <main>
        <Hero />
        <section className="border-t border-transparent pb-[90px]">
          <div className="mx-auto grid w-[90%] max-w-[1440px] gap-5 lg:grid-cols-3">
            <SectionCard icon="/esg-assets/card-1.png" title="What It Tracks" items={whatItTracks} />
            <SectionCard icon="/esg-assets/card-2.png" title="Platform Capabilities" items={capabilities} />
            <SectionCard icon="/esg-assets/card-3.png" title="Pricing Model" items={pricingModel} />
          </div>
        </section>
      </main>
   
    </div>
  );
}
