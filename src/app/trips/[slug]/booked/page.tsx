import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
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

export const metadata: Metadata = { title: "You're in!" };

export default async function BookedPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const trip = getTripBySlug(slug);
  if (!trip) notFound();

  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="text-center">
        <div className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-3xl">
          🎉
        </div>
        <h1 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">
          You&apos;re on the trip!
        </h1>
        <p className="mt-3 text-muted-foreground">
          Booking confirmed. Your host will reach out on WhatsApp within 24
          hours.
        </p>
      </div>

      <Card className="mt-10 overflow-hidden">
        <div className="relative aspect-[16/9] w-full">
          <Image
            src={trip.heroImage}
            alt={trip.title}
            fill
            sizes="(min-width: 768px) 768px, 100vw"
            className="object-cover"
          />
        </div>
        <CardContent className="space-y-5 p-6">
          <div>
            <h2 className="text-xl font-semibold">{trip.title}</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              {trip.destination}, {trip.state} ·{" "}
              {formatDateRange(trip.startDate, trip.endDate)}
            </p>
          </div>

          <Separator />

          <div className="grid gap-3 text-sm sm:grid-cols-2">
            <Row label="Booking ID" value={`TM-${trip.slug.slice(0, 4).toUpperCase()}-${Math.floor(Math.random() * 9000 + 1000)}`} />
            <Row label="Amount paid" value={formatINR(trip.pricePerSeatINR)} />
            <Row label="Meeting point" value={trip.meetingPoint} />
            <Row label="Host" value={trip.host.name} />
          </div>

          <Separator />

          <div className="rounded-xl bg-muted/60 p-4">
            <h3 className="text-sm font-semibold">Next steps</h3>
            <ol className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>
                <span className="font-medium text-foreground">1.</span> Join
                your trip WhatsApp group to meet your tripmates.
              </li>
              <li>
                <span className="font-medium text-foreground">2.</span> Upload a
                photo of your government ID (Aadhaar / Passport) for safety
                verification.
              </li>
              <li>
                <span className="font-medium text-foreground">3.</span> Your
                host will share a packing list and arrival details one week
                before departure.
              </li>
            </ol>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="#"
              className="inline-flex h-11 flex-1 items-center justify-center rounded-md bg-emerald-600 px-6 text-sm font-medium text-white shadow-xs transition-colors hover:bg-emerald-700"
            >
              Join WhatsApp group →
            </a>
            <Button asChild size="lg" variant="outline" className="flex-1">
              <Link href="/trips">Browse more trips</Link>
            </Button>
          </div>
        </CardContent>
      </Card>

      <p className="mt-8 text-center text-xs text-muted-foreground">
        Need to cancel or change something? Reach us on WhatsApp at +91 90000
        00000.
      </p>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
        {label}
      </p>
      <p className="mt-0.5 text-sm font-medium">{value}</p>
    </div>
  );
}
