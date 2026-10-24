# InfraTech — Regras de Desenvolvimento, Design e Qualidade (`rules.md`)

> **Contrato Técnico e Padrões Obrigatórios do Projeto Web**
> Este documento estabelece as regras inegociáveis (*Do's & Don'ts*) de código, interface, conteúdo, acessibilidade e arquitetura para o portal institucional da **InfraTech**, derivado diretamente do [instruction.md](file:///c:/Users/fael/Desktop/projeto-RAC/instruction.md).

---

## 1. Regras de Identidade Visual e UI (Design Tokens Dual Theme)

### 1.1. Paleta de Cores Estrita (Modo Escuro & Modo Claro)
- **OBRIGATÓRIO:** Utilizar exclusivamente as variáveis CSS oficiais da marca para o **Modo Escuro (Padrão)** e o **Modo Claro**:
  ```css
  :root,
  [data-theme="escuro"] {
    --color-bg: #0D1014;            /* Ardósia profunda: fundo principal */
    --color-surface: #161A20;       /* Grafite elevado: cards e navbar */
    --color-surface-alt: #1C1F23;   /* Grafite oficial: blocos secundários */
    --color-text-primary: #F5F6F7;  /* Off-white nítido: títulos e textos */
    --color-text-muted: #9BA3AE;    /* Cinza aço: subtítulos e legendas */
    --color-border: #262C36;        /* Divisórias finas de 1px */
    --color-accent-cyan: #22C3D6;   /* Ciano oficial: CTAs, ícones e destaques */
    --color-accent-hover: #00E5FF;  /* Ciano elétrico: estados :hover / :focus-visible */
    --color-success: #10893E;       /* Verde técnico: indicadores de status ativo */
  }

  [data-theme="claro"] {
    --color-bg: #F5F6F7;            /* Off-white: fundo principal */
    --color-surface: #FFFFFF;       /* Branco puro: cards e navbar */
    --color-surface-alt: #F0F2F5;   /* Cinza gelo: blocos secundários */
    --color-text-primary: #1C1F23;  /* Grafite profundo: títulos e textos */
    --color-text-muted: #5C6470;    /* Cinza médio: subtítulos e legendas */
    --color-border: #DDE1E6;        /* Divisórias finas de 1px */
  }
  ```
- **PROIBIDO:**
  - Usar cores fora da paleta (como roxo, rosa, laranja ou azul royal genérico).
  - Aplicar degradês multicoloridos ou sombras pesadas.

### 1.2. Uso da Logomarca Oficial Transparente
- **OBRIGATÓRIO:**
  - Referenciar `./assets/logo-dark.png` no Modo Escuro e `./assets/logo-light.png` no Modo Claro (alternância automática por CSS conforme `data-theme`) no cabeçalho e no rodapé.
  - Preservar a proporção original da logomarca (`object-fit: contain`).
- **PROIBIDO:**
  - Utilizar o arquivo `logo-sem-fundo.jpg` (que possui fundo quadriculado salvo em JPEG).
  - Distorcer, achatar ou aplicar filtros sobre a logomarca da InfraTech.

### 1.3. Tipografia e Iconografia
- **OBRIGATÓRIO:**
  - Fonte primária sem serifa: `'Inter'` (`sans-serif`).
  - Fonte monoespaçada para códigos de circuito (`C1`–`C5`), normas (`NBR 5410`, `NBR 14136`, `EIA/TIA-568`) e índices técnicos: `'JetBrains Mono'` (`monospace`).
  - Ícones vetoriais SVG em estilo *outline* (traço fino uniforme).

---

## 2. Regras de Conteúdo e Negócio (Requisitos COTEMIG)

### 2.1. Escopo Institucional da InfraTech (Sem Bancada / Sem E-commerce)
- **OBRIGATÓRIO:**
  - Manter posicionamento **institucional e técnico** sobre a empresa InfraTech.
  - Exibir claramente os **5 pilares de soluções** (`C1` Engenharia Elétrica e Automação; `C2` Infraestrutura de TI, Hardware e Licenciamento; `C3` Redes de Dados e Cabeamento Estruturado; `C4` Segurança Eletrônica e CFTV; `C5` Cloud Computing e Inteligência Artificial), divididos em **Consultoria** e **Execução**.
  - Apresentar as **3 etapas da metodologia** (*01. Visita Técnica e Mapeamento* → *02. Engenharia e Especificação* → *03. Execução e Comissionamento*).
- **PROIBIDO:**
  - Incluir no site os arquivos `bancada.png`, `bancada-eletrico.png`, `bancada-eletrico-folha2.png` ou `inventario-materiais-e-ferramentas.png` (pertencentes a outra entrega do trabalho).

### 2.2. Seção de Equipe e Colaboradores (9 Integrantes Reais)
- **OBRIGATÓRIO:**
  - Exibir o organograma com os **9 integrantes oficiais** divididos em 3 níveis conectados:
    1. **Liderança:** **Carlos** (*CEO e líder da equipe*) e **Rafael Coimbra** (*Co-CEO e gerente de projeto*);
    2. **Gerências:** **Henrique** (*Gerente de materiais*), **Mateus Lúcio** (*Gerente administrativo*), **Rafael Furtado** (*Gerente de comunicação*), **Luca** (*Gerente de TI*) e **Paulo** (*Gerente de IA*);
    3. **Operação:** **Caio Fernandes** (*Colaborador*) e **Enzo** (*Colaborador*).
  - Manter os dados centralizados no array `teamMembers` em `js/main.js` para fácil inserção das fotos em `./assets/equipe/` e dos links pessoais.

---

## 3. Protocolo de Validação (Checklist Antes de Entregar)

1. **Teste de Tema (Escuro & Claro):** O botão no topo alterna instantaneamente entre Modo Escuro e Modo Claro e troca a logomarca (`logo-dark.png` ↔ `logo-light.png`)?
2. **Teste do Quadro Unifilar (`C1`–`C5`):** Clicar ou navegar pelas setas nos 5 circuitos atualiza o painel de detalhes no Hero?
3. **Teste da Equipe (9 Integrantes):** Todos os 9 membros estão visíveis no organograma com iniciais (ou foto) e botões de *Site pessoal*, *LinkedIn*, *Instagram* e *E-mail*?
4. **Teste de Responsividade:** O site funciona sem barra de rolagem horizontal tanto em Full HD (`1920×1080` / `1440px`) quanto em celular (`390px`)?
5. **Teste Offline/Local:** O arquivo `index.html` abre direto no navegador com duplo clique sem erros no Console (`F12`)?
