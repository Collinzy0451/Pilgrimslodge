import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { CheckCircle2, MessageCircle, Mail } from "lucide-react";
import { Layout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { SITE, waLink, mailLink } from "@/lib/site";

export const Route = createFileRoute("/reservations")({
  head: () => ({
    meta: [
      { title: "Reserve a Room — Pilgrims Guest House" },
      { name: "description", content: "Reserve your room or retreat at Pilgrims Guest House. Send your details directly via WhatsApp or email." },
      { property: "og:title", content: "Reservations — Pilgrims Guest House" },
    ],
  }),
  component: Reservations,
});

function Reservations() {
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    church: "",
    guests: "1",
    arrival: "",
    departure: "",
    purpose: "Personal retreat",
    notes: "",
  });
  const [sent, setSent] = useState<null | "whatsapp" | "email">(null);

  const update = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const buildMessage = () => {
    return [
      `*New Reservation Request — Pilgrims Guest House*`,
      ``,
      `• Full Name: ${form.fullName}`,
      `• Phone: ${form.phone}`,
      `• Email: ${form.email}`,
      `• Church / Organisation: ${form.church || "—"}`,
      `• Number of Guests: ${form.guests}`,
      `• Arrival: ${form.arrival}`,
      `• Departure: ${form.departure}`,
      `• Purpose of Visit: ${form.purpose}`,
      `• Additional Notes: ${form.notes || "—"}`,
    ].join("\n");
  };

  const isValid = form.fullName.trim() && form.phone.trim() && form.arrival && form.departure;

  const submit = (channel: "whatsapp" | "email") => (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid) return;
    const msg = buildMessage();
    if (channel === "whatsapp") {
      window.open(waLink(msg), "_blank", "noopener,noreferrer");
    } else {
      window.location.href = mailLink(`Reservation request — ${form.fullName}`, msg);
    }
    setSent(channel);
  };

  const inputCls = "w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm outline-none transition-colors focus:border-[color:var(--gold)] focus:ring-2 focus:ring-[color:var(--gold)]/20";
  const labelCls = "block text-xs font-semibold uppercase tracking-[0.12em] text-foreground/70";

  return (
    <Layout>
      <PageHero
        eyebrow="Reservations"
        title="Reserve your place of peace."
        description="Complete the form below. Your reservation request will be sent directly to our team via WhatsApp or email — we'll confirm shortly."
      />

      <section className="section-pad">
        <div className="container-prose grid gap-10 lg:grid-cols-[2fr,1fr]">
          <form className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)] sm:p-8" onSubmit={submit("whatsapp")}>
            {sent && (
              <div className="mb-6 flex items-start gap-3 rounded-xl border border-[color:var(--gold)]/40 bg-[color:var(--gold-soft)]/40 p-4 text-sm">
                <CheckCircle2 className="mt-0.5 h-5 w-5 text-[color:var(--gold)]" />
                <p>
                  Reservation prepared and opened in {sent === "whatsapp" ? "WhatsApp" : "your email app"}. Please tap{" "}
                  <strong>send</strong> to deliver it to our team. We'll respond shortly.
                </p>
              </div>
            )}

            <div className="grid gap-5 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label className={labelCls}>Full name *</label>
                <input className={inputCls} required value={form.fullName} onChange={update("fullName")} />
              </div>
              <div>
                <label className={labelCls}>Phone number *</label>
                <input className={inputCls} required type="tel" value={form.phone} onChange={update("phone")} />
              </div>
              <div>
                <label className={labelCls}>Email address</label>
                <input className={inputCls} type="email" value={form.email} onChange={update("email")} />
              </div>
              <div className="sm:col-span-2">
                <label className={labelCls}>Church / Organisation</label>
                <input className={inputCls} value={form.church} onChange={update("church")} />
              </div>
              <div>
                <label className={labelCls}>Number of guests *</label>
                <input className={inputCls} required type="number" min={1} value={form.guests} onChange={update("guests")} />
              </div>
              <div>
                <label className={labelCls}>Purpose of visit</label>
                <select className={inputCls} value={form.purpose} onChange={update("purpose")}>
                  <option>Personal retreat</option>
                  <option>Group / Church retreat</option>
                  <option>Ministers' retreat</option>
                  <option>Conference</option>
                  <option>Bible study</option>
                  <option>Prayer & fasting</option>
                  <option>Accommodation only</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className={labelCls}>Arrival date *</label>
                <input className={inputCls} required type="date" value={form.arrival} onChange={update("arrival")} />
              </div>
              <div>
                <label className={labelCls}>Departure date *</label>
                <input className={inputCls} required type="date" value={form.departure} onChange={update("departure")} />
              </div>
              <div className="sm:col-span-2">
                <label className={labelCls}>Additional notes</label>
                <textarea className={inputCls + " min-h-[120px]"} value={form.notes} onChange={update("notes")} />
              </div>
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <button
                type="submit"
                disabled={!isValid}
                className="inline-flex items-center gap-2 rounded-full bg-[color:var(--whatsapp)] px-6 py-3 text-sm font-semibold text-white shadow-[var(--shadow-soft)] disabled:opacity-50"
              >
                <MessageCircle className="h-4 w-4" /> Send via WhatsApp
              </button>
              <button
                type="button"
                disabled={!isValid}
                onClick={submit("email") as unknown as () => void}
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold disabled:opacity-50"
              >
                <Mail className="h-4 w-4" /> Send via Email
              </button>
            </div>
            <p className="mt-3 text-xs text-muted-foreground">
              * Required fields. We will confirm availability and total cost on response.
            </p>
          </form>

          <aside className="space-y-6">
            <div className="rounded-2xl border border-border bg-muted/40 p-6">
              <h3 className="font-display text-xl">Prefer to talk?</h3>
              <p className="mt-2 text-sm text-muted-foreground">Reach us directly any time:</p>
              <ul className="mt-4 space-y-3 text-sm">
                <li><strong>Phone:</strong> <a className="underline-offset-4 hover:underline" href={`tel:${SITE.phoneIntl}`}>{SITE.phone}</a></li>
                <li><strong>WhatsApp:</strong> <a className="underline-offset-4 hover:underline" href={waLink("Hello, I'd like to make a reservation at Pilgrims Guest House.")} target="_blank" rel="noopener noreferrer">{SITE.whatsapp}</a></li>
                <li><strong>Email:</strong> <a className="underline-offset-4 hover:underline" href={`mailto:${SITE.email}`}>{SITE.email}</a></li>
              </ul>
            </div>
            <blockquote className="rounded-2xl border border-border bg-card p-6 font-display text-lg italic">
              “In returning and rest shall ye be saved; in quietness and in confidence shall be your strength.”
              <footer className="mt-2 text-xs uppercase tracking-[0.2em] not-italic text-gold">Isaiah 30:15</footer>
            </blockquote>
          </aside>
        </div>
      </section>
    </Layout>
  );
}
