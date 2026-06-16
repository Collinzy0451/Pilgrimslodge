import { Link, useRouterState } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { NAV, SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="container-prose flex h-16 items-center justify-between gap-4 sm:h-20">
        <Link to="/" className="flex min-w-0 items-center gap-3" onClick={() => setOpen(false)}>
          <span
            aria-hidden
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full text-[color:var(--deep)] shadow-[var(--shadow-soft)]"
            style={{ background: "var(--gradient-gold)" }}
          >
            <span className="font-display text-xl font-semibold leading-none">P</span>
          </span>
          <span className="min-w-0">
            <span className="block font-display text-lg leading-tight tracking-tight text-foreground sm:text-xl">
              Pilgrims Lodge
            </span>
            <span className="block truncate text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
              A Christian Retreat
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {NAV.map((item) => {
            const active = item.to === "/" ? pathname === "/" : pathname.startsWith(item.to);
            return (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  "text-sm font-medium transition-colors",
                  active ? "text-[color:var(--gold)]" : "text-foreground/75 hover:text-foreground",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={`tel:${SITE.phoneIntl}`}
            className="hidden items-center gap-2 rounded-full border border-border px-3 py-1.5 text-xs font-medium text-foreground/80 transition-colors hover:border-[color:var(--gold)] hover:text-foreground md:inline-flex"
          >
            <Phone className="h-3.5 w-3.5" />
            {SITE.phone}
          </a>
          <Link
            to="/reservations"
            className="hidden rounded-full bg-[color:var(--deep)] px-4 py-2 text-sm font-medium text-[color:var(--ivory)] shadow-[var(--shadow-soft)] transition-transform hover:-translate-y-0.5 sm:inline-block"
          >
            Reserve
          </Link>
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-md border border-border text-foreground lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="container-prose flex flex-col py-3">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="border-b border-border/50 py-3 text-sm font-medium text-foreground/80 last:border-0"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
