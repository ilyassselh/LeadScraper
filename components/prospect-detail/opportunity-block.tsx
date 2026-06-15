export default function OpportunityBlock({
  pitch,
}: {
  pitch: string | null;
}) {
  if (!pitch) return null;

  return (
    <div className="relative bg-surface-elevated border border-border rounded-xl p-5 overflow-hidden">
      <div className="absolute top-0 left-0 w-0.5 h-full bg-gradient-to-b from-accent to-amber-600" />
      <div className="space-y-2.5">
        <h3 className="text-xs font-semibold text-text-primary uppercase tracking-wider flex items-center gap-2">
          <svg
            className="w-4 h-4 text-accent"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.75}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
          Pourquoi c&apos;est une opportunité
        </h3>
        <p className="text-sm text-text-secondary leading-relaxed">{pitch}</p>
      </div>
    </div>
  );
}
