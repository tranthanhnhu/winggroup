import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";
import { Breadcrumb } from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Dự án",
  description: "Các dự án và mô hình thực tế đồng hành cùng Wingroup.",
};

export default function DuAnPage() {
  return (
    <div className="section">
      <div className="container">
        <Breadcrumb items={[{ label: "Dự án" }]} />
        <h1 className="mb-8 text-3xl font-extrabold text-[var(--color-primary-dark)] md:text-4xl">
          Dự án thực tế
        </h1>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <Link
              key={p.slug}
              href={`/du-an/${p.slug}`}
              className="overflow-hidden rounded-2xl border border-[var(--color-border)] bg-white shadow-[var(--shadow-soft)] transition hover:-translate-y-0.5"
            >
              <div className="relative aspect-[16/10]">
                <Image src={p.image} alt={p.title} fill className="object-cover" sizes="50vw" />
              </div>
              <div className="p-5">
                <h2 className="text-xl font-bold">{p.title}</h2>
                <p className="mt-2 text-sm text-[var(--color-text-muted)]">{p.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
