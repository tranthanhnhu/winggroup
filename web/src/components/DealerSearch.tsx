"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { dealers } from "@/data/dealers";
import { company } from "@/data/company";

export function DealerSearch() {
  const [q, setQ] = useState("");
  const results = useMemo(() => {
    const n = q
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
    if (!n) return dealers;
    return dealers.filter((d) =>
      [d.name, d.address, d.region ?? ""]
        .join(" ")
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .includes(n),
    );
  }, [q]);

  return (
    <div className="space-y-6">
      <div>
        <label htmlFor="dealer-search" className="mb-1 block text-sm font-semibold">
          Tìm địa chỉ / tên cửa hàng
        </label>
        <input
          id="dealer-search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Ví dụ: Thùy Tiên, Gia Lai..."
          className="min-h-11 w-full max-w-xl rounded-xl border-2 border-[var(--color-primary)]/25 bg-white px-4 text-sm outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20"
        />
      </div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {results.map((d) => (
          <article
            key={d.id}
            className="overflow-hidden rounded-2xl border border-[var(--color-border)] bg-white shadow-[var(--shadow-soft)]"
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-[var(--color-bg-alt)]">
              <Image
                src={d.image}
                alt={d.name}
                fill
                sizes="(max-width:640px) 100vw, 25vw"
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-[15px] font-bold leading-snug text-[var(--color-primary-dark)]">
                {d.name}
              </h3>
              {d.region ? (
                <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-[var(--color-primary)]">
                  {d.region}
                </p>
              ) : null}
              <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                {d.address}
              </p>
              <p className="mt-1 text-sm text-[var(--color-text-muted)]">
                Điện thoại: {company.hotlineDisplay}
              </p>
            </div>
          </article>
        ))}
      </div>
      {!results.length ? (
        <p className="text-[var(--color-text-muted)]">Không tìm thấy đại lý phù hợp.</p>
      ) : null}
    </div>
  );
}
