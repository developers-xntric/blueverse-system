"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import type { EsgPlatformPageData } from "@/lib/strapi";

type EsgPlatformPageProps = {
  data: EsgPlatformPageData;
};

function SectionCard({
  icon,
  title,
  items,
}: {
  icon: string;
  title: string;
  items: string[];
}) {
  return (
    <motion.article
      whileHover={{ y: -3 }}
      className="rounded-[19.382px] border border-[#dbdbdb] bg-white px-7.5 py-10 shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
    >
      <div className="flex items-center gap-3.75">
        <span className="flex shrink-0 items-center justify-center rounded-[19.382px] bg-[#e8f4fd] p-2">
          <Image src={icon} alt="" width={25.57} height={26} className="size-[25.567px]" />
        </span>
        <h3 className="font-heading text-[24.227px] font-bold leading-[33.918px] text-brand-navy">{title}</h3>
      </div>
      <ul className="mt-3.75 space-y-4">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2.5">
            <span className="mt-2.25 size-[7.268px] shrink-0 rounded-full bg-brand-green" />
            <span className="text-[14px] leading-[24.227px] text-brand-muted">{item}</span>
          </li>
        ))}
      </ul>
    </motion.article>
  );
}

function Hero({ data }: EsgPlatformPageProps) {
  return (
    <section className="bg-white">
      <div className="mx-auto grid w-[90%] max-w-360 items-center gap-8 py-8 md:py-15.5 lg:grid-cols-[1fr_810px]">
        <motion.div
          initial={{ opacity: 0, x: -18 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="max-w-202.5"
        >
          <p className="bg-linear-to-b bg-clip-text font-heading text-[19px] font-semibold uppercase leading-5.25 text-transparent from-[#1191d0] from-[23.381%] to-[#1f62af]">
            {data.hero.subtitle}
          </p>
          <h1 className="mt-2.5 max-w-212 font-heading text-[24px] font-bold leading-tight text-brand-navy md:text-[40px]">
            {data.hero.title}
          </h1>
          <p className="mt-6.75 max-w-202.5 text-[16px] text-brand-muted">
            {data.hero.description}
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 22 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 }}
          className="relative h-70 w-full lg:h-125.25"
        >
          {data.hero.heroImage ? (
            <Image
              src={data.hero.heroImage.url}
              alt={data.hero.heroImage.alt || data.hero.title}
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 810px"
              className="object-contain"
            />
          ) : null}
        </motion.div>
      </div>
    </section>
  );
}

export function EsgPlatformPage({ data }: EsgPlatformPageProps) {
  return (
    <div className="bg-white text-black">
      <main>
        <Hero data={data} />
        <section className="border-t border-transparent pb-8 md:pb-22.5">
          <div className="mx-auto grid w-[90%] max-w-360 gap-5 lg:grid-cols-3">
            {data.cards.map((card) =>
              card.icon ? (
                <SectionCard key={card.title} icon={card.icon.url} title={card.title} items={card.items} />
              ) : null,
            )}
          </div>
        </section>
      </main>
    </div>
  );
}
