import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { CheckCircle2, Mail } from "lucide-react";
import { Layout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { mailLink, waLink } from "@/lib/site";
import prayerImg from "@/assets/prayer-hands.jpg";

export const Route = createFileRoute("/prayer-request")({
  head: () => ({
    meta: [
      { title: "Prayer Request — Pilgrims Guest House" },
      { name: "description", content: "Submit a prayer request to the Pilgrims Guest House / MBEFAC intercessory team. We will agree with you in prayer." },
      { property: "og:title", content: "Prayer Request — Pilgrims Guest House" },
    ],
  }),
  component: PrayerPage,
});

function PrayerPage() {
  const [form, setForm] = useState({ name: "", email: "", request: "", confidential: true });
  const [sent, setSent] = useState(false);
  const update = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: k === "confidential" ? (e.target as HTMLInputElement).checked : e.target.value }));

  const valid = form.request.trim().length > 5;

  const submit = (channel: "email" | "whatsapp") => (e: React.FormEvent) => {
    e.preventDefault();
    if (!valid) return;
    const body = [
      `*Prayer Request*`,
      ``,
      `• Name: ${form.name || "Anonymous"}`,
      `• Email: ${form.email || "—"}`,
      `• Confidential: ${form.confidential ? "Yes" : "No"}`,
      ``,
      form.request,
    ].join("\n");
    if (channel === "email") window.location.href = mailLink("Prayer request", body);
    else window.open(waLink(body), "_blank", "noopener,noreferrer");
    setSent(true);
  };

  const inputCls = "w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-[color:var(--gold)] focus:ring-2 focus:ring-[color:var(--gold)]/20";

  return (
    <Layout>
      <PageHero
        eyebrow="Prayer request"
        title="Let us pray with you."
        description="Share your request with our intercessory team. We will stand with you in faith before the Lord."
      />

      <section className="section-pad">
        <div className="container-prose grid gap-10 lg:grid-cols-[1.2fr,1fr]">
          <form className="rounded-2xl border border-border bg-card p-6 shadow-(--shadow-soft) sm:p-8" onSubmit={submit("email")}>
            {sent && (
              <div className="mb-6 flex items-start gap-3 rounded-xl border border-(--gold)/40 bg-(--gold-soft)/40 p-4 text-sm">
                <CheckCircle2 className="mt-0.5 h-5 w-5 text-gold" />
                <p>Your request is ready — please tap <strong>send</strong> in the app that just opened. We are praying with you.</p>
              </div>
            )}
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-[0.12em] text-foreground/70">Name (optional)</label>
                <input className={inputCls} value={form.name} onChange={update("name")} />
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-[0.12em] text-foreground/70">Email (optional)</label>
                <input type="email" className={inputCls} value={form.email} onChange={update("email")} />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-xs font-semibold uppercase tracking-[0.12em] text-foreground/70">Your prayer request *</label>
                <textarea required className={inputCls + " min-h-45"} value={form.request} onChange={update("request")} placeholder="Share whatever is on your heart…" />
              </div>
              <label className="sm:col-span-2 flex items-center gap-2 text-sm text-muted-foreground">
                <input type="checkbox" checked={form.confidential} onChange={update("confidential")} />
                Keep this request confidential to the intercessory team.
              </label>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <button type="submit" disabled={!valid} className="inline-flex items-center gap-2 rounded-full bg-deep px-6 py-3 text-sm font-semibold text-ivory disabled:opacity-50">
                <Mail className="h-4 w-4" /> Send via Email
              </button>
              <button type="button" disabled={!valid} onClick={submit("whatsapp") as unknown as () => void} className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold disabled:opacity-50">
                Send via WhatsApp
              </button>
            </div>
          </form>

          <aside className="space-y-6">
            <img src={prayerImg} alt="Hands folded in prayer over an open Bible" width={1280} height={896} loading="lazy" className="rounded-2xl object-cover shadow-(--shadow-soft)" />
            <blockquote className="rounded-2xl border border-border bg-muted/40 p-6 font-display text-lg italic">
              “Again I say unto you, That if two of you shall agree on earth as touching any
              thing that they shall ask, it shall be done for them of my Father which is in heaven.”
              <footer className="mt-3 text-xs uppercase tracking-[0.2em] not-italic text-gold">Matthew 18:19</footer>
            </blockquote>
          </aside>
        </div>
      </section>
    </Layout>
  );
}
