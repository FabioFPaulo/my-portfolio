# Sistema de Design e Estilos (`docs/design.md`)

Este documento serve como fonte única de verdade (*source of truth*) para as diretrizes visuais do portfólio, incluindo a paleta de cores, tipografia, escalas de espaçamento, comportamento de botões e padrões de componentes.

---

## 1. Paleta de Cores e Tokens Semânticos

O portfólio adota uma estética **Dark Mode / Industrial Tech**, utilizando tons neutros escuros (Zinc/Gray) contrastados com um azul vivo como cor de destaque (*accent*).

### Cores Base & Neutras

| Token / Nome | Valor Hex / Tailwind | Aplicação no Projeto |
| :--- | :--- | :--- |
| **Dark Background (Principal)** | `#27272a` (`zinc-800`) | Fundo do banner, navbar, cards e secções `color-1`. |
| **Dark Neutral (Intermédio)** | `#18181b` (`zinc-900`) | Overlay escuro semi-transparente do banner em mobile (`bg-zinc-900/60`). |
| **Secondary Background** | `#4b5563` (`gray-600`) | Fundo das secções alternadas `color-2` e topo do gradiente. |
| **Text Primary (Alto Contraste)** | `#f8fafc` (`slate-50`) | Títulos, textos principais, cabeçalhos de secção e rótulos. |
| **Text Muted / Secondary** | `#9ca3af` (`gray-400` / `#cbd5e1`) | Subtítulos, descrições detalhadas e datas em cartões. |

### Cores de Destaque (Accent Colors)

| Token / Nome | Valor Hex / Tailwind | Aplicação no Projeto |
| :--- | :--- | :--- |
| **Brand Blue (Base)** | `#3b82f6` (`blue-500`) | Linha divisória de títulos, indicador ativo da navbar e barra de progresso. |
| **Interactive Blue (Botão)** | `#60a5fa` (`blue-400`) | Cor padrão do botão de chamada para ação (CTA "Download CV"). |
| **Interactive Blue (Hover)** | `#3b82f6` (`blue-500`) | Efeito hover do botão principal. |
| **Interactive Blue (Borda 3D)** | `#2563eb` (`blue-600`) | Borda inferior que confere profundidade ao botão (`border-b-4`). |
| **Interactive Blue (Hover Borda)**| `#1d4ed8` (`blue-700`) | Borda inferior durante o hover. |

---

## 2. Gradientes Definidos

1. **Banner Gradient (Horizontal):**
   ```css
   background: linear-gradient(270deg, rgba(39, 39, 42, 0.95) 33.86%, #27272a 100%);
   ```
2. **Container Section Gradient (Vertical):**
   ```css
   background: linear-gradient(180deg, #4b5563 97%, #27272a 100%);
   ```

---

## 3. Tipografia e Escalas de Texto

* **Família Tipográfica:** Pilha padrão do sistema via Tailwind CSS (`font-sans`: Inter, system-ui, -apple-system, sans-serif).
* **Espaçamento entre Letras (Letter Spacing):**
  * Títulos e Botões: `letter-spacing: 2px;` (estética moderna e legível em caixa alta).

| Nível / Uso | Classes Tailwind | Tamanho Calculado | Peso da Fonte |
| :--- | :--- | :--- | :--- |
| **Hero Title (Nome)** | `text-[5rem] leading-[5.3rem]` | ~80px | `font-extrabold` (800) |
| **Hero Subtitle** | `text-lg` | 18px (1.125rem) | `font-normal` (400) |
| **Section Primary Title** | `text-2xl sm:text-3xl uppercase` | 24px - 30px | `font-bold` (700) |
| **Card Header / Cargo** | `text-lg font-semibold` | 18px | `font-semibold` (600) |
| **Body / Descrições** | `text-sm sm:text-base` | 14px - 16px | `font-normal` (400) |
| **Metadados / Datas** | `text-xs sm:text-sm` | 12px - 14px | `font-light` / `font-medium` |

---

## 4. Espaçamentos e Estrutura de Layout

* **Espaçamento Vertical de Secções:**
  * Todas as secções usam `@apply py-24 px-3` (96px de respiro superior/inferior), permitindo ritmo visual consistente.
* **Contentores de Largura Máxima (`container-section-content`):**
  * Mobile (< 640px): `max-w-[80%]`
  * Pequenos ecrãs (sm): `max-w-[440px]`
  * Ecrãs médios (md): `max-w-screen-md` (768px)
  * Ecrãs grandes (xl): `max-w-screen-lg` (1024px)
  * Banner Hero (2xl): `max-w-screen-2xl` (1536px)

---

## 5. Padrões de Componentes de UI

### Botão 3D CTA ("Download CV")
Combina cores e descolamento vertical instantâneo para sensação táctil tátil física:
```scss
a {
  @apply w-full sm:w-[50%] text-center bg-blue-400 py-3 text-lg font-medium 
         uppercase rounded-xl border-b-4 border-b-blue-600 
         active:translate-y-[4px] active:border-b-0 active:border-t-4 active:border-t-transparent 
         transition-all duration-[5ms] hover:bg-blue-500 hover:border-b-blue-700;
  letter-spacing: 2px;
}
```

### Divisor de Secção (`.divider`)
Elemento gráfico de assinatura em títulos e blocos biográficos:
```scss
.divider {
  @apply h-1 w-full bg-blue-500 rounded-full;
}
```

### Cards e Efeitos Visuais
* **Academic Card:** Link com transição horizontal animada, ícone institucional e data.
* **Project Card:** Cartão com imagem de destaque, centralização flexível e efeito de escala ao entrar em foco.
* **Language / Skill Card:** Cartão com SVG monocromático e círculo de progresso (`CircularProgressbar`) integrado.
