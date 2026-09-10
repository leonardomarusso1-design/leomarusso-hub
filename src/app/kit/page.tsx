import type { Metadata } from "next";
import { cookies } from "next/headers";
import KitAccessScreen from "./KitAccessScreen";
import KitApp from "./KitApp";
import { isValidKitSession, KIT_SESSION_COOKIE } from "@/lib/kit-auth";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Kit de Execução da Primeira Oferta — Leonardo Marusso",
  description: "Área protegida com prompts, checklist, mensagens, precificação e CRM para executar sua primeira oferta.",
  robots: { index: false, follow: false },
};

export default async function KitPage() {
  const cookieStore = await cookies();
  const session = cookieStore.get(KIT_SESSION_COOKIE)?.value;

  if (!isValidKitSession(session)) return <KitAccessScreen />;

  return <KitApp />;
}
