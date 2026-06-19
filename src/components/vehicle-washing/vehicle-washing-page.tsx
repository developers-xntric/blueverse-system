"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { ReactNode } from "react";

const featureItems = [
  ["feature-1.svg", "Fully automated washing tunnels and robotic gantry systems"],
  ["feature-2.svg", "Express tunnel wash: high-volume throughput for busy locations"],
  ["feature-3.svg", "Robot AI Wash: Dubai's first AI-powered robotic wash (coming soon)"],
  ["feature-4.svg", "95% water recycling per wash cycle via integrated ETP"],
  ["feature-5.svg", "IoT-enabled - real-time wash data feeds into ESG dashboard"],
  ["feature-6.svg", "Zero capex model available: Pay-per-Wash / Wash-as-a-Service (WaaS)"],
] as const;

const washTypes = [
  [
    "Express Tunnel Wash",
    "High-speed automated wash. Ideal for petrol stations, mall carparks, fleet depots. High throughput, consistent quality.",
  ],
  ["Manual Wash", "Hand-crafted wash by trained technicians. For premium and high-value vehicles."],
  ["Robot AI Wash", "AI-powered robotic wash system - coming soon to UAE. Precision, speed, scratch-free brilliance."],
  [
    "2-Wheeler Automated Wash",
    "Patented automated motorcycle wash system. 8 washes per hour, 138 sq.ft. footprint, 98% water recovery.",
  ],
] as const;

const businessModels = [
  ["business-1.svg", "CapEx purchase", "Full system ownership"],
  ["business-2.svg", "Wash-as-a-Service (WaaS)", "Revenue-share or subscription model, zero upfront capex"],
  ["business-3.svg", "Annual Maintenance Contracts (AMCs)", "Full system upkeep and consumables"],
] as const;

const regionalCards = [
  [
    "india.svg",
    "India",
    "blueverseindia.com",
    "Automated 2-wheeler and 4-wheeler wash solutions for OEMs, dealerships, fuel stations, and independent wash centres across India.",
    "Visit BlueVerse India",
    "https://blueverseindia.com/",
  ],
  [
    "uae.svg",
    "UAE",
    "blueverse.ae",
    "Eco-friendly, high-performance vehicle washing services and solutions tailored for the Gulf market and regional partners.",
    "Visit BlueVerse UAE",
    "https://blueverse.ae/",
  ],
] as const;

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
      className={`inline-flex h-[50px] items-center justify-center gap-[5px] rounded-[5px] border border-white px-[30px] font-heading text-[20.734px] font-medium leading-[30.186px] text-white ${className}`}
    >
      <span>{children}</span>
      <ArrowIcon />
    </motion.a>
  );
}

export function VehicleWashingPage() {
  return (
    <div className="bg-white text-black">
      <Hero />
      <main>
        <SystemFeatures />
        <WashTypes />
        <BusinessModels />
        <RegionalCtas />
      </main>
    </div>
  );
}

