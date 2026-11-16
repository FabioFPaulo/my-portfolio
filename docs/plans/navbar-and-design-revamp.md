# Plano de Execução: Redesign da Navbar e Revitalização do Tema (`docs/plans/navbar-and-design-revamp.md`)

Este plano segue a metodologia de tarefas atómicas de 2 a 5 minutos, orientadas por passos de verificação claros.

---

## 1. Visão Geral das Tarefas

| Tarefa | Ficheiro(s) Alvo | Descrição |
| :--- | :--- | :--- |
| **Tarefa 1** | `tailwind.config.js` | Expandir o tema com a nova paleta Deep Slate, cores de acento (Sky/Indigo) e tokens de superfície. |
| **Tarefa 2** | `src/components/navbar/logo.tsx` | Criar componente de logotipo moderno com monograma `FP` e gradiente luminoso. |
| **Tarefa 3** | `src/components/navbar/horizontal/*` | Refatorar a barra horizontal: layout flex (Logo / Links / CTA), estilo vidro translúcido (`backdrop-blur-md`), remoção de separadores ruidosos e indicador de foco. |
| **Tarefa 4** | `src/components/navbar/vertical/*` | Refatorar o menu móvel com backdrop blur, itens com feedback tátil e fecho animado fluido. |
| **Tarefa 5** | `src/index.css`, `banner/index.scss`, `container/section/index.scss` | Atualizar fundos globais para Deep Slate, adicionar luz ambiente de topo (*ambient glow*) e calibrar o brilho da foto de perfil para 95%. |
| **Tarefa 6** | Terminal / Scripts | Executar `npm run build` e validar que não há quebras de compilação ou de lint. |

---

## 2. Passo a Passo Detalhado

### Tarefa 1: Configuração dos Tokens no Tailwind
- **Ficheiro:** `tailwind.config.js`
- **Ação:** Adicionar à secção `theme.extend`:
  - `colors.brand`: slate-950 escuro, sky-400 acento primário, indigo-500 secundário.
  - `colors.surface`: fundos de vidro e bordas translúcidas.
- **Critério de Sucesso:** `npm run build` continua a passar sem erros de sintaxe.

### Tarefa 2: Criação do Componente de Logo da Navbar
- **Ficheiro:** `src/components/navbar/logo.tsx`
- **Ação:** Criar componente React com monograma quadrado estilizado `FP` (gradiente `from-sky-400 to-indigo-500`) e texto "Fábio Paulo" com badge sutil de disponibilidade.
- **Critério de Sucesso:** Importável na Navbar horizontal e vertical.

### Tarefa 3: Modernização da Navbar Horizontal
- **Ficheiros:**
  - `src/components/navbar/horizontal/index.tsx`
  - `src/components/navbar/horizontal/item.tsx`
  - `src/components/navbar/horizontal/index.scss`
- **Ação:**
  - Substituir `bg-zinc-800` sólido por `sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/80`.
  - Usar layout `flex justify-between items-center w-full px-4 lg:px-8`.
  - Inserir `<NavbarLogo />` à esquerda.
  - Links centrais limpos: `text-slate-400 hover:text-white transition-colors`, com ativo em `text-sky-400 font-semibold`.
  - Botão de ação rápida à direita ("Download CV" ou contacto rápido).
- **Critério de Sucesso:** Navegação visualmente equilibrada em ecrãs grandes.

### Tarefa 4: Refatoração do Drawer Mobile
- **Ficheiros:**
  - `src/components/navbar/vertical/index.tsx`
  - `src/components/navbar/vertical/index.scss`
- **Ação:**
  - Atualizar o backdrop para `bg-slate-950/80 backdrop-blur-sm`.
  - Painel lateral com `bg-slate-900 border-r border-slate-800`.
  - Links com cantos arredondados, padding confortável e realce ao toque em `hover:bg-slate-800/80 hover:text-sky-400`.
- **Critério de Sucesso:** Drawer abre e fecha suavemente em ecrãs móveis sem saltos de layout.

### Tarefa 5: Revitalização do Fundo Global e Foto
- **Ficheiros:**
  - `src/index.css`
  - `src/components/container/section/index.scss`
  - `src/sections/banner/index.scss`
- **Ação:**
  - Injetar no `body` a cor de fundo `#0a0e1a` e um ponto de luz radial atmosférico difuso no topo.
  - Atualizar secções alternadas para `#0a0e1a` e `#0f172a`.
  - Alterar o filtro da imagem da foto de `brightness(40%)` para `brightness(95%) contrast(105%)`.
- **Critério de Sucesso:** A página perde o tom escuro/morto e ganha luminosidade e sofisticação imediata.

### Tarefa 6: Verificação de Build e Testes
- **Ação:** Executar `npm run build` e inspecionar o bundle final.
