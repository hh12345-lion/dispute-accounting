import { NextResponse } from "next/server";
import { isGoogleSheetsConfigured } from "@/lib/google-sheets";
import {
  getSiteDomain,
  notifyLeadWebhook,
  parseLeadWebhookInput,
} from "@/lib/leadNotification";
import { appendLeadToSheet } from "@/lib/lead-submission";

async function softFailAppendSheet(
  lead: NonNullable<ReturnType<typeof parseLeadWebhookInput>> & {
    organisation?: string;
    description?: string;
  },
  domain: string,
  context: string
): Promise<void> {
  if (!isGoogleSheetsConfigured()) return;

  try {
    await appendLeadToSheet(lead, domain);
  } catch (err) {
    console.error("Google Sheets error:", {
      context,
      message: err instanceof Error ? err.message : "Unknown error",
      sheetId: `${process.env.GOOGLE_SHEET_ID?.slice(0, 8)}...`,
      tab: process.env.GOOGLE_SHEET_TAB_NAME,
      timestamp: new Date().toISOString(),
    });
  }
}

/**
 * Webhook is the primary lead path.
 * Sheets: one shared GOOGLE_SHEET_TAB_NAME + Form Type; soft-fail only.
 */
export async function POST(request: Request) {
  const webhookUrl =
    process.env.Lead_notification_url || process.env.LEAD_NOTIFICATION_URL;
  const sheetsConfigured = isGoogleSheetsConfigured();

  if (!webhookUrl?.trim() && !sheetsConfigured) {
    return NextResponse.json(
      {
        error: "NOT_CONFIGURED",
        message: "Set Lead_notification_url and/or Google Sheets env vars.",
      },
      { status: 503 }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const lead = parseLeadWebhookInput(body);
  if (!lead) {
    return NextResponse.json(
      { error: "fullName and email are required" },
      { status: 400 }
    );
  }

  const domain = getSiteDomain();
  const sheetLead = {
    ...lead,
    organisation:
      body && typeof body === "object"
        ? String((body as Record<string, unknown>).organisation || "").trim()
        : "",
    description:
      body && typeof body === "object"
        ? String(
            (body as Record<string, unknown>).description ||
              (body as Record<string, unknown>).message ||
              ""
          ).trim()
        : "",
  };

  if (webhookUrl?.trim()) {
    const webhookOk = await notifyLeadWebhook(lead, webhookUrl);
    if (!webhookOk) {
      return NextResponse.json(
        { error: "Failed to deliver lead" },
        { status: 502 }
      );
    }

    // Soft-fail Sheets — never fail the user after webhook success.
    await softFailAppendSheet(sheetLead, domain, "submit-lead");
    return NextResponse.json({ ok: true });
  }

  // Sheets-only fallback (local/dev): soft-fail so broken Sheets does not hard-block.
  await softFailAppendSheet(sheetLead, domain, "submit-lead-sheets-only");
  return NextResponse.json({ ok: true });
}
