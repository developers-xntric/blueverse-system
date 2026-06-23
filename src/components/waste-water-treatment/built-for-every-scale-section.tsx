import Image from "next/image";

import {
  ecosystemProducts,
  scaleCards,
} from "@/components/waste-water-treatment/data";
import { MobileCarousel } from "@/components/waste-water-treatment/mobile-carousel";

export function BuiltForEveryScaleSection() {
  return (
    <section className="mx-auto w-[90%] border-b border-[#dfdfdf] bg-white py-12 md:py-15 2xl:max-w-360">
      <div className="mx-auto max-w-[1652px]">
        <div className="text-center">
          <p className="bg-brand-gradient bg-clip-text font-heading text-[16px] leading-[1.1] font-semibold uppercase text-transparent sm:text-[19px]">
            Built for Every Scale
          </p>
          <h2 className="mt-2.5 font-heading text-[24px] leading-[1.05] font-bold text-brand-navy md:text-[40px]">
            ElectroX Product Ecosystem
          </h2>
        </div>

        <div className="mt-7.5 sm:hidden">
          <MobileCarousel>
            {scaleCards.map((card) => (
              <article
                key={card.code}
                className="overflow-hidden rounded-[20px] border border-[#dbdbdb] bg-white"
              >
                <div className="bg-brand-blue px-7.5 py-5 text-white">
                  <p className="font-heading text-[24px] leading-[1.13] font-semibold">
                    {card.code}
                  </p>
                  <p className="mt-1 text-[16px] tracking-wide">{card.title}</p>
                </div>
                <div className="px-2.5 py-0">
                  <Image
                    src={card.image}
                    alt={card.title}
                    width={378}
                    height={253}
                    className="h-auto w-full object-contain"
                  />
                </div>
                <div className="grid grid-cols-3 gap-2 px-3 py-5">
                  <ScaleMeta label="Footprint" value={card.footprint} />
                  <ScaleMeta label="STP capacity" value={card.stp} />
                  <ScaleMeta label="ETP capacity" value={card.etp} />
                </div>
              </article>
            ))}
          </MobileCarousel>
        </div>

        <div className="mt-7.5 hidden gap-4 sm:grid sm:grid-cols-2 xl:grid-cols-4">
          {scaleCards.map((card) => (
            <article
              key={card.code}
              className="overflow-hidden rounded-[20px] border border-[#dbdbdb] bg-white"
            >
              <div className="bg-brand-blue px-7.5 py-5 text-white">
                <p className="font-heading text-[24px] leading-[1.13] font-semibold">
                  {card.code}
                </p>
                <p className="mt-1 text-[16px] tracking-wide">{card.title}</p>
              </div>
              <div className="px-2.5 py-0">
                <Image
                  src={card.image}
                  alt={card.title}
                  width={378}
                  height={253}
                  className="h-auto w-full object-contain"
                />
              </div>
              <div className="grid grid-cols-1 gap-3 px-5 py-5 sm:grid-cols-3 sm:gap-0">
                <ScaleMeta label="Footprint" value={card.footprint} />
                <ScaleMeta label="STP capacity" value={card.stp} />
                <ScaleMeta label="ETP capacity" value={card.etp} />
              </div>
            </article>
          ))}
        </div>

        <div className="mt-5 sm:hidden">
          <MobileCarousel>
            {ecosystemProducts.map((product) => (
              <article
                key={product.title}
                className="rounded-[19px] border border-[#dbdbdb] bg-white px-5 py-7.5"
              >
                <div className="flex items-center gap-3.75">
                  <div className="flex items-center justify-center rounded-2xl bg-brand-ice-strong">
                    <Image src={product.icon} alt="" width={22} height={22} className="h-auto w-7" />
                  </div>
                  <h3 className="font-heading text-[20px] leading-[1.2] font-bold text-brand-navy">
                    {product.title}
                  </h3>
                </div>
                <p className="mt-3.75 text-[14px] leading-[1.28] text-brand-muted">
                  {product.description}
                </p>
              </article>
            ))}
          </MobileCarousel>
        </div>

        <div className="mt-5 hidden gap-5 sm:grid sm:grid-cols-2 xl:grid-cols-3">
          {ecosystemProducts.map((product) => (
            <article
              key={product.title}
              className="rounded-[19px] border border-[#dbdbdb] bg-white p-6"
            >
              <div className="flex items-center gap-3.75">
                <div className="flex items-center justify-center rounded-2xl bg-brand-ice-strong h-10 w-10">
                  <Image src={product.icon} alt="" width={20} height={20} className="h-auto w-6" />
                </div>
                <h3 className="font-heading text-[20px] leading-[1.2] font-bold text-brand-navy">
                  {product.title}
                </h3>
              </div>
              <p className="mt-3.75 text-[14px] leading-[1.28] text-brand-muted">
                {product.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ScaleMeta({ label, value }: { label: string; value: string }) {
  return (
    <div className="relative text-center sm:text-left">
      <p className="text-[10px] leading-[1.2] text-brand-muted sm:text-[12px] sm:leading-6">{label}</p>
      <p className="font-heading text-[11px] leading-[1.2] font-medium text-brand-blue sm:text-[12px] sm:leading-6">
        {value}
      </p>
    </div>
  );
}
