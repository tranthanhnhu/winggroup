import type { ReactNode } from "react";
import type { BrandValue } from "@/data/brandPlatform";

export function IconHeartSeed({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 20.4c-4.8-2.8-8-5.8-8-9.6A4.2 4.2 0 0 1 12 7.2a4.2 4.2 0 0 1 8 3.6c0 3.8-3.2 6.8-8 9.6Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path d="M12 11.2v4.2M12 11.2c-1.4-.8-2.4-1.6-2.8-2.6M12 11.2c1.4-.8 2.4-1.6 2.8-2.6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function IconBrainLeaf({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M9.2 8.2A3.2 3.2 0 0 1 15 6.8a3 3 0 0 1 3.4 4.2 2.8 2.8 0 0 1-.4 4.6c.1.5.2 1 .2 1.5A3.2 3.2 0 0 1 12 20.2 3.2 3.2 0 0 1 8.8 17c0-.4.1-.8.2-1.2A2.8 2.8 0 0 1 6.6 12a3 3 0 0 1 2.6-3.8Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M12 10.5v5.2M10.2 12.8h3.6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function IconShieldCheck({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 3.5 19 6.2v5.2c0 4.4-3 7.6-7 8.8-4-1.2-7-4.4-7-8.8V6.2L12 3.5Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path d="m9.2 12.2 2 2 4-4.2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconPeopleCrop({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="9" cy="8" r="2.4" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="16" cy="9" r="2" stroke="currentColor" strokeWidth="1.7" />
      <path
        d="M4.5 18.5c.6-2.6 2.4-4 4.5-4s3.9 1.4 4.5 4M13.2 18.2c.4-1.8 1.6-2.8 3-2.8 1.2 0 2.2.7 2.8 2"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function IconHarvest({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 20.5V10.2M12 10.2c-2.8-1.6-4.8-4-5.4-7 3.6.6 6 2.6 7.2 5.2M12 10.2c2.8-1.6 4.8-4 5.4-7-3.6.6-6 2.6-7.2 5.2"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M8.5 16.5c1.2.8 2.4 1.2 3.5 1.2s2.3-.4 3.5-1.2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

const valueIcons: Record<BrandValue["key"], (p: { className?: string }) => ReactNode> = {
  tam: (p) => <IconHeartSeed {...p} />,
  tri: (p) => <IconBrainLeaf {...p} />,
  trach: (p) => <IconShieldCheck {...p} />,
  dong: (p) => <IconPeopleCrop {...p} />,
  thinh: (p) => <IconHarvest {...p} />,
};

export function BrandValueIcon({
  valueKey,
  className = "h-6 w-6",
}: {
  valueKey: BrandValue["key"];
  className?: string;
}) {
  const Icon = valueIcons[valueKey];
  return <>{Icon({ className })}</>;
}
