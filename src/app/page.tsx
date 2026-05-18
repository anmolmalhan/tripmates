import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TripCard } from "@/components/trip-card";
import { trips } from "@/lib/trips";

const HOW_IT_WORKS = [
  {
    step: "1",
    title: "Find a trip you love",
    description:
      "Browse curated trips with fixed dates, pre-booked hotels and a day-by-day itinerary. No back-and-forth planning.",
  },
  {
    step: "2",
    title: "Book your seat",
    description:
      "Pay the per-seat price online. Get instantly added to the trip's WhatsApp group to meet your tripmates.",
  },
  {
    step: "3",
    title: "Show up & travel",
    description:
      "Arrive at the meeting point on day 1. Everything from stays to transfers is handled. Make friends, make memories.",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "I'd been wanting to visit Spiti for years but my friends kept cancelling. Booked a seat with Tripmates, met 7 strangers who are now genuine friends. Worth every rupee.",
    name: "Priya R.",
    role: "Product designer, Bengaluru",
  },
  {
    quote:
      "The price for the Goa villa trip was unreal. I'd never afford that house on my own. The group was a great mix and the host knew every shortcut.",
    name: "Arjun M.",
    role: "Software engineer, Pune",
  },
  {
    quote:
      "As a solo female traveller, the verified host + group format was exactly what I needed to feel safe. Will be back for the Kerala trip.",
    name: "Neha K.",
    role: "Photographer, Mumbai",
  },
];

export default function Home() {
  const featured = trips.slice(0, 3);

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=2000&h=1200&fit=crop&q=80"
            alt=""
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-background" />
        </div>

        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
          <div className="max-w-2xl">
            <Badge
              variant="secondary"
              className="bg-white/90 text-foreground backdrop-blur"
            >
              India&apos;s new way to travel together
            </Badge>
            <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Travel together. Make friends. Save money.
            </h1>
            <p className="mt-5 max-w-xl text-lg text-white/85">
              Friends keep cancelling? Join a curated group trip with fixed
              dates, pre-booked hotels and verified hosts. Pay per seat. Show
              up. Travel.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href="/trips">Browse upcoming trips</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="bg-white/90 text-foreground hover:bg-white"
              >
                <Link href="/about">How it works</Link>
              </Button>
            </div>

            <dl className="mt-10 flex flex-wrap gap-x-10 gap-y-4 text-white/90">
              <div>
                <dt className="text-xs uppercase tracking-wider text-white/70">
                  Avg savings
                </dt>
                <dd className="text-2xl font-bold">30%+</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wider text-white/70">
                  Hosted trips
                </dt>
                <dd className="text-2xl font-bold">12+</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wider text-white/70">
                  Happy joiners
                </dt>
                <dd className="text-2xl font-bold">140+</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            How Tripmates works
          </h2>
          <p className="mt-3 text-muted-foreground">
            Group travel, designed for solo travellers and small friend circles.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {HOW_IT_WORKS.map((s) => (
            <div
              key={s.step}
              className="relative rounded-2xl border border-border/60 bg-card p-6 transition-shadow hover:shadow-md"
            >
              <span className="absolute -top-4 left-6 inline-flex h-9 w-9 items-center justify-center rounded-full bg-foreground text-base font-bold text-background">
                {s.step}
              </span>
              <h3 className="mt-3 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured trips */}
      <section className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Trips you can join right now
            </h2>
            <p className="mt-2 text-muted-foreground">
              Curated and led by Tripmates founders. Small groups, fixed
              departures.
            </p>
          </div>
          <Button asChild variant="ghost" className="hidden sm:inline-flex">
            <Link href="/trips">View all →</Link>
          </Button>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((t) => (
            <TripCard key={t.slug} trip={t} />
          ))}
        </div>

        <div className="mt-10 flex justify-center sm:hidden">
          <Button asChild>
            <Link href="/trips">View all trips</Link>
          </Button>
        </div>
      </section>

      {/* Why Tripmates */}
      <section className="bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Built for the &quot;my friends always cancel&quot; problem
              </h2>
              <p className="mt-4 text-muted-foreground">
                We started Tripmates because every trip we tried to plan got
                killed by excuses. So we flipped it — we&apos;ll plan the trip,
                pre-book the hotels, fix the dates. You show up, and meet
                strangers who become friends.
              </p>
              <ul className="mt-6 space-y-3 text-sm">
                {[
                  "Verified hosts. Every trip is run by a real person whose ID we’ve checked.",
                  "Fixed price per seat. No hidden charges, no surprise upgrades.",
                  "Small groups. We cap most trips at 8–12 people for a reason.",
                  "Refund protection. Cancel up to 14 days before, get most of your money back.",
                ].map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3">
                    <span className="mt-1.5 inline-block h-2 w-2 flex-shrink-0 rounded-full bg-emerald-600" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
              <Button asChild className="mt-8">
                <Link href="/about">Read our trust &amp; safety policy</Link>
              </Button>
            </div>

            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
              <Image
                src="https://images.unsplash.com/photo-1530789253388-582c481c54b0?w=1200&h=1500&fit=crop&q=80"
                alt="Group of friends travelling together"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
          People who took the leap
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col justify-between rounded-2xl border border-border/60 bg-card p-6"
            >
              <blockquote className="text-sm leading-relaxed text-foreground/90">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6">
                <p className="text-sm font-semibold">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="mx-auto w-full max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl bg-foreground text-background">
          <div className="grid items-center gap-8 px-8 py-14 sm:px-12 md:grid-cols-[1.5fr_1fr]">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Your next trip starts with a single seat.
              </h2>
              <p className="mt-3 text-background/80">
                Pick a trip, pay online, and meet your group on the WhatsApp
                chat before you even land.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="bg-background text-foreground hover:bg-background/90"
              >
                <Link href="/trips">Browse trips</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-background/30 bg-transparent text-background hover:bg-background/10"
              >
                <Link href="/host">Host a trip</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
