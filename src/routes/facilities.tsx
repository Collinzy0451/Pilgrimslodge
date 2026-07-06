import { createFileRoute } from "@tanstack/react-router";
import { BedDouble, Car, ShieldCheck, UtensilsCrossed, BookOpenCheck, Wind, Wifi, Users2, TreePine } from "lucide-react";
import { Layout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import confImg from "@/assets/conference-hall.jpg";
import diningImg from "@/assets/dining-hall.jpg";
import gardenImg from "@/assets/garden-path.jpg";

export const Route = createFileRoute("/facilities")({
  head: () => ({
    meta: [
      { title: "Facilities & Amenities — Pilgrims Guest House" },
      { name: "description", content: "Comfortable rooms, conference & meeting halls, study areas, dining, secure premises and ample parking at Pilgrims Guest House." },
      { property: "og:title", content: "Facilities & Amenities — Pilgrims Guest House" },
    ],
  }),
  component: Facilities,
});

const items = [
  { icon: BedDouble, title: "Comfortable accommodation", desc: "23 clean, restful standard rooms in a quiet setting." },
  { icon: TreePine, title: "Quiet, prayerful environment", desc: "Calm grounds and green spaces set apart from the noise of the city." },
  { icon: Users2, title: "Conference rooms", desc: "Spacious halls for plenary sessions, teaching and ministrations." },
  { icon: BookOpenCheck, title: "Meeting & study areas", desc: "Smaller rooms for breakouts, leadership meetings and group Bible study." },
  { icon: UtensilsCrossed, title: "Dining facilities", desc: "Warm meals served in a clean, welcoming dining hall." },
  { icon: ShieldCheck, title: "Secure premises", desc: "Gated grounds and attentive staff for the peace of mind of every guest." },
  { icon: Car, title: "Ample parking", desc: "Generous on-site parking for guests, buses and church vehicles." },
  { icon: Wifi, title: "Wi-Fi available", desc: "Connectivity for delegates, study and ministry work." },
  { icon: Wind, title: "Ventilated rooms", desc: "Comfortable airflow with fans and AC options depending on room." },
];

const showcase = [
  { img: confImg, title: "Conference Hall", desc: "Seating for large gatherings, with podium and clear sightlines." },
  { img: diningImg, title: "Dining Hall", desc: "Communal dining for retreats and conferences." },
  { img: gardenImg, title: "Prayer Grounds", desc: "Quiet outdoor paths for walking prayer and reflection." },
];

function Facilities() {
  return (
    <Layout>
      <PageHero
        eyebrow="Facilities & amenities"
        title="Everything you need for a peaceful, fruitful stay."
      />

      <section className="section-pad">
        <div className="container-prose">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((f) => (
              <div key={f.title} className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
                <span className="grid h-12 w-12 place-items-center rounded-xl text-[color:var(--deep)]" style={{ background: "var(--gradient-gold)" }}>
                  <f.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-xl">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {showcase.map((s) => (
              <figure key={s.title} className="overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-soft)]">
                <img src={s.img} alt={s.title} width={1280} height={896} loading="lazy" className="aspect-[4/3] w-full object-cover" />
                <figcaption className="p-5">
                  <h3 className="font-display text-lg">{s.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
