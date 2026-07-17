import type { Metadata } from "next";
import Link from "next/link";
import { SiteNav } from "@/components/site-nav";

export const metadata: Metadata = {
  title: "Support",
  description: "Contact and response expectations for HRT Calendar support.",
};

const chips = ["Safe", "Private", "Trans-friendly support"] as const;

export default function SupportPage() {
  return (
    <div className="relative z-10 min-h-screen pb-24">
      <SiteNav current="/support" />
      <main className="mx-auto flex max-w-lg flex-col items-center px-4 pt-12 sm:px-6 sm:pt-16">
        <div className="glass-panel w-full px-7 py-9 sm:px-10 sm:py-11">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.28em] text-white/45">
            HRT Calendar
          </p>
          <h1 className="mt-3 text-center text-3xl font-semibold tracking-tight text-white sm:text-[2rem]">
            App support
          </h1>
          <p className="mt-3 text-center text-sm leading-relaxed text-white/65 sm:text-base">
            Help, feedback, or bug reports for your HRT tracking app.
          </p>

          <div className="glass-panel glass-panel--dense mt-8 p-5 sm:p-6">
            <p className="text-xs font-medium uppercase tracking-wider text-white/40">Email</p>
            <p className="mt-2 text-lg font-medium">
              <Link
                href="mailto:bohdankvtdev@gmail.com"
                className="text-[#ffb8de] underline decoration-white/15 underline-offset-[6px] transition hover:text-white hover:decoration-white/40"
              >
                bohdankvtdev@gmail.com
              </Link>
            </p>
            <p className="mt-4 text-sm text-white/55">Typical response time: 24–72 hours.</p>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {chips.map((label) => (
              <span
                key={label}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/80"
              >
                {label}
              </span>
            ))}
          </div>

          <p className="mt-10 text-center text-xs leading-relaxed text-white/40">
            For policy questions, see{" "}
            <Link href="/privacy" className="text-[#ff8ad0] hover:underline">
              Privacy
            </Link>{" "}
            or{" "}
            <Link href="/terms" className="text-[#ff8ad0] hover:underline">
              Terms
            </Link>
            .
          </p>
        </div>
      </main>
    </div>
  );
}
