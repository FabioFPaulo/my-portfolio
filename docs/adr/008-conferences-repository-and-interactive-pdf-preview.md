# ADR 008: Conferences and Seminars com Padrão Repository e Visualizador Interativo de PDF

## Status
Aceite

## Contexto
O currículo Europass (`docs/files/CV-Europass.pdf`) contém uma secção dedicada a **Conferences and Seminars**, destacando a participação e apresentação oral de Fábio Paulo na 11.ª conferência internacional **ICEET 2025** na Malásia (*"RFID-Based Smart Climate Control in Student Residences: A Personalized and Energy-Efficient Approach"*).
Cada registo de conferência possui um comprovativo ou documento PDF associado (certificado ou apresentação). Para proporcionar uma experiência de utilizador rica e interativa:
1. Os dados da conferência devem ser desacoplados e centralizados num repositório local tipado (`LocalConferencesRepository`).
2. A interação deve suportar um modo expansível de pré-visualização: ao clicar na conferência, o layout reajusta-se (deslocando a informação do artigo para a esquerda) e abrindo um painel lateral direito animado com visualizador de PDF embutido utilizando o pacote `@embedpdf/viewer-react`.

## Decisões

1. **Repositório de Dados Isolado:**
   - Criada a pasta `src/repositories/local/conferences/` com:
     - `types.ts`: Interface `IConferenceItem` com campos para título da conferência, edição, acrónimo, papel/tipo de apresentação, datas, localização, título do artigo, link oficial, tópicos-chave e URI do certificado PDF (`certificatePdf`).
     - `data.ts`: Coleção de dados oficial contendo o registo da ICEET 2025.
     - `repository.ts`: Classe `LocalConferencesRepository` com métodos `getConferencesData()` e `getConferenceById(id)`.
     - `index.ts`: Ponto de exportação barrel integrado em `src/repositories/index.ts`.

2. **Visualizador Vertical de Página Inteira (Slide-over Drawer via React Portal):**
   - Criação do componente desacoplado `DocumentDrawer` em `src/components/drawer/document/`, montado diretamente na raiz do DOM (`document.body`) via `createPortal`.
   - A secção `ConferencesSection` preserva a simetria de grelha centrada (`max-w-3xl mx-auto`). Ao clicar em "View Document / Certificate", ativa o drawer com 100% da altura da viewport.
   - Transição combinada via `Framer Motion` (`AnimatePresence`):
     - Backdrop escuro translúcido com fade (`opacity: 0 -> 1`).
     - Painel lateral vertical com slide da borda direita (`x: "100%" -> "0%"`), ocupando largura total em mobile e 50% (`max-w-2xl`) em desktop.
   - Bloqueio automático de scroll do `document.body` e escuta da tecla `Escape` para fecho ergonómico.

3. **Visualizador de PDF Totalmente Customizado via `react-pdf` & `pdfjs-dist`:**
   - Para evitar a interface cinzenta padrão e genérica do leitor de PDF do browser, foi implementada renderização direta em `<canvas>` vetorial com `react-pdf`.
   - **UI 100% Integrada no Design System:**
     - Barra de ferramentas em *Dark Glassmorphism* com botões táteis para Zoom In (`+`), Zoom Out (`-`), percentagem de escala, rotação (`↻`) e navegação de páginas.
     - Folha do documento centralizada com cantos arredondados, borda subtil (`border-slate-700/60`) e sombra flutuante luminescente (`shadow-2xl shadow-sky-500/10`) sobre o fundo escuro do drawer.
     - Indicador de loading suave com spinner em SVG neon e estado de erro resiliente com link de download.
   - **Resolução de Workers no Vite:** O worker do PDF.js é empacotado pelo Vite via `new URL("pdfjs-dist/build/pdf.worker.min.mjs", import.meta.url)`, garantindo compatibilidade total com o base path (`/my-portfolio/`) tanto em dev como em produção.

4. **Navegação e Ritmo Visual:**
   - Inserção da secção no `App.tsx` com `colorScheme="color-2"`.
   - Adicionada âncora `"conferences"` ao utilitário de navegação `src/components/navbar/utils.ts`.

## Consequências
- A experiência do utilizador é moderna e interativa, permitindo inspecionar o certificado ou documento da conferência diretamente no portfólio sem sair da página.
- A arquitetura preserva a separação de responsabilidades (dados no repositório, lógica de visualização desacoplada).
- Facilidade de adição de futuras conferências e seminários apenas atualizando `data.ts`.
