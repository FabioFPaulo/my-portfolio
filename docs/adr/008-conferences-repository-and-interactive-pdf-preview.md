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

3. **Visualizador Customizado com `react-pdf` v9 e Worker Estático:**
   - Adoção da biblioteca oficial `react-pdf` (baseada em Mozilla PDF.js), compatível com React 18.
   - Renderização nativa em HTML5 Canvas, perfeitamente integrada no tema escuro (*Deep Slate & Glassmorphism*).
   - O worker do `pdfjs-dist` foi desacoplado e colocado como asset estático em `public/pdf.worker.min.mjs`, garantindo carregamento local infalível respeitando `${import.meta.env.BASE_URL}` tanto em desenvolvimento como em produção no GitHub Pages.
   - Controlos interativos implementados: Zoom In, Zoom Out, Reset (100%), paginação dinâmica, botão de abertura em nova aba (Google Drive) e botão de fechar `✕`.

4. **Navegação e Ritmo Visual:**
   - Inserção da secção no `App.tsx` com `colorScheme="color-2"`.
   - Adicionada âncora `"conferences"` ao utilitário de navegação `src/components/navbar/utils.ts`.

## Consequências
- A experiência do utilizador é moderna e interativa, permitindo inspecionar o certificado ou documento da conferência diretamente no portfólio sem sair da página.
- A arquitetura preserva a separação de responsabilidades (dados no repositório, lógica de visualização desacoplada).
- Facilidade de adição de futuras conferências e seminários apenas atualizando `data.ts`.
