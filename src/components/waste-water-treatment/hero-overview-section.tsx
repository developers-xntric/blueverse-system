import Image from "next/image";

import { MobileCarousel } from "@/components/waste-water-treatment/mobile-carousel";
import type { WasteWaterTreatmentPageData } from "@/lib/types";

type HeroOverviewSectionProps = {
  data: WasteWaterTreatmentPageData;
};

export function HeroOverviewSection({ data }: HeroOverviewSectionProps) {
  return (
    <section className="bg-white py-12 md:py-16">
      <div className="mx-auto max-w-[1650px]">
        <div className="grid gap-6 px-4 sm:px-6 xl:grid-cols-[1.05fr_.95fr] xl:items-center xl:pe-10">
          <div className="relative overflow-hidden rounded-[18px] xl:rounded-none">
            {data.hero.heroImage ? (
              <Image
                src={data.hero.heroImage.url}
                alt={data.hero.heroImage.alt || data.hero.title}
                width={1664}
                height={936}
                priority
                className="h-auto w-full"
              />
            ) : null}
          </div>
          <div>
            <p className="bg-brand-gradient bg-clip-text font-heading text-[15px] font-semibold uppercase leading-[1.1] text-transparent">
              {data.hero.subtitle}
            </p>
            <h1 className="mt-2 font-heading text-[34px] font-bold leading-[1.05] text-brand-navy sm:text-[38px] md:text-[50px] xl:text-[40px]">
              {data.hero.title}
            </h1>
            <p className="mt-6 text-balance text-[16px] leading-[1.55] text-brand-muted sm:text-[18px] md:mt-7.5 md:text-[17px] md:leading-[1.405]">
              {data.hero.description}
            </p>
          </div>
        </div>

        <div className="mx-auto mt-7.5 flex w-[90%] items-center gap-4 2xl:max-w-360">
          <p className="bg-brand-gradient bg-clip-text font-heading text-[15px] font-semibold uppercase leading-[1.1] text-transparent">
            {data.statsSectionLabel}
          </p>
          <div className="h-px flex-1 bg-[#2162af]" />
        </div>

        <div className="mx-auto mt-10 w-[90%] sm:hidden 2xl:max-w-360">
          <MobileCarousel autoplayMs={3200}>
            {data.stats.map((stat) => (
              <article
                key={stat.label}
                className="rounded-[20px] border border-[#dbdbdb] bg-white px-6 py-7 text-center"
              >
                <div className="mx-auto flex size-20 items-center justify-center rounded-full bg-brand-ice-strong">
                  {stat.icon ? (
                    <Image
                      src={stat.icon.url}
                      alt={stat.icon.alt || stat.label}
                      width={66}
                      height={67}
                      className="w-12"
                      priority
                    />
                  ) : null}
                </div>
                <p className="mt-5 font-heading text-[26px] font-bold leading-none text-brand-navy">
                  {stat.value}
                </p>
                <p className="mt-3.75 text-[16px] leading-[1.1] text-brand-muted">
                  {stat.label}
                </p>
              </article>
            ))}
          </MobileCarousel>
        </div>

        <div className="mx-auto mt-10 hidden w-[90%] gap-6 sm:grid sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-5 xl:gap-7.5 2xl:max-w-360">
          {data.stats.map((stat) => (
            <article
              key={stat.label}
              className="rounded-[20px] border border-[#dbdbdb] bg-white px-6 py-7 text-center sm:px-7.5"
            >
              <div className="mx-auto flex size-20 items-center justify-center rounded-full bg-brand-ice-strong">
                {stat.icon ? (
                  <Image
                    src={stat.icon.url}
                    alt={stat.icon.alt || stat.label}
                    width={66}
                    height={67}
                    className="w-12"
                    priority
                  />
                ) : null}
              </div>
              <p className="mt-5 font-heading text-[26px] font-bold leading-none text-brand-navy">
                {stat.value}
              </p>
              <p className="mt-3.75 text-[16px] leading-[1.1] text-brand-muted">
                {stat.label}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
