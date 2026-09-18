/** Display name sent to n8n — must match netlify/functions/submit-lead.js */
export const BRAND_NAME = "Dispute Accounting";

export interface LeadWebhookInput {
  fullName: string;
  email: string;
  phone?: string;
  formType?: "contact" | "instruct";
  /** Free-text enquiry body — always sent to n8n as `message`. */
  message?: string;
}

/**
 * Hostname from NEXT_PUBLIC_SITE_URL — no protocol, no path, www stripped.
 * @see Lead_notification_setup.md
 */
export function getSiteDomain(): string {
  const raw =
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
    "https://disputeaccounting.com";

  try {
    const url = raw.startsWith("http") ? raw : `https://${raw}`;
    return new URL(url).hostname.replace(/^www\./i, "");
  } catch {
    return "disputeaccounting.com";
  }
}

/** Outbound n8n payload — shared keys across brand sites (+ message) */
export function buildWebhookPayload(lead: LeadWebhookInput) {
  return {
    "Full Name": lead.fullName,
    Email: lead.email,
    "Phone Number": lead.phone ?? "",
    "Brand name": BRAND_NAME,
    domain: getSiteDomain(),
    message: lead.message ?? "",
  };
}

function resolveLeadMessage(b: Record<string, unknown>): string {
  const keys = [
    "message",
    "Message",
    "description",
    "enquiry",
    "details",
    "summary",
    "notes",
    "matter",
  ] as const;
  for (const key of keys) {
    if (b[key] != null && String(b[key]).trim()) {
      return String(b[key]).trim();
    }
  }
  return "";
}

export function parseLeadWebhookInput(body: unknown): LeadWebhookInput | null {
  if (!body || typeof body !== "object") return null;

  const b = body as Record<string, unknown>;
  const fullName = String(b.fullName || b.full_name || "")
    .replace(/<[^>]*>/g, "")
    .trim();
  const email = String(b.email || "")
    .replace(/<[^>]*>/g, "")
    .trim()
    .toLowerCase();

  if (!fullName || !email) return null;

  const formType = b.formType === "instruct" ? "instruct" : "contact";

  return {
    fullName,
    email,
    phone: b.phone != null ? String(b.phone).trim() : "",
    formType,
    message: resolveLeadMessage(b),
  };
}

export async function notifyLeadWebhook(
  lead: LeadWebhookInput,
  webhookUrl: string
): Promise<boolean> {
  try {
    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(buildWebhookPayload(lead)),
    });
    if (!res.ok) {
      console.error("[webhook] rejected:", res.status, res.statusText);
    }
    return res.ok;
  } catch (err) {
    console.error("[webhook] request failed:", err);
    return false;
  }
}
