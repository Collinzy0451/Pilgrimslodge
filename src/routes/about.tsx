import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { SITE } from "@/lib/site";
import bibleImg from "@/assets/bible-candle.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Pilgrims Guest House — MBEFAC | Ekpoma, Edo State" },
      { name: "description", content: "Learn about Pilgrims Guest House and Maranatha Beauty For Ashes Club (MBEFAC) — our mission, vision and commitment to Christian growth." },
      { property: "og:title", content: "About Pilgrims Guest House & MBEFAC" },
    ],
  }),
  component: About,
});

function About() {
  return (
    <Layout>
      <PageHero
        eyebrow="About us"
        title="A house built for prayer, study and rest."
        description={`Pilgrims Guest House is owned and operated by ${SITE.owner}. We exist for the spiritual formation of God's people.`}
      />

      <section className="section-pad">
        <div className="container-prose grid gap-12 lg:grid-cols-[1.2fr,1fr]">
          <div className="space-y-6 text-base leading-relaxed text-foreground">
            <div>
              <p className="eyebrow">Our story</p>
              <h2 className="heading-display mt-3 text-3xl sm:text-4xl">Born out of a longing for renewal.</h2>
              <p className="mt-4 text-muted-foreground">
                Pilgrims Guest House was established as a tangible expression of the heart of
                Maranatha Beauty For Ashes Club (MBEFAC) — a Christian fellowship committed
                to seeing lives turned from ashes into beauty through the power of God. We
                noticed how rare it is to find a place that is both comfortable and truly
                set apart for the Lord, so we built one.
              </p>
            </div>

            <div>
              <h3 className="font-display text-2xl">About MBEFAC</h3>
              <p className="mt-3 text-muted-foreground">
                Maranatha Beauty For Ashes Club is a body of believers passionate about
                prayer, the Word of God, and the spiritual transformation of His people.
                The Guest House is one of the practical ministries through which MBEFAC serves
                churches, ministries and individuals across the body of Christ.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-2xl border border-border bg-card p-6">
                <p className="eyebrow">Mission</p>
                <p className="mt-3 text-sm text-muted-foreground">
                  To provide a peaceful environment where believers can encounter God
                  through prayer, the Word, and quiet reflection.
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-card p-6">
                <p className="eyebrow">Vision</p>
                <p className="mt-3 text-sm text-muted-foreground">
                  To be a trusted spiritual haven raising up renewed believers, healthy
                  churches and refreshed ministers across the nations.
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-display text-2xl">Our core values</h3>
              <ul className="mt-4 grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
                {["Christ-centered hospitality","Prayer & the Word","Holiness and reverence","Servant-hearted care","Excellence in stewardship","Unity in the body of Christ"].map(v => (
                  <li key={v} className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                    <span>{v}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <aside className="space-y-6">
            <img src={bibleImg} alt="Bible and candle" width={1280} height={896} loading="lazy" className="rounded-2xl object-cover shadow-[var(--shadow-soft)]" />
            <blockquote className="rounded-2xl border border-border bg-muted/50 p-6 font-display text-lg italic">
              “To appoint unto them that mourn in Zion, to give unto them beauty for ashes,
              the oil of joy for mourning, the garment of praise for the spirit of heaviness.”
              <footer className="mt-3 text-xs uppercase not-italic tracking-[0.2em] text-gold">Isaiah 61:3</footer>
            </blockquote>
          </aside>
        </div>
      </section>
    </Layout>
  );
}
