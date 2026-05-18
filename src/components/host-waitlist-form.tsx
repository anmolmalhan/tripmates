"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function HostWaitlistForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="mt-6 rounded-xl bg-emerald-50 p-5 text-sm text-emerald-900">
        <p className="font-semibold">You&apos;re on the list. 🎉</p>
        <p className="mt-1 text-emerald-800/80">
          We&apos;ll email you the moment hosting opens. Until then — go travel.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="mt-6 space-y-4"
    >
      <div className="space-y-1.5">
        <Label htmlFor="host-name">Full name</Label>
        <Input id="host-name" required placeholder="Anmol Sharma" />
      </div>
      <div className="space-y-1.5">
        <Label htmlFor="host-email">Email</Label>
        <Input
          id="host-email"
          type="email"
          required
          placeholder="you@example.com"
        />
      </div>
      <div className="space-y-1.5">
        <Label htmlFor="host-instagram">Instagram handle (optional)</Label>
        <Input id="host-instagram" placeholder="@yourhandle" />
      </div>
      <div className="space-y-1.5">
        <Label htmlFor="host-pitch">What trip would you run first?</Label>
        <Textarea
          id="host-pitch"
          rows={3}
          required
          placeholder="A 4-day Meghalaya monsoon trip — Cherrapunji, living root bridges, Mawlynnong."
        />
      </div>
      <Button type="submit" size="lg" className="w-full">
        Join the waitlist
      </Button>
    </form>
  );
}
