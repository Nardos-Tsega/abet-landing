"use client";

import { useState, type FormEvent } from "react";
import { CONTACT_EMAIL } from "@/lib/site-config";

type FormState = "idle" | "submitted";

type ConversionFormProps = {
  /** When true, renders without outer section wrapper (for embedding in protocol). */
  embedded?: boolean;
};

export function ConversionForm({ embedded = false }: ConversionFormProps) {
  const [state, setState] = useState<FormState>("idle");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [building, setBuilding] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const subject = encodeURIComponent("21-Day Protocol — intake request");
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nWhat we're building:\n${building}`,
    );

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setState("submitted");
  }

  const inner = (
    <div className={embedded ? "mx-auto w-full max-w-[min(100%,40rem)] px-5 sm:px-8 lg:px-12" : "mx-auto w-full max-w-[min(100%,40rem)]"}>
      <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-stone-500">
        Start the clock
      </p>
      <h2
        id="contact-heading"
        className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-stone-950 sm:text-4xl"
      >
        Start the 21-Day Clock.
      </h2>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-stone-600 sm:text-lg">
        Tell us what you&apos;re building. We&apos;ll respond within one business day with a Pod match and
        onboarding timeline.
      </p>

      {state === "submitted" ? (
        <div className="mt-10 rounded-3xl border border-emerald-200 bg-emerald-50 p-8">
          <p className="text-base font-semibold text-emerald-900">Your email client should be open.</p>
          <p className="mt-2 text-sm leading-relaxed text-emerald-800">
            Send the message to complete your request. If it didn&apos;t open, email us directly at{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="abet-touch-target font-semibold underline">
              {CONTACT_EMAIL}
            </a>
            .
          </p>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="mt-10 space-y-5 rounded-3xl border border-[var(--border-subtle)] bg-white p-7 shadow-sm sm:p-8"
        >
          <div>
            <label htmlFor="contact-name" className="block text-sm font-medium text-stone-800">
              Name
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              required
              autoComplete="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              className="mt-2 w-full rounded-xl border border-stone-200 bg-white px-4 py-3 text-sm text-stone-900 outline-none transition-colors focus:border-[#3C4DFB] focus:ring-2 focus:ring-[#3C4DFB]/20"
            />
          </div>

          <div>
            <label htmlFor="contact-email" className="block text-sm font-medium text-stone-800">
              Company email
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              required
              autoComplete="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="mt-2 w-full rounded-xl border border-stone-200 bg-white px-4 py-3 text-sm text-stone-900 outline-none transition-colors focus:border-[#3C4DFB] focus:ring-2 focus:ring-[#3C4DFB]/20"
            />
          </div>

          <div>
            <label htmlFor="contact-building" className="block text-sm font-medium text-stone-800">
              What are you building?
            </label>
            <textarea
              id="contact-building"
              name="building"
              required
              rows={4}
              value={building}
              onChange={(event) => setBuilding(event.target.value)}
              placeholder="Stack, roadmap urgency, and the capacity gap you're trying to close."
              className="mt-2 w-full resize-y rounded-xl border border-stone-200 bg-white px-4 py-3 text-sm text-stone-900 outline-none transition-colors focus:border-[#3C4DFB] focus:ring-2 focus:ring-[#3C4DFB]/20"
            />
          </div>

          <button
            type="submit"
            className="abet-accent-cta inline-flex w-full items-center justify-center rounded-full px-6 py-3 text-sm font-semibold sm:w-auto"
          >
            Start the 21-Day Clock
          </button>

          <p className="text-xs leading-relaxed text-stone-500">
            Prefer email? Write to{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="abet-touch-target font-medium text-stone-700 underline">
              {CONTACT_EMAIL}
            </a>
            .
          </p>
        </form>
      )}
    </div>
  );

  if (embedded) {
    return (
      <div id="contact" className="scroll-mt-28 border-t border-[var(--border-subtle)] bg-[var(--page-canvas)] py-16 sm:py-20">
        {inner}
      </div>
    );
  }

  return (
    <section
      id="contact"
      className="relative z-10 scroll-mt-28 bg-[var(--page-canvas)] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28"
      aria-labelledby="contact-heading"
    >
      {inner}
    </section>
  );
}

/** Standalone conversion section (used when not embedded in protocol). */
export function ConversionSection() {
  return <ConversionForm />;
}
