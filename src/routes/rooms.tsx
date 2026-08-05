/// <reference types="react" />
/** @jsxRuntime classic */
import React, { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Search, Users, Wifi, Wind, BedDouble } from "lucide-react";
import { Layout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { waLink, mailLink } from "@/lib/site";
import roomImg from "@/assets/room-standard.jpg";
import singleImg from "@/assets/room-single.jpg";
import SpaciousRoom from "@/assets/room2.jpeg";
import Singleroom from "@/assets/room3.jpeg";
import ExclusiveRoom from "@/assets/room1.jpeg";
import QuietRoom from "@/assets/room4.jpeg";
import ConferenceHall from "@/assets/Hall1.jpeg";
import MeetingHall from "@/assets/Hall2.jpeg";

export const Route = createFileRoute("/rooms")({
  head: () => ({
    meta: [
      { title: "Rooms & Accommodation — Pilgrims Guest House" },
      { name: "description", content: "Highly comfortable standard rooms for individuals, couples and groups. Reserve your room by WhatsApp or email." },
      { property: "og:title", content: "Rooms at Pilgrims Guest House" },
    ],
  }),
  component: Rooms,
});

type Room = { id: string; name: string; img: string; occupancy: string; features: string[]; desc: string };

const rooms: Room[] = [
  { id: "STD-01", name: "Standard Spacious Room", img: SpaciousRoom, occupancy: "Up to 2 guests", features: ["Big beds","Study desk","En-suite"], desc: "Spacious and filled with natural light and a peaceful atmosphere — perfect for retreat partners." },
  { id: "STD-02", name: "Standard Single Room", img: ExclusiveRoom, occupancy: "1 guest", features: ["Single bed","Quiet wing","En-suite"], desc: "A simple, still room set apart for solo prayer, journaling and personal communion with God." },
  { id: "STD-03", name: "Exclusive Room", img: Singleroom, occupancy: "Up to 2 or more guests", features: ["Standard bedding","Reading chair","En-suite"], desc: "Comfortable and spacious bed in a calm room for ministers and couples on retreat." },
  { id: "STD-04", name: "Standard Spacious Hall", img: ConferenceHall, occupancy: "Multiple attendees", features: ["Hall","Visual Display","Spacious Audience"], desc: "Spacious area for attending a conference." },
  { id: "STD-05", name: "Standard Quiet Room", img: QuietRoom, occupancy: "1 guest", features: ["Single bed","Garden view","En-suite"], desc: "A serene corner room — ideal for fasting and meditation." },
  { id: "STD-06", name: "Spacious Meeting Hall", img: MeetingHall, occupancy: "More Than 15 People", features: ["Meeting Hall","Projector","Spacious Audience"], desc: "A large, well-equipped space for hosting meetings and events." },
];

const amenityIcons = [
  { icon: Wifi, label: "Wi-Fi" },
  { icon: Wind, label: "Ceiling fan & AC options" },
  { icon: BedDouble, label: "Fresh linens" },
  { icon: Users, label: "Group bookings" },
];

function Rooms() {
  const [q, setQ] = useState("");
  const filtered = useMemo(() => {
    const t = q.trim().toLowerCase();
    if (!t) return rooms;
    return rooms.filter(r => (r.name + " " + r.desc + " " + r.features.join(" ")).toLowerCase().includes(t));
  }, [q]);

  return (
    <Layout>
      <PageHero
        eyebrow="Accommodation"
        title="Highly comfortable rooms, set apart for rest."
        description="Each room is clean, peaceful and prayer-friendly. Browse a selection below — we have rooms for individuals, couples, families and full ministry teams."
      />

      <section className="section-pad">
        <div className="container-prose">
          {/* Amenities strip */}
          <div className="mb-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {amenityIcons.map(a => (
              <div key={a.label} className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3">
                <a.icon className="h-5 w-5 text-gold" />
                <span className="text-sm font-medium">{a.label}</span>
              </div>
            ))}
          </div>

          {/* Search */}
          <div className="mb-8 flex items-center gap-3 rounded-full border border-border bg-card px-5 py-3 shadow-(--shadow-soft)">
            <Search className="h-4 w-4 text-muted-foreground" />
            <input
              value={q}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setQ(e.target.value)}
              placeholder="Search rooms by name or feature…"
              className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
            />
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((r) => (
              <article key={r.id} className="group overflow-hidden rounded-2xl border border-border bg-card shadow-(--shadow-soft)">
                <div className="aspect-4/3 overflow-hidden">
                  <img src={r.img} alt={r.name} width={1280} height={896} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <p className="text-xs uppercase tracking-[0.2em] text-gold">{r.id}</p>
                  <h3 className="mt-2 font-display text-xl">{r.name}</h3>
                  <p className="mt-1 text-xs text-muted-foreground">{r.occupancy}</p>
                  <p className="mt-3 text-sm text-muted-foreground">{r.desc}</p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {r.features.map(f => (
                      <li key={f} className="rounded-full bg-muted px-3 py-1 text-[11px] font-medium text-foreground/70">{f}</li>
                    ))}
                  </ul>
                  <div className="mt-5 flex gap-3">
                    <a
                      href={waLink(`Hello, I would like to RESERVE ${r.name} (${r.id}) at Pilgrims Guest House.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-deep px-4 py-2 text-xs font-semibold text-ivory"
                    >
                      Reserve
                    </a>
                    <a
                      href={mailLink(`Room enquiry: ${r.name} (${r.id})`, `Hello,\n\nI would like to enquire about the ${r.name} (${r.id}) at Pilgrims Guest House  .\n\nThank you.`)}
                      className="rounded-full border border-border px-4 py-2 text-xs font-semibold"
                    >
                      Enquire
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="py-12 text-center text-muted-foreground">No rooms match that search.</p>
          )}

          <p className="mt-10 text-center text-sm text-muted-foreground">
            Pilgrims Lodge has <strong className="text-foreground">23 standard rooms</strong> in total. For full availability across dates,
            please contact us directly.
          </p>
        </div>
      </section>
    </Layout>
  );
}
