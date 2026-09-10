export type Ebook = {
  slug: string;
  /** "ebook" = PDF estático. "kit" = ferramenta interativa protegida por senha. */
  kind?: "ebook" | "kit";
  title: string;
  tagline: string;
  description: string;
  price: number;
  priceLabel: string;
  color:
    | "amber"
    | "sky"
    | "rose"
    | "emerald"
    | "violet"
    | "orange"
    | "cyan"
    | "lime"
    | "fuchsia"
    | "teal";
  chapters: string[];
  forWho: string[];
  notForWho: string[];
  faq: { q: string; a: string }[];
  /**
   * Cole aqui o link de checkout do produto correspondente na Kiwify.
   * Enquanto estiver "#", o botão de compra fica desabilitado no card.
   */
  kiwifyUrl: string;
  /**
   * Skill/agente que acompanha o ebook — arquivo .md pronto pra instalar
   * no Claude Code, Codex ou qualquer assistente de IA que leia instruções
   * customizadas. Não é obrigatório em todos os produtos.
   */
  skillIncluded?: {
    name: string;
    description: string;
  };
};

export const ebooks: Ebook[] = [
  {
    slug: "do-zero-a-primeira-oferta",
    title: "Do Zero à Primeira Oferta",
    tagline: "Como montar um serviço simples usando IA, WhatsApp e internet — mesmo sem audiência.",
    description:
      "O guia prático para sair da paralisia de \"não sei o que vender\" e conseguir seu primeiro cliente em 7 dias, usando o que você já sabe fazer.",
    price: 26.97,
    priceLabel: "R$ 26,97",
    color: "amber",
    chapters: [
      "Clareza: desfazendo a confusão sobre o que vender",
      "Escolha: como escolher sem inventar moda",
      "Construção: a Oferta de Uma Página",
      "IA na Prática: como usar sem parecer um robô",
      "Venda Simples: a Mensagem de 4 Partes no WhatsApp",
      "Execução: o Plano de Teste de 7 Dias",
    ],
    forWho: [
      "Quem quer começar a vender um serviço simples esta semana, não algum dia",
      "Quem já tem uma habilidade (edição, design, IA, organização) mas nunca cobrou por ela",
      "Quem trava na hora de definir o que oferecer e para quem",
    ],
    notForWho: [
      "Quem procura fórmula de ficar rico rápido sem trabalhar",
      "Quem já tem uma oferta validada e busca escala (veja o ebook de Growth e Gestão)",
    ],
    faq: [
      { q: "Preciso saber programar ou usar ferramentas caras de IA?", a: "Não. O guia usa ferramentas de IA gratuitas ou baratas, e o foco é na oferta, não na tecnologia." },
      { q: "Funciona para qualquer tipo de serviço?", a: "Sim — os frameworks são de posicionamento e venda, aplicáveis a qualquer habilidade que você já tenha." },
      { q: "Em quanto tempo consigo o primeiro cliente?", a: "O plano de execução é desenhado para 7 dias, do zero até a primeira mensagem de prospecção." },
    ],
    kiwifyUrl: "https://pay.kiwify.com.br/PdCFHKs",
    skillIncluded: {
      name: "primeira-oferta-express",
      description:
        "Faz a IA te ajudar a montar uma oferta simples e a mensagem de primeira abordagem em minutos, seguindo os 7 passos do ebook.",
    },
  },
  {
    slug: "trafego-e-atencao",
    title: "Tráfego e Atenção",
    tagline: "Como atrair clientes pela internet: tráfego pago, orgânico, redes sociais e WhatsApp.",
    description:
      "Um mapa completo de como conseguir que as pessoas certas te encontrem — da pesquisa de público ao WhatsApp marketing, sem depender de sorte ou verba infinita.",
    price: 37,
    priceLabel: "R$ 37",
    color: "sky",
    chapters: [
      "Pesquisa de mercado e público: para quem você está falando",
      "Tráfego pago: comprando atenção com precisão",
      "Tráfego orgânico: presença sem depender só de verba",
      "Redes sociais: da audiência à comunidade",
      "YouTube: construindo um canal de aquisição",
      "E-mail e WhatsApp marketing: os canais mais duráveis",
    ],
    forWho: [
      "Pequenos negócios e prestadores de serviço que dependem de indicação e querem escalar",
      "Criadores de conteúdo que já postam, mas não convertem em cliente",
    ],
    notForWho: ["Quem procura \"hack\" de viralização sem estratégia por trás"],
    faq: [
      { q: "Preciso ter verba para anúncios?", a: "Não — metade do livro é sobre tráfego orgânico e canais gratuitos como WhatsApp e e-mail." },
      { q: "Serve para negócio local ou só digital?", a: "Os dois. Há exemplos práticos para negócio físico e para operação 100% online." },
    ],
    kiwifyUrl: "https://pay.kiwify.com.br/DOYp7OO",
    skillIncluded: {
      name: "mapa-de-trafego",
      description:
        "Diagnostica qual canal (pago, orgânico, redes, e-mail/WhatsApp) faz mais sentido pro seu momento e gera um plano de ação da semana.",
    },
  },
  {
    slug: "copy-marca-design",
    title: "Copy, Marca e Design que Convertem",
    tagline: "Por que você está competindo no preço — e como parar de competir nele.",
    description:
      "Os frameworks reais de copywriting, branding, design visual, UX/UI, landing pages e CRO que separam quem comunica valor de quem só compete em preço.",
    price: 37,
    priceLabel: "R$ 37",
    color: "rose",
    chapters: [
      "Copywriting: canalizando um desejo que já existe",
      "Branding: a percepção que fica quando você não está no controle",
      "Design visual: organizando a mensagem para o olho entender em segundos",
      "UX/UI: a jornada do primeiro clique ao hábito",
      "Landing pages: onde copy, marca, design e UX se encontram",
      "CRO: transformando opinião em evidência",
    ],
    forWho: [
      "Quem vende um produto bom mas com uma comunicação que não convence",
      "Quem está lançando um site, landing page ou produto novo e quer acertar de primeira",
    ],
    notForWho: ["Quem busca templates prontos em vez de entender o porquê por trás deles"],
    faq: [
      { q: "Preciso ser designer para aplicar?", a: "Não — o livro ensina os princípios, não ferramentas. Dá pra aplicar em qualquer editor ou até briefando um freelancer." },
    ],
    kiwifyUrl: "https://pay.kiwify.com.br/cEEKxn2",
    skillIncluded: {
      name: "copy-que-converte",
      description:
        "Aplica a fórmula 4U, a Equação de Valor e ancoragem de valor pra reescrever headline, oferta e resposta a objeções.",
    },
  },
  {
    slug: "vendas-funis",
    title: "Vendas, Funis e Relacionamento com o Cliente",
    tagline: "O problema quase nunca é o produto. Vendas é processo, não talento.",
    description:
      "Psicologia da venda, técnicas de condução até o fechamento, organização de clientes (CRM) e funis — um sistema completo para vender de forma repetível.",
    price: 37,
    priceLabel: "R$ 37",
    color: "emerald",
    chapters: [
      "Psicologia da venda: por que as pessoas realmente compram",
      "Técnicas e processo de vendas: conduzindo até o fechamento",
      "CRM: organização de clientes como alavanca de receita",
      "Funis: do desconhecido ao cliente recorrente",
    ],
    forWho: [
      "Quem tem um bom produto mas trava na hora de vender",
      "Quem vende, mas de forma inconsistente — depende do humor do dia",
    ],
    notForWho: ["Quem procura scripts manipulativos de venda agressiva"],
    faq: [
      { q: "Funciona para venda por WhatsApp/direct?", a: "Sim, boa parte dos exemplos são de conversa 1 a 1, o canal mais comum no Brasil." },
    ],
    kiwifyUrl: "https://pay.kiwify.com.br/yrRbRim",
    skillIncluded: {
      name: "funil-de-vendas-diagnostico",
      description:
        "Mapeia em que etapa do funil um cliente está travado e sugere a próxima mensagem/ação certa pra destravar a venda.",
    },
  },
  {
    slug: "produtos-digitais-ia",
    title: "Construindo Produtos Digitais com Tecnologia e IA",
    tagline: "Por que hoje dá para construir um produto digital sozinho, sem time.",
    description:
      "IA aplicada, fundamentos de SaaS, desenvolvimento sem precisar programar do zero, automações, analytics e precificação — para quem quer criar um produto digital solo.",
    price: 47,
    priceLabel: "R$ 47",
    color: "violet",
    chapters: [
      "Usando IA na prática para construir produtos",
      "Fundamentos de SaaS",
      "Desenvolvimento: a stack moderna mesmo sem programar",
      "Automações: ligando sistemas sem reinventar a roda",
      "Analytics: medindo o que realmente importa",
      "Precificação: capturando o valor que você entrega",
    ],
    forWho: [
      "Quem quer lançar um SaaS, app ou automação sozinho",
      "Quem já programa um pouco e quer acelerar com IA sem perder qualidade",
    ],
    notForWho: ["Quem nunca usou computador para nada além de redes sociais (é preciso disposição para aprender)"],
    faq: [
      { q: "Preciso saber programar?", a: "Ajuda, mas não é obrigatório — o livro cobre como usar IA e ferramentas no-code/low-code para reduzir essa barreira." },
    ],
    kiwifyUrl: "https://pay.kiwify.com.br/nXogzll",
    skillIncluded: {
      name: "arquiteto-de-produto-ia",
      description:
        "Guia técnico de decisão: prompt engineering vs. RAG vs. fine-tuning, e quando um workflow simples basta em vez de um agente.",
    },
  },
  {
    slug: "mentalidade-growth-gestao",
    title: "Mentalidade, Growth e Gestão de um Negócio Digital",
    tagline: "Mentalidade e gestão importam mais que tática isolada.",
    description:
      "Mentalidade de negócios, lançamentos, escala, finanças, growth, produtividade e empreendedorismo digital — a camada de gestão que sustenta o crescimento.",
    price: 37,
    priceLabel: "R$ 37",
    color: "orange",
    chapters: [
      "Mentalidade de negócios",
      "Lançamentos",
      "Escala",
      "Finanças do negócio",
      "Growth",
      "Produtividade e empreendedorismo digital",
    ],
    forWho: [
      "Quem já fatura algo e quer crescer sem perder o controle",
      "Quem sente que trabalha muito mas o negócio não sai do lugar",
    ],
    notForWho: ["Quem está no dia 1 e ainda não tem nenhuma oferta rodando (comece pelo 'Do Zero à Primeira Oferta')"],
    faq: [
      { q: "É teórico ou prático?", a: "Cada capítulo tem framework, exemplo prático e checklist — nada de teoria solta." },
    ],
    kiwifyUrl: "https://pay.kiwify.com.br/zTkqzo3",
    skillIncluded: {
      name: "growth-e-gestao-semanal",
      description:
        "Roteiro de revisão semanal do negócio: métricas que importam, decisões pendentes e prioridades da semana.",
    },
  },
  {
    slug: "conteudo-carreira-digital",
    title: "Conteúdo, Carreira e Fundamentos do Jogo Digital",
    tagline: "Conteúdo é a base de tudo hoje — mas poucos entendem as regras do jogo.",
    description:
      "Estratégia de conteúdo, direito digital básico para quem vende online, economia do criador, networking e frameworks clássicos aplicados ao digital.",
    price: 37,
    priceLabel: "R$ 37",
    color: "cyan",
    chapters: [
      "Estratégia de conteúdo: estrutura, ganchos e reaproveitamento",
      "Direito digital básico para quem vende online",
      "Economia do criador: do alcance à recorrência",
      "Networking: a ciência das conexões que geram oportunidade",
      "Frameworks clássicos de negócio aplicados ao digital",
    ],
    forWho: [
      "Criadores de conteúdo que querem transformar audiência em renda",
      "Quem está começando a postar e não sabe por onde estruturar",
    ],
    notForWho: ["Quem busca só técnica de edição de vídeo (esse livro é estratégia, não tutorial de ferramenta)"],
    faq: [
      { q: "Cobre proteção legal para vender online?", a: "Sim, o capítulo de direito digital cobre o básico que todo criador/vendedor online precisa saber." },
    ],
    kiwifyUrl: "https://pay.kiwify.com.br/kqHStHu",
    skillIncluded: {
      name: "estrategista-de-conteudo",
      description:
        "Gera pauta e formato de conteúdo certo pro seu objetivo (autoridade, tráfego ou venda direta), sem fórmula genérica.",
    },
  },
  {
    slug: "design-premium-seguranca",
    title: "Design de Alto Padrão e Segurança",
    tagline: "O checklist que falta no seu produto digital antes de lançar.",
    description:
      "O que realmente separa um site de R$200 de um de R$10 mil, e o checklist técnico de segurança que todo produto digital precisa passar antes de ir ao ar.",
    price: 47,
    priceLabel: "R$ 47",
    color: "lime",
    chapters: [
      "O que separa um site de R$200 de um de R$10 mil",
      "Os princípios de um produto que as pessoas compartilham",
      "Design system: o mínimo que todo produto precisa definir",
      "Checklist final de design antes de publicar",
      "Controle de acesso e autorização",
      "Validação de entrada, injeção e dados sensíveis",
    ],
    forWho: [
      "Donos de produto, devs solo e designers lançando sites, apps ou SaaS",
      "Quem usa IA para gerar código rápido e quer saber o que checar antes de publicar",
    ],
    notForWho: ["Quem procura um curso avançado de pentest (esse é um checklist prático, não uma certificação)"],
    faq: [
      { q: "Preciso ser especialista em segurança para entender?", a: "Não — a Parte 2 foi escrita para quem não é especialista, mas mantém a profundidade técnica real." },
    ],
    kiwifyUrl: "https://pay.kiwify.com.br/m2Ll9Nr",
    skillIncluded: {
      name: "auditor-premium-e-seguranca",
      description:
        "Roda o checklist de R$10 mil (design/conversão) e os pontos de segurança essenciais antes de você lançar qualquer produto.",
    },
  },
  {
    slug: "educacao-financeira",
    title: "Educação Financeira Pessoal",
    tagline: "Do salário ao primeiro milhão — sem economês.",
    description:
      "Reserva de emergência, sair de dívidas, juros compostos, Tesouro Direto, renda fixa x variável, imposto de renda em investimentos e independência financeira, explicados sem enrolação.",
    price: 37,
    priceLabel: "R$ 37",
    color: "fuchsia",
    chapters: [
      "A regra 50-30-20 e a reserva de emergência",
      "Como sair das dívidas: bola de neve vs. avalanche",
      "Juros compostos: a força por trás de qualquer patrimônio",
      "Perfil de investidor e diversificação",
      "Renda fixa x variável, Tesouro Direto e CDI",
      "Imposto de renda, independência financeira e a regra dos 4%",
    ],
    forWho: [
      "Quem quer organizar a vida financeira sem depender de planilha complicada",
      "Quem já ganha bem mas não sabe onde o dinheiro vai",
    ],
    notForWho: ["Quem busca dica de ação/criptomoeda específica para comprar (isso é educação, não recomendação de investimento)"],
    faq: [
      { q: "Serve para quem nunca investiu nada?", a: "Sim, o livro começa do absoluto zero — organização e reserva — antes de chegar em investimentos." },
    ],
    kiwifyUrl: "https://pay.kiwify.com.br/yS7E2RN",
    skillIncluded: {
      name: "planejador-financeiro-pessoal",
      description:
        "Organiza orçamento, reserva de emergência e prioridade de investimento com base no seu perfil e objetivo, sem economês.",
    },
  },
  {
    slug: "kit-da-primeira-oferta",
    kind: "kit",
    title: "Kit de Execução da Primeira Oferta",
    tagline: "50 prompts, mensagens prontas de WhatsApp, checklist e planilha de prospecção.",
    description:
      "A ferramenta que acompanha o ebook 'Do Zero à Primeira Oferta': uma central com 55 prompts premium (incluindo copy e autoridade), checklist de execução, modelo de oferta preenchível, mensagens de WhatsApp prontas para cada etapa da venda, modelo de precificação e uma planilha de CRM em Excel para organizar sua prospecção.",
    price: 0,
    priceLabel: "Ver na Kiwify",
    color: "teal",
    chapters: [
      "55 Prompts Premium (diagnóstico de oportunidades locais, criação de oferta, plaquinhas QR/NFC, fotos com IA, biosites e sites, WhatsApp, vendas, copy e autoridade)",
      "Checklist de Execução passo a passo",
      "Modelo de Oferta preenchível, com exemplos reais (plaquinha e site simples)",
      "Mensagens de WhatsApp prontas: primeira abordagem, follow-up, objeções, fechamento, pós-venda e upsell",
      "Modelo de Precificação (calculadora de piso mínimo por hora/projeto)",
      "Planilha Premium de CRM em Excel para organizar sua lista de prospecção",
    ],
    forWho: [
      "Quem já leu o 'Do Zero à Primeira Oferta' e quer a caixa de ferramentas pronta para executar",
      "Quem prospecta pequenos negócios locais e quer parar de escrever mensagem do zero toda vez",
    ],
    notForWho: ["Quem ainda não decidiu o que vender (comece pelo ebook 'Do Zero à Primeira Oferta')"],
    faq: [
      { q: "É um ebook ou uma ferramenta?", a: "É uma área protegida por senha (entregue pela Kiwify após a compra), não um PDF — os prompts, mensagens e a planilha ficam acessíveis para copiar quando precisar, direto em leonardomarusso.com.br/kit." },
      { q: "Preciso ter comprado o ebook antes?", a: "Não é obrigatório, mas o kit foi desenhado como o passo seguinte de quem já aplicou os frameworks do ebook." },
    ],
    kiwifyUrl: "#",
  },
];

export function getEbook(slug: string) {
  return ebooks.find((e) => e.slug === slug);
}
