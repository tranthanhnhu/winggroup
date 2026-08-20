import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ContactForm } from "@/components/ContactForm";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Liên hệ",
};

export default function LienHePage() {
  return (
    <div className="section">
      <div className="container">
        <Breadcrumb items={[{ label: "Liên hệ" }]} />
        <h1 className="mb-8 text-3xl font-extrabold text-[var(--color-primary-dark)] md:text-4xl">
          Liên hệ {company.shortName}
        </h1>
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-4 rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-alt)] p-6">
            <h2 className="text-xl font-bold">Thông tin công ty</h2>
            <p className="font-semibold">{company.name}</p>
            <p className="text-[var(--color-text-secondary)]">{company.address}</p>
            <p>
              Hotline:{" "}
              <a className="font-semibold text-[var(--color-primary)]" href={`tel:${company.hotline}`}>
                {company.hotlineDisplay}
              </a>
            </p>
            <p>
              Zalo:{" "}
              <a
                className="font-semibold text-[var(--color-primary)]"
                href={company.zaloUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {company.zalo}
              </a>
            </p>
            <p>
              Email:{" "}
              <a className="font-semibold text-[var(--color-primary)]" href={`mailto:${company.email}`}>
                {company.email}
              </a>
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              {[
                { href: company.facebook, src: "/images/social/facebook.png", label: "Facebook" },
                { href: company.messenger, src: "/images/social/messenger.png", label: "Messenger" },
                { href: company.tiktok, src: "/images/social/tiktok.png", label: "TikTok" },
                { href: company.zaloUrl, src: "/images/social/zalo.png", label: "Zalo" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-full bg-white shadow-sm ring-1 ring-black/5 transition hover:scale-105"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={s.src} alt="" className="h-7 w-7 object-contain" />
                </a>
              ))}
            </div>
          </div>
          <ContactForm />
        </div>

        <div className="mt-10 overflow-hidden rounded-3xl border border-[var(--color-border)] bg-white shadow-[var(--shadow-soft)]">
          <div className="border-b border-[var(--color-border)] px-5 py-4">
            <h2 className="text-lg font-bold text-[var(--color-primary-dark)]">Bản đồ cửa hàng</h2>
            <p className="mt-1 text-sm text-[var(--color-text-muted)]">{company.address}</p>
          </div>
          <iframe
            title={`Bản đồ ${company.shortName}`}
            src={company.mapEmbedUrl}
            className="h-[360px] w-full border-0 md:h-[440px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}
