"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type Props = {
  states: string[];
  difficulties: string[];
  active: { state?: string; difficulty?: string; sort?: string };
};

export function TripsFilter({ states, difficulties, active }: Props) {
  const pathname = usePathname();
  const search = useSearchParams();

  const buildHref = (key: string, value: string | null) => {
    const params = new URLSearchParams(search.toString());
    if (value === null) {
      params.delete(key);
    } else {
      params.set(key, value);
    }
    const qs = params.toString();
    return qs ? `${pathname}?${qs}` : pathname;
  };

  const hasFilters = !!(active.state || active.difficulty || active.sort);

  const sortOptions: { value: string; label: string }[] = [
    { value: "date", label: "By departure date" },
    { value: "price-asc", label: "Price: low to high" },
    { value: "price-desc", label: "Price: high to low" },
  ];

  return (
    <div className="mt-8 space-y-4 rounded-2xl border border-border/60 bg-card p-4 sm:p-5">
      <FilterRow label="Destination">
        <Chip href={buildHref("state", null)} active={!active.state}>
          All
        </Chip>
        {states.map((s) => (
          <Chip
            key={s}
            href={buildHref("state", s)}
            active={active.state === s}
          >
            {s}
          </Chip>
        ))}
      </FilterRow>

      <FilterRow label="Difficulty">
        <Chip href={buildHref("difficulty", null)} active={!active.difficulty}>
          All
        </Chip>
        {difficulties.map((d) => (
          <Chip
            key={d}
            href={buildHref("difficulty", d)}
            active={active.difficulty === d}
          >
            {d}
          </Chip>
        ))}
      </FilterRow>

      <FilterRow label="Sort by">
        {sortOptions.map((o) => (
          <Chip
            key={o.value}
            href={buildHref("sort", o.value)}
            active={active.sort === o.value}
          >
            {o.label}
          </Chip>
        ))}
      </FilterRow>

      {hasFilters && (
        <div>
          <Button asChild size="sm" variant="ghost">
            <Link href={pathname}>Clear all filters</Link>
          </Button>
        </div>
      )}
    </div>
  );
}

function FilterRow({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="mr-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        {label}
      </span>
      {children}
    </div>
  );
}

function Chip({
  href,
  active,
  children,
}: {
  href: string;
  active: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link href={href}>
      <Badge
        variant={active ? "default" : "outline"}
        className="cursor-pointer px-3 py-1 font-normal"
      >
        {children}
      </Badge>
    </Link>
  );
}
