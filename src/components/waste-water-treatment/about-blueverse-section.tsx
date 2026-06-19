import Image from "next/image";

import {
  LeafIcon,
  LightbulbIcon,
  ShieldIcon,
  UsersIcon,
} from "@/components/home/icons";
import { aboutValues } from "@/components/waste-water-treatment/data";

const valueIcons = [LightbulbIcon, LeafIcon, ShieldIcon, UsersIcon];

export function AboutBlueverseSection() {
  return (
    <section className="bg-brand-ice px-5 py-12 md:px-10 md:py-[60px] xl:px-[134px]">
      <div className="mx-auto max-w-[1651px]">
        <div className="mx-auto max-w-[1400px] text-center">
          <p className="bg-brand-gradient bg-clip-text font-heading text-[19px] leading-[1.1] font-semibold uppercase text-transparent">
            About BlueVerse
          </p>
          <h2 className="mt-[10px] font-heading text-[42px] leading-[1.05] font-bold text-brand-navy md:text-[50px] xl:text-[55px]">
            Building Tomorrow&apos;s Infrastructure, Today
          </h2>
          <div className="mt-5 grid gap-5 md:grid-cols-3">
            <button className="rounded-[5px] border border-brand-sky bg-brand-sky px-[30px] py-[17px] font-heading text-[22px] font-medium text-white xl:text-[25px]">
              Our Values
            </button>
            <button className="rounded-[5px] border border-brand-navy bg-transparent px-[30px] py-[17px] font-heading text-[22px] font-medium text-brand-navy xl:text-[25px]">
              Our Mission
            </button>
            <button className="rounded-[5px] border border-brand-navy bg-transparent px-[30px] py-[17px] font-heading text-[22px] font-medium text-brand-navy xl:text-[25px]">
              Our Journey
            </button>
          </div>
        </div>

        <div className="mt-[30px] grid gap-[30px] xl:grid-cols-[810.5px_1fr]">
          <article className="relative overflow-hidden rounded-[10px]">
            <Image
              src="/figma-assets/about-3.png"
              alt="BlueVerse water infrastructure"
              width={811}
              height={656}
              className="h-full min-h-[420px] w-full object-cover"
            />
            <div className="absolute inset-x-4 bottom-4 rounded-[5px] bg-white/40 px-[27px] pb-[18px] pt-3 backdrop-blur-md">
              <h3 className="text-[28px] leading-[1.13] font-medium tracking-[0.02em] text-brand-navy xl:text-[30px]">
                Building Tomorrow&apos;s Infrastructure, Today
              </h3>
              <p className="mt-[10px] text-[20px] leading-[1.3] tracking-[0.02em] text-brand-navy">
                Innovative water solutions for industries and communities.
              </p>
              <a
                href="#contact"
                className="mt-5 inline-block text-[23px] font-medium text-brand-navy underline underline-offset-4"
              >
                Get Started
              </a>
            </div>
          </article>

          <div className="grid gap-[30px] md:grid-cols-2">
            {aboutValues.map((value, index) => {
              const Icon = valueIcons[index];

              return (
                <article
                  key={value.title}
                  className="flex min-h-[303px] flex-col justify-between rounded-[16px] border border-black/20 bg-black/[0.02] p-10"
                >
                  <div className="flex size-[70px] items-center justify-center rounded-[23px] bg-brand-sky text-white">
                    <Icon className="size-9" />
                  </div>
                  <div>
                    <h3 className="font-heading text-[30px] leading-[1.13] font-bold text-black">
                      {value.title}
                    </h3>
                    <p className="mt-[10px] text-[17px] leading-[1.43] text-black/85">
                      {value.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
