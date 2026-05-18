import { Metadata } from "next";
import { TripCard } from "@/components/trip-card";
import { TripsFilter } from "@/components/trips-filter";
import { trips } from "@/lib/trips";

export const metadata: Metadata = {
  title: "All upcoming trips",
  description: "Browse all upcoming group trips on Tripmates.",
};

type Search = { state?: string; difficulty?: string; sort?: string };

export default async function TripsPage({
  searchParams,
}: {
  searchParams: Promise<Search>;
}) {
  const params = await searchParams;
  const states = Array.from(new Set(trips.map((t) => t.state))).sort();
  const difficulties = ["Easy", "Moderate", "Adventurous"] as const;

  let filtered = trips;
  if (params.state) {
    filtered = filtered.filter((t) => t.state === params.state);
  }
  if (params.difficulty) {
    filtered = filtered.filter((t) => t.difficulty === params.difficulty);
  }

  if (params.sort === "price-asc") {
    filtered = [...filtered].sort(
      (a, b) => a.pricePerSeatINR - b.pricePerSeatINR
    );
  } else if (params.sort === "price-desc") {
    filtered = [...filtered].sort(
      (a, b) => b.pricePerSeatINR - a.pricePerSeatINR
    );
  } else if (params.sort === "date") {
    filtered = [...filtered].sort(
      (a, b) =>
        new Date(a.startDate).getTime() - new Date(b.startDate).getTime()
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Upcoming trips
        </h1>
        <p className="text-muted-foreground">
          {filtered.length} {filtered.length === 1 ? "trip" : "trips"} ready to
          book. Small groups. Fixed dates. Verified hosts.
        </p>
      </div>

      <TripsFilter
        states={states}
        difficulties={[...difficulties]}
        active={{
          state: params.state,
          difficulty: params.difficulty,
          sort: params.sort,
        }}
      />

      {filtered.length === 0 ? (
        <div className="mt-16 rounded-2xl border border-dashed border-border bg-muted/30 p-12 text-center">
          <h3 className="text-lg font-semibold">No trips match those filters</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Try clearing a filter to see more trips.
          </p>
        </div>
      ) : (
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((t) => (
            <TripCard key={t.slug} trip={t} />
          ))}
        </div>
      )}
    </div>
  );
}
