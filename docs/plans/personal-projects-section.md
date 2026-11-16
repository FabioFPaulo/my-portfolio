# Plano de Execução: Secção Personal Projects (`docs/plans/personal-projects-section.md`)

Este plano documenta o passo a passo da integração da nova secção de projetos pessoais com base nos projetos do CV oficial.

---

## 1. Visão Geral das Tarefas

| Tarefa | Ficheiro(s) Alvo | Descrição |
| :--- | :--- | :--- |
| **Tarefa 1** | `src/repositories/local/projects/*` | Criar tipagem, projetos do CV e implementação do repositório local. *(Concluído)* |
| **Tarefa 2** | `docs/adr/006-personal-projects-repository-and-showcase.md` | Documentar o ADR dos projetos pessoais. *(Concluído)* |
| **Tarefa 3** | `src/components/card/project/*` | Refatorar `CardProjectComponent`: layout glassmorphism, badge de foco, links GitHub/Demo, descrição justificada e stack pills. |
| **Tarefa 4** | `src/sections/projects/*` | Atualizar a secção para consumir `projectsRepository`, grelha responsiva em 2 colunas e animações escalonadas no Framer Motion. |
| **Tarefa 5** | `src/App.tsx` & `src/sections/languages/index.tsx` | Montar `<Projects />` (`colorScheme="color-2"`) e alternar `LanguagesSection` para `colorScheme="color-1"`. |
| **Tarefa 6** | `src/components/navbar/utils.ts` | Reativar o link `"projects"` no menu de navegação. |
| **Tarefa 7** | `docs/features.md` & `docs/architecture.md` | Atualizar a documentação viva. |
| **Tarefa 8** | Terminal / Scripts | Validar build (`npm run build`) e linting (`npm run lint`). |
