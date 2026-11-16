# ADR 012: Implementação de Sistema de SEO Tags, Social Sharing e Dados Estruturados

* **Status:** Aceite
* **Data:** 2026-11-16
* **Decisores:** Utilizador & Antigravity (Agente de IA)
* **Contexto Técnico:** Portfólio pessoal (React 19, Vite, GitHub Pages em `https://fabiofpaulo.github.io/my-portfolio/`)

---

## 1. Contexto e Problema

O portfólio possuía apenas um título genérico e nenhuma meta tag de descrição, keywords, canonical URL, Open Graph ou Twitter Cards no `index.html`.
Além disso, não existiam dados estruturados (Schema.org JSON-LD), `sitemap.xml`, `robots.txt` nem ficheiro `llms.txt`, limitando a descoberta orgânica nos motores de busca (Google, Bing), a pré-visualização em redes sociais (LinkedIn, WhatsApp, X) e a citação em motores de pesquisa de inteligência artificial (Perplexity, ChatGPT, Claude).

---

## 2. Decisão

Decidiu-se adotar um sistema unificado e canónico de SEO seguindo os princípios de *Single Source of Truth* (SSoT):

1. **Constantes Centrais (`src/constants/seo.ts`):**
   * Configuração única do domínio canónico: `https://fabiofpaulo.github.io/my-portfolio/`.
   * Definição de títulos, descrições em português/inglês, palavras-chave tecnológicas e dados de autor.
2. **Metadados Estáticos Completos (`index.html`):**
   * Meta tags primárias (title, description, keywords, author, robots, canonical).
   * Open Graph tags (`og:type`, `og:title`, `og:image`, `og:url`, `og:locale`).
   * Twitter / X Cards (`summary_large_image`, `twitter:image`).
3. **Injeção Dinâmica Reativa (`HeadSEO.tsx`):**
   * Sincronização dinâmica do `<title>` com base na secção ativa (ex.: *"Projetos Pessoais | Fábio Paulo"*).
   * Atualização dinâmica da tag `<link rel="canonical">` conforme a âncora `#<nome-section>`.
   * Injeção do grafo Schema.org JSON-LD contendo `Person`, `WebSite` e `ProfilePage`.
4. **Descoberta & Motores de IA:**
   * `public/robots.txt`: Regras de rastreio e referência ao sitemap.
   * `public/sitemap.xml`: Mapeamento das âncoras e secções com pesos de relevância.
   * `public/llms.txt`: Ficheiro padronizado de Generative Engine Optimization (GEO) com sumário estruturado de competências, graus académicos e projetos para LLMs.

---

## 3. Consequências

* **Indexação Orgânica de Alta Fidelidade:** Os motores de pesquisa indexam a identidade profissional completa de Fábio Paulo.
* **Previsualizações Atraentes:** Links partilhados no LinkedIn, WhatsApp, X e Slack exibem uma imagem destacada, título e descrição profissional.
* **Knowledge Graph:** O JSON-LD estruturado estabelece ligações formais com o IPB, CEDRI e GitHub.
