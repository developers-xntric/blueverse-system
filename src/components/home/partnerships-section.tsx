import Image from "next/image";

import type { Partnership, SectionHeaderContent } from "@/types/cms";
import { SectionHeading } from "@/components/home/section-heading";

type PartnershipsSectionProps = {
  section?: SectionHeaderContent;
  partners?: readonly Partnership[] | Partnership[];
};

export function PartnershipsSection({ section, partners = [] }: PartnershipsSectionProps) {
  const partnersList = partners.length > 0
    ? partners
    : [
        {
          name: "MCWW",
          logo: "/figma-assets/washworks.png",
          description:
            "Manufactures a comprehensive line of automatic car wash systems, including tunnels, arches, and high-performance drying equipment. A trusted one-stop resource for car wash investors and operators seeking reliable, cutting-edge technology, the company focuses on delivering durable, efficient, and easy-to-operate solutions designed to maximize wash quality.",
        },
        {
          name: "INDRA Water",
          logo: "/figma-assets/indra.png",
          description:
            "BlueVerse is the exclusive GCC system integrator for INDRA Water's ElectroX electrochemical treatment platform, a technology certified as 10 years ahead of conventional ETP/STP systems. INDRA's modular units require zero primary chemicals, have a fraction of the footprint of legacy systems, and are fully remote-monitored.",
        },
        {
          name: "Stinger Chemicals",
          logo: "/figma-assets/stinger.png",
          description:
            "Stinger Chemicals delivers high-quality industrial and automotive chemical solutions, trusted for performance and reliability. Committed to innovation, we provide products that meet the highest standards for every application, helping businesses achieve superior cleaning, protection, and maintenance results.",
        },
        {
          name: "Xylem",
          logo: "/figma-assets/xylem.png",
          description:
            "BlueVerse cleantech has partnered with Xylem, a global leader in water technology and solutions, to strengthen our water infrastructure capabilities. Xylem's expertise spans water analysis & monitoring, disinfection systems, filtration, smart metering, and digital water management complementing our EPC and ESG commitments with world-class technology and equipment.",
        },
      ];

  return (
    <section className="bg-white py-12 md:py-[50px]">
      <div className="homepage-shell">
        <SectionHeading
          eyebrow={section?.eyebrow ?? "Our Partners"}
          title={section?.title ?? "Trusted by Industry Leaders"}
          description={section?.description}
          centered
        />
        <div className="mt-[30px] grid gap-[20px] md:grid-cols-2 xl:grid-cols-4">
          {partnersList.map((partner) => (
            <article
              key={partner.name}
              className="flex flex-col rounded-[19px] bg-brand-ice px-6 py-[22px]"
            >
              <div className="flex h-[58px] items-start">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={130}
                  height={58}
                  className="h-auto w-auto max-h-[58px] max-w-[130px] object-contain object-left"
                />
              </div>
              <h3 className="mt-[22px] font-heading text-[18px] font-bold leading-none text-brand-navy">
                {partner.name}
              </h3>
              <p className="mt-[10px] flex-1 text-[14px] leading-[1.45] text-brand-muted">
                {partner.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
