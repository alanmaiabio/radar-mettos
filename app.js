// DATA: NEWSLETTER EDITIONS DATABASE
const editionsDatabase = {
  "14": {
    edition: "14",
    title: "⚡ RADAR METTOS – Edição #14",
    date: "Período: 19 de Maio a 26 de Maio, 2026",
    sec1: {
      title: "Jornada de Compra 100% Digital e Tour Virtual 3D B2B",
      trend: "Estudo recente da McKinsey aponta que 73% dos compradores e decisores de indústrias preferem interações de compra digitais ou híbridas, com forte rejeição a abordagens tradicionais sem suporte técnico online prévio.",
      impact: "Clientes que vendem maquinários pesados (ex: caldeiras, injetoras) precisam de tours técnicos 3D em suas páginas de destino. Páginas com apenas 'Fale Conosco' estão perdendo taxas de conversão de leads qualificados."
    },
    sec2: {
      title: "Remoção de Exclusões de Categorias Móveis nas Campanhas PMax",
      update: "O Google Ads descontinuou silenciosamente a configuração simples de exclusão manual de certas categorias de apps e jogos móveis dentro do painel padrão de campanhas de Performance Max (PMax).",
      action: "Gestores de tráfego devem utilizar o script de exclusão em massa via Google Ads Editor ou configurar a lista de exclusão de canais no nível da conta hoje mesmo para evitar cliques indevidos e desperdício de orçamento."
    },
    sec3: {
      title: "Consent Mode V2 Obrigatório e Ajustes GTM",
      alert: "O Google passou a penalizar ativamente listas de remarketing e lances automáticos de marcas que captam contatos de corporações multinacionais sem o Consent Mode V2 ativo no Google Tag Manager (GTM).",
      status: "Revisar todos os contêineres de GTM dos clientes de exportação industrial B2B. Implementar o Cookie Banner integrado com a API de Consentimento para garantir que a inteligência de lances continue operando no topo da performance."
    },
    sec4: {
      title: "Feira de Automação Industrial e Logística Internacional",
      date: "Próximos 15 dias: Início dos preparativos de marketing para a grande feira setorial (Ex: Expolog / Fenatran B2B).",
      opportunity: "Ótima oportunidade para clientes que fornecem empilhadeiras, esteiras inteligentes ou paletizadoras. Lançar campanha de captação de leads oferecendo 'Guia Prático de Eficiência Logística para Indústrias'. Disparar e-mail de nutrição para bases de leads frias."
    },
    sec5: {
      visuals: "Anúncios no Meta Ads de grandes indústrias mostram um forte padrão de vídeos técnicos rápidos (15s) em formato 'Behind the Scenes' da linha de fabricação, sem música comercial, apenas áudio original bem editado com legenda.",
      copy: "As copies focaram fortemente em garantias técnicas e suporte pós-venda. A palavra-chave da semana foi 'Minimização de Down-Time' e 'Garantia de Manutenção Contínua', superando abordagens baseadas apenas em preço baixo."
    },
    sec6: {
      title: "Gerador de Argumentos Técnicos de Venda (LinkedIn B2B)",
      prompt: `Você é um Copywriter B2B experiente focado no nicho industrial.
Quero que você transforme a seguinte ficha técnica em uma publicação altamente engajadora para o LinkedIn Ads, focada em diretores de operações.

Ficha Técnica do Cliente: [Inserir Ficha Técnica / Benefícios]

Estrutura da Copy:
1. Gancho de impacto financeiro (Foco em OPEX / Redução de paradas).
2. O problema oculto que a maioria dos diretores enfrenta na linha de produção.
3. Como nossa solução resolve isso (em 3 bullet points visuais e técnicos).
4. CTA convidando para falar com um engenheiro de aplicação.
Tom: Técnico, profissional, focado em ROI. Sem jargões exagerados de marketing.`
    }
  },
  "13": {
    edition: "13",
    title: "⚡ RADAR METTOS – Edição #13",
    date: "Período: 12 de Maio a 19 de Maio, 2026",
    sec1: {
      title: "Alta nos Custos de Matéria-Prima e Busca por Eficiência Energética",
      trend: "Relatórios de portais de indústrias mostram um aumento de 18% na busca por soluções de retrofit de maquinário para diminuição de consumo de energia devido a novas tarifas.",
      impact: "Clientes do nicho de energia solar industrial e manutenção devem focar seus anúncios na dor imediata da 'Redução de Custos na Conta de Luz Industrial', usando calculadoras de ROI de payback rápido nas Landing Pages."
    },
    sec2: {
      title: "Novo Formato de Lead Form Extension no YouTube Ads B2B",
      update: "O Google Ads liberou formulários de lead integrados diretamente no player de vídeo do YouTube para campanhas focadas em computadores desktop.",
      action: "Criar uma campanha piloto de vídeo institucional para nossos clientes de serviços industriais de alto ticket, captando o lead diretamente no vídeo sem atrito de carregamento de página externa."
    },
    sec3: {
      title: "API de Conversões do Meta (CAPI) via Servidor",
      alert: "Navegadores Safari e Chrome com bloqueadores de anúncios estão ocultando até 28% dos leads industriais B2B que preenchem formulários de contato padrão via pixel de navegador.",
      status: "Migrar todos os rastreamentos críticos de geração de leads para a API de Conversões da Mettos via Gateway do GTM Server-Side. Isso blindará nossos dados operacionais."
    },
    sec4: {
      title: "Dia Nacional da Indústria",
      date: "25 de Maio (Data Comemorativa Nacional).",
      opportunity: "Sugira aos clientes de maquinário e insumos uma campanha de reconhecimento: 'Homenagem a quem move o país'. Oferecer cupom de 10% de desconto na primeira compra de insumos técnicos para leads cadastrados no período."
    },
    sec5: {
      visuals: "A concorrência começou a usar renders fotorrealistas de alta fidelidade ao invés de fotos reais com baixa qualidade do catálogo antigo. Anúncios com fundo cinza limpo performaram melhor.",
      copy: "Mensagens centradas em 'Segurança e Conformidade Normativa (NR12, NR35)'. A conformidade com leis técnicas gera muito mais confiança em compras corporativas do que simples slogans."
    },
    sec6: {
      title: "Prompt de Copy para Landing Pages B2B Complexas",
      prompt: `Gere uma estrutura de Landing Page focada em conversão para um produto industrial complexo.
Estruture as seguintes seções:
- Hero Section: Proposta Única de Valor focada em Ganho de Eficiência.
- Prova de Autoridade: Certificações técnicas necessárias (ISO, NR).
- Grid de Benefícios: Problema na fábrica vs Solução de nossa tecnologia.
- FAQ técnico respondendo a dúvidas comuns de engenheiros compradores.`
    }
  },
  "12": {
    edition: "12",
    title: "⚡ RADAR METTOS – Edição #12",
    date: "Período: 05 de Maio a 12 de Maio, 2026",
    sec1: {
      title: "Descentralização de Centros Logísticos B2B",
      trend: "Expansão recorde de galpões logísticos no interior paulista e sul do país altera as rotas e prazos de entrega industriais.",
      impact: "Clientes fornecedores de soluções para galpões (piso epóxi, docas, portas rápidas) devem direcionar campanhas com geolocalização focada em áreas industriais de expansão rápida."
    },
    sec2: {
      title: "Audience Expansion Opcional do LinkedIn Campaign Manager",
      update: "O algoritmo de expansão de audiência do LinkedIn Ads agora vem ativado por padrão em campanhas novas, misturando perfis técnicos qualificados com estagiários e estudantes do setor.",
      action: "Orientar os gestores de tráfego a desmarcar ativamente a opção 'Habilitar Expansão de Público' em todas as campanhas B2B focadas em tomadores de decisão (C-Levels e Diretores) para otimizar o custo por lead qualificado (SQL)."
    },
    sec3: {
      title: "Integração RD Station com Webhooks de Qualificação de Lead",
      alert: "A lentidão na resposta comercial B2B (tempo de contato pós-lead) é de em média 36 horas no setor industrial, destruindo a conversão de leads frios.",
      status: "Implementar automação de webhooks instantâneos conectando o RD Station ao WhatsApp comercial da equipe de vendas dos clientes, reduzindo o tempo de resposta técnica para menos de 10 minutos."
    },
    sec4: {
      title: "Dia do Engenheiro de Produção",
      date: "Próximos 20 dias: Datas de conselhos profissionais e engenharias específicas.",
      opportunity: "Desenvolver e-book de co-marketing focado em produtividade de linha. Criar campanha de distribuição patrocinada no LinkedIn para cargos de 'Gerente de Produção', captando leads qualificados."
    },
    sec5: {
      visuals: "Infográficos técnicos comparativos gerando altíssimo engajamento orgânico e pago no LinkedIn. Layouts limpos, sem excesso de texto e usando esquemas de cores preto/branco/azul.",
      copy: "Termos técnicos específicos superando adjetivos vagos. Exemplo: Substituir 'Nossos inversores são excelentes' por 'Inversores com modulação de frequência de 15kW'."
    },
    sec6: {
      title: "Prompt de Simplificação de Ficha Técnica para Vendedores B2B",
      prompt: `Simplifique a seguinte lista técnica de especificações para que um vendedor de nível júnior consiga usar como argumentos comerciais rápidos pelo WhatsApp. Use analogias diretas de mercado.

Ficha Técnica: [Colar Ficha Técnica]`
    }
  }
};

