import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Chính sách đổi trả",
};

export default function DoiTraPage() {
  return (
    <div className="section">
      <div className="container max-w-3xl">
        <Breadcrumb
          items={[
            { label: "Chính sách", href: "/chinh-sach/doi-tra" },
            { label: "Đổi trả" },
          ]}
        />
        <h1 className="text-3xl font-extrabold text-[var(--color-primary-dark)]">
          Chính sách đổi trả
        </h1>
        <div className="mt-6 space-y-4 text-[var(--color-text-secondary)]">
          <p>
            Sản phẩm lỗi do nhà sản xuất / vận chuyển được hỗ trợ đổi trả theo
            thỏa thuận với đại lý và công ty.
          </p>
          <p>
            [CẦN BỔ SUNG: điều kiện đổi trả, thời gian, giấy tờ cần thiết.]
          </p>
          <p>
            Hotline:{" "}
            <a className="font-semibold text-[var(--color-primary)]" href={`tel:${company.hotline}`}>
              {company.hotlineDisplay}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
