import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-border/60 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-1">
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
            <p className="mt-3 text-sm text-muted-foreground">
              Travel together. Make friends. Save money. Curated group trips
              across India with verified hosts.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold">Explore</h4>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/trips" className="hover:text-foreground">
                  All trips
                </Link>
              </li>
              <li>
                <Link href="/trips" className="hover:text-foreground">
                  Mountains
                </Link>
              </li>
              <li>
                <Link href="/trips" className="hover:text-foreground">
                  Beaches
                </Link>
              </li>
              <li>
                <Link href="/trips" className="hover:text-foreground">
                  Weekend escapes
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold">Company</h4>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/about" className="hover:text-foreground">
                  How it works
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-foreground">
                  Trust &amp; safety
                </Link>
              </li>
              <li>
                <Link href="/host" className="hover:text-foreground">
                  Host with us
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-foreground">
                  Cancellation policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold">Get in touch</h4>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>hello@tripmates.in</li>
              <li>WhatsApp: +91 90000 00000</li>
              <li>Bengaluru, India</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-border/60 pt-6 text-xs text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} Tripmates Technologies Pvt. Ltd.</p>
          <p>Prototype build — for demonstration purposes only.</p>
        </div>
      </div>
    </footer>
  );
}