// SANDBOX TEMPLATES
const sandboxTemplates = {
  linkedin: {
    prompt: `Você é um Copywriter B2B experiente focado no nicho industrial.
Quero que você transforme a seguinte ficha técnica em uma publicação altamente engajadora para o LinkedIn Ads, focada em diretores de operações.

Ficha Técnica do Cliente: {PRODUCT}

Estrutura da Copy:
1. Gancho de impacto financeiro (Foco em OPEX / Redução de paradas).
2. O problema oculto que a maioria dos diretores enfrenta na linha de produção.
3. Como nossa solução resolve isso (em 3 bullet points visuais e técnicos).
4. CTA convidando para falar com um engenheiro de aplicação.
Tom: Técnico, profissional, focado em ROI. Sem jargões exagerados de marketing. Público: {AUDIENCE}`,
    result: `🚀 [INSIGHT PARA DIRETORES DE OPERAÇÃO]

Sua linha de montagem está operando com 100% de capacidade, ou você está tolerando paradas inesperadas de manutenção que custam milhares de reais por hora?

No setor industrial, cada minuto de máquina parada é lucro que escorre pelo ralo. É por isso que desenvolvemos uma solução focada especificamente em {PRODUCT}.

Por que diretores de operação e engenheiros de manutenção de {AUDIENCE} estão fazendo a migração tecnológica hoje:

✅ Redução de Down-time: Tecnologia que se antecipa a falhas na linha.
✅ Eficiência Energética de Alto Padrão: Desempenho otimizado que reduz o consumo elétrico da planta em até 22%.
✅ Instalação Plug-and-Play: Sem necessidade de parar a produção para o setup.

Chega de combater incêndios operacionais e lidar com custos de reposição inflacionados. 

👉 Clique no link abaixo e solicite um diagnóstico de aplicação técnica gratuito diretamente com nossos engenheiros especialistas: [Falar com Engenheiro de Aplicação]`
  },
  landing: {
    prompt: `Escreva uma copy para a seção de herói (Hero Section) de uma Landing Page focada em vender {PRODUCT} para {AUDIENCE}.
Foque em uma chamada principal ultra-clara e um subtexto focado em ROI ou conformidade técnica.`,
    result: `🔥 [HERO SECTION DA LANDING PAGE]

[Título Principal - Headline]:
Aumente a Produtividade da sua Planta Industrial sem Elevar os Custos de Manutenção.

[Sub-título]:
Incorpore nossa solução de {PRODUCT} projetada sob medida para as demandas críticas de {AUDIENCE}. Segurança normativa, robustez industrial e payback garantido em até 8 meses.

[CTA Principal]:
👉 SOLICITAR PROPOSTA TÉCNICA PERSONALIZADA
[Botão Secundário]: Falar com Engenheiro no WhatsApp`
  },
  email: {
    prompt: `Escreva um e-mail de nutrição B2B (meio de funil) para apresentar os benefícios econômicos de {PRODUCT} para a base de contatos de {AUDIENCE}.`,
    result: `Assunto: O custo invisível das paradas técnicas na sua produção de {AUDIENCE}

Olá, tudo bem?

Se você atua na gestão de operações industriais, sabe que a eficiência não é apenas uma métrica no papel — é o que dita a competitividade da sua planta no final do mês.

Estudos recentes apontam que o desgaste prematuro de componentes operacionais é responsável por até 42% das paradas não programadas em linhas de {AUDIENCE}.

E a pergunta crítica é: quanto sua indústria perde a cada hora de máquina parada?

Para sanar este gargalo, projetamos nossa linha premium de {PRODUCT}. Diferente das soluções genéricas de prateleira, ela entrega:

1. Durabilidade Industrial Triplicada
2. Instalação e Calibração Rápida
3. Suporte de Engenharia Local

Gostaria de agendar uma demonstração sem compromisso de como podemos reduzir seu OPEX este mês?

Basta responder a este e-mail.

Forte abraço,
Engenheiro de Aplicação Mettos`
  }
};

