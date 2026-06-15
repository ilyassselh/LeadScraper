"use client";

import { useState } from "react";

interface PitchSectionProps {
  scriptCall: string | null;
  email: string | null;
}

export default function PitchSection({ scriptCall, email }: PitchSectionProps) {
  const [tab, setTab] = useState<"call" | "email">("call");
  const [copied, setCopied] = useState(false);

  const content = tab === "call" ? scriptCall : email;

  const handleCopy = async () => {
    if (!content) return;
    await navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-surface-elevated border border-border rounded-xl overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.25)]">
      <div className="flex items-center border-b border-border">
        <button
          onClick={() => setTab("call")}
          className={`relative flex items-center gap-2 px-5 py-3 text-xs font-semibold transition-colors ${
            tab === "call"
              ? "text-accent"
              : "text-text-muted hover:text-text-secondary"
          }`}
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.75}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
          Cold Call
          {tab === "call" && (
            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent" />
          )}
        </button>
        <button
          onClick={() => setTab("email")}
          className={`relative flex items-center gap-2 px-5 py-3 text-xs font-semibold transition-colors ${
            tab === "email"
              ? "text-accent"
              : "text-text-muted hover:text-text-secondary"
          }`}
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.75}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          Email Automation
          {tab === "email" && (
            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent" />
          )}
        </button>

        <div className="ml-auto pr-4">
          <button
            onClick={handleCopy}
            className="inline-flex items-center gap-1.5 text-xs font-medium text-text-secondary hover:text-accent transition-colors"
          >
            {copied ? (
              <>
                <svg
                  className="w-3.5 h-3.5 text-emerald-400"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-emerald-400">Copié</span>
              </>
            ) : (
              <>
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
                    d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
                Copier
              </>
            )}
          </button>
        </div>
      </div>

      <div className="p-6">
        {content ? (
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent to-transparent rounded-full" />
            <pre className="pl-5 text-sm text-text-secondary leading-[1.7] whitespace-pre-wrap font-sans">
              {content}
            </pre>
          </div>
        ) : (
          <p className="text-sm text-text-muted italic">
            Contenu en cours de génération…
          </p>
        )}
      </div>
    </div>
  );
}
