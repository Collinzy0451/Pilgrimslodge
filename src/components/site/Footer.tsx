import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone, MessageCircle } from "lucide-react";
import { NAV, SITE, waLink } from "@/lib/site";
import logo from "@/assets/logo.jpeg";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-border bg-[color:var(--deep)] text-[color:var(--ivory)]">
      <div className="container-prose grid gap-10 py-14 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <span
              aria-hidden
              className="grid h-10 w-10 place-items-center rounded-full text-[color:var(--deep)]"
              style={{ background: "var(--gradient-gold)" }}
            >
<span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gold overflow-hidden">
  <img
    src={logo}
    alt="Pilgrims Lodge Logo"
    className="w-full h-full object-cover"
  />
</span>            </span>
            <span className="font-display text-xl">Pilgrims Guest House</span>
          </div>
          <p className="mt-4 max-w-sm text-sm text-white/70">
            A place set apart for rest, prayer, and renewal. Owned and operated by{" "}
            <span className="text-[color:var(--gold-soft)]">{SITE.owner}</span>.
          </p>
          <p className="mt-6 font-display text-base italic text-[color:var(--gold-soft)]">
            “Come unto me, all ye that labour and are heavy laden, and I will give you rest.” — Matthew 11:28
          </p>
        </div>

        <div>
          <h4 className="eyebrow !text-[color:var(--gold-soft)]">Explore</h4>
          <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
            {NAV.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="text-white/75 transition-colors hover:text-[color:var(--gold-soft)]">
                  {n.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/prayer-request" className="text-white/75 transition-colors hover:text-[color:var(--gold-soft)]">
                Prayer Request
              </Link>
            </li>
            <li>
              <Link to="/testimonials" className="text-white/75 transition-colors hover:text-[color:var(--gold-soft)]">
                Testimonials
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="eyebrow !text-[color:var(--gold-soft)]">Visit & Connect</h4>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex gap-3 text-white/80">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--gold-soft)]" />
              <span>{SITE.address}</span>
            </li>
            <li>
              <a href={`tel:${SITE.phoneIntl}`} className="flex items-center gap-3 text-white/80 hover:text-[color:var(--gold-soft)]">
                <Phone className="h-4 w-4 text-[color:var(--gold-soft)]" /> {SITE.phone}
              </a>
            </li>
            <li>
              <a
                href={waLink("Hello, I would like to enquire about Pilgrims Lodge.")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/80 hover:text-[color:var(--gold-soft)]"
              >
                <MessageCircle className="h-4 w-4 text-[color:var(--gold-soft)]" /> WhatsApp {SITE.whatsapp}
              </a>
            </li>
            <li>
              <a href={`mailto:${SITE.email}`} className="flex items-center gap-3 text-white/80 hover:text-[color:var(--gold-soft)]">
                <Mail className="h-4 w-4 text-[color:var(--gold-soft)]" /> {SITE.email}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-prose flex flex-col items-center justify-between gap-2 py-5 text-xs text-white/60 sm:flex-row">
          <p>© {new Date().getFullYear()} Pilgrims Guest House — MBEFAC. All rights reserved.</p>
          <p>Built as a place of peace, prayer, and renewal.</p>
        </div>
      </div>
    </footer>
  );
}
