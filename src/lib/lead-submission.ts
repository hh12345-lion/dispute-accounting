import { appendRow, type CellValue } from "@/lib/google-sheets";
import { BRAND_NAME, type LeadWebhookInput } from "@/lib/leadNotification";

export { BRAND_NAME };

/** Row 1 headers on GOOGLE_SHEET_TAB_NAME, must match buildLeadSheetRow column order */
export const LEAD_SHEET_HEADERS = [
  "Timestamp",
  "Full Name",
  "Email",
  "Phone Number",
  "Form Type",
  "Organisation",
  "Message",
  "Brand Name",
  "Domain",
] as const;

export interface LeadSubmission extends LeadWebhookInput {
  organisation?: string;
  description?: string;
}

function sanitize(str: string): string {
  return str.replace(/<[^>]*>/g, "").trim();
}

function opt(value: unknown): string {
  if (value == null) return "";
  return sanitize(String(value));
}

/** Prevent Sheets from treating +44… as a formula when using USER_ENTERED */
function formatPhoneForSheet(phone: string): string {
  if (!phone) return "";
  if (phone.startsWith("+") || phone.startsWith("=") || phone.startsWith("-")) {
    return `'${phone}`;
  }
  return phone;
}

export function parseLeadBody(body: unknown): LeadSubmission | null {
  if (!body || typeof body !== "object") return null;

  const b = body as Record<string, unknown>;
  const fullName = opt(b.fullName);
  const email = opt(b.email).toLowerCase();

  if (!fullName || !email) return null;

  const formType = b.formType === "instruct" ? "instruct" : "contact";

  return {
    fullName,
    email,
    phone: b.phone != null ? String(b.phone).trim() : "",
    formType,
    organisation: opt(b.organisation),
    description: opt(b.description ?? b.message),
  };
}

export function buildLeadSheetRow(
  lead: LeadSubmission,
  domain: string
): CellValue[] {
  return [
    new Date().toISOString(),
    lead.fullName,
    lead.email,
    formatPhoneForSheet(lead.phone ?? ""),
    lead.formType ?? "contact",
    lead.organisation ?? "",
    lead.description ?? "",
    BRAND_NAME,
    domain,
  ];
}

export async function appendLeadToSheet(
  lead: LeadSubmission,
  domain: string
): Promise<void> {
  await appendRow(buildLeadSheetRow(lead, domain));
}
