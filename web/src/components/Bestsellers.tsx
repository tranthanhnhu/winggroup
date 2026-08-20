import { getBestsellers } from "@/data/products";
import { ProductGrid } from "@/components/ProductGrid";
import { ButtonLink } from "@/components/Button";
import { Reveal } from "@/components/Reveal";

export function Bestsellers() {
  const products = getBestsellers(8);

  return (
    <section className="section">
      <div className="container">
        <Reveal>
          <div className="mb-10 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <h2 className="text-3xl font-extrabold text-[var(--color-primary-dark)] md:text-4xl">
                Sản phẩm bán chạy
              </h2>
              <p className="mt-3 max-w-xl text-[var(--color-text-secondary)]">
                Những sản phẩm được bà con tin dùng — ảnh thật từ kho Wingroup.
              </p>
            </div>
            <ButtonLink href="/san-pham" variant="secondary">
              Xem tất cả sản phẩm
            </ButtonLink>
          </div>
        </Reveal>
        <Reveal>
          <ProductGrid products={products} />
        </Reveal>
      </div>
    </section>
  );
}
