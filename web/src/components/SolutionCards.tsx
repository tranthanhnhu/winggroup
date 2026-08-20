import Image from "next/image";
import Link from "next/link";
import { solutions } from "@/data/solutions";
import { Reveal } from "@/components/Reveal";
import { ButtonLink } from "@/components/Button";

export function SolutionCards() {
  return (
    <section className="section section-earth">
      <div className="container">
        <Reveal>
          <div className="mb-10 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-extrabold text-[var(--color-primary-dark)] md:text-4xl">
                Giải pháp theo loại cây trồng
              </h2>
              <p className="mt-3 text-[var(--color-text-secondary)]">
                Mỗi loại cây — một lộ trình dinh dưỡng rõ ràng, dễ chọn và dễ áp dụng.
              </p>
            </div>
            <ButtonLink href="/giai-phap" variant="secondary">
              Tất cả giải pháp
            </ButtonLink>
          </div>
        </Reveal>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((s) => (
            <Reveal key={s.slug}>
              <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--color-border)] bg-white shadow-[var(--shadow-soft)] transition hover:-translate-y-1 hover:border-[var(--color-primary)] hover:shadow-[var(--shadow-card)]">
                <div className="relative aspect-[16/10]">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    sizes="(max-width:1024px) 100vw, 33vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(15,61,34,0.5)] to-transparent" />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-xl font-bold">{s.title}</h3>
                  <p className="mt-1 text-sm text-[var(--color-text-muted)]">{s.subtitle}</p>
                  <ul className="mt-4 mb-6 space-y-2 text-sm text-[var(--color-text-secondary)]">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex gap-2">
                        <span className="text-[var(--color-primary)]" aria-hidden>
                          ✓
                        </span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/giai-phap/${s.slug}`}
                    className="btn-solid mt-auto inline-flex min-h-11 items-center justify-center rounded-xl bg-[var(--color-primary)] px-4 text-sm font-semibold text-white transition hover:bg-[var(--color-primary-dark)]"
                  >
                    Xem chi tiết
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
