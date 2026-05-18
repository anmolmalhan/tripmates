import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { BookingForm } from "@/components/booking-form";
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
  return { title: trip ? `Book ${trip.title}` : "Book a trip" };
}

export default async function BookTripPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const trip = getTripBySlug(slug);
  if (!trip) notFound();

  const platformFee = Math.round(trip.pricePerSeatINR * 0.05);
  const gst = Math.round((trip.pricePerSeatINR + platformFee) * 0.05);
  const total = trip.pricePerSeatINR + platformFee + gst;

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <nav className="mb-6 text-sm text-muted-foreground">
        <Link href={`/trips/${trip.slug}`} className="hover:text-foreground">
          ← Back to trip
        </Link>
      </nav>

      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
        Book your seat
      </h1>
      <p className="mt-2 text-muted-foreground">
        Step 1 of 1 · Prototype mode — no real charge will be made.
      </p>

      <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_380px]">
        <BookingForm slug={trip.slug} />

        <aside>
          <Card className="overflow-hidden lg:sticky lg:top-24">
            <div className="relative aspect-[16/9] w-full">
              <Image
                src={trip.heroImage}
                alt={trip.title}
                fill
                sizes="380px"
                className="object-cover"
              />
            </div>
            <CardContent className="space-y-4 p-6">
              <div>
                <h3 className="text-lg font-semibold leading-tight">
                  {trip.title}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {trip.destination}, {trip.state}
                </p>
                <p className="mt-1 text-sm">
                  {formatDateRange(trip.startDate, trip.endDate)}
                </p>
              </div>

              <Separator />

              <div className="space-y-2 text-sm">
                <Row label="Seat price" value={formatINR(trip.pricePerSeatINR)} />
                <Row label="Platform fee (5%)" value={formatINR(platformFee)} />
                <Row label="GST (5%)" value={formatINR(gst)} />
              </div>

              <Separator />

              <Row
                label={<span className="text-base font-semibold">Total</span>}
                value={
                  <span className="text-base font-bold">
                    {formatINR(total)}
                  </span>
                }
              />

              <p className="rounded-lg bg-muted/60 p-3 text-xs text-muted-foreground">
                You won&apos;t be charged anything in this prototype. In
                production, payment will be collected via Razorpay (UPI / cards
                / wallets / EMI).
              </p>
            </CardContent>
          </Card>
        </aside>
      </div>
    </div>
  );
}

function Row({
  label,
  value,
}: {
  label: React.ReactNode;
  value: React.ReactNode;
}) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-muted-foreground">{label}</span>
      <span>{value}</span>
    </div>
  );
}
