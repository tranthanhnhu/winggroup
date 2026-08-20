"use client";

import Link from "next/link";
import { company } from "@/data/company";
import { categories } from "@/data/categories";
import { solutions } from "@/data/solutions";
import { BrandLogo } from "@/components/BrandLogo";

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-primary-dark)] text-white">
      <div className="container grid gap-10 py-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="mb-4 inline-flex rounded-xl bg-white px-3 py-2">
            <BrandLogo href="/" size="sm" />
          </div>
          <p className="text-sm font-semibold">{company.name}</p>
          <p className="mt-3 text-sm text-white/80">{company.address}</p>
          <p className="mt-2 text-sm">
            Hotline:{" "}
            <a className="font-semibold underline" href={`tel:${company.hotline}`}>
              {company.hotlineDisplay}
            </a>
          </p>
          <p className="mt-1 text-sm">
            Email:{" "}
            <a className="underline" href={`mailto:${company.email}`}>
              {company.email}
            </a>
          </p>
          <div className="mt-5 flex gap-3">
            {[
              { href: company.facebook, src: "/images/social/facebook.png", label: "Facebook" },
              { href: company.messenger, src: "/images/social/messenger.png", label: "Messenger" },
              { href: company.tiktok, src: "/images/social/tiktok.png", label: "TikTok" },
              { href: company.zaloUrl, src: "/images/social/zalo.png", label: "Zalo" },
              { href: `tel:${company.hotline}`, src: "/images/social/phone.png", label: "Gọi điện", blank: false },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.blank === false ? undefined : "_blank"}
                rel={s.blank === false ? undefined : "noopener noreferrer"}
                aria-label={s.label}
                className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-full bg-white transition hover:scale-105"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={s.src} alt="" className="h-7 w-7 object-contain" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-bold uppercase tracking-wide text-white/70">
            Sản phẩm
          </h3>
          <ul className="space-y-2 text-sm">
            {categories.map((c) => (
              <li key={c.id}>
                <Link href={`/san-pham/${c.id}`} className="hover:underline">
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-bold uppercase tracking-wide text-white/70">
            Giải pháp
          </h3>
          <ul className="space-y-2 text-sm">
            {solutions.map((s) => (
              <li key={s.slug}>
                <Link href={`/giai-phap/${s.slug}`} className="hover:underline">
                  {s.title}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/dai-ly" className="hover:underline">
                Hệ thống đại lý
              </Link>
            </li>
            <li>
              <Link href="/chinh-sach/bao-hanh" className="hover:underline">
                Chính sách bảo hành
              </Link>
            </li>
            <li>
              <Link href="/chinh-sach/doi-tra" className="hover:underline">
                Chính sách đổi trả
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-bold uppercase tracking-wide text-white/70">
            Đăng ký nhận tin
          </h3>
          <p className="mb-3 text-sm text-white/80">
            Nhận mẹo canh tác và thông tin sản phẩm mới từ Wingroup.
          </p>
          <form
            className="space-y-2"
            onSubmit={(e) => {
              e.preventDefault();
            }}
            action="#"
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Email
            </label>
            <input
              id="newsletter-email"
              name="email"
              type="email"
              required
              placeholder="Email của bạn"
              className="min-h-11 w-full rounded-xl border border-white/30 bg-white px-3 text-[#0f172a] placeholder:text-[#64748b] shadow-sm outline-none ring-0 transition focus:border-[var(--color-primary-light)] focus:ring-2 focus:ring-[var(--color-primary-light)]/40"
            />
            <button
              type="submit"
              className="btn-solid min-h-11 w-full rounded-xl bg-[var(--color-primary-light)] font-semibold text-white hover:bg-[var(--color-primary)]"
            >
              Đăng ký
            </button>
          </form>
        </div>
      </div>
      <div className="border-t border-white/15 py-4 text-center text-xs text-white/70">
        © {new Date().getFullYear()} {company.shortName}. Đồng hành cùng phát triển.
      </div>
    </footer>
  );
}
