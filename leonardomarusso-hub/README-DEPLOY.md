# HUB de Ebooks — leonardomarusso.com.br

Site Next.js pronto pra rodar. Home com grid dos ebooks, e uma página de venda
individual pra cada um (`/ebooks/[slug]`), com capítulos, "pra quem é / não é",
FAQ e botão de compra.

## O que falta pra ficar 100% no ar

### 1. Subir os PDFs na Kiwify e colar os links de checkout

Os arquivos `.md` dos 9 ebooks estão na pasta `conteudo-ebooks/` deste pacote.
Antes de subir na Kiwify, cada um precisa virar PDF/EPUB diagramado (a skill
`pdf` do Claude faz isso, ou uma diagramação no Canva/Google Docs).

Para cada produto na Kiwify:
1. Suba o arquivo final (PDF)
2. Configure o preço (sugestões já estão em `src/data/ebooks.ts`, campo `price`)
3. Copie o link de checkout
4. Cole no campo `kiwifyUrl` do ebook correspondente em `src/data/ebooks.ts`
   (está como `"#"` em todos — enquanto estiver assim, o botão mostra
   "Checkout em breve" em vez de link quebrado)

A Kiwify já entrega o arquivo automaticamente por e-mail/área de membros após
o pagamento — não precisa de nenhum backend customizado pra isso (o site
antigo usava um sistema de token com Supabase; não é necessário aqui a não
ser que você queira controle extra sobre quantas vezes o link pode ser
baixado).

### 2. Rodar local

```bash
npm install
npm run dev   # http://localhost:3000
```

### 3. Deploy

1. Suba este código num repositório novo no GitHub (`leonardomarusso-hub` ou nome de sua preferência)
2. Importe o repo na Vercel
3. Em Vercel → Settings → Domains, aponte `leonardomarusso.com.br` pra esse projeto
4. Cada `git push` na branch principal já faz o redeploy automático (seu fluxo de sempre)

### 4. Capas dos ebooks (opcional, mas recomendado)

Hoje os cards usam só cor + badge, sem imagem de capa. Se quiser, gere uma
capa por ebook (ex: usando o PhotoForge AI ou Canva, mantendo a mesma
identidade visual "Syne + âmbar" que você já usa) e troque o card por uma
versão com `<Image>` do Next.js — o componente está em
`src/components/EbookCard.tsx`.

### 5. Onde editar cada coisa

- `src/data/ebooks.ts` — título, preço, descrição, capítulos, FAQ e link de
  checkout de cada ebook. É o único arquivo que você deve precisar editar no
  dia a dia.
- `src/app/page.tsx` — texto do topo (hero) da home
- `src/components/` — Header, Footer, EbookCard

## Estrutura

```
src/
  app/
    page.tsx              home / grid de ebooks
    ebooks/[slug]/page.tsx  página de venda de cada ebook
  components/              Header, Footer, EbookCard
  data/ebooks.ts           catálogo — título, preço, capítulos, FAQ, link Kiwify
  lib/colors.ts            mapa de cores por ebook
conteudo-ebooks/           os 9 arquivos .md com o conteúdo completo de cada ebook
```

## Sugestão de precificação (ajuste como quiser)

| Ebook | Preço sugerido |
|---|---|
| Do Zero à Primeira Oferta | R$ 26,97 (já validado) |
| Tráfego e Atenção | R$ 37 |
| Copy, Marca e Design que Convertem | R$ 37 |
| Vendas, Funis e Relacionamento com o Cliente | R$ 37 |
| Construindo Produtos Digitais com Tecnologia e IA | R$ 47 |
| Mentalidade, Growth e Gestão | R$ 37 |
| Conteúdo, Carreira e Fundamentos do Jogo Digital | R$ 37 |
| Design de Alto Padrão e Segurança | R$ 47 |
| Educação Financeira Pessoal | R$ 37 |

Se quiser vender um "Acesso Total" (bundle com os 9), um preço-âncora comum é
~55-65% de desconto sobre a soma individual (~R$ 331 → bundle a R$ 127-147).
Isso não está implementado no site ainda — é só uma sugestão de precificação
pra quando você decidir se quer essa opção.
