import Link from "next/link";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "How it works & trust",
  description:
    "How Tripmates works, what we do to keep you safe, and our cancellation policy.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <header className="text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          About Tripmates
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
          Group travel that actually happens.
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          We started Tripmates after the third trip our friend group cancelled
          on us. The fix wasn’t better planning — it was finding the right
          travel companions. Here’s how it works, and how we keep it safe.
        </p>
      </header>

      <Section title="How it works">
        <ol className="space-y-6">
          {[
            {
              title: "Pick a trip",
              body: "Every trip on Tripmates is fully planned in advance — fixed dates, pre-booked hotels, transfers, a day-by-day itinerary, and a per-seat price. You browse, you pick, you book.",
            },
            {
              title: "Pay per seat",
              body: "You only pay for one seat. The group rate is locked in because the host has already negotiated stays and transfers for the whole group.",
            },
            {
              title: "Meet your tripmates",
              body: "The moment you book, you’re added to a private WhatsApp group with your host and other joiners. You can ask anything from packing tips to whether someone’s up for an extra side-trip.",
            },
            {
              title: "Show up, travel, repeat",
              body: "Meet at the trip’s arrival point on day 1. Everything from then on is handled. Most of our joiners book a second trip within 6 months.",
            },
          ].map((s, i) => (
            <li
              key={s.title}
              className="grid gap-2 rounded-2xl border border-border/60 bg-card p-6 sm:grid-cols-[40px_1fr]"
            >
              <div className="text-2xl font-bold text-muted-foreground">
                {i + 1}
              </div>
              <div>
                <h3 className="text-lg font-semibold">{s.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{s.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      <Section title="Trust & safety">
        <Card>
          <CardContent className="space-y-5 p-6">
            {[
              {
                title: "Verified hosts only",
                body: "Every host on Tripmates is ID-verified by us. For the first 6 months, all trips are run directly by the Tripmates founders.",
              },
              {
                title: "ID required on every booking",
                body: "We collect a government ID (Aadhaar / Passport / DL) at booking time and share it only with your host on the day of arrival.",
              },
              {
                title: "Small groups, women-friendly",
                body: "Most trips cap at 8–12 people. Women travellers always have at least one female room-mate option if requested.",
              },
              {
                title: "Emergency hotline",
                body: "Your host has a 24/7 escalation number to Tripmates HQ during your trip. Use it if anything feels off.",
              },
              {
                title: "Insurance, optional",
                body: "Add trip insurance (ACKO) at checkout for a flat ₹299 — covers medical, baggage and trip-curtailment.",
              },
            ].map((item, idx, arr) => (
              <div key={item.title}>
                <h3 className="text-base font-semibold">{item.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{item.body}</p>
                {idx < arr.length - 1 && <Separator className="mt-5" />}
              </div>
            ))}
          </CardContent>
        </Card>
      </Section>

      <Section title="Cancellation policy">
        <Card>
          <CardContent className="space-y-3 p-6 text-sm">
            <Policy when="14+ days before departure" detail="Full refund minus 5% platform fee." />
            <Policy when="7–13 days before departure" detail="50% refund." />
            <Policy when="Less than 7 days before departure" detail="No refund, but your seat is transferable to a friend." />
            <Policy when="Cancelled by Tripmates" detail="Full refund, no questions." />
            <p className="pt-2 text-xs text-muted-foreground">
              All refunds processed within 7 working days to the original
              payment source.
            </p>
          </CardContent>
        </Card>
      </Section>

      <Section title="Frequently asked">
        <div className="space-y-3">
          {FAQ.map((q) => (
            <details
              key={q.q}
              className="group rounded-2xl border border-border/60 bg-card p-5 transition-colors open:bg-muted/30"
            >
              <summary className="flex cursor-pointer items-center justify-between text-base font-medium">
                {q.q}
                <span className="text-muted-foreground transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm text-muted-foreground">{q.a}</p>
            </details>
          ))}
        </div>
      </Section>

      <div className="mt-16 rounded-3xl bg-foreground px-8 py-10 text-center text-background">
        <h3 className="text-2xl font-bold">Have a question we didn’t cover?</h3>
        <p className="mt-2 text-background/80">
          WhatsApp us at <span className="font-semibold">+91 90000 00000</span>{" "}
          or email <span className="font-semibold">hello@tripmates.in</span>.
          Real people. Replies within a few hours.
        </p>
        <Button
          asChild
          size="lg"
          variant="secondary"
          className="mt-6 bg-background text-foreground hover:bg-background/90"
        >
          <Link href="/trips">Browse upcoming trips</Link>
        </Button>
      </div>
    </div>
  );
}

const FAQ = [
  {
    q: "Will I really know nobody on the trip?",
    a: "Most joiners book solo. You’ll be added to the trip WhatsApp group the moment you book, so by the time the trip starts you’ll already know everyone. Some friends and couples join together too.",
  },
  {
    q: "Is it safe for solo female travellers?",
    a: "Yes. Every host is ID-verified, every joiner submits an ID, and we cap most trips at small group sizes. You can request a female-only room arrangement when booking.",
  },
  {
    q: "What if the trip gets cancelled?",
    a: "If Tripmates or the host cancels for any reason, you get a 100% refund — no platform fee deducted.",
  },
  {
    q: "How do flights / trains work?",
    a: "For most trips, you book your own flights / trains to the arrival point. We tell you exactly where to be at what time on day 1. For mountain trips that start from Delhi, we usually include the Volvo from a fixed pickup point.",
  },
  {
    q: "Can I host my own trip?",
    a: "Hosting opens in waves. We’re currently inviting hosts one by one. Join the host waitlist on our /host page if you’d like to be considered.",
  },
];

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-16">
      <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">{title}</h2>
      <div className="mt-6">{children}</div>
    </section>
  );
}

function Policy({ when, detail }: { when: string; detail: string }) {
  return (
    <div className="flex flex-col gap-1 rounded-xl bg-muted/40 p-3 sm:flex-row sm:items-center sm:justify-between">
      <span className="font-medium">{when}</span>
      <span className="text-muted-foreground">{detail}</span>
    </div>
  );
}