function Hero() {
  return (
    <section id="top" className="relative h-[520px] overflow-hidden bg-brand-navy text-white md:h-[609px]">
      <Image
        src="/vehicle-assets/wash-tunnel.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-20"
        style={{ objectPosition: "center" }}
      />
      <div className="relative mx-auto flex h-full  2xl:max-w-[1440px] items-center w-[90%]">
        <motion.div
          initial={{ opacity: 0, x: -28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="w-full max-w-[708px]"
        >
          <p className="font-sans text-[14px] font-bold uppercase leading-[24.227px] tracking-[1.6959px] md:text-[16.959px]">
            Automated Vehicle Washing
          </p>
          <h1 className="mt-[15px] font-heading text-[44px] font-bold leading-normal md:text-[65px] md:leading-[72.681px]">
            Sustainable Vehicle Washing Solutions
          </h1>
          <p className="mt-[15px] max-w-[708px] text-[15.5px] leading-[24.227px] md:text-[16.959px]">
            BlueVerse operates and supplies fully automated vehicle washing systems that combine throughput, quality, and water
            efficiency in a single footprint - designed for petrol stations, malls, fleet depots, automotive dealerships, and
            government facilities.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <h2 className="w-full text-center font-heading text-[38px] font-bold leading-[1.06] md:text-[40px] md:leading-normal">
      {children}
    </h2>
  );
}

function SystemFeatures() {
  return (
    <MotionSection
      id="vehicle-washing"
      className="border-b border-[#dfdfdf]  py-16 md:py-[70px]"
    >
      <div className="mx-auto flex 2xl:max-w-[1440px] w-[90%] flex-col gap-[30px]">
        <SectionTitle>System Features</SectionTitle>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 xl:gap-5">
          {featureItems.map(([icon, label]) => (
            <motion.article
              key={label}
              whileHover={{ y: -4 }}
              className="flex min-w-0 flex-col items-center gap-[30px] text-center"
            >
              <span className="relative flex size-[58.145px] items-center justify-center rounded-[19.382px] bg-[#e8f4fd]">
                <Image src={`/vehicle-assets/${icon}`} alt="" width={30} height={30} className="size-[30px]" />
              </span>
              <p className="max-w-[258.5px] text-[18px] font-normal leading-normal tracking-[-0.19px]">{label}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}

function WashTypes() {
  return (
    <MotionSection id="wash-types" className="border-b border-[#dfdfdf]  py-16  md:py-[70px]">
      <div className="mx-auto flex 2xl:max-w-[1440px] w-[90%] flex-col gap-[30px]">
        <SectionTitle>Wash Types Available</SectionTitle>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {washTypes.map(([title, description]) => (
            <motion.article
              key={title}
              whileHover={{ y: -5, borderColor: "rgba(6,43,79,0.7)" }}
              className="flex min-h-[273.372px] flex-col items-center gap-[20px] rounded-[19.382px] border-[1.21px] border-[rgba(6,43,79,0.4)] bg-white px-[30px] py-10 text-center"
            >
              <Image src="/vehicle-assets/wash-type.svg" alt="" width={48.454} height={48.454} className="size-[48.454px]" />
              <div className="flex flex-col items-center gap-[15px]">
                <h3 className="font-heading text-[24.227px] font-bold leading-[33.918px] text-brand-navy">{title}</h3>
                <p className="text-[16px] leading-[22.2px] text-brand-soft">{description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}

function BusinessModels() {
  return (
    <MotionSection id="business-models" className="border-b border-[#dfdfdf]  py-16  md:py-[70px]">
      <div className="mx-auto flex 2xl:max-w-[1440px] w-[90%] flex-col gap-[30px]">
        <SectionTitle>Business Models</SectionTitle>
        <div className="grid gap-5 xl:grid-cols-3">
          {businessModels.map(([icon, title, description]) => (
            <motion.article
              key={title}
              whileHover={{ y: -4 }}
              className="flex min-h-[200px] flex-col items-center gap-6 rounded-[16px] bg-[#e8f4fd] px-10 py-8 text-center"
            >
              <Image src={`/vehicle-assets/${icon}`} alt="" width={48} height={48} className="size-12" />
              <div className="flex w-full flex-col items-center gap-4">
                <h3 className="font-heading text-[20px] font-bold leading-7 text-brand-navy">{title}</h3>
                <p className="text-[14px] leading-5 text-brand-muted">{description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}

function RegionalCtas() {
  return (
    <MotionSection
      id="regions"
      className="relative z-0  py-[70px] text-white  md:pb-[77px] md:pt-[78px]"
    >
      <div
        className="absolute inset-0 -z-10"
        style={{ backgroundImage: "linear-gradient(164.398deg, rgb(33, 98, 175) 0%, rgb(10, 61, 107) 100%)" }}
      />
      <div className="mx-auto grid 2xl:max-w-[1440px] w-[90%] gap-[30px] lg:grid-cols-2">
        {regionalCards.map(([icon, region, site, copy, cta, href]) => (
          <motion.article
            key={region}
            whileHover={{ y: -5 }}
            className="flex min-h-[381.145px] flex-col items-center rounded-[16px] border border-white/20 bg-[rgba(255,255,255,0.1)] p-10 text-center hover:bg-[rgba(255,255,255,0.13)]"
          >
            <div className="flex w-full flex-1 flex-col items-center gap-[30px]">
              <Image src={`/vehicle-assets/${icon}`} alt="" width={58.145} height={58.145} className="size-[58.145px]" />
              <div className="flex flex-col items-center gap-[10px]">
                <h2 className="font-heading text-[30px] font-bold leading-[33.918px]">{region}</h2>
                <p className="text-[20px] font-medium italic leading-[24.227px]">{site}</p>
                <p className="max-w-[729px] text-[16.959px] leading-[24.227px]">{copy}</p>
              </div>
              <CtaButton href={href} className="mt-auto w-full bg-transparent">
                {cta}
              </CtaButton>
            </div>
          </motion.article>
        ))}
      </div>
    </MotionSection>
  );
}
