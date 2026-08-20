import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { DealerSearch } from "@/components/DealerSearch";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Hệ thống phân phối",
  description: "Danh sách đại lý và cửa hàng phân phối sản phẩm Wingroup.",
};

export default function DaiLyPage() {
  return (
    <div className="section">
      <div className="container">
        <Breadcrumb items={[{ label: "Hệ thống phân phối" }]} />
        <h1 className="mb-2 text-3xl font-extrabold text-[var(--color-primary-dark)] md:text-4xl">
          Hệ thống phân phối
        </h1>
        <p className="mb-4 max-w-2xl text-[var(--color-text-secondary)]">
          Tìm cửa hàng / đại lý gần bạn. Hotline hỗ trợ:{" "}
          <a className="font-semibold text-[var(--color-primary)]" href={`tel:${company.hotline}`}>
            {company.hotlineDisplay}
          </a>
        </p>
        <DealerSearch />
      </div>
    </div>
  );
}
