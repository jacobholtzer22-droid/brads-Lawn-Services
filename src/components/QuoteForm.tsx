"use client";

import { useState, useRef } from "react";
import { siteConfig } from "@/lib/site.config";
import { trackFormConversion } from "@/lib/tracking";
import { PhoneIcon, CheckIcon } from "@/components/Icons";

/**
 * Quote form.
 *
 * THE PAYLOAD CONTRACT IS LAW — do not add, rename, or drop fields:
 *   { name, phone, email, message, smsConsent, businessSlug }
 * posted as JSON to NEXT_PUBLIC_CRM_URL.
 *
 * Two extra keys ride along and are BOTH conditional:
 *   - the honeypot, sent under siteConfig.honeypotField (default "website").
 *     Real users leave it empty; bots fill it.
 *   - turnstileToken, sent ONLY when a Turnstile site key is configured.
 *
 * Both are Gate 3 confirmation items. See HANDOFF.md.
 */

type Status = "idle" | "submitting" | "success" | "error";

const serviceOptions = [
  ...siteConfig.services.map((s) => s.name),
  "Something else",
];

export function QuoteForm({ id = "quote-form" }: { id?: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("name") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const service = String(data.get("service") ?? "").trim();
    const details = String(data.get("details") ?? "").trim();
    const address = String(data.get("address") ?? "").trim();
    const smsConsent = data.get("smsConsent") === "on";
    const honeypot = String(data.get(siteConfig.honeypotField) ?? "");

    // ---- client validation ----
    const next: Record<string, string> = {};
    if (!name) next.name = "Please tell us your name.";
    if (!phone) next.phone = "We need a phone number to get back to you.";
    else if (phone.replace(/\D/g, "").length < 10)
      next.phone = "That phone number looks too short.";
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      next.email = "That email address doesn't look right.";

    setErrors(next);
    if (Object.keys(next).length) {
      // Focus the first invalid field.
      const first = Object.keys(next)[0];
      form.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }

    // The CRM contract has one free-text field, so the service, address, and
    // details the customer gave us are composed into `message`.
    const message = [
      service && `Service needed: ${service}`,
      address && `Property address: ${address}`,
      details,
    ]
      .filter(Boolean)
      .join("\n\n");

    setStatus("submitting");

    try {
      const res = await fetch(siteConfig.crmUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          phone,
          email,
          message,
          smsConsent,
          businessSlug: siteConfig.businessSlug,
          [siteConfig.honeypotField]: honeypot,
          ...(siteConfig.turnstileSiteKey
            ? { turnstileToken: String(data.get("cf-turnstile-response") ?? "") }
            : {}),
        }),
      });

      if (!res.ok) throw new Error(`CRM responded ${res.status}`);

      setStatus("success");
      trackFormConversion();
      form.reset();
    } catch {
      // Nothing sensitive is logged — the customer's details never hit console.
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        id={id}
        className="rounded-2xl border border-brand-200 bg-brand-50 p-8 text-center sm:p-10"
        role="status"
        aria-live="polite"
      >
        <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand-600">
          <CheckIcon className="h-6 w-6 text-white" />
        </span>
        <h2 className="mt-5 font-heading text-2xl font-bold text-ink">
          We got it — we&rsquo;ll call you shortly
        </h2>
        <p className="mx-auto mt-3 max-w-md text-ink-muted">
          Thanks for reaching out. We&rsquo;ll be in touch about your property
          soon. If you need us sooner, just call.
        </p>
        <a
          href={siteConfig.phone.tel}
          className="btn-primary mt-6"
        >
          <PhoneIcon className="mr-2 h-5 w-5" />
          {siteConfig.phone.display}
        </a>
      </div>
    );
  }

  const inputClass =
    "mt-1.5 block w-full min-h-[48px] rounded-xl border border-line bg-surface-card px-4 py-3 text-base text-ink transition-colors placeholder:text-brand-300 focus:border-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-600/25";

  return (
    <form
      id={id}
      ref={formRef}
      onSubmit={handleSubmit}
      noValidate
      className="card p-6 sm:p-8"
    >
      <h2 className="font-heading text-2xl font-bold text-ink">Request a free quote</h2>
      <p className="mt-2 text-sm text-ink-muted">
        Fields marked <span aria-hidden="true">*</span>
        <span className="sr-only">with an asterisk</span> are required.
      </p>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-1">
          <label htmlFor="qf-name" className="block text-sm font-semibold text-ink">
            Your name <span aria-hidden="true" className="text-brand-700">*</span>
          </label>
          <input
            id="qf-name"
            name="name"
            type="text"
            autoComplete="name"
            required
            aria-required="true"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "qf-name-err" : undefined}
            className={inputClass}
          />
          {errors.name && (
            <p id="qf-name-err" role="alert" className="mt-1.5 text-sm text-red-700">
              {errors.name}
            </p>
          )}
        </div>

        <div className="sm:col-span-1">
          <label htmlFor="qf-phone" className="block text-sm font-semibold text-ink">
            Phone <span aria-hidden="true" className="text-brand-700">*</span>
          </label>
          <input
            id="qf-phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            required
            aria-required="true"
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "qf-phone-err" : undefined}
            className={inputClass}
          />
          {errors.phone && (
            <p id="qf-phone-err" role="alert" className="mt-1.5 text-sm text-red-700">
              {errors.phone}
            </p>
          )}
        </div>

        <div className="sm:col-span-1">
          <label htmlFor="qf-email" className="block text-sm font-semibold text-ink">
            Email
          </label>
          <input
            id="qf-email"
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "qf-email-err" : undefined}
            className={inputClass}
          />
          {errors.email && (
            <p id="qf-email-err" role="alert" className="mt-1.5 text-sm text-red-700">
              {errors.email}
            </p>
          )}
        </div>

        <div className="sm:col-span-1">
          <label htmlFor="qf-service" className="block text-sm font-semibold text-ink">
            What do you need?
          </label>
          <select id="qf-service" name="service" defaultValue="" className={inputClass}>
            <option value="">Choose a service</option>
            {serviceOptions.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="qf-address" className="block text-sm font-semibold text-ink">
            Property address
          </label>
          <input
            id="qf-address"
            name="address"
            type="text"
            autoComplete="street-address"
            className={inputClass}
          />
          <p className="mt-1.5 text-sm text-ink-muted">
            Helps us size the job before we call you back.
          </p>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="qf-details" className="block text-sm font-semibold text-ink">
            Anything else we should know?
          </label>
          <textarea
            id="qf-details"
            name="details"
            rows={4}
            className={inputClass}
            placeholder="Size of the lawn, how overgrown it is, how often you want service..."
          />
        </div>
      </div>

      {/* ---- Honeypot. Visually hidden, off the tab order, hidden from AT. ---- */}
      <div
        aria-hidden="true"
        className="absolute left-[-9999px] h-px w-px overflow-hidden"
      >
        <label htmlFor="qf-hp">Leave this field blank</label>
        <input
          id="qf-hp"
          type="text"
          name={siteConfig.honeypotField}
          tabIndex={-1}
          autoComplete="off"
          defaultValue=""
        />
      </div>

      {/* ---- Turnstile slot. Disabled unless a site key is configured. ---- */}
      {siteConfig.turnstileSiteKey && (
        <div
          className="cf-turnstile mt-6"
          data-sitekey={siteConfig.turnstileSiteKey}
        />
      )}

      {/* ---- SMS consent ---- */}
      <div className="mt-6 rounded-xl border border-line bg-surface-tint p-4">
        <label htmlFor="qf-sms" className="flex cursor-pointer items-start gap-3">
          <input
            id="qf-sms"
            name="smsConsent"
            type="checkbox"
            className="mt-0.5 h-5 w-5 flex-shrink-0 cursor-pointer rounded border-line text-brand-600 focus:ring-2 focus:ring-brand-600/40"
          />
          <span className="text-sm leading-relaxed text-ink-muted">
            Text me about my request. By checking this box you agree to receive
            text messages from {siteConfig.name} about the quote you asked for.
            Message and data rates may apply. Message frequency varies. Reply
            STOP to opt out at any time. Consent is not a condition of purchase.
          </span>
        </label>
      </div>

      {status === "error" && (
        <div
          role="alert"
          className="mt-6 rounded-xl border border-red-200 bg-red-50 p-4"
        >
          <p className="font-semibold text-red-900">
            Something went wrong sending that.
          </p>
          <p className="mt-1 text-sm text-red-800">
            Please try again, or just call us at{" "}
            <a
              href={siteConfig.phone.tel}
              className="font-semibold underline"
            >
              {siteConfig.phone.display}
            </a>
            . We answer {siteConfig.availability.toLowerCase()}.
          </p>
        </div>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn-primary mt-6 w-full disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? "Sending..." : "Send my request"}
      </button>

      <p className="mt-4 text-center text-sm text-ink-muted">
        Prefer to talk? Call{" "}
        <a
          href={siteConfig.phone.tel}
          className="font-semibold text-brand-700 hover:text-brand-800"
        >
          {siteConfig.phone.display}
        </a>
      </p>
    </form>
  );
}
