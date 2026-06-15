import Link from "next/link";
import { Prospect } from "@/types";
import StatusBadge from "./status-badge";
import {
  ScoreBar,
  ResponsiveBadge,
  OpportunityScore,
} from "./score-badge";

interface ProspectsTableProps {
  prospects: Prospect[];
}

export default function ProspectsTable({ prospects }: ProspectsTableProps) {
  if (prospects.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="w-12 h-12 rounded-full bg-surface border border-border flex items-center justify-center mb-4">
          <svg
            className="w-5 h-5 text-text-muted"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.75}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </div>
        <p className="text-sm font-medium text-text-primary">Aucun prospect</p>
        <p className="text-xs text-text-muted mt-1 max-w-xs">
          Lancez une recherche pour découvrir des entreprises locales.
        </p>
        <Link
          href="/"
          className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-accent hover:text-accent-hover transition-colors"
        >
          Lancer une recherche
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
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-border bg-surface-overlay/50">
            <th className="text-left py-2.5 px-4 text-[11px] font-semibold text-text-muted uppercase tracking-wider">
              Entreprise
            </th>
            <th className="text-left py-2.5 px-4 text-[11px] font-semibold text-text-muted uppercase tracking-wider">
              Téléphone
            </th>
            <th className="text-left py-2.5 px-4 text-[11px] font-semibold text-text-muted uppercase tracking-wider">
              Site Web
            </th>
            <th className="text-center py-2.5 px-3 text-[11px] font-semibold text-text-muted uppercase tracking-wider">
              Avis
            </th>
            <th className="text-left py-2.5 px-3 text-[11px] font-semibold text-text-muted uppercase tracking-wider w-32">
              Perf
            </th>
            <th className="text-left py-2.5 px-3 text-[11px] font-semibold text-text-muted uppercase tracking-wider w-32">
              SEO
            </th>
            <th className="text-center py-2.5 px-3 text-[11px] font-semibold text-text-muted uppercase tracking-wider">
              Mobile
            </th>
            <th className="text-center py-2.5 px-4 text-[11px] font-semibold text-text-muted uppercase tracking-wider">
              Score
            </th>
            <th className="text-center py-2.5 px-4 text-[11px] font-semibold text-text-muted uppercase tracking-wider">
              Statut
            </th>
            <th className="text-right py-2.5 px-4 text-[11px] font-semibold text-text-muted uppercase tracking-wider">
              
            </th>
          </tr>
        </thead>
        <tbody>
          {prospects.map((p) => (
            <tr
              key={p.id}
              className="border-b border-border/50 hover:bg-surface-hover/60 transition-colors group"
            >
              <td className="py-3.5 px-4">
                <div className="flex flex-col">
                  <span className="font-semibold text-text-primary text-[13px]">
                    {p.company_name}
                  </span>
                  {p.address && (
                    <span className="text-[11px] text-text-muted truncate max-w-[180px]">
                      {p.address}
                    </span>
                  )}
                </div>
              </td>
              <td className="py-3.5 px-4 text-text-secondary font-mono text-xs">
                {p.phone ?? "—"}
              </td>
              <td className="py-3.5 px-4">
                {p.website ? (
                  <a
                    href={p.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-accent hover:text-accent-hover truncate max-w-[140px] inline-block transition-colors"
                  >
                    {p.website.replace(/^https?:\/\//, "")}
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-red-400">
                    <span className="w-1 h-1 rounded-full bg-red-400" />
                    Aucun site
                  </span>
                )}
              </td>
              <td className="py-3.5 px-3 text-center">
                <div className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-surface border border-border">
                  <span className="text-yellow-400 text-xs">★</span>
                  <span className="text-xs font-semibold text-text-primary">
                    {p.google_rating ?? "—"}
                  </span>
                  <span className="text-[10px] text-text-muted">
                    {p.review_count ?? 0}
                  </span>
                </div>
              </td>
              <td className="py-3.5 px-3">
                <div className="w-28">
                  <ScoreBar score={p.performance_score} label="Perf" />
                </div>
              </td>
              <td className="py-3.5 px-3">
                <div className="w-28">
                  <ScoreBar score={p.seo_score} label="SEO" />
                </div>
              </td>
              <td className="py-3.5 px-3 text-center">
                <ResponsiveBadge value={p.is_responsive} />
              </td>
              <td className="py-3.5 px-4 text-center">
                <div className="flex justify-center">
                  <OpportunityScore
                    perf={p.performance_score}
                    seo={p.seo_score}
                    resp={p.is_responsive}
                  />
                </div>
              </td>
              <td className="py-3.5 px-4 text-center">
                <StatusBadge status={p.status} />
              </td>
              <td className="py-3.5 px-4 text-right">
                <Link
                  href={`/prospects/${p.id}`}
                  className="inline-flex items-center gap-1 text-xs font-medium text-text-secondary hover:text-accent transition-colors"
                >
                  Voir
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
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
