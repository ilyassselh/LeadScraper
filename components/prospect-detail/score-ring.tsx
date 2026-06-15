export default function ScoreRing({
  value,
  label,
  size = "lg",
}: {
  value: number;
  label: string;
  size?: "lg" | "md";
}) {
  const radius = size === "lg" ? 58 : 42;
  const stroke = size === "lg" ? 7 : 5;
  const normalized = Math.min(100, Math.max(0, value));
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (normalized / 100) * circumference;

  const color =
    normalized >= 70 ? "#22c55e" : normalized >= 40 ? "#f59e0b" : "#ef4444";

  const dims = size === "lg" ? 136 : 100;

  return (
    <div className="flex flex-col items-center gap-2.5">
      <div className="relative" style={{ width: dims, height: dims }}>
        <svg
          className="transform -rotate-90 drop-shadow-[0_0_8px_rgba(0,0,0,0.35)]"
          width={dims}
          height={dims}
          viewBox={`0 0 ${dims} ${dims}`}
        >
          <circle
            cx={dims / 2}
            cy={dims / 2}
            r={radius}
            fill="none"
            stroke="#23232b"
            strokeWidth={stroke}
          />
          <circle
            cx={dims / 2}
            cy={dims / 2}
            r={radius}
            fill="none"
            stroke={color}
            strokeWidth={stroke}
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            className="transition-all duration-700 ease-out"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span
            className={`font-bold text-text-primary tabular-nums ${
              size === "lg" ? "text-2xl" : "text-base"
            }`}
          >
            {value}
          </span>
        </div>
      </div>
      <span className="text-xs font-medium text-text-secondary text-center leading-tight max-w-[100px]">
        {label}
      </span>
    </div>
  );
}
