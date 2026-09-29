/* Dhaankolhu Rasdhoo — Activity data (single source of truth).
   Used by activity-rates.js (index.html + offers.html) AND book-now.js.
   Edit prices/details ONLY here. Load this file BEFORE activity-rates.js / book-now.js. */
(function () {
  window.DHK_ACTIVITY_CATS = [
    { id: "all", label: "All", full: "All Activities" },
    { id: "snorkel", label: "Snorkeling" },
    { id: "fishing", label: "Fishing" },
    { id: "evening", label: "Cruise & Dining" },
    { id: "trips", label: "Day Trips & Expeditions" }
  ];

  // f = fallback photo already on the site (used until img/activities/<slug>.webp exists)
  // t = [1 pax, 2 pax, 3+ pax]   g = group-only price (per person)   gl = price label   note = pax rule
  window.DHK_ACTIVITIES = [
    { n: "1 Spot Snorkeling", f: "img/experience/snorkeling.webp", c: "snorkel", d: "45 min", t: [40, 38, 35], i: ["Snorkel Gear", "Water", "Towel", "Guide", "GoPro Pics & Vids"], feat: true },
    { n: "3 Spot Snorkeling", f: "img/experience/snorkeling.webp", c: "snorkel", d: "2 hr", t: [85, 85, 75], i: ["Snorkel Gear", "Water", "Towel", "Guide", "GoPro Pics & Vids"] },
    { n: "Manta Snorkeling", f: "img/experience/snorkeling.webp", c: "snorkel", d: "1 hr 30 min", t: [90, 80, 70], i: ["Snorkel Gear", "Water", "Towel", "Guide", "GoPro Pics & Vids"] },
    { n: "Turtle Snorkeling", f: "img/experience/turtle.webp", c: "snorkel", d: "1 hr 30 min", t: [55, 50, 45], i: ["Snorkel Gear", "Water", "Towel", "Guide", "GoPro Pics & Vids"], feat: true },
    { n: "Gangehi Shark Quest", f: "img/experience/shark.webp", c: "snorkel", d: "1 hr 30 min", g: 70, note: "Min 4 pax", i: ["Snorkel Gear", "Water", "Towel", "Guide", "GoPro Pics & Vids"] },

    { n: "Night Fishing with BBQ Dinner", f: "img/experience/fishing.webp", c: "fishing", d: "2 hr", t: [65, 60, 55], i: ["Fishing Equipment", "Water", "Snacks", "Guide"], feat: true },
    { n: "Day Fishing with BBQ Dinner", f: "img/experience/fishing.webp", c: "fishing", d: "2 hr", t: [65, 60, 55], i: ["Fishing Equipment", "Water", "Snacks", "Guide"] },
    { n: "Big Game Fishing", f: "img/experience/fishing.webp", c: "fishing", d: "Per hour", g: 90, gl: "per hour", note: "Max 5 pax", i: ["Fishing Equipment", "Water", "Snacks", "Guide"] },

    { n: "Sunset Cruise", f: "img/experience/dolpin.webp", c: "evening", d: "2 hr", t: [85, 80, 70], i: ["Snacks", "Water", "Drone Pics & Vids"], feat: true },
    { n: "Beach Dinner", c: "evening", d: "2 hr", t: [100, 85, 75], i: ["Meal"] },
    { n: "Sandbank Dinner", c: "evening", d: "3 hr", t: [150, 120, 100], i: ["Meal"] },

    { n: "Sandbank Full Day Trip", c: "trips", d: "7 hr", t: [60, 50, 40], i: ["Lunch", "Snorkel Gear", "Water", "Towel", "Guide", "GoPro Pics & Vids"], feat: true },
    { n: "Island Hopping", c: "trips", d: "8 hr", g: 100, note: "Min 4 pax", i: ["Meal", "Guide"] },
    { n: "Madivaru Camping", c: "trips", d: "17 hr", g: 200, note: "Min 4 pax", i: ["Camping Tents", "Fishing Equipment", "Meal", "Water", "GoPro Pics & Vids"] },
    { n: "Whale Shark Trip", f: "img/experience/shark.webp", c: "trips", d: "7 hr", g: 160, note: "Min 8 pax", i: ["Snorkel Gear", "Water", "Meal", "Towel", "Guide", "GoPro Pics & Vids"], feat: true },
    { n: "Hanifaru Bay Manta", c: "trips", d: "8 hr", g: 200, note: "Min 4 pax", i: ["Snorkel Gear", "Water", "Meal", "Towel", "Guide", "GoPro Pics & Vids"] }
  ];
})();
