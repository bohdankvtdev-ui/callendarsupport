import type { LegalDocument } from "@/lib/legal";
import { SiteNav } from "@/components/site-nav";
import { LegalBody } from "@/components/legal-body";
import { TableOfContents } from "@/components/table-of-contents";

export function LegalPage({
  doc,
  navPath,
}: {
  doc: LegalDocument;
  navPath: string;
}) {
  const toc = doc.sections.map((s) => ({ id: s.id, title: s.title }));

  return (
    <div className="relative z-10 min-h-screen pb-20">
      <SiteNav current={navPath} />
      <main className="mx-auto max-w-6xl px-4 pt-8 sm:px-6 sm:pt-10">
        <div className="glass-panel glass-panel--dense p-6 sm:p-10">
          <div className="max-w-3xl">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#ff8ad0]/90">
              HRT Calendar
            </p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              {doc.title}
            </h1>
            <p className="mt-3 text-sm text-white/55">{doc.meta}</p>
          </div>

          <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_260px] lg:items-start">
            <div className="order-2 min-w-0 space-y-10 lg:order-none">
              <LegalBody sections={doc.sections} />
              <footer className="border-t border-white/10 pt-8 text-sm leading-relaxed text-white/45">
                {doc.footer}
              </footer>
            </div>
            <div className="order-1 lg:sticky lg:top-28 lg:order-none">
              <TableOfContents items={toc} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
