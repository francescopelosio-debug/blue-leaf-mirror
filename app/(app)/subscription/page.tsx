﻿// app/(app)/subscription/page.tsx
import { redirect } from "next/navigation";
import { getSupabaseServer } from "@/lib/supabase/server";

export const metadata = { title: "Piano e fatturazione" };

export default async function SubscriptionPage() {
  const supabase = await getSupabaseServer();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/auth/login");

  return (
    <main className="mx-auto max-w-5xl px-4 py-8">
      <h1 className="text-2xl font-semibold">Piano e fatturazione</h1>
      <p className="mt-2 text-muted-foreground">
        Gestione piano utente, upgrade/downgrade e fatture (placeholder).
      </p>
      <div className="mt-6 rounded-lg border border-border p-4">
        <ul className="list-disc pl-6 space-y-1 text-sm">
          <li>Stato piano attuale</li>
          <li>Storico pagamenti</li>
          <li>Azioni: upgrade, downgrade, annulla</li>
        </ul>
      </div>
    </main>
  );
}