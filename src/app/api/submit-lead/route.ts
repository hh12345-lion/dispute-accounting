import { NextResponse } from "next/server";
import {
  getSiteDomain,
  notifyLeadWebhook,
  parseLeadWebhookInput,
} from "@/lib/leadNotification";

/**
 * Webhook-only lead path (primary).
 * Sheets + email soft-fail via /api/contact (shared tab + Form Type).
 */
export async function POST(request: Request) {
  const webhookUrl =
    process.env.Lead_notification_url || process.env.LEAD_NOTIFICATION_URL;

  if (!webhookUrl?.trim()) {
    return NextResponse.json(
      {
        error: "WEBHOOK_MISSING",
        message: "Lead_notification_url / LEAD_NOTIFICATION_URL is not set.",
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

  const webhookOk = await notifyLeadWebhook(lead, webhookUrl);
  if (!webhookOk) {
    return NextResponse.json(
      { error: "Failed to deliver lead" },
      { status: 502 }
    );
  }

  return NextResponse.json({
    ok: true,
    domain: getSiteDomain(),
  });
}
