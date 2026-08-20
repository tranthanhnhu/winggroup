"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { company } from "@/data/company";

type BuyCtaContextValue = {
  open: boolean;
  setOpen: (v: boolean) => void;
  openBuy: () => void;
};

const BuyCtaContext = createContext<BuyCtaContextValue | null>(null);

export function BuyCtaProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const openBuy = useCallback(() => setOpen(true), []);
  const value = useMemo(
    () => ({ open, setOpen, openBuy }),
    [open, openBuy],
  );
  return (
    <BuyCtaContext.Provider value={value}>{children}</BuyCtaContext.Provider>
  );
}

export function useBuyCta() {
  const ctx = useContext(BuyCtaContext);
  if (!ctx) throw new Error("useBuyCta must be used within BuyCtaProvider");
  return ctx;
}

export function BuyCtaSheet() {
  const { open, setOpen } = useBuyCta();
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[80] flex items-end justify-center sm:items-center"
      role="dialog"
      aria-modal="true"
      aria-label="Mua hàng"
    >
      <button
        type="button"
        className="absolute inset-0 bg-black/40"
        aria-label="Đóng"
        onClick={() => setOpen(false)}
      />
      <div className="relative z-10 w-full max-w-md rounded-t-2xl bg-white p-6 shadow-xl sm:rounded-2xl">
        <h2 className="text-xl font-bold text-[var(--color-primary-dark)]">
          Mua hàng / Tư vấn
        </h2>
        <p className="mt-2 text-sm text-[var(--color-text-secondary)]">
          Liên hệ trực tiếp với {company.shortName} để được tư vấn sản phẩm phù
          hợp.
        </p>
        <div className="mt-5 grid gap-3">
          <a
            href={`tel:${company.hotline}`}
            className="flex min-h-11 items-center justify-center gap-2 rounded-xl bg-[var(--color-primary)] px-4 font-semibold text-white transition hover:bg-[var(--color-primary-dark)]"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path
                d="M8 4h3l1.2 4.2-2 1.2a12 12 0 0 0 5.4 5.4l1.2-2L21 14v3a2 2 0 0 1-2.2 2A15 15 0 0 1 4 6.2 2 2 0 0 1 6 4h2Z"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinejoin="round"
              />
            </svg>
            Gọi hotline {company.hotlineDisplay}
          </a>
          <a
            href={company.zaloUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-11 items-center justify-center gap-2 rounded-xl bg-[#0068FF] px-4 font-semibold text-white transition hover:opacity-90"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M12 3c-4.8 0-8.7 3.4-8.7 7.6 0 2.4 1.3 4.5 3.3 5.9l-.8 3 3.3-1.1c.9.2 1.9.4 2.9.4 4.8 0 8.7-3.4 8.7-7.6S16.8 3 12 3Z" />
            </svg>
            Chat Zalo
          </a>
          <a
            href="/lien-he"
            className="flex min-h-11 items-center justify-center gap-2 rounded-xl border border-[var(--color-border)] px-4 font-semibold text-[var(--color-primary-dark)] transition hover:bg-[var(--color-bg-alt)]"
            onClick={() => setOpen(false)}
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path
                d="M4 7.5 12 13l8-5.5M5 19h14a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinejoin="round"
              />
            </svg>
            Form liên hệ
          </a>
          <a
            href="/dai-ly"
            className="flex min-h-11 items-center justify-center gap-2 rounded-xl border border-[var(--color-border)] px-4 font-semibold text-[var(--color-text-secondary)] transition hover:bg-[var(--color-bg-alt)]"
            onClick={() => setOpen(false)}
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path
                d="M12 21s7-5.2 7-11a7 7 0 1 0-14 0c0 5.8 7 11 7 11Z"
                stroke="currentColor"
                strokeWidth="1.8"
              />
              <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.8" />
            </svg>
            Tìm đại lý gần bạn
          </a>
        </div>
        <button
          type="button"
          className="mt-4 w-full min-h-11 text-sm text-[var(--color-text-muted)]"
          onClick={() => setOpen(false)}
        >
          Đóng
        </button>
      </div>
    </div>
  );
}
