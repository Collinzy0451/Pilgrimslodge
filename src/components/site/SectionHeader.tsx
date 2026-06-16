import type { ReactNode } from "react";

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && (
        <p className="eyebrow flex items-center gap-3">
          {align === "center" && <span className="gold-rule" />}
          {eyebrow}
          <span className="gold-rule" />
        </p>
      )}
      <h2 className="heading-display mt-3 text-3xl text-foreground sm:text-4xl md:text-5xl">{title}</h2>
      {description && <p className="mt-4 text-base leading-relaxed text-muted-foreground">{description}</p>}
    </div>
  );
}
