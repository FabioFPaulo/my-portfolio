# Design Especificação: Document Preview Vertical com Slide-Over Drawer

## 1. Resumo de Entendimento (Understanding Summary)
* **Objetivo:** Substituir a pré-visualização embutida em duas colunas da secção `#conferences` por um painel lateral deslizante vertical de página inteira (*Slide-over Drawer*).
* **Motivação:** Proporcionar uma experiência de leitura contínua com 100% da altura da viewport, mantendo os cartões da secção de conferências sempre limpos, simétricos e centrados.
* **Público-alvo:** Visitantes, recrutadores e revisores técnicos que pretendem inspecionar certificados e artigos sem sair da aplicação.
* **Restrições:**
  - Montagem na raiz visual via React Portal (`createPortal(..., document.body)`).
  - Largura de 100% em ecrãs móveis e ~50% (`max-w-2xl`) em desktop.
  - Animação combinada de backdrop fade e slide horizontal da direita (`Framer Motion`).
  - Bloqueio suave do scroll do `body` e suporte ao fecho via tecla `Escape`, clique no backdrop e botão `✕`.
* **Não-Objetivos:** Não manter o layout *split-screen* local dentro da secção de conferências.

---

## 2. Suposições e Requisitos Não-Funcionais
* **Performance:** `@embedpdf/viewer-react` é renderizado apenas quando o drawer está ativo, reduzindo o consumo de memória fora de visualização.
* **Acessibilidade:** Escuta automática de eventos de teclado (`Escape`) e suporte a foco.
* **Resiliência:** Inclusão de botão persistente para abertura direta em nova aba/download como alternativa robusta.

---

## 3. Registo de Decisões (Decision Log)

| ID | Decisão | Alternativas Analisadas | Justificação |
| :--- | :--- | :--- | :--- |
| **DEC-01** | Criar componente `DocumentDrawer` montado via `createPortal`. | Drawer local com `fixed` ou Contexto Global complexo. | Isola o drawer de interferências de `overflow` ou `transform` dos containers pais. |
| **DEC-02** | Largura adaptativa: 100% em mobile e 50% (`max-w-2xl`) em desktop. | Largura única de 70% ou ecrã total permanente. | Melhor equilíbrio entre legibilidade do documento e perceção do contexto da aplicação. |
| **DEC-03** | Animação coordenada com `AnimatePresence` (`fade` no backdrop + `slide` no painel). | Transições puramente CSS. | Controlo preciso do ciclo de vida de montagem e desmontagem dos nós DOM. |
| **DEC-04** | Bloqueio temporário de scroll em `document.body` com cleanup seguro. | Permitir rolagem concorrente da página de fundo. | Foca a atenção e eventos de scroll do utilizador estritamente dentro do visualizador do PDF. |

---

## 4. Arquitetura e Contrato de Componentes

### 4.1. `DocumentDrawer` (`src/components/drawer/document/`)
* **`types.ts`:**
  ```typescript
  export interface IDocumentDrawerProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    subtitle?: string;
    pdfUrl: string;
    downloadUrl?: string;
  }
  ```
* **`index.tsx`:**
  - Renderiza `createPortal(..., document.body)`.
  - Executa animação com `AnimatePresence`.
  - Contém barra superior de cabeçalho, botão de fechar, botão de abertura externa e container do visualizador `<PDFViewer />`.
* **`index.scss`:**
  - Estilos em Tailwind CSS e CSS puro para altura total (`h-screen`), z-index elevado (`z-50`) e blur translúcido.

### 4.2. `ConferencesSection` (`src/sections/conferences/`)
* **`index.tsx`:**
  - Cartão mantido em layout centrado (`max-w-3xl mx-auto`).
  - Botão *"View Document / Certificate"* aciona `setSelectedConference(item)`.
  - Instancia `<DocumentDrawer />` passando as props da conferência ativa.
* **`index.scss`:**
  - Remoção de classes de split-screen (`is-split`, `col-split`), simplificando os estilos.
