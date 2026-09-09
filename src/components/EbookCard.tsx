import Link from "next/link";
import { Zap } from "lucide-react";
import type { Ebook } from "@/data/ebooks";
import { colorMap } from "@/lib/colors";

export default function EbookCard({ ebook }: { ebook: Ebook }) {
  const c = colorMap[ebook.color];

  return (
    <Link
      href={`/ebooks/${ebook.slug}`}
      className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl glass p-6 ring-1 ring-transparent transition duration-300 hover:-translate-y-1 hover:border-white/15 ${c.ring}`}
    >
      <div
        className={`pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-br ${c.glow} to-transparent opacity-0 transition duration-300 group-hover:opacity-100`}
      />
      <div className="relative">
        <div className="flex items-center gap-2">
          <span className={`h-1.5 w-1.5 rounded-full ${c.dot}`} />
          <span className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-wider text-white/40">
            {ebook.kind === "kit" ? "Kit interativo" : "Ebook"}
          </span>
        </div>
        <h3 className="mt-4 font-[family-name:var(--font-display)] text-xl font-semibold leading-snug text-white">
          {ebook.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-white/55">{ebook.tagline}</p>

        {ebook.skillIncluded && (
          <div className="mt-4 flex items-center gap-1.5 text-xs text-white/45">
            <Zap className="h-3.5 w-3.5 text-violet-400" />
            <span>Inclui skill de IA para instalar</span>
          </div>
        )}
      </div>

      <div className="relative mt-6 flex items-center justify-between">
        <span className="font-[family-name:var(--font-display)] text-lg font-semibold text-white">
          {ebook.priceLabel}
        </span>
        <span className="rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-white/80 transition group-hover:border-white/30 group-hover:bg-white/10 group-hover:text-white">
          Ver detalhes
        </span>
      </div>
    </Link>
  );
}
