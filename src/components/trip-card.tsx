import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { type Trip, formatDateRange, formatINR } from "@/lib/trips";

export function TripCard({ trip }: { trip: Trip }) {
  const seatsLeftLabel =
    trip.seatsLeft <= 3
      ? `Only ${trip.seatsLeft} seat${trip.seatsLeft === 1 ? "" : "s"} left`
      : `${trip.seatsLeft} of ${trip.totalSeats} seats left`;

  const savings = trip.marketPriceINR - trip.pricePerSeatINR;

  return (
    <Link href={`/trips/${trip.slug}`} className="group block">
      <Card className="overflow-hidden p-0 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted">
          <Image
            src={trip.heroImage}
            alt={trip.title}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-x-0 top-0 flex items-start justify-between p-3">
            <Badge variant="secondary" className="bg-white/90 text-foreground backdrop-blur">
              {trip.durationNights}N / {trip.durationDays}D
            </Badge>
            {trip.seatsLeft <= 3 && (
              <Badge className="bg-red-500 text-white hover:bg-red-500/90">
                {seatsLeftLabel}
              </Badge>
            )}
          </div>
        </div>

        <CardContent className="space-y-3 p-5">
          <div className="flex items-start justify-between gap-2">
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                {trip.destination}, {trip.state}
              </p>
              <h3 className="mt-1 text-lg font-semibold leading-snug">
                {trip.title}
              </h3>
            </div>
          </div>

          <p className="text-sm text-muted-foreground line-clamp-2">
            {trip.shortPitch}
          </p>

          <div className="flex flex-wrap gap-1.5">
            {trip.tags.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="outline" className="font-normal">
                {tag}
              </Badge>
            ))}
          </div>

          <div className="flex items-end justify-between border-t border-border/60 pt-3">
            <div>
              <p className="text-xs text-muted-foreground">
                {formatDateRange(trip.startDate, trip.endDate)}
              </p>
              {trip.seatsLeft > 3 && (
                <p className="mt-1 text-xs font-medium text-emerald-700">
                  {seatsLeftLabel}
                </p>
              )}
            </div>
            <div className="text-right">
              <p className="text-xs text-muted-foreground line-through">
                {formatINR(trip.marketPriceINR)}
              </p>
              <p className="text-lg font-bold leading-tight">
                {formatINR(trip.pricePerSeatINR)}
              </p>
              <p className="text-xs font-medium text-emerald-700">
                Save {formatINR(savings)}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
