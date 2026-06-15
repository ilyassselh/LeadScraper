function scoreMeta(score: number | null): {
  color: string;
  bg: string;
  label: string;
} {
  if (score === null) {
    return { color: "bg-text-muted", bg: "bg-text-muted/10", label: "—" };
  }
  if (score >= 70) {
    return { color: "bg-emerald-400", bg: "bg-emerald-400/10", label: `${score}` };
  }
  if (score >= 40) {
    return { color: "bg-yellow-400", bg: "bg-yellow-400/10", label: `${score}` };
  }
  return { color: "bg-red-400", bg: "bg-red-400/10", label: `${score}` };
}

export function ScoreBar({
  score,
  label,
}: {
  score: number | null;
  label: string;
}) {
  const { color, bg, label: display } = scoreMeta(score);
  const width = score === null ? 0 : Math.max(8, score);

  return (
    <div className="flex flex-col gap-1 w-full">
      <div className="flex items-center justify-between text-[10px]">
        <span className="text-text-muted font-medium uppercase tracking-wider">
          {label}
        </span>
        <span className={`font-mono font-semibold ${
          score === null ? "text-text-muted" : score >= 70 ? "text-emerald-400" : score >= 40 ? "text-yellow-400" : "text-red-400"
        }`}>
          {display}
        </span>
      </div>
      <div className={`h-1.5 w-full rounded-full ${bg}`}>
        <div
          className={`h-full rounded-full ${color} transition-all duration-500`}
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
}

export function ResponsiveBadge({ value }: { value: boolean | null }) {
  if (value === null) {
    return <span className="text-xs text-text-muted">—</span>;
  }
  return (
    <span
      className={`inline-flex items-center gap-1 text-[11px] font-semibold ${
        value ? "text-emerald-400" : "text-red-400"
      }`}
    >
      <span
        className={`w-1.5 h-1.5 rounded-full ${
          value ? "bg-emerald-400" : "bg-red-400"
        }`}
      />
      {value ? "Mobile" : "Non mobile"}
    </span>
  );
}

export function computeOpportunityScore(
  perf: number | null,
  seo: number | null,
  resp: boolean | null
): number {
  if (perf === null && seo === null && resp === null) return 92;
  let s = 0;
  if (perf !== null && perf < 50) s += 32;
  if (seo !== null && seo < 40) s += 32;
  if (resp === false) s += 28;
  if (perf !== null && perf < 30) s += 8;
  if (seo !== null && seo < 20) s += 8;
  return Math.min(100, Math.max(s, 12));
}

export function OpportunityScore({
  perf,
  seo,
  resp,
}: {
  perf: number | null;
  seo: number | null;
  resp: boolean | null;
}) {
  const score = computeOpportunityScore(perf, seo, resp);

  const ringColor =
    score >= 70 ? "#22c55e" : score >= 40 ? "#f59e0b" : "#3b82f6";
  const bgGlow =
    score >= 70
      ? "shadow-[0_0_16px_rgba(34,197,94,0.18)]"
      : score >= 40
        ? "shadow-[0_0_16px_rgba(245,158,11,0.18)]"
        : "shadow-[0_0_16px_rgba(59,130,246,0.18)]";

  const radius = 22;
  const stroke = 4;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (score / 100) * circumference;

  return (
    <div
      className={`relative w-12 h-12 rounded-full bg-surface border border-border flex items-center justify-center ${bgGlow}`}
    >
      <svg
        className="absolute inset-0 transform -rotate-90"
        width={48}
        height={48}
        viewBox="0 0 48 48"
      >
        <circle
          cx={24}
          cy={24}
          r={radius}
          fill="none"
          stroke="#272730"
          strokeWidth={stroke}
        />
        <circle
          cx={24}
          cy={24}
          r={radius}
          fill="none"
          stroke={ringColor}
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          className="transition-all duration-700 ease-out"
        />
      </svg>
      <span className="text-sm font-bold text-text-primary tabular-nums">
        {score}
      </span>
    </div>
  );
}
