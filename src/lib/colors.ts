import type { Ebook } from "@/data/ebooks";

// Paleta restrita a 4 tons (violeta, ciano, esmeralda-técnico, ouro) — as 10
// chaves de cor dos ebooks mapeiam pra esses 4 tons em vez de 10 cores
// diferentes brigando por atenção. Classes escritas por extenso pro
// compilador do Tailwind conseguir detectar cada uma no build final.
export const colorMap: Record<
  Ebook["color"],
  { badge: string; ring: string; text: string; glow: string; dot: string }
> = {
  // tom violeta
  violet: {
    badge: "bg-violet-400/15 text-violet-300 ring-1 ring-inset ring-violet-400/30",
    ring: "hover:ring-violet-400/50",
    text: "text-violet-400",
    glow: "from-violet-500/25",
    dot: "bg-violet-400",
  },
  fuchsia: {
    badge: "bg-violet-400/15 text-violet-300 ring-1 ring-inset ring-violet-400/30",
    ring: "hover:ring-violet-400/50",
    text: "text-violet-400",
    glow: "from-violet-500/25",
    dot: "bg-violet-400",
  },
  rose: {
    badge: "bg-violet-400/15 text-violet-300 ring-1 ring-inset ring-violet-400/30",
    ring: "hover:ring-violet-400/50",
    text: "text-violet-400",
    glow: "from-violet-500/25",
    dot: "bg-violet-400",
  },
  // tom ciano
  sky: {
    badge: "bg-cyan-400/15 text-cyan-300 ring-1 ring-inset ring-cyan-400/30",
    ring: "hover:ring-cyan-400/50",
    text: "text-cyan-400",
    glow: "from-cyan-500/25",
    dot: "bg-cyan-400",
  },
  cyan: {
    badge: "bg-cyan-400/15 text-cyan-300 ring-1 ring-inset ring-cyan-400/30",
    ring: "hover:ring-cyan-400/50",
    text: "text-cyan-400",
    glow: "from-cyan-500/25",
    dot: "bg-cyan-400",
  },
  // tom esmeralda-técnico
  emerald: {
    badge: "bg-emerald-400/15 text-emerald-300 ring-1 ring-inset ring-emerald-400/30",
    ring: "hover:ring-emerald-400/50",
    text: "text-emerald-400",
    glow: "from-emerald-500/25",
    dot: "bg-emerald-400",
  },
  lime: {
    badge: "bg-emerald-400/15 text-emerald-300 ring-1 ring-inset ring-emerald-400/30",
    ring: "hover:ring-emerald-400/50",
    text: "text-emerald-400",
    glow: "from-emerald-500/25",
    dot: "bg-emerald-400",
  },
  teal: {
    badge: "bg-emerald-400/15 text-emerald-300 ring-1 ring-inset ring-emerald-400/30",
    ring: "hover:ring-emerald-400/50",
    text: "text-emerald-400",
    glow: "from-emerald-500/25",
    dot: "bg-emerald-400",
  },
  // tom ouro (reservado — só o produto-âncora e o Kit usam)
  amber: {
    badge: "bg-amber-400/15 text-amber-300 ring-1 ring-inset ring-amber-400/30",
    ring: "hover:ring-amber-400/50",
    text: "text-amber-400",
    glow: "from-amber-500/25",
    dot: "bg-amber-400",
  },
  orange: {
    badge: "bg-amber-400/15 text-amber-300 ring-1 ring-inset ring-amber-400/30",
    ring: "hover:ring-amber-400/50",
    text: "text-amber-400",
    glow: "from-amber-500/25",
    dot: "bg-amber-400",
  },
};
