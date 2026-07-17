"use client";

import { useEffect, useState } from "react";

type Item = { id: string; title: string };

export function TableOfContents({ items }: { items: Item[] }) {
  const [active, setActive] = useState<string | null>(items[0]?.id ?? null);

  useEffect(() => {
    const els = items
      .map((i) => document.getElementById(i.id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (!els.length) return;

    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        const first = visible[0]?.target.id;
        if (first) setActive(first);
      },
      { rootMargin: "-40% 0px -45% 0px", threshold: [0, 0.1, 0.25, 0.5, 1] }
    );

    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [items]);

  return (
    <aside className="glass-panel glass-panel--dense p-4 sm:p-5">
      <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-white/45">
        On this page
      </p>
      <ol className="mt-4 space-y-1 border-t border-white/10 pt-4">
        {items.map((item) => {
          const isActive = active === item.id;
          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={[
                  "block rounded-lg px-2 py-1.5 text-sm transition",
                  isActive
                    ? "bg-white/12 text-white ring-1 ring-[#ff4fa3]/35"
                    : "text-white/65 hover:bg-white/8 hover:text-white",
                ].join(" ")}
              >
                {item.title}
              </a>
            </li>
          );
        })}
      </ol>
    </aside>
  );
}
