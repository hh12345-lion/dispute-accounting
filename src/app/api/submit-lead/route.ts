import { NextResponse } from "next/server";
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

/**
 * Webhook primary, then soft-fail Sheets on the same request.
 * (Live /api/contact was 404 on Netlify — sheet writes must not depend on it alone.)
 */
export async function POST(request: Request) {
  const webhookUrl =
    process.env.Lead_notification_url || process.env.LEAD_NOTIFICATION_URL;

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
    webhookOk = await notifyLeadWebhook(lead, webhookUrl);
    if (!webhookOk) {
      return NextResponse.json(
        { error: "Failed to deliver lead" },
        { status: 502 }
      );
    }
  } else {
    console.warn(
      "[submit-lead] Lead_notification_url not set — continuing with Sheets fallback"
    );
  }

  // Soft-fail Sheets on this path so thank-you + sheet stay in sync.
  const sheetLead = parseLeadBody(body) ?? {
    ...lead,
    organisation: "",
    description: "",
  };
  const writtenToSheet = await writeSubmissionToSheetSafely(
    () => appendContactToSheet(sheetLead),
    "submit-lead"
  );

  if (!webhookOk && !writtenToSheet) {
    return NextResponse.json(
      {
        error: "Lead storage is not configured",
        message:
          "Set Lead_notification_url and/or Google Sheets env vars on Netlify.",
      },
      { status: 503 }
    );
  }

  return NextResponse.json({
    ok: true,
    forwarded: webhookOk,
    writtenToSheet,
    domain: getSiteDomain(),
  });
}
