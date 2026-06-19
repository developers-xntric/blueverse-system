import Image from "next/image";

import {
  LeafIcon,
  LightbulbIcon,
  ShieldIcon,
  UsersIcon,
} from "@/components/home/icons";
import { aboutTabs, aboutValues } from "@/components/home/homepage-data";
import { SectionHeading } from "@/components/home/section-heading";

const icons = [LightbulbIcon, LeafIcon, ShieldIcon, UsersIcon];

export function AboutSection() {
  return (
    <section id="about" className="bg-brand-ice py-12 md:py-[60px]">
      <div className="homepage-shell">
        <SectionHeading
          eyebrow="About BlueVerse"
          title="Building Tomorrow&apos;s Infrastructure, Today"
          centered
        />
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {aboutTabs.map((tab, index) => (
            <button
              key={tab}
              type="button"
              className={`rounded-[8px] border px-6 py-5 font-heading text-[18px] leading-none md:text-[22px] ${
                index === 0
                  ? "border-brand-sky bg-brand-sky text-white"
                  : "border-brand-navy/40 bg-transparent text-brand-navy"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="mt-6 grid gap-6 xl:grid-cols-[1.07fr_.93fr]">
          <article className="relative overflow-hidden rounded-[10px]">
            <Image
              src="/figma-assets/about-3.png"
              alt="Building Tomorrow's Infrastructure, Today"
              width={676}
              height={656}
              className="h-full min-h-[400px] w-full object-cover"
            />
            <div className="absolute inset-x-4 bottom-4 rounded-[10px] bg-[linear-gradient(90deg,rgba(255,255,255,0.45),rgba(255,255,255,0.18))] p-5 backdrop-blur-[6px] md:inset-x-[14px] md:bottom-[14px] md:p-6">
              <h3 className="font-display text-[28px] leading-[1.1] font-bold text-brand-navy md:text-[29px]">
                Building Tomorrow&apos;s Infrastructure, Today
              </h3>
              <p className="mt-2 text-[18px] leading-[1.35] text-brand-navy/90 md:text-[19px]">
                Innovative water solutions for industries and communities.
              </p>
              <a
                href="#contact"
                className="mt-4 inline-block font-sans text-[18px] font-medium text-brand-navy underline underline-offset-4"
              >
                Get Started
              </a>
            </div>
          </article>
          <div className="grid gap-6 md:grid-cols-2">
            {aboutValues.map((item, index) => {
              const Icon = icons[index];

              return (
                <article
                  key={item.title}
                  className="rounded-[18px] border border-brand-card-line bg-transparent p-8 md:min-h-[303px] md:p-[32px]"
                >
                  <div className="flex size-[58px] items-center justify-center rounded-[18px] bg-brand-sky text-white">
                    <Icon className="size-[28px]" />
                  </div>
                  <h3 className="mt-16 font-heading text-[30px] leading-[1.1] font-bold text-black">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[18px] leading-[1.45] text-black/85">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
