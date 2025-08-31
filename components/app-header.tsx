import Link from "next/link";
import Image from "next/image";
import { getSupabaseServer } from "@/lib/supabase/server";
import { Button } from "@/components/ui/button";

export default async function AppHeader() {
  const supabase = await getSupabaseServer();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const logoHref = user ? "/home" : "/";

  return (
    <header className="w-full border-b border-border">
      <div className="mx-auto max-w-[1500px] px-4 lg:px-6 h-14 flex items-center justify-between">
        {/* SX: logo + menu */}
        <div className="flex items-center gap-3">
          <Link href={logoHref} prefetch={false} aria-label="IN-1 Home">
            <Image
              src="https://ugebsykwgffsquxmqwdn.supabase.co/storage/v1/object/public/media/logos/logo-light.png"
              alt="IN-1 Logo Light"
              width={36}
              height={36}
              priority
              unoptimized
              className="block dark:hidden"
            />
            <Image
              src="https://ugebsykwgffsquxmqwdn.supabase.co/storage/v1/object/public/media/logos/logo-dark.png"
              alt="IN-1 Logo Dark"
              width={36}
              height={36}
              priority
              unoptimized
              className="hidden dark:block"
            />
          </Link>

          <nav className="flex items-center gap-2">
            {user && (
              <>
                <Link
                  href="/in1-test"
                  className="px-2 py-1 rounded hover:bg-muted/60 text-sm"
                >
                  IN1 Test
                </Link>
                <Link
                  href="/app-docs"
                  className="px-2 py-1 rounded hover:bg-muted/60 text-sm"
                >
                  Documenti
                </Link>
                <Link
                  href="/library"
                  className="px-2 py-1 rounded hover:bg-muted/60 text-sm"
                >
                  Libreria
                </Link>
                <Link
                  href="/home-dashboard"
                  className="px-2 py-1 rounded hover:bg-muted/60 text-sm"
                >
                  Dashboard
                </Link>
                <Link
                  href="/support"
                  className="px-2 py-1 rounded hover:bg-muted/60 text-sm"
                >
                  Supporto
                </Link>
              </>
            )}
          </nav>
        </div>

        {/* DX: stato utente / azioni */}
        <div className="flex items-center gap-2">
          {user ? (
            <>
              <span className="text-muted-foreground hidden sm:inline">
                {user.email}
              </span>
              <form action="/api/auth/signout" method="post">
                <Button type="submit" className="h-8">
                  Logout
                </Button>
              </form>
            </>
          ) : (
            <>
              <Link href="/auth/login">
                <Button className="h-8">Accedi</Button>
              </Link>
              <Link href="/auth/sign-up">
                <Button variant="outline" className="h-8">
                  Crea account
                </Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
