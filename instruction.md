# InfraTech — Especificação Técnica, Produto, Design System e Prompt Oficial (`instruction.md`)

> **Documento de Arquitetura, Produto e Design (PRD, Tech Spec & UI/UX Prompt)**
> Este arquivo define a visão estratégica, identidade visual (Modo Escuro e Modo Claro), público-alvo, estrutura de conteúdo, governança dos 9 integrantes, stack tecnológica e o prompt oficial para o desenvolvimento do portal institucional da **InfraTech**. Serve como fonte única de verdade (*Single Source of Truth*) para desenvolvedores, designers e assistentes de IA.

---

## 1. Objetivo do Site e KPIs de UX/UI

O portal institucional da **InfraTech** possui um duplo propósito estratégico (corporativo e acadêmico):

1. **Posicionamento Institucional B2B (Corporativo):**
   - Apresentar a **InfraTech** como uma integradora de engenharia e tecnologia de alta confiabilidade, capaz de entregar projetos *turnkey* (ponta a ponta) que unem infraestrutura física (elétrica, cabeamento estruturado, CFTV) e digital (hardware, redes, nuvem e Inteligência Artificial).
   - Demonstrar solidez técnica, governança organizacional e capacidade de execução para gestores de TI, engenheiros, diretores de operações e parceiros tecnológicos, **sem parecer uma loja de varejo/vendas**, mas sim uma empresa de engenharia e tecnologia de excelência.
2. **Vitrine Técnica e Entrega de Projeto (Institucional / Avaliação COTEMIG):**
   - Cumprir integralmente os requisitos da **Gerência de TI** e demais gerências do projeto prático (`guia-projeto.txt`), apresentando de forma transparente a logomarca oficial, o portfólio de soluções e serviços, a metodologia de engenharia em 3 etapas, os parceiros tecnológicos, os canais das gerências (Administrativa, Comunicação e IA) e a **seção de colaboradores** (com os 9 integrantes reais, seus cargos de liderança/gerência e links diretos para o site pessoal/portfólio e mídias de cada membro).

### Metas Principais (KPIs de UX/UI)
- **Clareza imediata (Regra dos 5 segundos):** o visitante deve entender já no *Hero* exatamente quem é a InfraTech, quais são suas 5 frentes de atuação e sua proposta de valor integrada.
- **Credibilidade técnica:** transmitir rigor normativo (`NBR 5410`, `NBR 14136`, cabeamento estruturado `EIA/TIA-568`) aliado à modernidade (`Cloud Computing & Inteligência Artificial`).
- **Experiência Dual Theme (Modo Escuro & Modo Claro):** oferecer visualização impecável tanto no **Modo Escuro (padrão inicial)** quanto no **Modo Claro**, adaptando automaticamente as cores e a versão transparente da logomarca oficial.
- **Performance e Responsividade:** nota máxima (> 95) no Google Lighthouse em Performance, Acessibilidade, Boas Práticas e SEO, com layout 100% responsivo (*Desktop Widescreen 1920×1080*, *Tablet* e *Mobile*).

---

## 2. O Que a Empresa Faz (Posicionamento, Portfólio e Metodologia)

### 2.1. Proposta de Valor (Elevator Pitch)
A **InfraTech** entrega soluções de ponta a ponta em **engenharia elétrica, infraestrutura de TI, cabeamento estruturado, segurança eletrônica (CFTV) e computação em nuvem com Inteligência Artificial**. Combinamos consultoria técnica especializada com execução operacional de precisão para garantir alta disponibilidade, conformidade normativa, segurança patrimonial/digital e continuidade aos negócios dos nossos clientes.

### 2.2. Os 5 Pilares de Soluções e Serviços (Portfólio Oficial)

Cada pilar de atuação da InfraTech é estruturado em duas frentes complementares, conforme o `guia-projeto.txt`: **Consultoria & Diagnóstico** e **Serviços & Execução Operacional**.

