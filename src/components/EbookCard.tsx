import Link from "next/link";
import { ArrowUpRight, LockKeyhole, Zap } from "lucide-react";
import type { Ebook } from "@/data/ebooks";
import { colorMap } from "@/lib/colors";

export default function EbookCard({ ebook }: { ebook: Ebook }) {
  const c = colorMap[ebook.color];
  const isKit = ebook.kind === "kit";

  return (
    <Link
      href={`/ebooks/${ebook.slug}`}
      className={`group relative flex min-h-[315px] flex-col justify-between overflow-hidden rounded-[1.35rem] border border-white/9 bg-white/[0.028] p-6 ring-1 ring-transparent transition duration-300 hover:-translate-y-1 hover:bg-white/[0.055] ${c.ring}`}
    >
      <div className={`pointer-events-none absolute -inset-px rounded-[1.35rem] bg-gradient-to-br ${c.glow} to-transparent opacity-0 transition duration-300 group-hover:opacity-100`} aria-hidden="true" />
      <div className="relative">
        <div className="flex items-center justify-between gap-3">
          <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 font-[family-name:var(--font-mono)] text-[10px] font-semibold uppercase tracking-wider ${c.badge}`}>
            {isKit ? <LockKeyhole className="h-3 w-3" /> : <Zap className="h-3 w-3" />}
            {isKit ? "Kit protegido" : "Ebook + skill"}
          </span>
          <span className="font-[family-name:var(--font-mono)] text-[10px] text-white/30">{isKit ? "EXEC" : "0" + (ebook.slug.length % 9 + 1)}</span>
        </div>
        <h3 className="mt-5 font-[family-name:var(--font-display)] text-xl font-semibold leading-tight text-white">{ebook.title}</h3>
        <p className="mt-3 text-sm leading-6 text-white/52">{ebook.tagline}</p>
        {ebook.skillIncluded && <div className="mt-5 flex items-start gap-2 text-xs leading-5 text-white/48"><Zap className="mt-0.5 h-3.5 w-3.5 shrink-0 text-violet-300" /><span><strong className="font-semibold text-white/72">Skill {ebook.skillIncluded.name}</strong> incluída para instalar e aplicar o método.</span></div>}
      </div>
      <div className="relative mt-7 flex items-end justify-between gap-4 border-t border-white/8 pt-5">
        <div><p className="text-[10px] uppercase tracking-[0.16em] text-white/30">Acesso</p><span className="mt-1 block font-[family-name:var(--font-display)] text-xl font-bold text-white">{ebook.priceLabel}</span></div>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-white/14 px-4 py-2 text-xs font-bold text-white/72 transition group-hover:border-white/30 group-hover:bg-white/10 group-hover:text-white">Detalhes <ArrowUpRight className="h-3.5 w-3.5" /></span>
      </div>
    </Link>
  );
}
