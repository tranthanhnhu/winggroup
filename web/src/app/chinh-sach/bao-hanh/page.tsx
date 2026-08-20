import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Chính sách bảo hành",
};

export default function BaoHanhPage() {
  return (
    <div className="section">
      <div className="container max-w-3xl">
        <Breadcrumb
          items={[
            { label: "Chính sách", href: "/chinh-sach/bao-hanh" },
            { label: "Bảo hành" },
          ]}
        />
        <h1 className="text-3xl font-extrabold text-[var(--color-primary-dark)]">
          Chính sách bảo hành
        </h1>
        <div className="mt-6 space-y-4 text-[var(--color-text-secondary)]">
          <p>
            {company.shortName} cam kết sản phẩm đúng chất lượng đăng ký, nguồn
            gốc rõ ràng và hỗ trợ kỹ thuật trong quá trình sử dụng.
          </p>
          <p>
            [CẦN BỔ SUNG: điều khoản bảo hành chi tiết — thời hạn, phạm vi, quy
            trình khiếu nại.]
          </p>
          <p>
            Liên hệ hỗ trợ:{" "}
            <a className="font-semibold text-[var(--color-primary)]" href={`tel:${company.hotline}`}>
              {company.hotlineDisplay}
            </a>{" "}
            hoặc email{" "}
            <a className="font-semibold text-[var(--color-primary)]" href={`mailto:${company.email}`}>
              {company.email}
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
