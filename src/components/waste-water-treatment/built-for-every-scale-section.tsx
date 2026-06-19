import Image from "next/image";

import {
  ecosystemProducts,
  scaleCards,
} from "@/components/waste-water-treatment/data";

export function BuiltForEveryScaleSection() {
  return (
    <section className="border-b border-[#dfdfdf] bg-white px-5 py-12 md:px-10 md:py-[60px] xl:px-[134px]">
      <div className="mx-auto max-w-[1652px]">
        <div className="text-center">
          <p className="bg-brand-gradient bg-clip-text font-heading text-[19px] leading-[1.1] font-semibold uppercase text-transparent">
            Built for Every Scale
          </p>
          <h2 className="mt-[10px] font-heading text-[42px] leading-[1.05] font-bold text-brand-navy md:text-[50px] xl:text-[55px]">
            ElectroX Product Ecosystem
          </h2>
        </div>

        <div className="mt-[30px] grid gap-5 xl:grid-cols-4">
          {scaleCards.map((card) => (
            <article
              key={card.code}
              className="overflow-hidden rounded-[20px] border border-[#dbdbdb] bg-white"
            >
              <div className="bg-brand-blue px-[30px] py-5 text-white">
                <p className="font-heading text-[30px] leading-[1.13] font-bold">
                  {card.code}
                </p>
                <p className="text-[22px] leading-[1.4]">{card.title}</p>
              </div>
              <div className="px-[10px] py-0">
                <Image
                  src={card.image}
                  alt={card.title}
                  width={378}
                  height={253}
                  className="h-auto w-full object-contain"
                />
              </div>
              <div className="grid grid-cols-3 gap-4 px-[30px] py-5">
                <ScaleMeta label="Footprint" value={card.footprint} />
                <ScaleMeta label="STP capacity" value={card.stp} />
                <ScaleMeta label="ETP capacity" value={card.etp} />
              </div>
            </article>
          ))}
        </div>

        <div className="mt-5 grid gap-5 xl:grid-cols-3">
          {ecosystemProducts.map((product) => (
            <article
              key={product.title}
              className="rounded-[19px] border border-[#dbdbdb] bg-white px-5 py-[30px]"
            >
              <div className="flex items-center gap-[15px]">
                <div className="flex size-[50px] items-center justify-center rounded-[16px] bg-brand-ice-strong">
                  <Image src={product.icon} alt="" width={22} height={22} className="h-auto w-[22px]" />
                </div>
                <h3 className="font-heading text-[26px] leading-[1.2] font-bold text-brand-navy xl:text-[28px]">
                  {product.title}
                </h3>
              </div>
              <p className="mt-[15px] text-[18px] leading-[1.28] text-brand-muted">
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
      <p className="text-[14px] leading-[24px] text-brand-muted">{label}</p>
      <p className="font-heading text-[15px] leading-[24px] font-medium text-brand-blue">
        {value}
      </p>
    </div>
  );
}
