"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { company } from "@/data/company";

const slides = [
  {
    src: company.heroImage,
    alt: "Banner Wingroup — đồng hành cùng phát triển",
  },
  {
    src: company.heroImageAlt,
    alt: "Banner Wingroup — giải pháp dinh dưỡng cây trồng",
  },
];

export function Hero() {
  const [index, setIndex] = useState(0);

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % slides.length);
  }, []);

  useEffect(() => {
    const id = window.setInterval(next, 5500);
    return () => window.clearInterval(id);
  }, [next]);

  return (
    <section
      className="relative isolate aspect-[16/10] max-h-[78vh] min-h-[42vh] w-full overflow-hidden bg-[var(--color-bg-deep)] sm:aspect-[21/9] sm:min-h-[52vh]"
      aria-label="Banner trang chủ"
    >
      {slides.map((slide, i) => (
        <div
          key={slide.src}
          className={`absolute inset-0 transition-opacity duration-700 ease-out ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden={i !== index}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            priority={i === 0}
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
      ))}

      <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-[var(--color-bg)] to-transparent" />

      <div className="absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Banner ${i + 1}`}
            aria-current={i === index}
            onClick={() => setIndex(i)}
            className={`h-2.5 rounded-full transition ${
              i === index
                ? "w-8 bg-[var(--color-primary)]"
                : "w-2.5 bg-white/70 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
