import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, MapPin, MessageCircle, Phone, CheckCircle2 } from "lucide-react";
import { Layout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { SITE, mailLink, waLink } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Pilgrims Guest House, Ekpoma" },
      { name: "description", content: "Contact Pilgrims Guest House in Ekpoma, Edo State. Phone, WhatsApp, email and directions." },
      { property: "og:title", content: "Contact Pilgrims Guest House" },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "General enquiry", message: "" });
  const [sent, setSent] = useState(false);
  const update = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const valid = form.name.trim() && form.message.trim();

  const submit = (channel: "whatsapp" | "email") => (e: React.FormEvent) => {
    e.preventDefault();
    if (!valid) return;
    const body = [
      `*Contact message — Pilgrims Guest House*`,
      ``,
      `• Name: ${form.name}`,
      `• Email: ${form.email || "—"}`,
      `• Subject: ${form.subject}`,
      ``,
      form.message,
    ].join("\n");
    if (channel === "whatsapp") window.open(waLink(body), "_blank", "noopener,noreferrer");
    else window.location.href = mailLink(`Contact — ${form.subject}`, body);
    setSent(true);
  };

  const inputCls = "w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-[color:var(--gold)] focus:ring-2 focus:ring-[color:var(--gold)]/20";

  return (
    <Layout>
      <PageHero eyebrow="Contact" title="We'd love to hear from you." description="Reach out by phone, WhatsApp, email — or send a message below." />

      <section className="section-pad">
        <div className="container-prose grid gap-10 lg:grid-cols-[1fr,1.2fr]">
          <div className="space-y-4">
            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="font-display text-xl">Visit us</h3>
              <p className="mt-3 flex gap-3 text-sm text-muted-foreground">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" /> {SITE.address}
              </p>
            </div>
            <a href={`tel:${SITE.phoneIntl}`} className="flex items-start gap-3 rounded-2xl border border-border bg-card p-6 transition-colors hover:border-[color:var(--gold)]">
              <Phone className="mt-1 h-5 w-5 text-gold" />
              <div>
                <h3 className="font-display text-lg">Phone</h3>
                <p className="text-sm text-muted-foreground">{SITE.phone}</p>
              </div>
            </a>
            <a href={waLink("Hello, I would like to make an enquiry about Pilgrims Guest House.")} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 rounded-2xl border border-border bg-card p-6 transition-colors hover:border-[color:var(--gold)]">
              <MessageCircle className="mt-1 h-5 w-5 text-whatsapp" />
              <div>
                <h3 className="font-display text-lg">WhatsApp</h3>
                <p className="text-sm text-muted-foreground">{SITE.whatsapp}</p>
              </div>
            </a>
            <a href={`mailto:${SITE.email}`} className="flex items-start gap-3 rounded-2xl border border-border bg-card p-6 transition-colors hover:border-[color:var(--gold)]">
              <Mail className="mt-1 h-5 w-5 text-gold" />
              <div>
                <h3 className="font-display text-lg">Email</h3>
                <p className="text-sm text-muted-foreground">{SITE.email}</p>
              </div>
            </a>
          </div>

          <form className="rounded-2xl border border-border bg-card p-6 shadow-(--shadow-soft) sm:p-8" onSubmit={submit("email")}>
            {sent && (
              <div className="mb-6 flex items-start gap-3 rounded-xl border border-(--gold)/40 bg-(--gold-soft)/40 p-4 text-sm">
                <CheckCircle2 className="mt-0.5 h-5 w-5 text-gold" />
                <p>Your message is ready to send. Please tap <strong>send</strong> in the app that just opened. We'll respond shortly.</p>
              </div>
            )}
            <div className="grid gap-5">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-[0.12em] text-foreground/70">Your name *</label>
                <input required className={inputCls} value={form.name} onChange={update("name")} />
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-[0.12em] text-foreground/70">Email</label>
                <input type="email" className={inputCls} value={form.email} onChange={update("email")} />
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-[0.12em] text-foreground/70">Subject</label>
                <select className={inputCls} value={form.subject} onChange={update("subject")}>
                  <option>General enquiry</option>
                  <option>Room availability</option>
                  <option>Retreat booking</option>
                  <option>Conference hosting</option>
                  <option>Partnership / Ministry</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-[0.12em] text-foreground/70">Message *</label>
                <textarea required className={inputCls + " min-h-[140px]"} value={form.message} onChange={update("message")} />
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <button type="submit" disabled={!valid} className="inline-flex items-center gap-2 rounded-full bg-[color:var(--deep)] px-6 py-3 text-sm font-semibold text-[color:var(--ivory)] disabled:opacity-50">
                <Mail className="h-4 w-4" /> Send via Email
              </button>
              <button type="button" disabled={!valid} onClick={submit("whatsapp") as unknown as () => void} className="inline-flex items-center gap-2 rounded-full bg-[color:var(--whatsapp)] px-6 py-3 text-sm font-semibold text-white disabled:opacity-50">
                <MessageCircle className="h-4 w-4" /> Send via WhatsApp
              </button>
            </div>
          </form>
        </div>

        <div className="container-prose mt-16">
          <div className="overflow-hidden rounded-2xl border border-border shadow-[var(--shadow-soft)]">
            <iframe
              title="Pilgrims Guest House location"
              src={SITE.mapEmbed}
              width="100%"
              height="420"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block w-full"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
}
