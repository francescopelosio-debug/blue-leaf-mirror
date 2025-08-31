// components/public-header.tsx
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function PublicHeader() {
  return (
    <header className="w-full border-b border-border">
      <div className="mx-auto max-w-[1500px] px-4 lg:px-6 h-14 flex items-center justify-between">
        {/* Sinistra: logo + nav */}
        <div className="flex items-center gap-3">
          <Link href="/" prefetch={false} aria-label="IN-1 Home">
            <Image
              src="https://ugebsykwgffsquxmqwdn.supabase.co/storage/v1/object/public/media/logos/logo-light.png"
              alt="IN-1 Logo Light" width={36} height={36}
              priority unoptimized className="block dark:hidden"
            />
            <Image
              src="https://ugebsykwgffsquxmqwdn.supabase.co/storage/v1/object/public/media/logos/logo-dark.png"
              alt="IN-1 Logo Dark" width={36} height={36}
              priority unoptimized className="hidden dark:block"
            />
          </Link>

          <nav className="flex items-center gap-2">
            <Link href="/documenti" prefetch={false} className="px-2 py-1 rounded hover:bg-muted/60 text-sm">
              Documenti
            </Link>
            <Link href="/contattaci" prefetch={false} className="px-2 py-1 rounded hover:bg-muted/60 text-sm">
              Contattaci
            </Link>
          </nav>
        </div>

        {/* Destra: CTA public */}
        <div className="flex items-center gap-2">
          <Link href="/auth/login"><Button className="h-8">Accedi</Button></Link>
          <Link href="/auth/sign-up"><Button variant="outline" className="h-8">Crea account</Button></Link>
        </div>
      </div>
    </header>
  );
}
