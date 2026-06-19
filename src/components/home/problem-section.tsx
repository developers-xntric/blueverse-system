import {
  BadgeIcon,
  FactoryIcon,
  NetworkIcon,
  WaterScarcityIcon,
} from "@/components/home/icons";
import { challenges } from "@/components/home/homepage-data";
import { SectionHeading } from "@/components/home/section-heading";
import { Button } from "@/components/home/button";

const icons = [WaterScarcityIcon, FactoryIcon, BadgeIcon, NetworkIcon];

export function ProblemSection() {
  return (
    <section className="bg-white py-12 md:py-[50px]">
      <div className="homepage-shell">
        <SectionHeading
          eyebrow="The Problem We Solve"
          title="Challenges Driving the Need for Change"
        />
        <div className="mt-10 grid gap-8 md:grid-cols-2 xl:grid-cols-4 xl:gap-0">
          {challenges.map((challenge, index) => {
            const Icon = icons[index];

            return (
              <article
                key={challenge.title}
                className="xl:border-l xl:border-brand-line xl:px-[30px] xl:first:border-l-0 xl:first:pl-0 xl:last:pr-0"
              >
                <div className="flex items-center gap-4">
                  <div className="flex size-[45px] items-center justify-center rounded-[10px] bg-brand-ice text-brand-navy">
                    <Icon className="size-[28px]" />
                  </div>
                  <h3 className="font-heading text-[20px] leading-[1.1] font-bold text-brand-navy">
                    {challenge.title}
                  </h3>
                </div>
                <ul className="mt-7 space-y-2">
                  {challenge.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-3 text-[18px] leading-[1.4] text-brand-muted"
                    >
                      <span className="mt-[5px] size-[7px] shrink-0 rounded-full bg-brand-green" />
                      <span className="text-[14px]">{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
        <div className="mt-10 flex flex-col gap-5 rounded-[18px] bg-brand-blue px-6 py-7 md:mt-[30px] md:flex-row md:items-center md:justify-between md:px-[30px] md:py-[26px]">
          <p className="max-w-[820px] font-heading text-[28px] leading-[1.05] font-semibold text-white md:text-[29px]">
            Together, we can reduce water waste and build a more sustainable future
          </p>
          <Button variant="secondary" size="compact" className="whitespace-nowrap">
            Let&apos;s Solve Water Challenges Together
          </Button>
        </div>
      </div>
    </section>
  );
}
