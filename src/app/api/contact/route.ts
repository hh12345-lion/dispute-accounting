import { NextResponse } from "next/server";
import { parseLeadBody } from "@/lib/lead-submission";
import {
  appendContactToSheet,
  writeSubmissionToSheetSafely,
} from "@/lib/sheetSubmissions";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/** Alternate Sheets-only endpoint (same row shape as submit-lead). */
export async function POST(request: Request) {
  try {
    let body: unknown;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
    }

    const lead = parseLeadBody(body);
    if (!lead) {
      return NextResponse.json(
        { error: "fullName and email are required" },
        { status: 400 }
      );
    }

    const writtenToSheet = await writeSubmissionToSheetSafely(
      () => appendContactToSheet(lead),
      "contact"
    );

    return NextResponse.json({
      ok: true,
      writtenToSheet,
    });
  } catch (error) {
    console.error("[contact] unexpected error:", error);
    return NextResponse.json({ ok: false, writtenToSheet: false }, { status: 500 });
  }
}
