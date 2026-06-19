import Image from "next/image";

import { CheckIcon } from "@/components/home/icons";
import { deploymentHighlights } from "@/components/home/homepage-data";
import { SectionHeading } from "@/components/home/section-heading";

export function DeploymentSection() {
  return (
    <section className="bg-brand-ice py-12 md:py-[95px]">
      <div className="homepage-shell rounded-[18px] bg-brand-ice">
        <div className="rounded-[20px] bg-brand-ice-strong px-6 py-8 md:px-[51px] md:py-[55px]">
          <SectionHeading eyebrow="" title="Deployment Highlights" centered />
          <div className="mt-10 grid gap-8 xl:grid-cols-[730px_1fr] xl:items-center">
            <div className="justify-self-center">
              <Image
                src="/figma-assets/deployment-image.png"
                alt="BlueVerse dashboard on a laptop"
                width={730}
                height={451}
                className="h-auto w-full max-w-[730px]"
              />
            </div>
            <ul className="space-y-6">
              {deploymentHighlights.map((highlight) => (
                <li
                  key={highlight}
                  className="flex items-start gap-4 text-[18px] font-bold leading-[1.4] text-brand-navy md:text-[22px]"
                >
                  <CheckIcon className="mt-[3px] size-[26px] shrink-0 text-brand-green" />
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
