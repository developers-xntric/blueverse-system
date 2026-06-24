import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/home/button";
import { CarIcon, ChartIcon, WavesIcon } from "@/components/home/icons";
import { SectionHeading } from "@/components/home/section-heading";
import type { HomePageData } from "@/lib/types";

const icons = [WavesIcon, CarIcon, ChartIcon];

type SolutionsSectionProps = {
  data: HomePageData;
};

export function SolutionsSection({ data }: SolutionsSectionProps) {
  return (
    <section id="solutions" className="bg-[#E8F4FD] py-12 ">
      <div className="homepage-shell">
        <SectionHeading
          eyebrow={data.solutionsSection.header.eyebrow || ""}
          title={data.solutionsSection.header.title}
          description={data.solutionsSection.header.description}
        />
        <div className="mt-10 grid gap-[24px] xl:grid-cols-3 xl:gap-[30px]">
          {data.solutions.map((solution, index) => {
            const Icon = icons[index];

            return (
              <Link
                key={solution.title}
                href={solution.href}
                className="block rounded-[10px] md:rounded-[20px] bg-white p-3 md:p-[24px] shadow-[0_12px_24px_rgba(6,43,79,0.12)] transition-shadow hover:shadow-[0_16px_32px_rgba(6,43,79,0.18)]"
              >
                <div className="relative h-[250px] md:h-[295px] overflow-hidden rounded-[12px]">
                  {solution.image ? (
                    <Image
                      src={solution.image.url}
                      alt={solution.image.alt || solution.title}
                      width={471}
                      height={295}
                      className="h-full w-full object-cover"
                    />
                  ) : null}
                </div>
                <div className="relative">
                  <div className="-mt-7 ml-[6px] flex size-[47px] items-center justify-center rounded-[16px] bg-[#E8F4FD] text-brand-navy shadow-[0_8px_16px_rgba(6,43,79,0.12)]">
                    {solution.icon ? (
                      <Image
                        src={solution.icon.url}
                        alt={solution.icon.alt || solution.title}
                        width={24}
                        height={24}
                        className="size-[24px] object-contain"
                      />
                    ) : (
                      <Icon className="size-[24px]" />
                    )}
                  </div>
                  <h3 className="mt-3 font-heading text-[18px] md:text-[23px] leading-[1.15] font-bold text-[#062B4F]">
                    {solution.title}
                  </h3>
                  <p className="mt-3 text-[14px] md:text-[16px] leading-[1.45] text-brand-muted">
                    {solution.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
        <div className="mx-auto mt-12 max-w-[1023px] text-center">
          <p className="font-heading text-[22px] leading-[1.15] font-bold text-brand-navy md:text-[35px]">
            {data.solutionsSection.summary}
          </p>
          {data.solutionsSection.cta ? (
            <div className="mt-6">
              <Button href={data.solutionsSection.cta.href}>{data.solutionsSection.cta.label}</Button>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
