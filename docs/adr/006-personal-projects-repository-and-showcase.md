# ADR 006: Repositório de Projetos Pessoais e Montra com Glassmorphism

* **Status:** Aceite
* **Data:** 2026-11-15
* **Decisores:** Utilizador & Antigravity (Agente de IA)
* **Contexto Técnico:** Secção "Personal Projects" ([src/sections/projects/](file:///mnt/workstation/repositories/github/my-portfolio/src/sections/projects/)) e componente de cartões ([src/components/card/project/](file:///mnt/workstation/repositories/github/my-portfolio/src/components/card/project/)).

---

## 1. Contexto e Problema

Anteriormente, a secção de projetos apresentava apenas uma grelha de logótipos estáticos sem texto ou detalhe, com dados acoplados em `src/sections/projects/utils.ts`.
Ao mesmo tempo, o [docs/files/CV-Europass.pdf](file:///mnt/workstation/repositories/github/my-portfolio/docs/files/CV-Europass.pdf) continha uma secção dedicada de **Projetos de Engenharia Pessoais** (*Hand-Gesture 3D Controller*, *Interactive 3D Product Landing Page*, *MMO Hub*, *Personal Portfolio*) com repositórios no GitHub e demonstrações ao vivo (*live demos*).

---

## 2. Decisão

1. **Adoção do Padrão Repository Local:**
   * Criação do módulo `src/repositories/local/projects/` (`types.ts`, `data.ts`, `repository.ts`).
   * Estruturação dos 4 projetos pessoais reais com categorias, desafios técnicos, descrições justificadas, tecnologias e hiperligações para código ou demonstração.
2. **Redesign dos Cartões em Vidro Translúcido (`Card.Project`):**
   * Superfície elevada em `bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm`.
   * Header com badge de categoria (*Computer Vision*, *WebGL & 3D*, *Mobile App*, *Web Engineering*) e atalho direto com ícone indicativo do GitHub ou Live Demo (`↗`).
   * Tags com a stack tecnológica de cada projeto.
3. **Alternância Cromática Harmoniosa:**
   * Inserção de `PersonalProjects` com `colorScheme="color-2"` entre *Work Experience* (`color-1`) e *Technical Skills* (`color-1`), mantendo o ritmo cromático contínuo.

---

## 3. Consequências

* **Portfólio de Engenharia Real:** Os visitantes podem explorar diretamente o código-fonte no GitHub e experimentar as demonstrações online interativas em 3D.
* **Desacoplamento:** A inclusão de novos projetos pessoais passa a ser feita em `src/repositories/local/projects/data.ts`.
