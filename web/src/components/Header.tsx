"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { categories } from "@/data/categories";
import { company } from "@/data/company";
import { solutions } from "@/data/solutions";
import { useBuyCta } from "@/components/BuyCtaSheet";
import { Button } from "@/components/Button";
import { BrandLogo } from "@/components/BrandLogo";
import {
  IconInfo,
  IconLeaf,
  IconNews,
  IconPhone,
  IconProject,
  IconSearch,
  IconSpark,
  IconStore,
} from "@/components/Icons";

const nav = [
  { label: "Sản phẩm", href: "/san-pham", mega: "products" as const, Icon: IconLeaf },
  { label: "Giải pháp", href: "/giai-phap", mega: "solutions" as const, Icon: IconSpark },
  { label: "Tin tức", href: "/tin-tuc", Icon: IconNews },
  { label: "Dự án", href: "/du-an", Icon: IconProject },
  { label: "Đại lý", href: "/dai-ly", Icon: IconStore },
  { label: "Giới thiệu", href: "/gioi-thieu", Icon: IconInfo },
  { label: "Liên hệ", href: "/lien-he", Icon: IconPhone },
];

export function Header() {
  const { openBuy } = useBuyCta();
  const router = useRouter();
  const pathname = usePathname();
  const [query, setQuery] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [mega, setMega] = useState<"products" | "solutions" | null>(null);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  function onSearch(e: React.FormEvent) {
    e.preventDefault();
    const q = query.trim();
    router.push(q ? `/tim-kiem?q=${encodeURIComponent(q)}` : "/tim-kiem");
    setMenuOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-white shadow-sm">
      <a
        href={`tel:${company.hotline}`}
        className="flex min-h-9 items-center justify-center bg-[var(--color-primary-dark)] px-3 text-center text-xs font-bold tracking-wide text-white sm:hidden"
      >
        Gọi để nhận tư vấn — {company.hotlineDisplay}
      </a>

      <div className="container flex h-16 items-center gap-3">
        <BrandLogo />

        <form onSubmit={onSearch} className="hidden min-w-0 flex-1 md:block">
          <label className="sr-only" htmlFor="header-search">
            Tìm sản phẩm
          </label>
          <div className="relative mx-auto max-w-xl">
            <IconSearch className="pointer-events-none absolute top-1/2 left-3.5 h-4 w-4 -translate-y-1/2 text-[var(--color-primary)]" />
            <input
              id="header-search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Tìm sản phẩm, thành phần, công dụng..."
              className="h-11 w-full rounded-full border-2 border-[var(--color-primary)]/25 bg-white py-2 pr-4 pl-10 text-sm shadow-sm outline-none transition focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20"
            />
          </div>
        </form>

        <div className="ml-auto flex shrink-0 items-center gap-2 md:ml-0">
          <Link
            href="/tim-kiem"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-primary-dark)] md:hidden"
            aria-label="Tìm kiếm"
          >
            <IconSearch className="h-4 w-4" />
          </Link>
          <Button
            variant="primary"
            className="hidden h-10 rounded-full px-4 text-sm sm:inline-flex"
            onClick={openBuy}
          >
            Mua hàng
          </Button>
          <Link
            href="/lien-he"
            className="hidden h-10 items-center justify-center rounded-full border-2 border-[var(--color-primary)] px-4 text-sm font-semibold text-[var(--color-primary-dark)] transition hover:bg-[var(--color-bg-alt)] lg:inline-flex"
          >
            Liên hệ
          </Link>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border)] lg:hidden"
            aria-label={menuOpen ? "Đóng menu" : "Mở menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      <nav
        className="hidden border-t border-[var(--color-border)] bg-[var(--color-primary-dark)] lg:block"
        aria-label="Menu chính"
      >
        <div className="container flex items-center justify-center">
          {nav.map((item) => {
            const Icon = item.Icon;
            const active =
              pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => setMega(item.mega ?? null)}
                onMouseLeave={() => setMega(null)}
              >
                <Link
                  href={item.href}
                  className={`group inline-flex h-12 items-center gap-1.5 whitespace-nowrap px-3.5 text-[13px] font-bold tracking-wide transition xl:px-5 xl:text-sm ${
                    active || mega === item.mega
                      ? "bg-white/12 text-white"
                      : "text-white/90 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  <Icon className="h-4 w-4 shrink-0 opacity-90 transition duration-200 group-hover:scale-110" />
                  {item.label}
                  {item.mega ? (
                    <span className="text-[9px] opacity-70" aria-hidden>
                      ▾
                    </span>
                  ) : null}
                </Link>

                {item.mega === "products" && mega === "products" ? (
                  <div className="absolute left-1/2 top-full z-50 w-[560px] -translate-x-1/2 pt-0">
                    <div className="rounded-b-2xl border border-[var(--color-border)] bg-white p-4 shadow-[var(--shadow-card)]">
                      <div className="mb-3 flex items-center justify-between border-b border-[var(--color-border)] pb-2">
                        <p className="text-xs font-bold uppercase tracking-wide text-[var(--color-primary)]">
                          Danh mục sản phẩm
                        </p>
                        <Link
                          href="/san-pham"
                          className="text-xs font-semibold text-[var(--color-primary-dark)] hover:underline"
                        >
                          Xem tất cả →
                        </Link>
                      </div>
                      <div className="grid grid-cols-2 gap-1.5">
                        {categories.map((c) => (
                          <Link
                            key={c.id}
                            href={`/san-pham/${c.id}`}
                            className="rounded-xl px-3 py-2.5 text-[var(--color-text-primary)] transition hover:bg-[var(--color-bg-alt)]"
                          >
                            <div className="text-sm font-semibold">{c.short}</div>
                            <div className="text-xs text-[var(--color-text-muted)]">
                              {c.productCount} sản phẩm
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : null}

                {item.mega === "solutions" && mega === "solutions" ? (
                  <div className="absolute left-1/2 top-full z-50 w-[400px] -translate-x-1/2 pt-0">
                    <div className="rounded-b-2xl border border-[var(--color-border)] bg-white p-4 shadow-[var(--shadow-card)]">
                      <div className="mb-3 flex items-center justify-between border-b border-[var(--color-border)] pb-2">
                        <p className="text-xs font-bold uppercase tracking-wide text-[var(--color-primary)]">
                          Giải pháp theo nhu cầu
                        </p>
                        <Link
                          href="/giai-phap"
                          className="text-xs font-semibold text-[var(--color-primary-dark)] hover:underline"
                        >
                          Xem tất cả →
                        </Link>
                      </div>
                      <div className="grid gap-1">
                        {solutions.map((s) => (
                          <Link
                            key={s.slug}
                            href={`/giai-phap/${s.slug}`}
                            className="rounded-xl px-3 py-2.5 text-sm font-semibold text-[var(--color-text-primary)] transition hover:bg-[var(--color-bg-alt)]"
                          >
                            {s.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </nav>

      {menuOpen ? (
        <div className="max-h-[70vh] overflow-y-auto border-t border-[var(--color-border)] bg-white lg:hidden">
          <div className="container space-y-1 py-4">
            <form onSubmit={onSearch} className="mb-3">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Tìm sản phẩm..."
                className="h-11 w-full rounded-xl border-2 border-[var(--color-primary)]/30 px-3 text-sm"
                aria-label="Tìm sản phẩm"
              />
            </form>
            {nav.map((item) => {
              const Icon = item.Icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-3 rounded-xl px-3 py-3 font-semibold hover:bg-[var(--color-bg-alt)]"
                  onClick={() => setMenuOpen(false)}
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--color-bg-alt)] text-[var(--color-primary)]">
                    <Icon className="h-4 w-4" />
                  </span>
                  {item.label}
                </Link>
              );
            })}
            <Button
              className="mt-2 w-full"
              variant="primary"
              onClick={() => {
                setMenuOpen(false);
                openBuy();
              }}
            >
              Mua hàng
            </Button>
          </div>
        </div>
      ) : null}
    </header>
  );
}
