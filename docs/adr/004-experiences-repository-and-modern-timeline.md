# ADR 004: Repositório de Experiências e Timeline Interativa com Glassmorphism

* **Status:** Aceite
* **Data:** 2026-11-15
* **Decisores:** Utilizador & Antigravity (Agente de IA)
* **Contexto Técnico:** Secção "Experiences" ([src/sections/experiences/](file:///mnt/workstation/repositories/github/my-portfolio/src/sections/experiences/)) e componente de cartões ([src/components/card/experience/](file:///mnt/workstation/repositories/github/my-portfolio/src/components/card/experience/)).

---

## 1. Contexto e Problema

A secção de experiências anterior continha apenas dois registos genéricos (estágio de 2022 e bolsa de 2022/2023), omitindo projetos complexos de engenharia recentemente concluídos e em curso (como o **VIMOS Project com 3D e LSTM no browser**, o **Thermalconf IoT** e o **Swopi Screen Sharing com WebRTC e Electron**), todos documentados no [docs/files/CV-Europass.pdf](file:///mnt/workstation/repositories/github/my-portfolio/docs/files/CV-Europass.pdf).

Além disso:
1. **Layout Plano e Monótono:** A UI antiga era uma lista simples com bordas superiores sólidas, sem hierarquia visual clara, sem tags de tecnologias e sem senso de progressão na carreira.
2. **Falta de Desacoplamento:** Os dados estavam gravados num ficheiro `utils.ts` local com caracteres de tabulação literais (`\t`).

---

## 2. Decisão

1. **Expansão do Padrão Repository:**
   * Criação de `src/repositories/local/experiences/` com contratos `IExperienceItem` e `IExperiencesRepository`.
   * Registo dos 6 cargos profissionais reais e suas respetivas stacks tecnológicas (Babylon.js, Web Workers, MQTT, Ktor, WebRTC, Docker, etc.).
2. **Design em Timeline Contínua (*Interactive Glass Timeline*):**
   * Introdução de uma linha vertical com nós circulares luminosos e efeito de pulso verde na posição atual (`Current`).
   * Cada experiência é renderizada num cartão de vidro escuro (`bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm`).
   * Inclusão de **Tags de Tecnologias (*Tech Stack Pills*)** em cada cartão para rápida avaliação por recrutadores técnicos.
   * Texto biográfico justificado com tipografia refinada (`text-justify`).

---

## 3. Consequências

* **Riqueza Técnica Visível:** O portfólio passa a evidenciar competências avançadas em Web3D, IoT, Redes Neuronais no browser e arquitetura de sistemas.
* **Experiência de Leitura Superior:** A estrutura em linha do tempo cria uma narrativa clara de evolução profissional.
* **Manutenibilidade:** Qualquer nova experiência pode ser adicionada ou alterada em `src/repositories/local/experiences/data.ts`.
