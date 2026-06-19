import Image from "next/image";

import { Button } from "@/components/home/button";
import { CarIcon, ChartIcon, WavesIcon } from "@/components/home/icons";
import { solutions } from "@/components/home/homepage-data";
import { SectionHeading } from "@/components/home/section-heading";

const icons = [WavesIcon, CarIcon, ChartIcon];

export function SolutionsSection() {
  return (
    <section id="solutions" className="bg-brand-ice py-12 md:py-[50px]">
      <div className="homepage-shell">
        <SectionHeading
          eyebrow="Our Solutions"
          title="One Platform. Three Transformative Solutions."
        />
        <div className="mt-10 grid gap-[24px] xl:grid-cols-3 xl:gap-[30px]">
          {solutions.map((solution, index) => {
            const Icon = icons[index];

            return (
              <article
                key={solution.title}
                className="rounded-[20px] bg-white p-[24px] shadow-[0_12px_24px_rgba(6,43,79,0.12)]"
              >
                <div className="relative overflow-hidden rounded-[12px]">
                  <Image
                    src={solution.image}
                    alt={solution.title}
                    width={471}
                    height={295}
                    className="h-auto w-full object-cover"
                  />
                </div>
                <div className="relative">
                  <div className="-mt-7 ml-[6px] flex size-[47px] items-center justify-center rounded-[16px] bg-white text-brand-navy shadow-[0_8px_16px_rgba(6,43,79,0.12)]">
                    <Icon className="size-[24px]" />
                  </div>
                  <h3 className="mt-3 font-heading text-[23px] leading-[1.15] font-bold text-brand-navy">
                    {solution.title}
                  </h3>
                  <p className="mt-3 text-[18px] leading-[1.45] text-brand-muted">
                    {solution.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
        <div className="mx-auto mt-12 max-w-[1023px] text-center">
          <p className="font-heading text-[34px] leading-[1.15] font-bold text-brand-navy md:text-[53px]">
            From Water Treatment to Smart Washing and ESG Reporting,
            <br className="hidden lg:block" /> BlueVerse brings every solution together.
          </p>
          <div className="mt-6">
            <Button>Let&apos;s Talk Sustainable Growth</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
