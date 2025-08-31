﻿// app/(app)/home-dashboard/page.tsx
import Link from "next/link";
import { getSupabaseServer } from "@/lib/supabase/server";

export const metadata = { title: "Dashboard — IN-1" };

export default async function HomeDashboard() {
  const supabase = await getSupabaseServer();
  const { data: { user } } = await supabase.auth.getUser();
  const email = user?.email ?? "utente";

  const Card = ({
    title,
    desc,
    href,
  }: { title: string; desc: string; href: string }) => (
    <Link
      href={href}
      className="block rounded-2xl border border-border p-5 transition hover:bg-muted/60"
    >
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
    </Link>
  );

  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <p className="text-muted-foreground">Benvenuto</p>
      <h1 className="mt-2 text-5xl font-extrabold tracking-tight">
        Cosa ti piacerebbe fare oggi?
      </h1>
      <p className="mt-3 text-muted-foreground">
        Sei connesso come <span className="font-medium">{email}</span>.
      </p>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card
          title="Documenti interni"
          desc="Linee guida, specifiche tecniche e note di progetto."
          href="/app-docs"
        />
        <Card
          title="Libreria"
          desc="File e contenuti interni organizzati."
          href="/library"
        />
        <Card
          title="Piano e fatturazione"
          desc="Gestisci il tuo piano e consulta le fatture."
          href="/subscription"
        />
        <Card
          title="Supporto"
          desc="Apri ticket, leggi le guide di supporto."
          href="/support"
        />
      </div>

      <section className="mt-12 rounded-2xl border border-border p-6">
        <h2 className="text-xl font-semibold">Attività rapide</h2>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link className="px-3 py-2 rounded border border-border hover:bg-muted/60 text-sm" href="/app-docs">
            Apri Documenti
          </Link>
          <Link className="px-3 py-2 rounded border border-border hover:bg-muted/60 text-sm" href="/docs">
            Docs pubblici
          </Link>
        </div>
      </section>
    </main>
  );
}