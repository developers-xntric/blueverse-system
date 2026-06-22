import Image from "next/image";

import { deploymentHighlights as fallbackHighlights } from "@/components/home/homepage-data";
import { SectionHeading } from "@/components/home/section-heading";

type DeploymentSectionProps = {
  highlights?: string[];
};

export function DeploymentSection({ highlights }: DeploymentSectionProps) {
  const items = highlights && highlights.length > 0 ? highlights : [...fallbackHighlights];

  return (
    <section className="py-6 md:py-[45px]">
      <div className="homepage-shell rounded-[18px]">
        <div className="rounded-[20px] bg-[#E8F4FD] flex flex-col justify-center items-center px-4 md:px-6 py-8 md:px-[51px] md:py-[55px]">
          <SectionHeading eyebrow="" title="Deployment Highlights" centered />
          <div className="mt-10 grid gap-6 xl:grid-cols-[530px_1fr] xl:items-center">
            <div className="justify-self-center">
              <Image
                src="/figma-assets/dep.png"
                alt="BlueVerse dashboard on a laptop"
                width={730}
                height={551}
                className="h-auto w-full max-w-[630px]"
              />
            </div>
            <ul className="space-y-6">
              {items.map((highlight) => (
                <li
                  key={highlight}
                  className="flex items-start gap-3 md:gap-4 text-[14px] font-bold leading-[1.4] text-brand-navy md:text-[18px]"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 36 36" fill="none" className="mt-1 shrink-0">
                    <rect x="0.5" y="0.5" width="35" height="35" rx="17.5" fill="#1191D0" fillOpacity="0.15" />
                    <rect x="0.5" y="0.5" width="35" height="35" rx="17.5" stroke="#1191D0" />
                    <path d="M15 18.5L17 20.5L21 16" stroke="#1191D0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
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
