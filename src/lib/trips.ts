export type TripDay = {
  day: number;
  title: string;
  description: string;
};

export type TripHost = {
  name: string;
  bio: string;
  avatar: string;
  tripsHosted: number;
  joinedYear: number;
};

export type Trip = {
  slug: string;
  title: string;
  destination: string;
  state: string;
  startDate: string;
  endDate: string;
  durationNights: number;
  durationDays: number;
  pricePerSeatINR: number;
  marketPriceINR: number;
  totalSeats: number;
  seatsLeft: number;
  difficulty: "Easy" | "Moderate" | "Adventurous";
  tags: string[];
  heroImage: string;
  gallery: string[];
  shortPitch: string;
  longPitch: string;
  itinerary: TripDay[];
  hotel: {
    name: string;
    description: string;
    image: string;
    rating: number;
  };
  inclusions: string[];
  exclusions: string[];
  host: TripHost;
  meetingPoint: string;
};

const founderHost: TripHost = {
  name: "Anmol",
  bio: "Co-founder of Tripmates. Has been organising group trips for friends since 2020. Loves mountains, photography and finding hidden cafes.",
  avatar:
    "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400&h=400&fit=crop&q=80",
  tripsHosted: 12,
  joinedYear: 2024,
};

export const trips: Trip[] = [
  {
    slug: "manali-kasol-weekender",
    title: "Manali & Kasol Weekender",
    destination: "Manali",
    state: "Himachal Pradesh",
    startDate: "2026-06-12",
    endDate: "2026-06-15",
    durationNights: 3,
    durationDays: 4,
    pricePerSeatINR: 8499,
    marketPriceINR: 12500,
    totalSeats: 12,
    seatsLeft: 5,
    difficulty: "Easy",
    tags: ["Mountains", "Cafes", "Bonfire", "First-timers"],
    heroImage:
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1600&h=900&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1200&h=800&fit=crop&q=80",
      "https://images.unsplash.com/photo-1626198226928-95e5a14b0c0e?w=1200&h=800&fit=crop&q=80",
      "https://images.unsplash.com/photo-1593181629936-11c609b8db9b?w=1200&h=800&fit=crop&q=80",
      "https://images.unsplash.com/photo-1599661046827-9a64bb68b97e?w=1200&h=800&fit=crop&q=80",
    ],
    shortPitch:
      "Long-weekend escape from Delhi NCR. Old Manali cafes, Solang sunset, a chill day in Kasol.",
    longPitch:
      "The classic Himachal weekender, done right. We start with an overnight Volvo from Delhi, settle into a riverside stay in Old Manali, do a sunset run at Solang, and finish with a day trip to Kasol. Small group, no rushed schedules, plenty of time to actually relax.",
    itinerary: [
      {
        day: 1,
        title: "Delhi → Manali",
        description:
          "Overnight Volvo from Majnu ka Tila (9 PM). Reach Manali by morning. Breakfast at Cafe 1947, check-in, free afternoon to wander Old Manali.",
      },
      {
        day: 2,
        title: "Solang Valley + Old Manali",
        description:
          "Day trip to Solang for paragliding (optional) and ATV rides. Back by 5 PM, sunset at Manu Temple, dinner + bonfire at the stay.",
      },
      {
        day: 3,
        title: "Kasol Day Trip",
        description:
          "Drive to Kasol via Kullu. Lunch at Evergreen Cafe, short walk to Chalal village along the Parvati river. Back to Manali by night.",
      },
      {
        day: 4,
        title: "Manali → Delhi",
        description:
          "Lazy breakfast, last-minute shopping at Mall Road. Board Volvo at 5 PM, reach Delhi early next morning.",
      },
    ],
    hotel: {
      name: "Apple Country Cottages, Old Manali",
      description:
        "Wood-and-stone cottages right next to the Manalsu river. Private balconies, hot showers, in-house cafe.",
      image:
        "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200&h=800&fit=crop&q=80",
      rating: 4.4,
    },
    inclusions: [
      "Return Volvo (Delhi ↔ Manali)",
      "3 nights stay (twin sharing)",
      "Daily breakfast + 2 dinners",
      "All local transfers in a private tempo traveller",
      "Trip captain throughout",
    ],
    exclusions: [
      "Paragliding / ATV charges",
      "Lunches",
      "Personal expenses & tips",
      "Travel insurance",
    ],
    host: founderHost,
    meetingPoint: "Majnu ka Tila, Delhi — 8:30 PM on June 12",
  },
  {
    slug: "goa-monsoon-houseparty",
    title: "Goa Monsoon House Party",
    destination: "North Goa",
    state: "Goa",
    startDate: "2026-07-24",
    endDate: "2026-07-28",
    durationNights: 4,
    durationDays: 5,
    pricePerSeatINR: 11999,
    marketPriceINR: 17000,
    totalSeats: 10,
    seatsLeft: 3,
    difficulty: "Easy",
    tags: ["Beach", "Monsoon", "Villa", "Nightlife"],
    heroImage:
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=1600&h=900&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=1200&h=800&fit=crop&q=80",
      "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=1200&h=800&fit=crop&q=80",
      "https://images.unsplash.com/photo-1604999565976-8913ad2ddb7c?w=1200&h=800&fit=crop&q=80",
      "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=1200&h=800&fit=crop&q=80",
    ],
    shortPitch:
      "Private villa in Assagao. Green Goa, waterfalls, Saturday Night Market, and absolutely no crowds.",
    longPitch:
      "Monsoon is the underrated season in Goa — half the price, twice the green, and the cafes have all the regulars back. We've booked a 5-BR villa in Assagao with a pool, scooters arranged for everyone, and a chill itinerary that mixes Dudhsagar, beach hopping, and the famous Saturday Night Market at Arpora.",
    itinerary: [
      {
        day: 1,
        title: "Arrival + Welcome Dinner",
        description:
          "Arrive Goa by your own means. Check-in at the villa by 2 PM. Welcome lunch, scooter assignment, evening at Vagator beach.",
      },
      {
        day: 2,
        title: "Dudhsagar Waterfalls",
        description:
          "Early start to Mollem. Jeep safari + Dudhsagar (peak monsoon flow!). Back by evening, dinner at Antares.",
      },
      {
        day: 3,
        title: "Cafes + Saturday Night Market",
        description:
          "Slow morning, brunch at Villa Blanche. Free afternoon. Saturday Night Market at Arpora till late.",
      },
      {
        day: 4,
        title: "South Goa Day",
        description:
          "Drive south — Palolem and Agonda beaches, lunch at Cafe Inn. Bonfire night at the villa.",
      },
      {
        day: 5,
        title: "Brunch + Departure",
        description:
          "Final brunch by the pool, check out by 12 PM. Drop at airport / station arranged.",
      },
    ],
    hotel: {
      name: "The Indigo Villa, Assagao",
      description:
        "Heritage Portuguese-style 5-BR villa with a private pool, hammocks, and a giant kitchen-dining area perfect for group hangs.",
      image:
        "https://images.unsplash.com/photo-1568084680786-a84f91d1153c?w=1200&h=800&fit=crop&q=80",
      rating: 4.7,
    },
    inclusions: [
      "4 nights in a 5-BR villa (twin/triple sharing)",
      "Daily breakfast",
      "Scooter for the entire trip",
      "Dudhsagar jeep safari",
      "Welcome dinner + bonfire night",
      "Airport pickup & drop",
    ],
    exclusions: [
      "Flights / trains to Goa",
      "Most meals (Goa is too good to pre-book lunches)",
      "Fuel for scooters",
      "Entry tickets / club covers",
    ],
    host: founderHost,
    meetingPoint: "Dabolim Airport / Madgaon Station — pickup arranged",
  },
  {
    slug: "rishikesh-rafting-yoga",
    title: "Rishikesh: Rafting & Yoga",
    destination: "Rishikesh",
    state: "Uttarakhand",
    startDate: "2026-05-30",
    endDate: "2026-06-01",
    durationNights: 2,
    durationDays: 3,
    pricePerSeatINR: 5499,
    marketPriceINR: 8500,
    totalSeats: 15,
    seatsLeft: 8,
    difficulty: "Easy",
    tags: ["Adventure", "Yoga", "Ganga", "Short trip"],
    heroImage:
      "https://images.unsplash.com/photo-1606298855672-3efb63017be8?w=1600&h=900&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1606298855672-3efb63017be8?w=1200&h=800&fit=crop&q=80",
      "https://images.unsplash.com/photo-1591018653532-6dc1ec1c5fe5?w=1200&h=800&fit=crop&q=80",
      "https://images.unsplash.com/photo-1623059508779-2542c6e83753?w=1200&h=800&fit=crop&q=80",
    ],
    shortPitch:
      "Weekend reset. 16 km of rafting, sunrise yoga by the Ganga, and the world-famous Ganga Aarti.",
    longPitch:
      "Two nights, three days, perfectly enough to forget about work. We do the classic Shivpuri-to-Rishikesh 16 km rafting stretch, two morning yoga sessions with a teacher from Parmarth Niketan, and quiet evenings on the Ganga ghats.",
    itinerary: [
      {
        day: 1,
        title: "Delhi → Rishikesh",
        description:
          "Tempo traveller from Delhi at 7 AM. Reach Rishikesh by 1 PM. Lunch, check-in, evening at Triveni Ghat for Ganga Aarti.",
      },
      {
        day: 2,
        title: "Yoga + 16 km Rafting",
        description:
          "Sunrise yoga (6 AM). Breakfast. Rafting from Shivpuri to Rishikesh — Grade 2 & 3 rapids, body surfing, cliff jump. Evening free at Cafe Karma.",
      },
      {
        day: 3,
        title: "Beatles Ashram → Delhi",
        description:
          "Visit Maharishi Mahesh Yogi Ashram (Beatles Ashram). Brunch by the river. Depart for Delhi at 2 PM.",
      },
    ],
    hotel: {
      name: "Live Free Hostels, Tapovan",
      description:
        "Boutique riverside hostel with private rooms, rooftop yoga deck, and a sunny common kitchen.",
      image:
        "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200&h=800&fit=crop&q=80",
      rating: 4.5,
    },
    inclusions: [
      "Return tempo traveller (Delhi ↔ Rishikesh)",
      "2 nights in a riverside hostel (private rooms)",
      "Daily breakfast",
      "16 km rafting with safety gear & instructor",
      "2 yoga sessions",
    ],
    exclusions: [
      "Lunches and dinners",
      "Personal expenses",
      "Anything not in inclusions",
    ],
    host: founderHost,
    meetingPoint: "Akshardham Metro, Delhi — 6:30 AM on May 30",
  },
  {
    slug: "spiti-circuit-roadtrip",
    title: "Spiti Circuit Road Trip",
    destination: "Spiti Valley",
    state: "Himachal Pradesh",
    startDate: "2026-08-08",
    endDate: "2026-08-16",
    durationNights: 8,
    durationDays: 9,
    pricePerSeatINR: 28999,
    marketPriceINR: 42000,
    totalSeats: 8,
    seatsLeft: 2,
    difficulty: "Adventurous",
    tags: ["Roadtrip", "High altitude", "Monasteries", "Bucket list"],
    heroImage:
      "https://images.unsplash.com/photo-1626621934109-7d59c4d52e1a?w=1600&h=900&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1626621934109-7d59c4d52e1a?w=1200&h=800&fit=crop&q=80",
      "https://images.unsplash.com/photo-1623059508779-2542c6e83753?w=1200&h=800&fit=crop&q=80",
      "https://images.unsplash.com/photo-1599661046827-9a64bb68b97e?w=1200&h=800&fit=crop&q=80",
      "https://images.unsplash.com/photo-1626198226928-95e5a14b0c0e?w=1200&h=800&fit=crop&q=80",
    ],
    shortPitch:
      "The full Spiti circuit — Kalpa, Tabo, Kaza, Chandratal — in one well-paced 9-day loop.",
    longPitch:
      "Spiti the way it should be done — slowly, with acclimatization built in, and with a driver who knows every blind turn. We loop Shimla → Kalpa → Tabo → Kaza → Chandratal → Manali, hitting Key Monastery, Hikkim (world's highest post office), and the gravity-defying Chicham bridge along the way.",
    itinerary: [
      {
        day: 1,
        title: "Delhi → Shimla",
        description:
          "Overnight Volvo from Delhi. Breakfast in Shimla, lazy day to acclimatize, evening on the Mall.",
      },
      {
        day: 2,
        title: "Shimla → Kalpa",
        description:
          "Drive along the Sutlej. Stop at Sarahan temple. Reach Kalpa by evening, sunset on Kinner Kailash.",
      },
      {
        day: 3,
        title: "Kalpa → Tabo",
        description:
          "Crossing into Spiti via the Hindustan-Tibet road. Stop at Nako lake. Reach Tabo, visit the 1000-year-old monastery.",
      },
      {
        day: 4,
        title: "Tabo → Kaza (via Dhankar)",
        description:
          "Dhankar monastery + lake hike. Lunch at Pin Valley. Reach Kaza by evening.",
      },
      {
        day: 5,
        title: "Key Monastery + Hikkim + Komic",
        description:
          "Sunrise at Key. Post a card from Hikkim. Lunch at Komic (highest village with a motorable road).",
      },
      {
        day: 6,
        title: "Kaza → Chandratal (via Chicham bridge)",
        description:
          "Cross Chicham bridge. Lunch at Losar. Camp by Chandratal lake (no network!).",
      },
      {
        day: 7,
        title: "Chandratal → Manali (Kunzum + Atal Tunnel)",
        description:
          "Sunrise at the lake. Cross Kunzum Pass. Long drive to Manali via Atal Tunnel.",
      },
      {
        day: 8,
        title: "Rest day at Manali",
        description:
          "Free day to soak in oxygen and hot showers. Optional Solang trip.",
      },
      {
        day: 9,
        title: "Manali → Delhi",
        description: "Overnight Volvo from Manali to Delhi.",
      },
    ],
    hotel: {
      name: "Mix of homestays + camps",
      description:
        "Family-run homestays in Kalpa, Tabo, and Kaza (twin sharing, hot bucket water). Pre-pitched camp on Chandratal night. Hotel in Manali on day 8.",
      image:
        "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200&h=800&fit=crop&q=80",
      rating: 4.6,
    },
    inclusions: [
      "Delhi ↔ Shimla and Manali ↔ Delhi by Volvo",
      "Tempo traveller for the entire circuit",
      "8 nights stay (homestays + camp)",
      "Breakfast and dinner daily",
      "All monastery entries",
      "Inner-line permit assistance",
    ],
    exclusions: [
      "Lunches",
      "Oxygen cans (we'll carry shared supply, personal not included)",
      "Travel insurance (highly recommended)",
      "Tips and personal expenses",
    ],
    host: founderHost,
    meetingPoint: "Kashmiri Gate ISBT, Delhi — 8:00 PM on Aug 8",
  },
  {
    slug: "kerala-backwaters-coffee",
    title: "Kerala: Backwaters & Coffee Hills",
    destination: "Alleppey + Wayanad",
    state: "Kerala",
    startDate: "2026-09-18",
    endDate: "2026-09-23",
    durationNights: 5,
    durationDays: 6,
    pricePerSeatINR: 16999,
    marketPriceINR: 24000,
    totalSeats: 10,
    seatsLeft: 7,
    difficulty: "Easy",
    tags: ["Backwaters", "Houseboat", "Coffee", "Slow travel"],
    heroImage:
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=1600&h=900&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=1200&h=800&fit=crop&q=80",
      "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=1200&h=800&fit=crop&q=80",
      "https://images.unsplash.com/photo-1593181629936-11c609b8db9b?w=1200&h=800&fit=crop&q=80",
    ],
    shortPitch:
      "A houseboat night in Alleppey, then up to Wayanad for coffee estates, waterfalls, and Edakkal caves.",
    longPitch:
      "Kerala the way it's meant to be — slow. A private houseboat for our group through Alleppey's backwaters, then a coffee-estate stay near Wayanad with day trips to Soochipara waterfalls, Edakkal caves and an Ayurvedic massage on the house.",
    itinerary: [
      {
        day: 1,
        title: "Kochi arrival",
        description:
          "Land in Kochi. Drive to Alleppey (2 hours). Sunset at Marari beach, dinner at Cassia.",
      },
      {
        day: 2,
        title: "Backwater Houseboat",
        description:
          "Board our private houseboat at 11 AM. Lunch + dinner cooked onboard. Anchor for the night in the backwaters.",
      },
      {
        day: 3,
        title: "Alleppey → Wayanad",
        description: "Long but scenic drive (7 hrs). Reach the coffee estate by evening.",
      },
      {
        day: 4,
        title: "Edakkal + Soochipara",
        description:
          "Morning trek to Edakkal caves (Neolithic petroglyphs). Lunch at the estate. Afternoon at Soochipara falls.",
      },
      {
        day: 5,
        title: "Estate day + Ayurveda",
        description:
          "Coffee plantation walk, breakfast at a tribal kitchen. Afternoon Ayurvedic massage.",
      },
      {
        day: 6,
        title: "Wayanad → Kochi",
        description:
          "Drive back to Kochi (5 hrs). Drop at airport by 3 PM.",
      },
    ],
    hotel: {
      name: "Mix: Houseboat + Vythiri Coffee Estate Stay",
      description:
        "Premium private houseboat (2 BR) for the Alleppey night. Heritage planter's bungalow in Wayanad — 4 rooms, organic farm-to-table meals.",
      image:
        "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=1200&h=800&fit=crop&q=80",
      rating: 4.8,
    },
    inclusions: [
      "All ground transfers from Kochi",
      "5 nights stay (houseboat + estate)",
      "All meals on the houseboat",
      "Breakfast + 1 meal daily at the estate",
      "Ayurvedic massage session",
      "Edakkal + Soochipara entries",
    ],
    exclusions: [
      "Flights to/from Kochi",
      "Alcohol (Kerala has dry days, we'll let you know)",
      "Travel insurance",
    ],
    host: founderHost,
    meetingPoint: "Kochi airport — pickup arranged for any flight before 12 PM",
  },
  {
    slug: "ladakh-leh-circuit",
    title: "Leh-Ladakh Classic Circuit",
    destination: "Leh",
    state: "Ladakh",
    startDate: "2026-07-04",
    endDate: "2026-07-12",
    durationNights: 8,
    durationDays: 9,
    pricePerSeatINR: 34999,
    marketPriceINR: 49000,
    totalSeats: 8,
    seatsLeft: 4,
    difficulty: "Adventurous",
    tags: ["Bucket list", "High altitude", "Lakes", "Photography"],
    heroImage:
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1600&h=900&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1200&h=800&fit=crop&q=80",
      "https://images.unsplash.com/photo-1599661046827-9a64bb68b97e?w=1200&h=800&fit=crop&q=80",
      "https://images.unsplash.com/photo-1593181629936-11c609b8db9b?w=1200&h=800&fit=crop&q=80",
      "https://images.unsplash.com/photo-1623059508779-2542c6e83753?w=1200&h=800&fit=crop&q=80",
    ],
    shortPitch:
      "Leh → Nubra → Pangong → Tso Moriri → Leh. The classic loop with proper acclimatization.",
    longPitch:
      "The Ladakh bucket-list, properly paced. We start with 2 acclimatization days in Leh (Khardung La is no joke), then loop through Nubra (Hunder dunes + double-humped camels), Pangong (yes, the 3 Idiots one), and Tso Moriri (the underrated gem). Flight in and out of Leh.",
    itinerary: [
      {
        day: 1,
        title: "Fly to Leh — Acclimatize",
        description:
          "Reach Leh by morning flight. Hydrate, REST. Easy evening walk on Leh market.",
      },
      {
        day: 2,
        title: "Leh local",
        description:
          "Shanti Stupa, Leh Palace, Hall of Fame. Still acclimatizing.",
      },
      {
        day: 3,
        title: "Leh → Nubra (via Khardung La)",
        description:
          "Cross Khardung La (18,380 ft). Reach Hunder, ride double-humped camels at sunset.",
      },
      {
        day: 4,
        title: "Nubra → Turtuk",
        description:
          "Day trip to Turtuk village (last village before POK). Apricot orchards, Balti food.",
      },
      {
        day: 5,
        title: "Nubra → Pangong",
        description:
          "Long scenic drive via Shyok valley. Reach Pangong by evening, sunset at the lake.",
      },
      {
        day: 6,
        title: "Pangong → Tso Moriri",
        description:
          "Off-road drive via Chushul. Arrive Tso Moriri, settle into camp.",
      },
      {
        day: 7,
        title: "Tso Moriri → Leh",
        description:
          "Sunrise at the lake. Drive back to Leh via Tso Kar. Long but unforgettable.",
      },
      {
        day: 8,
        title: "Buffer + souvenirs",
        description:
          "Buffer day in case of weather/permits. Last-minute shopping at Leh market.",
      },
      {
        day: 9,
        title: "Fly out",
        description: "Morning flight out of Leh.",
      },
    ],
    hotel: {
      name: "Hotel Singge Palace (Leh) + camps in Nubra/Pangong/Tso Moriri",
      description:
        "3-star property in Leh with oxygen support on call. Premium swiss-tent camps at Nubra, Pangong and Tso Moriri (attached washrooms, electric blankets).",
      image:
        "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200&h=800&fit=crop&q=80",
      rating: 4.5,
    },
    inclusions: [
      "All ground transport (Innova Crysta)",
      "8 nights stay (mix of hotel + premium camps)",
      "All breakfast + dinner",
      "Inner-line permits",
      "Oxygen on-call in Leh",
    ],
    exclusions: [
      "Flights to/from Leh",
      "Lunches",
      "Optional activities (ATV at Nubra, etc.)",
      "Travel insurance (strongly recommended)",
    ],
    host: founderHost,
    meetingPoint: "Kushok Bakula Rimpochee Airport, Leh — any flight on July 4",
  },
];

export function getTripBySlug(slug: string): Trip | undefined {
  return trips.find((t) => t.slug === slug);
}

export function formatINR(amount: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatDateRange(startISO: string, endISO: string): string {
  const start = new Date(startISO);
  const end = new Date(endISO);
  const sameMonth = start.getMonth() === end.getMonth();
  const startStr = start.toLocaleDateString("en-IN", {
    day: "numeric",
    month: sameMonth ? undefined : "short",
  });
  const endStr = end.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
  return `${startStr} – ${endStr}`;
}