#### ⚡ 1. Engenharia Elétrica e Automação Operacional
*Foco: Garantia de segurança, conformidade normativa (`NBR 5410` / `NBR 14136`) e eficiência energética para instalações comerciais e industriais.*
- **Consultoria Técnica e Diagnóstico:** dimensionamento de cargas, especificação de quadros de distribuição e proteção (QD com interruptor diferencial residual DR e dispositivos contra surtos DPS), adequação às normas de segurança vigentes e auditoria técnica de instalações.
- **Serviços Especializados:** práticas de verificação técnica avançada com instrumentação digital de precisão (multímetros digitais), ensaios operacionais em ambientes críticos e elaboração de propostas customizadas de controle e automação.

#### 🖥️ 2. Infraestrutura de TI, Hardware e Licenciamento
*Foco: Gerenciamento completo do ciclo de vida de ativos tecnológicos para otimizar o desempenho corporativo.*
- **Consultoria em Ativos:** dimensionamento assertivo do parque tecnológico (estações de trabalho corporativas, servidores e periféricos profissionais) e elaboração de orçamentos alinhados à demanda real da operação.
- **Gestão de Hardware:** montagem técnica, manutenção preventiva e corretiva, verificação de desempenho, testes de estresse e inventário técnico completo de equipamentos e ferramentas.
- **Gestão de Software e Redes:** aquisição e licenciamento de Sistemas Operacionais e softwares de negócios, suporte especializado e parametrização de ambientes específicos em rede com foco em segurança da informação.

#### 🌐 3. Redes de Dados e Cabeamento Estruturado
*Foco: Arquitetura de conectividade ágil, segura, organizada e escalável para sustentar as operações da empresa.*
- **Engenharia de Projeto (*Site Survey*):** visita técnica *in loco*, levantamento detalhado de requisitos lógicos e físicos e elaboração do layout estruturado (integrando infraestrutura elétrica dedicada, rotas de passagem, conectividade e segurança).
- **Planejamento Financeiro e Insumos:** especificação de Lista de Materiais (*BOM — Bill of Materials*), projeto lógico de rede e orçamentação transparente de periféricos, racks, *patch panels*, *switches*, roteadores e certificação de pontos de rede.

#### 📹 4. Segurança Eletrônica e Monitoramento em Vídeo (CFTV)
*Foco: Proteção patrimonial e vigilância operacional inteligente para ambientes corporativos e industriais.*
- **Análise de Riscos e Vistoria:** visita técnica e inspeção local para mapeamento de pontos críticos/cegos e definição dos requisitos de segurança do ambiente operacional.
- **Dimensionamento do Sistema:** projeto de layout estratégico de cobertura, seleção de tecnologias de captura IP/PoE e dimensionamento de centrais de gerenciamento (NVR/DVR) e armazenamento seguro de vídeo.
- **Implantação Integrada:** levantamento e fornecimento de periféricos, especificação de equipamentos, instalação limpa e proposta técnica completa.

#### ☁️ 5. Cloud Computing, Transformação Digital & IA
*Foco: Modernização de infraestrutura com foco em redução de custos operacionais, flexibilidade, alta disponibilidade e inteligência operacional.*
- **Diagnóstico e Seleção:** análise detalhada das demandas operacionais, pesquisa de mercado e *benchmarking* técnico/financeiro para identificação das melhores soluções de nuvem (AWS, Microsoft Azure, Google Cloud).
- **Migração e Implantação:** planejamento e execução da transição para ambientes em nuvem com zero impacto na continuidade do negócio (*zero downtime*).
- **Aceleração com Inteligência Artificial (Gerência de IA):** pesquisa, verificação e implementação de ferramentas de IA para otimizar processos internos, apoiar todas as gerências, automatizar tarefas e conduzir o treinamento de clientes e usuários finais.

### 2.3. Metodologia de Atendimento (3 Etapas)
Nossa atuação é estruturada em três etapas sequenciais para garantir previsibilidade, orçamento transparente e entrega sem surpresas:
1. **01. Visita Técnica e Mapeamento (*Site Survey*):** diagnóstico presencial aprofundado das necessidades físicas, elétricas e lógicas, medições de ambiente e levantamento de restrições operacionais.
2. **02. Engenharia e Especificação:** desenvolvimento de layouts técnicos (inicial e final), projeto lógico de rede, lista quantitativa de materiais e ferramentas (*BOM*) e proposta financeira detalhada.
3. **03. Execução e Comissionamento:** manufatura colaborativa, instalação limpa em campo, testes de validação e certificação com instrumentação digital, entrega técnica documentada e suporte contínuo.

