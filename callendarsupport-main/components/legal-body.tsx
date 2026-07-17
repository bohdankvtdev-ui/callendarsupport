import type { LegalBlock } from "@/lib/legal";
import { LinkifyText } from "@/components/linkify-text";

function Block({ block }: { block: LegalBlock }) {
  if (block.type === "p") {
    return (
      <p className="text-[0.95rem] leading-relaxed text-zinc-200/90 sm:text-base">
        <LinkifyText text={block.text} />
      </p>
    );
  }
  return (
    <ul className="list-disc space-y-2 pl-5 text-[0.95rem] text-zinc-200/90 sm:text-base">
      {block.items.map((item) => (
        <li key={item} className="marker:text-[#ff4fa3]/80">
          <LinkifyText text={item} />
        </li>
      ))}
    </ul>
  );
}

export function LegalBody({
  sections,
}: {
  sections: import("@/lib/legal").LegalSection[];
}) {
  return (
    <article className="space-y-10">
      {sections.map((section) => (
        <section key={section.id} id={section.id} className="legal-section scroll-mt-28">
          <h2 className="mb-4 text-lg font-semibold tracking-tight text-[#ffb8de] sm:text-xl">
            {section.title}
          </h2>
          <div className="space-y-4">
            {section.blocks.map((block, idx) => (
              <Block key={idx} block={block} />
            ))}
          </div>
        </section>
      ))}
    </article>
  );
}
