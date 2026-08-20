import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { posts } from "@/data/posts";
import { Breadcrumb } from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Tin tức",
  description: "Kiến thức nông nghiệp và tin tức nhà nông.",
};

export default function TinTucPage() {
  return (
    <div className="section">
      <div className="container">
        <Breadcrumb items={[{ label: "Tin tức" }]} />
        <h1 className="mb-8 text-3xl font-extrabold text-[var(--color-primary-dark)] md:text-4xl">
          Tin tức & kiến thức
        </h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="overflow-hidden rounded-2xl border border-[var(--color-border)] bg-white shadow-[var(--shadow-soft)]"
            >
              <Link href={`/tin-tuc/${post.slug}`} className="relative block aspect-[16/10]">
                <Image src={post.image} alt={post.title} fill className="object-cover" sizes="33vw" />
              </Link>
              <div className="p-5">
                <p className="text-xs font-bold uppercase text-[var(--color-primary)]">
                  {post.category}
                </p>
                <h2 className="mt-2 text-lg font-bold">
                  <Link href={`/tin-tuc/${post.slug}`}>{post.title}</Link>
                </h2>
                <p className="mt-2 line-clamp-3 text-sm text-[var(--color-text-muted)]">
                  {post.excerpt}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
