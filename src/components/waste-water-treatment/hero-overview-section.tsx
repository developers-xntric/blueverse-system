import Image from "next/image";

import { wastewaterStats } from "@/components/waste-water-treatment/data";

export function HeroOverviewSection() {
  return (
    <section className="bg-white py-12 md:py-16">
      <div className="mx-auto max-w-[1650px]">
        <div className="grid gap-10 xl:grid-cols-[1.05fr_.95fr] xl:items-center">
          <div className="relative overflow-hidden rounded-[18px] xl:rounded-none">
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 hidden w-28 bg-linear-to-r from-transparent to-white xl:block" />
            <Image
              src="/waste-water-treatment-systems/hero-main.png"
              alt="BlueVerse wastewater treatment plant"
              width={1664}
              height={936}
              priority
              className="h-auto w-full"
            />
          </div>
          <div className="max-w-202.5">
            <p className="bg-brand-gradient bg-clip-text font-heading text-[14px] leading-[1.1] font-semibold uppercase text-transparent">
              Waste Water Treatment Systems
            </p>
            <h1 className="mt-2 font-heading text-[42px] leading-[1.05] font-bold text-brand-navy md:text-[50px] xl:text-[40px]">
              Enabling Water Security
              <br />
              Decentralised, at Scale
            </h1>
            <p className="mt-7.5 text-[20px] leading-[1.4] text-brand-muted md:text-[22px] md:leading-[1.405]">
              BlueVerse Cleantech delivers end-to-end EPC solutions for
              decentralised desalination and wastewater treatment plants powered
              by proprietary ElectroX technology. A non-contact
              micro-electrolysis process built indigenously for treating the
              toughest pollutants. | 4 Patents Granted ·
            </p>
          </div>
        </div>

        <div className="mt-7.5 flex items-center gap-8">
          <p className="bg-brand-gradient bg-clip-text font-heading text-[19px] leading-[1.1] font-semibold uppercase text-transparent">
            Water Treatment Systems
          </p>
          <div className="h-px flex-1 bg-[#2162af]" />
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-5 xl:gap-[30px]">
          {wastewaterStats.map((stat) => (
            <article
              key={stat.label}
              className="rounded-[20px] border border-[#dbdbdb] bg-white px-[30px] py-10 text-center"
            >
              <div className="mx-auto flex size-[112px] items-center justify-center rounded-full bg-brand-ice-strong">
                <Image src={stat.icon} alt="" width={66} height={67} className="h-auto w-[66px]" />
              </div>
              <p className="mt-[29px] font-heading text-[35px] leading-none font-bold text-brand-navy">
                {stat.value}
              </p>
              <p className="mt-[15px] text-[22px] leading-[1.1] text-brand-muted">
                {stat.label}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
