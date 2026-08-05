import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import Compound from "@/assets/compound.jpeg";
import Room from "@/assets/room5.jpeg";
import Single from "@/assets/room3.jpeg";
import Table from "@/assets/table1.jpeg";
import conf from "@/assets/Hall1.jpeg";
import Equip from "@/assets/room4.jpeg";
import Audience from "@/assets/audience.jpeg";
import Premise from "@/assets/premises.jpeg";
import exterior from "@/assets/outside.jpeg";
import doorSign from "@/assets/door1.jpeg";
import doorpost from "@/assets/door2.jpeg"; 
import doorIcon from "@/assets/door3.jpeg";
import door from "@/assets/door4.jpeg";

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
  { src: Compound, caption: "Sunrise over the grounds", span: "lg:col-span-2 lg:row-span-2" },
  { src: Room, caption: "Standard room" },
  { src: Single, caption: "Quiet single room" },
  { src: conf, caption: "Meeting hall" },
  { src: Equip, caption: "Equipped rooms" },
  { src: Table, caption: "Devotion Table" },
  { src: Premise, caption: "Serene surroundings" },
  { src: Audience, caption: "Audience space in the hall" },
  { src: exterior, caption: "Exterior at dusk" },
  { src: doorSign, caption: "Grow in Faith" },
  { src: doorpost, caption: "Peace beyond" },
  { src: doorIcon, caption: "Grace runs the race" },
  { src: door, caption: "God's love" },
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
                className={`group relative overflow-hidden rounded-2xl border border-border shadow-(--shadow-soft) ${it.span ?? ""}`}
              >
                <img
                  src={it.src}
                  alt={it.caption}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/70 to-transparent p-3 text-xs font-medium text-white opacity-0 transition-opacity group-hover:opacity-100">
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
