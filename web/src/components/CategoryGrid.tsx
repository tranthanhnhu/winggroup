import Link from "next/link";
import { categories } from "@/data/categories";
import { Reveal } from "@/components/Reveal";

const icons: Record<string, string> = {
  "phuc-hoi": "🌱",
  "ho-tro": "🧪",
  "tao-mam": "🌸",
  "duong-bong-nuoi-trai": "🍊",
  "kich-re-duong-re": "🪴",
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
            <Reveal key={c.id} className={`${i < 4 ? "md:col-span-3" : "md:col-span-4"} ${i === 6 ? "max-md:col-span-2" : ""}`}>
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
