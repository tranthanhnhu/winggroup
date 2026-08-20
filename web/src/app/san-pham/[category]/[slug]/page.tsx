import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products, getProductBySlug } from "@/data/products";
import { getCategoryById } from "@/data/categories";
import { company } from "@/data/company";
import { Breadcrumb } from "@/components/Breadcrumb";
import { productImage } from "@/lib/images";
import { ProductGrid } from "@/components/ProductGrid";
import { getProductDetails } from "@/data/productDetails";

export function generateStaticParams() {
  return products.map((p) => ({
    category: p.categoryId,
    slug: p.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  return {
    title: product?.name ?? "Sản phẩm",
    description: product?.usage || product?.composition || company.description,
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}) {
  const { category, slug } = await params;
  const product = getProductBySlug(slug);
  if (!product || product.categoryId !== category) notFound();
  const cat = getCategoryById(product.categoryId);
  const related = products
    .filter((p) => p.categoryId === product.categoryId && p.id !== product.id)
    .slice(0, 4);
  const details = getProductDetails(product.slug);

  return (
    <div className="section">
      <div className="container">
        <Breadcrumb
          items={[
            { label: "Sản phẩm", href: "/san-pham" },
            ...(cat
              ? [{ label: cat.name, href: `/san-pham/${cat.id}` }]
              : []),
            { label: product.name },
          ]}
        />

        <div className="grid gap-10 lg:grid-cols-2">
          <div className="relative aspect-square overflow-hidden rounded-3xl border border-[var(--color-border)] bg-[var(--color-bg-alt)]">
            <Image
              src={productImage(product.image)}
              alt={product.name}
              fill
              priority
              sizes="(max-width:1024px) 100vw, 50vw"
              className="object-contain p-6"
            />
          </div>
          <div>
            {cat ? (
              <p className="mb-2 text-sm font-bold uppercase tracking-wide text-[var(--color-primary)]">
                {cat.name}
              </p>
            ) : null}
            <h1 className="text-3xl font-extrabold text-[var(--color-primary-dark)] md:text-4xl">
              {product.name}
            </h1>
            {product.usage ? (
              <p className="mt-4 text-lg text-[var(--color-text-secondary)]">
                {product.usage}
              </p>
            ) : null}

            {details ? (
              <div className="mt-8 space-y-6">
                {details.composition.length ? (
                  <section>
                    <h2 className="text-base font-bold text-[var(--color-primary-dark)]">
                      Thành phần
                    </h2>
                    <ul className="mt-2 space-y-1 text-sm text-[var(--color-text-secondary)]">
                      {details.composition.map((x) => (
                        <li key={x}>• {x}</li>
                      ))}
                    </ul>
                  </section>
                ) : null}
                {details.usage.length ? (
                  <section>
                    <h2 className="text-base font-bold text-[var(--color-primary-dark)]">
                      Công dụng
                    </h2>
                    <ul className="mt-2 space-y-1.5 text-sm text-[var(--color-text-secondary)]">
                      {details.usage.map((x) => (
                        <li key={x} className="flex gap-2">
                          <span className="text-[var(--color-primary)]">✓</span>
                          <span>{x}</span>
                        </li>
                      ))}
                    </ul>
                  </section>
                ) : null}
                {details.instructions.length ? (
                  <section>
                    <h2 className="text-base font-bold text-[var(--color-primary-dark)]">
                      Hướng dẫn sử dụng
                    </h2>
                    <ul className="mt-2 space-y-1.5 text-sm text-[var(--color-text-secondary)]">
                      {details.instructions.map((x) => (
                        <li key={x}>• {x}</li>
                      ))}
                    </ul>
                  </section>
                ) : null}
                {details.notes.length ? (
                  <section>
                    <h2 className="text-base font-bold text-[var(--color-primary-dark)]">
                      Lưu ý
                    </h2>
                    <ul className="mt-2 space-y-1 text-sm text-[var(--color-text-muted)]">
                      {details.notes.map((x) => (
                        <li key={x}>• {x}</li>
                      ))}
                    </ul>
                  </section>
                ) : null}
              </div>
            ) : product.composition ? (
              <div className="mt-6 rounded-2xl bg-[var(--color-bg-alt)] p-5">
                <h2 className="text-base font-bold">Thành phần đăng ký</h2>
                <p className="mt-2 whitespace-pre-wrap text-sm text-[var(--color-text-secondary)]">
                  {product.composition}
                </p>
              </div>
            ) : null}

            {product.packaging.length ? (
              <div className="mt-6">
                <h2 className="text-base font-bold">Quy cách</h2>
                <ul className="mt-2 space-y-1 text-sm text-[var(--color-text-secondary)]">
                  {product.packaging.map((pk, i) => (
                    <li key={i}>
                      • {pk.unit}
                      {pk.perBox ? ` — ${pk.perBox}/thùng` : ""}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`tel:${company.hotline}`}
                className="btn-solid inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-[var(--color-primary)] px-5 text-sm font-semibold text-white hover:bg-[var(--color-primary-dark)]"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path
                    d="M8 4h3l1.2 4.2-2 1.2a12 12 0 0 0 5.4 5.4l1.2-2L21 14v3a2 2 0 0 1-2.2 2A15 15 0 0 1 4 6.2 2 2 0 0 1 6 4h2Z"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinejoin="round"
                  />
                </svg>
                Gọi mua hàng
              </a>
              <a
                href={company.zaloUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-[#0068FF] px-5 text-sm font-semibold text-white"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M12 3c-4.8 0-8.7 3.4-8.7 7.6 0 2.4 1.3 4.5 3.3 5.9l-.8 3 3.3-1.1c.9.2 1.9.4 2.9.4 4.8 0 8.7-3.4 8.7-7.6S16.8 3 12 3Z" />
                </svg>
                Chat Zalo
              </a>
              <Link
                href="/dai-ly"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-[var(--color-border)] px-5 text-sm font-semibold"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path
                    d="M12 21s7-5.2 7-11a7 7 0 1 0-14 0c0 5.8 7 11 7 11Z"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  />
                  <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.8" />
                </svg>
                Tìm đại lý
              </Link>
            </div>
          </div>
        </div>

        {related.length ? (
          <div className="mt-16">
            <h2 className="mb-6 text-2xl font-extrabold text-[var(--color-primary-dark)]">
              Sản phẩm cùng nhóm
            </h2>
            <ProductGrid products={related} />
          </div>
        ) : null}
      </div>
    </div>
  );
}
