"use client";

import { useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { categories } from "@/data/categories";
import { searchProducts } from "@/lib/search";
import { ProductGrid } from "@/components/ProductGrid";
import { IconSearch } from "@/components/Icons";

export function ProductCatalog({
  initialQuery,
  initialCategory = "",
}: {
  initialQuery?: string;
  initialCategory?: string;
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [q, setQ] = useState(initialQuery ?? searchParams.get("q") ?? "");
  const [categoryId, setCategoryId] = useState(initialCategory);

  const results = useMemo(
    () => searchProducts(q, categoryId || undefined),
    [q, categoryId],
  );

  function syncUrl(nextQ: string, nextCat: string) {
    const params = new URLSearchParams();
    if (nextQ.trim()) params.set("q", nextQ.trim());
    const base = nextCat ? `/san-pham/${nextCat}` : "/san-pham";
    const qs = params.toString();
    router.replace(qs ? `${base}?${qs}` : base, { scroll: false });
  }

  function pickCat(id: string) {
    setCategoryId(id);
    syncUrl(q, id);
  }

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-[var(--color-border)] bg-white p-4 shadow-[var(--shadow-soft)] md:p-5">
        <label htmlFor="catalog-search" className="mb-2 block text-sm font-bold text-[var(--color-primary-dark)]">
          Tìm sản phẩm
        </label>
        <div className="relative">
          <IconSearch className="pointer-events-none absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2 text-[var(--color-primary)]" />
          <input
            id="catalog-search"
            value={q}
            onChange={(e) => {
              const v = e.target.value;
              setQ(v);
              syncUrl(v, categoryId);
            }}
            placeholder="Tên, thành phần, công dụng..."
            className="min-h-12 w-full rounded-xl border-2 border-[var(--color-primary)]/30 bg-white py-3 pr-4 pl-12 text-sm outline-none transition focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20"
          />
        </div>

        <p className="mt-4 mb-2 text-sm font-bold text-[var(--color-primary-dark)]">Danh mục</p>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => pickCat("")}
            className={`rounded-full px-3.5 py-2 text-sm font-semibold transition ${
              !categoryId
                ? "bg-[var(--color-primary)] text-white"
                : "border border-[var(--color-border)] bg-[var(--color-bg-alt)] text-[var(--color-text-primary)] hover:border-[var(--color-primary)]"
            }`}
          >
            Tất cả
          </button>
          {categories.map((c) => (
            <button
              key={c.id}
              type="button"
              onClick={() => pickCat(c.id)}
              className={`rounded-full px-3.5 py-2 text-sm font-semibold transition ${
                categoryId === c.id
                  ? "bg-[var(--color-primary)] text-white"
                  : "border border-[var(--color-border)] bg-[var(--color-bg-alt)] text-[var(--color-text-primary)] hover:border-[var(--color-primary)]"
              }`}
            >
              {c.short}
            </button>
          ))}
        </div>
      </div>
      <p className="text-sm text-[var(--color-text-muted)]">{results.length} sản phẩm</p>
      <ProductGrid products={results} />
    </div>
  );
}
