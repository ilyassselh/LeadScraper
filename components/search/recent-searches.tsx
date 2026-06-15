import Link from "next/link";
import { mockSearches } from "@/lib/mocks/searches";

export default function RecentSearches() {
  if (mockSearches.length === 0) return null;

  return (
    <div className="w-full space-y-3">
      <div className="flex items-center justify-between">
        <h3 className="text-[11px] font-semibold text-text-muted uppercase tracking-wider">
          Recherches précédentes
        </h3>
        <Link
          href="/prospects"
          className="text-[11px] font-medium text-accent hover:text-accent-hover transition-colors"
        >
          Voir tout
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
        {mockSearches.map((search) => (
          <Link
            key={search.id}
            href="/prospects"
            className="group flex items-center gap-3 px-3.5 py-3 bg-surface-elevated border border-border hover:border-border-light rounded-lg hover:bg-surface-hover transition-all"
          >
            <div className="flex items-center justify-center w-9 h-9 rounded-md bg-surface border border-border group-hover:border-accent/30 group-hover:bg-accent-muted transition-all shrink-0">
              <svg
                className="w-4 h-4 text-text-muted group-hover:text-accent transition-colors"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.75}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <div className="min-w-0">
              <p className="text-sm font-medium text-text-primary truncate group-hover:text-accent transition-colors">
                {search.sector}
              </p>
              <p className="text-xs text-text-muted truncate">
                {search.city} ·{" "}
                {new Date(search.created_at).toLocaleDateString("fr-FR", {
                  day: "numeric",
                  month: "short",
                })}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
