import Link from "next/link";

export function Breadcrumb({
  items,
  tone = "default",
}: {
  items: { label: string; href?: string }[];
  tone?: "default" | "light";
}) {
  const muted = tone === "light" ? "text-white/75" : "text-[var(--color-text-muted)]";
  const active = tone === "light" ? "text-white" : "text-[var(--color-text-primary)]";
  const hover = tone === "light" ? "hover:text-white" : "hover:text-[var(--color-primary)]";

  return (
    <nav aria-label="Breadcrumb" className={`mb-5 text-sm ${muted}`}>
      <ol className="flex flex-wrap items-center gap-2">
        <li>
          <Link href="/" className={hover}>
            Trang chủ
          </Link>
        </li>
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-2">
            <span aria-hidden>/</span>
            {item.href ? (
              <Link href={item.href} className={hover}>
                {item.label}
              </Link>
            ) : (
              <span className={active}>{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
