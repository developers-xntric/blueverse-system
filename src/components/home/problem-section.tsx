import {
  BadgeIcon,
  FactoryIcon,
  NetworkIcon,
  WaterScarcityIcon,
} from "@/components/home/icons";
import Image from "next/image";
import type { Challenge, HomeProblemSection } from "@/types/cms";
import { SectionHeading } from "@/components/home/section-heading";
import { Button } from "@/components/home/button";

const icons = [WaterScarcityIcon, FactoryIcon, BadgeIcon, NetworkIcon];

type ProblemSectionProps = {
  section?: HomeProblemSection;
  challenges?: readonly Challenge[] | Challenge[];
};

export function ProblemSection({ section, challenges = [] }: ProblemSectionProps) {
  const challengesList = challenges.length > 0
    ? challenges
    : [
        {
          title: "Water Scarcity",
          points: [
            "Operating in one of the world's most water-stressed regions",
            "70-90% wastewater still discharged",
          ],
        },
        {
          title: "Industrial Water Waste",
          points: [
            "Traditional vehicle washing uses 120-180 litres of water per wash.",
            "Industrial washing generates high-COD/TSS effluent",
          ],
        },
        {
          title: "ESG Compliance",
          points: [
            "India, UAE, KSA, and Qatar enforcing ESG reporting mandates",
            "Companies lack real-time Scope 1, 2, 3 water metrics",
          ],
        },
        {
          title: "A Fragmented Market",
          points: [
            "Disconnected solutions",
            "Multiple vendors for vehicle washing, water treatment & ESG reporting",
          ],
        },
      ];

  return (
    <section className="bg-white py-12 md:py-[50px]">
      <div className="homepage-shell">
        <SectionHeading
          eyebrow={section?.eyebrow ?? "The Problem We Solve"}
          title={section?.title ?? "Challenges Driving the Need for Change"}
        />
        <div className="mt-7 md:mt-10 grid gap-8 md:grid-cols-2 xl:grid-cols-4 xl:gap-0">
          {challengesList.map((challenge, index) => {
            const Icon = icons[index];

            return (
              <article
                key={challenge.title}
                className="xl:border-l xl:border-brand-line xl:px-[30px] xl:first:border-l-0 xl:first:pl-0 xl:last:pr-0"
              >
                <div className="flex items-center gap-4">
                  <div className="flex size-[45px] items-center justify-center rounded-[10px] bg-brand-ice text-brand-navy">
                    {challenge.icon ? (
                      <Image src={challenge.icon} alt="" width={28} height={28} className="size-[28px] object-contain" />
                    ) : (
                      <Icon className="size-[28px]" />
                    )}
                  </div>
                  <h3 className="font-heading md:text-[20px] leading-[1.1] font-bold text-brand-navy">
                    {challenge.title}
                  </h3>
                </div>
                <ul className="mt-4 md:mt-7 space-y-2">
                  {challenge.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-3 text-[18px] leading-[1.4] text-brand-muted"
                    >
                      <span className="mt-[5px] size-[7px] shrink-0 rounded-full bg-brand-green" />
                      <span className="text-[13px] md:text-[14px]">{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
        <div className="mt-10 flex flex-col gap-5 rounded-[18px] bg-brand-blue px-6 py-7 md:mt-[30px] md:flex-row md:items-center md:justify-between md:px-[30px] md:py-[26px]">
          <p className="max-w-[820px] font-heading text-[22px] leading-[1.05] font-semibold text-white md:text-[29px]">
            {section?.ctaText ?? "Together, we can reduce water waste and build a more sustainable future"}
          </p>
          <Button
            variant="secondary"
            size="compact"
            className="whitespace-nowrap"
            href={section?.cta?.href ?? "#contact"}
          >
            {section?.cta?.label ?? "Let's Solve Water Challenges Together"}
          </Button>
        </div>
      </div>
    </section>
  );
}
