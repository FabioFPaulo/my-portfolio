# Instruções e Regras para Agentes de IA (`AGENTS.md`)

Este repositório contém o código-fonte do portfólio pessoal de **Fábio Paulo**, construído com **React 18**, **TypeScript**, **Vite**, **Tailwind CSS**, **Sass/SCSS** e **Framer Motion**.

---

## 1. Visão Geral e Princípios de Desenvolvimento

* **Stack Principal:** React 18 (SPA), TypeScript (strict mode), Vite 5.
* **Estilização Híbrida Atual:** Classes utilitárias Tailwind CSS combinadas com folhas de estilo Sass (`.scss`) locais via `@apply` e seletores aninhados.
* **Gestão de Estado:** React Context API nativo (`src/contexts/app/index.tsx`) com Hook customizado (`useApp`).
* **Animações e Interatividade:** `framer-motion` para animações baseadas em scroll (`useInView`, `useAnimation`) e `react-router` para roteamento SPA e navegação por âncoras `#<nome-section>` com rolagem suave.

---

## 2. Comandos Verificados

| Ação | Comando | Notas |
| :--- | :--- | :--- |
| **Instalação** | `yarn install` (ou `npm install`) | Utiliza `yarn.lock`. |
| **Desenvolvimento** | `npm run dev` | Inicia servidor Vite local (`localhost:5173`). |
| **Compilação / Build** | `npm run build` | Executa `tsc` seguido de `vite build` gerando `/dist`. |
| **Pré-visualização** | `npm run preview` | Serve os ficheiros estáticos de `/dist`. |
| **Linter** | `npm run lint` | ESLint com zero tolerância a warnings (`--max-warnings 0`). |
| **Testes Unitários** | `npm test` | Executa Jest com `ts-jest` e `testing-library`. *(Atenção: Jest tem issues conhecidos de alias `@/` em algumas suites legadas)*. |

---

## 3. Padrões de Código e Convenções

1. **Estrutura de Componentes:**
   * Cada componente ou secção reside na sua própria pasta:
     ```text
     src/components/<nome>/
       ├── index.tsx       # Componente principal
       ├── index.scss      # Estilos dedicados (quando aplicável)
       ├── types.ts        # Interfaces e tipos TypeScript exclusivos
       ├── utils.ts        # Dados estáticos ou funções utilitárias
       └── index.spec.tsx  # Testes unitários (Jest / RTL)
     ```
2. **Aliases de Importação:**
   * `@/` mapeia para `src/`
   * `@components/*` mapeia para `src/components/*`
   * `@assets/*` mapeia para `src/assets/*`
   * **Regra:** Sempre usar imports relativos ou os aliases configurados no `vite.config.ts` e `tsconfig.json`.
3. **TypeScript:**
   * Não usar `any`. Sempre definir interfaces em `types.ts` correspondentes.
   * Respeitar tipos das propriedades e contratos existentes.
4. **Tratamento de Assets e Imagens:**
   * A aplicação está configurada com base path para GitHub Pages: `base: "/my-portfolio/"`.
   * Assets dinâmicos devem respeitar `${import.meta.env.BASE_URL}` para não quebrar links em produção.
   * Imagens na pasta `/public/` devem ser referenciadas considerando o base path.
5. **Pré-carregamento de Imagens:**
   * O `AppProvider` monitoriza o carregamento de imagens através do evento `onLoad={app.incrementImages}`. Se adicionares ou removeres imagens críticas com esse listener, o parâmetro `totalImages` no `App.tsx` **tem de ser atualizado** para não travar o ecrã no estado de Loading infinito.

---

## 4. Guardrails Estritos: O que o Agente NÃO MEXE (Zonas Protegidas)

> [!CAUTION]
> As seguintes regras devem ser respeitadas estritamente por qualquer agente automatizado:

1. **Dados Biográficos Pessoais:**
   * Não alterar informações em `src/sections/banner/utils.ts` (nome, contacto, email, datas, endereço) sem autorização e instruções explícitas do utilizador.
2. **Histórico Académico e Profissional Real:**
   * Não inventar ou alterar dados de empresas, datas e certificações em `src/sections/experiences/utils.ts` e `src/sections/academic/utils.ts`.
3. **Ficheiros e Assets Estáticos Pessoais:**
   * Não apagar nem sobrescrever sem pedido expresso:
     * `public/files/cv.pdf` (Currículo)
     * `public/images/person_*.png` (Fotos de perfil)
     * Logos em `public/images/` (`cedri_logo.png`, `ipb_logo.png`, etc.)
4. **Configurações de Deploy e Git:**
   * Não alterar workflows em `.github/` nem ficheiros de deploy sem validação.
   * Não fazer commits diretos para o branch principal sem aprovação do utilizador.
5. **Dependências:**
   * Não adicionar pacotes desnecessários sem justificação. Privilegiar a modernização das dependências existentes ou substituição de bibliotecas abandonadas.

---

## 5. Boas Práticas ao Propor Melhorias

* Antes de commitar alterações, executar `npm run build` e garantir que não há erros de tipagem.
* Se modificar testes unitários, certificar-se de que os testes passam ou documentar a incompatibilidade com o runner antigo.
* Toda a nova funcionalidade deve respeitar a responsividade (Mobile, Tablet, Desktop) existente.
