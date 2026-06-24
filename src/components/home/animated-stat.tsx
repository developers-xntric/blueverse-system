"use client";

import { useEffect, useRef, useState } from "react";

function parseStatValue(value: string): { num: number; suffix: string } {
  const match = value.match(/^(\d+(?:\.\d+)?)\s*(.*)$/);
  if (!match) return { num: 0, suffix: value };
  return { num: Number(match[1]), suffix: match[2] };
}

export function AnimatedStat({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  const [displayed, setDisplayed] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const { num, suffix } = parseStatValue(value);

  useEffect(() => {
    const el = ref.current;
    if (!el || hasAnimated) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 1500;
          const start = performance.now();

          function animate(now: number) {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setDisplayed(Math.floor(eased * num));
            if (progress < 1) requestAnimationFrame(animate);
          }

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [num, hasAnimated]);

  return (
    <div ref={ref} className="">
      <dd className="order-first mb-1 font-heading text-[28px] font-bold leading-none text-white md:text-[30px] flex gap-1 items-center justify-center">
        {displayed} <span>{suffix}</span>
      </dd>
      <dt className="font-heading text-[14px] uppercase text-white/95 md:text-[16px]">
        {label}
      </dt>
    </div>
  );
}
