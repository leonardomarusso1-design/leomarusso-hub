# HUB de Ebooks — leonardomarusso.com.br

Site Next.js pronto pra rodar. Home com grid dos ebooks, e uma página de venda
individual pra cada um (`/ebooks/[slug]`), com capítulos, "pra quem é / não é",
FAQ e botão de compra.

## O que falta pra ficar 100% no ar

### 0. As skills que acompanham cada ebook (novo)

Cada um dos 9 ebooks agora vem com uma **skill de IA** própria — um arquivo
`SKILL.md` que faz um assistente de IA (Claude Code, Codex, ChatGPT, etc.)
aplicar o método do livro na prática, com o leitor, em vez de só explicar.
Isso é o que justifica cobrar mais que "só um PDF".

Onde estão: pacote `skills-bundle-completo.zip` (todas as 9, mais o
`COMO-INSTALAR.md` explicando as 3 formas de usar) e também um zip
individual por produto (`skill-<slug>.zip`) — esse é o que você anexa como
arquivo extra em cada produto correspondente na Kiwify, junto do PDF.

O card e a página de venda de cada ebook no HUB já mostram "Inclui skill de
IA para instalar" automaticamente (campo `skillIncluded` em
`src/data/ebooks.ts`) — não precisa editar nada de código pra isso aparecer,
só entregar o arquivo certo na Kiwify.

### 1. Subir os PDFs (+ a skill) na Kiwify e colar os links de checkout

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

### 2. O Kit da Primeira Oferta já está dentro deste projeto (não é mais separado)

Mudança em relação à primeira versão deste pacote: o "Kit de Execução da
Primeira Oferta" (que era um app React + Vite à parte, num repositório
próprio) foi **migrado pra dentro deste HUB**, como a rota `/kit`
(`src/app/kit/`). Não existe mais repositório separado, projeto Vercel
separado, nem `vercel.json` com rewrite — é tudo um único deploy.

O que isso significa na prática:
- `leonardomarusso.com.br/kit` já vai funcionar assim que você fizer o
  deploy deste projeto — não tem passo extra de "subir o Kit em outro lugar".
- O código do Kit (55 prompts — incluindo os 5 novos de "Copy e Autoridade" —,
  checklist, modelo de oferta, mensagens de WhatsApp, calculadora de preço e
  gerador de planilha Excel) está em `src/app/kit/` (`KitApp.tsx`, `data.ts`,
  `lib/excelGenerator.ts`, `lib/utils.ts`).
- A senha da área protegida é validada no servidor pela variável `KIT_ACCESS_PASSWORD`
  (veja `.env.example`). Ela nunca usa o prefixo `NEXT_PUBLIC_`, portanto não é
  enviada para o JavaScript do navegador. Configure uma senha forte em Vercel →
  Settings → Environment Variables antes do deploy.
- No produto do Kit, em Kiwify → Configurações → Página de obrigado, use
  `https://leomarusso-hub.vercel.app/kit` para vendas aprovadas. O checkout e a
  entrega da senha continuam sob responsabilidade da Kiwify.
- O repositório antigo `github.com/leonardomarusso1-design/kit-da-primeira-oferta`
  e a pasta antiga com esse nome **não são mais necessários** — pode excluir
  os dois quando quiser, sem risco de tirar nada do ar, já que o Kit agora
  vive só aqui dentro.
- O card do Kit está na home do HUB (`kit-da-primeira-oferta` em
  `src/data/ebooks.ts`, com `kind: "kit"`) e aponta para o checkout oficial
  `https://pay.kiwify.com.br/gE9Fdv7`, atualmente em R$ 49,90.

### 3. Rodar local

```bash
npm install
npm run dev   # http://localhost:3000
```

### 4. Deploy do HUB

1. Suba este código num repositório novo no GitHub (`leonardomarusso-hub` ou nome de sua preferência)
2. Importe o repo na Vercel
3. Em Vercel → Settings → Domains, aponte `leonardomarusso.com.br` pra esse projeto
4. Cada `git push` na branch principal já faz o redeploy automático (seu fluxo de sempre)

### 5. Capas dos ebooks (opcional, mas recomendado)

Hoje os cards usam só cor + badge, sem imagem de capa. Se quiser, gere uma
capa por ebook (ex: usando o PhotoForge AI ou Canva, mantendo a mesma
identidade visual "Syne + âmbar" que você já usa) e troque o card por uma
versão com `<Image>` do Next.js — o componente está em
`src/components/EbookCard.tsx`.

### 6. Onde editar cada coisa

- `src/data/ebooks.ts` — título, preço, descrição, capítulos, FAQ e link de
  checkout de cada ebook e do kit. É o único arquivo que você deve precisar
  editar no dia a dia.
- `src/app/kit/` — código do Kit de Execução (rota `/kit`)
- `.env.example` — variável `KIT_ACCESS_PASSWORD` (segredo server-side do Kit)
- `src/app/page.tsx` — texto do topo (hero) da home
- `src/components/` — Header, Footer, EbookCard

## Estrutura

```
src/
  app/
    page.tsx                 home / grid de ebooks + kit
    ebooks/[slug]/page.tsx    página de venda de cada ebook/kit
    api/kit/                   endpoints de autenticação e logout do Kit
    kit/                      Kit de Execução (rota `/kit`, sessão HttpOnly)
      page.tsx
      KitApp.tsx
      data.ts
      lib/excelGenerator.ts
      lib/utils.ts
  components/                Header, Footer, EbookCard
  data/ebooks.ts             catálogo — título, preço, capítulos, FAQ, link Kiwify
  lib/colors.ts               mapa de cores por ebook
conteudo-ebooks/            os arquivos .md com o conteúdo completo de cada ebook
                             (inclui do-zero-a-primeira-oferta-v2.md, versão já
                             corrigida do ebook que já existe)
ebooks-pdf/                 PDFs prontos para anexar na Kiwify
skills/                     skills individuais e COMO-INSTALAR.md
skills-bundle-completo.zip  pacote com as 9 skills
.env.example                 KIT_ACCESS_PASSWORD
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
| Kit de Execução da Primeira Oferta | R$ 49,90 — `https://pay.kiwify.com.br/gE9Fdv7` |

O "Todos os Ebooks e Skills" já está destacado na home e aponta para o checkout
`https://pay.kiwify.com.br/iH4iU6b`, com a ancoragem informada de R$ 392,97 por
R$ 247,90. O Kit continua como produto separado, com acesso protegido.
