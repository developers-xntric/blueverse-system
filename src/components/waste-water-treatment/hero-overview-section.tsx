import Image from "next/image";

import type { WastewaterStat } from "@/types/cms";
import { wastewaterStats as fallbackStats } from "@/components/waste-water-treatment/data";

type HeroOverviewSectionProps = {
  stats?: readonly WastewaterStat[] | WastewaterStat[];
  heroSubtitle?: string;
  heroTitle?: string;
  heroDescription?: string;
  heroImage?: string;
};

export function HeroOverviewSection({
  stats,
  heroSubtitle,
  heroTitle,
  heroDescription,
  heroImage,
}: HeroOverviewSectionProps) {
  const statsList = stats && stats.length > 0 ? stats : fallbackStats;

  return (
    <section className="bg-white py-12 md:py-16">
      <div className="mx-auto max-w-[1650px]">
        <div className="grid gap-4 xl:grid-cols-[1.05fr_.95fr] xl:items-center pe-10">
          <div className="relative overflow-hidden rounded-[18px] xl:rounded-none">
            <Image
              src={heroImage ?? "/waste-water-treatment-systems/main-hero.png"}
              alt="BlueVerse wastewater treatment plant"
              width={1664}
              height={936}
              priority
              className="h-auto w-full"
            />
          </div>
          <div className="">
            <p className="bg-brand-gradient bg-clip-text font-heading text-[15px] leading-[1.1] font-semibold uppercase text-transparent">
              {heroSubtitle ?? "Waste Water Treatment Systems"}
            </p>
            <h1 className="mt-2 font-heading text-[42px] leading-[1.05] font-bold text-brand-navy md:text-[50px] xl:text-[40px]">
              {heroTitle ?? "Enabling Water Security\nDecentralised, at Scale"}
            </h1>
            <p className="mt-7.5 text-[20px] leading-[1.4] text-brand-muted md:text-[17px] text-balance md:leading-[1.405]">
              {heroDescription ??
                "BlueVerse Cleantech delivers end-to-end EPC solutions for decentralised desalination and wastewater treatment plants powered by proprietary ElectroX technology. A non-contact micro-electrolysis process built indigenously for treating the toughest pollutants. | 4 Patents Granted ·"}
            </p>
          </div>
        </div>

        <div className="2xl:max-w-360 w-[90%] mx-auto mt-7.5 flex items-center gap-4">
          <p className="bg-brand-gradient bg-clip-text font-heading text-[15px] leading-[1.1] font-semibold uppercase text-transparent">
            Water Treatment Systems
          </p>
          <div className="h-px flex-1 bg-[#2162af]" />
        </div>

        <div className="2xl:max-w-360 w-[90%] mx-auto mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-5 xl:gap-7.5">
          {statsList.map((stat) => (
            <article
              key={stat.label}
              className="rounded-[20px] border border-[#dbdbdb] bg-white px-7.5 py-7 text-center"
            >
              <div className="mx-auto flex size-20 items-center justify-center rounded-full bg-brand-ice-strong">
                <Image src={stat.icon} alt="" width={66} height={67} className="w-12" />
              </div>
              <p className="mt-5 font-heading text-[26px] leading-none font-bold text-brand-navy">
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
