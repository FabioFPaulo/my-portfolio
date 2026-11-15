# ADR 002: Adoção do Padrão Repository Local para Dados Dinâmicos (`src/repositories/local`)

* **Status:** Aceite
* **Data:** 2026-11-15
* **Decisores:** Utilizador & Antigravity (Agente de IA)
* **Contexto Técnico:** Gestão de conteúdos biográficos e informações profissionais sujeitas a alterações periódicas (ex.: bio do CV, experiências, destaques).

---

## 1. Contexto e Problema

Anteriormente, o portfólio continha dados textuais e biográficos espalhados em ficheiros `utils.ts` locais dentro de cada secção (`src/sections/*/utils.ts`).
Essa abordagem apresentava limitações:
1. **Acoplamento Forte:** A camada de apresentação (componentes React) estava acoplada à estrutura interna de dados estáticos.
2. **Dificuldade de Manutenção:** Para atualizar a biografia, formação ou projetos, era necessário navegar e editar múltiplos ficheiros de componentes UI.
3. **Falta de Abstração para Fontes Externas:** No futuro, caso o utilizador pretenda carregar dados a partir de uma API, GitHub GraphQL, JSON remoto ou Headless CMS, seria necessário refatorar os componentes visuais.

---

## 2. Decisão

Decidiu-se introduzir a camada **Repository Pattern** em `src/repositories/local/`:

```text
src/repositories/
├── local/
│   ├── about/
│   │   ├── types.ts          # Contratos TypeScript da entidade
│   │   ├── data.ts           # Dados extraídos do CV-Europass.pdf
│   │   ├── repository.ts     # Implementação concreta LocalAboutRepository
│   │   └── index.ts          # Barrel export do módulo about
│   └── index.ts              # Ponto de entrada de todos os repositórios locais
```

* **Fonte de Verdade:** Os dados do "About Me" foram extraídos fielmente do documento oficial [docs/files/CV-Europass.pdf](file:///mnt/workstation/repositories/github/my-portfolio/docs/files/CV-Europass.pdf).
* **Interface `IAboutRepository`:** Define o método `getAboutData(): IAboutData`.
* **Desacoplamento:** O componente `AboutSection` consome apenas a interface do repositório, garantindo total isolamento da lógica de obtenção de dados.

---

## 3. Consequências

### Positivas:
* **Manutenção Centralizada:** Para atualizar textos do About Me ou competências, basta alterar [src/repositories/local/about/data.ts](file:///mnt/workstation/repositories/github/my-portfolio/src/repositories/local/about/data.ts).
* **Tipagem Estrita:** Interfaces bem definidas evitam erros em tempo de compilação.
* **Preparação para o Futuro:** Se mais tarde for adicionado um `RemoteAboutRepository` que consome uma API REST ou ficheiro markdown, a interface permanece idêntica e a UI não sofre qualquer alteração.

### Trade-offs:
* Pequeno acréscimo de ficheiros em `src/repositories/local/`, amplamente compensado pelo ganho em organização e escalabilidade.
