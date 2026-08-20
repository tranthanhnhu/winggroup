import type { Metadata } from "next";
import { Suspense } from "react";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ProductCatalog } from "@/components/ProductCatalog";

export const metadata: Metadata = {
  title: "Sản phẩm",
  description: "Danh mục phân bón và vật tư nông nghiệp Wingroup.",
};

export default function SanPhamPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <Breadcrumb items={[{ label: "Sản phẩm" }]} tone="light" />
          <h1 className="text-3xl font-extrabold md:text-4xl">Sản phẩm Wingroup</h1>
          <p className="muted mt-3 max-w-2xl">
            Catalog đầy đủ theo danh sách phân phối chính thức — tìm theo tên,
            thành phần hoặc danh mục.
          </p>
        </div>
      </div>
      <div className="section section-alt">
        <div className="container">
          <Suspense fallback={<p>Đang tải danh mục...</p>}>
            <ProductCatalog />
          </Suspense>
        </div>
      </div>
    </>
  );
}
