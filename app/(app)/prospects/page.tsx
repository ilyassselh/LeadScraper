import ProspectsTable from "@/components/prospects/prospects-table";

export default function ProspectsPage() {
  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between px-8 py-6 border-b border-border">
        <div>
          <div className="flex items-center gap-2 text-[11px] font-medium text-text-muted uppercase tracking-wider mb-1">
            <span>Recherche active</span>
            <span className="w-1 h-1 rounded-full bg-accent" />
            <span>Paris 1er</span>
          </div>
          <h1 className="text-xl font-bold text-text-primary tracking-tight">
            Prospects trouvés
          </h1>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-xs text-text-secondary">
            5 résultats
          </span>
          <button className="inline-flex items-center gap-2 bg-surface-elevated hover:bg-surface-hover border border-border text-text-secondary hover:text-text-primary text-xs font-medium px-3 py-2 rounded-lg transition-colors">
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
                d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
              />
            </svg>
            Filtrer
          </button>
        </div>
      </div>

      <div className="flex-1 p-8 overflow-auto">
        <div className="bg-surface-elevated border border-border rounded-xl overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.25)]">
          <ProspectsTable />
        </div>
      </div>
    </div>
  );
}