---

## 3. Público-Alvo (Target Audience & Personas) e Tom de Voz

O design, a linguagem e a jornada de navegação do site foram projetados para atender três perfis principais:

### Persona 1 — Gestor Corporativo de Operações, Engenharia e TI (B2B)
- **Perfil:** Diretores de PMEs, Gerentes de TI, Coordenadores de Facilities ou Engenheiros Responsáveis que precisam projetar, modernizar ou expandir escritórios, laboratórios e ambientes operacionais.
- **Dores:** fornecedores fragmentados (um faz elétrica, outro faz rede, outro configura hardware/nuvem), falta de padronização normativa, infraestrutura desorganizada e ausência de documentação técnica.
- **O que busca no site:** visão clara da empresa, portfólio integrado (*one-stop-shop* que resolve da elétrica à nuvem/IA), metodologia estruturada e seriedade institucional.

### Persona 2 — Parceiros Tecnológicos e Fornecedores
- **Perfil:** Fabricantes e distribuidores de hardware, conectividade, proteção elétrica e nuvem (ecossistema Dell, Microsoft, Intel, Furukawa, Intelbras, WEG/Schneider, AWS/Google Cloud).
- **O que busca no site:** posicionamento profissional da marca, governança corporativa clara e canais institucionais de contato.

### Persona 3 — Banca Avaliadora / Empresa Empregadora (Contexto Acadêmico COTEMIG)
- **Perfil:** Professor orientador (`artur@cotemig.com.br`) e avaliadores técnicos do projeto.
- **Critérios observados (`guia-projeto.txt`):** organização, limpeza visual, funcionamento perfeito, documentação alinhada, delegação clara de funções, cooperativismo e presença de todos os **9 integrantes da equipe** com suas respectivas gerências e links para seus sites pessoais e mídias sociais.

### Tom de Voz da Marca
- **Sóbrio, Técnico e Consultivo:** evita jargões vazios ou apelos de varejo; utiliza terminologia precisa de engenharia e TI (*Site Survey, BOM, NBR 5410, Alta Disponibilidade, Cabeamento Estruturado, Projeto Lógico, Governança de IA*).
- **Direto e Moderno:** frases concisas, foco em confiabilidade, segurança operacional, organização e continuidade de negócios.

---

## 4. Identidade Visual e Diretrizes de UI (Design System Dual Theme)

O site segue estritamente a identidade minimalista, limpa (*clean*), tecnológica e de alta precisão definida para a **InfraTech**, operando tanto em **Modo Escuro (Padrão)** quanto em **Modo Claro**.

### 4.1. Logomarca Oficial e Adaptação de Tema
- **Conceito da Marca:** ícone geométrico de coluna/pilar formado por trilhas de circuito impresso e nós conectados (metade esquerda estrutural e metade direita em ciano), posicionado à esquerda do *wordmark* **InfraTech** (*"Infra"* + *"Tech"*).
- **Arquivos Oficiais Transparentes (gerados na pasta `./assets/`):**
  - `./assets/logo-dark.png`: utilizado no **Modo Escuro** e em fundos escuros — metade esquerda do circuito e palavra **"Infra"** em Branco Gelo (`#F5F6F7`) + metade direita do circuito e palavra **"Tech"** em Ciano Oficial (`#22C3D6`), com fundo 100% transparente.
  - `./assets/logo-light.png`: utilizado no **Modo Claro** — metade esquerda do circuito e palavra **"Infra"** em Grafite Profundo (`#1C1F23`) + metade direita do circuito e palavra **"Tech"** em Ciano Oficial (`#22C3D6`), com fundo 100% transparente.
  - `./assets/favicon.png`: ícone do pilar de circuito para a aba do navegador.
- **Nota Técnica:** Não utilizar o arquivo `logo-sem-fundo.jpg` (pois possui fundo quadriculado opaco salvo em JPEG).

