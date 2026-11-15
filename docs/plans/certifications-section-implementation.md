# Plano de Implementação: Secção Certifications & Reutilização do DocumentDrawer

Este plano detalha o processo de desconstrução, arquitetura de dados e implementação da secção **Certifications**, extraída do currículo Europass (`docs/files/CV-Europass.pdf`).

---

## 1. Desconstrução da Ideia & Requisitos

1. **Origem dos Dados:**
   - No documento `CV-Europass.pdf`, a secção `CERTIFICATIONS` detalha três participações no programa **Verão Ciência** do **Instituto Politécnico de Bragança (IPB)**:
     - **2026 (9 Ago 2026):** "Aprende a criar as tuas próprias páginas para smartphone / tablet / web" (design responsivo, mobile-first, componentes adaptativos).
     - **2025 (13 Jul 2025):** "Aprende a criar as tuas próprias apps para smartphone / tablet / web" (desenvolvimento de layouts adaptativos e componentes em ReactJS).
     - **2024 (14 Jul 2024):** "Aprende a criar as tuas próprias páginas Web" (iniciação ao desenvolvimento frontend moderno e ecossistema React).
   - Modalidade: Presencial (*Presential*).
   - Tipo de atividade: Mentoria, instrução técnica e facilitação de workshops práticos (*Teaching & Mentoring*).

2. **Requisitos de Arquitetura:**
   - **Padrão Repository:** Todos os dados devem residir num repositório tipado em `src/repositories/local/certifications/`, permitindo futuras expansões e testes isolados.
   - **Visualização de Documentos:** Ao clicar num certificado/edição, deve abrir o `DocumentDrawer` reutilizável em formato slide-over com pré-visualização vetorial via `react-pdf`.
   - **Design & Ritmo:** Estética consistente com o tema Dark Glassmorphism, texto estritamente justificado (`text-justify`), logotipo oficial do IPB e alternância correta de cores entre secções.
   - **Navegação:** Adicionar a secção ao menu de navegação global.

---

## 2. Fases de Execução

### Fase 1: Camada de Dados (Repository Pattern)
- [x] Criar `src/repositories/local/certifications/types.ts` com interfaces `ICertificationItem` e `ICertificationsRepository`.
- [x] Descarregar os 3 PDFs oficiais do Google Drive para `public/files/` (`verao_ciencia_2024_certificate.pdf`, `verao_ciencia_2025_certificate.pdf`, `verao_ciencia_2026_certificate.pdf`).
- [x] Criar `src/repositories/local/certifications/data.ts` com 3 registos individuais para cada certificado do Verão Ciência (2026, 2025, 2024), nomeados como "Universidade Politécnica de Bragança".
- [x] Criar `src/repositories/local/certifications/repository.ts` implementando a classe e exportando a instância `certificationsRepository`.
- [x] Criar barrel `index.ts` e expor em `src/repositories/index.ts`.

### Fase 2: Componente e Apresentação (1 Card por Certificado)
- [x] Criar `src/sections/certifications/index.tsx`:
  - Cartões individuais por certificado com logotipo UPB (`logo_upb.svg`), badges de edição, data e metadados.
  - Parágrafo descritivo justificado literal do CV Europass.
  - Tags de competências específicas de cada edição.
  - Botão de pré-visualização em ecrã via `DocumentDrawer` e botão com ligação para o Google Drive.
- [x] Criar `src/sections/certifications/index.css` utilizando Tailwind CSS v4 e nesting limpo.

### Fase 3: Integração no Layout Principal
- [x] Inserir `<CertificationsSection />` em `src/App.tsx` com `colorScheme="color-1"`.
- [x] Ajustar `LanguagesSection` para `colorScheme="color-2"` mantendo a alternância harmoniosa.
- [x] Adicionar o item `"certifications"` em `src/components/navbar/utils.ts`.

### Fase 4: Validação & Auditoria
- [x] Verificar conformidade estrita de tipagem TypeScript via `npm run build`.
- [x] Executar linter ESLint 10 via `npm run lint` (0 erros, 0 avisos).
- [x] Documentar ADR 009 e atualizar a documentação de arquitetura e funcionalidades.
