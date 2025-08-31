﻿// app/(app)/layout.tsx
import type { ReactNode } from "react";
import AppHeader from "@/components/app-header";
import { getSupabaseServer } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
};

export default async function AppLayout({ children }: { children: ReactNode }) {
  // Guard SSR globale per l'area app
  const supabase = await getSupabaseServer();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/auth/login");

  return (
    <>
      <AppHeader />
      {children}
    </>
  );
}