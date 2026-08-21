import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Reveal } from "@/components/Reveal";
import { BrandValueIcon } from "@/components/BrandValueIcons";
import { IconLeaf, IconPhone, IconSpark } from "@/components/Icons";
import { brandPlatform } from "@/data/brandPlatform";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Giá trị cốt lõi",
  description: `${brandPlatform.slogan} — Nền tảng thương hiệu ${company.shortName}.`,
};

export default function GiaTriCotLoiPage() {
  const { sloganMeaning, philosophyPillars, values } = brandPlatform;

  return (
    <>
      <div className="relative isolate min-h-[48vh] overflow-hidden md:min-h-[56vh]">
        <Image
          src="/images/banners/banner-1.jpg"
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,28,16,0.5)_0%,rgba(8,28,16,0.72)_100%)]" />
        <div className="container relative flex min-h-[48vh] flex-col justify-end pb-12 pt-24 md:min-h-[56vh] md:pb-16">
          <Breadcrumb
            items={[
              { label: "Giới thiệu", href: "/gioi-thieu" },
              { label: "Giá trị cốt lõi" },
            ]}
            tone="light"
          />
          <p className="mt-4 text-sm font-bold uppercase tracking-[0.14em] text-[#86efac]">
            Nền tảng thương hiệu
          </p>
          <h1 className="mt-3 max-w-3xl text-3xl font-extrabold leading-[1.15] text-white drop-shadow md:text-5xl">
            <span className="block">Trao đúng từ Tâm</span>
            <span className="block">Gieo mùa xứng tầm.</span>
          </h1>
          <p className="mt-4 max-w-2xl text-base text-white/85 md:text-lg">
            Thống nhất ngôn ngữ, tư tưởng và giá trị WINGROUP — trao đúng giải pháp, sát cánh cùng mùa vụ.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <Reveal>
            <h2 className="text-center text-2xl font-extrabold text-[var(--color-primary-dark)] md:text-3xl">
              Ý nghĩa slogan
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-3xl border border-[var(--color-border)] bg-[var(--color-bg-alt)] p-6 md:p-8">
                <p className="text-sm font-bold uppercase tracking-wide text-[var(--color-primary)]">
                  Trao đúng từ Tâm
                </p>
                <p className="mt-3 text-[var(--color-text-secondary)] leading-relaxed">
                  {sloganMeaning.traoDung}
                </p>
              </div>
            </Reveal>
            <Reveal>
              <div className="h-full rounded-3xl border border-[var(--color-border)] bg-white p-6 shadow-[var(--shadow-soft)] md:p-8">
                <p className="text-sm font-bold uppercase tracking-wide text-[var(--color-primary)]">
                  Gieo mùa xứng tầm
                </p>
                <p className="mt-3 text-[var(--color-text-secondary)] leading-relaxed">
                  {sloganMeaning.gieoMua}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-3xl bg-[var(--color-primary-dark)] p-7 text-white md:p-9">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10">
                  <IconSpark className="h-5 w-5 text-[#86efac]" />
                </span>
                <h2 className="text-xl font-extrabold md:text-2xl">Tầm nhìn</h2>
              </div>
              <p className="mt-4 leading-relaxed text-white/85">{brandPlatform.vision}</p>
            </div>
          </Reveal>
          <Reveal>
            <div className="h-full rounded-3xl border border-[var(--color-border)] bg-white p-7 shadow-[var(--shadow-soft)] md:p-9">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--color-bg-alt)] text-[var(--color-primary)]">
                  <IconLeaf className="h-5 w-5" />
                </span>
                <h2 className="text-xl font-extrabold text-[var(--color-primary-dark)] md:text-2xl">
                  Sứ mệnh
                </h2>
              </div>
              <p className="mt-4 leading-relaxed text-[var(--color-text-secondary)]">
                {brandPlatform.mission}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <p className="text-sm font-bold uppercase tracking-wide text-[var(--color-primary)]">
              Triết lý kinh doanh
            </p>
            <h2 className="mt-2 max-w-3xl text-2xl font-extrabold text-[var(--color-primary-dark)] md:text-4xl">
              {brandPlatform.philosophy}
            </h2>
            <p className="mt-4 max-w-3xl text-[var(--color-text-secondary)] leading-relaxed">
              {brandPlatform.philosophyIntro}
            </p>
          </Reveal>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {philosophyPillars.map((p, i) => (
              <Reveal key={p.title}>
                <div className="group h-full rounded-3xl border border-[var(--color-border)] bg-white p-6 shadow-[var(--shadow-soft)] transition hover:-translate-y-1 hover:border-[var(--color-primary)] hover:shadow-[var(--shadow-card)]">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[linear-gradient(145deg,#166534,#22c55e)] text-sm font-bold text-white">
                    {i + 1}
                  </span>
                  <h3 className="mt-4 text-lg font-bold text-[var(--color-primary-dark)]">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                    {p.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[var(--color-bg-deep)] py-14 md:py-20">
        <div
          className="pointer-events-none absolute inset-0 opacity-50"
          style={{
            backgroundImage:
              "radial-gradient(ellipse 70% 50% at 15% 20%, rgba(34,197,94,0.22), transparent), radial-gradient(ellipse 50% 40% at 90% 70%, rgba(22,101,52,0.3), transparent)",
          }}
        />
        <div className="container relative">
          <Reveal>
            <p className="text-sm font-bold uppercase tracking-wide text-[#86efac]">
              05 Giá trị cốt lõi
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-white md:text-4xl">
              TÂM · TRÍ · TRÁCH · ĐỒNG · THỊNH
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/75 md:text-base">
              {brandPlatform.valueChain}
            </p>
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
            {values.map((v, i) => {
              const span =
                i < 3
                  ? "lg:col-span-2"
                  : i === 3
                    ? "lg:col-span-2 lg:col-start-2"
                    : "sm:col-span-2 lg:col-span-2 lg:col-start-4";
              return (
                <Reveal key={v.key} className={span}>
                  <article
                    className={`group flex h-full flex-col rounded-3xl bg-white/95 p-6 shadow-[var(--shadow-card)] ring-1 ring-inset transition duration-300 hover:-translate-y-1 ${v.tone}`}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white shadow-sm">
                        <BrandValueIcon valueKey={v.key} className="h-6 w-6" />
                      </span>
                      <span className={`text-3xl font-black tracking-tight ${v.accent}`}>
                        {v.title}
                      </span>
                    </div>
                    <h3 className={`mt-5 text-base font-bold ${v.accent}`}>{v.lead}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                      {v.text}
                    </p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <div className="overflow-hidden rounded-[2rem] bg-[var(--color-primary-dark)] px-7 py-10 text-white md:px-12 md:py-14">
              <p className="text-sm font-bold uppercase tracking-wide text-[#86efac]">
                Tuyên ngôn thương hiệu
              </p>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-white/90 md:max-w-3xl md:text-lg">
                {brandPlatform.manifesto.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
              <p className="mt-8 text-xl font-extrabold leading-snug text-[#bbf7d0] md:text-2xl">
                <span className="block">Trao đúng từ Tâm</span>
                <span className="block">Gieo mùa xứng tầm.</span>
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/san-pham"
                className="btn-solid inline-flex min-h-11 items-center gap-2 rounded-full bg-[var(--color-primary)] px-5 text-sm font-semibold text-white"
              >
                <IconLeaf className="h-4 w-4" />
                Xem sản phẩm
              </Link>
              <Link
                href="/lien-he"
                className="inline-flex min-h-11 items-center gap-2 rounded-full border border-[var(--color-border)] bg-white px-5 text-sm font-semibold text-[var(--color-primary-dark)] transition hover:border-[var(--color-primary)]"
              >
                <IconPhone className="h-4 w-4" />
                Liên hệ
              </Link>
              <Link
                href="/gioi-thieu"
                className="inline-flex min-h-11 items-center rounded-full px-5 text-sm font-semibold text-[var(--color-primary)] underline-offset-4 hover:underline"
              >
                Về trang giới thiệu
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