### 4.2. Paleta de Cores Oficial — Modo Escuro (Tema Padrão Inicial)
| Token CSS | Papel no Layout | Cor | Hexadecimal | RGB |
| :--- | :--- | :--- | :--- | :--- |
| `--color-bg` | Fundo principal da página (*deep technical slate*) | **Ardósia Profunda** | `#0D1014` | `rgb(13, 16, 20)` |
| `--color-surface` | Fundo de cards, barra de navegação e modais | **Grafite Elevado** | `#161A20` | `rgb(22, 26, 32)` |
| `--color-surface-alt` | Blocos secundários, badges e áreas destacadas | **Grafite Oficial** | `#1C1F23` | `rgb(28, 31, 35)` |
| `--color-text-primary` | Títulos principais, textos de leitura e metade *"Infra"* | **Off-White Nítido** | `#F5F6F7` | `rgb(245, 246, 247)` |
| `--color-text-muted` | Subtítulos, textos de apoio e metadados técnicos | **Cinza Aço** | `#9BA3AE` | `rgb(155, 163, 174)` |
| `--color-border` | Linhas divisórias finas (`1px solid`) e bordas de cards | **Borda Técnica Escura** | `#262C36` | `rgb(38, 44, 54)` |
| `--color-accent-cyan` | Botões primários, ícones, destaques e metade *"Tech"* | **Ciano Tecnológico** | `#22C3D6` | `rgb(34, 195, 214)` |
| `--color-accent-hover` | Estado `:hover` e `:focus-visible` de elementos ativos | **Ciano Elétrico** | `#00E5FF` | `rgb(0, 229, 255)` |
| `--color-success` | Indicadores de conformidade normativa e status ativo | **Verde Técnico** | `#10893E` | `rgb(16, 137, 62)` |

### 4.3. Paleta de Cores Oficial — Modo Claro (Light Mode)
| Token CSS | Papel no Layout | Cor | Hexadecimal | RGB |
| :--- | :--- | :--- | :--- | :--- |
| `--color-bg` | Fundo principal da página (*clean & airy*) | **Off-White** | `#F5F6F7` | `rgb(245, 246, 247)` |
| `--color-surface` | Fundo de cards, modais e barra de navegação | **Branco Puro** | `#FFFFFF` | `rgb(255, 255, 255)` |
| `--color-surface-alt` | Blocos secundários e fundos sutis de apoio | **Cinza Gelo** | `#ECEEF1` | `rgb(236, 238, 241)` |
| `--color-text-primary` | Títulos principais, textos e metade *"Infra"* | **Grafite Profundo** | `#1C1F23` | `rgb(28, 31, 35)` |
| `--color-text-muted` | Subtítulos, textos de apoio e legendas técnicas | **Cinza Médio** | `#5C6470` | `rgb(92, 100, 112)` |
| `--color-border` | Linhas divisórias finas (`1px solid`) e bordas de cards | **Cinza Claro** | `#E1E4E8` | `rgb(225, 228, 232)` |
| `--color-accent-cyan` | Botões primários, ícones, destaques e metade *"Tech"* | **Ciano Tecnológico** | `#22C3D6` | `rgb(34, 195, 214)` |
| `--color-accent-hover` | Estado `:hover` e `:focus-visible` de elementos ativos | **Ciano Elétrico** | `#00E5FF` | `rgb(0, 229, 255)` |
| `--color-success` | Indicadores de conformidade normativa e status ativo | **Verde Técnico** | `#10893E` | `rgb(16, 137, 62)` |

### 4.4. Tipografia e Estilo Gráfico
- **Fonte Principal (Sans-Serif Geométrica):** `'Inter'` ou `'Plus Jakarta Sans'` (via Google Fonts), pesos `400`, `500`, `600` e `700`.
- **Fonte Monoespaçada (para índices técnicos, normas e tags de gerência):** `'JetBrains Mono'` (`monospace`).
- **Diretrizes Visuais:**
  - Amplo espaço negativo (respiro generoso entre seções);
  - Linhas finas uniformes (`1px solid var(--color-border)`), cantos levemente arredondados (`border-radius: 8px` a `12px`);
  - Sem degradês multicoloridos ou sombras pesadas — priorizar estética *flat vector / technical blueprint*;
  - Elementos sutis remetendo a trilhas de circuito impresso e grades de engenharia (*technical grid*) no pano de fundo.

---

