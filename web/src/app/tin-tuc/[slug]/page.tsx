import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { posts, getPostBySlug } from "@/data/posts";
import { Breadcrumb } from "@/components/Breadcrumb";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  return { title: post?.title ?? "Tin tức", description: post?.excerpt };
}

export default async function PostDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const paragraphs = post.content
    .split(/\n\n+/)
    .map((p) => p.trim())
    .filter(Boolean);

  return (
    <article className="section">
      <div className="container max-w-3xl">
        <Breadcrumb
          items={[
            { label: "Tin tức", href: "/tin-tuc" },
            { label: post.title },
          ]}
        />
        <p className="text-sm font-bold uppercase text-[var(--color-primary)]">
          {post.category} · {post.date}
        </p>
        <h1 className="mt-2 text-3xl font-extrabold text-[var(--color-primary-dark)] md:text-4xl">
          {post.title}
        </h1>
        <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-3xl">
          <Image src={post.image} alt={post.title} fill className="object-cover" priority sizes="800px" />
        </div>
        <div className="prose mt-8 max-w-none space-y-4 text-[var(--color-text-secondary)]">
          {paragraphs.map((p, i) => (
            <p key={i} className="leading-relaxed">
              {p}
            </p>
          ))}
        </div>
      </div>
    </article>
  );
}
