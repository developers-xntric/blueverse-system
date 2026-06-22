import Image from "next/image";

import { partners } from "@/components/home/homepage-data";
import { SectionHeading } from "@/components/home/section-heading";

export function PartnershipsSection() {
  return (
    <section className="bg-gradient-to-br from-[#2162AF] to-[#0A3D6B] py-12 md:py-[30px]">
      <div className="homepage-shell">
        <SectionHeading eyebrow="" title="Partnerships" centered light />
        <div className="mt-10 grid gap-10 xl:grid-cols-4 xl:gap-0">
          {partners.map((partner) => (
            <article
              key={partner.name}
              className="xl:border-l xl:border-white/20 xl:px-6 xl:first:border-l-0 xl:first:pl-0 xl:last:pr-0"
            >
              <div className="relative mb-6 h-[80px] w-[200px]">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  className="object-contain object-left"
                />
              </div>
              <p className="font-heading text-[22px] font-bold uppercase tracking-[0.04em] text-white">
                {partner.name}
              </p>
              <a
                href="#contact"
                className="mt-2 inline-flex items-center gap-1 border-b border-white pb-1 font-sans text-[18px] font-medium text-white"
              >
                <span>Read More</span>
                <span aria-hidden>↓</span>
              </a>
              <p className="mt-4 text-[15px] 2xl:text-[16px] leading-[1.35] text-white/80">
                {partner.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
