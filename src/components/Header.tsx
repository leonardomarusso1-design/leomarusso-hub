import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-white/10">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link href="/" className="font-semibold tracking-tight text-white">
          Leonardo Marusso
        </Link>
        <nav className="flex items-center gap-6 text-sm text-white/70">
          <Link href="/#ebooks" className="hover:text-white">
            Ebooks
          </Link>
          <a
            href="https://wa.me/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white"
          >
            Contato
          </a>
        </nav>
      </div>
    </header>
  );
}
