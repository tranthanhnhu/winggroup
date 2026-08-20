import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { solutions, getSolutionBySlug } from "@/data/solutions";
import { getProductsByCategory } from "@/data/products";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ProductGrid } from "@/components/ProductGrid";

export function generateStaticParams() {
  return solutions.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const s = getSolutionBySlug(slug);
  return { title: s?.title ?? "Giải pháp", description: s?.subtitle };
}

export default async function SolutionDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);
  if (!solution) notFound();
  const related = getProductsByCategory(solution.categoryId).slice(0, 8);

  return (
    <div className="section">
      <div className="container">
        <Breadcrumb
          items={[
            { label: "Giải pháp", href: "/giai-phap" },
            { label: solution.title },
          ]}
        />
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
            <Image
              src={solution.image}
              alt={solution.title}
              fill
              className="object-cover"
              sizes="50vw"
              priority
            />
          </div>
          <div>
            <h1 className="text-3xl font-extrabold text-[var(--color-primary-dark)] md:text-4xl">
              {solution.title}
            </h1>
            <p className="mt-3 text-lg text-[var(--color-text-secondary)]">
              {solution.subtitle}
            </p>
            <ul className="mt-6 space-y-3">
              {solution.bullets.map((b) => (
                <li key={b} className="flex gap-2 text-[var(--color-text-secondary)]">
                  <span className="text-[var(--color-primary)]">✓</span>
                  {b}
                </li>
              ))}
            </ul>
            <Link
              href={`/san-pham/${solution.categoryId}`}
              className="mt-8 inline-flex min-h-11 items-center justify-center rounded-xl bg-[var(--color-primary)] px-5 text-sm font-semibold text-white"
            >
              Xem sản phẩm liên quan
            </Link>
          </div>
        </div>
        {related.length ? (
          <div className="mt-14">
            <h2 className="mb-6 text-2xl font-extrabold">Sản phẩm gợi ý</h2>
            <ProductGrid products={related} />
          </div>
        ) : null}
      </div>
    </div>
  );
}
