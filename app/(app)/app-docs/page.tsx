﻿// app/(app)/app-docs/page.tsx
import { redirect } from "next/navigation";
import { getSupabaseServer } from "@/lib/supabase/server";

export const metadata = {
  title: "Documenti interni",
};

export default async function AppDocsPage() {
  const supabase = await getSupabaseServer();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) redirect("/auth/login");

  return (
    <main className="mx-auto max-w-5xl px-4 py-8">
      <h1 className="text-2xl font-semibold">Documenti interni</h1>
      <p className="mt-2 text-muted-foreground">
        Area riservata. Qui collegheremo l’indice privato e i documenti dell’app.
      </p>
      <div className="mt-6 rounded-lg border border-border p-4">
        <ul className="list-disc pl-6 space-y-1 text-sm">
          <li>Linee guida team</li>
          <li>Spec tecniche</li>
          <li>Roadmap</li>
        </ul>
      </div>
    </main>
  );
}