"use client";

import { Children, type ReactNode, useEffect, useEffectEvent, useState } from "react";

type MobileCarouselProps = {
  children: ReactNode;
  autoplayMs?: number;
};

export function MobileCarousel({
  children,
  autoplayMs,
}: MobileCarouselProps) {
  const slides = Children.toArray(children);
  const [activeIndex, setActiveIndex] = useState(0);
  const slideCount = slides.length;

  const advanceSlide = useEffectEvent(() => {
    setActiveIndex((currentIndex) => (currentIndex + 1) % slideCount);
  });

  useEffect(() => {
    if (!autoplayMs || slideCount < 2) {
      return;
    }

    const intervalId = window.setInterval(() => {
      advanceSlide();
    }, autoplayMs);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [autoplayMs, slideCount]);

  if (slideCount === 0) {
    return null;
  }

  return (
    <div className="sm:hidden">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="min-w-full">
              {slide}
            </div>
          ))}
        </div>
      </div>

      {slideCount > 1 ? (
        <div className="mt-4 flex items-center justify-center gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Go to slide ${index + 1}`}
              onClick={() => setActiveIndex(index)}
              className={`h-2 rounded-full transition-all ${
                activeIndex === index
                  ? "w-6 bg-brand-blue"
                  : "w-2 bg-brand-blue/25"
              }`}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}
