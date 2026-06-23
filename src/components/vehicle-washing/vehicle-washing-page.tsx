"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { ReactNode } from "react";
import type { VehicleWashingContent } from "@/types/cms";

const fallbackFeatureItems: [string, string][] = [
  ["feature-1.svg", "Fully automated washing tunnels and robotic gantry systems"],
  ["feature-2.svg", "Express tunnel wash: high-volume throughput for busy locations"],
  ["feature-3.svg", "Robot AI Wash: Dubai's first AI-powered robotic wash (coming soon)"],
  ["feature-4.svg", "95% water recycling per wash cycle via integrated ETP"],
  ["feature-5.svg", "IoT-enabled - real-time wash data feeds into ESG dashboard"],
  ["feature-6.svg", "Zero capex model available: Pay-per-Wash / Wash-as-a-Service (WaaS)"],
];

const fallbackWashTypes: [string, string][] = [
  ["Express Tunnel Wash", "High-speed automated wash. Ideal for petrol stations, mall carparks, fleet depots. High throughput, consistent quality."],
  ["Manual Wash", "Hand-crafted wash by trained technicians. For premium and high-value vehicles."],
  ["Robot AI Wash", "AI-powered robotic wash system - coming soon to UAE. Precision, speed, scratch-free brilliance."],
  ["2-Wheeler Automated Wash", "Patented automated motorcycle wash system. 8 washes per hour, 138 sq.ft. footprint, 98% water recovery."],
];

const fallbackBusinessModels: [string, string, string][] = [
  ["business-1.svg", "CapEx purchase", "Full system ownership"],
  ["business-2.svg", "Wash-as-a-Service (WaaS)", "Revenue-share or subscription model, zero upfront capex"],
  ["business-3.svg", "Annual Maintenance Contracts (AMCs)", "Full system upkeep and consumables"],
];

const fallbackRegionalCards: [string, string, string, string, string, string][] = [
  ["india.svg", "India", "blueverseindia.com", "Automated 2-wheeler and 4-wheeler wash solutions for OEMs, dealerships, fuel stations, and independent wash centres across India.", "Visit BlueVerse India", "https://blueverseindia.com/"],
  ["uae.svg", "UAE", "blueverse.ae", "Eco-friendly, high-performance vehicle washing services and solutions tailored for the Gulf market and regional partners.", "Visit BlueVerse UAE", "https://blueverse.ae/"],
];

type VehicleWashingPageProps = {
  content?: VehicleWashingContent;
};

function MotionSection({
  children,
  className,
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      viewport={{ once: true, margin: "-120px" }}
      className={className}
    >
      {children}
    </motion.section>
  );
}

function ArrowIcon() {
  return (
    <Image
      src="/vehicle-assets/arrow.svg"
      alt=""
      width={18}
      height={18}
      aria-hidden="true"
      className="size-[17.6px] rotate-[135.66deg]"
    />
  );
}

function CtaButton({
  children,
  className = "",
  href = "#contact",
}: {
  children: ReactNode;
  className?: string;
  href?: string;
}) {
  return (
    <motion.a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      whileHover={{ y: -1 }}
      whileTap={{ scale: 0.98 }}
      className={`inline-flex h-[50px] items-center justify-center gap-[10px] rounded-[5px] border border-white px-[30px] font-heading text-[17px] md:text-[20.734px] font-medium leading-[24px] md:leading-[30.186px] text-white ${className}`}
    >
      <span>{children}</span>
      <ArrowIcon />
    </motion.a>
  );
}

