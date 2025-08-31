﻿// app/(app)/support/page.tsx
import { redirect } from "next/navigation";
import { getSupabaseServer } from "@/lib/supabase/server";

export const metadata = { title: "Supporto interno" };

export default async function SupportPage() {
  const supabase = await getSupabaseServer();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/auth/login");

  return (
    <main className="mx-auto max-w-5xl px-4 py-8">
      <h1 className="text-2xl font-semibold">Supporto interno</h1>
      <p className="mt-2 text-muted-foreground">
        Spazio per ticket, guide e contatti interni (placeholder).
      </p>
      <div className="mt-6 rounded-lg border border-border p-4">
        <p className="text-sm">Work in progress.</p>
      </div>
    </main>
  );
}