# ADR 005: Repositório de Competências e Transição para Matriz de Categorias

* **Status:** Aceite
* **Data:** 2026-11-15
* **Decisores:** Utilizador & Antigravity (Agente de IA)
* **Contexto Técnico:** Secção "Most Used Languages" ([src/sections/languages/](file:///mnt/workstation/repositories/github/my-portfolio/src/sections/languages/)) e componente de cartões ([src/components/card/language/](file:///mnt/workstation/repositories/github/my-portfolio/src/components/card/language/)).

---

## 1. Contexto e Problema

A secção anterior utilizava a biblioteca `react-circular-progressbar` para exibir apenas três linguagens (TypeScript 53.35%, Python 36.65%, JavaScript 10%) com percentuais arbitrários.
Esse padrão causava dois problemas centrais:
1. **Omissão de Especializações Críticas:** O utilizador possui experiência comprovada em **Deep Learning, Visão Computacional, Web3D (Babylon.js/Three.js), Arquitetura Backend (NestJS/Ktor), Mobile (Android/Kotlin/Flutter), IoT e DevOps (Docker/CI/CD)**, que ficavam completamente invisíveis.
2. **Anti-pattern de Avaliação:** Percentagens de proficiência ("10% JavaScript", "53% TypeScript") são amplamente desaconselhadas em recrutamento técnico moderno, pois não representam competência de engenharia de software nem o domínio de ferramentas.

---

## 2. Decisão

1. **Adoção do Padrão Repository Local:**
   * Criação do módulo `src/repositories/local/skills/` com contratos `ISkillCategory` e `ISkillsRepository`.
   * Agrupamento das competências do [docs/files/CV-Europass.pdf](file:///mnt/workstation/repositories/github/my-portfolio/docs/files/CV-Europass.pdf) em 6 categorias de domínio:
     * *Deep Learning & 3D Graphics*
     * *Back-End & Architecture*
     * *Front-End & Web*
     * *Mobile Development*
     * *Databases & Storage*
     * *DevOps & Cloud/Infra*
2. **Redesign para Matriz em Cartões de Vidro (*Glass Skills Matrix*):**
   * Substituição dos círculos com percentagens por cartões temáticos com ícones em gradiente, título da especialidade e pílulas interativas com animação sutil no hover.
   * Evolução do título da secção para **"Technical Skills"** mantendo suporte à âncora `#languages` e `#skills` para transições de rolagem suave sem quebrar compatibilidade.

---

## 3. Consequências

* **Visibilidade Abrangente:** Recrutadores e clientes compreendem imediatamente a profundidade e a amplitude técnica do perfil.
* **Estética Coesa:** Alinhamento total com a linguagem visual *Deep Slate & Vibrant Tech*.
* **Extensibilidade:** Novas linguagens ou frameworks podem ser adicionados diretamente em [src/repositories/local/skills/data.ts](file:///mnt/workstation/repositories/github/my-portfolio/src/repositories/local/skills/data.ts).
