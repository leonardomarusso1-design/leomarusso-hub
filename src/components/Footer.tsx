import NeuralBrain from "./NeuralBrain";

export default function Footer() {
  return (
    <footer className="border-t border-white/8 py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-center gap-2 text-white/70">
          <NeuralBrain className="h-5 w-5" />
          <span className="font-[family-name:var(--font-display)] text-sm font-semibold">
            Leonardo Marusso
          </span>
        </div>
        <p className="mt-4 text-sm text-white/35">
          © {new Date().getFullYear()} Leonardo Marusso. Todos os direitos reservados.
        </p>
        <p className="mt-1 text-sm text-white/35">
          Conteúdo educacional e informativo. Não há promessa de resultados garantidos.
        </p>
      </div>
    </footer>
  );
}
