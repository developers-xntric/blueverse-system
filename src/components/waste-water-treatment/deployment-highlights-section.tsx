import Image from "next/image";

import { CheckIcon } from "@/components/home/icons";
import { deploymentHighlights } from "@/components/waste-water-treatment/data";

export function DeploymentHighlightsSection() {
  return (
    <section className="bg-white px-5 py-12 md:px-10 md:py-[50px] xl:px-[135px]">
      <div className="mx-auto max-w-[1650px] rounded-[28px] bg-brand-ice px-8 py-10 xl:px-[91px] xl:py-[60px]">
        <h2 className="text-center font-heading text-[42px] leading-[1.05] font-bold text-brand-navy md:text-[50px] xl:text-[55px]">
          Deployment Highlights
        </h2>
        <div className="mt-[60px] grid gap-10 xl:grid-cols-[730px_606px] xl:justify-between xl:items-center">
          <div>
            <Image
              src="/figma-assets/deployment-image.png"
              alt="BlueVerse dashboard laptop mockup"
              width={730}
              height={451}
              className="h-auto w-full"
            />
          </div>
          <ul className="space-y-[30px]">
            {deploymentHighlights.map((highlight) => (
              <li
                key={highlight}
                className="flex items-start gap-5 text-[18px] leading-[1.25] font-bold text-brand-navy xl:text-[22px] xl:leading-[1.32]"
              >
                <CheckIcon className="mt-[4px] size-[35px] shrink-0 text-[#4dcc54]" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
