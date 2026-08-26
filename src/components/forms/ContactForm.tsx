"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { SiteEmailLink } from "@/components/SiteEmailLink";

const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID;
const formspreeUrl = formspreeId ? `https://formspree.io/f/${formspreeId}` : null;

/**
 * Minimal enquiry form → POST /api/submit-lead → n8n webhook (five-key payload).
 * Formspree fallback when Lead_notification_url is not configured.
 */
export function ContactForm() {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function submitToFormspree(form: HTMLFormElement): Promise<boolean> {
    if (!formspreeUrl) return false;
    try {
      const res = await fetch(formspreeUrl, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      return res.ok;
    } catch {
      return false;
    }
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage(null);
    const form = e.currentTarget;
    const data = new FormData(form);

    const leadPayload = {
      fullName: String(data.get("name") || "").trim(),
      email: String(data.get("email") || "").trim(),
      phone: "",
      formType: "contact" as const,
      organisation: String(data.get("organisation") || "").trim(),
      description: String(data.get("message") || "").trim(),
    };

    if (!leadPayload.fullName || !leadPayload.email) {
      setStatus("error");
      setErrorMessage("Please enter your name and email.");
      return;
    }

    try {
      const res = await fetch("/api/submit-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(leadPayload),
      });

      if (res.ok) {
        router.push("/thank-you");
        return;
      }

      if (res.status === 503 && (await submitToFormspree(form))) {
        router.push("/thank-you");
        return;
      }

      setStatus("error");
      setErrorMessage(
        res.status === 503
          ? "Lead delivery is not configured. Please email us directly."
          : "Something went wrong. Please try again or email us directly."
      );
    } catch {
      if (await submitToFormspree(form)) {
        router.push("/thank-you");
        return;
      }
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again or email us directly.");
    }
  }

  const inputClass =
    "w-full min-h-[44px] min-w-0 rounded-lg border border-border bg-white px-3 py-2 text-base text-body focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 sm:text-sm";
  const labelClass = "mb-1 block text-sm font-medium text-heading";

  return (
    <form onSubmit={handleSubmit} className="min-w-0 space-y-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="min-w-0">
          <label htmlFor="name" className={labelClass}>
            Name *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className={inputClass}
          />
        </div>
        <div className="min-w-0">
          <label htmlFor="email" className={labelClass}>
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={inputClass}
          />
        </div>
      </div>

      <div className="min-w-0">
        <label htmlFor="organisation" className={labelClass}>
          Organisation <span className="font-normal text-muted">(optional)</span>
        </label>
        <input
          id="organisation"
          name="organisation"
          type="text"
          autoComplete="organization"
          className={inputClass}
        />
      </div>

      <div className="min-w-0">
        <label htmlFor="message" className={labelClass}>
          Brief message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Describe your dispute or the expert support you need."
          className={`${inputClass} min-h-[100px] resize-y`}
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-600" role="alert">
          {errorMessage ?? "Something went wrong. Please try again or email "}{" "}
          <SiteEmailLink className="underline" />.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="flex min-h-[44px] w-full items-center justify-center rounded-full bg-accent px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-accent-hover disabled:opacity-60 sm:w-auto sm:text-sm"
      >
        {status === "loading" ? "Sending…" : "Send enquiry"}
      </button>
    </form>
  );
}
