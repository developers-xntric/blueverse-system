import Image from "next/image";

import type { ScaleCard, EcosystemProduct } from "@/types/cms";
import {
  scaleCards as fallbackScaleCards,
  ecosystemProducts as fallbackEcosystemProducts,
} from "@/components/waste-water-treatment/data";

type BuiltForEveryScaleSectionProps = {
  eyebrow?: string;
  title?: string;
  scaleCards?: readonly ScaleCard[] | ScaleCard[];
  ecosystemProducts?: readonly EcosystemProduct[] | EcosystemProduct[];
};

export function BuiltForEveryScaleSection({
  eyebrow,
  title,
  scaleCards,
  ecosystemProducts,
}: BuiltForEveryScaleSectionProps) {
  const cards = scaleCards && scaleCards.length > 0 ? scaleCards : fallbackScaleCards;
  const products = ecosystemProducts && ecosystemProducts.length > 0 ? ecosystemProducts : fallbackEcosystemProducts;

  return (
    <section className="border-b border-[#dfdfdf] bg-white 2xl:max-w-360 w-[90%] mx-auto py-12 md:py-15">
      <div className="mx-auto max-w-[1652px]">
        <div className="text-center">
          <p className="bg-brand-gradient bg-clip-text font-heading text-[19px] leading-[1.1] font-semibold uppercase text-transparent">
            {eyebrow ?? "Built for Every Scale"}
          </p>
          <h2 className="mt-2.5 font-heading text-[24px] leading-[1.05] font-bold text-brand-navy md:text-[40px]">
            {title ?? "ElectroX Product Ecosystem"}
          </h2>
        </div>

        <div className="mt-7.5 grid gap-4 xl:grid-cols-4">
          {cards.map((card) => (
            <article
              key={card.code}
              className="overflow-hidden rounded-[20px] border border-[#dbdbdb] bg-white"
            >
              <div className="bg-brand-blue px-7.5 py-5 text-white">
                <p className="font-heading text-[24px] leading-[1.13] font-semibold">
                  {card.code}
                </p>
                <p className="text-[16px] tracking-wide mt-1">{card.title}</p>
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
              <div className="grid grid-cols-3 px-5 py-5">
                <ScaleMeta label="Footprint" value={card.footprint} />
                <ScaleMeta label="STP capacity" value={card.stp} />
                <ScaleMeta label="ETP capacity" value={card.etp} />
              </div>
            </article>
          ))}
        </div>

        <div className="mt-5 grid gap-5 xl:grid-cols-3">
          {products.map((product) => (
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
        </div>
      </div>
    </section>
  );
}

function ScaleMeta({ label, value }: { label: string; value: string }) {
  return (
    <div className="relative">
      <p className="text-[12px] leading-6 text-brand-muted">{label}</p>
      <p className="font-heading text-[12px] leading-6 font-medium text-brand-blue">
        {value}
      </p>
    </div>
  );
}
