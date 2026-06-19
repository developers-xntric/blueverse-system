"use client";

import { useState } from "react";
import Image from "next/image";

import { ArrowUpRightIcon } from "@/components/home/icons";
import { industries } from "@/components/home/homepage-data";
import { SectionHeading } from "@/components/home/section-heading";

export function IndustriesSection() {
  const [activeIndustry, setActiveIndustry] = useState<number | null>(null);
  const selectedIndustry =
    activeIndustry === null ? null : industries[activeIndustry];

  return (
    <section id="industries" className="bg-white py-12 md:py-[60px]">
      <div className="homepage-shell">
        <SectionHeading
          eyebrow="Who We Serve"
          title="Industries We Transform"
          centered
        />
        {selectedIndustry ? (
          <div className="mt-10">
            <div className="grid gap-4 md:grid-cols-3 xl:grid-cols-6">
              {industries.map((industry, index) => (
                <button
                  key={industry.title}
                  type="button"
                  onClick={() => setActiveIndustry(index)}
                  className={`rounded-[8px] border px-4 py-4 font-heading text-[16px] leading-tight md:text-[19px] ${
                    index === activeIndustry
                      ? "border-brand-sky bg-brand-sky text-white"
                      : "border-brand-navy/40 bg-transparent text-brand-navy"
                  }`}
                >
                  {industry.title}
                </button>
              ))}
            </div>
            <div className="mt-6 grid gap-6 xl:grid-cols-[1.07fr_.93fr]">
              <article className="relative overflow-hidden rounded-[20px]">
                <Image
                  src={selectedIndustry.image}
                  alt={selectedIndustry.title}
                  width={676}
                  height={656}
                  className="h-full min-h-[420px] w-full object-cover"
                />
                <div className="absolute inset-x-4 bottom-4 rounded-[10px] bg-[linear-gradient(90deg,rgba(255,255,255,0.45),rgba(255,255,255,0.18))] p-5 backdrop-blur-[6px] md:inset-x-[14px] md:bottom-[14px] md:p-6">
                  <h3 className="font-display text-[28px] leading-[1.1] font-bold text-brand-navy md:text-[29px]">
                    {selectedIndustry.title}
                  </h3>
                  <p className="mt-2 text-[18px] leading-[1.35] text-brand-navy/90 md:text-[19px]">
                    {selectedIndustry.description}
                  </p>
                  <button
                    type="button"
                    onClick={() => setActiveIndustry(null)}
                    className="mt-4 inline-block font-sans text-[18px] font-medium text-brand-navy underline underline-offset-4"
                  >
                    View All Industries
                  </button>
                </div>
              </article>
              <div className="grid gap-6 md:grid-cols-2">
                {selectedIndustry.details.map((detail, index) => (
                  <article
                    key={detail}
                    className="rounded-[18px] border border-brand-card-line bg-transparent p-8 md:min-h-[220px] md:p-[32px]"
                  >
                    <div className="flex size-[58px] items-center justify-center rounded-[18px] bg-brand-sky text-white">
                      <span className="font-heading text-[24px] font-bold">
                        {index + 1}
                      </span>
                    </div>
                    <h3 className="mt-10 font-heading text-[28px] leading-[1.1] font-bold text-black">
                      {selectedIndustry.title}
                    </h3>
                    <p className="mt-3 text-[18px] leading-[1.45] text-black/85">
                      {detail}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="mt-10 grid gap-[24px] xl:grid-cols-3 xl:gap-[25px]">
            {industries.map((industry, index) => (
              <button
                key={industry.title}
                type="button"
                onClick={() => setActiveIndustry(index)}
                className="overflow-hidden rounded-[20px] border border-brand-card-line bg-white text-left"
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
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
