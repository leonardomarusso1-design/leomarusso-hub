export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto max-w-6xl px-6 text-sm text-white/40">
        <p>© {new Date().getFullYear()} Leonardo Marusso. Todos os direitos reservados.</p>
        <p className="mt-1">
          Conteúdo educacional e informativo. Não há promessa de resultados garantidos.
        </p>
      </div>
    </footer>
  );
}
