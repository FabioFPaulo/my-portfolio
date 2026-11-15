# Plano de Execução: Modernização da Secção Experiences (`docs/plans/experiences-modernization.md`)

Este plano documenta o passo a passo da integração do repositório de experiências e reformulação da timeline.

---

## 1. Visão Geral das Tarefas

| Tarefa | Ficheiro(s) Alvo | Descrição |
| :--- | :--- | :--- |
| **Tarefa 1** | `src/repositories/local/experiences/*` | Criar tipagem, dados do CV e implementação do repositório local. *(Concluído)* |
| **Tarefa 2** | `docs/adr/004-experiences-repository-and-modern-timeline.md` | Documentar o ADR da timeline e repositório. *(Concluído)* |
| **Tarefa 3** | `src/components/card/experience/*` | Refatorar `CardExperienceComponent`: nó da timeline, badge de período (com pulso verde se for cargo atual), título, projeto, descrição justificada e pílulas de tecnologias. |
| **Tarefa 4** | `src/sections/experiences/*` | Atualizar a secção para consumir `experiencesRepository`, estruturar a linha vertical da timeline e animações Framer Motion escalonadas. |
| **Tarefa 5** | `docs/features.md` | Atualizar a matriz de funcionalidades implementadas. |
| **Tarefa 6** | Terminal / Scripts | Validar build (`npm run build`) e linting (`npm run lint`). |
