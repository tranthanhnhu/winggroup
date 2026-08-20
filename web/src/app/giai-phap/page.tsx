import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { solutions } from "@/data/solutions";
import { Breadcrumb } from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Giải pháp",
  description: "Giải pháp dinh dưỡng theo loại cây trồng và nhu cầu canh tác.",
};

export default function GiaiPhapPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <Breadcrumb items={[{ label: "Giải pháp" }]} tone="light" />
          <h1 className="text-3xl font-extrabold md:text-4xl">Giải pháp nông nghiệp</h1>
          <p className="muted mt-3 max-w-2xl text-base">
            Chọn giải pháp theo cây trồng hoặc giai đoạn — xem sản phẩm liên quan
            ngay trong từng nhóm.
          </p>
        </div>
      </div>
      <div className="section section-alt">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {solutions.map((s) => (
              <Link
                key={s.slug}
                href={`/giai-phap/${s.slug}`}
                className="group overflow-hidden rounded-2xl border border-[var(--color-border)] bg-white shadow-[var(--shadow-soft)] transition hover:-translate-y-1 hover:border-[var(--color-primary-light)] hover:shadow-[var(--shadow-card)]"
              >
                <div className="relative aspect-[16/10]">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    className="object-cover transition duration-300 group-hover:scale-[1.03]"
                    sizes="33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(15,61,34,0.55)] to-transparent" />
                </div>
                <div className="p-5">
                  <h2 className="text-xl font-bold text-[var(--color-primary-dark)] group-hover:text-[var(--color-primary)]">
                    {s.title}
                  </h2>
                  <p className="mt-1 text-sm text-[var(--color-text-muted)]">{s.subtitle}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
