import { createFileRoute, Link } from "@tanstack/react-router";
import { Flame, BookOpen, HandHeart, Users, Crown, Sparkles, GraduationCap, User } from "lucide-react";
import { Layout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { waLink, mailLink } from "@/lib/site";

export const Route = createFileRoute("/retreats")({
  head: () => ({
    meta: [
      { title: "Christian Retreats & Conferences — Pilgrims Guest House" },
      { name: "description", content: "Prayer, fasting, Bible study, ministers' retreats, leadership and youth retreats hosted at Pilgrims Guest House, Ekpoma." },
      { property: "og:title", content: "Christian Retreats at Pilgrims Guest House" },
    ],
  }),
  component: Retreats,
});

const programs = [
  { icon: HandHeart, title: "Prayer Retreats", desc: "Quiet days set apart to seek God in extended, focused prayer." },
  { icon: BookOpen, title: "Bible Study Retreats", desc: "Deep dives into Scripture, guided study sessions and group discussion." },
  { icon: Flame, title: "Fasting Programs", desc: "A supportive environment for personal or congregational fasts." },
  { icon: Crown, title: "Ministers' Retreats", desc: "Restoration and refreshing for pastors, evangelists and ministry workers." },
  { icon: Users, title: "Church Conferences", desc: "Full-service hosting for your congregation's annual conferences and crusades planning." },
  { icon: Sparkles, title: "Leadership Retreats", desc: "Vision, planning and impartation for elders, deacons and ministry leaders." },
  { icon: GraduationCap, title: "Youth Retreats", desc: "Energetic, prayer-filled gatherings for the next generation." },
  { icon: User, title: "Personal Renewal", desc: "Solo retreats for journaling, healing, hearing and rebuilding." },
];

function Retreats() {
  return (
    <Layout>
      <PageHero
        eyebrow="Retreats"
        title="Set apart. Refreshed. Renewed."
        description="Pilgrims Guest House hosts a wide range of Christian retreats — from personal solitude to congregation-wide gatherings."
      />

      <section className="section-pad">
        <div className="container-prose">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {programs.map((p) => (
              <div key={p.title} className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
                <span className="grid h-12 w-12 place-items-center rounded-xl text-[color:var(--deep)]" style={{ background: "var(--gradient-gold)" }}>
                  <p.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-lg">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 rounded-3xl border border-border bg-[color:var(--deep)] p-10 text-[color:var(--ivory)] sm:p-14">
            <div className="grid gap-8 md:grid-cols-2 md:items-end">
              <div>
                <p className="eyebrow !text-[color:var(--gold-soft)]">Book a retreat</p>
                <h2 className="heading-display mt-3 text-3xl sm:text-4xl">
                  Tell us about your group — we'll prepare a place.
                </h2>
                <p className="mt-4 text-white/80">
                  Share your dates, group size and the kind of retreat you have in mind.
                  We will respond by WhatsApp or email with availability and tailored options.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href={waLink("Hello, I would like to BOOK A RETREAT at Pilgrims Guest House.\n\n• Type of retreat: \n• Group size: \n• Preferred dates: \n• Contact person: ")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-gold px-6 py-3 text-sm font-semibold text-deep"
                >
                  Book via WhatsApp
                </a>
                <a
                  href={mailLink("Retreat booking enquiry", "Hello,\n\nI would like to book a retreat at Pilgrims Guest House.\n\n• Type of retreat:\n• Group size:\n• Preferred dates:\n• Contact person:\n\nThank you.")}
                  className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
                >
                  Email us
                </a>
                <Link to="/reservations" className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10">
                  Reservation form
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
