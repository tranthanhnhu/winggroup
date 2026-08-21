import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { BrandValueIcon } from "@/components/BrandValueIcons";
import { ButtonLink } from "@/components/Button";
import { brandPlatform } from "@/data/brandPlatform";

export function BrandValuesTeaser() {
  return (
    <section className="section section-alt">
      <div className="container">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-wide text-[var(--color-primary)]">
              Giá trị cốt lõi
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-[var(--color-primary-dark)] md:text-4xl">
              {brandPlatform.slogan}
            </h2>
            <p className="mt-3 text-[var(--color-text-secondary)]">
              Khởi nguồn từ Tâm — dẫn đường bằng Trí — trọn trách nhiệm — đồng hành — thịnh vượng bền lâu.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5 md:gap-4">
          {brandPlatform.values.map((v) => (
            <Reveal key={v.key}>
              <Link
                href="/gia-tri-cot-loi"
                className={`group flex h-full flex-col items-center rounded-2xl p-4 text-center ring-1 ring-inset transition hover:-translate-y-1 hover:shadow-[var(--shadow-card)] ${v.tone}`}
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm transition group-hover:scale-105">
                  <BrandValueIcon valueKey={v.key} className="h-6 w-6" />
                </span>
                <p className={`mt-3 text-lg font-black tracking-wide ${v.accent}`}>{v.title}</p>
                <p className="mt-1 text-xs font-semibold leading-snug text-[var(--color-text-secondary)] md:text-[13px]">
                  {v.lead}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-8 flex justify-center">
            <ButtonLink href="/gia-tri-cot-loi" variant="primary">
              Khám phá giá trị cốt lõi
            </ButtonLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
