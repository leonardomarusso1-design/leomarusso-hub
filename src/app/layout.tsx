import type { Metadata } from "next";
import "./globals.css";

/* eslint-disable @next/next/no-page-custom-font -- font link is intentionally global in the root layout. */

export const metadata: Metadata = {
  title: "Leonardo Marusso — Hub de Ebooks, Skills e Produtos Digitais",
  description:
    "Ebooks práticos, skills de IA instaláveis e produtos digitais para transformar conhecimento em execução.",
  metadataBase: new URL("https://leomarusso-hub.vercel.app"),
  openGraph: {
    title: "Leonardo Marusso — Conhecimento que vira execução",
    description: "Ebooks, skills e ferramentas próprias para colocar ideias no ar.",
    type: "website",
    locale: "pt_BR",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Manrope:wght@400;500;600;700&family=IBM+Plex+Mono:wght@500;600&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-full flex flex-col bg-hub-mesh text-white font-sans">{children}</body>
    </html>
  );
}
