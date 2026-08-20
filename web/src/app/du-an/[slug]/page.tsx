import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { projects, getProjectBySlug } from "@/data/projects";
import { Breadcrumb } from "@/components/Breadcrumb";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = getProjectBySlug(slug);
  return { title: p?.title ?? "Dự án", description: p?.excerpt };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <div className="section">
      <div className="container max-w-3xl">
        <Breadcrumb
          items={[
            { label: "Dự án", href: "/du-an" },
            { label: project.title },
          ]}
        />
        <h1 className="text-3xl font-extrabold text-[var(--color-primary-dark)] md:text-4xl">
          {project.title}
        </h1>
        <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-3xl">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            priority
            sizes="800px"
          />
        </div>
        <div className="prose mt-8 max-w-none space-y-4 text-[var(--color-text-secondary)]">
          {project.content.map((p, i) => (
            <p key={i} className="leading-relaxed">
              {p}
            </p>
          ))}
        </div>
        {project.gallery.length > 1 ? (
          <div className="mt-10 grid grid-cols-2 gap-3">
            {project.gallery.map((src) => (
              <div key={src} className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image src={src} alt="" fill className="object-cover" sizes="400px" />
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}
