import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Leonardo Marusso — Ebooks",
  description:
    "Guias práticos sobre tráfego, vendas, copy, produtos digitais, IA, design, segurança e educação financeira.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-neutral-950 text-white font-sans">
        {children}
      </body>
    </html>
  );
}
