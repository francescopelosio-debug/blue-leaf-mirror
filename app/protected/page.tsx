// app/protected/page.tsx
import { redirect } from "next/navigation";
import { getSupabaseServer } from "@/lib/supabase/server";
import { InfoIcon } from "lucide-react";
import { FetchDataSteps } from "@/components/tutorial/fetch-data-steps";

export const metadata = { title: "Protected — IN-1" };

export default async function ProtectedPage() {
  const supabase = await getSupabaseServer();

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    redirect("/");
  }

  const user = session.user;

  return (
    <main className="mx-auto max-w-3xl px-4 py-12 space-y-6">
      <h1 className="text-2xl font-semibold">Protected</h1>
      <p className="text-sm text-muted-foreground flex items-center gap-2">
        <InfoIcon className="h-4 w-4" />
        Logged in as {user.email}
      </p>

      {/* (opzionale) tutorial widget già presente nel tuo repo */}
      <FetchDataSteps />
    </main>
  );
}
