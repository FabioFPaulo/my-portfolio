# ADR 010: Secção Publications com Padrão Repository e Vitrina de Artigos Científicos

## Status
Aceite

## Contexto
O currículo Europass (`docs/files/CV-Europass.pdf`) contém a secção **PUBLICATIONS**, detalhando a produção científica de Fábio Paulo com 4 publicações em conferências e simpósios internacionais indexados:
1. **[2026]** *"Real-Time HCI: Solving the Web Latency Problem"* (17th International Symposium on Ambient Intelligence - AmI 2026).
2. **[2025]** *"Intelligent Climate Control in University Residences for Temporary Guests"* (9th International Conference on Smart City Applications - SCA 2024 / Springer Lecture Notes in Networks and Systems, Vol. 1310).
3. **[2025]** *"RFID-Based Smart Climate Control in Student Residences: A Personalized and Energy-Efficient Approach"* (11th International Conference on Engineering and Emerging Technologies - ICEET 2025).
4. **[2024]** *"Enhancing Video Projector Connectivity and Management with a Low-Cost Solution"* (10th International Conference on Engineering and Emerging Technologies - ICEET 2024 / IEEE Xplore).

Requisitos fundamentais:
1. Isolar todas as publicações na camada de repositório local (`src/repositories/local/publications/`), garantindo desacoplamento entre dados e apresentação.
2. Posicionar a nova secção diretamente a seguir a **"Technical Skills"** (`LanguagesSection`).
3. Manter a harmonia cromática alternada (`colorScheme="color-1"` e `"color-2"`), texto justificado (`text-justify`) e navegação suave via navbar.
4. Fornecer uma funcionalidade ergonómica de citação académica ("Copiar Citação").

## Decisões

1. **Camada de Repositório (`LocalPublicationsRepository`):**
   - Criada a pasta `src/repositories/local/publications/` com:
     - `types.ts`: Interface `IPublicationItem` (id, ano, título, lista de autores, conferência/simpósio, acrónimo, status, editora/indexação, detalhes bibliográficos, link, abstract/descrição, tópicos) e contrato `IPublicationsRepository`.
     - `data.ts`: Coleção com as 4 publicações científicas extraídas do CV Europass com metadados bibliográficos completos.
     - `repository.ts`: Classe `LocalPublicationsRepository` e exportação singleton `publicationsRepository`.
     - `index.ts`: Barrel export integrado em `src/repositories/index.ts`.

2. **Componente de Apresentação `PublicationsSection`:**
   - Criado em `src/sections/publications/`:
     - `index.tsx`: Renderiza cartões independentes em *Dark Glassmorphism* com animações de cascata (`staggerChildren`), badges de ano, acrónimo, editora (Springer / IEEE), lista de autores com destaque automático para o autor principal, caixa de citação bibliográfica, resumo justificado e tags de investigação.
     - Botão interativo de **"Copiar Citação"** formatada com feedback visual temporizado ("Citação Copiada!").
     - Botão de ligação oficial para websites de conferências e anais.
     - `index.css`: Estilização nativa com Tailwind CSS v4 (`@reference "../../index.css"`).

3. **Posicionamento e Ritmo de Cores:**
   - Inserida a secção no `src/App.tsx` logo após `LanguagesSection` ("Technical Skills").
   - Sequência cromática das secções finais:
     - `ConferencesSection`: `color-2`
     - `CertificationsSection`: `color-1`
     - `LanguagesSection` (Technical Skills): `color-2`
     - `PublicationsSection`: `color-1`
     - `FooterSection`: `color-2`
   - Adicionada a âncora `"publications"` em `src/components/navbar/utils.ts` imediatamente a seguir a `"skills"`.

## Consequências
- A produção científica do autor ganha uma presença centralizada, elegante e facilmente referenciável no portfólio.
- Facilidade em adicionar futuros artigos ou atualizar estados de indexação apenas editando `data.ts`.
- Zero regressões em tipagem e conformidade rigorosa com ESLint 10.
