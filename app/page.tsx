import Link from "next/link";
import { SiteNav } from "@/components/site-nav";

const cards = [
  {
    href: "/privacy",
    title: "Privacy Policy",
    blurb: "How we collect, use, and protect your data — including health-adjacent calendar information.",
    tag: "Legal",
  },
  {
    href: "/terms",
    title: "Terms of Service",
    blurb: "Rules for using HRT Calendar, liability, IP, and governing law.",
    tag: "Legal",
  },
  {
    href: "/support",
    title: "Support",
    blurb: "Reach the maintainer for help, feedback, or bug reports — trans-friendly, private support.",
    tag: "Help",
  },
] as const;

export default function HomePage() {
  return (
    <div className="relative z-10 min-h-screen pb-24">
      <SiteNav current="/" />
      <main className="mx-auto max-w-5xl px-4 pt-10 sm:px-6 sm:pt-14">
        <div className="glass-panel glass-panel--dense px-6 py-10 sm:px-10 sm:py-12">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#ff8ad0]/90">
            HRT Calendar
          </p>
          <h1 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Legal & support hub
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/65">
            Glassmorphic pages for privacy, terms, and human support — same pink palette as the app,
            built for clarity on small screens and large.
          </p>
        </div>

        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <li key={card.href}>
              <Link
                href={card.href}
                className="glass-panel group flex h-full flex-col p-6 transition hover:-translate-y-0.5 hover:shadow-[0_28px_90px_rgba(0,0,0,0.45)]"
              >
                <span className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-white/40">
                  {card.tag}
                </span>
                <span className="mt-3 text-lg font-semibold text-white group-hover:text-[#ffb8de]">
                  {card.title}
                </span>
                <span className="mt-2 flex-1 text-sm leading-relaxed text-white/60">{card.blurb}</span>
                <span className="mt-6 text-sm font-medium text-[#ff8ad0]">
                  Open
                  <span className="ml-1 inline-block transition group-hover:translate-x-0.5">→</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
