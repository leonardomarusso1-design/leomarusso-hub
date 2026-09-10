import { Mail, ShieldCheck } from "lucide-react";
import NeuralBrain from "./NeuralBrain";

export default function Footer() {
  return (
    <footer className="border-t border-white/8 bg-black/15 py-12">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <div className="flex items-center gap-2 text-white/80">
            <NeuralBrain className="h-5 w-5" />
            <span className="font-[family-name:var(--font-display)] text-sm font-semibold">Leonardo Marusso</span>
          </div>
          <p className="mt-4 max-w-lg text-sm leading-6 text-white/38">Ebooks, skills e produtos digitais para quem quer transformar conhecimento em execução real.</p>
          <p className="mt-4 text-xs text-white/28">© {new Date().getFullYear()} Leonardo Marusso. Todos os direitos reservados.</p>
        </div>
        <div className="flex flex-col items-start gap-3 text-sm text-white/48 md:items-end">
          <a href="mailto:leonardomarusso1@gmail.com" className="inline-flex items-center gap-2 transition hover:text-white"><Mail className="h-4 w-4" /> Suporte</a>
          <span className="inline-flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-cyan-300/70" /> Pagamentos processados pela Kiwify</span>
          <span className="text-xs text-white/28">Conteúdo educacional e informativo. Não há promessa de resultados garantidos.</span>
        </div>
      </div>
    </footer>
  );
}
