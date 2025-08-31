// app/api/auth/signout/route.ts
import { NextResponse, type NextRequest } from "next/server";
import { createClientForRoute } from "@/lib/supabase/server";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  const supabase = await createClientForRoute();

  // invalida la sessione lato Supabase e pulisce i cookie via adapter
  await supabase.auth.signOut();

  // redirect all'origine della richiesta (dev/prod/LAN)
  return NextResponse.redirect(new URL("/", req.nextUrl.origin), { status: 302 });
}

// (opzionale) supporto anche GET se vuoi fare il logout da link <a>:
// export async function GET(req: NextRequest) { return POST(req); }