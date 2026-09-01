import { NextResponse } from "next/server";
import { isGoogleSheetsConfigured } from "@/lib/google-sheets";
import {
  getSiteDomain,
  notifyLeadWebhook,
  parseLeadWebhookInput,
} from "@/lib/leadNotification";
import { parseLeadBody } from "@/lib/lead-submission";
import {
  appendContactToSheet,
  writeSubmissionToSheetSafely,
} from "@/lib/sheetSubmissions";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * Delivers leads via n8n webhook and/or Google Sheets.
 * Webhook and Sheets are independent — either success is enough for the user.
 */
export async function POST(request: Request) {
  const webhookUrl =
    process.env.Lead_notification_url || process.env.LEAD_NOTIFICATION_URL;
  const sheetsConfigured = isGoogleSheetsConfigured();

  if (!webhookUrl?.trim() && !sheetsConfigured) {
    console.error("[submit-lead] NOT_CONFIGURED — no webhook URL and no Sheets env");
    return NextResponse.json(
      {
        error: "NOT_CONFIGURED",
        message:
          "Set Lead_notification_url and/or GOOGLE_SERVICE_ACCOUNT_EMAIL, GOOGLE_PRIVATE_KEY, GOOGLE_SHEET_ID on Netlify.",
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

  let webhookOk = false;
  if (webhookUrl?.trim()) {
    webhookOk = await notifyLeadWebhook(lead, webhookUrl.trim());
    if (!webhookOk) {
      console.error("[submit-lead] webhook failed — will still attempt Sheets");
    }
  }

  const sheetLead =
    parseLeadBody(body) ?? {
      ...lead,
      organisation: "",
      description: "",
    };

  const writtenToSheet = await writeSubmissionToSheetSafely(
    () => appendContactToSheet(sheetLead),
    "submit-lead"
  );

  if (!webhookOk && !writtenToSheet) {
    console.error("[submit-lead] both webhook and Sheets failed", {
      webhookConfigured: Boolean(webhookUrl?.trim()),
      sheetsConfigured,
      domain: getSiteDomain(),
    });
    return NextResponse.json(
      {
        error: "DELIVERY_FAILED",
        message:
          "Could not deliver your enquiry. Please email us directly or try again shortly.",
      },
      { status: 502 }
    );
  }

  return NextResponse.json({
    ok: true,
    forwarded: webhookOk,
    writtenToSheet,
    domain: getSiteDomain(),
  });
}
