import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  formatDateRange,
  formatINR,
  getTripBySlug,
  trips,
} from "@/lib/trips";

export function generateStaticParams() {
  return trips.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const trip = getTripBySlug(slug);
  if (!trip) return { title: "Trip not found" };
  return {
    title: `${trip.title} — ${trip.destination}`,
    description: trip.shortPitch,
  };
}

export default async function TripDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const trip = getTripBySlug(slug);
  if (!trip) notFound();

  const savings = trip.marketPriceINR - trip.pricePerSeatINR;
  const seatsBookedPct = Math.round(
    ((trip.totalSeats - trip.seatsLeft) / trip.totalSeats) * 100
  );

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Breadcrumb */}
      <nav className="mb-6 text-sm text-muted-foreground">
        <Link href="/trips" className="hover:text-foreground">
          ← All trips
        </Link>
      </nav>

      {/* Gallery */}
      <div className="grid gap-2 sm:grid-cols-4 sm:grid-rows-2">
        <div className="relative col-span-2 row-span-2 aspect-[4/3] overflow-hidden rounded-2xl bg-muted sm:aspect-auto">
          <Image
            src={trip.heroImage}
            alt={trip.title}
            fill
            priority
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
        {trip.gallery.slice(0, 4).map((src, i) => (
          <div
            key={src}
            className="relative hidden aspect-[4/3] overflow-hidden rounded-2xl bg-muted sm:block"
          >
            <Image
              src={src}
              alt={`${trip.title} photo ${i + 1}`}
              fill
              sizes="25vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>

      {/* Header + booking layout */}
      <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_360px]">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="outline">{trip.difficulty}</Badge>
            {trip.tags.map((t) => (
              <Badge key={t} variant="secondary">
                {t}
              </Badge>
            ))}
          </div>
          <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            {trip.title}
          </h1>
          <p className="mt-2 text-muted-foreground">
            {trip.destination}, {trip.state} ·{" "}
            {formatDateRange(trip.startDate, trip.endDate)} ·{" "}
            {trip.durationNights}N / {trip.durationDays}D
          </p>

          <p className="mt-6 text-lg leading-relaxed">{trip.longPitch}</p>

          {/* Quick facts */}
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            <Fact label="Dates" value={formatDateRange(trip.startDate, trip.endDate)} />
            <Fact label="Group size" value={`${trip.totalSeats} max`} />
            <Fact label="Difficulty" value={trip.difficulty} />
            <Fact label="Meeting point" value={trip.meetingPoint} />
          </div>

          <Separator className="my-10" />

          {/* Itinerary */}
          <section>
            <h2 className="text-2xl font-bold tracking-tight">
              Day-by-day itinerary
            </h2>
            <ol className="mt-6 space-y-6">
              {trip.itinerary.map((d) => (
                <li
                  key={d.day}
                  className="relative grid gap-2 rounded-2xl border border-border/60 bg-card p-5 sm:grid-cols-[80px_1fr]"
                >
                  <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Day {d.day}
                  </div>
                  <div>
                    <h3 className="text-base font-semibold">{d.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {d.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <Separator className="my-10" />

          {/* Hotel */}
          <section>
            <h2 className="text-2xl font-bold tracking-tight">Where you’ll stay</h2>
            <div className="mt-6 overflow-hidden rounded-2xl border border-border/60 bg-card sm:grid sm:grid-cols-[260px_1fr]">
              <div className="relative aspect-[4/3] sm:aspect-auto sm:h-full">
                <Image
                  src={trip.hotel.image}
                  alt={trip.hotel.name}
                  fill
                  sizes="(min-width: 640px) 260px, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg font-semibold">{trip.hotel.name}</h3>
                  <Badge variant="secondary">★ {trip.hotel.rating}</Badge>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  {trip.hotel.description}
                </p>
              </div>
            </div>
          </section>

          <Separator className="my-10" />

          {/* Inclusions / Exclusions */}
          <section className="grid gap-8 sm:grid-cols-2">
            <div>
              <h2 className="text-xl font-bold tracking-tight">What’s included</h2>
              <ul className="mt-4 space-y-2 text-sm">
                {trip.inclusions.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold">
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-bold tracking-tight">Not included</h2>
              <ul className="mt-4 space-y-2 text-sm">
                {trip.exclusions.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-muted text-muted-foreground text-xs font-bold">
                      ×
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <Separator className="my-10" />

          {/* Host */}
          <section>
            <h2 className="text-2xl font-bold tracking-tight">Your host</h2>
            <div className="mt-6 flex items-start gap-4 rounded-2xl border border-border/60 bg-card p-5">
              <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-full bg-muted">
                <Image
                  src={trip.host.avatar}
                  alt={trip.host.name}
                  fill
                  sizes="64px"
                  className="object-cover"
                />
              </div>
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-lg font-semibold">{trip.host.name}</h3>
                  <Badge variant="secondary">Verified host</Badge>
                </div>
                <p className="text-xs text-muted-foreground">
                  {trip.host.tripsHosted} trips hosted · Joined{" "}
                  {trip.host.joinedYear}
                </p>
                <p className="mt-2 text-sm">{trip.host.bio}</p>
              </div>
            </div>
          </section>
        </div>

        {/* Sticky booking card */}
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <Card className="overflow-hidden">
            <CardContent className="space-y-4 p-6">
              <div>
                <p className="text-xs text-muted-foreground line-through">
                  Solo equivalent: {formatINR(trip.marketPriceINR)}
                </p>
                <div className="mt-1 flex items-end gap-2">
                  <span className="text-3xl font-bold">
                    {formatINR(trip.pricePerSeatINR)}
                  </span>
                  <span className="pb-1 text-sm text-muted-foreground">
                    per seat
                  </span>
                </div>
                <p className="mt-1 text-xs font-semibold text-emerald-700">
                  Save {formatINR(savings)} vs. travelling solo
                </p>
              </div>

              <Separator />

              <div className="space-y-3 text-sm">
                <Row label="Dates" value={formatDateRange(trip.startDate, trip.endDate)} />
                <Row
                  label="Seats left"
                  value={
                    <span
                      className={
                        trip.seatsLeft <= 3
                          ? "font-semibold text-red-600"
                          : "font-medium"
                      }
                    >
                      {trip.seatsLeft} / {trip.totalSeats}
                    </span>
                  }
                />
                <Row label="Duration" value={`${trip.durationNights}N / ${trip.durationDays}D`} />
              </div>

              {/* Seat progress */}
              <div>
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
                  <div
                    className="h-full bg-foreground"
                    style={{ width: `${seatsBookedPct}%` }}
                  />
                </div>
                <p className="mt-1 text-xs text-muted-foreground">
                  {seatsBookedPct}% booked
                </p>
              </div>

              <Button asChild size="lg" className="w-full">
                <Link href={`/trips/${trip.slug}/book`}>Book a seat</Link>
              </Button>

              <p className="text-center text-xs text-muted-foreground">
                Free cancellation up to 14 days before departure.
              </p>
            </CardContent>
          </Card>

          <p className="mt-4 text-center text-xs text-muted-foreground">
            Questions? WhatsApp us at{" "}
            <span className="font-medium">+91 90000 00000</span>
          </p>
        </aside>
      </div>
    </div>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-border/60 bg-card p-3">
      <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
        {label}
      </p>
      <p className="mt-1 text-sm font-medium leading-tight">{value}</p>
    </div>
  );
}

function Row({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-muted-foreground">{label}</span>
      <span>{value}</span>
    </div>
  );
}
