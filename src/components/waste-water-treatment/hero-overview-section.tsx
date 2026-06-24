import Image from "next/image";

import { wastewaterStats } from "@/components/waste-water-treatment/data";
import { MobileCarousel } from "@/components/waste-water-treatment/mobile-carousel";

export function HeroOverviewSection() {
  return (
    <section className="bg-white py-12 md:py-16">
      <div className="mx-auto max-w-[1650px]">
        <div className="grid gap-6 px-4 sm:px-6 xl:grid-cols-[1.05fr_.95fr] xl:items-center xl:pe-10">
          <div className="relative overflow-hidden rounded-[18px] xl:rounded-none">
            <Image
              src="/waste-water-treatment-systems/main-hero.png"
              alt="BlueVerse wastewater treatment plant"
              width={1664}
              height={936}
              priority
              className="h-auto w-full"
            />
          </div>
          <div>
            <p className="bg-brand-gradient bg-clip-text font-heading text-[15px] leading-[1.1] font-semibold uppercase text-transparent">
              Waste Water Treatment Systems
            </p>
            <h1 className="mt-2 font-heading text-[34px] leading-[1.05] font-bold text-brand-navy sm:text-[38px] md:text-[50px] xl:text-[40px]">
              Enabling Water Security
              <br />
              Decentralised, at Scale
            </h1>
            <p className="mt-6 text-[16px] leading-[1.55] text-brand-muted text-balance sm:text-[18px] md:mt-7.5 md:text-[17px] md:leading-[1.405]">
              BlueVerse Cleantech delivers end-to-end EPC solutions for
              decentralised desalination and wastewater treatment plants powered
              by proprietary ElectroX technology. A non-contact
              micro-electrolysis process built indigenously for treating the
              toughest pollutants. | 4 Patents Granted ·
            </p>
          </div>
        </div>

        <div className="2xl:max-w-360 mx-auto mt-7.5 flex w-[90%] items-center gap-4">
          <p className="bg-brand-gradient bg-clip-text font-heading text-[15px] leading-[1.1] font-semibold uppercase text-transparent">
            Water Treatment Systems
          </p>
          <div className="h-px flex-1 bg-[#2162af]" />
        </div>

        <div className="2xl:max-w-360 mx-auto mt-10 w-[90%] sm:hidden">
          <MobileCarousel autoplayMs={3200}>
            {wastewaterStats.map((stat) => (
              <article
                key={stat.label}
                className="rounded-[20px] border border-[#dbdbdb] bg-white px-6 py-7 text-center"
              >
                <div className="mx-auto flex size-20 items-center justify-center rounded-full bg-brand-ice-strong">
                  <Image src={stat.icon} alt="" width={66} height={67} className="w-12" priority />
                </div>
                <p className="mt-5 font-heading text-[26px] leading-none font-bold text-brand-navy">
                  {stat.value}
                </p>
                <p className="mt-3.75 text-[16px] leading-[1.1] text-brand-muted">
                  {stat.label}
                </p>
              </article>
            ))}
          </MobileCarousel>
        </div>

        <div className="2xl:max-w-360 mx-auto mt-10 hidden w-[90%] gap-6 sm:grid sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-5 xl:gap-7.5">
          {wastewaterStats.map((stat) => (
            <article
              key={stat.label}
              className="rounded-[20px] border border-[#dbdbdb] bg-white px-6 py-7 text-center sm:px-7.5"
            >
              <div className="mx-auto flex size-20 items-center justify-center rounded-full bg-brand-ice-strong">
                <Image src={stat.icon} alt="" width={66} height={67} className="w-12" priority />
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
