import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search, ArrowRight } from "lucide-react";
import { Layout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Devotionals & Articles — Pilgrims Guest House" },
      { name: "description", content: "Devotionals, Bible study notes and retreat reflections from Pilgrims Guest House and MBEFAC." },
      { property: "og:title", content: "Devotionals — Pilgrims Guest House" },
    ],
  }),
  component: Blog,
});

const posts = [
  { slug: "be-still-and-know", title: "Be still, and know that He is God", category: "Devotional", date: "Reflection", excerpt: "Stillness is not the absence of activity; it is the presence of trust. A short meditation on Psalm 46:10." },
  { slug: "preparing-your-heart-for-retreat", title: "Preparing your heart for a retreat", category: "Retreat", date: "Guide", excerpt: "Practical and spiritual steps to make the most of your time away with God." },
  { slug: "the-discipline-of-fasting", title: "The discipline of fasting", category: "Bible Study", date: "Study", excerpt: "What Scripture teaches about fasting — its purpose, its posture, and its promise." },
  { slug: "beauty-for-ashes", title: "Beauty for ashes: the MBEFAC heartbeat", category: "Story", date: "Reflection", excerpt: "Why we exist, and the God who exchanges mourning for joy." },
  { slug: "five-quiet-time-habits", title: "Five quiet-time habits that change everything", category: "Devotional", date: "Guide", excerpt: "Small daily rhythms that deepen your walk with the Lord over time." },
  { slug: "leading-a-church-retreat", title: "Leading a fruitful church retreat", category: "Leadership", date: "Guide", excerpt: "A practical guide for pastors and leaders planning their next retreat." },
];

function Blog() {
  const [q, setQ] = useState("");
  const filtered = useMemo(() => posts.filter(p => (p.title + " " + p.excerpt + " " + p.category).toLowerCase().includes(q.toLowerCase())), [q]);

  return (
    <Layout>
      <PageHero eyebrow="Devotionals" title="Words to renew your heart." description="Articles, devotionals and reflections from our team." />
      <section className="section-pad">
        <div className="container-prose">
          <div className="mb-8 flex items-center gap-3 rounded-full border border-border bg-card px-5 py-3 shadow-[var(--shadow-soft)]">
            <Search className="h-4 w-4 text-muted-foreground" />
            <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search devotionals…" className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground" />
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p) => (
              <article key={p.slug} className="group flex flex-col rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
                <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--gold)]">{p.category} · {p.date}</p>
                <h3 className="mt-3 font-display text-xl">{p.title}</h3>
                <p className="mt-3 flex-1 text-sm text-muted-foreground">{p.excerpt}</p>
                <Link to="/blog" className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-[color:var(--deep)] underline-offset-4 hover:underline">
                  Read soon <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </article>
            ))}
          </div>
          {filtered.length === 0 && <p className="py-12 text-center text-muted-foreground">No devotionals match that search.</p>}
        </div>
      </section>
    </Layout>
  );
}
