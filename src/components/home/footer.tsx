import Image from "next/image";
import Link from "next/link";

import type { FooterData } from "@/lib/types";

type FooterProps = {
  data: FooterData;
};

export function Footer({ data }: FooterProps) {
  return (
    <footer className="bg-brand-blue py-8 text-white md:py-6">
      <div className="homepage-shell">
        <div className="flex flex-col gap-6 md:gap-8 xl:flex-row xl:items-center xl:justify-between">
          {data.logo ? (
            <Image
              src={data.logo.url}
              alt={data.logo.alt || "BlueVerse"}
              width={421}
              height={117}
              className="h-auto w-42.5 md:w-47.5"
            />
          ) : null}
          <div className="flex flex-col gap-3 text-[14px] text-white/60 md:flex-row md:flex-wrap md:gap-6 md:text-[15.15px]">
            {data.serviceLinks.map((item) => (
              <Link key={item.label} href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="mt-4 border-t border-white/10 pt-3 md:pt-6">
          <p className="text-center text-[14px] text-white/60 md:text-[15.15px]">
            {data.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
