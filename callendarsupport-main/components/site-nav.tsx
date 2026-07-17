import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/support", label: "Support" },
] as const;

export function SiteNav({ current }: { current?: string }) {
  return (
    <header className="sticky top-0 z-40 px-4 pt-4 sm:px-6">
      <nav
        className="glass-panel glass-panel--dense mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-5"
        aria-label="Primary"
      >
        <Link
          href="/"
          className="text-sm font-semibold tracking-tight text-white/95 transition hover:text-[#ffb8de]"
        >
          HRT Calendar
        </Link>
        <ul className="flex flex-wrap items-center gap-1 sm:gap-2">
          {links.map(({ href, label }) => {
            const active = current === href;
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={[
                    "rounded-full px-3 py-1.5 text-xs font-medium transition sm:text-sm",
                    active
                      ? "bg-white/15 text-white shadow-inner ring-1 ring-white/20"
                      : "text-white/70 hover:bg-white/10 hover:text-white",
                  ].join(" ")}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
