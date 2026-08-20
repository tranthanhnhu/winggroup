import Image from "next/image";
import { company } from "@/data/company";
import { ButtonLink } from "@/components/Button";
import { Reveal } from "@/components/Reveal";

export function AboutTeaser() {
  return (
    <section className="section">
      <div className="container grid items-center gap-10 lg:grid-cols-2">
        <Reveal>
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
            <Image
              src="/images/du-an/du-an-2_1.png"
              alt="Nông trại đồng hành cùng Wingroup"
              fill
              sizes="(max-width:1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </Reveal>
        <Reveal>
          <div>
            <p className="mb-2 text-sm font-bold uppercase tracking-wide text-[var(--color-primary)]">
              Về chúng tôi
            </p>
            <h2 className="text-3xl font-extrabold text-[var(--color-primary-dark)] md:text-4xl">
              {company.shortName} — {company.slogan}
            </h2>
            <p className="mt-4 text-[var(--color-text-secondary)]">{company.about}</p>
            <p className="mt-3 text-[var(--color-text-secondary)]">{company.vision}</p>
            <div className="mt-6">
              <ButtonLink href="/gioi-thieu" variant="primary">
                Tìm hiểu thêm
              </ButtonLink>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
