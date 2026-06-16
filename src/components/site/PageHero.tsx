import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-[color:var(--deep)] text-[color:var(--ivory)]">
      <div
        aria-hidden
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse at top, color-mix(in oklab, var(--gold) 35%, transparent), transparent 60%)",
        }}
      />
      <div className="container-prose relative py-20 sm:py-28">
        {eyebrow && (
          <p className="eyebrow !text-[color:var(--gold-soft)]">
            <span className="gold-rule mr-3" />
            {eyebrow}
          </p>
        )}
        <h1 className="heading-display mt-4 max-w-3xl text-4xl sm:text-5xl md:text-6xl">{title}</h1>
        {description && (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">{description}</p>
        )}
      </div>
    </section>
  );
}
