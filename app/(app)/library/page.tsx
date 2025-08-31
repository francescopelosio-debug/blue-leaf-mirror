﻿// app/(app)/library/page.tsx
import { redirect } from "next/navigation";
import { getSupabaseServer } from "@/lib/supabase/server";

export const metadata = { title: "Libreria interna" };

export default async function LibraryPage() {
  const supabase = await getSupabaseServer();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/auth/login");

  return (
    <main className="mx-auto max-w-5xl px-4 py-8">
      <h1 className="text-2xl font-semibold">Libreria interna</h1>
      <p className="mt-2 text-muted-foreground">
        Qui collegheremo i contenuti interni (documenti, file, indici privati).
      </p>
      <div className="mt-6 rounded-lg border border-border p-4">
        <p className="text-sm">Placeholder iniziale.</p>
      </div>
    </main>
  );
}