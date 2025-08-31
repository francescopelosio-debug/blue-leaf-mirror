// app/(public)/docs-private/page.tsx
export const metadata = { title: "Docs Private — IN-1" };

export default function DocsPrivatePage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      <h1 className="text-3xl font-semibold tracking-tight mb-3">
        Documenti privati
      </h1>
      <p className="text-sm text-muted-foreground">
        Area documenti ad accesso limitato. (Work in progress)
      </p>
      <div className="mt-8 rounded-lg border border-border p-6">
        <p className="text-sm">
          Configura qui l’accesso basato su ruoli o whitelist quando sarà pronto.
        </p>
      </div>
    </main>
  );
}
