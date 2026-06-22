"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

import { ArrowUpRightIcon } from "@/components/home/icons";
import { Button } from "@/components/home/button";
import { industries } from "@/components/home/homepage-data";
import { SectionHeading } from "@/components/home/section-heading";

export function IndustriesSection() {
  const [activeIndustry, setActiveIndustry] = useState<number | null>(null);
  const selectedIndustry =
    activeIndustry === null ? null : industries[activeIndustry];
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    if (activeIndustry !== null || !isMobile) return;
    const el = carouselRef.current;
    if (!el) return;

    const interval = setInterval(() => {
      const cardWidth = el.querySelector("button")?.offsetWidth ?? 280;
      const gap = 24;
      const maxScroll = el.scrollWidth - el.clientWidth;

      if (el.scrollLeft >= maxScroll - 10) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        el.scrollBy({ left: cardWidth + gap, behavior: "smooth" });
      }
    }, 1500);

    return () => clearInterval(interval);
  }, [activeIndustry, isMobile]);

  return (
    <section id="industries" className="bg-white py-14">
      <div className="homepage-shell">
        <SectionHeading
          eyebrow="Who We Serve"
          title="Industries We Transform"
          centered
        />
        {selectedIndustry ? (
          <div className="mt-10">
            <div className="flex overflow-x-auto flex-nowrap gap-2 md:grid md:gap-4 md:grid-cols-3 xl:grid-cols-6">
              {industries.map((industry, index) => (
                <button
                  key={industry.title}
                  type="button"
                  onClick={() => setActiveIndustry(index)}
                  className={`rounded-[8px] border px-4 md:px-4 py-4 font-heading text-[13px] md:text-[16px] leading-tight 2xl:text-[19px] ${
                    index === activeIndustry
                      ? "border-brand-sky bg-brand-sky text-white"
                      : "border-brand-navy/40 bg-transparent text-brand-navy"
                  }`}
                >
                  {industry.title}
                </button>
              ))}
            </div>
            <div className="mt-6 grid gap-6 md:gap-12 xl:grid-cols-[1.07fr_.93fr]">
              <article className="relative overflow-hidden rounded-[10px] md:rounded-[20px]">
                <Image
                  src={selectedIndustry.image}
                  alt={selectedIndustry.title}
                  width={676}
                  height={656}
                  className=" min-h-[250px] md:min-h-[500px] max-h-[520px] w-full object-cover"
                />
              </article>
              <div className="flex flex-col items-start justify-between bg-transparent ">
                <div>
                  <SectionHeading eyebrow="Industries" title="" />
                  <h3 className="font-heading text-[22px] md:text-[30px] leading-[1.1] font-bold text-[#062B4F] ">
                    {selectedIndustry.title}
                  </h3>
                  <p className="mt-3 text-[15px] md:text-[18px] leading-[1.45] text-black/85">
                    {selectedIndustry.description}
                  </p>
                </div>
                <div className="mt-6">
                  <Button size="compact" onClick={() => setActiveIndustry(null)}>
                    Let&apos;s Talk Sustainable Growth
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div ref={carouselRef} className="mt-10 flex overflow-x-auto snap-x snap-mandatory gap-[24px] md:grid xl:grid-cols-3 xl:gap-[25px] md:gap-[24px]">
            {industries.map((industry, index) => (
              <button
                key={industry.title}
                type="button"
                onClick={() => setActiveIndustry(index)}
                className="min-w-[280px] snap-start md:min-w-0 grid grid-rows-2 overflow-hidden rounded-[10px] md:rounded-[20px] border border-brand-card-line bg-white text-left transition-colors duration-200 hover:border-brand-sky"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={industry.image}
                    alt={industry.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1280px) 100vw, 531px"
                  />
                </div>
                <div className="flex flex-col justify-center p-4 md:p-6">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-heading text-[20px] md:text-[23px] leading-[1.15] font-bold text-brand-navy">
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
                        <span className="mt-[8] 2xl:mt-[10px] size-[7px] shrink-0 rounded-full bg-brand-green" />
                        <span className="text-[15px] 2xl:text-[18px] leading-[1.4] text-brand-muted">
                          {point}
                        </span>
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
