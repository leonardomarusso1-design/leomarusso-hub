import { notFound } from "next/navigation";
import { Zap, Check, X } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ebooks, getEbook } from "@/data/ebooks";
import { colorMap } from "@/lib/colors";

export function generateStaticParams() {
  return ebooks.map((e) => ({ slug: e.slug }));
}

export default async function EbookPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const ebook = getEbook(slug);
  if (!ebook) notFound();

  const c = colorMap[ebook.color];
  const checkoutDisabled = ebook.kiwifyUrl === "#";

  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="mx-auto max-w-4xl px-6 pt-16 pb-10">
          <span className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${c.badge}`}>
            {ebook.kind === "kit" ? "Kit interativo" : "Ebook"}
          </span>
          <h1 className="mt-4 font-[family-name:var(--font-display)] text-4xl font-bold tracking-tight text-white">
            {ebook.title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/60">{ebook.description}</p>

          {ebook.skillIncluded && (
            <div className="mt-6 flex items-start gap-3 rounded-xl border border-violet-400/20 bg-violet-400/5 p-4">
              <Zap className="mt-0.5 h-4 w-4 flex-none text-violet-400" />
              <p className="text-sm text-white/70">
                <span className="font-medium text-white">
                  Inclui a skill &ldquo;{ebook.skillIncluded.name}&rdquo;
                </span>{" "}
                — arquivo pronto pra instalar no Claude Code, Codex ou qualquer
                assistente de IA. {ebook.skillIncluded.description}
              </p>
            </div>
          )}

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <span className="font-[family-name:var(--font-display)] text-2xl font-bold text-white">
              {ebook.priceLabel}
            </span>
            {checkoutDisabled ? (
              <span className="rounded-full border border-white/15 px-6 py-3 text-sm text-white/40">
                Checkout em breve
              </span>
            ) : (
              <a
                href={ebook.kiwifyUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 px-6 py-3 text-sm font-semibold text-neutral-950 transition hover:opacity-90"
              >
                Comprar agora
              </a>
            )}
            <span className="text-sm text-white/40">
              {ebook.kind === "kit"
                ? "Acesso protegido pela área de membros"
                : "Entrega pela área de membros da Kiwify"}
            </span>
          </div>
        </section>

        {/* Capítulos */}
        <section className="mx-auto max-w-4xl px-6 py-10">
          <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold text-white">
            O que você vai encontrar
          </h2>
          <ul className="mt-5 space-y-3">
            {ebook.chapters.map((ch) => (
              <li
                key={ch}
                className="flex items-start gap-3 rounded-xl glass px-4 py-3 text-white/80"
              >
                <span className={`mt-1 h-1.5 w-1.5 flex-none rounded-full ${c.dot}`} />
                {ch}
              </li>
            ))}
          </ul>
        </section>

        {/* Pra quem é / não é */}
        <section className="mx-auto max-w-4xl px-6 py-10">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/5 p-5">
              <h3 className="flex items-center gap-2 font-semibold text-emerald-300">
                <Check className="h-4 w-4" /> Para quem é
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-white/70">
                {ebook.forWho.map((f) => (
                  <li key={f}>• {f}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-rose-400/20 bg-rose-400/5 p-5">
              <h3 className="flex items-center gap-2 font-semibold text-rose-300">
                <X className="h-4 w-4" /> Não é para quem
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-white/70">
                {ebook.notForWho.map((f) => (
                  <li key={f}>• {f}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mx-auto max-w-4xl px-6 py-10">
          <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold text-white">
            Perguntas frequentes
          </h2>
          <div className="mt-5 space-y-4">
            {ebook.faq.map((item) => (
              <div key={item.q} className="rounded-xl glass p-5">
                <p className="font-medium text-white">{item.q}</p>
                <p className="mt-2 text-sm text-white/60">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA final */}
        <section className="mx-auto max-w-4xl px-6 py-16 text-center">
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-white">
            Pronto para começar?
          </h2>
          <div className="mt-6">
            {checkoutDisabled ? (
              <span className="rounded-full border border-white/15 px-8 py-3 text-sm text-white/40">
                Checkout em breve
              </span>
            ) : (
              <a
                href={ebook.kiwifyUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 px-8 py-3 text-sm font-semibold text-neutral-950 transition hover:opacity-90"
              >
                Quero o {ebook.title} — {ebook.priceLabel}
              </a>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
