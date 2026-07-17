import { Fragment } from "react";

const EMAIL = /\S+@\S+/g;

function partsFromText(text: string): Array<{ kind: "text" | "email"; value: string }> {
  const out: Array<{ kind: "text" | "email"; value: string }> = [];
  let last = 0;
  let match: RegExpExecArray | null;
  const re = new RegExp(EMAIL.source, EMAIL.flags);
  while ((match = re.exec(text)) !== null) {
    if (match.index > last) {
      out.push({ kind: "text", value: text.slice(last, match.index) });
    }
    out.push({ kind: "email", value: match[0] });
    last = match.index + match[0].length;
  }
  if (last < text.length) {
    out.push({ kind: "text", value: text.slice(last) });
  }
  return out;
}

export function LinkifyText({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  const parts = partsFromText(text);
  return (
    <span className={className}>
      {parts.map((part, i) =>
        part.kind === "email" ? (
          <a
            key={i}
            href={`mailto:${part.value}`}
            className="font-medium text-[#ffb8de] underline decoration-white/20 underline-offset-4 transition hover:text-white hover:decoration-white/50"
          >
            {part.value}
          </a>
        ) : (
          <Fragment key={i}>{part.value}</Fragment>
        )
      )}
    </span>
  );
}
