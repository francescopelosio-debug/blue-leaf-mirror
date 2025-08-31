// lib/supabase/server.ts
import { cookies } from "next/headers";
import { createServerClient, type CookieOptions } from "@supabase/ssr";

/**
 * RSC/Layouts: client read-only (NO cookie writes during render).
 */
export async function getSupabaseServer() {
  const cookieStore = await cookies();

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value;
        },
        // NO-OP in RSC to avoid "Cookies can only be modified..." during render
        set(name: string, value: string, options: CookieOptions) {
          void name; void value; void options;
        },
        remove(name: string, options: CookieOptions) {
          void name; void options;
        },
      },
    }
  );
}

/**
 * Route Handlers (e.g., app/api/*, auth/confirm): full read/write adapter.
 */
export async function createClientForRoute() {
  const cookieStore = await cookies();

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value;
        },
        set(name: string, value: string, options: CookieOptions) {
          const path = options?.path ?? "/";
          cookieStore.set({ name, value, ...(options ?? {}), path });
        },
        remove(name: string, options: CookieOptions) {
          const path = options?.path ?? "/";
          cookieStore.set({ name, value: "", ...(options ?? {}), path, maxAge: 0 });
        },
      },
    }
  );
}