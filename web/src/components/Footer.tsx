"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { company } from "@/data/company";
import { categories } from "@/data/categories";
import { solutions } from "@/data/solutions";
import { BrandLogo } from "@/components/BrandLogo";

function IconWheat({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="9.2" stroke="currentColor" strokeWidth="1.4" />
      <path
        d="M12 17.5V7.2M12 9.2c-1.6-.9-2.8-1-3.6-.7M12 11.4c-1.8-.6-3-.4-3.8.1M12 13.6c-1.6-.4-2.8-.1-3.5.5M12 9.2c1.6-.9 2.8-1 3.6-.7M12 11.4c1.8-.6 3-.4 3.8.1M12 13.6c1.6-.4 2.8-.1 3.5.5"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconFlask({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M10 3h4M11 3v5.2L7.2 16.2A3.2 3.2 0 0 0 10 21h4a3.2 3.2 0 0 0 2.8-4.8L13 8.2V3"
        stroke="currentColor"
        strokeWidth="1.45"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M8.2 14.5h7.6" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" />
    </svg>
  );
}

function IconTripleLeaf({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 20c0-5.5 2.2-9.5 6.2-12.2-1.2 4.2-3.4 7.2-6.2 9.2Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path
        d="M12 20c0-5.5-2.2-9.5-6.2-12.2 1.2 4.2 3.4 7.2 6.2 9.2Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path
        d="M12 20V8.5C12 5.5 13.2 3.8 15.5 2.8 13.8 5.2 12.8 7.2 12 9.2"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconSupport({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="8.2" stroke="currentColor" strokeWidth="1.4" />
      <path
        d="M9.2 10.2a2.8 2.8 0 0 1 5.6 0c0 1.6-1.2 2.4-2.8 3.2v.8M12 17.2h.01"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function FooterHeading({
  children,
  icon,
}: {
  children: ReactNode;
  icon: ReactNode;
}) {
  return (
    <h3 className="mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-[#e8d5a3]">
      <span>{children}</span>
      <span className="inline-flex text-[#d4b56a]" aria-hidden>
        {icon}
      </span>
    </h3>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-primary-dark)] text-white">
      <div className="container grid gap-10 py-12 md:grid-cols-2 lg:grid-cols-12">
        <div className="lg:col-span-3">
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
              {
                href: `tel:${company.hotline}`,
                src: "/images/social/phone.png",
                label: "Gọi điện",
                blank: false,
              },
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

        <div className="lg:col-span-2">
          <FooterHeading icon={<IconFlask className="h-5 w-5" />}>Sản phẩm</FooterHeading>
          <ul className="space-y-2 text-sm">
            {categories.map((c) => (
              <li key={c.id}>
                <Link href={`/san-pham/${c.id}`} className="hover:underline">
                  {c.short}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-2">
          <FooterHeading icon={<IconWheat className="h-5 w-5" />}>Giải pháp</FooterHeading>
          <ul className="space-y-2 text-sm">
            {solutions.map((s) => (
              <li key={s.slug}>
                <Link href={`/giai-phap/${s.slug}`} className="hover:underline">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-2">
          <FooterHeading icon={<IconSupport className="h-5 w-5" />}>Hỗ trợ</FooterHeading>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/gia-tri-cot-loi" className="hover:underline">
                Giá trị cốt lõi
              </Link>
            </li>
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
            <li>
              <Link href="/lien-he" className="hover:underline">
                Liên hệ
              </Link>
            </li>
          </ul>
        </div>

        <div className="lg:col-span-3">
          <FooterHeading icon={<IconTripleLeaf className="h-5 w-5" />}>
            Đăng ký nhận tin
          </FooterHeading>
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
        © {new Date().getFullYear()} {company.shortName}. {company.slogan}
      </div>
    </footer>
  );
}
