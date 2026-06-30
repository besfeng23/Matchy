import { NextResponse } from "next/server";
import { getSafeRuntimeStatus } from "@/lib/env";

export const dynamic = "force-dynamic";

export function GET() {
  return NextResponse.json({
    ok: true,
    timestamp: new Date().toISOString(),
    ...getSafeRuntimeStatus(),
  });
}