// CURRENT STATE
let activeEdition = "14";

// INITIALIZATION
document.addEventListener("DOMContentLoaded", () => {
  renderEditionsList();
  loadEdition("14");
  loadSandboxTemplate("linkedin");
});

// RENDER SIDEBAR EDITIONS
function renderEditionsList() {
  const editionsList = document.getElementById("editions-list");
  editionsList.innerHTML = "";
  
  // Sort editions descending
  const sortedKeys = Object.keys(editionsDatabase).sort((a, b) => b - a);
  
  sortedKeys.forEach(key => {
    const item = editionsDatabase[key];
    const button = document.createElement("button");
    button.className = `edition-item ${key === activeEdition ? 'selected' : ''}`;
    button.id = `ed-btn-${key}`;
    button.onclick = () => loadEdition(key);
    button.innerHTML = `Edição #${key} – ${key === "14" ? "Atual" : "Passada"}`;
    editionsList.appendChild(button);
  });
}

// LOAD EDITION DATA TO MAIN CARD UI
function loadEdition(key) {
  activeEdition = key;
  const data = editionsDatabase[key];
  
  if (!data) return;
  
  // Update Selected Style
  document.querySelectorAll(".edition-item").forEach(btn => btn.classList.remove("selected"));
  const currentBtn = document.getElementById(`ed-btn-${key}`);
  if (currentBtn) currentBtn.classList.add("selected");
  
  // Fill text fields
  document.getElementById("newsletter-title").innerText = data.title;
  document.getElementById("newsletter-date").innerText = data.date;
  
  document.getElementById("sec-1-title").innerText = data.sec1.title;
  document.getElementById("sec-1-trend").innerText = data.sec1.trend;
  document.getElementById("sec-1-impact").innerText = data.sec1.impact;
  
  document.getElementById("sec-2-title").innerText = data.sec2.title;
  document.getElementById("sec-2-update").innerText = data.sec2.update;
  document.getElementById("sec-2-action").innerText = data.sec2.action;
  
  document.getElementById("sec-3-title").innerText = data.sec3.title;
  document.getElementById("sec-3-alert").innerText = data.sec3.alert;
  document.getElementById("sec-3-status").innerText = data.sec3.status;
  
  document.getElementById("sec-4-title").innerText = data.sec4.title;
  document.getElementById("sec-4-date").innerText = data.sec4.date;
  document.getElementById("sec-4-opportunity").innerText = data.sec4.opportunity;
  
  document.getElementById("sec-5-visuals").innerText = data.sec5.visuals;
  document.getElementById("sec-5-copy").innerText = data.sec5.copy;
  
  document.getElementById("sec-6-title").innerText = data.sec6.title;
  document.getElementById("sec-6-prompt").innerText = data.sec6.prompt;

  // Make sure we are in dashboard tab
  switchTab('dashboard');
}

