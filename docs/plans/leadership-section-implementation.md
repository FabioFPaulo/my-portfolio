# Plano de Execução: Secção Leadership and Mentoring (`docs/plans/leadership-section-implementation.md`)

Este plano documenta o passo a passo da integração da nova secção de liderança e mentoria técnica.

---

## 1. Visão Geral das Tarefas

| Tarefa | Ficheiro(s) Alvo | Descrição |
| :--- | :--- | :--- |
| **Tarefa 1** | `src/repositories/local/leadership/*` | Criar tipagem, dados do CV e implementação do repositório local. *(Concluído)* |
| **Tarefa 2** | `docs/adr/007-leadership-and-mentoring-repository-and-section.md` | Documentar o ADR de liderança e mentoria. *(Concluído)* |
| **Tarefa 3** | `src/sections/leadership/*` | Criar o componente `LeadershipSection` consumindo `leadershipRepository`, com cartões de vidro, badges de orientação, descrição justificada e pílulas de liderança. |
| **Tarefa 4** | `src/App.tsx` | Montar `<LeadershipSection />` (`colorScheme="color-1"`) entre `<Projects />` (`colorScheme="color-2"`) e `<LanguagesSection />` (`colorScheme="color-2"`). |
| **Tarefa 5** | `src/components/navbar/utils.ts` | Adicionar o link `"leadership"` (âncora `leadership`) no menu de navegação. |
| **Tarefa 6** | `docs/features.md` & `docs/architecture.md` | Atualizar a documentação viva. |
| **Tarefa 7** | Terminal / Scripts | Validar build (`npm run build`) e linting (`npm run lint`). |
