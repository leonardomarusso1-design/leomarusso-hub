import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";
import NeuralBrain from "./NeuralBrain";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/8 bg-[#050609]/78 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4">
        <Link href="/" className="group flex min-w-0 items-center gap-3" aria-label="Leonardo Marusso — página inicial">
          <NeuralBrain className="h-8 w-8 shrink-0 transition duration-200 group-hover:scale-110" />
          <span className="truncate font-[family-name:var(--font-display)] text-[15px] font-semibold tracking-tight text-white">Leonardo Marusso</span>
        </Link>
        <nav className="flex items-center gap-2 text-sm" aria-label="Navegação principal">
          <Link href="/#produtos" className="hidden rounded-full px-3 py-2 text-white/55 transition hover:bg-white/6 hover:text-white sm:inline-flex">Ebooks &amp; Skills</Link>
          <Link href="/#ferramentas" className="hidden rounded-full px-3 py-2 text-white/55 transition hover:bg-white/6 hover:text-white sm:inline-flex">Ferramentas</Link>
          <Link href="/kit" className="inline-flex items-center gap-1.5 rounded-full px-3 py-2 text-white/70 transition hover:bg-white/6 hover:text-white"><Sparkles className="h-3.5 w-3.5 text-amber-200" /> Kit</Link>
          <a href="https://pay.kiwify.com.br/iH4iU6b" target="_blank" rel="noreferrer" className="hidden items-center gap-1.5 rounded-full bg-white px-4 py-2 font-bold text-slate-950 transition hover:bg-cyan-100 sm:inline-flex">Oferta completa <ArrowUpRight className="h-3.5 w-3.5" /></a>
        </nav>
      </div>
    </header>
  );
}
