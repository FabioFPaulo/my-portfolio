# Plano de Execução: Modernização da Secção Academic Education (`docs/plans/academic-section-modernization.md`)

Este plano documenta o passo a passo da integração do repositório local e reformulação dos cartões de formação.

---

## 1. Visão Geral das Tarefas

| Tarefa | Ficheiro(s) Alvo | Descrição |
| :--- | :--- | :--- |
| **Tarefa 1** | `src/repositories/local/academic/*` | Criar tipagem, dados do CV e implementação do repositório local. *(Concluído)* |
| **Tarefa 2** | `docs/adr/003-academic-education-repository-and-cards.md` | Documentar o ADR da modernização e repositório. *(Concluído)* |
| **Tarefa 3** | `src/components/card/academic/*` | Refatorar `CardAcademicComponent`: layout glassmorphism, suporte ao `logo_upb.svg`, badges de grau e médias finais. |
| **Tarefa 4** | `src/sections/academic/*` | Atualizar a secção para consumir `academicRepository`, com grelha moderna em 2 colunas e animações Framer Motion escalonadas. |
| **Tarefa 5** | `docs/features.md` | Atualizar o documento de funcionalidades implementadas. |
| **Tarefa 6** | Terminal / Scripts | Validar build (`npm run build`) e linting (`npm run lint`). |
