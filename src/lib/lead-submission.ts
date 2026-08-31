import { appendRow, type CellValue } from "@/lib/google-sheets";
import { BRAND_NAME, type LeadWebhookInput } from "@/lib/leadNotification";

export { BRAND_NAME };

/** Row 1 headers on one shared GOOGLE_SHEET_TAB_NAME (Form Type distinguishes rows) */
export const LEAD_SHEET_HEADERS = [
  "Timestamp",
  "Brand Name",
  "Form Type",
  "Full Name",
  "Email",
  "Phone Number",
  "Organisation",
  "Message",
  "Domain",
] as const;

function formTypeLabel(formType?: string): string {
  return formType === "instruct" ? "Instruct" : "Contact";
}

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
    BRAND_NAME,
    formTypeLabel(lead.formType),
    lead.fullName,
    lead.email,
    formatPhoneForSheet(lead.phone ?? ""),
    lead.organisation ?? "",
    lead.description ?? "",
    domain,
  ];
}

export async function appendLeadToSheet(
  lead: LeadSubmission,
  domain: string
): Promise<void> {
  await appendRow(buildLeadSheetRow(lead, domain));
}
