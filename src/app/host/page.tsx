import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { HostWaitlistForm } from "@/components/host-waitlist-form";

export const metadata: Metadata = {
  title: "Host a trip",
  description:
    "Hosting on Tripmates opens in waves. Join the host waitlist to be one of the first to publish your own trip.",
};

const PERKS = [
  {
    title: "Bring your audience, we bring the rest",
    description:
      "We handle payments, refunds, group chat setup, customer support and legal — you focus on running an unforgettable trip.",
  },
  {
    title: "Keep more of what you earn",
    description:
      "10% platform fee. No listing fee, no subscription. Payouts after the trip ends.",
  },
  {
    title: "Built-in trust",
    description:
      "Verified-host badge, joiner reviews, ID verification on every booking — so people actually trust you with their plans.",
  },
];

const REQUIREMENTS = [
  "At least 21 years old",
  "Valid government-issued ID (Aadhaar / Passport / Driving License)",
  "Past travel / event organising experience (formal or informal)",
  "Comfortable communicating with a group on WhatsApp",
  "Plan trips within India (international hosting coming later)",
];

export default function HostPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-muted/30">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-24">
          <div>
            <Badge variant="secondary">Hosting opens soon — Q3 2026</Badge>
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Turn the trip you’d already plan into a business.
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              For now, every trip on Tripmates is hosted by the founders. We’re
              gradually opening up to invited hosts — micro-creators,
              ex-tour-guides and just plain great planners. Get on the waitlist.
            </p>
            <ul className="mt-6 space-y-2 text-sm">
              {[
                "Average host earns ₹40,000–₹1,20,000 per trip",
                "We run a private onboarding call with every approved host",
                "Bring your own group or list publicly — your choice",
              ].map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span className="mt-1.5 inline-block h-2 w-2 flex-shrink-0 rounded-full bg-foreground" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
            <Image
              src="https://images.unsplash.com/photo-1530789253388-582c481c54b0?w=1200&h=1500&fit=crop&q=80"
              alt="A trip host with a small group"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 600px, 100vw"
            />
          </div>
        </div>
      </section>

      {/* Perks */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
          Why host with Tripmates
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {PERKS.map((p) => (
            <Card key={p.title}>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {p.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Requirements + Waitlist */}
      <section className="bg-muted/30">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Who we’re looking for
            </h2>
            <ul className="mt-6 space-y-3 text-sm">
              {REQUIREMENTS.map((r) => (
                <li key={r} className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold">
                    ✓
                  </span>
                  <span>{r}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 rounded-2xl border border-dashed border-border bg-background p-5 text-sm text-muted-foreground">
              Wondering how we set prices, handle refunds, or what the platform
              fee covers? Read the{" "}
              <Link href="/about" className="font-medium text-foreground underline">
                trust &amp; safety policy
              </Link>{" "}
              first.
            </div>
          </div>

          <div>
            <Card>
              <CardContent className="p-6 sm:p-8">
                <h3 className="text-xl font-semibold">Join the host waitlist</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Takes 60 seconds. We&apos;ll reach out as we open hosting.
                </p>
                <HostWaitlistForm />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-foreground px-8 py-12 text-center text-background sm:px-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Not ready to host yet? Travel with us first.
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-background/80">
            Join a Tripmates trip as a guest to see exactly how we run things —
            the best hosts are usually the best joiners first.
          </p>
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="mt-6 bg-background text-foreground hover:bg-background/90"
          >
            <Link href="/trips">Browse trips</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
