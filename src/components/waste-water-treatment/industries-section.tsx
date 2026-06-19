import Image from "next/image";

import { ArrowUpRightIcon } from "@/components/home/icons";
import { industries } from "@/components/waste-water-treatment/data";

export function IndustriesSection() {
  return (
    <section className="border-b border-[#dfdfdf] bg-white px-5 py-12 md:px-10 md:py-[60px] xl:px-[134px]">
      <div className="mx-auto max-w-[1652px]">
        <div className="mx-auto max-w-[1068px] text-center">
          <p className="bg-brand-gradient bg-clip-text font-heading text-[19px] leading-[1.1] font-semibold uppercase text-transparent">
            Who We Serve
          </p>
          <h2 className="mt-[10px] font-heading text-[42px] leading-[1.05] font-bold text-brand-navy md:text-[50px] xl:text-[55px]">
            Industries We Transform
          </h2>
        </div>

        <div className="mt-10 grid gap-[30px] xl:grid-cols-3">
          {industries.map((industry) => (
            <article
              key={industry.title}
              className="overflow-hidden rounded-[20px] border border-[rgba(6,43,79,0.4)] bg-white"
            >
              <Image
                src={industry.image}
                alt={industry.title}
                width={531}
                height={236}
                className="h-[236px] w-full object-cover"
              />
              <div className="px-[30px] pb-[30px] pt-[30px]">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-heading text-[23px] leading-[1.48] font-bold text-brand-navy">
                    {industry.title}
                  </h3>
                  <ArrowUpRightIcon className="mt-1 size-[24px] shrink-0 text-brand-navy" />
                </div>
                <ul className="mt-5 space-y-[10px]">
                  {industry.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-[10px] text-[17px] leading-[1.43] text-brand-muted"
                    >
                      <span className="mt-[8px] size-[7px] shrink-0 rounded-full bg-brand-green" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
