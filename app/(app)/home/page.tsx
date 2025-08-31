﻿// app/(app)/home/page.tsx
import { getSupabaseServer } from "@/lib/supabase/server";

export const metadata = { title: "Home — IN-1" };

export default async function InternalHome() {
  const supabase = await getSupabaseServer();
  const { data: { user } } = await supabase.auth.getUser();

  const name = user?.user_metadata?.name || user?.email?.split("@")[0] || "utente";
  const email = user?.email ?? "";

  return (
    <main className="min-h-[calc(100vh-56px)] flex flex-col items-center justify-center text-center px-4">
      <p className="text-sm text-muted-foreground">Benvenuto</p>
      <h1 className="mt-2 text-5xl font-extrabold tracking-tight">
        Ciao, {name}
      </h1>
      <p className="mt-3 text-muted-foreground">{email}</p>
    </main>
  );
}