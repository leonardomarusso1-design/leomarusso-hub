import Link from "next/link";
import type { Ebook } from "@/data/ebooks";
import { colorMap } from "@/lib/colors";

export default function EbookCard({ ebook }: { ebook: Ebook }) {
  const c = colorMap[ebook.color];

  return (
    <div
      className={`group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-6 ring-1 ring-transparent transition ${c.ring}`}
    >
      <div
        className={`pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br ${c.glow} to-transparent opacity-0 transition group-hover:opacity-100`}
      />
      <div className="relative">
        <span className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${c.badge}`}>
          {ebook.kind === "kit" ? "Kit" : "Ebook"}
        </span>
        <h3 className="mt-4 text-xl font-semibold text-white">{ebook.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-white/60">{ebook.tagline}</p>
      </div>

      <div className="relative mt-6 flex items-center justify-between">
        <span className="text-lg font-semibold text-white">{ebook.priceLabel}</span>
        <Link
          href={`/ebooks/${ebook.slug}`}
          className="rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-white transition hover:border-white/30 hover:bg-white/10"
        >
          Ver detalhes
        </Link>
      </div>
    </div>
  );
}
