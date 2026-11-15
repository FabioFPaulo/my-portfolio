# ADR 001: Redesign da Navbar e Transição para Tema Deep Slate com Acentos Vivos

* **Status:** Aceite
* **Data:** 2026-11-15
* **Decisores:** Utilizador & Antigravity (Agente de IA)
* **Contexto Técnico:** Portfólio pessoal (React 18 + TypeScript + Tailwind CSS + Framer Motion)

---

## 1. Contexto e Problema

O portfólio utilizava uma estética com blocos maciços de cinzento escuro (`#27272a` / Zinc 800) e cinzento intermédio (`#4b5563` / Gray 600), com foto de perfil com brilho reduzido a 40% e uma barra de navegação sólida sem logo e sem ações rápidas de contacto.
Essa combinação resultava num aspeto sombrio, opaco e visualmente antiquado, além de problemas de contraste (o hover nos links escurecia o texto em vez de destacá-lo).

Era necessário:
1. Tornar o portal mais **vivo, luminoso e profissional**, sem perder a sofisticação tecnológica.
2. Modernizar a **Navbar**, transformando-a numa barra flutuante translúcida com identidade visual, indicador de secção ativo envolvente e atalhos rápidos.
3. Estabelecer um design system unificado em Tailwind CSS, reduzindo a dívida técnica acumulada em ficheiros `.scss`.

---

## 2. Decisão

Decidiu-se adotar as seguintes mudanças arquiteturais e visuais:

1. **Nova Paleta Cromática "Deep Slate + Dual Accent":**
   * **Fundo Base:** Transição de `#27272a` para um azul-ardósia noturno rico (`#0a0e1a` / `#0f172a`).
   * **Iluminação Atmosférica:** Adição de um foco de luz difuso no topo da página (*radial ambient glow*) em Indigo/Sky para criar profundidade e retirar a sensação de ecrã plano.
   * **Acentos Vivos:** Uso combinado de **Sky Blue (`#38bdf8`)** para links ativos e realces imediatos, e **Indigo (`#6366f1` / `#818cf8`)** para gradientes e botões secundários.
   * **Cartões com Efeito de Vidro Sutil (*Glassmorphism*):** Superfícies com fundo escuro translúcido (`bg-slate-900/60`), bordas finas (`border-slate-800/80`) e sombras suaves.
   * **Restauração da Foto:** Remoção do filtro excessivamente escuro, permitindo 95% de brilho natural com transição de gradiente suave na base.

2. **Redesign da Navbar (*Floating Glass Dock*):**
   * Transformação em barra flutuante com `backdrop-blur-md` e borda subtil de vidro.
   * Inclusão do monograma **FP** (com gradiente luminoso) no lado esquerdo.
   * Menu central de navegação limpo, removendo os separadores pontilhados ruidosos e adicionando indicador flutuante de secção ativa (*pill indicator*).
   * Inclusão de botão de ação rápida à direita para conversão direta (link para contacto ou download de CV).
   * Refatoração do drawer mobile para transição suave com backdrop escuro adequado (`bg-black/60`).

3. **Padronização em Tokens Tailwind:**
   * Centralização dos novos tokens em `tailwind.config.js` (`colors.brand`, `colors.surface`, `boxShadow.glow`), preparando a transição progressiva de código `.scss` para utilitários puros.

---

## 3. Consequências

### Positivas:
* **Impacto Visual Superior:** O portal ganha vida, luminosidade e profundidade sem se tornar berrante ou infantil.
* **Acessibilidade Aprimorada:** O contraste de texto e links no hover e active passa a cumprir plenamente as normas WCAG 2.1 AA.
* **Navegação Intuitiva:** O utilizador tem feedback instantâneo de em que secção se encontra na página.
* **Consistência de Manutenção:** Os novos tokens no Tailwind facilitam a extensão de novas páginas e secções pelos agentes de IA.

### Trade-offs / Cuidados:
* É necessário garantir que o efeito `backdrop-blur` tem fallback adequado para navegadores antigos (suportado nativamente pela propriedade `backdrop-filter` com fundo semi-opaco).
* As âncoras do `react-scroll` devem manter o `offset` de -60px a -70px compatível com a nova altura da navbar.
