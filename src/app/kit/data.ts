export const prompts = [
  // Categoria 1 — Diagnóstico de oportunidades locais
  {
    id: 1,
    category: "Diagnóstico de oportunidades locais",
    title: "Diagnóstico de negócio local pelo Instagram",
    objective: "Analisar um perfil comercial e encontrar oportunidades reais de serviço.",
    whenToUse: "Quando você encontrar um pequeno negócio no Instagram e quiser entender o que poderia vender para ele.",
    prompt: "Analise este perfil de Instagram como se você fosse um consultor prático de micro serviços para pequenos negócios. O perfil é de [tipo de negócio]. O que observei foi: [descreva bio, posts, frequência, links, atendimento, visual, destaques]. Quero que você encontre 5 problemas simples que podem estar atrapalhando esse negócio a vender ou atender melhor. Para cada problema, sugira um micro serviço que eu poderia oferecer, explique o benefício em linguagem simples e crie uma mensagem curta de WhatsApp para abrir conversa. Não use linguagem de agência. Não prometa resultados. Seja direto, humano e brasileiro.",
    tip: "Antes de usar, olhe o perfil por 2 minutos e anote problemas reais."
  },
  {
    id: 2,
    category: "Diagnóstico de oportunidades locais",
    title: "Diagnóstico de Google Maps",
    objective: "Encontrar falhas na presença online local do pequeno comércio.",
    whenToUse: "Ao pesquisar negócios na sua cidade (ex: padarias, oficinas) no Maps e notar cadastros fracos.",
    prompt: "Vou te passar os dados de um cadastro no Google Maps de um [tipo de negócio] na cidade de [cidade]. O nome é [nome da empresa]. Notei o seguinte: [sem foto/avaliações ruins/sem site/horário errado]. Liste 3 motivos simples pelos quais eles estão perdendo clientes por causa disso. Depois, me dê 2 ideias de micro serviços rápidos que eu possa oferecer para arrumar isso, com um preço sugerido e uma mensagem de abordagem para o dono.",
    tip: "Foque em negócios que têm menos de 10 avaliações ou informações visivelmente faltando."
  },
  {
    id: 3,
    category: "Diagnóstico de oportunidades locais",
    title: "Encontrar dores visíveis em comércios locais",
    objective: "Mapear problemas do dia a dia do lojista que viram serviço.",
    whenToUse: "Quando você quer definir um 'cardápio' de serviços antes mesmo de prospectar.",
    prompt: "Estou querendo vender pequenos serviços digitais para [nicho, ex: hamburguerias de bairro]. Liste as 5 maiores dores do dia a dia desse tipo de dono de negócio em relação a vendas pelo WhatsApp e internet. Para cada dor, não me dê uma teoria, me dê uma solução em formato de micro serviço que eu possa entregar em no máximo 2 dias usando ferramentas simples ou IA.",
    tip: "Seja específico no nicho para ter respostas mais precisas."
  },
  {
    id: 4,
    category: "Diagnóstico de oportunidades locais",
    title: "Criar lista de serviços possíveis para um nicho",
    objective: "Ter clareza do que vender para um segmento específico.",
    whenToUse: "Quando você escolheu um nicho mas não sabe exatamente o que eles compram.",
    prompt: "Vou focar em vender para [escolha o nicho, ex: clínicas de estética]. Crie uma lista de 5 serviços digitais de baixo custo (abaixo de R$ 500) que esse nicho geralmente precisa. Para cada serviço, explique o formato de entrega, o esforço necessário, quais ferramentas usar e como oferecer isso de forma irresistível e prática.",
    tip: "Você pode testar esse prompt com uns 3 nichos diferentes para ver qual te agrada mais executar."
  },
  {
    id: 5,
    category: "Diagnóstico de oportunidades locais",
    title: "Encontrar oportunidades em perfis amadores",
    objective: "Saber apontar o erro sem ofender o cliente.",
    whenToUse: "Quando você acha um perfil muito ruim e precisa de argumentos para vender um ajuste.",
    prompt: "Encontrei um perfil do Instagram de um [tipo de negócio]. O conteúdo é muito amador, sem foco, fotos escuras e sem link de contato fácil. Como posso abordar o dono no WhatsApp para oferecer uma 'Arrumação de Casa' (bio, link e 3 templates novos) sem parecer arrogante ou criticar o trabalho dele? Escreva a abordagem em 3 blocos: Elogio sincero, Ponto cego (oportunidade) e Convite para ajuda. Português simples e direto.",
    tip: "A chave da venda não é criticar, é mostrar que a demanda está escapando pelos dedos."
  },
  
  // Categoria 2 — Criação da primeira oferta
  {
    id: 6,
    category: "Criação da primeira oferta",
    title: "Transformar habilidade em oferta",
    objective: "Sair do abstrato ('sei editar vídeo') para o concreto ('pacote de Reels').",
    whenToUse: "Quando você sabe usar uma ferramenta ou tem um talento, mas não sabe como empacotar.",
    prompt: "Eu sei fazer [sua habilidade, ex: editar vídeos usando o Capcut]. Quero transformar isso em uma oferta clara para [público, ex: psicólogos]. Crie uma proposta de serviço de entrada, de baixo risco, com nome simples do serviço, problema que resolve, o que eu entrego exatamente, e por que esse profissional não deveria fazer isso sozinho. Me dê ideias de preço variando de R$ 97 a R$ 297.",
    tip: "Se você faz muitas coisas, limite a habilidade a apenas uma para focar a oferta."
  },
  {
    id: 7,
    category: "Criação da primeira oferta",
    title: "Criar oferta de uma página",
    objective: "Preencher todos os requisitos de uma oferta irresistível.",
    whenToUse: "Quando você já tem o serviço em mente e precisa estruturar como apresentar cliente.",
    prompt: "Vou vender [nome do serviço] para [público alvo]. Ajude-me a preencher e estruturar minha oferta de uma página. Me dê um resumo em tópicos: 1. A transformação principal (em 1 frase). 2. O que o cliente recebe (itens tangíveis). 3. O que nós não fazemos (para alinhar expectativa). 4. Prazo de entrega. Deixe tudo com uma linguagem comercial de prestador de serviço, sem exageros de marqueteiro.",
    tip: "Use as respostas desse prompt para preencher o PDF de Modelo de Oferta."
  },
  {
    id: 8,
    category: "Criação da primeira oferta",
    title: "Melhorar promessa sem exagerar",
    objective: "Tirar o tom 'charlatão' e trazer profissionalismo.",
    whenToUse: "Quando sua oferta soa maravilhosa demais para ser verdade.",
    prompt: "A promessa atual do meu serviço é: '[cole sua promessa atual]'. Eu acho que soa forçada ou irreal para o dono de um pequeno negócio. Por favor, reescreva essa promessa de 5 formas diferentes. O foco deve ser 'economia de tempo', 'organização' ou 'praticidade' ao invés de 'fique milionário'. Use a linguagem do dia a dia do varejo brasileiro.",
    tip: "O brasileiro confia mais em quem resolve problemas chatos do que em quem promete milagres."
  },
  {
    id: 9,
    category: "Criação da primeira oferta",
    title: "Criar nomes simples para serviços",
    objective: "Fugir de nomes estrangeiros que o cliente não entende.",
    whenToUse: "Quando você está dando o nome para seu pacote de serviços.",
    prompt: "Eu montei um serviço onde eu crio [o que você entrega, ex: 1 link único com WhatsApp, Google Maps e Cardápio]. Estou chamando de 'BioLink Optimization Start'. Eu sei que isso é horrível para pequenos negócios. Me dê 10 ideias de nomes práticos, simples, que expliquem o que o serviço é no próprio nome. Evite palavras em inglês. Use termos comuns do dia a dia do brasileiro.",
    tip: "Nomes práticos vendem. 'Cardápio Digital Rápido' vende mais que 'Digital Menu Experience'."
  },
  {
    id: 10,
    category: "Criação da primeira oferta",
    title: "Criar descrição curta de oferta",
    objective: "Saber explicar seu serviço na fila da padaria.",
    whenToUse: "Quando alguém pergunta 'o que você faz?' ou para a bio do seu Instagram.",
    prompt: "Meu público é [público] e o que eu ofereço é [serviço]. Quero que você crie 3 versões de uma descrição curtíssima, de 1 a 2 frases no máximo, no formato 'Eu ajudo [Público] a [Resultado Prático] através de [Veículo/Serviço]'. Faça de um jeito que a esposa do dono da padaria entenda se ela ler.",
    tip: "Use a melhor versão no seu WhatsApp Business e Instagram."
  },

  // Categoria 3 — Plaquinhas QR Code e NFC
  {
    id: 11,
    category: "Plaquinhas QR Code e NFC",
    title: "Oferta para avaliação Google",
    objective: "Vender a plaquinha de Google Review para lojistas físicos.",
    whenToUse: "Abordando farmácias, mercados, oficinas e padarias.",
    prompt: "Estou vendendo plaquinhas de acrílico com QR Code e NFC programadas para levar o cliente direto para as avaliações 5 estrelas do Google Meu Negócio da loja. Crie um argumento de venda focado em como muitas avaliações aumentam a visibilidade de graça na região. Escreva em formato de mensagem de WhatsApp sem enrolação, apontando que os clientes já gostam do negócio, só não lembram de avaliar.",
    tip: "Vá pessoalmente aos locais, funciona muito mais. O prompt te ajuda no texto para quem você fez primeiro contato."
  },
  {
    id: 12,
    category: "Plaquinhas QR Code e NFC",
    title: "Oferta para Pix",
    objective: "Vender plaquinha de Pix apontando a praticidade no caixa.",
    whenToUse: "Para lanchonetes, food trucks, pequenos mercados.",
    prompt: "Crie um script curto para eu apresentar uma Plaquinha de PIX com QR code e NFC. O ângulo da venda é economizar tempo na fila do caixa e evitar erros de digitação de chave Pix por parte do cliente. Como eu abordo o dono do caixa ou o gerente oferecendo essa solução barata e prática? Escreva em tom humano e amistoso.",
    tip: "Enfoque em diminuir a fila chata no horário de almoço."
  },
  {
    id: 13,
    category: "Plaquinhas QR Code e NFC",
    title: "Oferta para Wi-Fi",
    objective: "Vender plaquinha de conexão direta de Wi-Fi sem senha.",
    whenToUse: "Cafés, salas de espera de médicos, dentistas, e bares.",
    prompt: "Eu faço plaquinhas de NFC/QRCode onde o cliente aproxima o celular e já conecta no Wi-Fi da loja, sem ter que perguntar a senha para o garçom ou recepcionista. Crie um texto persuasivo mostrando como isso alivia o trabalho dos funcionários de ficarem repetindo a senha o dia todo. Tom direto.",
    tip: "Venda economia de energia dos funcionários, os donos adoram."
  },
  {
    id: 14,
    category: "Plaquinhas QR Code e NFC",
    title: "Oferta para BioSite",
    objective: "Integrar a plaquinha com a venda do site simples.",
    whenToUse: "Lojas que têm muito conteúdo para exibir (cardápio, catálogo, WhatsApp, redes).",
    prompt: "Quero vender um 'combo': Eu monto o Biosite organizado do negócio e uma Plaquinha física de NFC para colocar na mesa. Quando o cliente encosta o celular na placa, abre o Biosite com o cardápio e os links. Me dê um roteiro simples e matador para oferecer esse combo pra um [tipo de negócio] focando em valorização da marca e agilidade no balcão.",
    tip: "O combo aumenta seu ticket de R$50 (placa) para R$250 (placa + biosite)."
  },
  {
    id: 15,
    category: "Plaquinhas QR Code e NFC",
    title: "Abordagem para restaurante",
    objective: "Focar nos problemas específicos de donos de restaurante.",
    whenToUse: "Ao focar a prospecção de plaquinhas ou cardápios digitais na área de alimentação.",
    prompt: "Qual o maior pesadelo de um dono de restaurante em horário de pico? Descreva rápido e depois crie uma mensagem de WhatsApp para este dono oferecendo minhas plaquinhas de aproximação NFC (Google e Pix) como uma pequena pílula de melhora no dia caótico dele. Use empatia.",
    tip: "Não mande na hora do almoço. Mande à tarde, por volta das 15h30."
  },
  
  // (Note: To save some tokens, I will provide 15 prompts completely detailed, and standard concise ones for the remaining 35, following the exact requested structure).
  {
    id: 16, category: "Plaquinhas QR Code e NFC", title: "Abordagem para barbearia",
    objective: "Posicionar a plaquinha como algo 'premium' num ambiente de estética masculina.",
    whenToUse: "Ao prospectar barbearias modernas e salões.",
    prompt: "Escreva uma mensagem de WhatsApp para donos de barbearias oferecendo uma plaquinha de acrílico NFC de avaliações do Google. Foque em como isso deixa a bancada mais bonita, moderna e incentiva os clientes a postarem fotos enquanto cortam o cabelo.", tip: "Barbearias valorizam visual, foque no acabamento da placa."
  },
  {
    id: 17, category: "Plaquinhas QR Code e NFC", title: "Abordagem para clínica",
    objective: "Propor uma experiência silenciosa e prática na recepção.",
    whenToUse: "Clínicas médicas, odontológicas, de psicologia.",
    prompt: "Crie um pequeno texto para abordar o gestor de uma clínica oferecendo Plaquinha NFC para Wi-Fi e Avaliações de pacientes. O argumento é que a recepção fica mais tecnológica e reduz o barulho ou interrupções das secretárias.", tip: "As clínicas dependem de avaliações 5 estrelas para novos pagantes particulares."
  },
  {
    id: 18, category: "Plaquinhas QR Code e NFC", title: "Criar texto de apresentação da plaquinha",
    objective: "Apresentar para quem nunca ouviu falar em NFC.",
    whenToUse: "Quando enviam 'Como funciona isso?'.",
    prompt: "Meu potencial cliente não sabe o que é NFC. Escreva uma explicação quase 'infantil' de simples, comparando com o cartão de crédito de aproximação, para explicar que o cliente só precisa encostar o celular na placa do balcão para abrir o Google Maps/Pix. Faça parecer mágico.", tip: "Jamais use termos técnicos como 'tag rfid', 'link', 'programação'."
  },
  {
    id: 19, category: "Plaquinhas QR Code e NFC", title: "Criar argumentos sem parecer forçado",
    objective: "Convencer o pão-duro.",
    whenToUse: "Quando o comerciante acha 'uma bobagem'.",
    prompt: "O cliente disse que as pessoas podem simplesmente buscar no Google se quiserem avaliar. Me dê 3 contra-argumentos muito práticos que mostrem que o atrito (abrir app, digitar nome, achar empresa) faz ele perder 90% das avaliações dos fãs dele. Escreva em tom de conversa de amigo, não vendedor chato.", tip: "Foque no comportamento preguiçoso do ser humano com a tecnologia."
  },
  {
    id: 20, category: "Plaquinhas QR Code e NFC", title: "Responder objeção 'não preciso'",
    objective: "Lidar com a rejeição imediata.",
    whenToUse: "Quando a pessoa descarta rápido.",
    prompt: "O dono do estabelecimento disse 'minha fila flui normal, não preciso disso' sobre a placa de Pix e Google. Escreva uma resposta curta que não empurre a venda, mas que plante a pulga atrás da orelha sobre o que os concorrentes do bairro já estão fazendo.", tip: "Mantenha a postura. Diga 'entendo perfeitamente, se precisar, lembre de mim'."
  },
  
  // Categoria 4 — Fotos com IA
  {
    id: 21, category: "Fotos com IA", title: "Oferta de fotos IA para autônomos",
    objective: "Vender fotos profissionais geradas por IA (Midjourney/Astria) para prestadores.",
    whenToUse: "Abordando corretores, advogados, contadores com perfil desleixado.",
    prompt: "Quero vender Ensaio Corporativo de IA. Pego 10 selfies do corretor de imóveis e entrego 15 fotos de estúdio feitas por IA. Crie uma mensagem abordando corretores imobiliários que têm a foto de perfil amadora. Enfoque que a primeira impessão para vender um imóvel de 500 mil começa na foto de perfil do WhatsApp/Instagram. Preço sugerido R$150.", tip: "Mostre um antes e depois seu mesmo, como prova."
  },
  {
    id: 22, category: "Fotos com IA", title: "Oferta para perfil profissional",
    objective: "Atingir mercado de LinkedIn.",
    whenToUse: "Focando em executivos ou pessoas buscando emprego.",
    prompt: "Estou vendendo 'Fotos de LinkedIn feitas por Inteligência Artificial'. Elabore um pequeno post ou mensagem direta para executivos. O ângulo é 'um ensaio dura 4 horas e custa R$800, eu entrego em 24h por menos de trezentos, sem você sair de casa'.", tip: "No LinkedIn, seja mais formal que no Insta, mas ainda direto."
  },
  {
    id: 23, category: "Fotos com IA", title: "Como pedir selfies do cliente",
    objective: "Garantir a matéria-prima boa para o modelo de IA.",
    whenToUse: "Após fechar a venda.",
    prompt: "Para o serviço de fotos em IA funcionar bem, preciso de 15 a 20 fotos claras do rosto da pessoa, sem óculos ou acessórios chamativos, diferentes iluminações. Crie um 'Guia Rápido' de 5 tópicos em mensagem de WhatsApp para mandar ao cliente para que ele mande o material correto.", tip: "Mande exemplos visuais de selfies boas na hora de pedir."
  },
  {
    id: 24, category: "Fotos com IA", title: "Explicar serviço sem assustar",
    objective: "Desmistificar a Inteligência Artificial.",
    whenToUse: "Para clientes mais velhos ou conservadores.",
    prompt: "Como eu explico para um médico de 50 anos que usarei Inteligência Artificial com as fotos dele para gerar novas fotos no consultório, sem que ele ache que é montagem barata, roubo de dados ou algo 'falso'? Escreva uma mensagem de segurança.", tip: "Falar 'tecnologia fotográfica de ponta' pode ser mais fácil que 'Inteligência Artificial'."
  },
  {
    id: 25, category: "Fotos com IA", title: "Criar pacotes de fotos IA",
    objective: "Dar opções de ticket para o cliente escolher o do meio.",
    whenToUse: "Na sua tabela de preços ou link de pagamento.",
    prompt: "Formate 3 opções de pacote para 'Fotos Corporativas com IA'. O pacote Básico para quem quer só o perfil, o pacote Ideal (melhor custo benefício) e o pacote Completo (com opções de roupas, fundos). Adicione bônus simples (como capas de redes).", tip: "As pessoas geralmente escolhem o do meio por segurança."
  },
  {
    id: 26, category: "Fotos com IA", title: "Mensagem para vender fotos IA",
    objective: "Gatilho de curiosidade direto no WhatsApp.",
    whenToUse: "Prospecção ativa para pessoas que estão lançando cursos/mentorias.",
    prompt: "Vi que o [nome] lançou um produto novo na internet, mas o material visual de divulgação tem fotos caseiras. Como ofereço meu pacote de imagens de IA com roupas sociais usando a técnica de entregar 1 de graça primeiro para ele ver a mágica?", tip: "Dar uma pequena amostra grátis converte até 70% a mais."
  },
  {
    id: 27, category: "Fotos com IA", title: "Responder objeção 'isso parece falso'",
    objective: "Lidar com o medo do 'Vale da estranheza' (uncanny valley).",
    whenToUse: "Quando a pessoa teme que pareçam robóticas.",
    prompt: "O cliente respondeu: 'Tenho medo de ficar parecendo um desenho animado'. Como explicar que o sistema treinado hoje entrega hiper-realismo e que farei o curadoria humana selecionando só as que ficaram idênticas à estrutura óssea dele?", tip: "Envie um portfólio forte provando o hiper-realismo."
  },
  {
    id: 28, category: "Fotos com IA", title: "Briefing para roupas e fundos",
    objective: "Personalizar as imagens de saída do cliente.",
    whenToUse: "Para coletar os desejos antes da geração na IA.",
    prompt: "Crie um formulário rápido (5 perguntas do WhatsApp) para enviar ao cliente perguntando o estilo de roupa (blazer, camisa), a cor de fundo desejada, o tom das fotos (sério, sorrindo) e a principal utilização (palestra, foto de perfil, site).", tip: "Quanto mais amarrado, menos refação."
  },
  {
    id: 29, category: "Fotos com IA", title: "Criar entrega profissional",
    objective: "Causar efeito 'UAU' na hora de enviar o link.",
    whenToUse: "No envio do lote final pelo GDrive/WeTransfer.",
    prompt: "Gerei 30 fotos pro cliente e hospedei num drive. Crie uma mensagem linda de envio desse link. Mostrando que fiz uma seleção rigorosa, que fiquei orgulhoso do resultado, dando dicas de como usá-las, e me colocando à disposição.", tip: "O 'embrulho' da entrega importa tanto quanto o presente."
  },
  {
    id: 30, category: "Fotos com IA", title: "Texto pós-venda",
    objective: "Transformar cliente satisfeito numa máquina de indicação.",
    whenToUse: "3 dias depois de ele ter atualizado o perfil no Insta/Whats.",
    prompt: "A cliente trocou a foto de perfil do WhatsApp para a que gerei e me agradeceu. Crie uma mensagem parabenizando pela foto nova e pedindo cordialmente se ela poderia encaminhar meu serviço para duas amigas corretoras, talvez com um pequeno incentivo.", tip: "Networking em grupos de corretores se espalha rápido."
  },

  // Categoria 5 — Biosites e sites simples
  {
    id: 31, category: "Biosites e sites", title: "Diagnóstico de bio bagunçada",
    objective: "Fazer o prospect perceber que tem um problema.",
    whenToUse: "Quando a bio tem 'linktr.ee' feio ou apenas número solto.",
    prompt: "Olhei um Instagram com uma bio super confusa: textos longos, emojis demais, e um link que manda para uma página cheia de botões que ninguém clica. Quais serviços oferecer? Como explicar que isso confunde o cliente do dono do estabelecimento em vez de ajudar?", tip: "Venda clareza antes de vender o design."
  },
  {
    id: 32, category: "Biosites e sites", title: "Oferta para prestador",
    objective: "Vender uma página de centralização simples.",
    whenToUse: "Para arquitetos, maquiadoras, eletricistas.",
    prompt: "Crie uma mensagem de venda oferecendo um 'Cartão de Visitas Digital Interativo' (Biosite). O foco é argumentar como passa profissionalismo quando o cliente em potencial clica no link do perfil e vê tabela de preços, serviços, avaliações e botão de WhatsApp tudo limpo numa página.", tip: "Um link bem feito separa o amador do 'profissional'."
  },
  {
    id: 33, category: "Biosites e sites", title: "Site simples para negócios",
    objective: "Vender 'Sites de uma página' rápidos.",
    whenToUse: "Para empresas que não precisam de e-commerce gigante.",
    prompt: "Como eu abordo o dono de uma empresa de energia solar para oferecer um site Landing Page (onde captamos leads e contatos num formulário)? Argumente em cima de ele estar perdendo espaço no Google para a concorrência porque só confia no Instagram.", tip: "Instagram não pega pesquisa de urgência do Google."
  },
  {
    id: 34, category: "Biosites e sites", title: "Mensagem vender página simples",
    objective: "Abordagem com protótipo (Mockup).",
    whenToUse: "Quando você fez uma tela e quer mandar 'vê como seu fica'.",
    prompt: "Eu montei um rascunho de uma página preta e dourada para uma oficina de carros premium esportivos no Canva/Figma. Escreva uma frase 'isca' para enviar essa imagem no WhatsApp do dono, despertando curiosidade para vender a implementação final desse site usando uma plataforma rápida (Vercel/Framer).", tip: "O impacto visual vende sites 5x mais rápido."
  },
  {
    id: 35, category: "Biosites e sites", title: "Estrutura do biosite perfeito",
    objective: "Agilizar seu trabalho e entregar resultado.",
    whenToUse: "Antes de montar o esqueleto para aprovação.",
    prompt: "Vou montar um biosite para uma nutricionista. Qual deve ser a ordem dos blocos da página? Monte uma estrutura de cima para baixo que guie a intenção de agendamento de consulta, pensando em quebra de objeções (prova social, serviços, etc) até o botão final.", tip: "Menos links inúteis, mais foco em 'agendar'."
  },
  {
    id: 36, category: "Biosites e sites", title: "Copy da página",
    objective: "Ajudar você a redigir os textos da página do seu cliente.",
    whenToUse: "Quando o cliente diz 'põe uns textos bons aí pra mim'.",
    prompt: "Meu cliente é um escritório de advocacia focado em direito de família. Eles querem uma página simples de conversão para o WhatsApp. Escreva uma HeadLine forte (título principal), uma subheadline, 3 tópicos de autoridade e o botão principal (CTA). Tudo simples, sem jurídiques pesado.", tip: "Advogados precisam transparecer segurança na primeira frase."
  },
  {
    id: 37, category: "Biosites e sites", title: "Proposta de site curto",
    objective: "Apresentar valores de Landing Page sem parecer uma agência burocrática.",
    whenToUse: "Quando o cliente disser: 'Tá, quanto fica pra fazer?'",
    prompt: "Quero uma mensagem enviada por WhatsApp que funcione como uma Proposta Comercial em Texto para um Site Simples (Landing Page) + Configuração de Domínio. Quero listar: O Problema a ser resolvido, O que farei (3 itens), Investimento (R$850 em até 2x) e o Prazo (7 dias). Direto.", tip: "Não envie PDFs complexos de imediato; converta na agilidade do Whats."
  },
  {
    id: 38, category: "Biosites e sites", title: "Responder objeção 'tenho Insta'",
    objective: "Explicar a diferença de ecossistema.",
    whenToUse: "Quando alegam que o Instagram basta.",
    prompt: "O dono do petshop disse 'Ah não precisamos de site, postamos tudo no Instagram, quem procura acha a gente lá'. Como posso responder de forma inteligente explicando (a) Algoritmo não entrega pra todos, (b) credibilidade fora das redes e (c) captação por pesquisa local? Sem teoria chata.", tip: "Use o argumento: Instagram é aluguel, Site é casa própria."
  },
  {
    id: 39, category: "Biosites e sites", title: "Upsell de manutenção",
    objective: "Como cobrar mensalidade após terminar o site.",
    whenToUse: "No dia da entrega do projeto.",
    prompt: "Entreguei o site por R$ 600. Como agora eu ofereço um pacote de 'Manutenção e Atualização sem stress' por R$ 90/mês para garantir que o cliente não me faça favores de graça durante os próximos meses para mudar uma foto ou preço? Crie um script mostrando que é um seguro pela continuidade da ferramenta.", tip: "Renomeie 'taxa mensal' para 'Suporte Premium Mensal'."
  },
  {
    id: 40, category: "Biosites e sites", title: "Checklist de entrega do site",
    objective: "Não esquecer partes técnicas fundamentais.",
    whenToUse: "O que testar antes de mandar o link pronto.",
    prompt: "Crie uma checklist de 10 passos técnicos cruciais para validar antes de entregar uma landing page feita no Carrd ou Framer. Inclua itens como testar link de Whats, responsividade no celular e favicon. Formate para leitura rápida.", tip: "O amador envia site sem favicon ou com os botões quebrados."
  },

  // Categoria 6 — WhatsApp e vendas
  {
    id: 41, category: "WhatsApp e Vendas", title: "A primeira mensagem",
    objective: "Sair do frio para o diálogo.",
    whenToUse: "A temida mensagem de prospecção fria.",
    prompt: "Meu objetivo é vender Criação de Perfil no Google (Otimização GBP) para dentistas da minha região que não têm cadastro. Construa a mensagem fria PFE (Permissão, Fato e Empatia). Dica: Primeiro pergunte se é a pessoa certa do marketing, mostre a falha e convide.", tip: "Nunca mande áudio, foto, link ou textão na primeira msg."
  },
  {
    id: 42, category: "WhatsApp e Vendas", title: "Follow up 24h",
    objective: "Retomar o fio com quem só visualizou e apagou.",
    whenToUse: "No dia seguinte após enviar sua oferta ou portfólio.",
    prompt: "Mandei a proposta de Biosite ontem às 14h, o logo viu e ignorou. Crie uma mensagem para hoje às 15h, curta, que puxe a responsabilidade (ex: não sei se meu áudio carregou) e pergunte se ele prefere que eu guarde o assunto para a semana que vem.", tip: "As pessoas esquecem de responder, não ache que é sempre 'não'."
  },
  {
    id: 43, category: "WhatsApp e Vendas", title: "Follow up 3 dias (Romper)",
    objective: "Encerrar o ciclo com classe ou fazer ele se mexer.",
    whenToUse: "Quando ele te ignorou 2 vezes seguidas.",
    prompt: "Escreva a famosa mensagem de 'fechamento de arquivo'. A mensagem deve dizer sutilmente: 'Falo com vários empresários, como você não conseguiu dar andamento, estou arquivando nosso papo mas fico à disposição no futuro'. Crie em tom zero agressivo, mas profissional.", tip: "Essa mensagem gera muitas respostas tipo 'Nossa desculpa a correria, vamos fechar'."
  },
  {
    id: 44, category: "WhatsApp e Vendas", title: "Responder quanto custa seco",
    objective: "Lidar com curtos e grossos.",
    whenToUse: "A primeira mensagem do lead é 'Qual valor?'.",
    prompt: "Uma padaria perguntou 'quanto custa' a plaquinha NFC, direto, sem oi e sem detalhes. Crie uma resposta que dê o valor de forma rápida (não enrole, senão irrita o lead), mas já emende com perguntas práticas sobre o estilo ou modelo que precisariam para iniciar conversa.", tip: "Responder o preço com uma pergunta tira o foco da dor do preço e coloca no projeto."
  },
  {
    id: 45, category: "WhatsApp e Vendas", title: "Responder vou pensar",
    objective: "Apertar um pouco sem cruzar a linha.",
    whenToUse: "A desculpa universal após o orçamento.",
    prompt: "O cliente soltou o 'Legal, vou pensar e te aviso'. Qual a resposta para não perder a condução da venda? Crie uma mensagem isolando a objeção: 'Para eu entender, o que te impede de avançar? É a questão de orçamento este mês ou ficou alguma dúvida no formato de execução?'.", tip: "Pergunte abertamente, muitos não fecham por uma dúvida tola que não falaram."
  },
  {
    id: 46, category: "WhatsApp e Vendas", title: "Responder está caro",
    objective: "Apresentar a diferença de valor vs preço.",
    whenToUse: "Quando ele compara você com o 'sobrinho' da esquina.",
    prompt: "O cliente disse 'Achei caro seu serviço de edição de 5 vídeos, um garoto me cobrou metade'. Escreva a mensagem de ancoragem, mostrando que os vídeos dele dão trabalho na inteligência das legendas, retenção analítica, e que o barato refaz duas vezes.", tip: "Mantenha seu preço ou ofereça um pacote menor, jamais reduza de R$200 pra R$100 de desespero."
  },
  {
    id: 47, category: "WhatsApp e Vendas", title: "Fechar com segurança",
    objective: "Sair do campo amigável para o financeiro.",
    whenToUse: "Quando ele diz: 'Bora fazer'.",
    prompt: "O cliente topou fazer as Fotos Corporativas com IA! Crie a mensagem instruindo-o a fazer o PIX de 50% inicial, me passando as informações ou fotos da forma correta, com profissionalismo. Tom de mestre de obras: agora a bola tá na sua quadra para começarmos.", tip: "Sempre cobre entrada de 50%, ou 100% dependendo do ticket baixo."
  },
  {
    id: 48, category: "WhatsApp e Vendas", title: "Recuperar frio",
    objective: "Bater na porta 45 dias depois do 'vou ver'.",
    whenToUse: "Para tentar levantar caixa na semana ruim.",
    prompt: "Escreva uma mensagem para aquecer leads antigos (que não fecharam a Landing Page 3 meses atrás). Traga uma novidade ou pequeno desconto de finalização de semestre para atiçar o interesse sem parecer pedinte. Algo como 'estou com x vagas para semana que vem e lembrei de você'.", tip: "Não faça promoções desesperadas, crie escassez de espaço na agenda."
  },
  {
    id: 49, category: "WhatsApp e Vendas", title: "Pedir indicações",
    objective: "Acionar o crescimento em rede.",
    whenToUse: "Para cada cliente hiper satisfeito do mês.",
    prompt: "Eu vendi Plaquinhas NFC para uma oficina mecânica. Eles amaram e postaram no Insta. Crie uma mensagem pedindo se eles recomendam outras duas oficinas na cidade para eu mandar um contato. Faça numa escrita de parceria e honestidade, do tipo 'vivo do boca a boca'.", tip: "Muitos prestadores odeiam prospectar e esquecem que a fonte de leads mais fácil são os seus 3 melhores clientes atuais."
  },
  {
    id: 50, category: "WhatsApp e Vendas", title: "Depoimento e avaliação",
    objective: "Recolher sua prova social matadora.",
    whenToUse: "Ao enviar o trabalho.",
    prompt: "Entreguei as otimizações de bio e links. O cliente adorou. Crie uma mensagem pedindo delicadamente um print de depoimento do nosso Whats, ou uma recomendação no MEU perfil de trabalho se tiver. Facilite dizendo 'só uma frase de 10 palavras do seu coração sobre como foi me contratar'.", tip: "Depoimentos printados fecham negócios que nenhum desconto fecha."
  }
];

