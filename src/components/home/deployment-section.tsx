import Image from "next/image";

import { SectionHeading } from "@/components/home/section-heading";
import type { HomePageData } from "@/lib/strapi";

type DeploymentSectionProps = {
  data: HomePageData;
};

export function DeploymentSection({ data }: DeploymentSectionProps) {
  return (
    <section className=" py-6 md:py-[45px]">
      <div className="homepage-shell rounded-[18px] ">
        <div className="rounded-[20px] bg-[#E8F4FD] flex flex-col justify-center items-center px-4 md:px-6 py-8 md:px-[51px] md:py-[55px]">
          <SectionHeading eyebrow="" title={data.deploymentSection.title} centered />
          <div className="mt-10 grid gap-6  xl:grid-cols-[530px_1fr] xl:items-center">
            <div className="justify-self-center">
              {data.deploymentSection.image ? (
                <Image
                  src={data.deploymentSection.image.url}
                  alt={data.deploymentSection.image.alt || data.deploymentSection.title}
                  width={730}
                  height={551}
                  className="h-auto w-full max-w-[630px]"
                />
              ) : null}
            </div>
            <ul className="space-y-6">
              {data.deploymentHighlights.map((highlight) => (
                <li
                  key={highlight}
                  className="flex items-start gap-3 md:gap-4 text-[14px] font-bold leading-[1.4] text-brand-navy md:text-[18px]"
                >
                 <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 36 36" fill="none">
<path d="M32.2327 14.7842C32.9079 18.0979 32.4267 21.543 30.8693 24.5449C29.3119 27.5468 26.7724 29.924 23.6744 31.2802C20.5764 32.6364 17.1071 32.8895 13.8451 31.9973C10.583 31.1052 7.72542 29.1217 5.74879 26.3777C3.77217 23.6336 2.79601 20.2949 2.9831 16.9182C3.17019 13.5415 4.50923 10.3311 6.7769 7.82219C9.04457 5.3133 12.1038 3.65765 15.4444 3.13134C18.7851 2.60503 22.2052 3.23987 25.1344 4.93" stroke="#5CCB5F" strokeWidth="2.95699" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13.3066 16.2635L17.7421 20.699L32.5271 5.91406" stroke="#5CCB5F" strokeWidth="2.95699" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
