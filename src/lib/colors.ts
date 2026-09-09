import type { Ebook } from "@/data/ebooks";

// Mapa de classes Tailwind por cor — precisa ser escrito por extenso
// (não gerado dinamicamente) para o compilador do Tailwind conseguir
// detectar e incluir cada classe no build final.
export const colorMap: Record<
  Ebook["color"],
  { badge: string; ring: string; text: string; glow: string }
> = {
  amber: {
    badge: "bg-amber-400/15 text-amber-300 ring-1 ring-inset ring-amber-400/30",
    ring: "hover:ring-amber-400/50",
    text: "text-amber-400",
    glow: "from-amber-500/20",
  },
  sky: {
    badge: "bg-sky-400/15 text-sky-300 ring-1 ring-inset ring-sky-400/30",
    ring: "hover:ring-sky-400/50",
    text: "text-sky-400",
    glow: "from-sky-500/20",
  },
  rose: {
    badge: "bg-rose-400/15 text-rose-300 ring-1 ring-inset ring-rose-400/30",
    ring: "hover:ring-rose-400/50",
    text: "text-rose-400",
    glow: "from-rose-500/20",
  },
  emerald: {
    badge: "bg-emerald-400/15 text-emerald-300 ring-1 ring-inset ring-emerald-400/30",
    ring: "hover:ring-emerald-400/50",
    text: "text-emerald-400",
    glow: "from-emerald-500/20",
  },
  violet: {
    badge: "bg-violet-400/15 text-violet-300 ring-1 ring-inset ring-violet-400/30",
    ring: "hover:ring-violet-400/50",
    text: "text-violet-400",
    glow: "from-violet-500/20",
  },
  orange: {
    badge: "bg-orange-400/15 text-orange-300 ring-1 ring-inset ring-orange-400/30",
    ring: "hover:ring-orange-400/50",
    text: "text-orange-400",
    glow: "from-orange-500/20",
  },
  cyan: {
    badge: "bg-cyan-400/15 text-cyan-300 ring-1 ring-inset ring-cyan-400/30",
    ring: "hover:ring-cyan-400/50",
    text: "text-cyan-400",
    glow: "from-cyan-500/20",
  },
  lime: {
    badge: "bg-lime-400/15 text-lime-300 ring-1 ring-inset ring-lime-400/30",
    ring: "hover:ring-lime-400/50",
    text: "text-lime-400",
    glow: "from-lime-500/20",
  },
  fuchsia: {
    badge: "bg-fuchsia-400/15 text-fuchsia-300 ring-1 ring-inset ring-fuchsia-400/30",
    ring: "hover:ring-fuchsia-400/50",
    text: "text-fuchsia-400",
    glow: "from-fuchsia-500/20",
  },
  teal: {
    badge: "bg-teal-400/15 text-teal-300 ring-1 ring-inset ring-teal-400/30",
    ring: "hover:ring-teal-400/50",
    text: "text-teal-400",
    glow: "from-teal-500/20",
  },
};
