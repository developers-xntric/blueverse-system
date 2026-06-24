import Image from "next/image";

import { MobileCarousel } from "@/components/waste-water-treatment/mobile-carousel";
import type { WasteWaterTreatmentPageData } from "@/lib/strapi";

type BuiltForEveryScaleSectionProps = {
  data: WasteWaterTreatmentPageData;
};

export function BuiltForEveryScaleSection({ data }: BuiltForEveryScaleSectionProps) {
  return (
    <section className="mx-auto w-[90%] border-b border-[#dfdfdf] bg-white py-12 md:py-15 2xl:max-w-360">
      <div className="mx-auto max-w-[1652px]">
        <div className="text-center">
          <p className="bg-brand-gradient bg-clip-text font-heading text-[16px] font-semibold uppercase leading-[1.1] text-transparent sm:text-[19px]">
            {data.scaleSection.eyebrow}
          </p>
          <h2 className="mt-2.5 font-heading text-[24px] font-bold leading-[1.05] text-brand-navy md:text-[40px]">
            {data.scaleSection.title}
          </h2>
        </div>

        <div className="mt-7.5 sm:hidden">
          <MobileCarousel>
            {data.scaleCards.map((card) => (
              <article
                key={card.code}
                className="overflow-hidden rounded-[20px] border border-[#dbdbdb] bg-white"
              >
                <div className="bg-brand-blue px-7.5 py-5 text-white">
                  <p className="font-heading text-[24px] font-semibold leading-[1.13]">
                    {card.code}
                  </p>
                  <p className="mt-1 text-[16px] tracking-wide">{card.title}</p>
                </div>
                <div className="px-2.5 py-0">
                  {card.image ? (
                    <Image
                      src={card.image.url}
                      alt={card.image.alt || card.title}
                      width={378}
                      height={253}
                      className="h-auto w-full object-contain"
                    />
                  ) : null}
                </div>
                <div className="grid grid-cols-3 divide-x divide-[#cfcbcb] gap-2 px-3 py-5 [&>*:not(:first-child)]:pl-3">
                  <ScaleMeta label="Footprint" value={card.footprint || ""} />
                  <ScaleMeta label="STP capacity" value={card.stp || ""} />
                  <ScaleMeta label="ETP capacity" value={card.etp || ""} />
                </div>
              </article>
            ))}
          </MobileCarousel>
        </div>

        <div className="mt-7.5 hidden gap-4 sm:grid sm:grid-cols-2 xl:grid-cols-4">
          {data.scaleCards.map((card) => (
            <article
              key={card.code}
              className="overflow-hidden rounded-[20px] border border-[#dbdbdb] bg-white"
            >
              <div className="bg-brand-blue px-7.5 py-5 text-white">
                <p className="font-heading text-[24px] font-semibold leading-[1.13]">
                  {card.code}
                </p>
                <p className="mt-1 text-[16px] tracking-wide">{card.title}</p>
              </div>
              <div className="px-2.5 py-0">
                {card.image ? (
                  <Image
                    src={card.image.url}
                    alt={card.image.alt || card.title}
                    width={378}
                    height={253}
                    className="h-auto w-full object-contain"
                  />
                ) : null}
              </div>
              <div className="grid grid-cols-1 gap-3 px-5 py-5 sm:grid-cols-3 sm:gap-0 sm:divide-x sm:divide-[#e1dbdb] sm:[&>*:not(:first-child)]:pl-3">
                <ScaleMeta label="Footprint" value={card.footprint || ""} />
                <ScaleMeta label="STP capacity" value={card.stp || ""} />
                <ScaleMeta label="ETP capacity" value={card.etp || ""} />
              </div>
            </article>
          ))}
        </div>

        <div className="mt-5 sm:hidden">
          <MobileCarousel>
            {data.ecosystemProducts.map((product) => (
              <article
                key={product.title}
                className="rounded-[19px] border border-[#dbdbdb] bg-white px-5 py-7.5"
              >
                <div className="flex items-center gap-3.75">
                  <div className="flex items-center justify-center rounded-2xl bg-brand-ice-strong p-1.5">
                    {product.icon ? (
                      <Image
                        src={product.icon.url}
                        alt={product.icon.alt || product.title}
                        width={22}
                        height={22}
                        className="h-auto w-7"
                      />
                    ) : null}
                  </div>
                  <h3 className="font-heading text-[20px] font-bold leading-[1.2] text-brand-navy">
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
          {data.ecosystemProducts.map((product) => (
            <article
              key={product.title}
              className="rounded-[19px] border border-[#dbdbdb] bg-white p-6"
            >
              <div className="flex items-center gap-3.75">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-ice-strong">
                  {product.icon ? (
                    <Image
                      src={product.icon.url}
                      alt={product.icon.alt || product.title}
                      width={20}
                      height={20}
                      className="h-auto w-6"
                    />
                  ) : null}
                </div>
                <h3 className="font-heading text-[20px] font-bold leading-[1.2] text-brand-navy">
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
      <p className="font-heading text-[11px] font-medium leading-[1.2] text-brand-blue sm:text-[12px] sm:leading-6">
        {value}
      </p>
    </div>
  );
}