// SWITCH ACTIVE TAB (DASHBOARD OR PROMPT SANDBOX)
function switchTab(tabName) {
  document.querySelectorAll(".tab-content").forEach(el => el.classList.remove("active"));
  document.querySelectorAll(".nav-btn").forEach(el => el.classList.remove("active"));
  
  document.getElementById(`tab-${tabName}`).classList.add("active");
  document.getElementById(`btn-${tabName}`).classList.add("active");
  
  const title = document.getElementById("current-tab-title");
  const subtitle = document.getElementById("current-tab-subtitle");
  
  if (tabName === "dashboard") {
    title.innerText = "Radar Semanal";
    subtitle.innerText = "Monitore tendências, tráfego, CRM e dados com foco em execução B2B.";
  } else if (tabName === "sandbox") {
    title.innerText = "Prompt Sandbox";
    subtitle.innerText = "Ferramenta operacional para aplicar os hacks de IA no dia a dia da agência.";
  }
}

// COPY FORMATTED NEWSLETTER (SLACK OR WHATSAPP)
function copyFormat(type) {
  const data = editionsDatabase[activeEdition];
  if (!data) return;
  
  let formattedText = "";
  
  if (type === "slack") {
    formattedText = `*⚡ [RADAR METTOS] – Inteligência Semanal para a Operação (Edição #${data.edition})*\n` +
      `_${data.date}_\n\n` +
      `🏭 *1. Mercado & Indústria: O Cenário Geral*\n` +
      `• *Notícia/Tendência:* ${data.sec1.trend}\n` +
      `• *Impacto nos Clientes Mettos:* \`[Ação LP/Comercial]\` ${data.sec1.impact}\n\n` +
      `🎯 *2. Tráfego & Conversão (Google, Meta & Cia)*\n` +
      `• *Atualização:* ${data.sec2.update}\n` +
      `• *⚠️ Ação Necessária Hoje:* \`[Urgente]\` ${data.sec2.action}\n\n` +
      `⚙️ *3. Dados & Tecnologia (Scripts, CRM & Tracking)*\n` +
      `• *Alerta Tech:* ${data.sec3.alert}\n` +
      `• *🛡️ Status/Ação Preventiva:* \`[Infra & Dados]\` ${data.sec3.status}\n\n` +
      `📅 *4. Calendário Estratégico (Próximos 15-30 dias)*\n` +
      `• *Data Relevante:* ${data.sec4.date}\n` +
      `• *💡 Oportunidade Operacional:* ${data.sec4.opportunity}\n\n` +
      `💡 *Prompt da Semana:* _"${data.sec6.title}"_ (Acesse o Painel Mettos para copiar o prompt completo).`;
  } else if (type === "whatsapp") {
    formattedText = `*⚡ [RADAR METTOS] - Edição #${data.edition}*\n` +
      `_${data.date}_\n\n` +
      `*🏭 1. Mercado & Indústria*\n` +
      `*Notícia:* ${data.sec1.trend.substring(0, 120)}...\n` +
      `*Impacto:* ${data.sec1.impact}\n\n` +
      `*🎯 2. Tráfego & Conversão*\n` +
      `*Update:* ${data.sec2.update.substring(0, 120)}...\n` +
      `*⚠️ AÇÃO:* ${data.sec2.action}\n\n` +
      `*⚙️ 3. Dados & Tecnologia*\n` +
      `*Alerta:* ${data.sec3.alert.substring(0, 120)}...\n` +
      `*🛡️ STATUS:* ${data.sec3.status}\n\n` +
      `*📅 4. Calendário Estratégico*\n` +
      `*Data:* ${data.sec4.date}\n` +
      `*Oportunidade:* ${data.sec4.opportunity}`;
  }
  
  navigator.clipboard.writeText(formattedText).then(() => {
    showToast(`Radar copiado no formato ${type.toUpperCase()}!`);
  }).catch(err => {
    showToast("Erro ao copiar.");
  });
}

