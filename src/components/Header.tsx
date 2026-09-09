import Link from "next/link";
import NeuralBrain from "./NeuralBrain";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/8 glass">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2.5 group">
          <NeuralBrain className="h-8 w-8 shrink-0 transition group-hover:scale-110" />
          <span className="font-[family-name:var(--font-display)] text-[15px] font-semibold tracking-tight text-white">
            Leonardo Marusso
          </span>
        </Link>
        <nav className="flex items-center gap-6 text-sm text-white/60">
          <Link href="/#ebooks" className="transition hover:text-white">
            Ebooks &amp; Skills
          </Link>
          <Link href="/kit" className="transition hover:text-white">
            Kit
          </Link>
          <a
            href="https://wa.me/"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-white/8 px-4 py-1.5 font-medium text-white transition hover:bg-white/15"
          >
            Contato
          </a>
        </nav>
      </div>
    </header>
  );
}
