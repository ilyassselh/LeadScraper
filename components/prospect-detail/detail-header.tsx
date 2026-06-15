import Link from "next/link";
import { Prospect } from "@/types";
import StatusBadge from "@/components/prospects/status-badge";

export default function DetailHeader({ prospect }: { prospect: Prospect }) {
  return (
    <div className="mb-8">
      <Link
        href="/prospects"
        className="inline-flex items-center gap-1.5 text-[11px] font-medium text-text-muted hover:text-text-secondary transition-colors mb-3"
      >
        <svg
          className="w-3.5 h-3.5"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.75}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
        Retour aux prospects
      </Link>

      <div className="flex items-start justify-between gap-4">
        <div className="space-y-2">
          <h1 className="text-2xl font-bold text-text-primary tracking-tight">
            {prospect.company_name}
          </h1>
          <div className="flex flex-wrap items-center gap-2">
            {prospect.google_rating && (
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-surface border border-border">
                <span className="text-yellow-400 text-xs">★</span>
                <span className="text-xs font-semibold text-text-primary">
                  {prospect.google_rating}
                </span>
                <span className="text-[10px] text-text-muted">
                  {prospect.review_count} avis
                </span>
              </div>
            )}
            {prospect.address && (
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-surface border border-border text-[10px] text-text-secondary">
                <svg
                  className="w-3 h-3 text-text-muted"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.75}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                {prospect.address}
              </div>
            )}
          </div>
        </div>
        <StatusBadge status={prospect.status} />
      </div>
    </div>
  );
}
