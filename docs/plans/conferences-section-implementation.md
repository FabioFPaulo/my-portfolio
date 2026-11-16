# Plano de Implementação: Secção Conferences and Seminars com PDF Preview Interativo

## 1. Visão Geral
Adicionar a secção **Conferences & Seminars** ao portfólio de Fábio Paulo, refletindo a sua participação no ICEET 2025 conforme o currículo oficial `CV-Europass.pdf`. A secção implementará o padrão de repositório local e um visualizador de documentos com animação *split-view* deslizante.

---

## 2. Componentes e Ficheiros Envolvidos

1. **Repositório:**
   - `src/repositories/local/conferences/types.ts`: Definição de `IConferenceItem` e `IConferencesRepository`.
   - `src/repositories/local/conferences/data.ts`: Coleção tipada com os dados do ICEET 2025.
   - `src/repositories/local/conferences/repository.ts`: Implementação do repositório.
   - `src/repositories/local/conferences/index.ts`: Barrel export.
   - `src/repositories/index.ts`: Re-exportação no hub de repositórios.

2. **Secção Visual & Componente de UI:**
   - `src/sections/conferences/index.tsx`: Componente principal da secção com estado de conferência selecionada (`selectedConferenceId`), animações de layout (`layout`, `AnimatePresence`) e renderização em duas colunas quando ativo.
   - `src/sections/conferences/index.scss`: Estilos seguindo o design system *Deep Slate & Vibrant Tech*, glassmorphism e responsividade móvel.
   - `src/sections/conferences/types.ts`: Tipos auxiliares de props e estado de visualização.

3. **Integração no Ecrã Principal:**
   - `src/App.tsx`: Importação e montagem de `<ConferencesSection />` mantendo a alternância de cores de secção.
   - `src/components/navbar/utils.ts`: Adição da âncora `"conferences"` na barra de navegação.

4. **Documentação & Registos:**
   - `docs/adr/008-conferences-repository-and-interactive-pdf-preview.md`: Registo de decisão arquitetural.
   - `docs/features.md` e `docs/architecture.md`: Atualização da matriz de funcionalidades e diagrama de blocos.

---

## 3. Critérios de Aceitação
- [x] Dados de conferência isolados no repositório `LocalConferencesRepository`.
- [ ] Ao clicar no card ou no botão de pré-visualização, o layout contrai suavemente para a esquerda e o visualizador desliza pela direita.
- [ ] O visualizador exibe o PDF com controlos e botão de fechar.
- [ ] Em mobile, o visualizador adapta-se como um painel expansível vertical ou drawer responsivo.
- [ ] A compilação `npm run build` passa com 0 erros de TypeScript.
- [ ] O linter `npm run lint` passa com 0 warnings e 0 erros.
