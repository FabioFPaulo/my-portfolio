# ADR 003: Repositório Académico e Redesign Moderno dos Cartões de Educação

* **Status:** Aceite
* **Data:** 2026-11-15
* **Decisores:** Utilizador & Antigravity (Agente de IA)
* **Contexto Técnico:** Secção "Academic Education" ([src/sections/academic/](file:///mnt/workstation/repositories/github/my-portfolio/src/sections/academic/)) e componente de cartões ([src/components/card/academic/](file:///mnt/workstation/repositories/github/my-portfolio/src/components/card/academic/)).

---

## 1. Contexto e Problema

A secção anterior de "Academic Education" continha apenas dois cursos desatualizados (CTeSP e Licenciatura até 2025), omitindo o grau de **Mestre em Informática (MSc)** recentemente concluído, a formação técnica em Mirandela e as médias de curso (16.5 e 17.6) presentes no [docs/files/CV-Europass.pdf](file:///mnt/workstation/repositories/github/my-portfolio/docs/files/CV-Europass.pdf).

Além disso:
1. **Dados Estáticos Acoplados:** Os dados estavam gravados num ficheiro `utils.ts` local dentro de `src/sections/academic/`.
2. **Design Datado do Cartão:** O cartão utilizava fundo cinzento desbotado (`bg-gray-700`), efeitos de pseudo-elementos em 45º obsoletos e um filtro que distorcia o logótipo da universidade (`brightness-0 invert`).
3. **Logótipo Desatualizado:** O logótipo precisava de ser atualizado para o novo asset oficial em vetor [public/images/logo_upb.svg](file:///mnt/workstation/repositories/github/my-portfolio/public/images/logo_upb.svg).

---

## 2. Decisão

1. **Adoção do Padrão Repository:**
   * Criação do módulo `src/repositories/local/academic/` com contratos de dados completos (`IAcademicItem`, `IAcademicRepository`).
   * Inclusão dos 4 graus de formação constantes do CV oficial: Mestrado (MSc), Licenciatura, CTeSP e Curso Técnico de Ensino Secundário.
2. **Atualização do Logótipo Oficial:**
   * Utilização de `logo_upb.svg` para as instituições politécnicas universitárias, exibido com contentor nítido e fundo de contraste suave.
3. **Redesign do `Card.Academic`:**
   * Estrutura em vidro escuro translúcido (`bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm`).
   * Inclusão de **Badges de Grau** (*Master's*, *Bachelor*, *CTeSP*, *Technical*).
   * Destaque explícito de **Médias Finais** (*16.5* e *17.6*) como elementos de valorização curricular.
   * Ícone discreto de link externo e transição sutil de elevação no hover (`hover:-translate-y-1 hover:border-sky-500/40`).

---

## 3. Consequências

* **Fidelidade Curricular:** A secção reflete com 100% de precisão o percurso oficial registado no Europass.
* **Impacto Visual:** Cartões mais limpos, elegantes e alinhados com a estética *Deep Slate & Vibrant Tech*.
* **Manutenibilidade:** Novos cursos, certificações ou notas podem ser editados diretamente em `src/repositories/local/academic/data.ts`.
