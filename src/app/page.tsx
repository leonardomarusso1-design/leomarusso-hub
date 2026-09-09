import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EbookCard from "@/components/EbookCard";
import { ebooks } from "@/data/ebooks";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="mx-auto max-w-6xl px-6 pt-20 pb-16 text-center">
          <span className="inline-block rounded-full border border-white/15 px-4 py-1 text-xs font-medium text-white/60">
            {ebooks.length} guias práticos, sem enrolação
          </span>
          <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Conhecimento prático pra quem constrói de verdade
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-white/60">
            Ebooks diretos, sem economês, escritos a partir do que funciona na prática —
            tráfego, vendas, copy, produtos digitais, IA, design, segurança e dinheiro.
          </p>
          <a
            href="#ebooks"
            className="mt-8 inline-block rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-neutral-950 transition hover:bg-amber-300"
          >
            Ver todos os ebooks
          </a>
        </section>

        {/* Grid de ebooks */}
        <section id="ebooks" className="mx-auto max-w-6xl px-6 pb-24">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {ebooks.map((ebook) => (
              <EbookCard key={ebook.slug} ebook={ebook} />
            ))}
          </div>
        </section>

        {/* Faixa de confiança */}
        <section className="border-t border-white/10 bg-white/[0.02] py-14">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <p className="text-white/50">
              Construindo ao vivo, documentando o que funciona — não é teoria de curso caro.
              Todo conteúdo é escrito para ser aplicado no mesmo dia em que você lê.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
