"use client";

import Image from "next/image";
import Link from "next/link";
import { company } from "@/data/company";
import { IconHandshake, IconLeaf, IconPhone } from "@/components/Icons";
import { withBuildId } from "@/lib/buildId";

/** Rễ AI theo đúng ảnh thiết kế — nền trong suốt */
function RootDecoration() {
  return (
    <div
      className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-[calc(100px+env(safe-area-inset-bottom))] overflow-hidden"
      aria-hidden
    >
      <Image
        src={withBuildId("/images/ui/nav-roots.png")}
        alt=""
        width={1390}
        height={373}
        className="absolute left-1/2 top-[10px] h-[78px] w-[130%] max-w-none -translate-x-1/2 object-contain object-top opacity-[0.85]"
        priority
      />
    </div>
  );
}

type NavItem = {
  href: string;
  label: string;
  circle: string;
  Icon?: typeof IconLeaf;
  img?: string;
  external?: boolean;
};

export function MobileStickyNav() {
  const left: NavItem[] = [
    {
      href: company.facebook,
      label: "Facebook",
      circle: "bg-white ring-1 ring-black/5",
      img: "/images/social/facebook.png",
      external: true,
    },
    {
      href: "/san-pham",
      label: "Sản phẩm",
      Icon: IconLeaf,
      circle: "bg-[#bbf7d0] text-[#14532d]",
    },
  ];

  const right: NavItem[] = [
    {
      href: company.zaloUrl,
      label: "Chat",
      circle: "bg-white ring-1 ring-black/5",
      img: "/images/social/zalo.png",
      external: true,
    },
    {
      href: "/dai-ly",
      label: "Đại lý",
      Icon: IconHandshake,
      circle: "bg-[#fdba74] text-[#9a3412]",
    },
  ];

  function renderItem(item: NavItem) {
    const className =
      "group flex flex-col items-center gap-1 text-[10px] font-extrabold text-[#1f2937]";

    const inner = (
      <>
        <span
          className={`flex h-11 w-11 items-center justify-center overflow-hidden rounded-full shadow-md transition duration-200 group-hover:-translate-y-1 group-active:scale-95 ${item.circle}`}
        >
          {item.img ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={item.img} alt="" className="h-8 w-8 object-contain" />
          ) : item.Icon ? (
            <item.Icon className="h-5 w-5" />
          ) : null}
        </span>
        <span className="leading-none">{item.label}</span>
      </>
    );

    if (item.external) {
      return (
        <a
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className={className}
          aria-label={item.label}
        >
          {inner}
        </a>
      );
    }

    return (
      <Link href={item.href} className={className} aria-label={item.label}>
        {inner}
      </Link>
    );
  }

  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-50 sm:hidden"
      aria-label="Điều hướng nhanh"
    >
      <div className="relative mx-auto max-w-lg pb-[env(safe-area-inset-bottom)]">
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 top-7 bg-white"
          aria-hidden
        />

        <svg
          className="pointer-events-none absolute inset-x-0 bottom-0 h-[calc(92px+env(safe-area-inset-bottom))] w-full text-white drop-shadow-[0_-6px_18px_rgba(15,61,34,0.12)]"
          viewBox="0 0 390 120"
          preserveAspectRatio="none"
          aria-hidden
        >
          <path
            fill="currentColor"
            d="M0 28 H145 C155 28 162 20 170 12 C182 0 208 0 220 12 C228 20 235 28 245 28 H390 V120 H0 Z"
          />
          {/* Đỉnh xanh dưới Hotline như mẫu thiết kế */}
          <path
            fill="#86efac"
            d="M145 28 C155 28 162 20 170 12 C182 0 208 0 220 12 C228 20 235 28 245 28 C235 28 228 34 220 40 C208 50 182 50 170 40 C162 34 155 28 145 28 Z"
          />
        </svg>

        <RootDecoration />

        <ul className="relative z-[2] grid h-[84px] grid-cols-5 items-end px-3 pb-2.5 pt-3">
          {left.map((item) => (
            <li key={item.label} className="flex justify-center">
              {renderItem(item)}
            </li>
          ))}

          <li className="relative flex h-full justify-center">
            <a
              href={`tel:${company.hotline}`}
              className="fab-hotline absolute left-1/2 top-0 z-10 flex h-[62px] w-[62px] -translate-x-1/2 -translate-y-[18px] flex-col items-center justify-center rounded-full bg-[#22c55e] text-white shadow-[0_8px_20px_rgba(34,197,94,0.45)] ring-4 ring-white transition active:scale-95"
              aria-label={`Gọi hotline ${company.hotlineDisplay}`}
            >
              <IconPhone className="fab-hotline-icon h-6 w-6" />
              <span className="mt-0.5 text-[9px] font-extrabold leading-none">Hotline</span>
            </a>
          </li>

          {right.map((item) => (
            <li key={item.label} className="flex justify-center">
              {renderItem(item)}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
