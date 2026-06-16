import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, Calendar, Church, HeartHandshake, Quote, Sparkles, Users } from "lucide-react";
import { Layout } from "@/components/site/Layout";
import { SectionHeader } from "@/components/site/SectionHeader";
import { SITE, waLink } from "@/lib/site";
import heroImg from "@/assets/hero-sunrise.jpg";
import bibleImg from "@/assets/bible-candle.jpg";
import roomImg from "@/assets/room-standard.jpg";
import singleImg from "@/assets/room-single.jpg";
import gardenImg from "@/assets/garden-path.jpg";
import confImg from "@/assets/conference-hall.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pilgrims Lodge — Christian Retreat & Accommodation, Ekpoma" },
      {
        name: "description",
        content:
          "A serene Christian retreat centre in Ekpoma, Edo State. Rooms, prayer & study spaces for churches, ministers, and individuals seeking renewal.",
      },
      { property: "og:title", content: "Pilgrims Lodge — A Christian Retreat & Spiritual Haven" },
      { property: "og:image", content: heroImg },
      { property: "twitter:image", content: heroImg },
    ],
  }),
  component: Home,
});

const facilities = [
  { icon: Church, title: "Prayer-friendly atmosphere", desc: "Quiet spaces set apart for prayer, fasting and meditation." },
  { icon: BookOpen, title: "Bible study & meeting rooms", desc: "Conference and study halls for groups of every size." },
  { icon: Users, title: "23 comfortable rooms", desc: "Clean, restful accommodation for individuals and groups." },
  { icon: HeartHandshake, title: "Warm Christian hospitality", desc: "A welcoming team committed to your spiritual rest." },
];

const featuredRooms = [
  { img: roomImg, name: "Twin Standard Room", desc: "Restful twin beds, soft linens and quiet light — ideal for prayer pairs and roommates." },
  { img: singleImg, name: "Single Quiet Room", desc: "A still, simple room for solo retreat, journaling and personal communion." },
];

const events = [
  { date: "Monthly", title: "Open Prayer & Fasting Retreat", desc: "A weekend set apart to seek the Lord in fasting, worship and the Word." },
  { date: "Quarterly", title: "Ministers' Refreshing", desc: "A restorative gathering for pastors, leaders and ministry workers." },
  { date: "Annual", title: "MBEFAC Spiritual Renewal Conference", desc: "Teaching, worship and impartation for personal and corporate revival." },
];

const testimonials = [
  { quote: "We came weary and left renewed. The atmosphere itself ministered to our team.", who: "Pastor B., Benin" },
  { quote: "A truly quiet place. Our youth retreat was Spirit-led from morning to night.", who: "Youth Director, Ekpoma" },
  { quote: "Clean rooms, peaceful grounds and prayerful staff. We will return.", who: "Sister C., Lagos" },
];

