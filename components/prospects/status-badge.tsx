const statusConfig: Record<
  string,
  { dot: string; bg: string; text: string; border: string }
> = {
  Nouveau: {
    dot: "bg-blue-400",
    bg: "bg-blue-400/8",
    text: "text-blue-400",
    border: "border-blue-400/15",
  },
  "Appelé": {
    dot: "bg-yellow-400",
    bg: "bg-yellow-400/8",
    text: "text-yellow-400",
    border: "border-yellow-400/15",
  },
  "Pas intéressé": {
    dot: "bg-red-400",
    bg: "bg-red-400/8",
    text: "text-red-400",
    border: "border-red-400/15",
  },
};

export default function StatusBadge({ status }: { status: string }) {
  const config = statusConfig[status] ?? statusConfig["Nouveau"];

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold border ${config.bg} ${config.text} ${config.border}`}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${config.dot}`} />
      {status}
    </span>
  );
}
