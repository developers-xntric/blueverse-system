import Image from "next/image";

import { electroxProcesses } from "@/components/waste-water-treatment/data";
import { MobileCarousel } from "@/components/waste-water-treatment/mobile-carousel";

export function ElectroxSection() {
  return (
    <section className="mx-auto w-[90%] bg-brand-ice-strong py-12 md:py-15 2xl:max-w-360">
      <div className="mx-auto max-w-[1652px]">
        <div className="grid gap-5 xl:grid-cols-2 xl:items-start">
          <div>
            <p className="bg-brand-gradient bg-clip-text font-heading text-[16px] leading-[1.1] font-semibold uppercase text-transparent sm:text-[19px]">
              ElectroX™ — Six processes.
            </p>
            <h2 className="mt-4 font-heading text-[24px] leading-[1.1] font-bold text-brand-navy sm:mt-5 md:text-[35px]">
              One reactor. Infinite possibilities.
            </h2>
          </div>
          <p className="text-[16px] leading-[1.55] text-brand-muted sm:text-[18px] sm:leading-normal xl:pt-1 xl:text-[16px]">
            ElectroX™ Six processes. One reactor. Infinite possibilities.
            Indra&apos;s patented non-contact micro-electrolysis platform
            replacing chemical-heavy, multi-stage conventional treatment with a
            single electricity-driven reactor. Handles pollutant shock loads
            with zero chemical dosing in primary treatment.
          </p>
        </div>

        <div className="mt-10 sm:hidden">
          <MobileCarousel autoplayMs={2800}>
            {electroxProcesses.map((process) => (
              <article key={process.title} className="rounded-2xl bg-white/60 p-4">
                <div className="flex size-10 items-center justify-center rounded-full bg-white">
                  <Image src={process.icon} alt="" width={30} height={30} />
                </div>
                <h3 className="mt-3.75 font-heading text-[16px] leading-[1.41] font-bold text-brand-navy">
                  {process.title}
                </h3>
                <p className="mt-2 text-[12px] leading-[1.13] text-brand-muted">
                  {process.description}
                </p>
              </article>
            ))}
          </MobileCarousel>
        </div>

        <div className="mt-10 hidden gap-6 sm:grid sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-6 xl:gap-5">
          {electroxProcesses.map((process) => (
            <article key={process.title} className="rounded-2xl bg-white/60 p-4 sm:p-5 xl:rounded-none xl:bg-transparent xl:p-0 xl:px-5">
              <div className="flex size-10 items-center justify-center rounded-full bg-white">
                <Image src={process.icon} alt="" width={30} height={30} />
              </div>
              <h3 className="mt-3.75 font-heading text-[16px] leading-[1.41] font-bold text-brand-navy">
                {process.title}
              </h3>
              <p className="mt-2 text-[12px] leading-[1.13] text-brand-muted">
                {process.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
