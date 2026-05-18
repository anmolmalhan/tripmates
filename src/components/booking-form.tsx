"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";

export function BookingForm({ slug }: { slug: string }) {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      router.push(`/trips/${slug}/booked`);
    }, 700);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Card>
        <CardContent className="space-y-5 p-6">
          <h2 className="text-lg font-semibold">Your details</h2>

          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Full name" id="name">
              <Input id="name" name="name" required placeholder="Anmol Sharma" />
            </Field>
            <Field label="Age" id="age">
              <Input
                id="age"
                name="age"
                type="number"
                min={18}
                max={80}
                required
                placeholder="26"
              />
            </Field>
            <Field label="Email" id="email">
              <Input
                id="email"
                name="email"
                type="email"
                required
                placeholder="you@example.com"
              />
            </Field>
            <Field label="WhatsApp number" id="phone">
              <Input
                id="phone"
                name="phone"
                type="tel"
                required
                placeholder="+91 90000 00000"
              />
            </Field>
            <Field label="City" id="city">
              <Input id="city" name="city" required placeholder="Bengaluru" />
            </Field>
            <Field label="Emergency contact" id="emergency">
              <Input
                id="emergency"
                name="emergency"
                required
                placeholder="Name + phone"
              />
            </Field>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="space-y-5 p-6">
          <h2 className="text-lg font-semibold">A little about you</h2>
          <p className="text-sm text-muted-foreground">
            Helps your host and tripmates get to know you before the trip. Kept
            private otherwise.
          </p>
          <Field label="One line about yourself" id="bio">
            <Input
              id="bio"
              name="bio"
              placeholder="Backend engineer, weekend hiker, big fan of bad coffee."
            />
          </Field>
          <Field
            label="Dietary preferences / allergies (optional)"
            id="dietary"
          >
            <Textarea
              id="dietary"
              name="dietary"
              rows={3}
              placeholder="Vegetarian, no eggs. Allergic to peanuts."
            />
          </Field>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="space-y-4 p-6">
          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              id="terms"
              required
              className="mt-1 h-4 w-4"
            />
            <label htmlFor="terms" className="text-sm">
              I&apos;ve read and agree to the{" "}
              <span className="font-medium underline">Terms of Service</span>,{" "}
              <span className="font-medium underline">
                Cancellation Policy
              </span>{" "}
              and{" "}
              <span className="font-medium underline">
                Community Guidelines
              </span>
              .
            </label>
          </div>
        </CardContent>
      </Card>

      <div className="flex flex-col-reverse items-stretch gap-3 sm:flex-row sm:items-center sm:justify-end">
        <p className="text-center text-xs text-muted-foreground sm:flex-1 sm:text-left">
          Prototype: clicking below skips payment and takes you straight to the
          confirmation screen.
        </p>
        <Button
          type="submit"
          size="lg"
          disabled={submitting}
          className="min-w-[200px]"
        >
          {submitting ? "Confirming…" : "Confirm & pay (skipped)"}
        </Button>
      </div>
    </form>
  );
}

function Field({
  label,
  id,
  children,
}: {
  label: string;
  id: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-1.5">
      <Label htmlFor={id}>{label}</Label>
      {children}
    </div>
  );
}
