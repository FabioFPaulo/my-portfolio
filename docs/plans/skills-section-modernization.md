# Plano de Execução: Modernização da Secção de Competências Técnicas (`docs/plans/skills-section-modernization.md`)

Este plano documenta o passo a passo da substituição dos círculos arbitrários de linguagens pela nova matriz categorizada de competências técnicas.

---

## 1. Visão Geral das Tarefas

| Tarefa | Ficheiro(s) Alvo | Descrição |
| :--- | :--- | :--- |
| **Tarefa 1** | `src/repositories/local/skills/*` | Criar tipagem, categorias estruturadas do CV e repositório local. *(Concluído)* |
| **Tarefa 2** | `docs/adr/005-skills-matrix-repository-and-categorized-cards.md` | Documentar o ADR da matriz de competências. *(Concluído)* |
| **Tarefa 3** | `src/components/card/language/*` | Refatorar `CardLanguageComponent` para suportar renderização de categoria de competências em cartão de vidro (`CardSkillCategory`). |
| **Tarefa 4** | `src/sections/languages/*` | Atualizar a secção para consumir `skillsRepository`, com grelha moderna em 3 colunas (responsiva) e animações Framer Motion escalonadas. |
| **Tarefa 5** | `src/components/navbar/utils.ts` | Atualizar o rótulo da Navbar de `"languages"` para `"skills"`. |
| **Tarefa 6** | `docs/features.md` | Atualizar a matriz de funcionalidades implementadas. |
| **Tarefa 7** | Terminal / Scripts | Validar build (`npm run build`) e linting (`npm run lint`). |
