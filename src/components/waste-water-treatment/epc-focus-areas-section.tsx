import { epcFocusAreas } from "@/components/waste-water-treatment/data";

export function EpcFocusAreasSection() {
  return (
    <section className="bg-white px-5 py-12 md:px-10 md:py-[50px] xl:px-[136px]">
      <div className="mx-auto max-w-[1648px]">
        <h2 className="text-center font-heading text-[42px] leading-[1.05] font-bold text-brand-navy md:text-[50px] xl:text-[55px]">
          EPC Focus Areas
        </h2>

        <div className="mt-[50px] grid gap-[30px] xl:grid-cols-2">
          {epcFocusAreas.map((area) => (
            <article
              key={area.title}
              className="rounded-[16px] border border-black/20 bg-black/[0.02] px-10 py-5"
            >
              <h3 className="font-heading text-[28px] leading-[1.15] font-bold text-brand-navy xl:text-[30px]">
                {area.title}
              </h3>
              <p className="mt-[10px] text-[16px] leading-[1.5] text-brand-muted">
                {area.description}
              </p>
              <ul className="mt-[30px] space-y-[10px]">
                {area.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-center gap-[10px] text-[18px] leading-[1.21] text-brand-muted xl:text-[20px]"
                  >
                    <span className="size-[7px] shrink-0 rounded-full bg-brand-green" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-[50px] flex flex-col gap-5 rounded-[18px] bg-brand-blue px-5 py-5 md:flex-row md:items-center md:justify-between md:px-[20px] md:py-[20px]">
          <p className="max-w-[795px] font-heading text-[32px] leading-[1.06] font-bold text-white xl:text-[50px] xl:leading-[1.16]">
            Water Strategy Built for Scarcity, Compliance, and Reuse
          </p>
          <a
            href="#contact"
            className="inline-flex min-h-[55px] items-center justify-center rounded-[5px] border border-white bg-white px-[30px] py-3 font-heading text-[20px] font-medium text-brand-sky"
          >
            Let&apos;s Discuss Your Project
          </a>
        </div>
      </div>
    </section>
  );
}