// COPY PROMPT TEXT
function copyPromptText() {
  const promptCode = document.getElementById("sec-6-prompt").innerText;
  navigator.clipboard.writeText(promptCode).then(() => {
    showToast("Prompt copiado para a área de transferência!");
  });
}

// TOAST NOTIFICATION UTILITY
function showToast(message) {
  const toast = document.getElementById("toast");
  toast.innerText = message;
  toast.classList.add("active");
  setTimeout(() => {
    toast.classList.remove("active");
  }, 3000);
}

// MODAL CONTROLS: NEWSLETTER GENERATION SIMULATOR
function openGeneratorModal() {
  document.getElementById("generator-modal").classList.add("active");
  document.getElementById("sim-progress").style.display = "none";
  document.getElementById("btn-start-simulation").style.display = "inline-flex";
}

function closeGeneratorModal() {
  document.getElementById("generator-modal").classList.remove("active");
}

function startNewsletterGeneration() {
  const btn = document.getElementById("btn-start-simulation");
  const progressBox = document.getElementById("sim-progress");
  const progressBar = document.getElementById("sim-progress-bar");
  const progressText = document.getElementById("sim-progress-text");
  const focusVal = document.getElementById("generator-focus").value || "Geral";
  
  btn.style.display = "none";
  progressBox.style.display = "block";
  
  const steps = [
    { progress: 15, text: "Varrendo Google Ads API changelogs..." },
    { progress: 40, text: "Buscando updates da Meta Ads Status..." },
    { progress: 65, text: "Analisando portais B2B & fóruns industriais para: " + focusVal },
    { progress: 85, text: "Agrupando dados de rastreamento de cookies e CRM..." },
    { progress: 100, text: "Estruturando template ultra-escaneável Radar Mettos..." }
  ];
  
  let stepIdx = 0;
  
  const interval = setInterval(() => {
    if (stepIdx < steps.length) {
      progressBar.style.width = steps[stepIdx].progress + "%";
      progressText.innerText = steps[stepIdx].text;
      stepIdx++;
    } else {
      clearInterval(interval);
      
      // Inject generated custom edition #15 into the database!
      editionsDatabase["15"] = {
        edition: "15",
        title: `⚡ RADAR METTOS – Edição #15 (Foco: ${focusVal})`,
        date: "Período: 26 de Maio a 02 de Junho, 2026",
        sec1: {
          title: "Novo boom de relocalização industrial (Nearshoring)",
          trend: `Aumento exponencial de indústrias migrando cadeias de fornecimento para a América Latina estimula o mercado B2B de infraestrutura e maquinário. Foco atual: ${focusVal}.`,
          impact: "Clientes Mettos focados em peças de reposição e manutenção de caldeiras devem destacar frete imediato e estoque nacional em suas copys de anúncio do LinkedIn."
        },
        sec2: {
          title: "Inteligência Artificial Generativa no Meta Ads (Advantage+)",
          update: "Meta liberou geração de criativos com IA integrada no gerenciador. Mas o algoritmo tende a criar fundos desfocados que destoam da precisão visual de maquinário B2B.",
          action: "O time de design e tráfego deve desativar a geração de fundos automáticos da IA nas campanhas de catálogo de produtos industriais para manter o branding técnico intacto."
        },
        sec3: {
          title: "Adesão a APIs de Conversões do Google Ads",
          alert: "O Google Ads iniciou a obrigatoriedade da API de Conversões server-side para rastreamento de chamadas comerciais telefônicas originadas de anúncios B2B.",
          status: "Integrar os discadores e CRMs dos clientes industriais com a API de conversão offline do Google Ads para evitar perda de atribuição de leads qualificados."
        },
        sec4: {
          title: "Semana da Produtividade na Indústria Mecânica",
          date: "Próximas 3 semanas (Promoções e feiras técnicas associadas).",
          opportunity: "Excelente gancho para criar e-book com parceiro técnico ou webinar ao vivo mostrando soluções de manutenção preventiva rápida. Distribuir via lista de e-mail do RD Station."
        },
        sec5: {
          visuals: "Criativos contendo diagramas técnicos explodidos 3D performando 40% melhor do que fotos de estúdio padrão. O engenheiro B2B quer ver o detalhe do componente.",
          copy: "Substituição do discurso motivacional por métricas palpáveis de durabilidade (ex: '20.000 horas de funcionamento garantido sem trocas')."
        },
        sec6: {
          title: "Prompt de IA para Tradução Técnica Simplificada B2B",
          prompt: `Gere 3 anúncios de alto impacto no LinkedIn Ads focado no diferencial técnico: [Diferencial] com tom sério e focado em engenheiros seniores.`
        }
      };
      
      closeGeneratorModal();
      renderEditionsList();
      loadEdition("15");
      showToast("Nova Newsletter Radar Mettos gerada com Inteligência Artificial!");
    }
  }, 1000);
}

