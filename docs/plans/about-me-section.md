# Plano de Execução: Secção About Me & Camada de Repositórios (`docs/plans/about-me-section.md`)

Este plano organiza a introdução da camada de repositórios locais e a implementação da secção **"About Me"** posicionada antes da **"Academic Education"**.

---

## 1. Visão Geral das Tarefas

| Tarefa | Ficheiro(s) Alvo | Descrição |
| :--- | :--- | :--- |
| **Tarefa 1** | `src/repositories/local/about/*` | Criar tipos, dados extraídos do `CV-Europass.pdf` e implementação do repositório local. *(Concluído)* |
| **Tarefa 2** | `docs/adr/002-local-repository-pattern.md` | Documentar o ADR da introdução da camada de repositórios. *(Concluído)* |
| **Tarefa 3** | `src/sections/about/*` | Criar o componente `AboutSection` consumindo o repositório local, com animações Framer Motion, layout em grelha moderna, destaques da tese de mestrado e tags de especialização. |
| **Tarefa 4** | `src/App.tsx` | Montar a nova `<AboutSection />` imediatamente antes de `<AcademicSection />`. |
| **Tarefa 5** | `src/components/navbar/utils.ts` | Adicionar o link `"about me"` (âncora `about-me`) após `"home"` e antes de `"education"`. |
| **Tarefa 6** | `docs/features.md` & `docs/architecture.md` | Atualizar a documentação viva com o novo módulo e fluxo de dados. |
| **Tarefa 7** | Terminal / Scripts | Validar build (`npm run build`) e linting (`npm run lint`). |

---

## 2. Critérios de Aceitação
* A secção "About Me" deve aparecer na página antes da secção de educação.
* O texto deve corresponder ao extraído do `CV-Europass.pdf`.
* A navegação da Navbar deve saltar suavemente para o `#about-me`.
* As cores e cartões devem seguir o padrão *Deep Slate & Vibrant Tech*.
* `npm run build` deve compilar com 0 erros.
