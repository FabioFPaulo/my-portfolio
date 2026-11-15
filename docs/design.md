# Sistema de Design e Estilos (`docs/design.md`)
## Design System Atualizado: Deep Slate & Vibrant Tech

Este documento serve como fonte única de verdade (*source of truth*) para as diretrizes visuais do portfólio de **Fábio Paulo**, formalizando a nova paleta de cores luminosa, tipografia, escalas de espaçamento e componentes chave.

---

## 1. Paleta de Cores e Tokens Semânticos

A paleta transita do cinzento neutro e opaco para a estética **Deep Slate Tecnológico**, combinando profundidade noturna com acentos vivos em ciano, azul-celeste e índigo.

### Cores Base & Superfícies (Superfícies Escuras Vivas)

| Token Semântico | Valor Hex / Tailwind | Aplicação no Projeto |
| :--- | :--- | :--- |
| `surface-base` | `#0a0e1a` (`slate-950`) | Fundo principal da página; profundo e rico. |
| `surface-elevated` | `#0f172a` (`slate-900`) | Fundo de secções alternadas e contentores. |
| `surface-card` | `rgba(15, 23, 42, 0.75)` | Cartões com transparência e desfoque (*glassmorphism*). |
| `surface-nav` | `rgba(10, 14, 26, 0.8)` | Barra flutuante de navegação com `backdrop-blur-md`. |
| `border-subtle` | `rgba(51, 65, 85, 0.5)` (`slate-700/50`) | Bordas finas de separação de vidro nos cartões e navbar. |
| `border-glow` | `rgba(56, 189, 248, 0.3)` (`sky-400/30`) | Efeito de borda luminosa ao passar o rato (*hover*). |

### Cores de Texto e Contraste (Tipografia Clara)

| Token Semântico | Valor Hex / Tailwind | Aplicação no Projeto |
| :--- | :--- | :--- |
| `text-primary` | `#f8fafc` (`slate-50`) | Títulos, cabeçalhos e rótulos de alto destaque. |
| `text-secondary`| `#cbd5e1` (`slate-300`) | Texto de leitura regular e descrições detalhadas. |
| `text-muted` | `#94a3b8` (`slate-400`) | Metadados, subtítulos, datas e links neutros. |
| `text-accent` | `#38bdf8` (`sky-400`) | Links ativos, palavras-chave e elementos em destaque. |

### Cores de Acento e Gradientes de Luz

| Token Semântico | Valor Hex / Tailwind | Aplicação no Projeto |
| :--- | :--- | :--- |
| `accent-primary` | `#38bdf8` (`sky-400`) | Cor primária para foco, links ativos e realces. |
| `accent-secondary`| `#6366f1` (`indigo-500`) | Cor secundária de apoio e base para botões em gradiente. |
| `accent-glow` | `rgba(56, 189, 248, 0.15)` | Luz difusa ambiente (*radial glow*) no topo da página. |
| `accent-emerald` | `#10b981` (`emerald-500`) | Indicador de disponibilidade / status ativo. |

---

## 2. Gradientes e Efeitos Atmosféricos

1. **Luz Ambiente Superior (*Atmospheric Glow*):**
   ```css
   background: radial-gradient(circle at 50% 0%, rgba(99, 102, 241, 0.18) 0%, rgba(56, 189, 248, 0.08) 40%, transparent 70%);
   ```
2. **Gradiente de Títulos em Destaque:**
   ```css
   background: linear-gradient(135deg, #ffffff 30%, #38bdf8 100%);
   -webkit-background-clip: text;
   -webkit-text-fill-color: transparent;
   ```
3. **Botão de Ação Primário com Gradiente:**
   ```css
   background: linear-gradient(135deg, #38bdf8 0%, #6366f1 100%);
   ```

---

## 3. Tipografia e Escalas de Texto

* **Família Tipográfica:** Pilha do sistema via Tailwind CSS (`font-sans`: Inter, system-ui, sans-serif).
* **Tracking:** `letter-spacing: 1px;` em botões e subtítulos para elegância moderna.

| Nível / Uso | Classes Tailwind | Tamanho Calculado | Peso da Fonte |
| :--- | :--- | :--- | :--- |
| **Hero Title** | `text-4xl sm:text-6xl lg:text-7xl` | 36px a 72px | `font-extrabold` (800) |
| **Hero Subtitle** | `text-lg sm:text-xl text-sky-400` | 18px a 20px | `font-medium` (500) |
| **Section Title** | `text-2xl sm:text-3xl font-bold uppercase` | 24px a 30px | `font-bold` (700) |
| **Card Header** | `text-lg font-semibold text-white` | 18px | `font-semibold` (600) |
| **Body Text** | `text-sm sm:text-base text-slate-300` | 14px a 16px | `font-normal` (400) |

---

## 4. Componentes Chave

### 4.1. Navbar Flutuante (*Floating Glass Navbar*)
* **Estrutura:**
  * Posição fixa no topo (`sticky top-0 z-50`), com contentor central flutuante ou barra limpa com `backdrop-blur-md` e borda inferior `border-b border-slate-800/60`.
  * **Logo:** Monograma `FP` em caixa com gradiente `from-sky-400 to-indigo-500` acompanhado do nome "Fábio Paulo".
  * **Links Centrais:** Transição suave com `hover:text-sky-300` e classe ativa `text-sky-400 font-semibold relative`.
  * **Ação Direta:** Botão de chamada para ação rápida à direita para contacto ou CV.

### 4.2. Cartões de Vidro (*Glass Cards*)
* Fundo: `bg-slate-900/60 backdrop-blur-sm`.
* Borda: `border border-slate-800/80 hover:border-sky-500/40 transition-colors`.
* Sombra: `shadow-lg shadow-black/20 hover:shadow-sky-500/5`.

### 4.3. Foto de Perfil Iluminada
* Brilho calibrado a **95%** (`brightness(95%)`), contraste em **105%** e saturação a **100%**.
* Máscara suave em gradiente na base para fundir suavemente a foto no fundo sem cortes abruptos.
