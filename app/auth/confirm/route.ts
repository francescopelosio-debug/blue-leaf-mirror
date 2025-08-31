// app/auth/confirm/route.ts
import { createClientForRoute } from "@/lib/supabase/server";
import { type EmailOtpType } from "@supabase/supabase-js";
import { NextResponse, type NextRequest } from "next/server";

export const runtime = "nodejs";

export async function GET(req: NextRequest) {
  const supabase = await createClientForRoute();
  const url = new URL(req.url);

  // Forziamo SEMPRE la landing post-login a /home
  const next = "/home";

  // Nuovo flusso: ?code=
  const code = url.searchParams.get("code");
  if (code) {
    const { error } = await supabase.auth.exchangeCodeForSession(code);
    if (error) {
      return NextResponse.redirect(
        new URL(`/auth/login?error=${encodeURIComponent(error.message)}`, url.origin),
        { status: 302 }
      );
    }
    return NextResponse.redirect(new URL(next, url.origin), { status: 302 });
  }

  // Fallback vecchio: ?token_hash=&type=
  const token_hash = url.searchParams.get("token_hash");
  const type = url.searchParams.get("type") as EmailOtpType | null;
  if (token_hash && type) {
    const { error } = await supabase.auth.verifyOtp({ token_hash, type });
    if (error) {
      return NextResponse.redirect(
        new URL(`/auth/login?error=${encodeURIComponent(error.message)}`, url.origin),
        { status: 302 }
      );
    }
    return NextResponse.redirect(new URL(next, url.origin), { status: 302 });
  }

  return NextResponse.redirect(new URL("/auth/login", url.origin), { status: 302 });
}