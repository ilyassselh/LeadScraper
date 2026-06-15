import { notFound } from "next/navigation";
import { getProspectById } from "@/lib/mocks/prospects";
import DetailHeader from "@/components/prospect-detail/detail-header";
import ScoreRing from "@/components/prospect-detail/score-ring";
import OpportunityBlock from "@/components/prospect-detail/opportunity-block";
import PainPoints from "@/components/prospect-detail/pain-points";
import PitchSection from "@/components/prospect-detail/pitch-section";

export default async function ProspectDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const prospect = getProspectById(id);

  if (!prospect) {
    notFound();
  }

  return (
    <div className="p-8 max-w-6xl">
      <DetailHeader prospect={prospect} />

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
        <div className="xl:col-span-8 space-y-6">
          <div className="bg-surface-elevated border border-border rounded-xl p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-5">
                <h3 className="text-xs font-semibold text-text-primary uppercase tracking-wider flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  Potentiel commercial
                </h3>
                <div className="flex items-center justify-around">
                  <ScoreRing value={85} label="Besoin" size="md" />
                  <ScoreRing value={70} label="Autorité" size="md" />
                  <ScoreRing value={60} label="Capacité" size="md" />
                  <ScoreRing value={90} label="Timing" size="md" />
                </div>
              </div>

              <div className="space-y-5 md:border-l md:border-border md:pl-8">
                <h3 className="text-xs font-semibold text-text-primary uppercase tracking-wider flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  Qualité du site
                </h3>
                <div className="flex items-center justify-around">
                  <ScoreRing
                    value={prospect.performance_score ?? 0}
                    label="Performance"
                    size="md"
                  />
                  <ScoreRing
                    value={prospect.seo_score ?? 0}
                    label="SEO"
                    size="md"
                  />
                  <ScoreRing
                    value={
                      prospect.is_responsive === true
                        ? 85
                        : prospect.is_responsive === false
                          ? 15
                          : 0
                    }
                    label="Responsive"
                    size="md"
                  />
                  <ScoreRing value={72} label="SSL" size="md" />
                </div>
              </div>
            </div>
          </div>

          <OpportunityBlock pitch={prospect.ai_pitch} />

          <PitchSection
            scriptCall={prospect.ai_script_call}
            email={prospect.ai_email}
          />
        </div>

        <div className="xl:col-span-4 space-y-6">
          <div className="bg-surface-elevated border border-border rounded-xl p-5 space-y-4">
            <h3 className="text-xs font-semibold text-text-primary uppercase tracking-wider flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              Informations
            </h3>

            <div className="space-y-3.5 text-sm">
              <InfoRow
                label="Téléphone"
                value={prospect.phone ?? "—"}
                mono={Boolean(prospect.phone)}
                icon={
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                }
              />

              <InfoRow
                label="Site web"
                value={
                  prospect.website
                    ? prospect.website.replace(/^https?:\/\//, "")
                    : "Aucun"
                }
                href={prospect.website ?? undefined}
                danger={!prospect.website}
                icon={
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                }
              />

              <InfoRow
                label="Adresse"
                value={prospect.address ?? "—"}
                icon={
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                }
              />

              <InfoRow
                label="Email"
                value="À générer"
                muted
                icon={
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                }
              />
            </div>
          </div>

          <PainPoints
            performance={prospect.performance_score}
            seo={prospect.seo_score}
            responsive={prospect.is_responsive}
          />

          <div className="text-xs text-text-muted bg-surface-elevated border border-border rounded-lg p-3.5 flex items-start gap-2.5">
            <svg
              className="w-4 h-4 text-accent shrink-0 mt-0.5"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.75}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Les scores et le pitch sont générés automatiquement.
            Vérifiez-les avant chaque appel.
          </div>
        </div>
      </div>
    </div>
  );
}

function InfoRow({
  label,
  value,
  href,
  mono,
  danger,
  muted,
  icon,
}: {
  label: string;
  value: string;
  href?: string;
  mono?: boolean;
  danger?: boolean;
  muted?: boolean;
  icon: React.ReactNode;
}) {
  return (
    <div className="flex items-start justify-between gap-3">
      <div className="flex items-center gap-2 text-text-muted">
        {icon}
        <span className="text-xs font-medium uppercase tracking-wider">
          {label}
        </span>
      </div>
      {href ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-accent hover:text-accent-hover truncate max-w-[180px] text-right transition-colors"
        >
          {value}
        </a>
      ) : (
        <span
          className={`text-xs text-right max-w-[180px] leading-snug ${
            mono
              ? "font-mono text-text-primary"
              : danger
                ? "font-semibold text-red-400"
                : muted
                  ? "text-text-muted italic"
                  : "text-text-primary"
          }`}
        >
          {value}
        </span>
      )}
    </div>
  );
}
