﻿// app/auth/layout.tsx
import type { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <main className="mx-auto max-w-xl px-4 py-12">
      <div className="rounded-2xl border border-border bg-background p-6 shadow-sm">
        {children}
      </div>
    </main>
  );
}