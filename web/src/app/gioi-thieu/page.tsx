import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Reveal } from "@/components/Reveal";
import { BrandValueIcon } from "@/components/BrandValueIcons";
import { IconLeaf, IconPhone, IconSpark } from "@/components/Icons";
import { company } from "@/data/company";
import { brandPlatform } from "@/data/brandPlatform";
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
    sub: "Danh mục chính thức phục vụ nhà nông",
    href: "/san-pham",
    image: "/images/du-an/du-an-3.jpg",
    span: "md:col-span-7 md:row-span-2 min-h-[280px] md:min-h-[420px]",
  },
  {
    n: `${dealers.length}`,
    l: "Đại lý / cửa hàng",
    sub: "Mạng lưới phân phối phủ vùng",
    href: "/dai-ly",
    image: "/images/cua-hang/thuy-tien.jpg",
    span: "md:col-span-5 min-h-[200px]",
  },
  {
    n: `${projects.length}`,
    l: "Dự án thực tế",
    sub: "Mô hình đồng hành cùng bà con",
    href: "/du-an",
    image: "/images/du-an/du-an-2.jpg",
    span: "md:col-span-5 min-h-[200px]",
  },
  {
    n: "7",
    l: "Nhóm giải pháp",
    sub: "Theo từng giai đoạn cây trồng",
    href: "/giai-phap",
    image: "/images/du-an/du-an-2_2.jpg",
    span: "md:col-span-12 min-h-[180px] md:min-h-[200px]",
  },
];

export default function GioiThieuPage() {
  return (
    <>
      <div className="relative isolate min-h-[42vh] overflow-hidden md:min-h-[48vh]">
        <Image
          src="/images/banners/banner-1.jpg"
          alt="WINGROUP — Trao đúng từ Tâm"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,28,16,0.45)_0%,rgba(8,28,16,0.62)_100%)]" />
        <div className="container relative flex min-h-[42vh] flex-col justify-end pb-10 pt-20 md:min-h-[48vh] md:pb-14">
          <Breadcrumb items={[{ label: "Giới thiệu" }]} tone="light" />
          <h1 className="mt-3 text-4xl font-extrabold text-white drop-shadow md:text-5xl">
            Giới thiệu {company.shortName}
          </h1>
          <p className="mt-3 max-w-2xl text-lg font-semibold text-[#bbf7d0]">
            {company.slogan}
          </p>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <Reveal>
            <p className="mx-auto max-w-3xl text-center text-base leading-relaxed text-[var(--color-text-secondary)] md:text-lg">
              {company.about}
            </p>
          </Reveal>
        </div>
      </div>

      <section className="relative overflow-hidden bg-[var(--color-bg-deep)] py-14 md:py-20">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(ellipse 80% 50% at 20% 20%, rgba(34,197,94,0.25), transparent), radial-gradient(ellipse 60% 40% at 90% 80%, rgba(22,101,52,0.35), transparent)",
          }}
        />
        <div className="container relative">
          <Reveal>
            <div className="mb-8 max-w-2xl md:mb-10">
              <p className="text-sm font-bold uppercase tracking-wide text-[#86efac]">
                Wingroup trong con số
              </p>
              <h2 className="mt-2 text-3xl font-extrabold text-white md:text-4xl">
                Đồng hành bằng năng lực thật
              </h2>
              <p className="mt-3 text-white/70">
                Từ danh mục sản phẩm đến mạng lưới đại lý và dự án thực địa — tất cả đều đo được.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-3 md:grid-cols-12 md:gap-4">
            {stats.map((s) => (
              <Reveal key={s.l} className={`${s.span} h-full`}>
                <Link
                  href={s.href}
                  className="group relative flex h-full min-h-[220px] overflow-hidden rounded-3xl md:min-h-full"
                >
                  <Image
                    src={s.image}
                    alt=""
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                    sizes="(max-width:768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(160deg,rgba(8,28,16,0.25)_0%,rgba(8,28,16,0.82)_70%)]" />
                  <div className="relative z-10 flex h-full min-h-[220px] flex-col justify-end p-6 md:min-h-0 md:p-8">
                    <p className="text-5xl font-black tracking-tight text-white drop-shadow md:text-6xl lg:text-7xl">
                      {s.n}
                    </p>
                    <p className="mt-2 text-lg font-bold text-white md:text-xl">{s.l}</p>
                    <p className="mt-1 max-w-sm text-sm text-white/75">{s.sub}</p>
                    <span className="mt-4 inline-flex text-sm font-semibold text-[#86efac] transition group-hover:translate-x-1">
                      Xem chi tiết →
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="section">
        <div className="container">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <Reveal>
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-[var(--shadow-card)]">
                <Image
                  src="/images/du-an/du-an-3_1.jpg"
                  alt="WINGROUP đồng hành cùng nhà nông"
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
                  Được tin chọn nhờ tử tế và giá trị thiết thực
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
              <p className="mt-4 max-w-3xl text-base leading-relaxed text-[var(--color-text-secondary)] md:text-lg">
                {company.mission}
              </p>
            </Reveal>
          </div>

          <div className="mt-16">
            <Reveal>
              <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-extrabold text-[var(--color-primary-dark)] md:text-3xl">
                    Giá trị cốt lõi
                  </h2>
                  <p className="mt-2 max-w-xl text-sm text-[var(--color-text-muted)]">
                    TÂM · TRÍ · TRÁCH · ĐỒNG · THỊNH — nền tảng để trao đúng và sát cánh cùng mùa vụ.
                  </p>
                </div>
                <Link
                  href="/gia-tri-cot-loi"
                  className="text-sm font-bold text-[var(--color-primary)] underline-offset-4 hover:underline"
                >
                  Xem đầy đủ nền tảng →
                </Link>
              </div>
            </Reveal>
            <div className="grid grid-cols-2 gap-3 md:grid-cols-5">
              {brandPlatform.values.map((v) => (
                <Reveal key={v.key}>
                  <Link
                    href="/gia-tri-cot-loi"
                    className={`group flex h-full flex-col items-center rounded-2xl p-4 text-center ring-1 ring-inset transition hover:-translate-y-1 ${v.tone}`}
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-sm">
                      <BrandValueIcon valueKey={v.key} className="h-5 w-5" />
                    </span>
                    <p className={`mt-3 text-base font-black ${v.accent}`}>{v.title}</p>
                    <p className="mt-1 text-[11px] font-semibold leading-snug text-[var(--color-text-secondary)]">
                      {v.lead}
                    </p>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal>
            <div className="mt-16 overflow-hidden rounded-3xl bg-[var(--color-primary-dark)] px-8 py-10 text-white md:flex md:items-center md:justify-between md:px-12">
              <div className="max-w-xl">
                <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#86efac]">
                  <IconPhone className="h-3.5 w-3.5" />
                  Liên hệ ngay
                </p>
                <h2 className="text-2xl font-extrabold">{company.slogan}</h2>
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