// SANDBOX ACTIONS & SIMULATOR
function loadSandboxTemplate(key) {
  const temp = sandboxTemplates[key];
  if (!temp) return;
  
  document.querySelectorAll(".prompt-temp-btn").forEach(btn => btn.classList.remove("active"));
  
  // Set active class
  event.target.classList.add("active");
  
  document.getElementById("sandbox-prompt-input").value = temp.prompt;
  document.getElementById("sandbox-result-box").style.display = "none";
}

function runSandboxSimulation() {
  const promptBase = document.getElementById("sandbox-prompt-input").value;
  const product = document.getElementById("sandbox-product-input").value || "Válvulas Termoplásticas Industriais de Alta Pressão";
  const audience = document.getElementById("sandbox-audience-input").value || "Gerentes de Manutenção Química B2B";
  
  let processedPrompt = promptBase.replace("{PRODUCT}", product).replace("{AUDIENCE}", audience);
  
  // Find which template is active to get a clean result simulation
  const resultBox = document.getElementById("sandbox-result-box");
  const resultText = document.getElementById("sandbox-result-text");
  
  resultBox.style.display = "block";
  
  // Dynamic mock generation text replacing fields for a realistic look
  let responseText = `🚀 [PRODUÇÃO & RESULTADOS]

No gerenciamento técnico de ${audience}, cada minuto parado representa desperdício econômico e risco operacional. A resposta ideal está no correto dimensionamento de ${product}.

Diferenciais acionáveis do nosso portfólio:
✅ Resistência contra corrosão acelerada.
✅ Homologação total dentro dos padrões e normas de conformidade regulatória.
✅ Economia direta de recursos em reparos prematuros.

👉 Solicite a visita técnica ou agende contato com nossos engenheiros de aplicação: [Agendar Consultoria Técnica]`;
  
  resultText.innerText = responseText;
  showToast("Simulação de IA processada!");
}

