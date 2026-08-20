import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Reveal } from "@/components/Reveal";
import {
  IconHandshake,
  IconLeaf,
  IconPhone,
  IconProject,
  IconSpark,
  IconStore,
} from "@/components/Icons";
import { company } from "@/data/company";
import { products } from "@/data/products";
import { dealers } from "@/data/dealers";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Giới thiệu",
  description: company.about,
};

const stats = [
  {
    n: `${products.length}+`,
    l: "Sản phẩm phân phối",
    Icon: IconLeaf,
    tone: "bg-[#dcfce7] text-[#166534]",
  },
  {
    n: `${dealers.length}`,
    l: "Đại lý / cửa hàng",
    Icon: IconStore,
    tone: "bg-[#ffedd5] text-[#9a3412]",
  },
  {
    n: `${projects.length}`,
    l: "Dự án thực tế",
    Icon: IconProject,
    tone: "bg-[#e0f2fe] text-[#075985]",
  },
  {
    n: "7",
    l: "Nhóm giải pháp",
    Icon: IconSpark,
    tone: "bg-[#fef9c3] text-[#854d0e]",
  },
];

const valueMeta = [
  { Icon: IconLeaf, tone: "bg-[#dcfce7] text-[#166534]" },
  { Icon: IconSpark, tone: "bg-[#e0f2fe] text-[#075985]" },
  { Icon: IconHandshake, tone: "bg-[#ffedd5] text-[#9a3412]" },
  { Icon: IconProject, tone: "bg-[#fef9c3] text-[#854d0e]" },
];

export default function GioiThieuPage() {
  return (
    <>
      <div className="relative isolate min-h-[42vh] overflow-hidden md:min-h-[48vh]">
        <Image
          src="/images/du-an/du-an-1.jpg"
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,28,16,0.35)_0%,rgba(8,28,16,0.55)_100%)]" />
        <div className="container relative flex min-h-[42vh] flex-col justify-end pb-10 pt-20 md:min-h-[48vh] md:pb-14">
          <Breadcrumb items={[{ label: "Giới thiệu" }]} tone="light" />
          <h1 className="mt-3 text-4xl font-extrabold text-white drop-shadow md:text-5xl">
            Giới thiệu {company.shortName}
          </h1>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <Reveal>
            <p className="mx-auto max-w-3xl text-center text-base leading-relaxed text-[var(--color-text-secondary)] md:text-lg">
              {company.about}
            </p>
          </Reveal>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s) => (
              <Reveal key={s.l}>
                <div className="group rounded-2xl border border-[var(--color-border)] bg-white px-5 py-6 text-center shadow-[var(--shadow-soft)] transition duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card)]">
                  <span
                    className={`mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full shadow-sm transition duration-300 group-hover:scale-110 ${s.tone}`}
                  >
                    <s.Icon className="h-6 w-6" />
                  </span>
                  <p className="text-3xl font-extrabold text-[var(--color-primary-dark)]">{s.n}</p>
                  <p className="mt-1 text-sm text-[var(--color-text-muted)]">{s.l}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-16 grid items-center gap-10 lg:grid-cols-2">
            <Reveal>
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-[var(--shadow-card)]">
                <Image
                  src="/images/du-an/du-an-3.jpg"
                  alt="Wingroup đồng hành cùng nhà nông"
                  fill
                  className="object-cover transition duration-500 hover:scale-105"
                  sizes="50vw"
                />
              </div>
            </Reveal>
            <Reveal>
              <div>
                <p className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-[var(--color-primary)]">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-primary)] text-white shadow-md">
                    <IconSpark className="h-4 w-4" />
                  </span>
                  Tầm nhìn
                </p>
                <h2 className="mt-3 text-2xl font-extrabold text-[var(--color-primary-dark)] md:text-3xl">
                  Nông nghiệp an toàn – bền vững – hiệu quả
                </h2>
                <p className="mt-4 text-[var(--color-text-secondary)]">{company.vision}</p>
              </div>
            </Reveal>
          </div>

          <div className="mt-16">
            <Reveal>
              <h2 className="text-2xl font-extrabold text-[var(--color-primary-dark)] md:text-3xl">
                Sứ mệnh
              </h2>
            </Reveal>
            <ul className="mt-6 grid gap-4 md:grid-cols-3">
              {company.mission.map((m, i) => (
                <Reveal key={m}>
                  <li className="group h-full rounded-2xl border border-[var(--color-border)] bg-white p-5 shadow-[var(--shadow-soft)] transition duration-300 hover:-translate-y-1 hover:border-[var(--color-primary)] hover:shadow-[var(--shadow-card)]">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[linear-gradient(145deg,#166534,#22c55e)] text-sm font-bold text-white shadow-md transition group-hover:scale-110">
                      {i + 1}
                    </span>
                    <p className="mt-4 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                      {m}
                    </p>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>

          <div className="mt-16">
            <Reveal>
              <h2 className="mb-6 text-2xl font-extrabold text-[var(--color-primary-dark)] md:text-3xl">
                Giá trị cốt lõi
              </h2>
            </Reveal>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {company.values.map((v, i) => {
                const meta = valueMeta[i] ?? valueMeta[0];
                return (
                  <Reveal key={v.title}>
                    <div className="group h-full rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-alt)] p-5 transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[var(--shadow-card)]">
                      <span
                        className={`mb-3 flex h-10 w-10 items-center justify-center rounded-xl shadow-sm transition group-hover:scale-110 ${meta.tone}`}
                      >
                        <meta.Icon className="h-5 w-5" />
                      </span>
                      <h3 className="text-lg font-bold text-[var(--color-primary-dark)]">
                        {v.title}
                      </h3>
                      <p className="mt-2 text-sm text-[var(--color-text-secondary)]">{v.text}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>

          <Reveal>
            <div className="mt-16 overflow-hidden rounded-3xl bg-[var(--color-primary-dark)] px-8 py-10 text-white md:flex md:items-center md:justify-between md:px-12">
              <div className="max-w-xl">
                <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#86efac]">
                  <IconPhone className="h-3.5 w-3.5" />
                  Liên hệ ngay
                </p>
                <h2 className="text-2xl font-extrabold">Đồng hành cùng nhà nông</h2>
                <p className="mt-2 text-white/80">
                  Hotline {company.hotlineDisplay} — {company.address}
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-3 md:mt-0">
                <Link
                  href="/san-pham"
                  className="btn-solid inline-flex min-h-11 items-center gap-2 rounded-full bg-[var(--color-primary)] px-5 text-sm font-semibold"
                >
                  <IconLeaf className="h-4 w-4" />
                  Xem sản phẩm
                </Link>
                <Link
                  href="/lien-he"
                  className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/40 px-5 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  <IconPhone className="h-4 w-4" />
                  Liên hệ
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </>
  );
}
