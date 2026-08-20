import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/data/products";
import { getCategoryById } from "@/data/categories";
import { productImage } from "@/lib/images";

export function ProductCard({ product }: { product: Product }) {
  const cat = getCategoryById(product.categoryId);
  const href = `/san-pham/${product.categoryId}/${product.slug}`;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--color-border)] bg-white shadow-[var(--shadow-soft)] transition duration-200 hover:-translate-y-0.5 hover:shadow-md">
      <Link href={href} className="relative block aspect-square overflow-hidden bg-[var(--color-bg-alt)]">
        <Image
          src={productImage(product.image)}
          alt={product.name}
          fill
          sizes="(max-width:640px) 50vw, (max-width:1024px) 33vw, 25vw"
          className="object-contain p-3 transition duration-300 group-hover:scale-[1.03]"
        />
      </Link>
      <div className="flex flex-1 flex-col p-4">
        {cat ? (
          <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-[var(--color-primary)]">
            {cat.short}
          </p>
        ) : null}
        <h3 className="line-clamp-2 text-base font-bold leading-snug text-[var(--color-text-primary)]">
          <Link href={href} className="text-[var(--color-text-primary)] hover:text-[var(--color-primary-dark)]">
            {product.name}
          </Link>
        </h3>
        {product.usage ? (
          <p className="mt-2 line-clamp-2 text-sm text-[var(--color-text-muted)]">
            {product.usage}
          </p>
        ) : null}
        <div className="mt-auto pt-5">
          <Link
            href={href}
            className="btn-solid inline-flex min-h-11 w-full items-center justify-center rounded-xl bg-[var(--color-primary)] px-3 text-sm font-semibold text-white transition hover:bg-[var(--color-primary-dark)]"
          >
            Xem chi tiết
          </Link>
        </div>
      </div>
    </article>
  );
}
