const severityConfig = {
  high: {
    icon: "●",
    bg: "bg-red-400/8",
    border: "border-red-400/15",
    text: "text-red-400",
  },
  medium: {
    icon: "◉",
    bg: "bg-yellow-400/8",
    border: "border-yellow-400/15",
    text: "text-yellow-400",
  },
  low: {
    icon: "○",
    bg: "bg-blue-400/8",
    border: "border-blue-400/15",
    text: "text-blue-400",
  },
};

export default function PainPoints({
  performance,
  seo,
  responsive,
}: {
  performance: number | null;
  seo: number | null;
  responsive: boolean | null;
}) {
  const points: { label: string; severity: "high" | "medium" | "low" }[] = [];

  if (performance === null && seo === null && responsive === null) {
    points.push({
      label: "Aucune présence en ligne",
      severity: "high",
    });
    points.push({ label: "Pas de canal d'acquisition digital", severity: "high" });
    points.push({ label: "Dépendance au bouche-à-oreille", severity: "medium" });
  } else {
    if (performance !== null && performance < 50) {
      points.push({ label: "Site lent", severity: "high" });
    }
    if (seo !== null && seo < 40) {
      points.push({ label: "SEO faible", severity: "high" });
    }
    if (responsive === false) {
      points.push({ label: "Non responsive", severity: "high" });
    }
    if (performance !== null && performance >= 50 && performance < 70) {
      points.push({ label: "Performance moyenne", severity: "medium" });
    }
    if (seo !== null && seo >= 40 && seo < 60) {
      points.push({ label: "SEO insuffisant", severity: "medium" });
    }
  }

  if (points.length === 0) {
    points.push({
      label: "Présence web correcte",
      severity: "low",
    });
  }

  return (
    <div className="bg-surface-elevated border border-border rounded-xl p-5 space-y-3">
      <h3 className="text-xs font-semibold text-text-primary uppercase tracking-wider flex items-center gap-2">
        <svg
          className="w-4 h-4 text-red-400"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.75}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
        Points de douleur
      </h3>
      <div className="flex flex-wrap gap-2">
        {points.map((point, i) => {
          const cfg = severityConfig[point.severity];
          return (
            <span
              key={i}
              className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border text-xs font-medium ${cfg.bg} ${cfg.border} ${cfg.text}`}
            >
              <span className="text-[8px]">{cfg.icon}</span>
              {point.label}
            </span>
          );
        })}
      </div>
    </div>
  );
}
