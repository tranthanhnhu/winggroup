import Image from "next/image";
import Link from "next/link";
import { company } from "@/data/company";

export function BrandLogo({
  href = "/",
  size = "md",
}: {
  href?: string;
  size?: "sm" | "md" | "lg";
}) {
  const box =
    size === "sm" ? "h-8 w-8" : size === "lg" ? "h-10 w-10" : "h-9 w-9";
  const text =
    size === "sm" ? "text-sm" : size === "lg" ? "text-base" : "text-[15px]";

  return (
    <Link
      href={href}
      className="group inline-flex max-h-11 items-center gap-2"
      aria-label="Trang chủ Wingroup"
    >
      <span
        className={`relative ${box} shrink-0 overflow-hidden rounded-full bg-white ring-1 ring-[var(--color-border)]`}
      >
        <Image
          src={company.logo}
          alt=""
          width={40}
          height={40}
          className="h-full w-full object-cover object-[center_12%] scale-125"
          priority
        />
      </span>
      <span
        className={`leading-none font-black uppercase tracking-[0.08em] text-[var(--color-primary-dark)] transition group-hover:text-[var(--color-primary)] ${text}`}
      >
        {company.shortName}
      </span>
    </Link>
  );
}