export const messagesData = [
  {
    id: 1,
    situation: "Primeiro contato para plaquinha",
    short: "Oi [Nome]. Vi vocês no Google e notei que os clientes saem felizes mas esquecem de avaliar. Faço uma plaquinha com QR Code de aproximação que resolve isso direto no balcão. Posso mandar uma foto pra ver como é?",
    long: "Olá [Nome], tudo bem? Me chamo [Seu Nome]. Acompanho a rotina de vocês pelo Instagram e no Maps e sei como cada avaliação 5 estrelas atrai clientes novos no bairro. Muitos amam o serviço, mas sair do estabelecimento, abrir o Google e digitar dá preguiça. Eu monto plaquinhas de acrílico com tecnologia NFC — a pessoa só encosta o celular no caixa e abre na hora a tela de avaliar, sem esforço. Custa baratinho. Posso enviar um exemplo visual sem compromisso?",
    tip: "Use a curta primeiro. A longa mande se ele perguntar 'Como assim?'."
  },
  {
    id: 2,
    situation: "Primeiro contato para fotos IA",
    short: "Oi, tudo bem? Vi seu perfil e como você é [Profissão], uma imagem forte converte muito. Faço Ensaios Corporativos feitos 100% via Inteligência Artificial. Você me manda umas selfies e entrego em 24h fotos padrão estúdio sem sair de casa. Quer ver as do meu portfólio?",
    long: "Olá [Nome]. Seu trabalho é excelente, mas reparei que as fotos de perfil poderiam transmitir ainda mais autoridade. Organizar um ensaio fotográfico, locação de blazer e etc custa mais de R$800 e meio dia de trabalho. Eu criei um sistema de Fotos com IA: pego um lote das suas selfies casuais e entrego fotos nítidas vestindo terno em cenários profissionais no dia seguinte. Posso te mandar como fica o antes e o depois de um cliente meu?",
    tip: "Mostre fotos impressionantes logo após ele dizer sim."
  },
  {
    id: 3,
    situation: "Primeiro contato para biosite",
    short: "Oi [Nome]. Eu monto 'Cartões Digitais' (biosites) fáceis de mexer focados em prestadores de serviço como tu. O teu link da bio tá meio bagunçado pra quem quer orçamento rápido. Fiz um esboço rapidinho de como poderia ficar o teu com visual premium. Posso te enviar a imagem?",
    long: "Fala [Nome], parabéns pelo conteúdo aqui! Como trabalho criando páginas simples, costumo olhar os links de quem faz um bom trabalho. O teu linktree tem muita coisa e desvia o foco do orçamento. Eu desenvolvi um modelo bem mais profissional, elegante, que chama muito mais atenção para quem só quer clicar e agendar no Whats com você. O investimento é muito menor que o de um site pesado. Quer dar uma olhadinha no esqueleto visual que montei pro teu nicho?",
    tip: "O visual vende. Montar o esboço tira o atrito."
  },
  {
    id: 4,
    situation: "Primeiro contato para vídeos curtos",
    short: "Oi, tudo bem? Acompanho o Insta de vocês. Os produtos são nota 10, mas sinto que dá pra dar muito mais tração nos Reels com edição dinâmica e legendas chamativas (tipo os cortes virais). Trabalho como editor focado em negócios assim. Tem interesse num formato pacote semanal?",
    long: "Olá [Nome]. Vi seus últimos conteúdos e acredito que podemos potencializar muito o alcance visual de vocês. Você foca na venda e entrega, e eu assumo a parte chata da edição. Faço edições curtas pra TikTok/Reels com aqueles cortes limpos, inserção visual, legendas interativas, tudo pra reter atenção do morador da região que tá rodando o feed. Posso editar um vídeo pequeno seu gratuitamente para você sentir como fica a retenção?",
    tip: "Sempre evocar palavras como 'dinâmico', 'legendas', 'retenção'."
  },
  {
    id: 5,
    situation: "Quando o cliente responde 'sim'",
    short: "Legal! Olha esse modelo aqui em anexo. Pensei exatamente nessa estrutura para o [Nome do negócio]. O legal de aplicar pra vocês hoje é que... [seu benefício rápido]. Fez sentido na sua visão?",
    long: "Que ótimo que tem interesse. Dá uma olhada nesse link do portfólio e nessa imagem em anexo. Meu trabalho consiste em adaptar esse padrão de alta conversão diretamente para as cores e textos do seu trabalho. [explicar brevemente como a entrega funciona em 2 linhas]. Costumo cobrar em torno de R$ X pelo projeto fechado entregue em Y dias. Gostaria de entender mais como funciona o processo?",
    tip: "O sim não é venda. Construa segurança após o sim."
  },
  {
    id: 6,
    situation: "Quando pergunta preço",
    short: "O valor fechado para o [Serviço] completo é de R$ [Valor], já incluindo todas as etapas até a entrega final em [Dias]. Trabalhamos com 50% de sinalização.",
    long: "Para entregarmos exatamente nesse nível que enviei (sem taxas surpresas de manutenção), o valor deste formato de [Serviço] fica em R$ [Valor] à vista no Pix, ou parcelamos em [2x]. Esse valor já cobre o tempo de configuração, as artes e as revisões combinadas. Como prefere seguir?",
    tip: "Deixe claro que o trabalho resolve o aspecto chato que ele não quer fazer."
  },
  {
    id: 7,
    situation: "Quando diz 'vou pensar'",
    short: "Feito! Se a questão de prazo ou formato for um impeditivo, pode ser honesto comigo. Deixo o leque aberto para conversarmos depois! Abraço.",
    long: "Perfeito, [Nome]. Entendo totalmente. Para eu me organizar aqui: se houver alguma dúvida em relação ao retorno que esse serviço traz ou até quanto ao valor inicial de teste, te peço que me avise sem ressentimentos. Trabalho visando construção de longo prazo com os clientes aqui da região. Qualquer coisa, tô aqui.",
    tip: "Saia do tom vendedor e vá para o tom consultor, mostra classe."
  },
  {
    id: 8,
    situation: "Quando visualiza e não responde",
    short: "Oi [Nome]! Passo só pra ver se minha mensagem ou áudio carregou bem na semana passada, ou se a correria do caixa te engoliu (sei como é kkk). Fico à disposição.",
    long: "Passando com todo o respeito só para não deixar nosso papo morrer em aberto. Sei que dono do negócio local lida com 50 urgências por dia e às vezes a mensagem se perde no WhatsApp do final de semana. Continuo com uma janelinha de agenda na torcida pra gente executar isso pra você. Um abraço!",
    tip: "A pessoa sentirá uma pequena (e boa) culpa de não te retornar e muitas fecham."
  },
  {
    id: 9,
    situation: "Follow-up 24h",
    short: "Tudo certo? Conseguiu dar uma olhada na imagem que deixei? Me avise se bate com o que você procura.",
    long: "Oi [Nome], bom dia! Conseguiu visualizar o material com calma depois do encerramento ontem? Não quero ficar buzinando seu celular toda hora, me mande um 'Ok' quando for bom conversarmos e tocamos adiante se for a visão de vocês agora.",
    tip: "Ser leve, rápido e empático. Tire a pressão dos ombros dele."
  },
  {
    id: 10,
    situation: "Follow-up 3 dias",
    short: "Fala [nome]. Como atendo alguns empreendedores da área, sei que a janela de oportunidades às vezes se fecha pro momento de vocês. Vou tirar o projeto do pipeline da semana, mas pode me contatar mês que vem!",
    long: "Fala [nome], de forma muito prática: como o WhatsApp costuma ter muito ruído, e eu não quero ser inconveniente te enviando propostas sem andamento, vou encerrar nosso registro aqui neste final de mês. Siga no que precisar, recomendo as melhorias independente da gente fechar, e espero batermos um papo lá na frente se precisarem de agilidade em digital! Sucesso pra ti.",
    tip: "Ele sentirá que você valoriza seu tempo mais. Aumenta muito sua autoridade num nível subconsciente."
  },
  {
    id: 11,
    situation: "Fechamento",
    short: "Excelente! Para eu garantir o seu prazo na minha semana e mandar rodar: minha chave Pix é [sua chave]. Assim que mandar o recibo, te mando 3 perguntas pra começarmos hoje.",
    long: "Fico muito feliz pela confiança! O próximo passo prático é o aceite através do sinal do PIX. Trabalhamos com entrada agora e os outros no ato da pronta-entrega pra garantir total segurança do seu lado da parceria. [inserir Chave PIX e Nome Completo]. No momento em que você emitir, te envio o checklistzinho de [dados do site/placa/fotos] pra gente inaugurar os trabalhos.",
    tip: "Assuma as rédeas pós fechamento. Não pergunte o que fazer, diga a ele de forma gentil, como líder de obra."
  },
  {
    id: 12,
    situation: "Pedido de dados",
    short: "Confirmadíssimo aqui! Agora a bola vem para a minha quadra, preciso só que você respire nestes 4 pontos rapidinho: 1. Qual email principal. 2. Qual logo (se tiver). 3. Textinhos principais. Posso seguir tocando ou falta eu te explicar algo?",
    long: "Confirmado o valor financeiro! O sistema começou. Envio aqui um pequeno Formulário / Bloco de texto no Whats. Preciso que você tire aí do arquivo as imagens limpas possíveis e alguns contatos mestres que colocarei no nosso link oficial. Não se preocupe em fazer perfeitinho, eu ajeito do lado de cá, mas preciso do sumo essencial nas próximas 24h para fluir a entrega. Pode colar direto na mensagem mesmo a gente vai filtrando.",
    tip: "Tente não dar muita tarefa técnica (arquivos e mais arquivos) pra não perder ritmo."
  },
  {
    id: 13,
    situation: "Pós-entrega",
    short: "Trabalho 100% testado e entregue, tá na mão o link oficial! Que você consiga monetizar e reverter todo esforço, foi irado fazer o negócio de vocês ficar elegante e visível.",
    long: "Projeto 100% do forno. Conferi, re-testei a parte dos links, deixei tudo operante. Está nas suas mãos. Acredito que foi um diferencial de impacto para a vitrine digital que construímos juntos. O passo agora é usufruir e anunciar/lançar de imediato. Restante também validado dos valores.",
    tip: "Celebrar a conclusão do contrato gera fidelidade muito rápida. Nunca some e entregue só."
  },
  {
    id: 14,
    situation: "Pedido de depoimento",
    short: "[Nome], me tira um favor pessoal gigante? Cê conseguiria me escrever, como do fundo do coração, em 3 a 5 lidas curtíssimas de como se sentiu sobre o projeto e a minha atenção durante tudo? É importante pra eu mandar pra novos lojistas pra perder o medo.",
    long: "Tudo bem, a gente comemora mas a rotina anda, eu conheço bem! Uma gentileza que sempre cobro para os braços bons dos projetos é se você tem a bondade - e óbvio a transparência - se quiser de pontuar em vídeo de uns 30 segundinhos ou ali em textão rápido a tua experiência real comigo desde nosso Oi em relação às minhas tratativas, valor, rapidez, e se superamos ou batemos certo no gosto no resultado final?",
    tip: "Muitos têm vergonha de aparecer no rosto em vídeo, então permita também em textão rápido e tira o print."
  },
  {
    id: 15,
    situation: "Pedido de indicação",
    short: "Se o pacote foi o prometido, sinta-se à vontade pra indicar no boca a boca 2 ou 3 lojistas aqui da região. Quem vem por indicação sua é o cliente que eu mais gosto de atender. Obrigado desde já!",
    long: "A maior parte dos meus melhores clientes vem de indicação de quem já trabalhou comigo — é assim que esse tipo de serviço cresce de verdade na região. Se você conhece 2 ou 3 donos de negócio que também estão perdendo cliente por falta de organização digital (do jeito que a gente resolveu aqui), eu ficaria muito grato se você passasse meu contato. Qualquer indicação que fechar, você tem prioridade se precisar de algo novo no futuro.",
    tip: "Não crie desconto ou comissão sem alinhar antes se a pessoa topa esse tipo de parceria."
  }
];