function copySandboxResult() {
  const txt = document.getElementById("sandbox-result-text").innerText;
  navigator.clipboard.writeText(txt).then(() => {
    showToast("Resultado copiado!");
  });
}

// CAMPAIGN HELPER MODAL ACTIONS
function openCampaignHelper() {
  document.getElementById("campaign-modal").classList.add("active");
  updateCampDetails();
}

function closeCampaignHelper() {
  document.getElementById("campaign-modal").classList.remove("active");
}

function updateCampDetails() {
  const channel = document.getElementById("camp-channel").value;
  const client = document.getElementById("camp-client").options[document.getElementById("camp-client").selectedIndex].text;
  
  const headlineEl = document.getElementById("camp-headline");
  const ctaEl = document.getElementById("camp-cta");
  const crmEl = document.getElementById("camp-crm");
  
  if (channel === "email") {
    headlineEl.innerText = `[Urgente] Sua planta industrial está adequada para as novas regras de controle de poluição?`;
    ctaEl.innerText = `Agendar Diagnóstico Gratuito com Engenheiro da ${client.split(" - ")[0]}`;
    crmEl.innerText = `Segmentar leads do RD Station marcados como 'decisor-compras' e disparar e-mail educativo às 09h da terça-feira.`;
  } else if (channel === "linkedin") {
    headlineEl.innerText = `Sua empresa corre riscos fiscais ou ambientais? Baixe o Check-list de Conformidade de Poluição Industrial.`;
    ctaEl.innerText = `Baixar Check-list PDF Grátis (Lead Gen Form integrado)`;
    crmEl.innerText = `Configurar integração via Zapier para enviar os dados de novos leads do LinkedIn direto ao Funil de Vendas no RD CRM em tempo real.`;
  } else if (channel === "google") {
    headlineEl.innerText = `Equipamentos de Controle de Poluição Industrial - Homologados e Pronta Entrega.`;
    ctaEl.innerText = `Solicitar Cotação Comercial de Vendas`;
    crmEl.innerText = `Subir base de e-mails de clientes recorrentes do CRM no Google Audience para otimizar os lances inteligentes de pesquisa.`;
  }
}

function copyCampaignStrategy() {
  const client = document.getElementById("camp-client").options[document.getElementById("camp-client").selectedIndex].text;
  const channel = document.getElementById("camp-channel").options[document.getElementById("camp-channel").selectedIndex].text;
  const headline = document.getElementById("camp-headline").innerText;
  const cta = document.getElementById("camp-cta").innerText;
  const crm = document.getElementById("camp-crm").innerText;
  
  const str = `📋 *ESTRATÉGIA DE CAMPANHA SAZONAL METTOS*\n` +
    `• *Cliente:* ${client}\n` +
    `• *Canal principal:* ${channel}\n` +
    `• *Chamada (Headline):* ${headline}\n` +
    `• *Chamada para Ação (CTA):* ${cta}\n` +
    `• *CRM / Automação:* ${crm}`;
    
  navigator.clipboard.writeText(str).then(() => {
    closeCampaignHelper();
    showToast("Estratégia de campanha copiada com sucesso!");
  });
}
