import Image from "next/image";
import Link from "next/link";
import { posts } from "@/data/posts";
import { Reveal } from "@/components/Reveal";
import { ButtonLink } from "@/components/Button";

export function BlogGrid({ limit = 3 }: { limit?: number }) {
  const list = posts.slice(0, limit);

  return (
    <section className="section section-alt">
      <div className="container">
        <Reveal>
          <div className="mb-10 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <h2 className="text-3xl font-extrabold text-[var(--color-primary-dark)] md:text-4xl">
                Bài viết mới nhất
              </h2>
              <p className="mt-3 text-[var(--color-text-secondary)]">
                Kiến thức nông nghiệp và câu chuyện nhà nông.
              </p>
            </div>
            <ButtonLink href="/tin-tuc" variant="secondary">
              Xem tất cả tin
            </ButtonLink>
          </div>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-3">
          {list.map((post) => (
            <Reveal key={post.slug}>
              <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--color-border)] bg-white shadow-[var(--shadow-soft)] transition hover:-translate-y-0.5">
                <Link href={`/tin-tuc/${post.slug}`} className="relative block aspect-[16/10]">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width:768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </Link>
                <div className="flex flex-1 flex-col p-5">
                  <p className="text-xs font-bold uppercase tracking-wide text-[var(--color-primary)]">
                    {post.category}
                  </p>
                  <h3 className="mt-2 line-clamp-2 text-lg font-bold">
                    <Link href={`/tin-tuc/${post.slug}`}>{post.title}</Link>
                  </h3>
                  <p className="mt-2 line-clamp-3 text-sm text-[var(--color-text-muted)]">
                    {post.excerpt}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
