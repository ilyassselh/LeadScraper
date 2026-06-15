import SearchForm from "@/components/search/search-form";
import RecentSearches from "@/components/search/recent-searches";

export default function HomePage() {
  return (
    <div className="flex flex-col px-8 py-10 min-h-full">
      <div className="max-w-xl w-full mx-auto space-y-8">
        <div className="space-y-2">
          <h1 className="text-[28px] font-bold text-text-primary tracking-tight leading-tight">
            Trouvez vos prochains clients
          </h1>
          <p className="text-sm text-text-secondary leading-relaxed max-w-md">
            Ciblez les entreprises locales mal positionnées en ligne, auditez
            leur présence web et générez un pitch prêt à l&apos;emploi.
          </p>
        </div>

        <SearchForm />

        <RecentSearches />
      </div>
    </div>
  );
}
