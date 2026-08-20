import { Reveal } from "@/components/Reveal";

const certs = [
  "[CẦN BỔ SUNG: ISO 9001]",
  "[CẦN BỔ SUNG: ISO 14001]",
  "[CẦN BỔ SUNG: chứng nhận khác]",
];

const partners = [
  "Đối tác A",
  "Đối tác B",
  "Đối tác C",
  "Đối tác D",
  "Đối tác E",
  "Đối tác F",
];

export function CertStrip() {
  return (
    <section className="section section-alt">
      <div className="container">
        <Reveal>
          <h2 className="mb-8 text-center text-2xl font-extrabold text-[var(--color-primary-dark)] md:text-3xl">
            Chứng nhận & tiêu chuẩn
          </h2>
        </Reveal>
        <div className="flex flex-wrap items-center justify-center gap-4">
          {certs.map((c) => (
            <div
              key={c}
              className="min-h-20 min-w-[160px] rounded-2xl border border-dashed border-[var(--color-border)] bg-white px-6 py-4 text-center text-sm font-semibold text-[var(--color-text-muted)]"
            >
              {c}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PartnerLogos() {
  return (
    <section className="section">
      <div className="container">
        <Reveal>
          <h2 className="mb-8 text-center text-2xl font-extrabold text-[var(--color-primary-dark)] md:text-3xl">
            Đối tác của Wingroup
          </h2>
          <p className="mb-8 text-center text-sm text-[var(--color-text-muted)]">
            [CẦN BỔ SUNG: logo đối tác thật]
          </p>
        </Reveal>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {partners.map((p) => (
            <div
              key={p}
              className="flex min-h-24 items-center justify-center rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-alt)] grayscale transition hover:grayscale-0 hover:shadow-md"
            >
              <span className="text-sm font-semibold text-[var(--color-text-muted)]">{p}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
