import { company } from "@/data/company";

const items = [
  {
    href: company.facebook,
    label: "Facebook",
    src: "/images/social/facebook.png",
    external: true,
  },
  {
    href: company.messenger,
    label: "Messenger",
    src: "/images/social/messenger.png",
    external: true,
  },
  {
    href: company.tiktok,
    label: "TikTok",
    src: "/images/social/tiktok.png",
    external: true,
  },
  {
    href: company.zaloUrl,
    label: "Zalo",
    src: "/images/social/zalo.png",
    external: true,
  },
  {
    href: `tel:${company.hotline}`,
    label: "Gọi điện",
    src: "/images/social/phone.png",
    external: false,
  },
];

export function SocialDock() {
  return (
    <aside
      className="fixed top-1/2 right-2 z-40 hidden -translate-y-1/2 flex-col gap-2 sm:flex"
      aria-label="Mạng xã hội"
    >
      {items.map((item) => (
        <a
          key={item.label}
          href={item.href}
          target={item.external ? "_blank" : undefined}
          rel={item.external ? "noopener noreferrer" : undefined}
          aria-label={item.label}
          className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-white shadow-[0_6px_16px_rgba(15,61,34,0.18)] ring-1 ring-black/5 transition hover:-translate-x-0.5 hover:scale-105"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={item.src} alt="" className="h-8 w-8 object-contain" />
        </a>
      ))}
    </aside>
  );
}
