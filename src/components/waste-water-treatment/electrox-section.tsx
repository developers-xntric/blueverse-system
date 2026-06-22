import Image from "next/image";

import type { ElectroxProcess } from "@/types/cms";
import { electroxProcesses as fallbackProcesses } from "@/components/waste-water-treatment/data";

type ElectroxSectionProps = {
  processes?: readonly ElectroxProcess[] | ElectroxProcess[];
};

export function ElectroxSection({ processes }: ElectroxSectionProps) {
  const processList = processes && processes.length > 0 ? processes : fallbackProcesses;

  return (
    <section className="bg-brand-ice-strong py-12 md:py-15 2xl:max-w-360 w-[90%] mx-auto">
      <div className="mx-auto max-w-[1652px]">
        <div className="grid xl:grid-cols-2 xl:items-start">
          <div>
            <p className="bg-brand-gradient bg-clip-text font-heading text-[19px] leading-[1.1] font-semibold uppercase text-transparent">
              ElectroX™ — Six processes.
            </p>
            <h2 className="mt-5 font-heading text-[24px] leading-[1.1] font-bold text-brand-navy md:text-[35px]">
              One reactor. Infinite possibilities.
            </h2>
          </div>
          <p className="text-[18px] leading-normal text-brand-muted xl:pt-1 xl:text-[16px]">
            ElectroX™ Six processes. One reactor. Infinite possibilities.
            Indra&apos;s patented non-contact micro-electrolysis platform
            replacing chemical-heavy, multi-stage conventional treatment with a
            single electricity-driven reactor. Handles pollutant shock loads
            with zero chemical dosing in primary treatment.
          </p>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-2 xl:grid-cols-6 xl:gap-5">
          {processList.map((process) => (
            <article key={process.title} className="xl:px-5">
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
