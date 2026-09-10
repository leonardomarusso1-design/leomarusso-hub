"use client";

import React, { useState } from 'react';
import { Download, Copy, CheckCircle2, Menu, X, Rocket, TerminalSquare, CheckSquare, FileText, MessageSquare, Calculator, FileSpreadsheet, LogOut } from 'lucide-react';
import { prompts as basePrompts, copyPrompts, messagesData } from './data';
const prompts = [...basePrompts, ...copyPrompts];
import { downloadSpreadsheet } from './lib/excelGenerator';
import { cn } from './lib/utils';

type ViewMode = 'welcome' | 'prompts' | 'checklist' | 'offer' | 'messages' | 'pricing' | 'spreadsheet';

export default function App() {
  const [currentView, setCurrentView] = useState<ViewMode>('welcome');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogout = async () => {
    await fetch('/api/kit/logout', { method: 'POST' });
    window.location.reload();
  };

  // Copy helper
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert('Copiado para a área de transferência!');
  };

  const navItems = [
    { id: 'welcome', label: '00. Comece por Aqui', icon: <Rocket size={18} /> },
    { id: 'prompts', label: '01. 55 Prompts Premium', icon: <TerminalSquare size={18} /> },
    { id: 'checklist', label: '02. Checklist', icon: <CheckSquare size={18} /> },
    { id: 'offer', label: '03. Modelo de Oferta', icon: <FileText size={18} /> },
    { id: 'messages', label: '04. Mensagens WhatsApp', icon: <MessageSquare size={18} /> },
    { id: 'pricing', label: '05. Precificação', icon: <Calculator size={18} /> },
    { id: 'spreadsheet', label: '06. Planilha de Clientes', icon: <FileSpreadsheet size={18} /> },
  ] as const;

  const navigateTo = (view: ViewMode) => {
    setCurrentView(view);
    setMobileMenuOpen(false);
  };

  return (
    <div className="flex h-screen w-full overflow-hidden bg-brand-light text-brand-gray font-sans selection:bg-brand-gold selection:text-brand-dark">
      
      {/* Mobile Header / Hamburger */}
      <div className="md:hidden flex items-center justify-between p-4 bg-brand-dark text-white shadow-md fixed w-full z-50">
        <h1 className="font-bold text-lg uppercase tracking-wider text-brand-gold">Kit Primeira Oferta</h1>
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Sidebar Navigation */}
      <aside className={cn(
        "bg-brand-dark text-gray-300 w-72 flex-shrink-0 flex flex-col h-full absolute md:relative z-40 transition-transform duration-300 ease-in-out md:translate-x-0 no-print",
        mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="p-6 border-b border-gray-800 hidden md:block">
          <p className="text-xs font-mono text-gray-400 mb-2">V 1.0 // MATERIAL EXCLUSIVO</p>
          <h1 className="font-bold text-xl uppercase tracking-wider leading-tight text-brand-gold">
            Kit de Execução da Primeira Oferta
          </h1>
          <p className="text-sm mt-2 text-gray-400">Modelos, prompts e scripts para aplicar rápido.</p>
        </div>

        <nav className="flex-1 overflow-y-auto py-4 pt-20 md:pt-4">
          <ul className="space-y-1 px-3">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => navigateTo(item.id as ViewMode)}
                  className={cn(
                    "w-full flex items-center gap-3 px-4 py-3 rounded-md text-sm font-medium transition-colors text-left",
                    currentView === item.id 
                      ? "bg-brand-gold text-brand-dark" 
                      : "hover:bg-gray-800 hover:text-white"
                  )}
                >
                  {item.icon}
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
        
        <div className="p-4 border-t border-gray-800">
          <button 
            onClick={handleLogout}
            className="w-full flex items-center gap-2 px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800 rounded-md transition-colors"
          >
            <LogOut size={16} /> Encerrar Acesso / Sair
          </button>
        </div>
      </aside>

      {/* Overlays for mobile menu */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 md:hidden" 
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Main Content Area */}
      <main className="flex-1 h-full overflow-y-auto bg-brand-light p-4 pt-24 md:p-8 md:pt-8 print:p-0 print:pt-0">
        <div className="max-w-4xl mx-auto pb-16">
          {currentView === 'welcome' && <ViewWelcome setCurrentView={setCurrentView} />}
          {currentView === 'prompts' && <ViewPrompts copyToClipboard={copyToClipboard} />}
          {currentView === 'checklist' && <ViewChecklist />}
          {currentView === 'offer' && <ViewOffer />}
          {currentView === 'messages' && <ViewMessages copyToClipboard={copyToClipboard} />}
          {currentView === 'pricing' && <ViewPricing />}
          {currentView === 'spreadsheet' && <ViewSpreadsheet />}
        </div>
      </main>
    </div>
  );
}

