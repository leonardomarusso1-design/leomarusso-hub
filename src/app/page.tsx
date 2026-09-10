import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EbookCard from "@/components/EbookCard";
import NeuralBrain from "@/components/NeuralBrain";
import { ebooks } from "@/data/ebooks";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ExternalLink,
  Layers3,
  MessageCircle,
  PiggyBank,
  Rocket,
  Sparkles,
  Smartphone,
  Target,
  Workflow,
} from "lucide-react";

const bundleUrl = "https://pay.kiwify.com.br/iH4iU6b";
const kitUrl = "https://pay.kiwify.com.br/gE9Fdv7";

export default function HomePage() {
  const ebookCount = ebooks.filter((ebook) => ebook.kind !== "kit").length;
  const skillCount = ebooks.filter((ebook) => ebook.skillIncluded).length;

  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="relative overflow-hidden border-b border-white/8">
          <div className="pointer-events-none absolute inset-0 bg-hub-mesh" aria-hidden="true" />
          <div className="pointer-events-none absolute -right-32 top-8 h-96 w-96 rounded-full bg-violet-500/10 blur-3xl" aria-hidden="true" />
          <div className="pointer-events-none absolute left-1/3 top-64 h-72 w-72 rounded-full bg-cyan-400/8 blur-3xl" aria-hidden="true" />

          <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-14 px-6 py-20 sm:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-20 lg:py-28">
            <div>
              <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-white/45">
                <span className="inline-flex items-center gap-2 rounded-full border border-violet-300/20 bg-violet-300/8 px-3 py-1.5 text-violet-200">
                  <Sparkles className="h-3.5 w-3.5" />
                  Hub de execução
                </span>
                <span>{ebookCount} ebooks · {skillCount} skills</span>
              </div>

              <h1 className="mt-7 max-w-3xl font-[family-name:var(--font-display)] text-5xl font-semibold leading-[1.02] tracking-[-0.045em] text-white sm:text-7xl">
                Ideias boas merecem um sistema para sair do papel.
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-white/58 sm:text-xl">
                Conhecimento direto, skills de IA e ferramentas próprias para transformar atenção em vendas, números em decisões e planos em execução.
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-3">
                <a
                  href="#oferta-completa"
                  className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-400 to-cyan-300 px-6 py-3.5 text-sm font-bold text-slate-950 shadow-[0_0_36px_rgba(139,107,255,0.22)] transition hover:-translate-y-0.5 hover:shadow-[0_0_48px_rgba(47,217,232,0.28)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
                >
                  Ver a oferta completa
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
                <a
                  href="#produtos"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/4 px-6 py-3.5 text-sm font-semibold text-white/78 transition hover:border-white/30 hover:bg-white/8 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
                >
                  Explorar por tema
                </a>
              </div>

              <div className="mt-10 grid max-w-xl grid-cols-1 gap-3 text-sm text-white/58 sm:grid-cols-3">
                {[
                  [Rocket, "Aplicação no mesmo dia"],
                  [Layers3, "Ebook + skill instalável"],
                  [Target, "Método sem economês"],
                ].map(([Icon, label]) => (
                  <div key={label as string} className="flex items-center gap-2">
                    <Icon className="h-4 w-4 text-cyan-300" />
                    <span>{label as string}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-lg">
              <div className="absolute -inset-8 rounded-[2rem] bg-violet-500/10 blur-3xl" aria-hidden="true" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/12 bg-[#0b0e18]/90 p-5 shadow-2xl shadow-black/30 sm:p-7">
                <div className="flex items-center justify-between border-b border-white/8 pb-5">
                  <div>
                    <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.18em] text-white/35">Modo de trabalho</p>
                    <p className="mt-1 font-[family-name:var(--font-display)] text-lg font-semibold text-white">Da ideia ao próximo passo</p>
                  </div>
                  <span className="rounded-full border border-cyan-300/20 bg-cyan-300/8 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-cyan-200">online</span>
                </div>
                <div className="relative mt-7 flex justify-center">
                  <NeuralBrain className="h-52 w-52 sm:h-64 sm:w-64" />
                </div>
                <div className="mt-5 grid grid-cols-3 gap-2">
                  {["Ler", "Instalar", "Executar"].map((step, index) => (
                    <div key={step} className="rounded-xl border border-white/8 bg-white/[0.035] p-3 text-center">
                      <span className="font-[family-name:var(--font-mono)] text-[10px] text-violet-300">0{index + 1}</span>
                      <p className="mt-1 text-xs font-semibold text-white/75">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="oferta-completa" className="mx-auto max-w-7xl scroll-mt-24 px-6 py-14 sm:py-20">
          <div className="relative overflow-hidden rounded-[1.75rem] border border-amber-300/25 bg-gradient-to-br from-amber-300/12 via-violet-400/8 to-cyan-300/8 p-6 sm:p-9">
            <div className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-amber-300/12 blur-3xl" aria-hidden="true" />
            <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-amber-300/30 bg-amber-300/12 px-3 py-1 font-[family-name:var(--font-mono)] text-[10px] font-bold uppercase tracking-[0.16em] text-amber-200">Oferta principal</span>
                  <span className="text-xs font-medium text-white/45">Acesso pela Kiwify</span>
                </div>
                <h2 className="mt-4 max-w-3xl font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  Todos os Ebooks e Skills em uma compra só.
                </h2>
                <p className="mt-3 max-w-2xl text-sm leading-6 text-white/58 sm:text-base">
                  O mapa completo para atrair atenção, criar ofertas, vender, construir produtos e organizar a vida financeira — com a skill certa para colocar cada método em prática.
                </p>
                <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-xs text-white/60">
                  {['9 ebooks práticos', '9 skills de IA instaláveis', 'Entrega pela área de membros'].map((item) => (
                    <span key={item} className="inline-flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-amber-200" />{item}</span>
                  ))}
                </div>
              </div>
              <div className="flex flex-col items-start gap-4 lg:items-end">
                <div className="flex items-end gap-3">
                  <span className="text-sm text-white/35 line-through">R$ 392,97</span>
                  <span className="font-[family-name:var(--font-display)] text-4xl font-bold text-amber-200">R$ 247,90</span>
                </div>
                <a href={bundleUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-amber-200 px-6 py-3 text-sm font-bold text-[#221800] transition hover:-translate-y-0.5 hover:bg-amber-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-200">
                  Quero o acesso completo <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="produtos" className="mx-auto max-w-7xl scroll-mt-24 px-6 pb-20 sm:pb-28">
          <div className="mb-9 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-[family-name:var(--font-mono)] text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan-300/80">Biblioteca de execução</p>
              <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-white sm:text-4xl">Escolha o próximo sistema que você precisa instalar.</h2>
            </div>
            <span className="text-sm text-white/38">Cada produto abre sua própria página de detalhes</span>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {ebooks.map((ebook) => <EbookCard key={ebook.slug} ebook={ebook} />)}
          </div>
        </section>

        <section id="ferramentas" className="border-y border-white/8 bg-white/[0.018] py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="max-w-3xl">
              <p className="font-[family-name:var(--font-mono)] text-[11px] font-semibold uppercase tracking-[0.18em] text-violet-300/80">Produtos em operação</p>
              <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-white sm:text-4xl">A teoria termina onde as ferramentas começam.</h2>
              <p className="mt-4 text-base leading-7 text-white/55">Dois SaaS próprios conectam o Hub ao mundo real: atenção que vira atendimento e números que viram decisões.</p>
            </div>

            <div className="mt-10 grid gap-5 lg:grid-cols-2">
              <a href="https://toqy.com.br/" target="_blank" rel="noreferrer" className="group relative overflow-hidden rounded-[1.5rem] border border-cyan-300/15 bg-gradient-to-br from-cyan-300/10 via-white/[0.03] to-transparent p-7 transition hover:-translate-y-1 hover:border-cyan-300/35 hover:shadow-2xl hover:shadow-cyan-950/30">
                <div className="flex items-start justify-between gap-4">
                  <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/8 px-3 py-1 text-xs font-semibold text-cyan-200"><Smartphone className="h-3.5 w-3.5" /> Aquisição local</span>
                  <ArrowUpRight className="h-5 w-5 text-cyan-200/60 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cyan-100" />
                </div>
                <h3 className="mt-7 max-w-md font-[family-name:var(--font-display)] text-2xl font-semibold text-white sm:text-3xl">TOQY transforma o link da bio em atendimento.</h3>
                <p className="mt-4 max-w-xl text-sm leading-6 text-white/55">WhatsApp, catálogo, Pix, mapa, QR Code e NFC em um biosite profissional — a porta de entrada ideal para quem vende para negócios locais.</p>
                <div className="mt-7 flex flex-wrap gap-2 text-xs text-white/58"><span className="rounded-lg bg-white/6 px-3 py-2">1 biosite grátis</span><span className="rounded-lg bg-white/6 px-3 py-2">Sem código</span><span className="rounded-lg bg-white/6 px-3 py-2">A partir de R$ 9,90/mês</span></div>
                <span className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-cyan-200">Criar meu biosite <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></span>
              </a>

              <a href="https://patrimo-ashy.vercel.app/" target="_blank" rel="noreferrer" className="group relative overflow-hidden rounded-[1.5rem] border border-violet-300/15 bg-gradient-to-br from-violet-300/10 via-white/[0.03] to-transparent p-7 transition hover:-translate-y-1 hover:border-violet-300/35 hover:shadow-2xl hover:shadow-violet-950/30">
                <div className="flex items-start justify-between gap-4">
                  <span className="inline-flex items-center gap-2 rounded-full border border-violet-300/20 bg-violet-300/8 px-3 py-1 text-xs font-semibold text-violet-200"><PiggyBank className="h-3.5 w-3.5" /> Clareza financeira</span>
                  <ArrowUpRight className="h-5 w-5 text-violet-200/60 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-violet-100" />
                </div>
                <h3 className="mt-7 max-w-md font-[family-name:var(--font-display)] text-2xl font-semibold text-white sm:text-3xl">Ordre (Patrimo) transforma números em decisões.</h3>
                <p className="mt-4 max-w-xl text-sm leading-6 text-white/55">Orçamento, reserva, metas, investimentos e patrimônio em uma sequência só — com 7 dias grátis e uma experiência pensada para celular.</p>
                <div className="mt-7 flex flex-wrap gap-2 text-xs text-white/58"><span className="rounded-lg bg-white/6 px-3 py-2">7 dias grátis</span><span className="rounded-lg bg-white/6 px-3 py-2">8 módulos</span><span className="rounded-lg bg-white/6 px-3 py-2">R$ 97,90/ano</span></div>
                <span className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-violet-200">Conhecer o Ordre <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></span>
              </a>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 sm:py-24">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.025] p-7">
              <div className="flex items-center gap-3 text-white"><Workflow className="h-5 w-5 text-cyan-300" /><span className="font-[family-name:var(--font-display)] text-lg font-semibold">O caminho mais curto</span></div>
              <ol className="mt-6 space-y-5">
                {[
                  ['01', 'Escolha uma habilidade', 'Comece por um problema específico, não por uma ferramenta.'],
                  ['02', 'Instale o método', 'Use a skill de IA para transformar leitura em decisão e rascunho.'],
                  ['03', 'Coloque no ar', 'Use TOQY, Ordre ou seu próprio produto para testar no mundo real.'],
                ].map(([number, title, text]) => <li key={number} className="flex gap-4"><span className="font-[family-name:var(--font-mono)] text-xs text-cyan-300">{number}</span><div><p className="font-semibold text-white/85">{title}</p><p className="mt-1 text-sm leading-6 text-white/45">{text}</p></div></li>)}
              </ol>
            </div>
            <div className="max-w-2xl lg:pl-10">
              <p className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-white/35">Sem promessa mágica</p>
              <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-white sm:text-4xl">Você não precisa de mais conteúdo. Precisa de um próximo passo claro.</h2>
              <p className="mt-5 text-base leading-7 text-white/55">Os materiais foram escritos para serem usados enquanto você lê: uma oferta para testar, uma mensagem para enviar, uma página para publicar ou uma decisão financeira para tomar.</p>
              <div className="mt-7 flex flex-wrap gap-3"><a href={kitUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-amber-300/30 bg-amber-300/10 px-5 py-3 text-sm font-bold text-amber-100 transition hover:bg-amber-300/15">Kit de Execução — R$ 49,90 <ExternalLink className="h-4 w-4" /></a><a href="mailto:leonardomarusso1@gmail.com" className="inline-flex items-center gap-2 rounded-full border border-white/12 px-5 py-3 text-sm font-semibold text-white/65 transition hover:border-white/25 hover:text-white"><MessageCircle className="h-4 w-4" /> Falar com suporte</a></div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
