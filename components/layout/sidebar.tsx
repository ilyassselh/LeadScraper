"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    href: "/",
    label: "Recherche",
    icon: (
      <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    href: "/prospects",
    label: "Prospects",
    icon: (
      <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex flex-col w-60 shrink-0 border-r border-border bg-surface-elevated">
      <div className="flex items-center gap-3 px-5 h-16 border-b border-border">
        <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-accent to-amber-600 shadow-[0_0_16px_rgba(245,158,11,0.25)]">
          <svg className="w-4 h-4 text-surface" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <div className="flex flex-col leading-none">
          <span className="font-semibold text-sm text-text-primary tracking-tight">
            LeadScraper
          </span>
          <span className="text-[10px] font-medium text-text-muted uppercase tracking-wider mt-0.5">
            AI
          </span>
        </div>
      </div>

      <nav className="flex flex-col gap-1 px-3 py-4">
        {links.map((link) => {
          const isActive =
            link.href === "/"
              ? pathname === "/"
              : pathname.startsWith(link.href);

          return (
            <Link
              key={link.href}
              href={link.href}
              className={`group relative flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                isActive
                  ? "text-accent bg-accent-muted"
                  : "text-text-secondary hover:text-text-primary hover:bg-surface-hover"
              }`}
            >
              {isActive && (
                <span className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-5 rounded-r-full bg-accent" />
              )}
              <span
                className={`${
                  isActive ? "text-accent" : "text-text-muted group-hover:text-text-secondary"
                } transition-colors`}
              >
                {link.icon}
              </span>
              <span>{link.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto p-3">
        <div className="flex items-center gap-3 px-3 py-3 rounded-xl border border-border bg-surface-overlay">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-surface-active to-border-light border border-border flex items-center justify-center text-xs font-medium text-text-secondary">
            JD
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-xs font-medium text-text-primary">Jean Dupont</span>
            <span className="text-[10px] text-text-muted mt-0.5">Commercial</span>
          </div>
        </div>
      </div>
    </aside>
  );
}
