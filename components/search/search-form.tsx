"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchForm() {
  const router = useRouter();
  const [city, setCity] = useState("");
  const [sector, setSector] = useState("");
  const [count, setCount] = useState(25);
  const [withoutWebsiteOnly, setWithoutWebsiteOnly] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const response = await fetch("/api/search", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          city,
          sector,
          limit: count,
          withoutWebsiteOnly,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.details || data.error || "Erreur inattendue");
      }

      router.push("/prospects");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erreur inattendue");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full bg-surface-elevated border border-border rounded-xl p-6 shadow-[0_0_40px_rgba(0,0,0,0.35)]"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label
            htmlFor="city"
            className="block text-[11px] font-semibold text-text-secondary uppercase tracking-wider"
          >
            Ville ou zone
          </label>
          <div className="relative">
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted"
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
            <input
              id="city"
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="Ex : Paris 1er"
              required
              className="w-full bg-surface border border-border hover:border-border-light rounded-lg pl-9 pr-4 py-2.5 text-sm text-text-primary placeholder:text-text-subtle focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all"
            />
          </div>
        </div>

        <div className="space-y-1.5">
          <label
            htmlFor="sector"
            className="block text-[11px] font-semibold text-text-secondary uppercase tracking-wider"
          >
            Secteur
          </label>
          <div className="relative">
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.75}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <input
              id="sector"
              type="text"
              value={sector}
              onChange={(e) => setSector(e.target.value)}
              placeholder="Ex : Boulangerie"
              required
              className="w-full bg-surface border border-border hover:border-border-light rounded-lg pl-9 pr-4 py-2.5 text-sm text-text-primary placeholder:text-text-subtle focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all"
            />
          </div>
        </div>
      </div>

      <div className="mt-5 space-y-3">
        <div className="flex items-center justify-between">
          <label
            htmlFor="count"
            className="text-[11px] font-semibold text-text-secondary uppercase tracking-wider"
          >
            Nombre de prospects
          </label>
          <span className="text-xs font-semibold text-accent bg-accent-muted px-2 py-0.5 rounded-md tabular-nums">
            {count}
          </span>
        </div>
        <input
          id="count"
          type="range"
          min={10}
          max={50}
          step={5}
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
          className="w-full h-1.5 bg-surface rounded-full appearance-none cursor-pointer accent-accent
            [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-accent [&::-webkit-slider-thumb]:shadow-[0_0_10px_rgba(245,158,11,0.5)]"
        />
        <div className="flex justify-between text-[11px] text-text-muted">
          <span>10</span>
          <span>50</span>
        </div>
      </div>

      <div className="mt-4 flex items-center gap-2.5">
        <button
          type="button"
          role="checkbox"
          aria-checked={withoutWebsiteOnly}
          onClick={() => setWithoutWebsiteOnly((v) => !v)}
          className={`relative w-4 h-4 rounded border transition-all ${
            withoutWebsiteOnly
              ? "bg-accent border-accent"
              : "bg-surface border-border hover:border-border-light"
          }`}
        >
          {withoutWebsiteOnly && (
            <svg
              className="absolute inset-0 m-auto w-3 h-3 text-surface"
              fill="none"
              stroke="currentColor"
              strokeWidth={3}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          )}
        </button>
        <label
          htmlFor="without-website"
          className="text-sm text-text-secondary cursor-pointer"
          onClick={() => setWithoutWebsiteOnly((v) => !v)}
        >
          Sans site web uniquement
        </label>
      </div>

      {error && (
        <div className="mt-4 p-3 rounded-lg bg-red-500/8 border border-red-500/15 text-xs text-red-400">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full mt-6 bg-accent hover:bg-accent-hover disabled:opacity-60 disabled:cursor-not-allowed text-surface text-sm font-semibold py-2.5 rounded-lg transition-all shadow-[0_0_20px_rgba(245,158,11,0.18)] hover:shadow-[0_0_28px_rgba(245,158,11,0.28)]"
      >
        {loading ? "Recherche en cours…" : "Lancer la recherche"}
      </button>
    </form>
  );
}
