// app/page.tsx
import { redirect } from "next/navigation";
import { getSupabaseServer } from "@/lib/supabase/server";
import NextImage from "next/image";

export default async function Home() {
  const supabase = await getSupabaseServer();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) redirect("/home");

  return (
    <>

      <main className="min-h-[calc(100vh-56px)] mx-auto max-w-6xl px-4 grid place-items-center">
        <div className="text-center space-y-4 -translate-y-[12vh] md:-translate-y-[20vh]">
          {/* Logo grande */}
          <div className="flex justify-center">
            <NextImage
              src="https://ugebsykwgffsquxmqwdn.supabase.co/storage/v1/object/public/media/logos/logo-light.png"
              alt="IN-1 Logo"
              width={96}
              height={96}
              priority
              unoptimized
              className="block dark:hidden"
            />
            <NextImage
              src="https://ugebsykwgffsquxmqwdn.supabase.co/storage/v1/object/public/media/logos/logo-dark.png"
              alt="IN-1 Logo Dark"
              width={96}
              height={96}
              priority
              unoptimized
              className="hidden dark:block"
            />
          </div>

          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Evolve different
          </h1>
          <p className="text-xs text-muted-foreground font-mono">
            Accedi o registrati per iniziare
          </p>
        </div>
      </main>
    </>
  );
}
