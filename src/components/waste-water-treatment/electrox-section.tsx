import Image from "next/image";

import { electroxProcesses } from "@/components/waste-water-treatment/data";

export function ElectroxSection() {
  return (
    <section className="bg-brand-ice-strong px-5 py-12 md:px-10 md:py-[60px] xl:px-[134px]">
      <div className="mx-auto max-w-[1652px]">
        <div className="grid gap-8 xl:grid-cols-[803px_1fr] xl:items-start xl:gap-5">
          <div>
            <p className="bg-brand-gradient bg-clip-text font-heading text-[19px] leading-[1.1] font-semibold uppercase text-transparent">
              ElectroX™ — Six processes.
            </p>
            <h2 className="mt-5 font-heading text-[42px] leading-[1.1] font-bold text-brand-navy md:text-[50px]">
              One reactor. Infinite possibilities.
            </h2>
          </div>
          <p className="text-[18px] leading-[1.5] text-brand-muted xl:pt-1 xl:text-[20px]">
            ElectroX™ Six processes. One reactor. Infinite possibilities.
            Indra&apos;s patented non-contact micro-electrolysis platform
            replacing chemical-heavy, multi-stage conventional treatment with a
            single electricity-driven reactor. Handles pollutant shock loads
            with zero chemical dosing in primary treatment.
          </p>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-2 xl:grid-cols-6 xl:gap-5">
          {electroxProcesses.map((process) => (
            <article key={process.title} className="xl:px-5">
              <div className="flex size-[60px] items-center justify-center rounded-full bg-white">
                <Image src={process.icon} alt="" width={30} height={30} />
              </div>
              <h3 className="mt-[15px] font-heading text-[22px] leading-[1.41] font-bold text-brand-navy">
                {process.title}
              </h3>
              <p className="mt-[15px] text-[17px] leading-[1.13] text-brand-muted">
                {process.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
