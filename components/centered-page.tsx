// components/centered-page.tsx
type Props = { title: string; subtitle?: string };

export default function CenteredPage({ title, subtitle }: Props) {
  return (
    <main className="min-h-[calc(100vh-56px)] mx-auto max-w-6xl px-4 grid place-items-center">
      <div className="text-center space-y-3 -translate-y-[12vh] md:-translate-y-[20vh]">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">{title}</h1>
        <p className="text-sm text-muted-foreground">{subtitle ?? `Developing — ${title}`}</p>
      </div>
    </main>
  );
}
