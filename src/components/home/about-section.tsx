"use client";

import { useState } from "react";
import Image from "next/image";

import {
  LeafIcon,
  LightbulbIcon,
  ShieldIcon,
  UsersIcon,
} from "@/components/home/icons";
import { SectionHeading } from "@/components/home/section-heading";
import type { HomePageData } from "@/lib/types";

const icons = [LightbulbIcon, LeafIcon, ShieldIcon, UsersIcon];

type AboutSectionProps = {
  data: HomePageData;
};

export function AboutSection({ data }: AboutSectionProps) {
  const aboutTabs = data.aboutTabs.map((tab) => tab.name);
  const [activeTab, setActiveTab] =
    useState(aboutTabs[0] ?? "");
  const activePanel = data.aboutTabs.find((tab) => tab.name === activeTab)?.panel;

  if (!activePanel) {
    return null;
  }

  return (
    <section id="about" className=" py-12 bg-[#E8F4FD] md:py-[60px]">
      <div className="homepage-shell">
        <SectionHeading
          eyebrow={data.aboutSection.eyebrow || ""}
          title={data.aboutSection.title}
          description={data.aboutSection.description}
          centered
        />
        <div className="mt-8 md:grid flex  flex-wrap gap-2 md:gap-4 md:grid-cols-3 max-w-[99%] mx-auto">
          {aboutTabs.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`rounded-[8px]  cursor-pointer border px-4 py-3 font-heading text-[13px] leading-none md:text-[20px] ${
                activeTab === tab
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
            {activePanel.image ? (
              <Image
                src={activePanel.image.url}
                alt={activePanel.image.alt || activePanel.overlayTitle || activeTab}
                width={676}
                height={656}
                className={`max-h-[470px] min-h-[350px]  w-full object-cover rounded-[10px] ${activeTab === "Our Journey" ? "md:min-h-[620px] 2xl:min-h-[610px]" : "md:min-h-[400px] 2xl:min-h-[390px]"}`}
              />
            ) : null}
            <div className="absolute inset-x-2 bottom-[5%] rounded-[10px] bg-[linear-gradient(90deg,rgba(255,255,255,0.45),rgba(255,255,255,0.18))] p-3 backdrop-blur-[6px] md:inset-x-[14px] 2xl:bottom-[14px] md:p-4">
              <h3 className=" text-[22px] md:text-[28px] leading-[1.1] text-brand-navy">
                {activePanel.overlayTitle}
              </h3>
              <p className="mt-2 text-[13px] leading-[1.35] text-brand-navy/90 md:text-[16px]">
                {activePanel.overlayDescription}
              </p>
              <a
                href={activePanel.overlayCta?.href || "#contact"}
                className="mt-4 inline-block font-sans text-[18px] font-medium text-brand-navy underline underline-offset-4"
              >
                {activePanel.overlayCta?.label || "Get Started"}
              </a>
            </div>
          </article>
          {activeTab === "Our Values" && (
            <div className="grid gap-4 md:gap-6 md:grid-cols-2">
              {activePanel.cards.map((item, index) => {
                const Icon = icons[index];

                return (
                  <article
                    key={item.title}
                    className="rounded-[10px] md:rounded-[18px] border border-brand-card-line bg-[#e3eff8] p-4  md:p-[22px] flex flex-col items-start "
                  >
                    <div className="flex size-[40px] md:size-[48px] items-center justify-center rounded-[10px] md:rounded-[18px] bg-brand-sky text-white">
                      {item.icon ? (
                        <Image
                          src={item.icon.url}
                          alt={item.icon.alt || item.title}
                          width={30}
                          height={30}
                          className="size-[24px] object-contain md:size-[30px]"
                        />
                      ) : (
                        <Icon className="size-[24px] md:size-[30px]" />
                      )}
                    </div>
                    <div>
                      <h3 className="mt-7  font-heading text-[20px] leading-[1.1] font-bold text-black">
                        {item.title}
                      </h3>
                      <p className="mt-1.5 md:mt-3 text-[15px] leading-[1.45] text-black">
                        {item.description}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          )}

          {activeTab === "Our Mission" && (
            <div className="flex flex-col bg-[#e3eff8] p-4 ">
              <h3 className="font-heading text-[30px] leading-[1.1] font-bold text-[#062B4F]">
                {activePanel.heading}
              </h3>
              <div className="mt-3 space-y-2">
                {activePanel.missionParagraphs.map((para, i) => (
                  <p key={i} className="text-[15px] leading-[1.7] text-black/85">
                    {para}
                  </p>
                ))}
              </div>
            </div>
          )}

          {activeTab === "Our Journey" && (
            <div className="relative border border-black/10 p-3 rounded-[10px] ">
              <div className="absolute left-1/2 top-[5%] h-[90%] w-[2px] -translate-x-1/2 bg-black/15" />
              {activePanel.timeline.map((item, index) => {
                const isLeft = index % 2 === 0;

                return (
                  <div
                    key={item.year}
                    className={`relative flex items-start pb-4 2xl:pb-8 last:pb-0 ${
                      isLeft ? "flex-row" : "flex-row-reverse"
                    }`}
                  >
                    <div className="flex w-1/2 flex-col justify-start px-4">
                      <div className={`${isLeft ? "text-right" : "text-left" } w-full `}>
                        <span className="font-heading text-[18px] md:text-[22px] font-medium text-black">
                          {item.year}
                        </span>
                      </div>
                    </div>
                    <div className="relative z-10 flex shrink-0 items-center justify-center">
                      <div className="size-[16px] rounded-full bg-black" />
                    </div>
                    <div className="w-1/2 px-3 md:px-4">
                      <div className="rounded-[12px] md:p-2">
                        <p className="text-[13px] md:text-[15px] leading-[1.6] text-black/85">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
