import Image from "next/image";

import { MobileCarousel } from "@/components/waste-water-treatment/mobile-carousel";
import type { WasteWaterTreatmentPageData } from "@/lib/types";

type ElectroxSectionProps = {
  data: WasteWaterTreatmentPageData;
};

export function ElectroxSection({ data }: ElectroxSectionProps) {
  return (
    <section className="mx-auto bg-brand-ice-strong py-12 md:py-15 ">
      <div className="mx-auto w-[90%] 2xl:max-w-360">
        <div className="grid gap-5 xl:grid-cols-2 xl:items-start">
          <div>
            <p className="bg-brand-gradient bg-clip-text font-heading text-[16px] font-semibold uppercase leading-[1.1] text-transparent sm:text-[19px]">
              {data.electroxSection.eyebrow}
            </p>
            <h2 className="mt-4 font-heading text-[24px] font-bold leading-[1.1] text-brand-navy sm:mt-5 md:text-[35px]">
              {data.electroxSection.title}
            </h2>
          </div>
          <p className="text-[16px] leading-[1.55] text-brand-muted sm:text-[18px] sm:leading-normal xl:pt-1 xl:text-[16px]">
            {data.electroxSection.description}
          </p>
        </div>

        <div className="mt-10 sm:hidden">
          <MobileCarousel autoplayMs={2800}>
            {data.electroxProcesses.map((process) => (
              <article key={process.title} className="rounded-2xl bg-white/60 p-4">
                <div className="flex size-10 items-center justify-center rounded-full bg-white">
                  {process.icon ? (
                    <Image
                      src={process.icon.url}
                      alt={process.icon.alt || process.title}
                      width={30}
                      height={30}
                    />
                  ) : null}
                </div>
                <h3 className="mt-3.75 font-heading text-[16px] font-bold leading-[1.41] text-brand-navy">
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
          {data.electroxProcesses.map((process) => (
            <article
              key={process.title}
              className="rounded-2xl bg-white/60 p-4 sm:p-5 xl:rounded-none xl:bg-transparent xl:p-0 "
            >
              <div className="flex w-fit items-center justify-center rounded-full bg-white p-2">
                {process.icon ? (
                  <Image
                    src={process.icon.url}
                    alt={process.icon.alt || process.title}
                    width={25}
                    height={25}
                  />
                ) : null}
              </div>
              <h3 className="mt-3.75 font-heading text-[16px] font-bold leading-[1.41] text-brand-navy">
                {process.title}
              </h3>
              <p className="mt-2 text-[13px] leading-[1.13] text-[#4A5565] text-brand-muted">
                {process.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