## 5. Governança e Equipe Oficial (Os 9 Integrantes da InfraTech)

A seção **Nossa Equipe** evidencia a estrutura organizacional e o cooperativismo dos **9 integrantes**, com dados centralizados no array `teamMembers` em `js/main.js` para fácil atualização de fotos e URLs pessoais:

| # | Nome | Cargo / Gerência Oficial | Nível / Categoria | Responsabilidade Principal no Projeto (`guia-projeto.txt`) | Caminho Previsto da Foto |
| :- | :--- | :--- | :--- | :--- | :--- |
| **1** | **Carlos** | **CEO & Líder da Equipe (Big Boss)** | Liderança Executiva | Responsável geral pela equipe, tomada de decisão estratégica, resolução de conflitos e relacionamento institucional da empresa. | `./assets/equipe/carlos.jpg` |
| **2** | **Rafael Coimbra** | **Co-CEO & Gerente de Projeto** | Liderança Executiva | Co-liderança executiva da equipe, coordenação do *Site Survey* e elaboração dos layouts inicial e final do projeto. | `./assets/equipe/rafael-coimbra.jpg` |
| **3** | **Henrique** | **Gerente de Materiais** | Gerências | Confecção da lista de materiais (BOM) em relação ao projeto físico e especificação das ferramentas necessárias para a execução da empreitada. | `./assets/equipe/henrique.jpg` |
| **4** | **Mateus Lúcio** | **Gerente Administrativo** | Gerências | Reunião de toda a documentação, criação da planilha/documento compartilhado no Google Drive (incluindo `artur@cotemig.com.br`) e montagem da proposta final. | `./assets/equipe/mateus-lucio.jpg` |
| **5** | **Rafael Furtado** | **Gerente de Comunicação** | Gerências | Interlocução com a empresa empregadora antes e durante a execução da empreitada, gestão das redes sociais e comunicação geral da empresa. | `./assets/equipe/rafael-furtado.jpg` |
| **6** | **Luca** | **Gerente de TI** | Gerências | Responsável pelo projeto lógico da rede, criação da logomarca oficial e elaboração/confecção do site da empresa. | `./assets/equipe/luca.jpg` |
| **7** | **Paulo** | **Gerente de IA** | Gerências | Pesquisa e verificação de todas as ferramentas de IA que apoiam todas as gerências, processos, tarefas e treinamento dos clientes/usuários. | `./assets/equipe/paulo.jpg` |
| **8** | **Caio Fernandes** | **Colaborador Operacional** | Operações & Manufatura | Colaboração ativa em todas as funções e gerências quando solicitado, manufatura da empreitada e participação no *Site Survey*. | `./assets/equipe/caio-fernandes.jpg` |
| **9** | **Enzo** | **Colaborador Operacional** | Operações & Manufatura | Colaboração ativa em todas as funções e gerências quando solicitado, manufatura da empreitada e participação no *Site Survey*. | `./assets/equipe/enzo.jpg` |

> **Regras dos Cards de Colaboradores:**
> 1. **Destaque Hierárquico:** **Carlos (CEO)** e **Rafael Coimbra (Co-CEO & Gerente de Projeto)** recebem destaque de *Liderança Executiva* no topo da seção, seguidos pelas *Gerências* e pelos *Colaboradores Operacionais*.
> 2. **Fallback Inteligente de Foto:** Enquanto o arquivo de foto ainda não for colocado na pasta `./assets/equipe/`, o card exibe automaticamente um **avatar corporativo estilizado com as iniciais do integrante** (`CA`, `RC`, `HE`, `ML`, `RF`, `LU`, `PA`, `CF`, `EN`), evitando qualquer ícone de imagem quebrada.
> 3. **Links Obrigatórios:** Cada card contém o botão **Site Pessoal / Portfólio** (`target="_blank" rel="noopener noreferrer"`) e ícones para **Redes Sociais / Mídias** (`LinkedIn`, `GitHub`, `Instagram` ou `E-mail`) prontos para edição rápida no `js/main.js`.

---

## 6. Prompt Oficial UI/UX (Consolidado via `enhance-prompt`)

