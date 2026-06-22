import { epcFocusAreas } from "@/components/waste-water-treatment/data";

export function EpcFocusAreasSection() {
  return (
    <section className="mx-auto w-[90%] bg-white py-12 2xl:max-w-360">
      <div className="mx-auto">
        <h2 className="text-center font-heading text-[24px] leading-[1.05] font-bold text-brand-navy md:text-[40px]">
          EPC Focus Areas
        </h2>

        <div className="mt-12.5 grid gap-7.5 xl:grid-cols-2">
          {epcFocusAreas.map((area) => (
            <article
              key={area.title}
              className="rounded-2xl border border-black/20 bg-black/2 px-5 py-5 sm:px-7 md:px-10"
            >
              <h3 className="font-heading text-[18px] leading-[1.15] font-bold text-brand-navy xl:text-[24px]">
                {area.title}
              </h3>
              <p className="mt-2.5 text-[16px] leading-normal text-brand-muted">
                {area.description}
              </p>
              <ul className="mt-7.5 space-y-2.5">
                {area.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-2.5 text-[16px] leading-[1.35] text-brand-muted sm:items-center sm:text-[18px] sm:leading-[1.21] xl:text-md"
                  >
                    <span className="mt-2 size-2 shrink-0 rounded-full bg-brand-green sm:mt-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-12.5 flex flex-col gap-5 rounded-[18px] border border-black/20 px-5 py-5 md:flex-row md:items-center md:justify-between md:px-5 md:py-5">
          <p className="font-heading text-[24px] leading-[1.12] font-bold text-brand-navy text-balance sm:text-[28px] md:pr-6 xl:text-[24px] xl:leading-[1.16]">
            Delivering end-to-end water infrastructure solutions from design and procurement to construction and deployment.
          </p>
          <button
            className="w-full cursor-pointer rounded-[5px] border border-white bg-[#1191d0] py-3 text-center font-heading text-[16px] font-medium text-white hover:bg-[#1191d0]/90 md:w-82.5 md:shrink-0"
          >
            Let&apos;s Discuss Your Project
          </button>
        </div>
      </div>
    </section>
  );
}
