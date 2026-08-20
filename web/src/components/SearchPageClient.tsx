"use client";

import { useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { searchProducts } from "@/lib/search";
import { ProductGrid } from "@/components/ProductGrid";

export function SearchPageClient() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const initial = searchParams.get("q") ?? "";
  const [q, setQ] = useState(initial);

  const results = useMemo(() => searchProducts(q), [q]);

  return (
    <div className="space-y-6">
      <div>
        <label htmlFor="search-page-input" className="mb-1 block text-sm font-semibold">
          Từ khóa tìm kiếm
        </label>
        <input
          id="search-page-input"
          value={q}
          autoFocus
          onChange={(e) => {
            const v = e.target.value;
            setQ(v);
            const params = new URLSearchParams();
            if (v.trim()) params.set("q", v.trim());
            router.replace(params.toString() ? `/tim-kiem?${params}` : "/tim-kiem", {
              scroll: false,
            });
          }}
          placeholder="Nhập tên sản phẩm, thành phần..."
          className="min-h-12 w-full rounded-2xl border border-[var(--color-border)] px-4 text-base outline-none ring-[var(--color-primary)] focus:ring-2"
        />
      </div>
      <p className="text-sm text-[var(--color-text-muted)]">
        {q.trim()
          ? `${results.length} kết quả cho “${q.trim()}”`
          : "Gõ từ khóa để tìm trong toàn bộ danh mục sản phẩm Wingroup."}
      </p>
      {q.trim() ? <ProductGrid products={results} /> : null}
    </div>
  );
}
