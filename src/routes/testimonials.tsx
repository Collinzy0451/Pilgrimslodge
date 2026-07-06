import { createFileRoute } from "@tanstack/react-router";
import { Quote } from "lucide-react";
import { Layout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Testimonies — Pilgrims Guest House" },
      { name: "description", content: "Hear from guests, churches and ministers who have experienced rest and renewal at Pilgrims Guest House." },
      { property: "og:title", content: "Testimonies — Pilgrims Guest House" },
    ],
  }),
  component: Testimonials,
});

const list = [
  { quote: "Our team came in exhausted and left with fresh fire. The atmosphere itself ministered to us.", who: "Pastor B.", role: "Lead Pastor, Benin City" },
  { quote: "Three days of prayer in such a peaceful place reset my walk with God.", who: "Sister C.", role: "Lagos" },
  { quote: "Clean rooms, quiet grounds, and prayerful staff. We will be returning every year.", who: "Bro. Emmanuel", role: "Youth Director" },
  { quote: "An answered prayer for ministers who simply need to be still before the Lord.", who: "Rev. M.", role: "Itinerant minister" },
  { quote: "The dining was warm, the chapel was holy, and the people made us family.", who: "Mrs. A.", role: "Church secretary" },
  { quote: "I came carrying ashes. I left wearing beauty. To God be the glory.", who: "Bro. T.", role: "Personal retreat guest" },
];

function Testimonials() {
  return (
    <Layout>
      <PageHero eyebrow="Testimonies" title="Lives renewed. Hearts restored." />
      <section className="section-pad">
        <div className="container-prose">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {list.map((t, i) => (
              <figure key={i} className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
                <Quote className="h-6 w-6 text-[color:var(--gold)]" />
                <blockquote className="mt-3 font-display text-lg italic">“{t.quote}”</blockquote>
                <figcaption className="mt-5 text-sm">
                  <p className="font-semibold">{t.who}</p>
                  <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{t.role}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
