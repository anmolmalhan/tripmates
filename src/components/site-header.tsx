import Link from "next/link";
import { Button } from "@/components/ui/button";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <span
            aria-hidden
            className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-foreground text-background text-sm font-bold"
          >
            T
          </span>
          <span className="text-lg font-semibold tracking-tight">
            Tripmates
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          <Link
            href="/trips"
            className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Browse trips
          </Link>
          <Link
            href="/host"
            className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Host a trip
          </Link>
          <Link
            href="/about"
            className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            How it works
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild variant="ghost" size="sm" className="hidden sm:inline-flex">
            <Link href="/about">Trust &amp; safety</Link>
          </Button>
          <Button asChild size="sm">
            <Link href="/trips">Find a trip</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
