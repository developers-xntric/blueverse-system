import Image from "next/image";

import { heroPartners, stats } from "@/components/home/homepage-data";

function AcceleratorMark() {
  return (
    <div className="flex items-center gap-4">
      <div className="grid grid-cols-4 gap-[5px] rounded-[14px] bg-white/5 p-2">
        {Array.from({ length: 16 }).map((_, index) => (
          <span
            key={index}
            className={`size-[10px] rounded-full ${
              index % 2 === 0 ? "bg-[#a8dc39]" : "bg-transparent ring-2 ring-[#a8dc39]"
            }`}
          />
        ))}
      </div>
      <Image src="/figma-assets/top-5.png" alt="TotalEnergies logo" width={114} height={83} />
    </div>
  );
}

export function HeroSection() {
  return (
    <header id="top" className="bg-brand-blue pb-12 pt-8 text-white md:pb-[35px] md:pt-[29px]">
      <div className="homepage-shell">
        <h1 className="sr-only">
          BlueVerse water treatment, automated vehicle washing, and ESG intelligence homepage
        </h1>
        <div className="grid gap-6 xl:grid-cols-2">
          {heroPartners.map((partner, index) => (
            <article
              key={partner.title}
              className="rounded-[12px] border border-white/65 bg-white/[0.03] px-6 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] md:px-7 md:py-5"
            >
              <div className="flex flex-col gap-5 md:flex-row md:items-start">
                <div className="shrink-0">
                  {index === 0 ? (
                    <Image
                      src={partner.logo}
                      alt="WTIIRA logo"
                      width={129}
                      height={110}
                      className="h-auto w-[110px] md:w-[129px]"
                    />
                  ) : (
                    <>
                      {/* TODO: Replace the decorative accelerator badge with the exact Figma vector if it becomes available as a standalone asset. */}
                      <AcceleratorMark />
                    </>
                  )}
                </div>
                <div className="flex-1">
                  <h2 className="font-heading text-[26px] font-bold leading-none md:text-[41px]">
                    {partner.title}
                  </h2>
                  <p className="mt-2 text-[19px] leading-[1.1] text-white md:text-[19px]">
                    {partner.subtitle}
                  </p>
                  <ul className="mt-4 space-y-3">
                    {partner.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-3 text-[18px] leading-[1.35] text-white/90"
                      >
                        <span className="mt-[10px] size-[7px] shrink-0 rounded-full bg-brand-green" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
        <dl className="mt-8 grid gap-8 text-center sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label}>
              <dt className="font-heading text-[16px] uppercase tracking-[0.08em] text-white/95 md:text-[16px]">
                {stat.label}
              </dt>
              <dd className="order-first mb-1 font-heading text-[34px] font-bold leading-none text-white md:text-[50px]">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </header>
  );
}
