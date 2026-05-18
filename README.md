# Tripmates

> **Travel together. Make friends. Save money.**
> A group-travel marketplace for India where solo travellers join curated trips with verified hosts, fixed dates, and pre-booked hotels — at unbeatable per-seat prices.

---

## What is Tripmates?

Tripmates is a two-sided marketplace solving one specific, painfully common problem:

> **"I want to travel. My friends keep cancelling."**

Instead of dropping the trip — or paying solo prices — joiners on Tripmates browse **fully-planned trips** (dates locked, hotels pre-booked, day-by-day itinerary written) and **buy a single seat**. They show up, meet a small group of strangers, and travel together for 3–9 days.

Every trip has:
- 🗓️ **Fixed dates** — no negotiating, no back-and-forth
- 🏨 **Pre-booked hotels** — vetted, often group-rate-only
- 📋 **Day-by-day itinerary** — what you'll do, where you'll eat, who drives
- 👥 **8–12 person caps** — small groups for real connections
- 🛡️ **Verified hosts** — ID-checked, with a public history of past trips
- 💰 **Per-seat pricing** — you only pay for one seat at a *group* rate

---

## Why this is a great business idea

### 1. The problem is universal and specific

Every urban Indian aged 22–35 has experienced trip-cancellation fatigue. It's not a "nice to have" — it's the actual reason millions of trips never happen. Lifestyle businesses with a sharp, single-sentence pain point ("my friends keep cancelling") tend to *spread* organically because the audience instantly recognises themselves.

### 2. Value-for-money is a built-in moat

A group of 8 travelling together unlocks pricing a solo traveller will *never* get — hotels rent rooms at 30%+ off published rates for guaranteed multi-room bookings, and transport scales linearly. Tripmates passes the savings to joiners and still keeps a margin. The customer pays less *and* the business earns more than a one-person agency could.

| | Solo traveller | Tripmates joiner |
|---|---|---|
| 4-day Manali trip | ~₹12,500 | **₹8,499** |
| 9-day Spiti loop | ~₹42,000 | **₹28,999** |
| 9-day Ladakh circuit | ~₹49,000 | **₹34,999** |

### 3. India has the right tailwinds

- ~120 million Indians aged 22–35 with discretionary travel income
- Solo-travel growing 35% YoY (post-pandemic shift)
- Smartphone + UPI penetration means frictionless ₹10k–₹35k bookings
- Instagram-driven travel-content explosion provides organic distribution

### 4. Operationally light, capital-efficient

The business doesn't own hotels, doesn't own buses, doesn't carry inventory. It's a software + curation + community business. Trip #1 can break even with as few as 6 joiners. The unit economics improve as group size and trip duration scale up.

### 5. A genuine network effect once supply opens up

Phase 1 is founder-hosted only (to seed quality). Phase 2 opens hosting to invited creators and ex-tour-guides. Each new host brings their own audience, while every joiner is an organic content engine (Instagram reels, Google reviews, friend referrals). The flywheel compounds without paid acquisition dominating the cost structure.

### 6. Defensible by trust, not tech

The hard part of this business isn't building the website — it's **earning trust between strangers**. ID verification, escrow payments, real photos of real past trips, joiner reviews, and a transparent cancellation policy compound into a brand that an undifferentiated competitor can't replicate in a month.

---

## Where this app fits in the bigger plan

This repository is the **clickable prototype** — Phase 0 of the product roadmap.

```
Phase 0  Prototype  ◀── you are here
         Static Next.js site with mock trips, mock booking flow.
         Drives validation, social media traffic, and trip #1 bookings
         (via Razorpay payment links, manual ops).

Phase 1  MVP            (after trip #1 confirms demand)
         Real auth (Clerk), real DB (Neon Postgres), real payments
         (Razorpay), real booking and admin flows.

Phase 2  Open hosting   (after trip #5)
         Invited external hosts. Escrow + split payouts via Razorpay
         Route. Host quality scores and joiner reviews.

Phase 3  Scale          (months 7–12)
         Referral engine, repeat-rate flows, B2B/corporate trips,
         premium "pro hosts".
```

---

## What's in the prototype

| Route | Purpose |
|-------|---------|
| `/` | Landing — hero, how it works, featured trips, testimonials |
| `/trips` | All trips with filters (destination, difficulty, sort) |
| `/trips/[slug]` | Full trip detail — gallery, day-by-day, hotel, host, sticky booking sidebar |
| `/trips/[slug]/book` | Booking form (mock) — joiner details + price summary |
| `/trips/[slug]/booked` | Success page with mock WhatsApp group link |
| `/host` | Hosting waitlist (hosting opens in Phase 2) |
| `/about` | How it works, trust & safety, cancellation policy, FAQ |

### Mock trip catalogue

- 🏔️ Manali & Kasol Weekender — *₹8,499 / 3 nights*
- 🏖️ Goa Monsoon House Party — *₹11,999 / 4 nights*
- 🧘 Rishikesh Rafting & Yoga — *₹5,499 / 2 nights*
- 🏔️ Spiti Circuit Road Trip — *₹28,999 / 8 nights*
- 🌴 Kerala Backwaters & Coffee Hills — *₹16,999 / 5 nights*
- 🏔️ Leh-Ladakh Classic Circuit — *₹34,999 / 8 nights*

---

## Tech stack

- **[Next.js 16](https://nextjs.org/)** — App Router, Server Components, Turbopack
- **[TypeScript](https://www.typescriptlang.org/)** — strict mode
- **[Tailwind CSS v4](https://tailwindcss.com/)** + **[shadcn/ui](https://ui.shadcn.com/)** (Nova preset, neutral theme)
- **[Geist](https://vercel.com/font)** — typography (sans + mono)
- **[Vercel](https://vercel.com/)** — designed for one-click deploy
- **[Next/Image](https://nextjs.org/docs/api-reference/next/image)** with Unsplash for trip photos

The prototype has **no backend, no database, no real payments** — everything is static and mock. This is intentional. Phase 1 adds Clerk, Neon Postgres, Razorpay, and Resend.

---

## Run it locally

```bash
git clone https://github.com/anmolmalhan/tripmates.git
cd tripmates
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — the site renders with sample trips.

### Build & deploy

```bash
npm run build      # Production build with TypeScript checks
npm run start      # Run the production build locally
```

For deployment, push to GitHub and connect to [Vercel](https://vercel.com/new) — zero config required.

---

## Project structure

```
src/
├── app/
│   ├── page.tsx              # Home
│   ├── trips/
│   │   ├── page.tsx          # Trip listing (with filters)
│   │   └── [slug]/
│   │       ├── page.tsx      # Trip detail
│   │       ├── book/         # Mock booking form
│   │       └── booked/       # Success page
│   ├── host/                 # Host waitlist
│   ├── about/                # How it works + trust & safety
│   └── layout.tsx
├── components/
│   ├── site-header.tsx
│   ├── site-footer.tsx
│   ├── trip-card.tsx
│   ├── trips-filter.tsx
│   ├── booking-form.tsx
│   ├── host-waitlist-form.tsx
│   └── ui/                   # shadcn/ui primitives
└── lib/
    ├── trips.ts              # Mock trip data + types
    └── utils.ts
```

---

## License

This is a private prototype. All rights reserved © Tripmates Technologies Pvt. Ltd.
