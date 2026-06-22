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
import type { AboutTab } from "@/types/cms";

const icons = [LightbulbIcon, LeafIcon, ShieldIcon, UsersIcon];

type AboutSectionProps = {
  aboutTabs?: readonly AboutTab[] | AboutTab[];
};

export function AboutSection({ aboutTabs = [] }: AboutSectionProps) {
  const tabsData = aboutTabs.length > 0
    ? aboutTabs
    : [
        {
          name: "Our Values",
          panel: {
            image: "/figma-assets/about-3.png",
            overlayTitle: "Building Tomorrow's Infrastructure, Today",
            overlayDescription: "Innovative water solutions for industries and communities.",
            cards: [
              { title: "Innovation", description: "Proprietary technology and bespoke solutions over off-the-shelf defaults." },
              { title: "Sustainability", description: "Every solution is designed with environmental responsibility in mind." },
              { title: "Reliability", description: "Long-term partnerships built on consistent delivery and trust." },
              { title: "People-First", description: "Continuous training and development for our team and our clients." },
            ],
          },
        },
        {
          name: "Our Mission",
          panel: {
            image: "/figma-assets/about-tab2.png",
            overlayTitle: "Building Tomorrow's Infrastructure, Today",
            overlayDescription: "Innovative water solutions for industries and communities.",
            heading: "Our Mission",
            missionParagraphs: [
              "BlueVerse CleanTech exists to make water reuse the default, not the exception, for businesses. We believe industrial water waste is not inevitable. With the right technology, data intelligence, and circular water solutions, every litre can be recovered, treated, and reused.",
              "As industries face increasing pressure from water scarcity, rising utility costs, and evolving sustainability requirements, we provide integrated solutions that help organizations operate more efficiently while reducing their environmental impact. Our approach combines advanced water treatment technologies, digital monitoring platforms, and ESG-focused performance insights to create measurable, long-term value.",
              "We partner with businesses across industrial, commercial, and infrastructure sectors to transform wastewater from a liability into a valuable resource. Through intelligent treatment systems, real-time operational visibility, and performance-driven water management strategies, we help clients reduce freshwater dependency, optimize resource consumption, and strengthen regulatory compliance.",
              "By enabling circular water ecosystems, BlueVerse is building a future where sustainability and operational excellence work together. Our mission is to empower organizations to conserve resources, lower emissions, improve efficiency, and create a lasting positive impact on communities, industries, and the environment.",
            ],
          },
        },
        {
          name: "Our Journey",
          panel: {
            image: "/figma-assets/about-tab3.png",
            overlayTitle: "Building Tomorrow's Infrastructure, Today",
            overlayDescription: "Innovative water solutions for industries and communities.",
            timeline: [
              { year: "2021", description: "Developed and patented automated 2-wheeler vehicle washing machine" },
              { year: "2022", description: "Built proprietary ESG Tech Stack for water metrics in vehicle washing" },
              { year: "2024", description: "Expanded to 15 operational sites across India; entered the UAE market" },
              { year: "2025", description: "Launched UAE B2C car care centre at Al Quoz, Dubai" },
              { year: "2026", description: "Incubated in WTIIRA Saudi Water Authority innovation programme" },
              { year: "2026", description: "Selected for WaterTech Accelerator QSTP × TotalEnergies, Qatar" },
            ],
          },
        },
      ];

  const [activeTab, setActiveTab] = useState(tabsData[0]?.name ?? "Our Values");
  const activePanel = tabsData.find((t) => t.name === activeTab)?.panel ?? tabsData[0]?.panel;

  return (
    <section id="about" className="py-12 bg-[#E8F4FD] md:py-[60px]">
      <div className="homepage-shell">
        <SectionHeading
          eyebrow="About BlueVerse"
          title="Building Tomorrow's Infrastructure, Today"
          centered
        />
        <div className="mt-8 md:grid flex flex-wrap gap-2 md:gap-4 md:grid-cols-3 max-w-[99%] mx-auto">
          {tabsData.map((tab) => (
            <button
              key={tab.name}
              type="button"
              onClick={() => setActiveTab(tab.name)}
              className={`rounded-[8px] border px-4 py-3 font-heading text-[13px] leading-none md:text-[20px] ${
                activeTab === tab.name
                  ? "border-brand-sky bg-brand-sky text-white"
                  : "border-brand-navy/40 bg-transparent text-brand-navy"
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>
        <div className="mt-6 grid gap-6 xl:grid-cols-[1.07fr_.93fr]">
          <article className="relative overflow-hidden rounded-[10px]">
            <Image
              src={activePanel.image}
              alt={activePanel.overlayTitle}
              width={676}
              height={656}
              className="max-h-[600px] min-h-[350px] md:min-h-[620px] w-full object-cover rounded-[10px]"
            />
            <div className="absolute inset-x-2 bottom-[5%] rounded-[10px] bg-[linear-gradient(90deg,rgba(255,255,255,0.45),rgba(255,255,255,0.18))] p-3 backdrop-blur-[6px] md:inset-x-[14px] 2xl:bottom-[14px] md:p-4">
              <h3 className="text-[22px] md:text-[28px] leading-[1.1] text-brand-navy">
                {activePanel.overlayTitle}
              </h3>
              <p className="mt-2 text-[13px] leading-[1.35] text-brand-navy/90 md:text-[16px]">
                {activePanel.overlayDescription}
              </p>
              <a
                href="#contact"
                className="mt-4 inline-block font-sans text-[18px] font-medium text-brand-navy underline underline-offset-4"
              >
                Get Started
              </a>
            </div>
          </article>
          {activeTab === "Our Values" && activePanel.cards && (
            <div className="grid gap-4 md:gap-6 md:grid-cols-2">
              {activePanel.cards.map((item, index) => {
                const Icon = icons[index];

                return (
                  <article
                    key={item.title}
                    className="rounded-[10px] md:rounded-[18px] border border-brand-card-line bg-[#e3eff8] p-4 md:p-[22px] flex flex-col items-start justify-between"
                  >
                    <div className="flex size-[40px] md:size-[58px] items-center justify-center rounded-[10px] md:rounded-[18px] bg-brand-sky text-white">
                      <Icon className="size-[24px] md:size-[28px]" />
                    </div>
                    <div>
                      <h3 className="mt-7 md:mt-10 font-heading text-[20px] leading-[1.1] font-bold text-black">
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

          {activeTab === "Our Mission" && activePanel.missionParagraphs && (
            <div className="flex flex-col bg-[#e3eff8]">
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

          {activeTab === "Our Journey" && activePanel.timeline && (
            <div className="relative border border-black/10 p-3 rounded-[10px]">
              <div className="absolute left-1/2 top-[5%] h-[90%] w-[2px] -translate-x-1/2 bg-black/15" />
              {activePanel.timeline.map((item, index) => {
                const isLeft = index % 2 === 0;

                return (
                  <div
                    key={`${item.year}-${index}`}
                    className={`relative flex items-start pb-8 last:pb-0 ${
                      isLeft ? "flex-row" : "flex-row-reverse"
                    }`}
                  >
                    <div className="flex w-1/2 flex-col justify-start px-4">
                      <div className={`${isLeft ? "text-right" : "text-left"} w-full`}>
                        <span className="font-heading text-[18px] md:text-[22px] font-bold text-black">
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