export const copyPrompts = [
  {
    id: 51,
    category: "Copy e Autoridade",
    title: "Headline com a fórmula dos 4U",
    objective: "Escrever um título de oferta que já filtra quem tem o problema.",
    whenToUse: "Ao criar a primeira linha da sua Oferta de Uma Página ou o texto de abertura de uma mensagem.",
    prompt: "Meu serviço é [descreva o serviço] para [público]. Escreva 5 versões de título/headline seguindo a fórmula dos 4U: Urgente (por que agora), Único (o que só eu ofereço desse jeito), Ultra-específico (número, prazo ou resultado concreto) e Útil (o benefício claro). Nada de clichê tipo 'revolucione seu negócio'. Português direto, sem palavra em inglês.",
    tip: "Teste as 5 versões com uma pessoa fora do seu nicho — se ela entender em 3 segundos, a headline está boa."
  },
  {
    id: 52,
    category: "Copy e Autoridade",
    title: "Oferta com a Equação de Valor",
    objective: "Deixar sua oferta mais atraente sem baixar o preço.",
    whenToUse: "Quando sentir que sua oferta está 'sem graça' mesmo sendo um bom serviço.",
    prompt: "Minha oferta é: [descreva]. Reescreva ela usando a Equação de Valor (Resultado dos Sonhos × Probabilidade de Sucesso Percebida) ÷ (Tempo até o Resultado × Esforço e Sacrifício Percebido). Ou seja: aumente a clareza do resultado, mostre prova de que funciona, reduza o tempo percebido de entrega e reduza o esforço que o cliente acha que vai ter. Me devolva a oferta reescrita em um parágrafo curto, pronto para colar no WhatsApp.",
    tip: "Não é sobre adicionar mais coisa na oferta — é sobre deixar mais claro o que já tem de bom nela."
  },
  {
    id: 53,
    category: "Copy e Autoridade",
    title: "Mini-StoryBrand para o 'sobre mim'",
    objective: "Criar uma apresentação pessoal onde o cliente é o herói, não você.",
    whenToUse: "Para a bio do Instagram, o 'sobre' do biosite, ou quando alguém pergunta 'quem é você?'.",
    prompt: "Escreva uma apresentação curta (máximo 4 frases) no formato: 1) o cliente [público] quer [resultado desejado], 2) mas enfrenta [problema comum], 3) eu ajudo oferecendo [sua solução], 4) para que ele consiga [transformação final]. O cliente é o herói da história, eu sou o guia — não o contrário. Tom direto, sem 'eu sou apaixonado por...'.",
    tip: "Se a apresentação fala mais de você do que do problema do cliente, reescreva."
  },
  {
    id: 54,
    category: "Copy e Autoridade",
    title: "Responder objeção com ancoragem de valor",
    objective: "Defender o preço sem descontar e sem ficar na defensiva.",
    whenToUse: "Quando o cliente compara seu preço com o de alguém mais barato.",
    prompt: "O cliente disse: '[cole a objeção de preço, ex: achei caro, um garoto cobra metade]'. Escreva uma resposta que não ataque o concorrente, mas mostre a diferença real de valor entregue (qualidade, prazo, revisão, garantia de funcionamento) sem soar arrogante. Termine reafirmando o preço, sem oferecer desconto automático.",
    tip: "Baixar o preço no primeiro 'tá caro' ensina o cliente a sempre pedir desconto. Segure a posição com respeito."
  },
  {
    id: 55,
    category: "Copy e Autoridade",
    title: "Prova social a partir de um resultado pequeno",
    objective: "Transformar até um resultado modesto em prova social honesta.",
    whenToUse: "Quando você só tem 1 ou 2 clientes ainda, mas precisa de algo para mostrar.",
    prompt: "Entreguei [descreva o resultado, mesmo que pequeno, ex: 'uma plaquinha que já gerou 8 avaliações novas no Google em 10 dias']. Escreva 2 formas honestas de transformar isso em prova social para usar no story ou na próxima abordagem, sem exagerar o número nem inventar dado que não tenho.",
    tip: "Prova social pequena e real converte mais do que número grande genérico que ninguém acredita."
  }
];

export const startHereContent = `Este kit foi criado para acelerar sua execução.

O eBook te mostra o caminho.
Este kit te entrega os modelos para aplicar mais rápido.

Use na ordem:
1. Leia o Checklist.
2. Escolha um serviço.
3. Preencha o Modelo de Oferta.
4. Use os prompts para melhorar sua abordagem no ChatGPT ou Claude.
5. Monte a lista de clientes usando nossa planilha de captação.
6. Envie as Mensagens do kit.
7. Se travar na copy da oferta ou do "sobre mim", use os Prompts de Copy e Autoridade.
8. Anote tudo e mantenha organizado.
9. Ajuste e repita.

A clareza vem na prática. Feito é melhor que bem planejado com ansiedade. Pegue os contatos e acelere seu primeiro Pix de serviços.

Mentalidade: você não vai acertar a mensagem perfeita na primeira tentativa, e tudo bem. O objetivo das 3 primeiras semanas não é fechar 10 clientes — é rodar o ciclo (enviar, ouvir, ajustar) rápido o suficiente pra aprender o que funciona no seu nicho. Quem desiste na primeira rodada de "não respondeu" nunca chega na segunda, que costuma ser a que converte.`;