export function VehicleWashingPage({ content }: VehicleWashingPageProps) {
  const hero = content?.hero;
  const features = content?.features ?? fallbackFeatureItems.map(([icon, desc]) => ({ icon: `/vehicle-assets/${icon}`, description: desc }));
  const washTypes = content?.washTypes ?? fallbackWashTypes.map(([title, desc]) => ({ title, description: desc }));
  const businessModels = content?.businessModels ?? fallbackBusinessModels.map(([icon, title, desc]) => ({ icon: `/vehicle-assets/${icon}`, title, description: desc }));
  const regionalCards = content?.regionalCards ?? fallbackRegionalCards.map(([icon, region, site, copy, cta, href]) => ({ icon: `/vehicle-assets/${icon}`, region, site, copy, cta, href }));

  return (
    <div className="bg-white text-black">
      <HeroSection
        subtitle={hero?.subtitle}
        title={hero?.title}
        description={hero?.description}
        heroImage={hero?.heroImage}
      />
      <main>
        <SystemFeatures title={content?.featuresSectionTitle} features={features} />
        <WashTypes title={content?.washTypesSectionTitle} washTypes={washTypes} />
        <BusinessModels title={content?.businessModelsSectionTitle} models={businessModels} />
        <RegionalCtas title={content?.regionalSectionTitle} cards={regionalCards} />
      </main>
    </div>
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
    <section id="top" className="relative h-[520px] overflow-hidden bg-brand-navy text-white md:h-[609px]">
      <Image
        src={heroImage ?? "/vehicle-assets/wash-tunnel.png"}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-20"
        style={{ objectPosition: "center" }}
      />
      <div className="relative mx-auto flex h-full 2xl:max-w-[1440px] items-center w-[90%]">
        <motion.div
          initial={{ opacity: 0, x: -28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="w-full max-w-[708px]"
        >
          <p className="font-sans text-[14px] font-bold uppercase leading-[24.227px] tracking-[1.6959px] md:text-[16.959px]">
            {subtitle ?? "Automated Vehicle Washing"}
          </p>
          <h1 className="mt-[15px] font-heading text-[35px] leading-[42px] font-bold md:text-[65px] md:leading-[72.681px]">
            {title ?? "Sustainable Vehicle Washing Solutions"}
          </h1>
          <p className="mt-[15px] max-w-[708px] text-[17px] leading-[24.227px] md:text-[16.959px]">
            {description ??
              "BlueVerse operates and supplies fully automated vehicle washing systems that combine throughput, quality, and water efficiency in a single footprint - designed for petrol stations, malls, fleet depots, automotive dealerships, and government facilities."}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <h2 className="w-full text-center font-heading text-[24px] font-bold leading-[1.06] md:text-[40px] md:leading-normal">
      {children}
    </h2>
  );
}

function SystemFeatures({ title, features }: { title?: string; features: { icon: string; description: string }[] }) {
  return (
    <MotionSection id="vehicle-washing" className="border-b border-[#dfdfdf] py-8 md:py-[70px]">
      <div className="mx-auto flex 2xl:max-w-[1440px] w-[90%] flex-col gap-[30px]">
        <SectionTitle>{title ?? "System Features"}</SectionTitle>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 xl:gap-5">
          {features.map((feature) => (
            <motion.article
              key={feature.description}
              whileHover={{ y: -4 }}
              className="flex min-w-0 flex-col items-center gap-[30px] text-center"
            >
              <span className="relative flex size-[48px] md:size-[58.145px] items-center justify-center rounded-[19.382px] bg-[#e8f4fd]">
                <Image src={feature.icon} alt="" width={30} height={30} className="size-[30px]" />
              </span>
              <p className="max-w-[258.5px] text-[16px] md:text-[18px] font-normal leading-normal tracking-[-0.19px]">{feature.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}

function WashTypes({ title, washTypes }: { title?: string; washTypes: { title: string; description: string }[] }) {
  return (
    <MotionSection id="wash-types" className="border-b border-[#dfdfdf] py-8 md:py-[70px]">
      <div className="mx-auto flex 2xl:max-w-[1440px] w-[90%] flex-col gap-[30px]">
        <SectionTitle>{title ?? "Wash Types Available"}</SectionTitle>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {washTypes.map((type) => (
            <motion.article
              key={type.title}
              whileHover={{ y: -5, borderColor: "rgba(6,43,79,0.7)" }}
              className="flex min-h-[273.372px] flex-col items-center gap-[20px] rounded-[19.382px] border-[1.21px] border-[rgba(6,43,79,0.4)] bg-white px-4 md:px-[30px] py-6 md:py-10 text-center"
            >
              <Image src="/vehicle-assets/wash-type.svg" alt="" width={48.454} height={48.454} className="size-[48.454px]" />
              <div className="flex flex-col items-center gap-[15px]">
                <h3 className="font-heading text-[20px] leading-[24px] md:text-[24.227px] font-bold md:leading-[33.918px] text-brand-navy">{type.title}</h3>
                <p className="text-[15px] leading-[20px] md:text-[16px] md:leading-[22.2px] text-brand-soft">{type.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}

function BusinessModels({ title, models }: { title?: string; models: { icon: string; title: string; description: string }[] }) {
  return (
    <MotionSection id="business-models" className="border-b border-[#dfdfdf] py-8 md:py-[70px]">
      <div className="mx-auto flex 2xl:max-w-[1440px] w-[90%] flex-col gap-[30px]">
        <SectionTitle>{title ?? "Business Models"}</SectionTitle>
        <div className="grid gap-5 xl:grid-cols-3">
          {models.map((model) => (
            <motion.article
              key={model.title}
              whileHover={{ y: -4 }}
              className="flex min-h-[200px] flex-col items-center gap-6 rounded-[16px] bg-[#e8f4fd] px-10 py-8 text-center"
            >
              <Image src={model.icon} alt="" width={48} height={48} className="size-12" />
              <div className="flex w-full flex-col items-center gap-4">
                <h3 className="font-heading text-[20px] leading-[25px] md:text-[24.227px] font-bold md:leading-[33.918px] text-brand-navy">{model.title}</h3>
                <p className="text-[15px] leading-[20px] md:text-[16px] md:leading-[22.2px] text-brand-muted">{model.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}

function RegionalCtas({ title, cards }: { title?: string; cards: { icon: string; region: string; site: string; copy: string; cta: string; href: string }[] }) {
  return (
    <MotionSection id="regions" className="relative z-0 py-[40px] text-white md:pb-[77px] md:pt-[78px]">
      <div
        className="absolute inset-0 -z-10"
        style={{ backgroundImage: "linear-gradient(164.398deg, rgb(33, 98, 175) 0%, rgb(10, 61, 107) 100%)" }}
      />
      <div className="mx-auto grid 2xl:max-w-[1440px] w-[90%] gap-[30px] lg:grid-cols-2">
        {title ? (
          <div className="lg:col-span-2 text-center font-heading text-[24px] font-bold leading-[1.06] md:text-[40px] md:leading-normal">
            {title}
          </div>
        ) : null}
        {cards.map((card) => (
          <motion.article
            key={card.region}
            whileHover={{ y: -5 }}
            className="flex flex-col items-center rounded-[16px] border border-white/20 bg-[rgba(255,255,255,0.1)] p-4 md:p-10 text-center hover:bg-[rgba(255,255,255,0.13)]"
          >
            <div className="flex w-full flex-1 flex-col items-center gap-[30px]">
              <Image src={card.icon} alt="" width={58.145} height={58.145} className="size-[40px] md:size-[58.145px]" />
              <div className="flex flex-col items-center gap-[10px]">
                <h2 className="font-heading text-[30px] font-bold leading-[33.918px]">{card.region}</h2>
                <p className="text-[20px] font-medium italic leading-[24.227px]">{card.site}</p>
                <p className="max-w-[729px] text-[15px] leading-[20px] md:text-[16.959px] md:leading-[24.227px]">{card.copy}</p>
              </div>
              <CtaButton href={card.href} className="mt-auto w-full bg-transparent">
                {card.cta}
              </CtaButton>
            </div>
          </motion.article>
        ))}
      </div>
    </MotionSection>
  );
}
