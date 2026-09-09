import type { Metadata } from "next";
import KitApp from "./KitApp";

export const metadata: Metadata = {
  title: "Kit de Execução da Primeira Oferta — Leonardo Marusso",
  description:
    "55 prompts premium, checklist de execução, mensagens de WhatsApp prontas, modelo de precificação e planilha de CRM em Excel.",
};

export default function KitPage() {
  return (
    <div className="bg-brand-light text-brand-gray font-sans antialiased">
      <KitApp />
    </div>
  );
}
