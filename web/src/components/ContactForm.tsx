"use client";

import { useState } from "react";
import { company } from "@/data/company";
import { Button } from "@/components/Button";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "ok" | "error">("idle");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate(form: FormData) {
    const next: Record<string, string> = {};
    const name = String(form.get("name") || "").trim();
    const phone = String(form.get("phone") || "").trim();
    const email = String(form.get("email") || "").trim();
    const message = String(form.get("message") || "").trim();
    if (!name) next.name = "Vui lòng nhập họ tên";
    if (!phone || phone.replace(/\D/g, "").length < 8)
      next.phone = "Số điện thoại không hợp lệ";
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      next.email = "Email không hợp lệ";
    if (!message || message.length < 10)
      next.message = "Nội dung cần ít nhất 10 ký tự";
    return next;
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formEl = e.currentTarget;
    const form = new FormData(formEl);
    const next = validate(form);
    setErrors(next);
    if (Object.keys(next).length) {
      setStatus("error");
      return;
    }
    setLoading(true);
    const name = String(form.get("name"));
    const phone = String(form.get("phone"));
    const email = String(form.get("email"));
    const message = String(form.get("message"));
    const subject = encodeURIComponent(`[Wingroup] Liên hệ từ ${name}`);
    const body = encodeURIComponent(
      `Họ tên: ${name}\nĐiện thoại: ${phone}\nEmail: ${email}\n\n${message}`,
    );
    window.location.href = `mailto:${company.email}?subject=${subject}&body=${body}`;
    setStatus("ok");
    setLoading(false);
    formEl.reset();
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 rounded-2xl border border-[var(--color-border)] bg-white p-6 shadow-[var(--shadow-soft)]" noValidate>
      <div>
        <label htmlFor="name" className="mb-1 block text-sm font-semibold">
          Họ và tên
        </label>
        <input
          id="name"
          name="name"
          className="min-h-11 w-full rounded-xl border border-[var(--color-border)] px-3 text-sm"
        />
        {errors.name ? <p className="mt-1 text-sm text-red-600">{errors.name}</p> : null}
      </div>
      <div>
        <label htmlFor="phone" className="mb-1 block text-sm font-semibold">
          Số điện thoại
        </label>
        <input
          id="phone"
          name="phone"
          className="min-h-11 w-full rounded-xl border border-[var(--color-border)] px-3 text-sm"
        />
        {errors.phone ? <p className="mt-1 text-sm text-red-600">{errors.phone}</p> : null}
      </div>
      <div>
        <label htmlFor="email" className="mb-1 block text-sm font-semibold">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          className="min-h-11 w-full rounded-xl border border-[var(--color-border)] px-3 text-sm"
        />
        {errors.email ? <p className="mt-1 text-sm text-red-600">{errors.email}</p> : null}
      </div>
      <div>
        <label htmlFor="message" className="mb-1 block text-sm font-semibold">
          Nội dung
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className="w-full rounded-xl border border-[var(--color-border)] px-3 py-2 text-sm"
        />
        {errors.message ? (
          <p className="mt-1 text-sm text-red-600">{errors.message}</p>
        ) : null}
      </div>
      <Button type="submit" variant="primary" disabled={loading} className="w-full sm:w-auto">
        {loading ? "Đang gửi..." : "Gửi liên hệ"}
      </Button>
      {status === "ok" ? (
        <p className="text-sm text-[var(--color-success)]">
          Đã mở ứng dụng email. Cảm ơn bạn đã liên hệ Wingroup!
        </p>
      ) : null}
    </form>
  );
}
