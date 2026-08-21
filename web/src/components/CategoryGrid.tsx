import Link from "next/link";
import type { ReactNode } from "react";
import { categories } from "@/data/categories";
import { Reveal } from "@/components/Reveal";

function IconPhucHoi() {
  // Phục hồi: lá + mũi tên vòng (tái tạo)
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" aria-hidden>
      <path
        d="M12 19c4.5 0 7-3.2 8-7.5-3.2 1.2-6.2 2.8-8 7.5Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="M12 19c-2.2-3.8-4.8-5.8-8-7.2"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M16.5 5.2A6.2 6.2 0 0 0 7.8 6.5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M7.2 3.8v3.2h3.2"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconTaoMam() {
  // Tạo mầm: chồi non / mầm (icon cũ của Phục hồi)
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" aria-hidden>
      <path
        d="M12 21v-7"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M12 14c-3.5-1.2-5.8-3.8-6.5-7.8 4.2.4 7 2.4 8.2 5.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M12 14c3.5-1.2 5.8-3.8 6.5-7.8-4.2.4-7 2.4-8.2 5.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="8.2" r="1.2" fill="currentColor" />
    </svg>
  );
}

function IconDuongBong() {
  // Dưỡng bông: nụ/bông đang nở + trái nhỏ
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" aria-hidden>
      <circle cx="12" cy="10" r="2.2" stroke="currentColor" strokeWidth="1.7" />
      <path
        d="M12 7.8c-1.8-2.4-4.2-2.8-5.6-1.6 1.6 1.5 2.6 3 3.2 4.6M12 7.8c1.8-2.4 4.2-2.8 5.6-1.6-1.6 1.5-2.6 3-3.2 4.6"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.2 11.2c-2.6-.2-4.2 1.2-4.4 3 2.2.2 3.6-.4 4.8-1.6M15.8 11.2c2.6-.2 4.2 1.2 4.4 3-2.2.2-3.6-.4-4.8-1.6"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 12.2v5.3M10.2 19.2c.6-1.2 1.2-1.8 1.8-1.8s1.2.6 1.8 1.8"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconKichRe() {
  // Kích rễ: thân + bộ rễ tỏa xuống
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" aria-hidden>
      <path
        d="M12 3.5c0 2.2-1.2 3.8-3.2 4.6 1.8.2 3 1.2 3.2 2.7 0-1.5 1.4-2.5 3.2-2.7C13.2 7.3 12 5.7 12 3.5Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="M12 10.8v2.4"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M12 13.2c-2.2 1.2-3.6 2.8-4.2 5.2M12 13.2c2.2 1.2 3.6 2.8 4.2 5.2M12 14.5c-1.2 1.4-1.8 2.8-2 4.8M12 14.5c1.2 1.4 1.8 2.8 2 4.8M12 13.8v6.4"
        stroke="currentColor"
        strokeWidth="1.65"
        strokeLinecap="round"
      />
    </svg>
  );
}

const icons: Record<string, ReactNode> = {
  "phuc-hoi": <IconPhucHoi />,
  "ho-tro": "🧪",
  "tao-mam": <IconTaoMam />,
  "duong-bong-nuoi-trai": <IconDuongBong />,
  "kich-re-duong-re": <IconKichRe />,
  "chuyen-xoai": "🥭",
  "chuyen-lua": "🌾",
};

export function CategoryGrid() {
  return (
    <section className="section section-alt">
      <div className="container">
        <Reveal>
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <p className="mb-2 text-sm font-bold uppercase tracking-wide text-[var(--color-primary)]">
              Điều hướng nhanh
            </p>
            <h2 className="text-3xl font-extrabold text-[var(--color-primary-dark)] md:text-4xl">
              Bạn cần giải pháp gì?
            </h2>
            <p className="mt-3 text-[var(--color-text-secondary)]">
              Chọn nhóm sản phẩm phù hợp với giai đoạn cây trồng — đi thẳng tới
              danh mục cần dùng.
            </p>
          </div>
        </Reveal>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-12 md:gap-4">
          {categories.map((c, i) => (
            <Reveal
              key={c.id}
              className={`${i < 4 ? "md:col-span-3" : "md:col-span-4"} ${i === 6 ? "max-md:col-span-2" : ""}`}
            >
              <Link
                href={`/san-pham/${c.id}`}
                className="group flex h-full flex-col items-center rounded-2xl border border-[var(--color-border)] bg-white p-5 text-center shadow-[var(--shadow-soft)] transition duration-200 hover:-translate-y-1 hover:border-[var(--color-primary)] hover:shadow-[var(--shadow-card)]"
              >
                <span
                  className="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-[linear-gradient(145deg,#166534,#22c55e)] text-2xl text-white shadow-md transition group-hover:scale-105"
                  aria-hidden
                >
                  {icons[c.id] ?? "🌿"}
                </span>
                <h3 className="text-base font-bold text-[var(--color-primary-dark)] md:text-lg">
                  {c.short}
                </h3>
                <p className="mt-2 line-clamp-2 text-xs text-[var(--color-text-muted)] md:text-sm">
                  {c.description}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
