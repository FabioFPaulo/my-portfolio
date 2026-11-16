# ADR 011: Roteamento com React Router e Navegação por Hash (`#<nome-section>`)

* **Status:** Aceite
* **Data:** 2026-11-16
* **Decisores:** Utilizador & Antigravity (Agente de IA)
* **Contexto Técnico:** Portfólio pessoal (React 19, TypeScript, React Router v8, Tailwind CSS v4, Framer Motion)

---

## 1. Contexto e Problema

Anteriormente, o portfólio geria a navegação exclusivamente através do pacote legado `react-scroll`.
Embora permitisse rolagem suave simples entre secções, apresentava limitações arquiteturais importantes:
1. **Ausência de Deep Linking:** O URL do navegador não refletia o estado da navegação (ex.: `/#about-me`, `/#projects`, `/#experiences`), impedindo o compartilhamento direto de links para secções específicas.
2. **Histórico do Browser Desconectado:** Os botões de voltar/avançar do navegador não acompanhavam as secções navegadas pelo utilizador.
3. **Ausência de Suporte SPA Declarativo:** Sem um router de primeira classe, a aplicação não oferecia suporte nativo a rotas, parâmetros ou hooks padrão da comunidade (`useLocation`, `Link`, etc.).

---

## 2. Decisão

Decidiu-se integrar o **React Router** (`react-router` v8) como infraestrutura de roteamento e navegação de secções com formato unificado `#<nome-section>`:

1. **Configuração de Provedor com Base Path:**
   * Injeção do `<BrowserRouter basename={import.meta.env.BASE_URL}>` no ponto de entrada (`src/main.tsx`).
   * Garante compatibilidade total tanto em ambiente local como em produção no GitHub Pages (`/my-portfolio/`).

2. **Formato Unificado de Âncoras `#<nome-section>`:**
   * Atualização de todos os caminhos e itens em `src/components/navbar/nav-groups.ts` e `src/components/navbar/utils.ts` para usar o prefixo `#` explícito:
     * `#home` -> Banner / Topo
     * `#about-me` -> Sobre mim
     * `#academic-education` -> Formação académica
     * `#experiences` -> Histórico profissional
     * `#projects` -> Projetos pessoais
     * `#leadership` -> Liderança e mentoria
     * `#conferences` -> Conferências internacionais
     * `#certifications` -> Certificações e cursos
     * `#languages` -> Competências técnicas
     * `#publications` -> Artigos científicos
     * `#footer` -> Rodapé

3. **Substituição de Links por Componentes Declarativos do React Router:**
   * Todos os links de navegação (`NavbarHorizontalItem`, `NavbarVerticalItem`, `NavbarLogo`, Banner CTA e Footer) passaram a utilizar o `<Link to="#<section>" />` nativo do React Router.

4. **Tratamento de Deep Linking, Scroll Suave Cinematográfico e Estado Ativo Hierárquico:**
   * Motor de scroll com curva de easing `easeInOutCubic` e duração calculada dinamicamente com base na distância percorrida, além de suporte a interrupção graciosa quando o utilizador intervém (mouse wheel ou touch).
   * O componente `HashScrollHandler` aciona a rolagem suave até ao elemento alvo no carregamento inicial da página (após o término do preloader / `!isLoading`).
   * O hook `useSectionObserver` monitoriza a secção no viewport em tempo real via `requestAnimationFrame` (ignorando interferências temporárias durante scroll programático) e sincroniza a URL via `window.history.replaceState`.
   * **Ativação Hierárquica na Navbar:** Quando qualquer subsecção/item está ativo (ex.: `#about-me`), tanto o item individual quanto o botão do separador pai da categoria (ex.: `Profile`) recebem a classe e o estilo de destaque `is-active`, com indicador luminoso e tonalidade Sky Blue.

---

## 3. Consequências

### Positivas:
* **Deep Linking Completo:** Links diretos como `https://.../my-portfolio/#academic-education` funcionam imediatamente e rolam suavemente até à secção correspondente.
* **Sincronização Bidirecional:** A barra de endereços do browser reflete em tempo real a secção visível durante o scroll.
* **Evolutividade:** Abre caminho para subpáginas ou rotas modais futuras mantendo a consistência do ecossistema React.
* **Eliminação de Código Redundante:** O scroll suave é orquestrado nativamente pelo JavaScript padrão e pelo React Router, mantendo o controle total da altura da Navbar fixa (70px).
