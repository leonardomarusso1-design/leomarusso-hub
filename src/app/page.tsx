import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EbookCard from "@/components/EbookCard";
import NeuralBrain from "@/components/NeuralBrain";
import { ebooks } from "@/data/ebooks";
import { Sparkles } from "lucide-react";

export default function HomePage() {
  const skillCount = ebooks.filter((e) => e.skillIncluded || e.kind === "kit").length;

  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative mx-auto max-w-6xl px-6 pt-16 pb-20 sm:pt-24">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 font-[family-name:var(--font-mono)] text-xs uppercase tracking-wider text-white/60">
                <Sparkles className="h-3.5 w-3.5 text-violet-400" />
                {ebooks.length} produtos · {skillCount} com skill de IA inclusa
              </span>
              <h1 className="mt-6 font-[family-name:var(--font-display)] text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-6xl">
                Conhecimento que você{" "}
                <span className="bg-gradient-to-r from-violet-400 to-cyan-300 bg-clip-text text-transparent">
                  instala
                </span>
                , não só lê
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/55">
                Ebooks diretos, sem economês — e, junto de cada um, a skill ou
                agente de IA pronto pra colar no Claude Code, Codex ou seu
                assistente favorito e aplicar o método na prática, no mesmo dia.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#ebooks"
                  className="rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 px-6 py-3 text-sm font-semibold text-neutral-950 transition hover:opacity-90"
                >
                  Ver todos os produtos
                </a>
                <a
                  href="/kit"
                  className="rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-white/80 transition hover:border-white/30 hover:text-white"
                >
                  Conhecer o Kit de Execução
                </a>
              </div>
            </div>

            <div className="relative mx-auto hidden aspect-square w-full max-w-sm items-center justify-center lg:flex">
              <NeuralBrain className="h-full w-full" />
            </div>
          </div>
        </section>

        {/* Grid de ebooks */}
        <section id="ebooks" className="mx-auto max-w-6xl px-6 pb-24">
          <div className="mb-8 flex items-end justify-between">
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-white">
              Todos os produtos
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {ebooks.map((ebook) => (
              <EbookCard key={ebook.slug} ebook={ebook} />
            ))}
          </div>
        </section>

        {/* Faixa de confiança */}
        <section className="border-t border-white/8 bg-white/[0.015] py-16">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <p className="text-white/50">
              Construindo ao vivo, documentando o que funciona — não é teoria de
              curso caro. Todo conteúdo é escrito para ser aplicado no mesmo dia
              em que você lê, e as skills incluídas são as mesmas que uso nos
              meus próprios produtos.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
