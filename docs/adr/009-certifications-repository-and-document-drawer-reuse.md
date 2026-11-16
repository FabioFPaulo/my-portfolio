# ADR 009: Secção Certifications com Padrão Repository e Reutilização do DocumentDrawer

## Status
Aceite

## Contexto
O currículo Europass (`docs/files/CV-Europass.pdf`) contém a secção **CERTIFICATIONS**, com foco na atividade contínua de instrução e mentoria técnica realizada no programa **Verão Ciência** do Instituto Politécnico de Bragança (IPB) ao longo das edições de **2024, 2025 e 2026** ("Aprende a criar as tuas próprias páginas para smartphone / tablet / web" e "Aprende a criar as tuas próprias apps").
Cada uma das edições possui um certificado e documento comprovativo associado em formato PDF.

De acordo com as diretrizes de arquitetura do projeto:
1. Toda a informação que varia deve ser isolada num repositório tipado (`LocalCertificationsRepository`), assegurando desacoplamento entre dados e apresentação.
2. A visualização de documentos deve reutilizar o `DocumentDrawer` construído em React 19 / `react-pdf` (Dark Glassmorphism, renderização vetorial, zoom e rotação interativa), sem abrir abas externas nem recorrer ao viewer padrão descontextualizado do navegador.
3. O ritmo visual de secções (`colorScheme="color-1"` e `"color-2"`) e o navbar de navegação suave devem ser preservados.

## Decisões

1. **Repositório de Dados Isolado (`LocalCertificationsRepository`):**
   - Criada a pasta `src/repositories/local/certifications/` com:
     - `types.ts`: Definição da interface `ICertificationItem` (ano, edição, título, programa, instituição "Universidade Politécnica de Bragança", localização, modalidade presencial, data, categoria, competências, PDF local e link Google Drive) e contrato `ICertificationsRepository`.
     - `data.ts`: Coleção tipada com 3 cartões individuais para cada certificado do Verão Ciência (2026, 2025 e 2024), contendo as descrições literais do CV Europass, logotipo `logo_upb.svg`, ficheiros locais (`public/files/verao_ciencia_*.pdf`) e links diretos do Google Drive.
     - `repository.ts`: Implementação da classe `LocalCertificationsRepository` com métodos `getCertificationsData()` e `getCertificationById(id)`.
     - `index.ts`: Ponto de entrada barrel exportado centralmente em `src/repositories/index.ts`.

2. **Componente de Apresentação `CertificationsSection` (Cards Individuais por Certificado):**
   - Criado em `src/sections/certifications/`:
     - `index.tsx`: Renderiza um cartão dedicado por cada certificado com animações de cascata (`staggerChildren`), exibindo o logotipo da UPB, metadados institucionais ("Universidade Politécnica de Bragança", "Presential", "Teaching & Mentoring"), título de workshop, badge de edição, descrição justificada (`text-justify`), tags de competências e dupla ação:
       - Botão primário **"Visualizar Certificado"**: aciona o `DocumentDrawer` para pré-visualização vetorial imediata em ecrã.
       - Botão secundário **"Google Drive"**: ligação externa direta para o ficheiro partilhado.
     - `index.css`: Estilização nativa Tailwind CSS v4 (`@reference "../../index.css"`), respeitando o design system Deep Slate / Neon Sky / Indigo.

3. **Reutilização do `DocumentDrawer`:**
   - O componente `DocumentDrawer` é invocado no topo da secção com passagem de `title`, `subtitle`, `pdfUrl` e `downloadUrl`, renderizando o documento através de portal React com animação de slide vertical e controlos de zoom/rotação.

4. **Ritmo de Cores e Navegação:**
   - Inserida a secção no `src/App.tsx` com `colorScheme="color-1"` entre `ConferencesSection` (`color-2`) e `LanguagesSection` (`color-2`).
   - A secção `LanguagesSection` foi ajustada para `colorScheme="color-2"`, mantendo alternância harmónica com o `FooterSection` (`color-1`).
   - Adicionado o link `"certifications"` no utilitário de rotas do navbar (`src/components/navbar/utils.ts`).

## Consequências
- Os dados de certificações estão estruturados, versionados e facilmente extensíveis para novos certificados e diplomas.
- O `DocumentDrawer` demonstra alta reutilização através de diferentes secções (Conferências e Certificações).
- O portfólio mantém conformidade total com os guardrails (`AGENTS.md`), compilação limpa em TypeScript e 0 avisos/erros no ESLint 10.
