# Tecnologias e Dependências (`docs/tech-stack.md`)

Este documento detalha o conjunto tecnológico utilizado no projeto, o papel de cada biblioteca, ferramentas de compilação, scripts disponíveis e análise da dívida técnica das dependências.

---

## 1. Núcleo da Aplicação (Core)

| Tecnologia | Versão | Função / Utilização |
| :--- | :--- | :--- |
| **React** | `^18.2.0` | Biblioteca base para renderização de interface baseada em componentes funcionais e hooks. |
| **React DOM** | `^18.2.0` | Ponto de montagem no DOM (`src/main.tsx`). |
| **TypeScript** | `^5.2.2` | Tipagem estática em modo estrito, garantindo consistência em contratos e props. |
| **Vite** | `^5.1.0` | Ferramenta de build moderna e servidor de desenvolvimento com Hot Module Replacement (HMR). |

---

## 2. Bibliotecas de Interface e Animação

| Biblioteca | Versão | Função / Utilização |
| :--- | :--- | :--- |
| **Framer Motion** | `^11.2.12` | Controla animações ao rolar a página (`useInView`, `useAnimation`), transições de entrada de cards, navbar móvel e loader. |
| **React Scroll** | `^1.9.0` | Gestão de links âncora com rolagem suave (`smooth`, `spy`, `offset`) para secções (`#home`, `#academic-education`, etc.). |
| **React Circular Progressbar** | `^2.1.0` | Indicadores visuais circulares de proficiência técnica na secção de linguagens/tecnologias. |

---

## 3. Estilização e CSS

| Ferramenta | Versão | Função / Utilização |
| :--- | :--- | :--- |
| **Tailwind CSS** | `^3.4.1` | Framework CSS utilitário para layout, espaçamentos, flexbox, grid e responsividade. |
| **PostCSS** / **Autoprefixer** | `^8.4.35` / `^10.4.17` | Processador de CSS e inclusão automática de prefixos de navegadores. |
| **Sass (SCSS)** | `^1.70.0` | Pré-processador utilizado para regras de estilo aninhadas e classes customizadas por componente. |

> **Nota Arquitetural:** O projeto utiliza uma abordagem híbrida de estilos: combina ficheiros `.scss` com a diretiva `@apply` do Tailwind e CSS puro com seletores BEM simplificados.

---

## 4. Testes e Qualidade de Código

| Ferramenta | Versão | Função / Utilização |
| :--- | :--- | :--- |
| **Jest** | `^29.7.0` | Test runner e asserções unitárias. |
| **ts-jest** | `^29.1.2` | Suporte TypeScript para execução dos testes Jest. |
| **Testing Library (React / DOM)** | `^14.2.1` / `^6.4.2` | Renderização e teste de componentes a partir da perspetiva do utilizador. |
| **ESLint** | `^8.56.0` | Verificação estática de regras e hooks do React. |

---

## 5. Ferramentas de Configuração e Build

* **`vite.config.ts`**:
  * `base: "/my-portfolio/"` (específico para alojamento em subdiretório, como GitHub Pages).
  * `@vitejs/plugin-react` para transformação rápida de JSX.
  * `vite-tsconfig-paths` para resolução de caminhos configurados no `tsconfig.json`.
  * Configuração de aliases: `@` -> `./src/`, `@components/*` -> `./src/components/`, `@assets/*` -> `./src/assets/`.
* **`tsconfig.json`**:
  * Target `ES2020`, módulo `ESNext`, `jsx: "react-jsx"`, `strict: true`, `noUnusedLocals: true`.

---

## 6. Dívida Técnica Identificada & Oportunidades de Atualização

1. **Configuração de Testes Desalinhada com o Vite:**
   * O projeto usa **Vite** para desenvolvimento/build, mas usa **Jest** para testes. Isso causa incompatibilidade na resolução de aliases de caminhos (`@/`) e suporte a ESM sem configurações adicionais.
   * *Recomendação:* Migrar para **Vitest**, que partilha a mesma configuração do `vite.config.ts` nativamente.
2. **ESLint 8 vs ESLint 9:**
   * Utiliza a configuração `.eslintrc.cjs` da versão 8, já em processo de descontinuação em favor do *Flat Config* (`eslint.config.js`).
3. **Dependência Híbrida de SCSS + Tailwind:**
   * Muitas classes nos ficheiros `.scss` limitam-se a encapsular `@apply` do Tailwind.
   * *Recomendação:* Consolidar para Tailwind CSS 3/4 nativo ou componentes com variantes (ex: CVA / clsx / tailwind-merge) para eliminar o pré-processamento Sass.
