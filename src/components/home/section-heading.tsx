type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={centered ? "text-center" : ""}>
      {eyebrow ? (
        <p
          className={`font-sans text-[12px] font-medium uppercase tracking-[0.08em] md:text-[18px] ${
            light ? "text-white/80" : "text-brand-sky"
          }`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`${eyebrow ? "mt-2" : ""} font-heading text-[36px] leading-[1.05] font-bold md:text-[55px] ${
          light ? "text-white" : "text-brand-navy"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mx-auto mt-3 max-w-[980px] text-[17px] leading-[1.4] md:text-[22px] ${
            light ? "text-white/75" : "text-brand-muted"
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
