import type { Metadata } from "next";
import { Suspense } from "react";
import { Breadcrumb } from "@/components/Breadcrumb";
import { SearchPageClient } from "@/components/SearchPageClient";

export const metadata: Metadata = {
  title: "Tìm kiếm sản phẩm",
};

export default function TimKiemPage() {
  return (
    <div className="section">
      <div className="container">
        <Breadcrumb items={[{ label: "Tìm kiếm" }]} />
        <h1 className="mb-6 text-3xl font-extrabold text-[var(--color-primary-dark)] md:text-4xl">
          Tìm kiếm sản phẩm
        </h1>
        <Suspense fallback={<p>Đang tải...</p>}>
          <SearchPageClient />
        </Suspense>
      </div>
    </div>
  );
}
