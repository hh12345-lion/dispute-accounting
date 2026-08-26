import { NextResponse } from "next/server";
import { isGoogleSheetsConfigured } from "@/lib/google-sheets";
import {
  getSiteDomain,
  notifyLeadWebhook,
  parseLeadWebhookInput,
} from "@/lib/leadNotification";
import { appendLeadToSheet } from "@/lib/lead-submission";

export async function POST(request: Request) {
  const webhookUrl =
    process.env.Lead_notification_url || process.env.LEAD_NOTIFICATION_URL;
  const sheetsConfigured = isGoogleSheetsConfigured();

  if (!webhookUrl && !sheetsConfigured) {
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

  if (sheetsConfigured) {
    try {
      await appendLeadToSheet(
        {
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
        },
        domain
      );
    } catch (err) {
      console.error("Google Sheets write failed:", {
        message: err instanceof Error ? err.message : "Unknown error",
        sheetId: `${process.env.GOOGLE_SHEET_ID?.slice(0, 8)}...`,
        tab: process.env.GOOGLE_SHEET_TAB_NAME,
        timestamp: new Date().toISOString(),
      });
      if (!webhookUrl) {
        return NextResponse.json(
          { error: "Failed to save submission" },
          { status: 502 }
        );
      }
    }
  }

  if (webhookUrl) {
    const webhookOk = await notifyLeadWebhook(lead, webhookUrl);
    if (!webhookOk && !sheetsConfigured) {
      return NextResponse.json(
        { error: "Failed to deliver lead" },
        { status: 502 }
      );
    }
  }

  return NextResponse.json({ ok: true });
}
