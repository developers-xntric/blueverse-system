"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { ESGContent } from "@/types/cms";

type EsgPlatformPageProps = {
  content?: ESGContent;
};

const fallbackWhatItTracks = [
  "Water saved (litres/day, month, year)",
  "Water reused (% recovery rate per facility)",
  "Carbon avoided (kg CO₂e equivalent)",
  "Energy consumption per KLD treated",
  "Chemical reduction vs conventional baseline",
  "Scope 1, 2, 3 water metrics (GHG Protocol aligned)",
];

const fallbackCapabilities = [
  "Real-time dashboard accessible by web and mobile",
  "Multi-site aggregation view all facilities in one view",
  "Export-ready reports for ESG disclosures (UAE SCA, Saudi Tadawul, TCFD, GRI)",
  "Alert system for discharge limit breaches",
  "IoT integration with INDRA Spectrum and BlueVerse washing equipment",
];

const fallbackPricingModel = [
  "SaaS subscription (annual or multi-year)",
  "Bundled into system deployments at no additional charge",
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
      className="rounded-[19.382px] border border-[#dbdbdb] bg-white px-7.5 py-10 shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
    >
      <div className="flex items-center gap-3.75">
        <span className="flex shrink-0 items-center justify-center rounded-[19.382px] bg-[#e8f4fd]">
          <Image src={icon} alt="" width={25.57} height={26} className="size-[25.567px]" />
        </span>
        <h3 className="font-heading text-[24.227px] font-bold leading-[33.918px] text-brand-navy">{title}</h3>
      </div>
      <ul className="mt-3.75 space-y-4">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2.5">
            <span className="mt-2.25 size-[7.268px] shrink-0 rounded-full bg-brand-green" />
            <span className="text-[14px] leading-[24.227px] text-brand-muted">{item}</span>
          </li>
        ))}
      </ul>
    </motion.article>
  );
}

function HeroSection({
  subtitle,
  title,
  description,
  heroImage,
}: {
  subtitle?: string;
  title?: string;
  description?: string;
  heroImage?: string;
}) {
  return (
    <section className="bg-white">
      <div className="mx-auto grid w-[90%] 2xl:max-w-360 items-center gap-8 py-15.5 lg:grid-cols-[1fr_810px]">
        <motion.div
          initial={{ opacity: 0, x: -18 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="max-w-202.5"
        >
          <p className="bg-linear-to-b bg-clip-text font-heading text-[19px] font-semibold uppercase leading-5.25 text-transparent from-[#1191d0] from-[23.381%] to-[#1f62af]">
            {subtitle ?? "ESG Intelligence Platform"}
          </p>
          <h1 className="mt-2.5 max-w-212 font-heading text-[24px] font-bold text-brand-navy md:text-[40px] leading-tight">
            {title ?? "Technology-led Sustainability\nfor a Resource-Conscious\nWorld"}
          </h1>
          <p className="mt-6.75 max-w-202.5 text-[16px] text-brand-muted">
            {description ??
              "The BlueVerse ESG Intelligence platform gives facility managers, sustainability officers, and corporate boards real-time visibility into water and carbon metrics formatted for regulatory compliance and global ESG frameworks."}
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 22 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 }}
          className="relative h-70 w-full lg:h-125.25"
        >
          <Image
            src={heroImage ?? "/esg-assets/hero.png"}
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

export function EsgPlatformPage({ content }: EsgPlatformPageProps) {
  const hero = content?.hero;
  const whatItTracks = content?.whatItTracks ?? fallbackWhatItTracks;
  const capabilities = content?.capabilities ?? fallbackCapabilities;
  const pricingModel = content?.pricingModel ?? fallbackPricingModel;

  return (
    <div className="bg-white text-black">
      <main>
        <HeroSection
          subtitle={hero?.subtitle}
          title={hero?.title}
          description={hero?.description}
          heroImage={hero?.heroImage}
        />
        <section className="border-t border-transparent pb-22.5">
          <div className="mx-auto grid w-[90%] max-w-360 gap-5 lg:grid-cols-3">
            <SectionCard icon="/esg-assets/card-1.png" title="What It Tracks" items={whatItTracks} />
            <SectionCard icon="/esg-assets/card-2.png" title="Platform Capabilities" items={capabilities} />
            <SectionCard icon="/esg-assets/card-3.png" title="Pricing Model" items={pricingModel} />
          </div>
        </section>
      </main>
    </div>
  );
}
