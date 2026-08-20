"use client";

import Image from "next/image";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
} from "react";
import { company } from "@/data/company";

const slides = [
  {
    src: company.heroImage,
    alt: "Banner Wingroup — đồng hành cùng phát triển",
    mobileSrc: null as string | null,
    position: "object-center",
  },
  {
    src: company.heroImageAlt,
    alt: "Banner Wingroup — phục hồi cây suy, rễ khỏe",
    // Bản crop nghiêng phải — chữ không bị cắt trên mobile
    mobileSrc: "/images/banners/slide-mobile.jpg",
    position: "object-center",
  },
];

export function Hero() {
  const [index, setIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const locked = useRef(false);

  const go = useCallback((dir: 1 | -1) => {
    setIndex((i) => (i + dir + slides.length) % slides.length);
  }, []);

  const next = useCallback(() => go(1), [go]);
  const prev = useCallback(() => go(-1), [go]);

  useEffect(() => {
    const id = window.setInterval(() => {
      if (locked.current) return;
      next();
    }, 5500);
    return () => window.clearInterval(id);
  }, [next]);

  function onPointerDown(e: ReactPointerEvent) {
    touchStartX.current = e.clientX;
    locked.current = true;
  }

  function onPointerUp(e: ReactPointerEvent) {
    if (touchStartX.current == null) return;
    const dx = e.clientX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(dx) > 40) {
      if (dx < 0) next();
      else prev();
    }
    window.setTimeout(() => {
      locked.current = false;
    }, 400);
  }

  function onPointerCancel() {
    touchStartX.current = null;
    locked.current = false;
  }

  return (
    <section
      className="relative isolate aspect-[4/3] max-h-[78vh] min-h-[40vh] w-full touch-pan-y overflow-hidden bg-[var(--color-bg-deep)] sm:aspect-[16/9] sm:min-h-[48vh] md:aspect-[21/9] md:min-h-[52vh]"
      aria-label="Banner trang chủ"
      aria-roledescription="carousel"
      onPointerDown={onPointerDown}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerCancel}
      onPointerLeave={onPointerCancel}
    >
      {slides.map((slide, i) => (
        <div
          key={slide.src}
          className={`absolute inset-0 transition-opacity duration-700 ease-out ${
            i === index ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
          aria-hidden={i !== index}
        >
          {slide.mobileSrc ? (
            <>
              <Image
                src={slide.mobileSrc}
                alt={slide.alt}
                fill
                priority={i === 0}
                sizes="100vw"
                draggable={false}
                className="select-none object-contain object-center bg-[#e8f5e4] md:hidden"
              />
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                sizes="100vw"
                draggable={false}
                className="hidden select-none object-cover object-[72%_center] md:block lg:object-center"
              />
            </>
          ) : (
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              priority={i === 0}
              sizes="100vw"
              draggable={false}
              className={`select-none object-cover ${slide.position}`}
            />
          )}
        </div>
      ))}

      <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-[var(--color-bg)] to-transparent" />

      <button
        type="button"
        aria-label="Banner trước"
        onClick={prev}
        className="absolute top-1/2 left-2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/25 text-white backdrop-blur-sm transition hover:bg-black/40 sm:flex"
      >
        ‹
      </button>
      <button
        type="button"
        aria-label="Banner sau"
        onClick={next}
        className="absolute top-1/2 right-2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/25 text-white backdrop-blur-sm transition hover:bg-black/40 sm:flex"
      >
        ›
      </button>

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
