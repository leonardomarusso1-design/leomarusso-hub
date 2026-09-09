import * as ExcelJS from 'exceljs';
import { saveAs } from 'file-saver';

type Sheet = ExcelJS.Worksheet;

const colors = {
  bgDark: 'FF0F172A',
  cardDark: 'FF111827',
  blue: 'FF2563EB',
  cyan: 'FF06B6D4',
  green: 'FF22C55E',
  yellow: 'FFF59E0B',
  red: 'FFEF4444',
  purple: 'FF7C3AED',
  lightBg: 'FFF8FAFC',
  text: 'FF0F172A',
  muted: 'FF64748B',
  border: 'FFE2E8F0',
  white: 'FFFFFFFF',
  rowAlt: 'FFF1F5F9',
  gray: 'FFE5E7EB',
};

const baseFont = { name: 'Segoe UI', size: 11, color: { argb: colors.text } };
const headerFont = { name: 'Segoe UI', size: 11, bold: true, color: { argb: colors.white } };

function fill(cell: ExcelJS.Cell, argb: string) {
  cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb } };
}

function thinBorder(cell: ExcelJS.Cell, argb = colors.border) {
  cell.border = {
    top: { style: 'thin', color: { argb } },
    left: { style: 'thin', color: { argb } },
    bottom: { style: 'thin', color: { argb } },
    right: { style: 'thin', color: { argb } },
  };
}

function paintArea(ws: Sheet, rows: number, cols: number, argb = colors.lightBg) {
  for (let r = 1; r <= rows; r++) {
    for (let c = 1; c <= cols; c++) {
      fill(ws.getCell(r, c), argb);
    }
  }
}

function title(ws: Sheet, range: string, text: string, dark = true) {
  ws.mergeCells(range);
  const cell = ws.getCell(range.split(':')[0]);
  cell.value = text;
  cell.font = { name: 'Segoe UI', size: 18, bold: true, color: { argb: dark ? colors.white : colors.text } };
  cell.alignment = { vertical: 'middle', horizontal: 'center' };
  fill(cell, dark ? colors.bgDark : colors.white);
}

function setupHeader(row: ExcelJS.Row, startCol = 1) {
  row.eachCell((cell, col) => {
    if (col >= startCol && cell.value !== '') {
      fill(cell, colors.bgDark);
      cell.font = headerFont;
      cell.alignment = { horizontal: 'center', vertical: 'middle', wrapText: true };
      thinBorder(cell, 'FF1E293B');
    }
  });
}

function zebra(ws: Sheet, firstRow: number, lastRow: number, firstCol: number, lastCol: number) {
  for (let r = firstRow; r <= lastRow; r++) {
    for (let c = firstCol; c <= lastCol; c++) {
      const cell = ws.getCell(r, c);
      if (r % 2 === 0) fill(cell, colors.white);
      else fill(cell, colors.rowAlt);
      cell.font = baseFont;
      cell.alignment = { vertical: 'top', wrapText: true };
      thinBorder(cell);
    }
  }
}

function addStatusFormatting(ws: Sheet, ref: string) {
  ws.addConditionalFormatting({
    ref,
    rules: [
      { type: 'containsText', operator: 'containsText', text: 'Não contatado', priority: 1, style: { fill: { type: 'pattern', pattern: 'solid', bgColor: { argb: 'FFCBD5E1' } }, font: { color: { argb: 'FF334155' } } } },
      { type: 'containsText', operator: 'containsText', text: 'Mensagem enviada', priority: 2, style: { fill: { type: 'pattern', pattern: 'solid', bgColor: { argb: 'FFDBEAFE' } }, font: { color: { argb: 'FF1D4ED8' } } } },
      { type: 'containsText', operator: 'containsText', text: 'Visualizou', priority: 3, style: { fill: { type: 'pattern', pattern: 'solid', bgColor: { argb: 'FFFEF3C7' } }, font: { color: { argb: 'FF92400E' } } } },
      { type: 'containsText', operator: 'containsText', text: 'Respondeu', priority: 4, style: { fill: { type: 'pattern', pattern: 'solid', bgColor: { argb: 'FFCFFAFE' } }, font: { color: { argb: 'FF0E7490' } } } },
      { type: 'containsText', operator: 'containsText', text: 'Interessado', priority: 5, style: { fill: { type: 'pattern', pattern: 'solid', bgColor: { argb: 'FFFFEDD5' } }, font: { color: { argb: 'FFC2410C' } } } },
      { type: 'containsText', operator: 'containsText', text: 'Orçamento enviado', priority: 6, style: { fill: { type: 'pattern', pattern: 'solid', bgColor: { argb: 'FFEDE9FE' } }, font: { color: { argb: colors.purple } } } },
      { type: 'containsText', operator: 'containsText', text: 'Fechado', priority: 7, style: { fill: { type: 'pattern', pattern: 'solid', bgColor: { argb: 'FFDCFCE7' } }, font: { color: { argb: 'FF166534' } } } },
      { type: 'containsText', operator: 'containsText', text: 'Perdido', priority: 8, style: { fill: { type: 'pattern', pattern: 'solid', bgColor: { argb: 'FFFEE2E2' } }, font: { color: { argb: 'FF991B1B' } } } },
      { type: 'containsText', operator: 'containsText', text: 'Follow-up', priority: 9, style: { fill: { type: 'pattern', pattern: 'solid', bgColor: { argb: 'FFFDE68A' } }, font: { color: { argb: 'FF92400E' } } } },
      { type: 'containsText', operator: 'containsText', text: 'Sem resposta', priority: 10, style: { fill: { type: 'pattern', pattern: 'solid', bgColor: { argb: 'FFF1F5F9' } }, font: { color: { argb: colors.muted } } } },
    ],
  } as any);
}

function setValidation(cell: ExcelJS.Cell, list: string) {
  cell.dataValidation = { type: 'list', allowBlank: true, formulae: [`"${list}"`] };
}