```markdown
Portal institucional corporativo B2B de engenharia e tecnologia para a **InfraTech**, com estética minimalista de precisão (*technical blueprint*), alternância nativa entre Modo Escuro (padrão) e Modo Claro, espaço negativo generoso, linhas divisórias finas de 1px e foco exclusivo na apresentação da empresa, seus 5 pilares de atuação, metodologia em 3 etapas, parceiros e governança da equipe de 9 integrantes (sem qualquer menção a lojas/vendas ou aos arquivos de bancada/inventário).

**DESIGN SYSTEM (REQUIRED):**
- Platform: Web, Desktop-first (`1920x1080` / `1440px`, container `1280px`) e 100% responsivo para Tablet e Mobile.
- Theme: Dual Theme — Modo Escuro por padrão (`#0D1014` background, `#161A20` surface, `#F5F6F7` text, `#262C36` border) + Modo Claro (`#F5F6F7` background, `#FFFFFF` surface, `#1C1F23` text, `#E1E4E8` border) com botão de alternância Sol/Lua na Navbar.
- Primary Accent: Official InfraTech Cyan (`#22C3D6`) para CTAs, ícones, badges e destaques; Electric Cyan (`#00E5FF`) para estados `:hover` e `:focus-visible`.
- Dynamic Brand Logo: `./assets/logo-dark.png` no Modo Escuro e `./assets/logo-light.png` no Modo Claro (ambas com fundo 100% transparente).
- Typography: `'Inter'` (sans-serif) para títulos e leitura + `'JetBrains Mono'` (monospace) para códigos, normas (`NBR 5410`, `EIA/TIA-568`) e numeração técnica.

**Page Structure:**
1. **Header / Sticky Navbar:** Logomarca dinâmica à esquerda, links de navegação por âncora (`Início`, `Sobre`, `Soluções`, `Metodologia`, `Parceiros`, `Equipe`, `Contato`), botão de alternância de tema (Modo Escuro / Modo Claro) e botão institucional (`Fale Conosco`).
2. **Hero Section (Início):** Badge técnica superior, headline `<h1>` de impacto institucional, subtítulo sobre integração entre engenharia física e digital, botões de navegação (`Explorar Soluções` e `Conhecer a Equipe`) e painel interativo de **Arquitetura Integrada InfraTech** conectando os 5 pilares técnicos.
3. **Sobre a InfraTech & Governança:** História e missão da empresa, compromisso com organização, limpeza, documentação e segurança, mais 4 cards de diferenciais (*Conformidade Normativa*, *Soluções Ponta a Ponta*, *Governança Cooperativa* e *Inovação com IA*).
4. **Portfólio de Soluções e Áreas de Atuação (Os 5 Pilares):** Grid interativo/filtrável apresentando as 5 áreas oficiais (1. Engenharia Elétrica e Automação; 2. Infraestrutura de TI, Hardware e Licenciamento; 3. Redes de Dados e Cabeamento Estruturado; 4. Segurança Eletrônica e CFTV; 5. Cloud Computing, Transformação Digital e IA), detalhando em cada card as frentes de **Consultoria & Diagnóstico** e **Serviços & Execução Operacional**.
5. **Metodologia de Atendimento (3 Etapas):** Linha do tempo numerada (`01. Visita Técnica e Mapeamento` → `02. Engenharia e Especificação` → `03. Execução e Comissionamento`) mais destaque sobre como a Gerência de IA otimiza os processos e o treinamento de usuários.
6. **Ecossistema de Parceiros e Tecnologias:** Faixa institucional (*Logo Cloud*) com as marcas e padrões de referência utilizados pela InfraTech (*Dell Technologies, Microsoft, Intel, Furukawa Electric, Intelbras, WEG / Schneider Electric, AWS & Google Cloud*).
7. **Nossa Equipe — Governança e Colaboradores (9 Integrantes):** Filtro por categoria (`Todos`, `Liderança Executiva`, `Gerências`, `Operações`) e cards dos 9 membros (Carlos, Rafael Coimbra, Henrique, Mateus Lúcio, Rafael Furtado, Luca, Paulo, Caio Fernandes e Enzo) com avatar/foto, cargo oficial, atribuição no projeto e botões para **Site Pessoal** e **Redes Sociais**.
8. **Comunicação Institucional, Documentação & Rodapé (Footer):** Atalhos institucionais para a **Documentação/Planilha Google Drive** (Gerência Administrativa — compartilhada com `artur@cotemig.com.br`), **Redes Sociais e Canal de Interlocução** (Gerência de Comunicação), formulário institucional de contato e rodapé completo.
```

---

## 7. Stack Técnica e Estrutura de Diretórios

### 7.1. Stack "Zero-Build" de Alta Performance
- **Marcação:** `HTML5` semântico (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`), otimizado para SEO e acessibilidade (`aria-label`, foco visível via teclado).
- **Estilização:** `CSS3 Moderno` (`css/styles.css`) com variáveis CSS para troca instantânea entre Modo Escuro e Modo Claro, `CSS Grid`, `Flexbox` e tipografia responsiva fluida com `clamp()`.
- **Interatividade:** `JavaScript Vanilla ES6+` (`js/main.js`) modularizado e sem dependências externas pesadas:
  - Alternância de Tema (**Modo Escuro / Modo Claro**) com troca automática da logomarca e salvamento em `localStorage`;
  - Filtro interativo dos **5 Pilares de Soluções** e visualização de entregáveis técnicos;
  - Renderização e filtragem dinâmica dos **9 integrantes da equipe** a partir de um único array `teamMembers` fácil de editar;
  - Validação amigável do formulário de contato institucional e notificações visuais (*Toast*) para links ainda em configuração;
  - Menu mobile responsivo e animações suaves de entrada (*IntersectionObserver*).

