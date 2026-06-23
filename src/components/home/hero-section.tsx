import Image from "next/image";

import { AnimatedStat } from "@/components/home/animated-stat";
import { Button } from "@/components/home/button";
import {
  heroContent,
  heroMarqueeLogos,
  heroPartners,
  stats,
} from "@/components/home/homepage-data";

function AcceleratorMark() {
  return (
    <div className="flex items-center gap-4">
      <Image
        src="/figma-assets/top-11.png"
        alt="TotalEnergies logo"
        width={2000}
        height={2000}
        className=" w-[80px] md:w-[90px]"
      />

      <Image
        src="/figma-assets/top-6.png"
        alt="TotalEnergies logo"
        width={2000}
        height={2000}
        className=" w-[80px] md:w-[90px]"
      />
    </div>
  );
}

export function HeroSection() {
  return (
    <header id="top" className="bg-brand-blue text-white">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/hero-bg.png"
            alt=""
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute hidden md:block inset-0 bg-[linear-gradient(-90deg,rgba(0,0,0,0)_38%,rgba(0,0,0,0.45)_55%)]" />
          <div className="absolute hidden md:block inset-0 bg-[linear-gradient(2deg,rgba(0,0,0,0)_75%,rgba(0,0,0,0.3)_92%)]" />
          {/* MOBILE */}
          <div className="absolute  md:hidden inset-0 bg-black/50" />
        </div>
        <div className="relative homepage-shell pb-14 pt-16 md:pb-[60px] md:pt-[162px]">
          <div className="max-w-[800px]">
            <h1 className="font-heading text-[35px] md:text-[60px] 2xl:text-[80px] font-bold leading-[1.02] text-white md:leading-[0.97]">
              {heroContent.title}
            </h1>
            <p className="mt-6 max-w-[750px] text-[16px] md:text-[18px] leading-[1.4] text-white/90 2xl:text-[24px] md:leading-[1.4]">
              {heroContent.description}
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button href={heroContent.primaryCta.href} variant="secondary">
                {heroContent.primaryCta.label}
              </Button>
              <a
                href={heroContent.secondaryCta.href}
                className="inline-flex items-center justify-center gap-2 rounded-[5px] border border-white px-6 py-3 font-heading text-[17px] font-medium text-white hover:text-[#1191D0] hover:bg-white md:text-[20px]"
              >
                <span>{heroContent.secondaryCta.label}</span>
                <span aria-hidden>{"->"}</span>
              </a>
            </div>
          </div>

          <div className="mt-16 md:mt-[84px]">
            <p className="text-center font-heading text-[16px] font-semibold uppercase tracking-[0.04em] text-white md:text-[30px]">
              Trusted By Leading Brands
            </p>
            <div className="mt-6 overflow-hidden">
              <div className="marquee-track flex gap-[21px]">
                {[...heroMarqueeLogos, ...heroMarqueeLogos].map(
                  (logo, index) => (
                    <div
                      key={`${logo.name}-${index}`}
                      className="flex md:h-[90px] w-[160px] md:w-[257px] shrink-0 items-center justify-center rounded-[11px] border border-white/80 bg-white/5 px-6 backdrop-blur-[18px]"
                    >
                      <Image
                        src={logo.src}
                        alt={logo.name}
                        width={logo.width}
                        height={logo.height}
                        className="h-auto max-h-[60px] md:max-h-[70px] w-auto max-w-[100px] md:max-w-[170px] object-contain"
                      />
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="homepage-shell py-8 md:py-[35px]">
        <div className="grid gap-6 xl:grid-cols-2">
          {heroPartners.map((partner, index) => (
            <article
              key={partner.title}
              className="rounded-[12px] border border-white/65 bg-white/[0.03] px-4 md:px-6 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] "
            >
              <div className="flex flex-col items-center  gap-4 md:flex-row ">
                <div className="shrink-0">
                  {index === 0 ? (
                    <Image
                      src={partner.logo}
                      alt="WTIIRA logo"
                      width={129}
                      height={110}
                      className="h-auto w-[90px] md:w-[90px]"
                    />
                  ) : (
                    <>
                      {/* TODO: Replace the decorative accelerator badge with the exact Figma vector if it becomes available as a standalone asset. */}
                      <AcceleratorMark />
                    </>
                  )}
                </div>
                <div className="flex-1">
                  <h2 className="font-heading text-[20px] font-bold leading-none md:text-[22px]">
                    {partner.title}
                  </h2>
                  <p className="mt-2 text-[15px] leading-[1.1] text-white md:text-[16px]">
                    {partner.subtitle}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {partner.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-2 text-[18px] leading-[1.35] text-white/90"
                      >
                        <span className="mt-[5px] size-[7px] shrink-0 rounded-full bg-brand-green" />
                        <span className="text-[13px] leading-[1.35] text-white/90 md:text-[13px]">
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
        <dl className="mt-6 md:mt-4 grid gap-8 text-center grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => (
            <AnimatedStat key={stat.label} value={stat.value} label={stat.label} />
          ))}
        </dl>
      </div>
    </header>
  );
}