function metricCard(ws: Sheet, range: string, label: string, value: string | number | ExcelJS.CellFormulaValue, accent: string, format?: string) {
  const [start, end] = range.split(':');
  ws.mergeCells(range);
  const cell = ws.getCell(start);
  cell.value = label;
  cell.font = { name: 'Segoe UI', size: 10, bold: true, color: { argb: colors.white } };
  cell.alignment = { horizontal: 'center', vertical: 'top', wrapText: true };
  fill(cell, colors.cardDark);
  thinBorder(cell, accent);

  const valueRow = Number(start.match(/\d+/)?.[0]) + 1;
  const col = start.replace(/\d+/, '');
  const valueCell = ws.getCell(`${col}${valueRow}`);
  valueCell.value = value as any;
  valueCell.font = { name: 'Segoe UI', size: 18, bold: true, color: { argb: accent } };
  valueCell.alignment = { horizontal: 'center', vertical: 'middle' };
  fill(valueCell, colors.cardDark);
  if (format) valueCell.numFmt = format;
}

export async function downloadSpreadsheet() {
  const wb = new ExcelJS.Workbook();
  wb.creator = 'Kit de Execução da Primeira Oferta';
  wb.created = new Date();
  wb.modified = new Date();
  wb.calcProperties.fullCalcOnLoad = true;

  const wsStart = wb.addWorksheet('Comece Aqui', { properties: { tabColor: { argb: colors.cyan } } });
  const wsDash = wb.addWorksheet('Dashboard', { properties: { tabColor: { argb: colors.bgDark } } });
  const wsCRM = wb.addWorksheet('CRM', { properties: { tabColor: { argb: colors.blue } }, views: [{ state: 'frozen', ySplit: 4 }] });
  const wsFU = wb.addWorksheet('Follow-up', { properties: { tabColor: { argb: colors.yellow } }, views: [{ state: 'frozen', ySplit: 6 }] });
  const wsFinance = wb.addWorksheet('Fechamentos', { properties: { tabColor: { argb: colors.green } }, views: [{ state: 'frozen', ySplit: 5 }] });
  const wsServices = wb.addWorksheet('Serviços', { properties: { tabColor: { argb: colors.cyan } }, views: [{ state: 'frozen', ySplit: 4 }] });
  const wsScripts = wb.addWorksheet('Scripts', { properties: { tabColor: { argb: colors.purple } }, views: [{ state: 'frozen', ySplit: 4 }] });
  const wsIdeas = wb.addWorksheet('Ideias', { properties: { tabColor: { argb: colors.muted } }, views: [{ state: 'frozen', ySplit: 4 }] });
  const wsConfig = wb.addWorksheet('Configurações', { properties: { tabColor: { argb: colors.red } } });

  // 1. Comece Aqui
  paintArea(wsStart, 32, 8, colors.lightBg);
  wsStart.columns = [{ width: 4 }, { width: 22 }, { width: 22 }, { width: 22 }, { width: 22 }, { width: 22 }, { width: 4 }, { width: 4 }];
  title(wsStart, 'B2:F4', 'PLANILHA MATADORA DE PROSPECÇÃO');
  wsStart.mergeCells('B5:F6');
  wsStart.getCell('B5').value = 'Use esta planilha como um mini CRM para organizar contatos, mensagens, follow-ups, fechamentos e ideias de micro serviços.';
  wsStart.getCell('B5').font = { name: 'Segoe UI', size: 12, color: { argb: colors.muted } };
  wsStart.getCell('B5').alignment = { horizontal: 'center', vertical: 'middle', wrapText: true };

  wsStart.mergeCells('B8:F17');
  const stepsCell = wsStart.getCell('B8');
  stepsCell.value = [
    'PASSO A PASSO',
    '',
    '1. Configure suas metas na aba Configurações.',
    '2. Cadastre seus leads na aba CRM.',
    '3. Atualize status, datas e próximos follow-ups.',
    '4. Veja quem precisa de retorno na aba Follow-up.',
    '5. Registre vendas na aba Fechamentos.',
    '6. Use Scripts e Ideias para acelerar a prospecção.',
    '7. Acompanhe tudo no Dashboard.',
  ].join('\n');
  stepsCell.font = { name: 'Segoe UI', size: 13, color: { argb: colors.text } };
  stepsCell.alignment = { vertical: 'middle', wrapText: true };
  fill(stepsCell, colors.white);
  thinBorder(stepsCell);

  wsStart.mergeCells('B19:F24');
  const warningCell = wsStart.getCell('B19');
  warningCell.value = 'IMPORTANTE\n\nNão apague fórmulas.\nPreencha apenas as células indicadas.\nUse os menus suspensos para manter o dashboard funcionando.';
  warningCell.font = { name: 'Segoe UI', size: 13, bold: true, color: { argb: colors.text } };
  warningCell.alignment = { vertical: 'middle', wrapText: true };
  fill(warningCell, 'FFFFFBEB');
  thinBorder(warningCell, colors.yellow);

  // 9. Configurações
  paintArea(wsConfig, 24, 5);
  wsConfig.columns = [{ width: 4 }, { width: 34 }, { width: 18 }, { width: 58 }, { width: 4 }];
  title(wsConfig, 'B2:D3', 'CONFIGURAÇÕES DO CRM');
  wsConfig.getRow(5).values = ['', 'Campo', 'Valor', 'Descrição'];
  setupHeader(wsConfig.getRow(5), 2);
  const configs: Array<[string, number, string]> = [
    ['Meta mensal de contatos', 100, 'Quantidade de leads que deseja cadastrar no mês.'],
    ['Meta mensagens enviadas', 80, 'Quantidade de primeiras mensagens ou abordagens.'],
    ['Meta respostas', 30, 'Quantidade esperada de pessoas respondendo.'],
    ['Meta fechamentos', 5, 'Quantidade de vendas fechadas.'],
    ['Meta faturamento', 2000, 'Valor de venda desejado no mês.'],
    ['Valor hora base', 30, 'Referência para precificação.'],
    ['Dias 1º follow-up', 2, 'Primeiro retorno sugerido.'],
    ['Dias 2º follow-up', 5, 'Segundo retorno sugerido.'],
    ['Dias 3º follow-up', 10, 'Terceiro retorno sugerido.'],
  ];
  configs.forEach((item, idx) => {
    const r = idx + 6;
    wsConfig.getRow(r).values = ['', ...item];
    fill(wsConfig.getCell(`C${r}`), 'FFFFFBEB');
    if (r === 10 || r === 11) wsConfig.getCell(`C${r}`).numFmt = '"R$" #,##0.00';
  });
  zebra(wsConfig, 6, 14, 2, 4);
  wsConfig.getCell('C10').numFmt = '"R$" #,##0.00';
  wsConfig.getCell('C11').numFmt = '"R$" #,##0.00';

  // 3. CRM
  paintArea(wsCRM, 505, 18);
  wsCRM.columns = [
    { width: 7 }, { width: 26 }, { width: 20 }, { width: 18 }, { width: 20 }, { width: 18 },
    { width: 18 }, { width: 32 }, { width: 24 }, { width: 13 }, { width: 12 }, { width: 16 },
    { width: 16 }, { width: 16 }, { width: 18 }, { width: 22 }, { width: 32 }, { width: 34 },
  ];
  title(wsCRM, 'A1:R2', 'CRM DE PROSPECÇÃO');
  const crmHeaders = ['ID', 'Nome do negócio', 'Nicho', 'Cidade', 'Instagram', 'WhatsApp', 'Origem', 'Problema observado', 'Serviço sugerido', 'Prioridade', 'Lead Score', 'Valor proposto', 'Data 1º contato', 'Último contato', 'Próximo follow-up', 'Status', 'Resposta/Resumo', 'Observações'];
  wsCRM.getRow(4).values = crmHeaders;
  setupHeader(wsCRM.getRow(4));
  zebra(wsCRM, 5, 500, 1, 18);
  wsCRM.autoFilter = 'A4:R500';

  const origem = 'Instagram,Google Maps,Indicação,WhatsApp,Facebook,YouTube,Presencial,Outro';
  const prioridade = 'Alta,Média,Baixa';
  const servicos = 'Plaquinha Google,Plaquinha Pix,Plaquinha Wi-Fi,BioSite,Site simples,Fotos com IA,Edição de vídeos curtos,Cardápio digital,Google Meu Negócio,Outro';
  const status = 'Não contatado,Mensagem enviada,Visualizou,Respondeu,Interessado,Orçamento enviado,Fechado,Perdido,Follow-up,Sem resposta';
  for (let r = 5; r <= 500; r++) {
    wsCRM.getCell(`A${r}`).value = r - 4;
    setValidation(wsCRM.getCell(`G${r}`), origem);
    setValidation(wsCRM.getCell(`I${r}`), servicos);
    setValidation(wsCRM.getCell(`J${r}`), prioridade);
    setValidation(wsCRM.getCell(`P${r}`), status);
    wsCRM.getCell(`K${r}`).value = {
      formula: `IF(P${r}="","",MIN(10,IF(P${r}="Fechado",10,IF(P${r}="Orçamento enviado",8,IF(P${r}="Interessado",7,IF(P${r}="Respondeu",5,IF(P${r}="Visualizou",3,IF(P${r}="Mensagem enviada",2,IF(P${r}="Follow-up",4,IF(P${r}="Sem resposta",1,0))))))))+IF(J${r}="Alta",2,IF(J${r}="Média",1,0))))`,
    };
    wsCRM.getCell(`K${r}`).alignment = { horizontal: 'center' };
    wsCRM.getCell(`L${r}`).numFmt = '"R$" #,##0.00';
    ['M', 'N', 'O'].forEach((col) => { wsCRM.getCell(`${col}${r}`).numFmt = 'dd/mm/yyyy'; });
  }
  const today = new Date();
  const before = new Date(Date.now() - 3 * 86400000);
  const after = new Date(Date.now() + 2 * 86400000);
  [
    [1, 'Barbearia Alpha', 'Barbearia', 'Curitiba', '@barbeariaalpha', '(41) 99999-0001', 'Instagram', 'Poucas avaliações no Google', 'Plaquinha Google', 'Alta', null, 97, before, before, today, 'Follow-up', 'Viu o exemplo e pediu preço', 'Exemplo fictício. Pode apagar.'],
    [2, 'Clínica Bela Face', 'Estética', 'São Paulo', '@belaface', '(11) 99999-0002', 'Google Maps', 'Perfil com fotos fracas', 'Fotos com IA', 'Alta', null, 250, before, today, after, 'Interessado', 'Quer ver antes e depois', 'Exemplo fictício. Pode apagar.'],
    [3, 'Studio Fit', 'Academia', 'Rio de Janeiro', '@studiofit', '(21) 99999-0003', 'Indicação', 'Bio confusa e links quebrados', 'BioSite', 'Média', null, 397, before, before, before, 'Orçamento enviado', 'Recebeu proposta', 'Exemplo fictício. Pode apagar.'],
    [4, 'Loja Moda Viva', 'Loja de roupas', 'Belo Horizonte', '@modaviva', '(31) 99999-0004', 'Presencial', 'Stories sem padrão visual', 'Edição de vídeos curtos', 'Baixa', null, 300, today, today, after, 'Mensagem enviada', '', 'Exemplo fictício. Pode apagar.'],
    [5, 'Pizzaria Forno Alto', 'Pizzaria', 'Porto Alegre', '@fornoalto', '(51) 99999-0005', 'Google Maps', 'Cardápio antigo em PDF', 'Cardápio digital', 'Média', null, 350, before, before, before, 'Respondeu', 'Pediu detalhes', 'Exemplo fictício. Pode apagar.'],
  ].forEach((row, idx) => { wsCRM.getRow(idx + 5).values = row; });
  addStatusFormatting(wsCRM, 'P5:P500');
  wsCRM.addConditionalFormatting({
    ref: 'O5:O500',
    rules: [
      { type: 'expression', priority: 1, formulae: ['AND(O5<>"",O5<TODAY())'], style: { fill: { type: 'pattern', pattern: 'solid', bgColor: { argb: 'FFFEE2E2' } }, font: { color: { argb: 'FF991B1B' } } } },
      { type: 'expression', priority: 2, formulae: ['AND(O5<>"",O5=TODAY())'], style: { fill: { type: 'pattern', pattern: 'solid', bgColor: { argb: 'FFFEF3C7' } }, font: { color: { argb: 'FF92400E' } } } },
      { type: 'expression', priority: 3, formulae: ['AND(O5<>"",O5>TODAY())'], style: { fill: { type: 'pattern', pattern: 'solid', bgColor: { argb: 'FFDCFCE7' } }, font: { color: { argb: 'FF166534' } } } },
    ],
  } as any);
  wsCRM.addConditionalFormatting({
    ref: 'K5:K500',
    rules: [{ type: 'colorScale', priority: 1, cfvo: [{ type: 'num', value: 0 }, { type: 'num', value: 5 }, { type: 'num', value: 10 }], color: [{ argb: colors.red }, { argb: colors.yellow }, { argb: colors.green }] }],
  } as any);

  // 4. Follow-up
  paintArea(wsFU, 505, 11);
  wsFU.columns = [{ width: 4 }, { width: 25 }, { width: 18 }, { width: 18 }, { width: 20 }, { width: 22 }, { width: 18 }, { width: 16 }, { width: 16 }, { width: 42 }, { width: 34 }];
  title(wsFU, 'A1:K2', 'FOLLOW-UPS PRIORITÁRIOS');
  metricCard(wsFU, 'B4:C4', 'Follow-ups vencidos', { formula: 'COUNTIFS(CRM!O5:O500,"<"&TODAY(),CRM!O5:O500,"<>",CRM!P5:P500,"<>Fechado",CRM!P5:P500,"<>Perdido")' }, colors.red);
  metricCard(wsFU, 'E4:F4', 'Follow-ups para hoje', { formula: 'COUNTIFS(CRM!O5:O500,TODAY(),CRM!P5:P500,"<>Fechado",CRM!P5:P500,"<>Perdido")' }, colors.yellow);
  metricCard(wsFU, 'H4:I4', 'Interessados para retomar', { formula: 'COUNTIFS(CRM!P5:P500,"Interessado",CRM!O5:O500,"<="&TODAY())' }, colors.green);
  wsFU.getRow(7).values = ['Nome', 'Nicho', 'WhatsApp', 'Instagram', 'Serviço', 'Status', 'Último contato', 'Dias sem resposta', 'Próximo follow-up', 'Mensagem sugerida', 'Observações'];
  setupHeader(wsFU.getRow(7));
  zebra(wsFU, 8, 500, 1, 11);
  wsFU.autoFilter = 'A7:K500';
  for (let r = 8; r <= 500; r++) {
    const crmRow = r - 3;
    const show = `AND(CRM!O${crmRow}<>"",CRM!O${crmRow}<=TODAY(),CRM!P${crmRow}<>"Fechado",CRM!P${crmRow}<>"Perdido",CRM!B${crmRow}<>"")`;
    wsFU.getCell(`A${r}`).value = { formula: `IF(${show},CRM!B${crmRow},"")` };
    wsFU.getCell(`B${r}`).value = { formula: `IF(${show},CRM!C${crmRow},"")` };
    wsFU.getCell(`C${r}`).value = { formula: `IF(${show},CRM!F${crmRow},"")` };
    wsFU.getCell(`D${r}`).value = { formula: `IF(${show},CRM!E${crmRow},"")` };
    wsFU.getCell(`E${r}`).value = { formula: `IF(${show},CRM!I${crmRow},"")` };
    wsFU.getCell(`F${r}`).value = { formula: `IF(${show},CRM!P${crmRow},"")` };
    wsFU.getCell(`G${r}`).value = { formula: `IF(${show},CRM!N${crmRow},"")` };
    wsFU.getCell(`H${r}`).value = { formula: `IF(A${r}="","",TODAY()-G${r})` };
    wsFU.getCell(`I${r}`).value = { formula: `IF(${show},CRM!O${crmRow},"")` };
    wsFU.getCell(`J${r}`).value = { formula: `IF(A${r}="","",IF(F${r}="Mensagem enviada","Oi, tudo bem? Passando para saber se conseguiu ver a ideia que te mandei.",IF(F${r}="Interessado","Oi, consegui separar um exemplo visual para você analisar. Posso te mandar?",IF(F${r}="Orçamento enviado","Oi, tudo bem? Conseguiu avaliar a proposta? Posso ajustar algo para ficar melhor pra você?","Oi, tudo bem? Passando para retomar nossa conversa."))))` };
    wsFU.getCell(`K${r}`).value = { formula: `IF(${show},CRM!R${crmRow},"")` };
    ['G', 'I'].forEach((col) => { wsFU.getCell(`${col}${r}`).numFmt = 'dd/mm/yyyy'; });
  }
  addStatusFormatting(wsFU, 'F8:F500');

  // 5. Fechamentos
  paintArea(wsFinance, 305, 11);
  wsFinance.columns = [{ width: 25 }, { width: 22 }, { width: 14 }, { width: 14 }, { width: 14 }, { width: 14 }, { width: 20 }, { width: 18 }, { width: 18 }, { width: 14 }, { width: 34 }];
  title(wsFinance, 'A1:K2', 'FECHAMENTOS E FATURAMENTO');
  metricCard(wsFinance, 'A4:B4', 'Total vendido', { formula: 'SUM(C8:C300)' }, colors.green, '"R$" #,##0.00');
  metricCard(wsFinance, 'C4:D4', 'Total de custos', { formula: 'SUM(D8:D300)' }, colors.red, '"R$" #,##0.00');
  metricCard(wsFinance, 'E4:F4', 'Lucro estimado', { formula: 'SUM(E8:E300)' }, colors.cyan, '"R$" #,##0.00');
  metricCard(wsFinance, 'G4:H4', 'Ticket médio', { formula: 'IFERROR(AVERAGE(C8:C300),0)' }, colors.yellow, '"R$" #,##0.00');
  metricCard(wsFinance, 'I4:J4', 'Fechamentos', { formula: 'COUNTA(A8:A300)' }, colors.purple);
  wsFinance.getRow(7).values = ['Cliente', 'Serviço', 'Valor', 'Custo', 'Lucro', 'Data', 'Forma pagamento', 'Status pagamento', 'Entrega concluída?', 'Data entrega', 'Observações'];
  setupHeader(wsFinance.getRow(7));
  zebra(wsFinance, 8, 300, 1, 11);
  wsFinance.autoFilter = 'A7:K300';
  for (let r = 8; r <= 300; r++) {
    wsFinance.getCell(`E${r}`).value = { formula: `IF(C${r}="","",C${r}-D${r})` };
    ['C', 'D', 'E'].forEach((col) => { wsFinance.getCell(`${col}${r}`).numFmt = '"R$" #,##0.00'; });
    ['F', 'J'].forEach((col) => { wsFinance.getCell(`${col}${r}`).numFmt = 'dd/mm/yyyy'; });
    setValidation(wsFinance.getCell(`G${r}`), 'Pix,Cartão,Dinheiro,Transferência,Outro');
    setValidation(wsFinance.getCell(`H${r}`), 'Pago,Pendente,Atrasado,Cancelado');
    setValidation(wsFinance.getCell(`I${r}`), 'Sim,Não,Parcial');
  }
  wsFinance.addConditionalFormatting({
    ref: 'E8:E300',
    rules: [{ type: 'cellIs', operator: 'greaterThan', formulae: ['0'], priority: 1, style: { font: { color: { argb: 'FF166534' } } } }],
  } as any);
  wsFinance.addConditionalFormatting({
    ref: 'H8:H300',
    rules: [
      { type: 'containsText', operator: 'containsText', text: 'Pago', priority: 1, style: { fill: { type: 'pattern', pattern: 'solid', bgColor: { argb: 'FFDCFCE7' } } } },
      { type: 'containsText', operator: 'containsText', text: 'Pendente', priority: 2, style: { fill: { type: 'pattern', pattern: 'solid', bgColor: { argb: 'FFFEF3C7' } } } },
      { type: 'containsText', operator: 'containsText', text: 'Atrasado', priority: 3, style: { fill: { type: 'pattern', pattern: 'solid', bgColor: { argb: 'FFFEE2E2' } } } },
    ],
  } as any);

  // 6. Serviços
  paintArea(wsServices, 40, 9);
  wsServices.columns = [{ width: 24 }, { width: 38 }, { width: 15 }, { width: 15 }, { width: 16 }, { width: 16 }, { width: 15 }, { width: 16 }, { width: 34 }];
  title(wsServices, 'A1:I2', 'SERVIÇOS E PREÇOS BASE');
  wsServices.getRow(4).values = ['Serviço', 'Descrição simples', 'Preço mínimo', 'Preço ideal', 'Preço premium', 'Custo estimado', 'Lucro ideal', 'Tempo médio', 'Observações'];
  setupHeader(wsServices.getRow(4));
  const services = [
    ['Plaquinha Google', 'QR Code/NFC para avaliação no Google', 64.9, 97, 129.9, 35, null, '1 dia', 'Bom para comércio local'],
    ['Plaquinha Pix', 'QR Code/NFC para pagamento rápido', 49.9, 77, 127, 25, null, '1 dia', 'Bom para balcões e entregas'],
    ['Plaquinha Wi-Fi', 'Acesso fácil à rede sem digitar senha', 49.9, 77, 127, 25, null, '1 dia', 'Bom para clínicas e restaurantes'],
    ['BioSite', 'Página de links com visual profissional', 197, 397, 597, 25, null, '1 dia', 'Bom para Instagram'],
    ['Site simples', 'Landing page de apresentação', 600, 1200, 2500, 80, null, '5 dias', 'Cobrar mais por copy e fotos'],
    ['Fotos com IA', 'Fotos profissionais geradas a partir de selfies', 150, 250, 500, 40, null, '1 dia', 'Ótimo apelo visual'],
    ['Edição de vídeos curtos', 'Cortes, legenda e acabamento para reels', 150, 300, 600, 0, null, '2 dias', 'Vender pacotes mensais'],
    ['Cardápio digital', 'Cardápio em QR Code ou página simples', 150, 350, 800, 30, null, '3 dias', 'Bom para restaurantes'],
    ['Google Meu Negócio', 'Organização e melhoria do perfil local', 300, 600, 1500, 0, null, '3 dias', 'Foco em presença no Maps'],
  ];
  services.forEach((row, idx) => {
    const r = idx + 5;
    wsServices.getRow(r).values = row;
    wsServices.getCell(`G${r}`).value = { formula: `D${r}-F${r}` };
    ['C', 'D', 'E', 'F', 'G'].forEach((col) => { wsServices.getCell(`${col}${r}`).numFmt = '"R$" #,##0.00'; });
  });
  zebra(wsServices, 5, 13, 1, 9);
  wsServices.autoFilter = 'A4:I13';

  // 7. Scripts
  paintArea(wsScripts, 25, 6);
  wsScripts.columns = [{ width: 28 }, { width: 24 }, { width: 48 }, { width: 62 }, { width: 28 }, { width: 34 }];
  title(wsScripts, 'A1:F2', 'SCRIPTS DE WHATSAPP');
  wsScripts.getRow(4).values = ['Situação', 'Objetivo', 'Mensagem curta', 'Mensagem explicada', 'Quando usar', 'Observação'];
  setupHeader(wsScripts.getRow(4));
  const scripts = [
    ['Primeiro contato para plaquinha Google', 'Abrir conversa', 'Oi, tudo bem? Vi que vocês têm atendimento presencial e pensei em uma forma simples de facilitar avaliações no Google. Posso te mandar um exemplo?', 'Oi, tudo bem? Vi o perfil de vocês e percebi que muitos clientes provavelmente saem satisfeitos, mas não deixam avaliação no Google. Eu faço uma plaquinha com QR Code que facilita isso no balcão. Posso te mandar um exemplo visual?', 'Comércios com atendimento local', 'Fale como alguém da cidade.'],
    ['Primeiro contato para fotos IA', 'Mostrar autoridade', 'Oi, tudo bem? Vi seu perfil e pensei em uma forma simples de deixar sua foto mais profissional. Posso te mandar um exemplo?', 'Oi, tudo bem? Vi seu trabalho e pensei que fotos mais profissionais poderiam passar ainda mais confiança. Eu faço ensaios com IA a partir de selfies comuns. Posso te mandar um antes e depois?', 'Profissionais liberais', 'Use exemplo visual.'],
    ['Primeiro contato para BioSite', 'Organizar links', 'Oi, tudo bem? Vi sua bio e acho que dá para deixar os links mais claros para quem quer chamar ou agendar. Posso te mostrar um modelo?', 'Oi, tudo bem? Vi seu Instagram e notei que os links poderiam ficar mais simples para o cliente entender. Eu monto um BioSite direto, bonito e fácil de usar. Quer ver um exemplo?', 'Perfis com muitos links', 'Sem criticar demais.'],
    ['Primeiro contato para site simples', 'Gerar interesse', 'Oi, tudo bem? Vi seu negócio e senti falta de uma página simples explicando serviços, localização e contato. Posso te mandar uma ideia?', 'Oi, tudo bem? Encontrei vocês e pensei que uma página simples poderia ajudar quem pesquisa antes de chamar no WhatsApp. Nada complicado, só um site direto e bonito. Posso te mostrar um rascunho?', 'Negócios sem site', 'Foque no básico que vende.'],
    ['Primeiro contato para vídeos curtos', 'Vender recorrência', 'Oi, tudo bem? Vi seus vídeos e acho que dá para deixar os cortes mais rápidos e fáceis de assistir. Posso te mandar um exemplo?', 'Oi, tudo bem? Vi alguns posts e pensei em uma edição mais limpa, com cortes e legenda para prender mais atenção. Trabalho com pacotes de vídeos curtos. Posso te mandar um exemplo?', 'Quem já posta reels', 'Mostre antes/depois.'],
    ['Resposta quando pergunta preço', 'Apresentar valor', 'Fica R$ [valor] e eu te entrego em [prazo]. Se fizer sentido, já separo sua vaga de produção.', 'Para fazer bem feito, com o exemplo visual e entrega em [prazo], fica R$ [valor]. Eu já deixo tudo pronto para você usar. Quer que eu te mande o Pix para reservar?', 'Quando já houve interesse', 'Seja direto.'],
    ['Resposta quando diz vou pensar', 'Entender objeção', 'Claro. Só para eu entender: ficou mais por valor, prazo ou dúvida se isso serve para você?', 'Claro, sem problema. Antes de eu encerrar aqui, me ajuda a entender uma coisa: ficou mais por valor, prazo ou dúvida se isso realmente ajuda seu negócio? Assim eu te respondo certo.', 'Depois de objeção educada', 'Não pressione.'],
    ['Follow-up 24h', 'Retomar leve', 'Oi, tudo bem? Passando só para saber se conseguiu ver a ideia que te mandei ontem.', 'Oi, tudo bem? Sei que a rotina é corrida. Passando só para saber se conseguiu ver a ideia que te mandei ontem. Se quiser, eu resumo em áudio também.', 'Um dia depois', 'Tom leve.'],
    ['Follow-up 3 dias', 'Retomar com clareza', 'Oi, tudo bem? Ainda faz sentido eu separar esse modelo para você ou deixo para outro momento?', 'Oi, tudo bem? Passei para retomar rapidinho. Ainda faz sentido eu separar esse modelo para você ou prefere que eu deixe para outro momento?', 'Três dias depois', 'Dá saída fácil.'],
    ['Fechamento', 'Pedir pagamento', 'Excelente. Para eu garantir seu prazo, pode mandar o Pix para [chave]. Assim que cair, começo hoje.', 'Excelente. Para eu garantir seu prazo na minha agenda, pode mandar o Pix para [chave]. Assim que cair, te envio as perguntas finais e começo hoje.', 'Depois do sim', 'Sem enrolar.'],
    ['Pós-venda', 'Encantar e validar', 'Pronto, entregue. Confere com calma e me chama se quiser algum ajuste fino.', 'Pronto, entregue. Confere com calma e me chama se quiser algum ajuste fino. Quero deixar isso redondo para você usar sem dor de cabeça.', 'Ao entregar', 'Abre espaço para ajuste.'],
    ['Pedido de indicação', 'Gerar novo lead', 'Que bom que curtiu. Conhece alguém que também precisa disso? Se lembrar de um nome, já me ajuda muito.', 'Fico feliz que tenha curtido. Conhece alguém que também precisa disso no negócio? Se lembrar de um nome, já me ajuda muito e eu abordo com cuidado.', 'Após cliente satisfeito', 'Peça de forma simples.'],
  ];
  scripts.forEach((row, idx) => { wsScripts.getRow(idx + 5).values = row; });
  zebra(wsScripts, 5, 16, 1, 6);
  wsScripts.autoFilter = 'A4:F16';

  // 8. Ideias
  paintArea(wsIdeas, 30, 8);
  wsIdeas.columns = [{ width: 22 }, { width: 34 }, { width: 30 }, { width: 18 }, { width: 14 }, { width: 14 }, { width: 24 }, { width: 34 }];
  title(wsIdeas, 'A1:H2', 'BANCO DE IDEIAS DE MICRO SERVIÇOS');
  wsIdeas.getRow(4).values = ['Nicho', 'Problema comum', 'Serviço possível', 'Preço sugerido', 'Dificuldade', 'Tempo', 'Ferramentas', 'Observações'];
  setupHeader(wsIdeas.getRow(4));
  const ideas = [
    ['Barbearia', 'Poucas avaliações no Google', 'Plaquinha Google', 'R$64 a R$129', 'Baixa', '1 dia', 'Canva, QR Code, NFC', 'Abordar com exemplo visual.'],
    ['Salão de beleza', 'Links e agenda confusos', 'BioSite', 'R$197 a R$397', 'Baixa', '1 dia', 'Canva, Carrd', 'Mostrar modelo limpo.'],
    ['Restaurante', 'Cardápio velho ou ilegível', 'Cardápio digital', 'R$150 a R$800', 'Baixa', '3 dias', 'Canva, QR Code', 'Usar fotos reais.'],
    ['Pizzaria', 'Dependência de app de entrega', 'Site simples de pedidos', 'R$600 a R$1200', 'Média', '5 dias', 'WordPress, WhatsApp', 'Falar sobre taxas.'],
    ['Academia', 'Pouco conteúdo dos treinos', 'Vídeos curtos', 'R$300 a R$600', 'Média', '2 dias', 'CapCut, Canva', 'Vender pacote mensal.'],
    ['Clínica odontológica', 'Site antigo', 'Site simples', 'R$900 a R$2500', 'Alta', '5 dias', 'Framer, WordPress', 'Visual passa confiança.'],
    ['Estética', 'Serviços difíceis de entender', 'BioSite', 'R$197 a R$397', 'Baixa', '1 dia', 'Canva, Notion', 'Organizar pacotes.'],
    ['Personal trainer', 'Treinos em planilhas soltas', 'Portal simples do aluno', 'R$397 a R$697', 'Média', '5 dias', 'Notion, Sheets', 'Falar em organização.'],
    ['Corretor de imóveis', 'Foto de perfil fraca', 'Fotos com IA', 'R$150 a R$500', 'Baixa', '1 dia', 'IA de imagem', 'Grande impacto visual.'],
    ['Pet shop', 'Lembretes manuais', 'Planilha + WhatsApp', 'R$300 a R$600', 'Média', '4 dias', 'Sheets, Zapier', 'Vacina e banho recorrente.'],
    ['Oficina mecânica', 'Orçamentos pouco profissionais', 'Modelo de orçamento visual', 'R$150 a R$300', 'Baixa', '1 dia', 'Canva, Docs', 'Passar confiança.'],
    ['Loja de roupas', 'Stories sem padrão', 'Templates de stories', 'R$150 a R$297', 'Baixa', '2 dias', 'Canva', 'Vender pacote.'],
    ['Lanchonete', 'Cardápio desatualizado', 'Cardápio digital', 'R$150 a R$500', 'Baixa', '2 dias', 'Canva, QR Code', 'Fácil mostrar valor.'],
    ['Manicure', 'Agenda no direct', 'BioSite com agenda', 'R$197 a R$397', 'Baixa', '1 dia', 'Canva, Agenda', 'Foco em praticidade.'],
    ['Fotógrafo', 'Portfólio bagunçado', 'Página de portfólio', 'R$397 a R$900', 'Média', '3 dias', 'Pixieset, Carrd', 'Vender beleza visual.'],
    ['Nutricionista', 'Materiais sem design', 'E-book ou guia bonito', 'R$250 a R$600', 'Baixa', '2 dias', 'Canva', 'Ajuda na retenção.'],
    ['Psicólogo', 'Conteúdo pouco visto', 'Edição de vídeos curtos', 'R$300 a R$600', 'Média', 'Semanal', 'CapCut', 'Cuidado com linguagem.'],
    ['Advogado', 'Site sem autoridade', 'Site simples institucional', 'R$800 a R$2500', 'Alta', '5 dias', 'WordPress, Framer', 'Respeitar regras da OAB.'],
    ['Designer iniciante', 'Dificuldade de prospectar', 'Mapeamento de leads', 'R$0 a R$150', 'Baixa', '1 hora', 'Google Maps', 'Usar para portfólio.'],
    ['Prestador autônomo', 'Pouca presença local', 'Google Meu Negócio', 'R$300 a R$600', 'Média', '3 dias', 'Google Business', 'Serviço muito necessário.'],
  ];
  ideas.forEach((row, idx) => { wsIdeas.getRow(idx + 5).values = row; });
  zebra(wsIdeas, 5, 24, 1, 8);
  wsIdeas.autoFilter = 'A4:H24';

  // 2. Dashboard
  paintArea(wsDash, 36, 10, colors.bgDark);
  wsDash.columns = [{ width: 4 }, { width: 18 }, { width: 18 }, { width: 18 }, { width: 18 }, { width: 18 }, { width: 18 }, { width: 18 }, { width: 18 }, { width: 4 }];
  title(wsDash, 'B2:I3', 'DASHBOARD EXECUTIVO');
  metricCard(wsDash, 'B5:C5', 'Total de contatos', { formula: 'COUNTA(CRM!B5:B500)' }, colors.cyan);
  metricCard(wsDash, 'D5:E5', 'Mensagens enviadas', { formula: 'COUNTIF(CRM!P5:P500,"Mensagem enviada")+COUNTIF(CRM!P5:P500,"Visualizou")+COUNTIF(CRM!P5:P500,"Respondeu")+COUNTIF(CRM!P5:P500,"Interessado")+COUNTIF(CRM!P5:P500,"Orçamento enviado")+COUNTIF(CRM!P5:P500,"Fechado")' }, colors.blue);
  metricCard(wsDash, 'F5:G5', 'Respostas recebidas', { formula: 'COUNTIF(CRM!P5:P500,"Respondeu")+COUNTIF(CRM!P5:P500,"Interessado")+COUNTIF(CRM!P5:P500,"Orçamento enviado")+COUNTIF(CRM!P5:P500,"Fechado")' }, colors.green);
  metricCard(wsDash, 'H5:I5', 'Interessados', { formula: 'COUNTIF(CRM!P5:P500,"Interessado")+COUNTIF(CRM!P5:P500,"Orçamento enviado")' }, colors.yellow);
  metricCard(wsDash, 'B8:C8', 'Fechamentos', { formula: 'COUNTIF(CRM!P5:P500,"Fechado")' }, colors.green);
  metricCard(wsDash, 'D8:E8', 'Valor vendido', { formula: 'SUM(Fechamentos!C8:C300)' }, colors.green, '"R$" #,##0.00');
  metricCard(wsDash, 'F8:G8', 'Taxa de resposta', { formula: 'IFERROR(F6/D6,0)' }, colors.cyan, '0.0%');
  metricCard(wsDash, 'H8:I8', 'Taxa de fechamento', { formula: 'IFERROR(B9/B6,0)' }, colors.purple, '0.0%');
  metricCard(wsDash, 'B11:C11', 'Ticket médio', { formula: 'IFERROR(AVERAGE(Fechamentos!C8:C300),0)' }, colors.yellow, '"R$" #,##0.00');
  metricCard(wsDash, 'D11:E11', 'Follow-ups vencidos', { formula: 'COUNTIFS(CRM!O5:O500,"<"&TODAY(),CRM!O5:O500,"<>",CRM!P5:P500,"<>Fechado",CRM!P5:P500,"<>Perdido")' }, colors.red);

  wsDash.getCell('B15').value = 'FUNIL DE PROSPECÇÃO';
  wsDash.getCell('B15').font = { name: 'Segoe UI', size: 13, bold: true, color: { argb: colors.cyan } };
  wsDash.getRow(16).values = ['', 'Etapa', 'Total', 'Visual'];
  setupHeader(wsDash.getRow(16), 2);
  const funnel = [
    ['Total de contatos', 'B6'],
    ['Mensagens enviadas', 'D6'],
    ['Respostas', 'F6'],
    ['Interessados', 'H6'],
    ['Fechamentos', 'B9'],
  ];
  funnel.forEach(([label, ref], idx) => {
    const r = 17 + idx;
    wsDash.getCell(`B${r}`).value = label;
    wsDash.getCell(`C${r}`).value = { formula: ref };
    wsDash.getCell(`D${r}`).value = { formula: `REPT("█",MIN(30,IFERROR(C${r}/MAX($C$17:$C$21)*30,0)))` };
    wsDash.getCell(`D${r}`).font = { name: 'Segoe UI', size: 11, color: { argb: [colors.cyan, colors.blue, colors.green, colors.yellow, colors.purple][idx] } };
  });
  zebra(wsDash, 17, 21, 2, 4);

  wsDash.getCell('F15').value = 'STATUS DOS LEADS';
  wsDash.getCell('F15').font = { name: 'Segoe UI', size: 13, bold: true, color: { argb: colors.cyan } };
  wsDash.getRow(16).getCell(6).value = 'Status';
  wsDash.getRow(16).getCell(7).value = 'Total';
  setupHeader(wsDash.getRow(16), 6);
  ['Não contatado', 'Mensagem enviada', 'Visualizou', 'Respondeu', 'Interessado', 'Orçamento enviado', 'Fechado', 'Perdido', 'Follow-up', 'Sem resposta'].forEach((label, idx) => {
    const r = 17 + idx;
    wsDash.getCell(`F${r}`).value = label;
    wsDash.getCell(`G${r}`).value = { formula: `COUNTIF(CRM!P5:P500,F${r})` };
  });
  zebra(wsDash, 17, 26, 6, 7);
  addStatusFormatting(wsDash, 'F17:F26');

  wsDash.getCell('B24').value = 'METAS DO MÊS';
  wsDash.getCell('B24').font = { name: 'Segoe UI', size: 13, bold: true, color: { argb: colors.cyan } };
  wsDash.getRow(25).values = ['', 'Meta', 'Atual', 'Objetivo', 'Progresso', 'Barra'];
  setupHeader(wsDash.getRow(25), 2);
  [
    ['Meta de contatos', 'B6', 'Configurações!C6'],
    ['Meta de fechamentos', 'B9', 'Configurações!C9'],
    ['Meta de faturamento', 'D9', 'Configurações!C10'],
  ].forEach(([label, actual, goal], idx) => {
    const r = 26 + idx;
    wsDash.getCell(`B${r}`).value = label;
    wsDash.getCell(`C${r}`).value = { formula: actual };
    wsDash.getCell(`D${r}`).value = { formula: goal };
    wsDash.getCell(`E${r}`).value = { formula: `IFERROR(C${r}/D${r},0)` };
    wsDash.getCell(`E${r}`).numFmt = '0.0%';
    wsDash.getCell(`F${r}`).value = { formula: `REPT("█",MIN(30,E${r}*30))` };
    wsDash.getCell(`F${r}`).font = { color: { argb: [colors.cyan, colors.green, colors.yellow][idx] } };
    if (idx === 2) {
      wsDash.getCell(`C${r}`).numFmt = '"R$" #,##0.00';
      wsDash.getCell(`D${r}`).numFmt = '"R$" #,##0.00';
    }
  });
  zebra(wsDash, 26, 28, 2, 6);

  for (const ws of wb.worksheets) {
    ws.eachRow((row) => {
      row.height = Math.max(row.height || 18, 18);
      row.eachCell((cell) => {
        cell.font = cell.font || baseFont;
        cell.alignment = cell.alignment || { vertical: 'middle', wrapText: true };
      });
    });
    ws.pageSetup = { orientation: 'landscape', fitToPage: true, fitToWidth: 1, fitToHeight: 0 };
  }

  wb.views = [{ x: 0, y: 0, width: 10000, height: 20000, firstSheet: 0, activeTab: 0, visibility: 'visible' }];

  const buffer = await wb.xlsx.writeBuffer();
  const blob = new Blob([buffer as BlobPart], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
  saveAs(blob, 'Planilha_Matadora_de_Prospeccao_PRO.xlsx');
}
