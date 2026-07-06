import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import hero from "@/assets/hero-sunrise.jpg";
import room from "@/assets/room-standard.jpg";
import single from "@/assets/room-single.jpg";
import bible from "@/assets/bible-candle.jpg";
import conf from "@/assets/conference-hall.jpg";
import garden from "@/assets/garden-path.jpg";
import prayer from "@/assets/prayer-hands.jpg";
import dining from "@/assets/dining-hall.jpg";
import exterior from "@/assets/lodge-exterior.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Pilgrims Guest House" },
      { name: "description", content: "Photos of Pilgrims Guest House — rooms, conference areas, gardens, dining and prayer spaces." },
      { property: "og:title", content: "Gallery — Pilgrims Guest House" },
    ],
  }),
  component: Gallery,
});

const items = [
  { src: hero, caption: "Sunrise over the grounds", span: "lg:col-span-2 lg:row-span-2" },
  { src: room, caption: "Standard twin room" },
  { src: single, caption: "Quiet single room" },
  { src: conf, caption: "Conference hall" },
  { src: garden, caption: "Garden path" },
  { src: bible, caption: "Daily devotion" },
  { src: dining, caption: "Dining hall" },
  { src: prayer, caption: "Prayer session" },
  { src: exterior, caption: "Exterior at dusk" },
];

function Gallery() {
  return (
    <Layout>
      <PageHero eyebrow="Gallery" title="A glimpse of our peaceful home." />
      <section className="section-pad">
        <div className="container-prose">
          <div className="grid auto-rows-[200px] grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 lg:auto-rows-[220px]">
            {items.map((it, i) => (
              <figure
                key={i}
                className={`group relative overflow-hidden rounded-2xl border border-border shadow-[var(--shadow-soft)] ${it.span ?? ""}`}
              >
                <img
                  src={it.src}
                  alt={it.caption}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3 text-xs font-medium text-white opacity-0 transition-opacity group-hover:opacity-100">
                  {it.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
