import { NextResponse } from "next/server";
import { createServerClient } from "@/lib/supabase/server";
import { validateEnv } from "@/lib/env";

export async function GET() {
  const envCheck = validateEnv();
  if (!envCheck.valid) {
    return NextResponse.json(
      {
        status: "error",
        message: "Missing environment variables",
        missing: envCheck.missing,
      },
      { status: 500 }
    );
  }

  try {
    const supabase = createServerClient();
    const { error } = await supabase
      .from("searches")
      .select("id")
      .limit(1);

    if (error && error.code === "PGRST116") {
      return NextResponse.json({
        status: "ok",
        message: "Supabase connected. Table 'searches' exists but is empty.",
        timestamp: new Date().toISOString(),
      });
    }

    if (error) {
      throw error;
    }

    return NextResponse.json({
      status: "ok",
      message: "Supabase connected and responding.",
      timestamp: new Date().toISOString(),
    });
  } catch (err) {
    return NextResponse.json(
      {
        status: "error",
        message: "Supabase connection failed.",
        detail: err instanceof Error ? err.message : String(err),
        hint: "Run the migration script at supabase/migrations/001_create_tables.sql in the Supabase SQL Editor.",
      },
      { status: 500 }
    );
  }
}