### 7.2. Estrutura de Diretórios do Projeto
```text
c:\Users\fael\Desktop\projeto-RAC\
├── instruction.md                 # Este documento de especificação, PRD e prompt oficial
├── rules.md                       # Regras técnicas, padrões de código e checklist de qualidade
├── guia-projeto.txt               # Guia original do trabalho (COTEMIG)
├── index.html                     # Página principal institucional da InfraTech
├── css/
│   └── styles.css                 # Design System (Modo Escuro + Modo Claro) e responsividade
├── js/
│   └── main.js                    # Tema Claro/Escuro, dados dos 9 integrantes, filtros e interações
└── assets/
    ├── logo-dark.png              # Logomarca oficial transparente para o Modo Escuro ("Infra" branco + "Tech" ciano)
    ├── logo-light.png             # Logomarca oficial transparente para o Modo Claro ("Infra" grafite + "Tech" ciano)
    ├── favicon.png                # Ícone da aba do navegador
    └── equipe/                    # Pasta dedicada para receber as fotos dos 9 integrantes
```

---

## 8. Checklist de Qualidade e Critérios de Aceite (*Definition of Done*)

Antes de publicar e apresentar o site ao professor (`artur@cotemig.com.br`), verificar:
- [ ] O site abre no **Modo Escuro por padrão** e alterna perfeitamente para o **Modo Claro** ao clicar no botão do topo, trocando automaticamente entre `./assets/logo-dark.png` e `./assets/logo-light.png`.
- [ ] Nenhum arquivo da bancada ou inventário físico (`bancada.png`, `bancada-eletrico.png`, `inventario-materiais-e-ferramentas.png`) nem o arquivo quadriculado `logo-sem-fundo.jpg` foi incluído no site.
- [ ] O tom do site é **100% institucional e técnico** sobre a empresa InfraTech, sem aparência de loja/e-commerce.
- [ ] Os **5 pilares de soluções** (com *Consultoria* + *Execução*) e as **3 etapas da metodologia** estão completos e fiéis ao `guia-projeto.txt`.
- [ ] Todos os **9 integrantes da equipe** (*Carlos, Rafael Coimbra, Henrique, Mateus Lúcio, Rafael Furtado, Luca, Paulo, Caio Fernandes e Enzo*) aparecem com seus cargos corretos (*CEO*, *Co-CEO & Gerente de Projeto*, *Gerentes* e *Colaboradores*), com suporte automático para fotos em `./assets/equipe/` e botões prontos para o site pessoal e redes sociais.
- [ ] O site funciona perfeitamente tanto em monitores widescreen Full HD (`1920×1080`) quanto em celulares (`360px+`), abrindo direto pelo `index.html` sem erros no Console (`F12`).
