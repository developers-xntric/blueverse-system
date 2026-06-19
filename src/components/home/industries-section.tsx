import Image from "next/image";

import { ArrowUpRightIcon } from "@/components/home/icons";
import { industries } from "@/components/home/homepage-data";
import { SectionHeading } from "@/components/home/section-heading";

export function IndustriesSection() {
  return (
    <section id="industries" className="bg-white py-12 md:py-[60px]">
      <div className="homepage-shell">
        <SectionHeading
          eyebrow="Who We Serve"
          title="Industries We Transform"
          centered
        />
        <div className="mt-10 grid gap-[24px] xl:grid-cols-3 xl:gap-[25px]">
          {industries.map((industry) => (
            <article
              key={industry.title}
              className="overflow-hidden rounded-[20px] border border-brand-card-line bg-white"
            >
              <Image
                src={industry.image}
                alt={industry.title}
                width={531}
                height={236}
                className="h-auto w-full object-cover"
              />
              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-heading text-[23px] leading-[1.15] font-bold text-brand-navy">
                    {industry.title}
                  </h3>
                  <ArrowUpRightIcon className="mt-1 size-6 shrink-0 text-brand-navy" />
                </div>
                <ul className="mt-5 space-y-3">
                  {industry.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-3 text-[18px] leading-[1.4] text-brand-muted"
                    >
                      <span className="mt-[10px] size-[7px] shrink-0 rounded-full bg-brand-green" />
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
