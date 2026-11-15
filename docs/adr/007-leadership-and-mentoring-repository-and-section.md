# ADR 007: Repositório e Secção de Liderança e Mentoria Técnica

* **Status:** Aceite
* **Data:** 2026-11-15
* **Decisores:** Utilizador & Antigravity (Agente de IA)
* **Contexto Técnico:** Secção "Leadership and Mentoring" ([src/sections/leadership/](file:///mnt/workstation/repositories/github/my-portfolio/src/sections/leadership/)).

---

## 1. Contexto e Problema

O portfólio anterior continha apenas as secções técnicas tradicionais de formação e projetos, omitindo o papel ativo do utilizador na **supervisão de estágios de software no CeDRI** e na **mentoria de estudantes no programa Verão Ciência da Universidade Politécnica de Bragança**, ambos registados no [docs/files/CV-Europass.pdf](file:///mnt/workstation/repositories/github/my-portfolio/docs/files/CV-Europass.pdf).

Demonstrar competências de liderança, realização de *code reviews*, tutoria de boas práticas e resolução de incidentes de produção é um forte elemento diferenciador para posições de liderança técnica (*Tech Lead*) e senioridade em engenharia de software.

---

## 2. Decisão

1. **Adoção do Padrão Repository Local:**
   * Criação do módulo `src/repositories/local/leadership/` (`types.ts`, `data.ts`, `repository.ts`).
   * Registo da supervisão formal de estágio no CeDRI e da mentoria técnica contínua nas edições 2024, 2025 e 2026 do Verão Ciência.
2. **Design dos Cartões de Mentoria em Vidro:**
   * Cartões com elevação sutil em `bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm`.
   * Header com badge de mentoria e período temporal.
   * Destaque para o projeto e orientando(s).
   * Descrição detalhada justificada com ênfase na disciplina de engenharia, revisão de código e estabilidade de sistemas em produção.
   * Pílulas de competências de liderança (`Code Review`, `Workflow Management`, `Production Triage`).
3. **Harmonização do Ritmo de Cores:**
   * Secção configurada com `colorScheme="color-1"` (`#0a0e1a`), posicionada entre *Personal Projects* (`color-2`) e *Technical Skills* (`color-2`), garantindo contraste nítido e alternado.

---

## 3. Consequências

* **Perfil Técnico Abrangente:** Demonstra maturidade para além da programação individual, comprovando capacidade de tutoria, revisão e liderança de equipa.
* **Manutenibilidade:** Novos estágios ou ações de formação podem ser adicionados em `src/repositories/local/leadership/data.ts`.
