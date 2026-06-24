"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState, type ReactNode } from "react";

import type { VehicleWashingPageData } from "@/lib/types";

type VehicleWashingPageProps = {
  data: VehicleWashingPageData;
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
      className={`inline-flex h-12.5 items-center justify-center gap-2.5 rounded-[5px] border border-white px-7.5 font-heading text-[17px] md:text-[20.734px] font-medium leading-6 md:leading-[30.186px] text-white ${className}`}
    >
      <span>{children}</span>
      <ArrowIcon />
    </motion.a>
  );
}

function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <h2 className="w-full text-center font-heading text-[24px] font-bold leading-[1.06] md:text-[40px] md:leading-normal">
      {children}
    </h2>
  );
}

export function VehicleWashingPage({ data }: VehicleWashingPageProps) {
  return (
    <div className="bg-white text-black">
      <Hero data={data} />
      <main>
        <SystemFeatures data={data} />
        <WashTypes data={data} />
        <BusinessModels data={data} />
        <RegionalCtas data={data} />
      </main>
    </div>
  );
}

function Hero({ data }: VehicleWashingPageProps) {
  return (
    <section id="top" className="relative h-130 overflow-hidden bg-brand-navy text-white md:h-152.25">
      {data.hero.heroImage ? (
        <Image
          src={data.hero.heroImage.url}
          alt={data.hero.heroImage.alt || data.hero.title}
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-20"
          style={{ objectPosition: "center" }}
        />
      ) : null}
      <div className="relative mx-auto flex h-full w-[90%] items-center 2xl:max-w-360">
        <motion.div
          initial={{ opacity: 0, x: -28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="w-full max-w-177"
        >
          <p className="font-sans text-[14px] font-bold uppercase leading-[24.227px] tracking-[1.6959px] md:text-[16.959px]">
            {data.hero.subtitle}
          </p>
          <h1 className="mt-3.75 font-heading text-[35px] font-bold leading-10.5 md:text-[65px] md:leading-[72.681px]">
            {data.hero.title}
          </h1>
          <p className="mt-3.75 max-w-177 text-[17px] leading-[24.227px] md:text-[16.959px]">
            {data.hero.description}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function SystemFeatures({ data }: VehicleWashingPageProps) {
  return (
    <MotionSection
      id="vehicle-washing"
      className="border-b border-[#dfdfdf]  py-8 md:py-17.5"
    >
      <div className="mx-auto flex w-[90%] flex-col gap-7.5 2xl:max-w-360">
        <SectionTitle>{data.featuresSectionTitle}</SectionTitle>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 xl:gap-5">
          {data.features.map((feature) => (
            <motion.article
              key={feature.description}
              whileHover={{ y: -4 }}
              className="flex min-w-0 flex-col items-center gap-7.5 text-center"
            >
              <span className="relative flex size-12 items-center justify-center rounded-[19.382px] bg-[#e8f4fd] md:size-[58.145px]">
                {feature.icon ? (
                  <Image src={feature.icon.url} alt={feature.icon.alt || ""} width={30} height={30} className="size-7.5" />
                ) : null}
              </span>
              <p className="max-w-[258.5px] text-[13px] font-normal leading-normal tracking-[-0.19px] md:text-[18px]">
                {feature.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}

function WashTypes({ data }: VehicleWashingPageProps) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [activeDot, setActiveDot] = useState(0);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    if (!isMobile) return;
    const el = carouselRef.current;
    if (!el) return;

    const updateDot = () => {
      const cardWidth = el.querySelector("article")?.offsetWidth ?? 280;
      const gap = 20;
      const index = Math.round(el.scrollLeft / (cardWidth + gap));
      setActiveDot(Math.min(index, data.washTypes.length - 1));
    };

    el.addEventListener("scroll", updateDot);
    return () => el.removeEventListener("scroll", updateDot);
  }, [data.washTypes.length, isMobile]);

  useEffect(() => {
    if (!isMobile) return;
    const el = carouselRef.current;
    if (!el) return;

    const interval = setInterval(() => {
      const cardWidth = el.querySelector("article")?.offsetWidth ?? 280;
      const gap = 20;
      const maxScroll = el.scrollWidth - el.clientWidth;

      if (el.scrollLeft >= maxScroll - 10) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        el.scrollBy({ left: cardWidth + gap, behavior: "smooth" });
      }
    }, 1500);

    return () => clearInterval(interval);
  }, [isMobile]);

  return (
    <MotionSection id="wash-types" className="border-b border-[#dfdfdf] py-8 md:py-17.5">
      <div className="mx-auto flex w-[90%] flex-col gap-7.5 2xl:max-w-360">
        <SectionTitle>{data.washTypesSectionTitle}</SectionTitle>
        <div ref={carouselRef} className="flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 scrollbar-hide md:grid md:grid-cols-2 md:px-0 xl:grid-cols-4">
          {data.washTypes.map((washType) => (
            <motion.article
              key={washType.title}
              className="flex min-h-[273.372px] min-w-[calc(100%-10px)] snap-start flex-col items-center gap-5 rounded-[19.382px] border-[1.21px] border-[rgba(6,43,79,0.4)] bg-white px-4 py-6 text-center md:min-w-0 md:px-7.5 md:py-10"
            >
              <Image src="/vehicle-assets/wash-type.svg" alt="" width={48.454} height={48.454} className="size-[48.454px]" />
              <div className="flex flex-col items-center gap-3.75">
                <h3 className="font-heading text-[20px] font-bold leading-6 text-brand-navy md:text-[24.227px] md:leading-[33.918px]">
                  {washType.title}
                </h3>
                <p className="text-[15px] leading-5 text-brand-soft md:text-[16px] md:leading-[22.2px]">
                  {washType.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
        {isMobile && (
          <div className="flex items-center justify-center gap-2">
            {data.washTypes.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => {
                  const el = carouselRef.current;
                  if (!el) return;
                  const cardWidth = el.querySelector("article")?.offsetWidth ?? 280;
                  el.scrollTo({ left: (cardWidth + 20) * i, behavior: "smooth" });
                }}
                className={`size-2.5 rounded-full transition-colors ${
                  i === activeDot ? "bg-brand-sky" : "bg-brand-navy/30"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </MotionSection>
  );
}

function BusinessModels({ data }: VehicleWashingPageProps) {
  return (
    <MotionSection id="business-models" className="border-b border-[#dfdfdf] py-8 md:py-17.5">
      <div className="mx-auto flex w-[90%] flex-col gap-7.5 2xl:max-w-360">
        <SectionTitle>{data.businessModelsSectionTitle}</SectionTitle>
        <div className="grid gap-5 xl:grid-cols-3">
          {data.businessModels.map((businessModel) => (
            <motion.article
              key={businessModel.title}
              whileHover={{ y: -4 }}
              className="flex min-h-50 flex-col items-center gap-6 rounded-2xl bg-[#e8f4fd] px-10 py-8 text-center"
            >
              {businessModel.icon ? (
                <Image src={businessModel.icon.url} alt={businessModel.icon.alt || businessModel.title} width={48} height={48} className="size-12" />
              ) : null}
              <div className="flex w-full flex-col items-center gap-4">
                <h3 className="font-heading text-[20px] font-bold leading-6.25 text-brand-navy md:text-[24.227px] md:leading-[33.918px]">
                  {businessModel.title}
                </h3>
                <p className="text-[15px] leading-5 text-brand-muted md:text-[16px] md:leading-[22.2px]">
                  {businessModel.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}

function RegionalCtas({ data }: VehicleWashingPageProps) {
  return (
    <MotionSection
      id="regions"
      className="relative z-0 py-10 text-white md:pb-19.25 md:pt-19.5"
    >
      <div
        className="absolute inset-0 -z-10"
        style={{ backgroundImage: "linear-gradient(164.398deg, rgb(33, 98, 175) 0%, rgb(10, 61, 107) 100%)" }}
      />
      <div className="mx-auto grid w-[90%] gap-7.5 2xl:max-w-360 lg:grid-cols-2">
        {data.regionalCards.map((card) => (
          <motion.article
            key={card.region}
            whileHover={{ y: -5 }}
            className="flex  flex-col items-center rounded-2xl border border-white/20 bg-[rgba(255,255,255,0.1)] p-4 text-center hover:bg-[rgba(255,255,255,0.13)] md:p-10"
          >
            <div className="flex w-full flex-1 flex-col items-center gap-7.5 ">
              {card.icon ? (
                <Image src={card.icon.url} alt={card.icon.alt || card.region} width={58.145} height={58.145} className="size-10 md:size-[58.145px]" />
              ) : null}
              <div className="flex flex-col items-center gap-2.5">
                <h2 className="font-heading text-[30px] font-bold leading-[33.918px]">{card.region}</h2>
                <p className="text-[20px] font-medium italic leading-[24.227px]">{card.site}</p>
                <p className="max-w-182.25 text-[15px] md:text-[16.959px]">{card.copy}</p>
              </div>
              {card.cta ? (
                <CtaButton href={card.cta.href} className="mt-auto w-full bg-transparent">
                  {card.cta.label}
                </CtaButton>
              ) : null}
            </div>
          </motion.article>
        ))}
      </div>
    </MotionSection>
  );
}
