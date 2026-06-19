import Image from "next/image";

import { partnerships } from "@/components/waste-water-treatment/data";

export function PartnershipsSection() {
  return (
    <section className="bg-brand-blue px-5 py-12 md:px-10 md:py-[60px] xl:px-[134px]">
      <div className="mx-auto max-w-[1652px]">
        <h2 className="text-center font-heading text-[42px] leading-[1.05] font-bold text-white md:text-[50px] xl:text-[55px]">
          Partnerships
        </h2>

        <div className="mt-10 grid gap-10 xl:grid-cols-4 xl:gap-0">
          {partnerships.map((partner, index) => (
            <article
              key={partner.name}
              className={`xl:px-6 ${index > 0 ? "xl:border-l xl:border-white/20" : "xl:pl-0"} ${index === partnerships.length - 1 ? "xl:pr-0" : ""}`}
            >
              <div className="flex min-h-[60px] items-center">
                <Image
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  width={140}
                  height={48}
                  className="h-auto w-auto max-w-[150px]"
                />
              </div>
              <a
                href="#contact"
                className="mt-4 inline-flex items-center gap-1 text-[18px] font-medium text-white underline underline-offset-4"
              >
                Read More
              </a>
              <p className="mt-4 text-[16px] leading-[1.45] text-white/82">
                {partner.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
