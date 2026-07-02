"use client";

import { FormEvent, useState } from "react";

type FormState = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [error, setError] = useState("");
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("loading");
    setError("");
    setFieldErrors({});

    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") ?? "").trim();
    const contactMethod = String(formData.get("contactMethod") ?? "").trim();
    const contact = String(formData.get("contact") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();
    const nextErrors: Record<string, string> = {};

    if (!name) nextErrors.name = "Укажите имя.";
    if (!contactMethod) nextErrors.contactMethod = "Выберите способ связи.";
    if (!contact) nextErrors.contact = "Укажите контакт.";

    if (Object.keys(nextErrors).length > 0) {
      setFieldErrors(nextErrors);
      setState("error");
      setError("Заполните обязательные поля.");
      return;
    }

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        contactMethod,
        contact,
        message,
      }),
    });

    if (!response.ok) {
      setState("error");
      setError("Не получилось отправить заявку. Напишите мне напрямую в Telegram.");
      return;
    }

    form.reset();
    setState("success");
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit} noValidate>
      <div>
        <label className="mb-2 block text-xs font-black uppercase tracking-[0.14em] text-white/72" htmlFor="name">
          Имя *
        </label>
        <input
          required
          id="name"
          name="name"
          className="h-12 w-full min-w-0 rounded-[8px] border border-white/12 bg-black/24 px-4 text-base text-white outline-none transition placeholder:text-white/28 focus:border-[#78ff8f] focus:ring-4 focus:ring-[#78ff8f]/10"
          placeholder="Как к вам обращаться"
          aria-invalid={Boolean(fieldErrors.name)}
          aria-describedby={fieldErrors.name ? "name-error" : undefined}
        />
        {fieldErrors.name ? (
          <p id="name-error" className="mt-2 text-sm text-red-100">
            {fieldErrors.name}
          </p>
        ) : null}
      </div>

      <div className="grid gap-5 sm:grid-cols-[minmax(0,.78fr)_minmax(0,1fr)]">
        <div className="min-w-0">
          <label
            className="mb-2 block text-xs font-black uppercase tracking-[0.14em] text-white/72"
            htmlFor="contactMethod"
          >
            Способ связи *
          </label>
          <select
            id="contactMethod"
            name="contactMethod"
            className="h-12 w-full min-w-0 rounded-[8px] border border-white/12 bg-black/24 px-4 text-base text-white outline-none transition focus:border-[#78ff8f] focus:ring-4 focus:ring-[#78ff8f]/10"
            defaultValue="Telegram"
            required
            aria-invalid={Boolean(fieldErrors.contactMethod)}
            aria-describedby={
              fieldErrors.contactMethod ? "contact-method-error" : undefined
            }
          >
            <option>Telegram</option>
            <option>Viber</option>
            <option>Почта</option>
          </select>
          {fieldErrors.contactMethod ? (
            <p id="contact-method-error" className="mt-2 text-sm text-red-100">
              {fieldErrors.contactMethod}
            </p>
          ) : null}
        </div>
        <div className="min-w-0">
          <label
            className="mb-2 block text-xs font-black uppercase tracking-[0.14em] text-white/72"
            htmlFor="contact"
          >
            Контакт *
          </label>
          <input
            required
            id="contact"
            name="contact"
            className="h-12 w-full min-w-0 rounded-[8px] border border-white/12 bg-black/24 px-4 text-base text-white outline-none transition placeholder:text-white/28 focus:border-[#78ff8f] focus:ring-4 focus:ring-[#78ff8f]/10"
            placeholder="@username или email"
            aria-invalid={Boolean(fieldErrors.contact)}
            aria-describedby={fieldErrors.contact ? "contact-error" : undefined}
          />
          {fieldErrors.contact ? (
            <p id="contact-error" className="mt-2 text-sm text-red-100">
              {fieldErrors.contact}
            </p>
          ) : null}
        </div>
      </div>

      <div>
        <label
          className="mb-2 block text-xs font-black uppercase tracking-[0.14em] text-white/72"
          htmlFor="message"
        >
          Сообщение
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className="w-full min-w-0 resize-none rounded-[8px] border border-white/12 bg-black/24 px-4 py-3 text-base text-white outline-none transition placeholder:text-white/28 focus:border-[#78ff8f] focus:ring-4 focus:ring-[#78ff8f]/10"
          placeholder="Коротко о проекте, сроках или вопросе"
        />
      </div>

      <button
        type="submit"
        disabled={state === "loading"}
        className="inline-flex min-h-12 w-full items-center justify-center rounded-[8px] bg-[#78ff8f] px-5 py-3 text-center text-sm font-black uppercase tracking-[0.1em] text-[#111411] shadow-[0_0_42px_rgba(120,255,143,.2)] transition hover:-translate-y-0.5 hover:bg-white disabled:cursor-wait disabled:opacity-70 sm:px-6 sm:tracking-[0.12em]"
      >
        {state === "loading" ? "Отправляю..." : "Отправить заявку"}
      </button>

      {state === "success" ? (
        <p className="reveal-up rounded-[8px] border border-[#78ff8f]/30 bg-[#78ff8f]/10 px-4 py-3 text-[#dfffee]">
          Спасибо, скоро свяжусь
        </p>
      ) : null}
      {state === "error" ? (
        <p className="rounded-[8px] border border-red-300/25 bg-red-400/10 px-4 py-3 text-red-100">
          {error}
        </p>
      ) : null}
    </form>
  );
}