function Home() {
  return (
    <Layout>
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <img
          src={heroImg}
          alt="Peaceful golden sunrise over a Christian retreat lodge"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="container-prose relative grid min-h-[88vh] place-items-center py-24 text-[color:var(--ivory)]">
          <div className="max-w-3xl fade-up">
            <p className="eyebrow !text-[color:var(--gold-soft)]">
              <span className="gold-rule mr-3" />
              Pilgrims Lodge · MBEFAC · Ekpoma
            </p>
            <h1 className="heading-display mt-5 text-4xl sm:text-6xl md:text-7xl">
              Be still, and know <span className="italic text-[color:var(--gold-soft)]">that He is God.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
              A peaceful Christian retreat and accommodation centre — set apart for prayer,
              Bible study, ministers' retreats, conferences and personal renewal.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/retreats"
                className="inline-flex items-center gap-2 rounded-full bg-[color:var(--gold)] px-6 py-3 text-sm font-semibold text-[color:var(--deep)] shadow-[var(--shadow-gold)] transition-transform hover:-translate-y-0.5"
              >
                Book a Retreat <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/reservations"
                className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/20"
              >
                Reserve a Room
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white/85 underline-offset-4 hover:text-white hover:underline"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* WELCOME */}
      <section className="section-pad">
        <div className="container-prose grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeader
              eyebrow="Welcome"
              title={<>A sanctuary for weary pilgrims.</>}
              description={
                <>
                  Pilgrims Lodge is owned and operated by {SITE.owner}. We exist to provide
                  believers, churches and ministries with a quiet, comfortable place where the
                  presence of God can be sought without distraction.
                </>
              }
            />
            <p className="mt-6 text-muted-foreground">
              Whether you are coming alone for personal communion, with your leadership team
              for planning, or with a congregation for a full retreat — you are welcome here.
            </p>
            <div className="mt-8 flex gap-4">
              <Link to="/about" className="text-sm font-semibold text-[color:var(--deep)] underline-offset-4 hover:underline">
                Our Story →
              </Link>
              <Link to="/facilities" className="text-sm font-semibold text-[color:var(--deep)] underline-offset-4 hover:underline">
                Our Facilities →
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-3 -z-10 rounded-3xl" style={{ background: "var(--gradient-gold)", opacity: 0.4 }} />
            <img
              src={bibleImg}
              alt="Open Bible beside a candle"
              width={1280}
              height={896}
              loading="lazy"
              className="rounded-2xl object-cover shadow-[var(--shadow-soft)]"
            />
          </div>
        </div>
      </section>

      {/* FACILITIES */}
      <section className="section-pad bg-muted/40">
        <div className="container-prose">
          <SectionHeader
            align="center"
            eyebrow="What we offer"
            title="A place set apart for rest, prayer and renewal"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {facilities.map((f) => (
              <div key={f.title} className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
                <span className="grid h-12 w-12 place-items-center rounded-xl text-[color:var(--deep)]" style={{ background: "var(--gradient-gold)" }}>
                  <f.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-xl">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED ROOMS */}
      <section className="section-pad">
        <div className="container-prose">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeader eyebrow="Accommodation" title="Featured rooms" />
            <Link to="/rooms" className="text-sm font-semibold text-[color:var(--deep)] underline-offset-4 hover:underline">
              View all 23 rooms →
            </Link>
          </div>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {featuredRooms.map((r) => (
              <article key={r.name} className="group overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-soft)]">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={r.img} alt={r.name} width={1280} height={896} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-2xl">{r.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{r.desc}</p>
                  <div className="mt-5 flex gap-3">
                    <a
                      href={waLink(`Hello, I would like to reserve the ${r.name} at Pilgrims Lodge.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-[color:var(--deep)] px-4 py-2 text-xs font-semibold text-[color:var(--ivory)]"
                    >
                      Reserve
                    </a>
                    <a
                      href={waLink(`Hello, I have an enquiry about the ${r.name}.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-border px-4 py-2 text-xs font-semibold text-foreground"
                    >
                      Enquire
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* VERSE BANNER */}
      <section className="relative isolate overflow-hidden">
        <img src={gardenImg} alt="Peaceful garden path" width={1280} height={896} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-[color:var(--deep)]/80" />
        <div className="container-prose relative py-24 text-center text-[color:var(--ivory)]">
          <Sparkles className="mx-auto h-7 w-7 text-[color:var(--gold-soft)]" />
          <p className="mx-auto mt-6 max-w-3xl font-display text-2xl italic leading-relaxed sm:text-3xl md:text-4xl">
            “He maketh me to lie down in green pastures: he leadeth me beside the still waters.
            He restoreth my soul.”
          </p>
          <p className="mt-4 text-sm uppercase tracking-[0.3em] text-[color:var(--gold-soft)]">— Psalm 23:2–3</p>
        </div>
      </section>

      {/* EVENTS */}
      <section className="section-pad">
        <div className="container-prose">
          <SectionHeader eyebrow="Upcoming" title="Retreats & gatherings" />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {events.map((e) => (
              <div key={e.title} className="rounded-2xl border border-border bg-card p-6">
                <p className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[color:var(--gold)]">
                  <Calendar className="h-3.5 w-3.5" />
                  {e.date}
                </p>
                <h3 className="mt-3 font-display text-xl">{e.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{e.desc}</p>
                <Link to="/retreats" className="mt-4 inline-block text-sm font-semibold text-[color:var(--deep)] underline-offset-4 hover:underline">
                  Learn more →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section-pad bg-muted/40">
        <div className="container-prose">
          <SectionHeader align="center" eyebrow="Testimonies" title="Words from our guests" />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure key={t.who} className="rounded-2xl border border-border bg-card p-6">
                <Quote className="h-6 w-6 text-[color:var(--gold)]" />
                <blockquote className="mt-3 font-display text-lg italic text-foreground">“{t.quote}”</blockquote>
                <figcaption className="mt-4 text-xs uppercase tracking-[0.18em] text-muted-foreground">{t.who}</figcaption>
              </figure>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/testimonials" className="inline-block rounded-full border border-border px-5 py-2 text-sm font-semibold text-foreground hover:border-[color:var(--gold)]">
              Read more testimonies
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad">
        <div className="container-prose">
          <div className="relative overflow-hidden rounded-3xl border border-border bg-[color:var(--deep)] p-10 text-[color:var(--ivory)] shadow-[var(--shadow-deep)] sm:p-14">
            <img src={confImg} alt="" aria-hidden width={1280} height={896} loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-15" />
            <div className="relative max-w-2xl">
              <p className="eyebrow !text-[color:var(--gold-soft)]">Plan your retreat</p>
              <h2 className="heading-display mt-3 text-3xl sm:text-4xl md:text-5xl">
                Bring your church, your team, or simply your weary heart.
              </h2>
              <p className="mt-5 text-white/80">
                Reach us by WhatsApp, email or phone — we will gladly help you plan your stay.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link to="/reservations" className="rounded-full bg-[color:var(--gold)] px-6 py-3 text-sm font-semibold text-[color:var(--deep)]">
                  Reserve now
                </Link>
                <Link to="/contact" className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10">
                  Contact us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