// ------ VIEW COMPONENTS ------

function ViewWelcome({ setCurrentView }: { setCurrentView: (v: ViewMode) => void }) {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
      <div className="mb-8">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-brand-dark uppercase mb-2">Comece por Aqui</h2>
        <div className="w-20 h-1 bg-brand-gold mb-6"></div>
      </div>
      
      <div className="bg-white p-6 md:p-10 rounded-xl shadow-sm border border-gray-100">
        <div className="prose prose-gray max-w-none">
          <p className="text-lg md:text-xl font-medium leading-relaxed mb-6 font-sans">
            Este kit foi criado para acelerar sua execução.
            <br />
            <span className="text-gray-500">O eBook te mostra o caminho. Este kit te entrega os modelos para aplicar mais rápido sem partir do zero absolto.</span>
          </p>
          
          <h3 className="text-xl font-bold mb-4">A sequência ideal de uso:</h3>
          <ul className="space-y-4 mb-8 list-none pl-0">
            {[
              { id: 'checklist', text: 'Leia o Checklist de ação' },
              { id: 'prompts', text: 'Escolha um serviço e use os prompts para avaliar abordagens' },
              { id: 'offer', text: 'Preencha o Modelo de Oferta para ter clareza do que você entrega' },
              { id: 'spreadsheet', text: 'Baixe nossa planilha e monte uma lista mínima de clientes locais' },
              { id: 'messages', text: 'Copie e ajuste as Mensagens do kit e inicie o contato' },
              { id: 'pricing', text: 'Use a calculadora de Precificação quando te perguntarem valores' },
            ].map((step, index) => (
              <li key={index} className="flex flex-col sm:flex-row sm:items-center gap-3 p-3 rounded-lg hover:bg-gray-50 group border border-transparent hover:border-gray-200 transition-all">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-brand-dark text-brand-gold font-bold flex-shrink-0">
                  {index + 1}
                </span>
                <span className="font-medium text-gray-800 flex-1">{step.text}</span>
                <button 
                  onClick={() => setCurrentView(step.id as ViewMode)}
                  className="text-sm font-semibold text-brand-cyan hover:underline w-fit sm:w-auto mt-2 sm:mt-0"
                >
                  ACESSAR &rarr;
                </button>
              </li>
            ))}
          </ul>
          
          <div className="bg-gray-50 border-l-4 border-brand-gold p-5 rounded-r-lg mt-8">
            <p className="m-0 font-medium text-brand-dark italic">
              &ldquo;A clareza vem na execução real conversando com os leads locais. Feito é muito melhor que planejado por dez dias. Pegue os contatos, copie o texto e mande os primeiros 10 whatsapps.&rdquo;
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ViewPrompts({ copyToClipboard }: { copyToClipboard: (t: string) => void }) {
  // Group by category
  const categories = Array.from(new Set(prompts.map(p => p.category)));
  
  return (
    <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-brand-dark uppercase mb-2">55 Prompts Premium</h2>
          <div className="w-20 h-1 bg-brand-gold mb-4"></div>
          <p className="text-gray-500">Copie e cole em IAs (como o ChatGPT ou Claude) para criar materiais e abordagens sem linguagem de robô.</p>
        </div>
        <button className="no-print bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 flex items-center justify-center gap-2 rounded-md font-medium text-sm transition-colors w-full md:w-auto" onClick={() => window.print()}>
          Imprimir / PDF
        </button>
      </div>

      <div className="space-y-12">
        {categories.map((category, idx) => (
          <div key={idx} className="print-break-inside-avoid">
            <h3 className="text-xl font-bold text-brand-dark mb-6 border-b border-gray-200 pb-2">Módulo {idx + 1} — {category}</h3>
            <div className="space-y-8">
              {prompts.filter(p => p.category === category).map((prompt) => (
                <div key={prompt.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden print-break-inside-avoid">
                  <div className="bg-brand-dark text-white p-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div className="flex gap-4 items-center">
                      <span className="font-mono text-brand-gold font-bold">#{prompt.id.toString().padStart(2, '0')}</span>
                      <h4 className="font-bold text-lg">{prompt.title}</h4>
                    </div>
                  </div>
                  
                  <div className="p-5 md:p-6 space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <span className="text-xs uppercase font-bold tracking-wider text-gray-400 mb-1 block">Objetivo</span>
                        <p className="text-sm font-medium">{prompt.objective}</p>
                      </div>
                      <div>
                        <span className="text-xs uppercase font-bold tracking-wider text-gray-400 mb-1 block">Quando usar</span>
                        <p className="text-sm font-medium">{prompt.whenToUse}</p>
                      </div>
                    </div>
                    
                    <div className="pt-4 mt-4 border-t border-gray-100">
                      <span className="text-xs uppercase font-bold tracking-wider text-gray-400 mb-2 block">O Prompt</span>
                      <div className="relative group">
                        <div className="bg-gray-50 border border-gray-200 p-4 rounded-lg text-brand-gray font-mono text-sm leading-relaxed whitespace-pre-wrap">
                          {prompt.prompt}
                        </div>
                        <button 
                          onClick={() => copyToClipboard(prompt.prompt)}
                          className="no-print absolute top-2 right-2 bg-white border border-gray-200 hover:bg-gray-100 p-2 rounded shadow-sm opacity-0 group-hover:opacity-100 focus:opacity-100 transition-opacity"
                          title="Copiar prompt"
                        >
                          <Copy size={16} />
                        </button>
                      </div>
                    </div>
                    
                    {prompt.tip && (
                      <div className="bg-amber-50 text-amber-900 px-4 py-3 rounded-lg text-sm flex gap-3 font-medium mt-4">
                        <span className="font-bold uppercase tracking-wider text-amber-700">Dica:</span>
                        {prompt.tip}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ViewChecklist() {
  const [checked, setChecked] = useState<Record<number, boolean>>({});
  
  const checklistItems = [
    "Escolhi apenas um serviço simples para começar (nada de cardápio complexo de ofertas variadas).",
    "Sei explicar esse serviço em uma frase direta e comercial.",
    "Sei para quem vou vender primeiro (já escolhi o nicho: clínicas, alimentação, moda, etc).",
    "Entendi qual problema óbvio esse público tem e sofre diariamente.",
    "Criei uma oferta que detalha público, problema, solução, preço e o próximo passo natural.",
    "Tenho um exemplo visual real (mockup, imagem ou link) para encaminhar no WhatsApp.",
    "Listei 20 possíveis clientes de forma manual com dados de contatos locais.",
    "Escrevi minha primeira mensagem filtrada no tom e deixei nos atalhos.",
    "Enviei e chamei para pelo menos 5 negócios locais que notei falhas claras.",
    "Anotei as objeções/respostas deles sem me afetar.",
    "Ajustei minha abordagem baseada na primeira rodada e continuei o projeto."
  ];

  const handleToggle = (index: number) => {
    setChecked(prev => ({ ...prev, [index]: !prev[index] }));
  };

  const completedCount = Object.values(checked).filter(Boolean).length;
  const percentage = Math.round((completedCount / checklistItems.length) * 100);

  return (
    <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
      <div className="flex justify-between items-end mb-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-brand-dark uppercase mb-2">Checklist de Execução</h2>
          <div className="w-20 h-1 bg-brand-gold mb-4"></div>
          <p className="text-gray-500">Siga estes passos antes de complicar as coisas e pensar no CNPJ ou logo perfeito.</p>
        </div>
        <button className="no-print bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-md font-medium text-sm transition-colors" onClick={() => window.print()}>Print</button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden mb-8">
        <div className="bg-gray-50 border-b border-gray-200 p-6 flex justify-between items-center no-print">
          <div>
            <h3 className="font-bold text-lg">Progresso</h3>
            <p className="text-sm text-gray-500">Meta: Bater 70% de ação.</p>
          </div>
          <div className="text-right">
            <span className="text-3xl font-bold text-brand-dark">{percentage}%</span>
          </div>
        </div>
        
        {/* Progress bar */}
        <div className="w-full bg-gray-200 h-2 no-print">
          <div 
            className="bg-brand-cyan h-2 transition-all duration-500" 
            style={{ width: `${percentage}%` }}
          ></div>
        </div>

        <div className="p-6 md:p-8 space-y-2">
          {checklistItems.map((item, index) => (
            <label 
              key={index} 
              className={cn(
                "flex items-start gap-4 p-4 rounded-lg cursor-pointer transition-colors border border-transparent hover:border-gray-200",
                checked[index] ? "bg-gray-50 opacity-70" : "bg-white"
              )}
            >
              <div className="mt-0.5 pt-0.5 relative flex items-center justify-center">
                <input 
                  type="checkbox" 
                  className="w-6 h-6 rounded border-gray-300 text-brand-cyan focus:ring-brand-cyan bg-white appearance-none border-2 checked:bg-brand-cyan checked:border-brand-cyan transition-colors"
                  checked={checked[index] || false}
                  onChange={() => handleToggle(index)}
                />
                {checked[index] && <CheckCircle2 className="absolute text-white pointer-events-none w-5 h-5 flex items-center justify-center" />}
              </div>
              <span className={cn(
                "text-base md:text-lg font-medium leading-tight",
                checked[index] ? "line-through text-gray-400" : "text-brand-dark"
              )}>
                {item}
              </span>
            </label>
          ))}
        </div>
      </div>

      {(percentage >= 70) ? (
        <div className="bg-emerald-50 border border-emerald-200 p-6 rounded-xl text-center shadow-sm animate-in zoom-in duration-300">
          <h3 className="text-emerald-800 font-bold text-xl mb-2">🟢 Hora de agir!</h3>
          <p className="text-emerald-700 font-medium">Você marcou pelo menos 70% dos itens. Pare de planejar e comece a conversar ativamente com possíveis clientes.</p>
        </div>
      ) : (
        <div className="bg-blue-50 border border-blue-200 p-6 rounded-xl text-center shadow-sm no-print">
          <h3 className="text-blue-800 font-bold text-xl mb-2">Mão na Massa...</h3>
          <p className="text-blue-700 font-medium">Marcou menos de 70%? Não tem problema, siga com o mapeamento com calma mas não deixe para a semana que vem.</p>
        </div>
      )}
    </div>
  );
}

function ViewOffer() {
  const [activeTab, setActiveTab] = useState<'form' | 'example1' | 'example2'>('form');

  return (
    <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
      <div className="flex justify-between items-end mb-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-brand-dark uppercase mb-2">Modelo de Oferta</h2>
          <div className="w-20 h-1 bg-brand-gold mb-4"></div>
          <p className="text-gray-500">Desenhe sua oferta para entender exatamente o que está vendendo (1 página).</p>
        </div>
        <button className="no-print bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-md font-medium text-sm transition-colors" onClick={() => window.print()}>Imprimir / PDF</button>
      </div>

      <div className="flex gap-2 mb-6 border-b border-gray-200 pb-px overflow-x-auto no-print">
        <button onClick={() => setActiveTab('form')} className={cn("px-4 py-2 text-sm font-bold uppercase tracking-wider whitespace-nowrap border-b-2", activeTab === 'form' ? "border-brand-dark text-brand-dark" : "border-transparent text-gray-400 hover:text-gray-700")}>Seu Quadro (Preencher)</button>
        <button onClick={() => setActiveTab('example1')} className={cn("px-4 py-2 text-sm font-bold uppercase tracking-wider whitespace-nowrap border-b-2", activeTab === 'example1' ? "border-brand-dark text-brand-dark" : "border-transparent text-gray-400 hover:text-gray-700")}>Exemplo Plaquinha</button>
        <button onClick={() => setActiveTab('example2')} className={cn("px-4 py-2 text-sm font-bold uppercase tracking-wider whitespace-nowrap border-b-2", activeTab === 'example2' ? "border-brand-dark text-brand-dark" : "border-transparent text-gray-400 hover:text-gray-700")}>Exemplo Site Simples</button>
      </div>

      {activeTab === 'form' && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden divide-y divide-gray-100">
          <div className="p-6 bg-brand-dark text-brand-gold font-bold uppercase font-mono tracking-widest text-center">
            Framework de Oferta (Página Única)
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2">
            <OfferField label="Nome da Oferta" placeholder="Ex: Biosite de Perfomance" />
            <OfferField label="Público Alvo (Nicho)" placeholder="Ex: Clínicas odontológicas premium" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <OfferField label="O Problema / Dor Obscura" placeholder="Eles perdem leads por não ter link claro" />
            <OfferField label="A Solução Simples e Rápida" placeholder="Criação de um cartão digital elegante em 24h" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <OfferField label="O que ESTÁ incluso?" placeholder="- Estrutura visual\n- Link domínio gratuito\n- 5 botões otimizados" />
            <OfferField label="O que NÃO ESTÁ incluso?" placeholder="- Criação do logotipo novo\n- Gestão de anúncios pagos" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3">
            <OfferField label="Prazo de Entrega" placeholder="Ex: 48h úteis" />
            <OfferField label="Preço Inicial / Âncora" placeholder="Ex: R$ 197" />
            <OfferField label="Mensagem / Isca Inicial" placeholder="Posso enviar a foto de como ficou?" />
          </div>
          <div>
            <OfferField label="Exemplo visual que vou usar/mostrar" placeholder="Descreva: Uma simulação em imagem do celular com a logo deles aparecendo, em dark mode, focando apenas no botão 'Agendar Consulta'." />
          </div>
        </div>
      )}

      {/* Static Examples using similar styling */}
      {activeTab === 'example1' && (
         <div className="bg-gray-50/50 rounded-xl shadow-sm border border-gray-200 overflow-hidden divide-y divide-gray-200 animate-in fade-in">
         <div className="p-6 bg-brand-gray text-white font-bold uppercase font-mono tracking-widest text-center">
           Exemplo Preenchido: Plaquinhas de Avaliação
         </div>
         <div className="p-6 bg-white"><div className="text-xs uppercase text-gray-400 font-bold mb-1">Nome da Oferta</div><div className="font-medium">Painel Físico de Google Checkout Rápido (Placas NFC)</div></div>
         <div className="p-6 bg-white"><div className="text-xs uppercase text-gray-400 font-bold mb-1">Público / Problema</div><div className="font-medium">Oficinas mecânicas. Problema: Dono diz que atendimento é bom, mas o Maps só tem 2 avaliações velhas, afastando os contatos novos orgânicos da região.</div></div>
         <div className="p-6 bg-white"><div className="text-xs uppercase text-gray-400 font-bold mb-1">O que ENTREGA / NÃO ENTREGA</div><div className="font-medium">Entrego: 1 Placa de balcão impressa e configurada na rota deles.<br/>Não entrego: Otimizações de SO do Google Meu Negócio.</div></div>
         <div className="p-6 bg-white"><div className="text-xs uppercase text-gray-400 font-bold mb-1">Preço / Prazo</div><div className="font-medium">R$ 67,00 reais à vista. (Lucro limpo de 45 num material pronto na hora) prazo da gráfica apenas (2 dias)</div></div>
       </div>
      )}
      
      {activeTab === 'example2' && (
         <div className="bg-gray-50/50 rounded-xl shadow-sm border border-gray-200 overflow-hidden divide-y divide-gray-200 animate-in fade-in">
         <div className="p-6 bg-brand-gray text-white font-bold uppercase font-mono tracking-widest text-center">
           Exemplo Preenchido: Fotos Corporativas IA
         </div>
         <div className="p-6 bg-white"><div className="text-xs uppercase text-gray-400 font-bold mb-1">Nome da Oferta</div><div className="font-medium">Ensaio Inteligente Fast Profile Business</div></div>
         <div className="p-6 bg-white"><div className="text-xs uppercase text-gray-400 font-bold mb-1">Público / Problema</div><div className="font-medium">Profissionais Liberais Autônomos (Corretores de Alto Padrão). A foto do Instagram deles está feia no carro com óculos escuro. Imagem desvalida o luxo que vendem.</div></div>
         <div className="p-6 bg-white"><div className="text-xs uppercase text-gray-400 font-bold mb-1">O que ENTREGA / NÃO ENTREGA</div><div className="font-medium">Entrego: Pacote em HD de 15 imagens realistas executivas de terno geradas em Astria/Midjourney baseados no rosto do cara. <br/>Não entrego: Redesign de Perfil ou fotos junto com família/veículos.</div></div>
         <div className="p-6 bg-white"><div className="text-xs uppercase text-gray-400 font-bold mb-1">Preço / Prazo</div><div className="font-medium">R$ 150 pacotão inicial / 24h a 48h a depender dos lotes diários rodando.</div></div>
       </div>
      )}
    </div>
  );
}

function OfferField({ label, placeholder }: { label: string, placeholder: string }) {
  return (
    <div className="p-5 md:p-6 hover:bg-gray-50 transition-colors">
      <label className="block text-xs uppercase font-bold tracking-wider text-gray-500 mb-2">{label}</label>
      <textarea 
        className="w-full bg-transparent border-0 border-b border-dashed border-gray-300 focus:border-brand-cyan focus:ring-0 p-0 resize-none font-medium text-brand-dark placeholder:text-gray-300 min-h-[40px]"
        placeholder={placeholder}
        rows={2}
        defaultValue=""
      />
    </div>
  );
}

function ViewMessages({ copyToClipboard }: { copyToClipboard: (t: string) => void }) {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
      <div className="flex justify-between items-end mb-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-brand-dark uppercase mb-2">Mensagens de WhatsApp</h2>
          <div className="w-20 h-1 bg-brand-gold mb-4"></div>
          <p className="text-gray-500">Textos diretos estruturados com empatia local, feitos para iniciar negócios e fugir de robôs.</p>
        </div>
        <button className="no-print bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-md font-medium text-sm transition-colors" onClick={() => window.print()}>Imprimir / PDF</button>
      </div>

      <div className="space-y-6">
        {messagesData.map((msg) => (
          <div key={msg.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden print-break-inside-avoid">
            <div className="bg-gray-50 px-5 py-4 border-b border-gray-100 flex items-center justify-between">
              <h3 className="font-bold text-gray-800 flex items-center gap-2">
                <span className="w-6 h-6 rounded bg-brand-dark text-white text-xs flex items-center justify-center font-mono">
                  {msg.id}
                </span>
                {msg.situation}
              </h3>
            </div>
            
            <div className="p-5 space-y-6">
              {/* Short version */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs uppercase font-bold tracking-wider text-emerald-600 bg-emerald-50 px-2 py-1 rounded">Versão Curta (Direta)</span>
                  <button onClick={() => copyToClipboard(msg.short)} className="text-gray-400 hover:text-brand-dark no-print" title="Copiar"><Copy size={16}/></button>
                </div>
                <div className="relative group">
                  <p className="text-brand-gray text-[15px] leading-relaxed bg-white border border-gray-100 p-4 rounded-xl rounded-tl-sm shadow-sm relative after:content-[''] after:absolute after:top-0 after:-left-2 after:w-0 after:h-0 after:border-r-[10px] after:border-r-gray-100 after:border-b-[15px] after:border-b-transparent">
                    {msg.short}
                  </p>
                </div>
              </div>

              {/* Long version */}
              <div className="pt-4 border-t border-gray-50">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs uppercase font-bold tracking-wider text-blue-600 bg-blue-50 px-2 py-1 rounded">Versão Longa (Mais Argumentativa)</span>
                  <button onClick={() => copyToClipboard(msg.long)} className="text-gray-400 hover:text-brand-dark no-print" title="Copiar"><Copy size={16}/></button>
                </div>
                <div className="relative group">
                  <p className="text-brand-gray text-[15px] leading-relaxed bg-white border border-gray-100 p-4 rounded-xl rounded-tl-sm shadow-sm relative after:content-[''] after:absolute after:top-0 after:-left-2 after:w-0 after:h-0 after:border-r-[10px] after:border-r-gray-100 after:border-b-[15px] after:border-b-transparent">
                    {msg.long}
                  </p>
                </div>
              </div>

              {/* Tip */}
              <div className="bg-amber-50 text-amber-900 px-4 py-3 rounded-lg text-sm flex gap-3 font-medium">
                <span className="font-bold uppercase tracking-wider text-amber-700">Dica:</span>
                {msg.tip}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ViewPricing() {
  const [cost, setCost] = useState(30);
  const [hours, setHours] = useState(2);
  const [hourlyRate, setHourlyRate] = useState(50);
  const [margin, setMargin] = useState(40); // 40%
  
  // Fórmula: Custos Diretos + (Tempo * Valor Hora) + Margem Seguro e Lucro
  const labor = hours * hourlyRate;
  const baseCost = cost + labor;
  const price = baseCost / (1 - (margin/100));
  const suggestedPrice = Math.ceil(price / 10) * 10; // Round up to nearest 10

  return (
    <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
      <div className="flex justify-between items-end mb-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-brand-dark uppercase mb-2">Modelo de Precificação</h2>
          <div className="w-20 h-1 bg-brand-gold mb-4"></div>
          <p className="text-gray-500">Nunca copie o preço alheio. Entenda o piso e o teto do seu serviço interativo.</p>
        </div>
        <button className="no-print bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-md font-medium text-sm transition-colors" onClick={() => window.print()}>Imprimir / PDF</button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-200">
            <h3 className="font-bold text-xl mb-6 flex items-center gap-2"><Calculator className="text-brand-cyan" /> Calculadora Prática</h3>
            
            <div className="space-y-5 no-print">
              <div>
                <label className="flex justify-between text-sm font-bold text-gray-700 mb-1">
                  <span>Custos Diretos (Ferramenta, Frete, App)</span>
                  <span className="text-brand-dark">R$ {cost}</span>
                </label>
                <input type="range" min="0" max="300" step="5" value={cost} onChange={(e) => setCost(Number(e.target.value))} className="w-full accent-brand-cyan" />
              </div>
              
              <div>
                <label className="flex justify-between text-sm font-bold text-gray-700 mb-1">
                  <span>Horas Necessárias (Realismo)</span>
                  <span className="text-brand-dark">{hours}h</span>
                </label>
                <input type="range" min="0.5" max="20" step="0.5" value={hours} onChange={(e) => setHours(Number(e.target.value))} className="w-full accent-brand-cyan" />
              </div>
              
              <div>
                <label className="flex justify-between text-sm font-bold text-gray-700 mb-1">
                  <span>Sua Meta R$/Hora</span>
                  <span className="text-brand-dark">R$ {hourlyRate}</span>
                </label>
                <input type="range" min="15" max="250" step="5" value={hourlyRate} onChange={(e) => setHourlyRate(Number(e.target.value))} className="w-full accent-brand-cyan" />
              </div>
              
              <div>
                <label className="flex justify-between text-sm font-bold text-gray-700 mb-1">
                  <span>Margem (%) Segurança de Refação</span>
                  <span className="text-brand-dark">{margin}%</span>
                </label>
                <input type="range" min="10" max="80" step="5" value={margin} onChange={(e) => setMargin(Number(e.target.value))} className="w-full accent-brand-cyan" />
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-100">
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">Preço Sugerido (Piso Mínimo)</p>
                  <p className="text-4xl font-bold text-brand-dark">R$ {suggestedPrice}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs font-bold text-gray-400">Total de Custos & Base</p>
                  <p className="text-lg font-medium text-gray-800">R$ {baseCost}</p>
                </div>
              </div>
            </div>
            <p className="text-xs text-gray-400 mt-4 text-center italic">Arredondamento ativo. Cobre o dobro do piso sugerido se o cliente pedir urgência.</p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-brand-dark text-white p-6 md:p-8 rounded-xl shadow-lg border-2 border-brand-gold">
            <h3 className="font-bold text-xl mb-4 text-brand-gold">O Custo Oculto dos Erros</h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <div className="flex-shrink-0 mt-1"><CheckCircle2 size={16} className="text-emerald-400"/></div>
                <p className="text-sm leading-relaxed text-gray-300"><span className="font-bold text-white">O erro de cobrar barato demais:</span> Preço baixo atrai cliente mal-educado, sedento de refação e mostra insegurança sua. Você paga pra trabalhar e desiste rápido do nicho.</p>
              </li>
              <li className="flex gap-3">
                <div className="flex-shrink-0 mt-1"><CheckCircle2 size={16} className="text-brand-cyan"/></div>
                <p className="text-sm leading-relaxed text-gray-300"><span className="font-bold text-white">O erro de subir sem prova:</span> Não tente vender Biosites de 1000 reais no primeiro mês sem um portfólio montado para lastrear. Venda dois testes barato, colecione a prova e ganhe robustez.</p>
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
             <h4 className="font-bold text-md mb-2">Exemplos Rápidos de Piso em Micro Serviços:</h4>
             <ul className="space-y-2 text-sm text-gray-600 font-medium">
               <li className="flex justify-between border-b border-gray-50 pb-2"><span>Plaquinha Acrílica NFC Unitária</span> <span className="font-bold text-brand-dark">R$ 55 a 97</span></li>
               <li className="flex justify-between border-b border-gray-50 pb-2"><span>Galeria Fotos IA (Pacote Básico)</span> <span className="font-bold text-brand-dark">R$ 150 a 250</span></li>
               <li className="flex justify-between border-b border-gray-50 pb-2"><span>Biosite Link Profissional Simplificado</span> <span className="font-bold text-brand-dark">R$ 297 a 497</span></li>
               <li className="flex justify-between"><span>Site Landing Page OnePage com Domínio</span> <span className="font-bold text-brand-dark">R$ 800 a 1600</span></li>
             </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function ViewSpreadsheet() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
      <div className="mb-8">
        <h2 className="text-3xl font-bold tracking-tight text-brand-dark uppercase mb-2">CRM: Planilha Premium</h2>
        <div className="w-20 h-1 bg-brand-gold mb-6"></div>
        <p className="text-gray-500">O motor do seu negócio. Uma ferramenta completa com cara de SaaS para gestão de clientes locais.</p>
      </div>
      
      <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 mb-8 overflow-hidden relative">
        <div className="absolute top-0 right-0 bg-brand-gold text-brand-dark text-xs font-bold px-3 py-1 rounded-bl-lg">
          INCLUSO NO KIT
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-center">
          <div className="flex-1 space-y-6">
            <h3 className="text-2xl font-bold text-brand-dark leading-tight">O Fim das Cadernetas e do WhatsApp Desorganizado</h3>
            <p className="text-gray-600 leading-relaxed text-sm">
              Desenvolvemos um sistema completo dentro do Excel. Ele não parece uma planilha, parece um software. Com <strong>9 abas integradas</strong>, alertas de cor, dashboard executivo, painel financeiro, scripts, ideias e acompanhamento de metas.
            </p>
            
            <ul className="space-y-3">
               {[
                 { icon: "📊", text: "Dashboard Executivo com Funil e Metas" },
                 { icon: "🎯", text: "CRM de Prospecção (Status com cores automáticas)" },
                 { icon: "🔔", text: "Painel de Follow-up (Alertas de dias parados)" },
                 { icon: "💵", text: "Controle Financeiro de Fechamentos" },
                 { icon: "💡", text: "Banco de Ideias Rápidas (Nicho vs Dor)" }
               ].map((item, idx) => (
                 <li key={idx} className="flex items-center gap-3 text-sm font-medium text-gray-700">
                    <span className="w-8 h-8 rounded shrink-0 bg-gray-50 flex items-center justify-center border border-gray-100 shadow-sm">{item.icon}</span>
                    {item.text}
                 </li>
               ))}
            </ul>

            <div className="pt-4 mt-2">
              <button 
                onClick={downloadSpreadsheet}
                className="bg-brand-dark hover:bg-black text-brand-gold font-bold px-6 py-4 rounded-lg shadow-lg transition-all duration-300 flex items-center gap-3 w-full justify-center lg:w-auto"
              >
                <Download size={20} />
                Fazer Download (.XLSX)
              </button>
              <p className="text-xs font-medium text-gray-400 mt-3 text-center lg:text-left">Use com Excel Desktop, Microsoft 365 ou Google Sheets.</p>
            </div>
          </div>

          <div className="flex-1 w-full bg-gray-50 rounded-xl border border-gray-200 shadow-inner p-4 md:p-6 no-print">
             {/* Mockup UI of the generated spreadsheet for visual appeal */}
             <div className="bg-white border text-xs border-gray-200 rounded-lg shadow-sm overflow-hidden pointer-events-none select-none">
                <div className="bg-brand-cyan px-4 py-3 flex text-white items-center gap-2 font-bold tracking-wider">
                  DASHBOARD EXECUTIVO - PROSPECÇÃO
                </div>
                <div className="p-4 bg-gray-50 space-y-4">
                   <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                      <div className="bg-white border border-gray-200 rounded text-center p-2 border-t-2 border-t-brand-cyan">
                        <div className="text-[10px] text-gray-500 font-bold uppercase">Contatos</div>
                        <div className="text-xl font-black text-brand-dark mt-1">142</div>
                      </div>
                      <div className="bg-white border border-gray-200 rounded text-center p-2 border-t-2 border-t-brand-cyan">
                        <div className="text-[10px] text-gray-500 font-bold uppercase">Mensagens</div>
                        <div className="text-xl font-black text-brand-dark mt-1">89</div>
                      </div>
                      <div className="bg-white border border-gray-200 rounded text-center p-2 border-t-2 border-t-brand-cyan">
                        <div className="text-[10px] text-gray-500 font-bold uppercase">Interessados</div>
                        <div className="text-xl font-black text-brand-dark mt-1">15</div>
                      </div>
                      <div className="bg-white border border-gray-200 rounded text-center p-2 border-t-2 border-t-brand-cyan">
                        <div className="text-[10px] text-gray-500 font-bold uppercase">Fechamentos</div>
                        <div className="text-xl font-black text-brand-dark mt-1">8</div>
                      </div>
                   </div>

                   <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
                      <div className="bg-emerald-50 text-emerald-800 border border-emerald-100 rounded p-3 flex justify-between items-center">
                         <span className="font-bold text-[10px] uppercase">R$ Valor Vendido</span>
                         <span className="font-black">R$ 2.450</span>
                      </div>
                      <div className="bg-blue-50 text-blue-800 border border-blue-100 rounded p-3 flex justify-between items-center">
                         <span className="font-bold text-[10px] uppercase">Taxa Fechamento</span>
                         <span className="font-black">8.9%</span>
                      </div>
                   </div>

                   <table className="w-full text-left mt-2 border border-gray-200 rounded overflow-hidden">
                     <thead className="bg-brand-dark text-white text-[10px]">
                       <tr>
                         <th className="p-1.5 font-medium">Pipeline CRM</th>
                         <th className="p-1.5 font-medium">Status</th>
                       </tr>
                     </thead>
                     <tbody className="bg-white text-[10px] divide-y divide-gray-100 text-gray-600">
                        <tr><td className="p-1.5 font-bold">Oficina Master</td><td className="p-1.5"><span className="px-2 py-0.5 bg-blue-100 text-blue-800 rounded">Mensagem enviada</span></td></tr>
                        <tr><td className="p-1.5 font-bold">Estética Bela</td><td className="p-1.5"><span className="px-2 py-0.5 bg-green-100 text-green-800 rounded">Fechado</span></td></tr>
                        <tr><td className="p-1.5 font-bold">Dr. Carlos</td><td className="p-1.5"><span className="px-2 py-0.5 bg-yellow-100 text-yellow-800 rounded">Visualizou</span></td></tr>
                     </tbody>
                   </table>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
