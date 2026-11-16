# Plano de Implementação: Secção Publications & Vitrina Científica

Este plano documenta a desconstrução conceitual, análise de skills necessárias e a implementação técnica da secção **Publications**, refletindo a produção científica do currículo Europass (`docs/files/CV-Europass.pdf`).

---

## 1. Análise de Skills & Desconstrução da Ideia

### A. Skills e Competências Necessárias
1. **Domain Modeling & Information Architecture:**
   - Desconstrução do domínio de artigos científicos (autores, conferência/simpósio, ano, status de aceitação/publicação, editora, volume, páginas e palavras-chave).
   - Separação entre dados mutáveis (status de indexação, novos artigos) e componentes visuais estáveis.
2. **Repository Pattern em TypeScript:**
   - Tipagem estrita com contratos de interface (`IPublicationItem`, `IPublicationsRepository`).
   - Exportação singleton na camada de infraestrutura de dados local.
3. **UI/UX Engineering & Academic Storytelling:**
   - Apresentação de artigos em cartões modernos com contraste e hierarquia clara (autor em destaque, editora em badge e citação formatada).
   - Recurso prático de "Copiar Citação" com feedback no clipboard.
   - Parágrafos de abstract estritamente justificados (`text-justify`).
4. **Layout Orchestration & Visual Rhythm:**
   - Inserção precisa a seguir a "Technical Skills".
   - Manutenção do ritmo alternado de cores (`colorScheme="color-1"` e `"color-2"`).
   - Atualização do utilitário de navegação com âncora suave.

---

## 2. Fases de Execução

### Fase 1: Camada de Dados (Repository Pattern)
- [x] Criar `src/repositories/local/publications/types.ts`.
- [x] Criar `src/repositories/local/publications/data.ts` com as 4 publicações (AmI 2026, SCA 2024 / Springer LNNS, ICEET 2025, ICEET 2024 / IEEE).
- [x] Criar `src/repositories/local/publications/repository.ts` e barrel `index.ts`.
- [x] Integrar no barrel central `src/repositories/index.ts`.

### Fase 2: Componente e Apresentação
- [x] Criar `src/sections/publications/index.tsx` com cartões, destaque de autor e funcionalidade de cópia de citação.
- [x] Criar `src/sections/publications/index.css` com estilização Tailwind CSS v4.

### Fase 3: Integração no Layout Principal
- [x] Inserir `<PublicationsSection />` após `<LanguagesSection />` em `src/App.tsx`.
- [x] Ajustar `<FooterSection />` para `colorScheme="color-2"`.
- [x] Adicionar `{ label: "publications", url: "publications" }` no navbar após `"skills"`.

### Fase 4: Validação & Auditoria
- [x] Compilação TypeScript com `npm run build`.
- [x] Auditoria de linter com `npm run lint`.
- [x] Registo de ADR 010 e atualização da documentação.
