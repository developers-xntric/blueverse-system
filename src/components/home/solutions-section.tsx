import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/home/button";
import { CarIcon, ChartIcon, WavesIcon } from "@/components/home/icons";
import type { HomeSolutionsSection, Solution } from "@/types/cms";
import { SectionHeading } from "@/components/home/section-heading";

const iconMap: Record<string, typeof WavesIcon> = {
  WavesIcon,
  CarIcon,
  ChartIcon,
};

const defaultIcons = [WavesIcon, CarIcon, ChartIcon];

type SolutionsSectionProps = {
  section?: HomeSolutionsSection;
  solutions?: readonly Solution[] | Solution[];
};

export function SolutionsSection({ section, solutions = [] }: SolutionsSectionProps) {
  const solutionsList = solutions.length > 0
    ? solutions
    : [
        {
          title: "Water Treatment Systems",
          description: "Smart water treatment systems designed to purify, recycle, and optimize water for sustainable operations.",
          image: "/figma-assets/solutions-2.png",
          href: "/waste-water-treatment-systems",
          icon: "WavesIcon",
        },
        {
          title: "Automated Vehicle Washing",
          description: "Automated vehicle washing solutions that deliver consistent cleaning performance with efficient water use.",
          image: "/figma-assets/solutions-1.png",
          href: "/vehicle-washing",
          icon: "CarIcon",
        },
        {
          title: "ESG Intelligence Platform",
          description: "AI-Driven Water Intelligence Platform for water assets, carbon credit trading, water exchange, energy optimization, and waste data management.",
          image: "/figma-assets/solutions-3.png",
          href: "/esg-platform",
          icon: "ChartIcon",
        },
      ];

  return (
    <section id="solutions" className="bg-[#E8F4FD] py-12">
      <div className="homepage-shell">
        <SectionHeading
          eyebrow={section?.eyebrow ?? "Our Solutions"}
          title={section?.title ?? "One Platform. Three Transformative Solutions."}
        />
        <div className="mt-10 grid gap-[24px] xl:grid-cols-3 xl:gap-[30px]">
          {solutionsList.map((solution, index) => {
            const Icon = iconMap[solution.icon ?? ""] ?? defaultIcons[index];

            return (
              <Link
                key={solution.title}
                href={solution.href}
                className="block rounded-[10px] md:rounded-[20px] bg-white p-3 md:p-[24px] shadow-[0_12px_24px_rgba(6,43,79,0.12)] transition-shadow hover:shadow-[0_16px_32px_rgba(6,43,79,0.18)]"
              >
                <div className="relative h-[250px] md:h-[295px] overflow-hidden rounded-[12px]">
                  <Image
                    src={solution.image}
                    alt={solution.title}
                    width={471}
                    height={295}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="relative">
                  <div className="-mt-7 ml-[6px] flex size-[47px] items-center justify-center rounded-[16px] bg-[#E8F4FD] text-brand-navy shadow-[0_8px_16px_rgba(6,43,79,0.12)]">
                    {solution.icon && !iconMap[solution.icon] ? (
                      <Image src={solution.icon} alt="" width={24} height={24} className="size-[24px] object-contain" />
                    ) : (
                      <Icon className="size-[24px]" />
                    )}
                  </div>
                  <h3 className="mt-3 font-heading text-[18px] md:text-[23px] leading-[1.15] font-bold text-[#062B4F]">
                    {solution.title}
                  </h3>
                  <p className="mt-3 text-[14px] md:text-[16px] leading-[1.45] text-brand-muted">
                    {solution.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
        <div className="mx-auto mt-12 max-w-[1023px] text-center">
          <p className="font-heading text-[22px] leading-[1.15] font-bold text-brand-navy md:text-[35px]">
            {section?.summary ?? "From Water Treatment to Smart Washing and ESG Reporting, BlueVerse brings every solution together."}
          </p>
          <div className="mt-6">
            <Button href={section?.cta?.href ?? "#contact"}>
              {section?.cta?.label ?? "Let's Talk Sustainable Growth"}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
