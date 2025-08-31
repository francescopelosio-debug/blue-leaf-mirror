// lib/supabase/middleware.ts
import { createServerClient } from "@supabase/ssr";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function updateSession(req: NextRequest) {
  const res = NextResponse.next();

  // usa createServerClient anche in Edge/Middleware
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return req.cookies.getAll();
        },
        setAll(cookies) {
          for (const { name, value, options } of cookies) {
            res.cookies.set(name, value, options);
          }
        },
      },
    }
  );

  // trigger "touch" della sessione
  await supabase.auth.getUser().catch(() => {});

  return res;
}
