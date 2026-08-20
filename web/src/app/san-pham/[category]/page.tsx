import type { Metadata } from "next";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import { categories, getCategoryById } from "@/data/categories";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ProductCatalog } from "@/components/ProductCatalog";

export function generateStaticParams() {
  return categories.map((c) => ({ category: c.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  const cat = getCategoryById(category);
  return {
    title: cat?.name ?? "Danh mục",
    description: cat?.description,
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const cat = getCategoryById(category);
  if (!cat) notFound();

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <Breadcrumb
            items={[
              { label: "Sản phẩm", href: "/san-pham" },
              { label: cat.name },
            ]}
            tone="light"
          />
          <h1 className="text-3xl font-extrabold md:text-4xl">{cat.name}</h1>
          <p className="muted mt-3 max-w-2xl">{cat.description}</p>
        </div>
      </div>
      <div className="section section-alt">
        <div className="container">
          <Suspense fallback={<p>Đang tải danh mục...</p>}>
            <ProductCatalog initialCategory={cat.id} />
          </Suspense>
        </div>
      </div>
    </>
  );
}
